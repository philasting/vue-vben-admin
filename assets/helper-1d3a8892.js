import{i as u}from"./index.js";import{i as s}from"./isNumber-f0336cfd.js";const{t:r}=u();function p(e){return e.includes("Input")||e.includes("Complete")?r("common.inputText"):e.includes("Picker")||e.includes("Select")||e.includes("Cascader")||e.includes("Checkbox")||e.includes("Radio")||e.includes("Switch")?r("common.chooseText"):""}const c=["DatePicker","MonthPicker","WeekPicker","TimePicker"];function n(){return[...c,"RangePicker"]}function l(e,i,t){Reflect.has(e,"type")||(["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(i)?e.type=t?"string":"object":["RangePicker","Upload","CheckboxGroup","TimePicker"].includes(i)?e.type="array":["InputNumber"].includes(i)&&(e.type="number"))}const a=["Input","InputPassword","InputNumber","InputSearch","InputTextArea"];function f(e,i){return e&&a.includes(e)&&i&&s(i)?`${i}`:i}const T=n(),k=["Upload","ApiTransfer","ApiTree","ApiTreeSelect","ApiRadioGroup","ApiCascader","AutoComplete","RadioButtonGroup","ImageUpload","ApiSelect"];export{k as N,a,p as c,T as d,f as h,l as s};
