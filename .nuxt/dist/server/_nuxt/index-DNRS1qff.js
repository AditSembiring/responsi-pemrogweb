import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _imports_0$2 = "" + __buildAssetsURL("logo_adit.D19Ncplc.png");
const _sfc_main$8 = {
  name: "Header",
  methods: {
    scrollToSection(sectionId) {
      const section = (void 0).getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-a49c0a9f><div class="container" data-v-a49c0a9f><div class="logo" data-v-a49c0a9f><img${ssrRenderAttr("src", _imports_0$2)} alt="Logo" data-v-a49c0a9f></div><nav class="nav" data-v-a49c0a9f><ul data-v-a49c0a9f><li data-v-a49c0a9f><a href="#home" data-v-a49c0a9f>Home</a></li><li data-v-a49c0a9f><a href="#about" data-v-a49c0a9f>About</a></li><li data-v-a49c0a9f><a href="#services" data-v-a49c0a9f>Services</a></li><li data-v-a49c0a9f><a href="#portfolio" data-v-a49c0a9f>Portfolio</a></li><li data-v-a49c0a9f><a href="#testimonials" data-v-a49c0a9f>Testimonials</a></li><li data-v-a49c0a9f><a href="#contact" data-v-a49c0a9f>Contact</a></li></ul></nav></div></header>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-a49c0a9f"]]);
const _sfc_main$7 = {
  name: "HeroSection"
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "home",
    class: "hero"
  }, _attrs))} data-v-39b6be85><div class="container" data-v-39b6be85><div class="hero-content" data-v-39b6be85><h1 data-v-39b6be85>-ˏˋ⋆ ᴡ ᴇ ʟ ᴄ ᴏ ᴍ ᴇ ⋆ˊˎ-</h1><p data-v-39b6be85>Website Personal Adit.</p><p data-v-39b6be85>☝️🤓 erm actually</p><a href="#contact" class="btn" data-v-39b6be85>Hubungi Saya</a></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-39b6be85"]]);
const _imports_0$1 = "" + __buildAssetsURL("picture_wak.BVd_tNhX.png");
const _sfc_main$6 = {
  name: "About"
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "about"
  }, _attrs))} data-v-c12e848f><div class="container" data-v-c12e848f><div class="about-content" data-v-c12e848f><div class="about-text" data-v-c12e848f><h2 data-v-c12e848f>Tentang Saya</h2><p data-v-c12e848f>Nama Saya Adit Pratama Sembiring</p><p data-v-c12e848f>Seorang Mahasiswa Amikom Yogyakarta yang memiliki hobi dalam industri kreatif seperti desain grafis, model 3d, serta digital art.</p><a href="#contact" class="btn" data-v-c12e848f>Hubungi Saya</a></div><div class="about-image" data-v-c12e848f><img${ssrRenderAttr("src", _imports_0$1)} alt="About Image" data-v-c12e848f></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-c12e848f"]]);
const _sfc_main$5 = {
  name: "Services"
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "services",
    class: "services"
  }, _attrs))} data-v-57fcc85f><div class="container" data-v-57fcc85f><h2 data-v-57fcc85f>My Service</h2><div class="services-grid" data-v-57fcc85f><div class="service-item" data-v-57fcc85f><i class="fas fa-laptop-code" data-v-57fcc85f></i><h3 data-v-57fcc85f>Graphic Design</h3><p data-v-57fcc85f>I can create an eye-catching design for you.</p></div><div class="service-item" data-v-57fcc85f><i class="fas fa-mobile-alt" data-v-57fcc85f></i><h3 data-v-57fcc85f>Photo Manipulation</h3><p data-v-57fcc85f>Manipulating photos to meet your needs.</p></div><div class="service-item" data-v-57fcc85f><i class="fas fa-chart-line" data-v-57fcc85f></i><h3 data-v-57fcc85f>Digital Art</h3><p data-v-57fcc85f>Creating digital art according to your concept.</p></div><div class="service-item" data-v-57fcc85f><i class="fas fa-database" data-v-57fcc85f></i><h3 data-v-57fcc85f>3D Modeling</h3><p data-v-57fcc85f>Creating the 3D models you need.</p></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-57fcc85f"]]);
