import { useEventListener, useTimeoutFn } from '@vben/hooks';
import { tryOnUnmounted, useDebounceFn } from '@vueuse/core';
import type { EChartsOption } from 'echarts';
import type { Ref } from 'vue';
import { computed, nextTick, ref, unref, watch } from 'vue';

import { useMenuSetting } from '@/hooks/setting/useMenuSetting';
import { useRootSetting } from '@/hooks/setting/useRootSetting';
import echarts from '@/utils/lib/echarts';

export function useECharts(
  elRef: Ref<HTMLDivElement>,
  theme: 'light' | 'dark' | 'default' = 'default',
) {
  const { getDarkMode: getSysDarkMode } = useRootSetting();
  const { getCollapsed } = useMenuSetting();

  const getDarkMode = computed(() => {
    return theme === 'default' ? getSysDarkMode.value : theme;
  });
  let chartInstance: echarts.ECharts | null = null;
  let resizeFn: Fn = resize;
  const cacheOptions = ref({}) as Ref<EChartsOption>;
  let removeResizeFn: Fn = () => {};

  resizeFn = useDebounceFn(resize, 200);

  const getOptions = computed(() => {
    if (getDarkMode.value !== 'dark') {
      return cacheOptions.value as EChartsOption;
    }
    return {
      backgroundColor: 'transparent',
      ...cacheOptions.value,
    } as EChartsOption;
  });

  function initCharts(t = theme) {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }

    chartInstance = echarts.init(el, t);

    const cleanup = useEventListener(window, 'resize', resizeFn);

    removeResizeFn = cleanup;
    // TODO: 自适应
  }

  function setOptions(options: EChartsOption, clear = true) {
    cacheOptions.value = options;
    return new Promise((resolve) => {
      if (unref(elRef)?.offsetHeight === 0) {
        useTimeoutFn(() => {
          setOptions(unref(getOptions));
          resolve(null);
        }, 30);
      }
      nextTick(() => {
        useTimeoutFn(() => {
          if (!chartInstance) {
            initCharts(getDarkMode.value as 'default');

            if (!chartInstance) return;
          }
          clear && chartInstance?.clear();

          chartInstance?.setOption(unref(getOptions));
          resolve(null);
        }, 30);
      });
    });
  }

  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn',
      },
    });
  }

  watch(
    () => getDarkMode.value,
    (theme) => {
      if (chartInstance) {
        chartInstance.dispose();
        initCharts(theme as 'default');
        setOptions(cacheOptions.value);
      }
    },
  );

  watch(getCollapsed, (_) => {
    useTimeoutFn(() => {
      resizeFn();
    }, 300);
  });

  tryOnUnmounted(() => {
    if (!chartInstance) return;
    removeResizeFn();
    chartInstance.dispose();
    chartInstance = null;
  });

  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      initCharts(getDarkMode.value as 'default');
    }
    return chartInstance;
  }

  return {
    setOptions,
    resize,
    echarts,
    getInstance,
  };
}
