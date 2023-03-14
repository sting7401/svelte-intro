import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { B as Button, D as Day } from "../../chunks/Day.js";
const app = "";
let headerButtonClassName = "btn-outline btn-info rounded-full";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"flex justify-between w-screen fixed top-0 left-0 p-8"}"><p><img src="${""}" alt="${"rta"}"></p>
	${validate_component(Button, "Button").$$render(
    $$result,
    {
      className: headerButtonClassName,
      iconView: false
    },
    {},
    {
      default: () => {
        return `${validate_component(Day, "Day").$$render($$result, {}, {}, {})}`;
      }
    }
  )}
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"min-w-full min-h-full bg-black"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
