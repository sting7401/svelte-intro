import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/index.js";
import { register } from "swiper/element/bundle";
import { D as Day, B as Button } from "../../chunks/Day.js";
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { subTitle } = $$props;
  let { align } = $$props;
  let { customSlot = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.customSlot === void 0 && $$bindings.customSlot && customSlot !== void 0)
    $$bindings.customSlot(customSlot);
  return `<div${add_attribute("class", align, 0)}>${customSlot === true ? `${slots.default ? slots.default({}) : ``}` : `<h2 class="${"text-base font-light text-white"}">${escape(title)}</h2>
		<p class="${"text-6xl font-bold text-white "}">${escape(subTitle)}</p>`}</div>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  let { align = "" } = $$props;
  let { className = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<section class="${"w-full " + escape(className, true)}"><div class="${"flex flex-col justify-center items-center h-full"}">${validate_component(Title, "Title").$$render($$result, { title, subTitle, align }, {}, {})}
		${slots.default ? slots.default({}) : ``}</div></section>`;
});
const spaceBetween = 20;
const slideSpeed = 600;
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spaceImgs } = $$props;
  register();
  if ($$props.spaceImgs === void 0 && $$bindings.spaceImgs && spaceImgs !== void 0)
    $$bindings.spaceImgs(spaceImgs);
  return `<div class="${"w-full overflow-hidden"}"><swiper-container class="${"w-full mt-8"}" ${"autoplay"}${add_attribute("slides-per-view", "auto", 0)}${add_attribute("space-between", spaceBetween, 0)}${add_attribute("centered-slides", false, 0)}${add_attribute("speed", slideSpeed, 0)} loop="${"true"}" free-mode="${"false"}">${each(spaceImgs, (spaceImg) => {
    return `<swiper-slide class="${"w-2/5 overflow-hidden rounded-3xl"}"><img${add_attribute("src", spaceImg, 0)} alt="${""}" class="${"w-full"}" loading="${"lazy"}">
			</swiper-slide>`;
  })}</swiper-container></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const contents = [
    {
      title: "새로운 현실로",
      subTitle: "READY TO ACTION",
      align: "text-left px-20"
    },
    {
      title: "현실 공간에 만들어진 새로운 공간",
      subTitle: "READY TO SPACE",
      align: "flex flex-col w-full px-40 text-right"
    },
    {
      title: "내가 경험할 새로운 현실",
      subTitle: "READY TO METAVERSE",
      align: "flex flex-col w-full px-40 text-left"
    },
    {
      title: "PARTNERSHIP",
      subTitle: "우리는 문화, 축제, 놀이, 쇼핑 등 모든 공간을 지원합니다.",
      align: "text-center",
      button: "협업 문의하기"
    },
    {
      title: "현실의 한계를 넘어 상상을 현실로",
      align: "text-center"
    },
    {
      title: "PARTNERSHIP",
      subTitle: "우리는 문화, 축제, 놀이, 쇼핑 등 모든 공간을 지원합니다.",
      align: "text-center"
    }
  ];
  const spaceImgs = [
    [
      "https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__180.jpg",
      "https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__180.jpg",
      "https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__180.jpg",
      "https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__180.jpg"
    ],
    [
      "https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__180.jpg",
      "https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__180.jpg",
      "https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__180.jpg",
      "https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__180.jpg"
    ]
  ];
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "h-screen",
      title: contents[0].title,
      subTitle: contents[0].subTitle,
      align: contents[0].align
    },
    {},
    {
      default: () => {
        return `<p class="${"text-base text-white underline"}">${validate_component(Day, "Day").$$render($$result, {}, {}, {})}</p>`;
      }
    }
  )}
${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "py-28",
      title: contents[1].title,
      subTitle: contents[1].subTitle,
      align: contents[1].align
    },
    {},
    {
      default: () => {
        return `${validate_component(Slider, "Slider").$$render($$result, { spaceImgs: spaceImgs[0] }, {}, {})}`;
      }
    }
  )}
${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "py-28",
      title: contents[2].title,
      subTitle: contents[2].subTitle,
      align: contents[2].align
    },
    {},
    {
      default: () => {
        return `${validate_component(Slider, "Slider").$$render($$result, { spaceImgs: spaceImgs[1] }, {}, {})}`;
      }
    }
  )}
${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "py-28",
      align: contents[3].align
    },
    {},
    {
      default: () => {
        return `<h2 class="${"text-5xl font-bold text-white"}">${escape(contents[3].title)}</h2>
	<p class="${"text-xl font-light text-white mt-5"}">${escape(contents[3].subTitle)}</p>
	<div class="${"flex flex-center items-center mt-8"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            className: "btn-info rounded-full w-52",
            iconView: false
          },
          {},
          {
            default: () => {
              return `<span class="${"text-white"}">${escape(contents[3].button)}</span>`;
            }
          }
        )}</div>`;
      }
    }
  )}
${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "py-28",
      align: contents[4].align
    },
    {},
    {
      default: () => {
        return `<h2 class="${"text-5xl font-bold text-white"}">${escape(contents[4].title)}</h2>
	<div class="${"flex flex-center items-center mt-8"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            className: "btn-info rounded-full w-52",
            iconView: false
          },
          {},
          {
            default: () => {
              return `${validate_component(Day, "Day").$$render($$result, {}, {}, {})}`;
            }
          }
        )}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
