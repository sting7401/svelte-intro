import { c as create_ssr_component, e as escape } from "./index.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textValue;
  let { text = false } = $$props;
  let { className } = $$props;
  let { iconView = false } = $$props;
  let { iconName = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.iconView === void 0 && $$bindings.iconView && iconView !== void 0)
    $$bindings.iconView(iconView);
  if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0)
    $$bindings.iconName(iconName);
  textValue = text ? `${text}` : "";
  return `<button type="${"button"}" class="${"btn " + escape(className, true)}">${iconView ? `<i class="${"icon " + escape(iconName, true)}"></i>` : ``}
	${text ? `<span class="${"text-base text-white"}">${escape(textValue)}</span>` : ``}
	${slots.default ? slots.default({}) : ``}</button>`;
});
const Day = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="${"text-white"}">새로운 현실까지</span>
<span class="${"text-warning ml-2"}">D-159</span>`;
});
export {
  Button as B,
  Day as D
};