const _imports_0 = "" + __buildAssetsURL("DigiArt episode 2.DAMi7p6e.png");
const _imports_1 = "" + __buildAssetsURL("- HBD Nazu 2023 -.CZSGtvOK.png");
const _imports_2 = "" + __buildAssetsURL("belum_kelar.gtHZ0pCg.png");
const _sfc_main$4 = {
  name: "Portfolio"
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "portfolio",
    class: "portfolio"
  }, _attrs))} data-v-e9c13cf8><div class="container" data-v-e9c13cf8><h2 data-v-e9c13cf8>Portofolio</h2><div class="portfolio-grid" data-v-e9c13cf8><div class="portfolio-item" data-v-e9c13cf8><img${ssrRenderAttr("src", _imports_0)} alt="Portfolio Item 1" data-v-e9c13cf8><div class="overlay" data-v-e9c13cf8><h3 data-v-e9c13cf8>&quot;Dark Forest&quot;</h3><p data-v-e9c13cf8>Digital Art</p></div></div><div class="portfolio-item" data-v-e9c13cf8><img${ssrRenderAttr("src", _imports_1)} alt="Portfolio Item 2" data-v-e9c13cf8><div class="overlay" data-v-e9c13cf8><h3 data-v-e9c13cf8>&quot;Prisoner&quot;</h3><p data-v-e9c13cf8>Digital Art.</p></div></div><div class="portfolio-item" data-v-e9c13cf8><img${ssrRenderAttr("src", _imports_2)} alt="Portfolio Item 3" data-v-e9c13cf8><div class="overlay" data-v-e9c13cf8><h3 data-v-e9c13cf8>#Unfinished Art.</h3><p data-v-e9c13cf8>Coming Soon.</p></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e9c13cf8"]]);
const _sfc_main$3 = {
  name: "Testimonials"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "testimonials",
    class: "testimonials"
  }, _attrs))} data-v-5cc453e9><div class="container" data-v-5cc453e9><h2 data-v-5cc453e9>Testimonials</h2><div class="testimonial" data-v-5cc453e9><div class="testimonial-text" data-v-5cc453e9><p data-v-5cc453e9>&quot;it&#39;s actually so perfectly done as i asked for, and the quality is even better than i expected, i did not even have to revise once and it was already delivered perfectly. I will be coming back multiple times for sure! amazing service.&quot;</p><p class="author" data-v-5cc453e9>nocxde</p></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-5cc453e9"]]);
const _sfc_main$2 = {
  name: "Contact"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "contact"
  }, _attrs))} data-v-c8fc7059><div class="container" data-v-c8fc7059><h2 data-v-c8fc7059>Hubungi Saya</h2><p data-v-c8fc7059>Kalian bisa cari saya disosial media berikut :</p><div class="contact-links" data-v-c8fc7059><a href="https://www.instagram.com/evolve_artz/" target="_blank" rel="noopener noreferrer" data-v-c8fc7059><i class="fab fa-instagram" data-v-c8fc7059></i> Instagram </a><a href="https://github.com/AditSembiring" target="_blank" rel="noopener noreferrer" data-v-c8fc7059><i class="fab fa-github" data-v-c8fc7059></i> GitHub </a><a href="https://linktr.ee/evolveartz" target="_blank" rel="noopener noreferrer" data-v-c8fc7059><i class="fab fa-discord" data-v-c8fc7059></i> Linktree </a></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c8fc7059"]]);
const _sfc_main$1 = {
  name: "Footer"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-e62046e6><div class="container" data-v-e62046e6><div class="footer-top" data-v-e62046e6><div class="footer-logo" data-v-e62046e6><img${ssrRenderAttr("src", _imports_0$2)} alt="Footer Logo" data-v-e62046e6></div><div class="footer-social" data-v-e62046e6><a href="#" data-v-e62046e6><i class="fab fa-facebook-f" data-v-e62046e6></i></a><a href="#" data-v-e62046e6><i class="fab fa-twitter" data-v-e62046e6></i></a><a href="#" data-v-e62046e6><i class="fab fa-instagram" data-v-e62046e6></i></a><a href="#" data-v-e62046e6><i class="fab fa-linkedin-in" data-v-e62046e6></i></a></div></div><div class="footer-bottom" data-v-e62046e6><p data-v-e62046e6>© 2024 Adit Sembiring. All rights reserved.</p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e62046e6"]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    HeroSection: __nuxt_component_1,
    About: __nuxt_component_2,
    Services: __nuxt_component_3,
    Portfolio: __nuxt_component_4,
    Testimonials: __nuxt_component_5,
    Contact: __nuxt_component_6,
    Footer: __nuxt_component_7
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_HeroSection = __nuxt_component_1;
  const _component_About = __nuxt_component_2;
  const _component_Services = __nuxt_component_3;
  const _component_Portfolio = __nuxt_component_4;
  const _component_Testimonials = __nuxt_component_5;
  const _component_Contact = __nuxt_component_6;
  const _component_Footer = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(ssrRenderComponent(_component_Portfolio, null, null, _parent));
  _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DNRS1qff.js.map
