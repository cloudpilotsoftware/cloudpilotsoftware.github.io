import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d61dcd32 = () => interopDefault(import('..\\pages\\home-app-landing\\index.vue' /* webpackChunkName: "pages/home-app-landing/index" */))
const _7e4fea1f = () => interopDefault(import('..\\pages\\home-app-landing-onePage\\index.vue' /* webpackChunkName: "pages/home-app-landing-onePage/index" */))
const _c67b9060 = () => interopDefault(import('..\\pages\\home-cloud-hosting\\index.vue' /* webpackChunkName: "pages/home-cloud-hosting/index" */))
const _1173a67e = () => interopDefault(import('..\\pages\\home-crypto\\index.vue' /* webpackChunkName: "pages/home-crypto/index" */))
const _762cd56e = () => interopDefault(import('..\\pages\\home-cyber-security\\index.vue' /* webpackChunkName: "pages/home-cyber-security/index" */))
const _5efe1fb3 = () => interopDefault(import('..\\pages\\home-data-analysis\\index.vue' /* webpackChunkName: "pages/home-data-analysis/index" */))
const _5901ae88 = () => interopDefault(import('..\\pages\\home-digital-agency\\index.vue' /* webpackChunkName: "pages/home-digital-agency/index" */))
const _23cdce40 = () => interopDefault(import('..\\pages\\home-digital-agency-onePage\\index.vue' /* webpackChunkName: "pages/home-digital-agency-onePage/index" */))
const _060ab7e4 = () => interopDefault(import('..\\pages\\home-freelance-personal\\index.vue' /* webpackChunkName: "pages/home-freelance-personal/index" */))
const _43f49026 = () => interopDefault(import('..\\pages\\home-help-desk\\index.vue' /* webpackChunkName: "pages/home-help-desk/index" */))
const _30d8632a = () => interopDefault(import('..\\pages\\home-it-solutions\\index.vue' /* webpackChunkName: "pages/home-it-solutions/index" */))
const _92027e3c = () => interopDefault(import('..\\pages\\home-it-solutions-onePage\\index.vue' /* webpackChunkName: "pages/home-it-solutions-onePage/index" */))
const _17697f38 = () => interopDefault(import('..\\pages\\home-it-solutions2\\index.vue' /* webpackChunkName: "pages/home-it-solutions2/index" */))
const _13155f1c = () => interopDefault(import('..\\pages\\home-marketing-startup\\index.vue' /* webpackChunkName: "pages/home-marketing-startup/index" */))
const _427caa58 = () => interopDefault(import('..\\pages\\home-marketing-startup-onePage\\index.vue' /* webpackChunkName: "pages/home-marketing-startup-onePage/index" */))
const _3fe78e90 = () => interopDefault(import('..\\pages\\home-nft-marketplace\\index.vue' /* webpackChunkName: "pages/home-nft-marketplace/index" */))
const _6210e9bf = () => interopDefault(import('..\\pages\\home-payment-solutions\\index.vue' /* webpackChunkName: "pages/home-payment-solutions/index" */))
const _3d62e519 = () => interopDefault(import('..\\pages\\home-saas-technology\\index.vue' /* webpackChunkName: "pages/home-saas-technology/index" */))
const _fd48385e = () => interopDefault(import('..\\pages\\home-saas-technology-onePage\\index.vue' /* webpackChunkName: "pages/home-saas-technology-onePage/index" */))
const _4398651c = () => interopDefault(import('..\\pages\\home-shop-modern\\index.vue' /* webpackChunkName: "pages/home-shop-modern/index" */))
const _2acb536b = () => interopDefault(import('..\\pages\\home-software-company\\index.vue' /* webpackChunkName: "pages/home-software-company/index" */))
const _6c61e023 = () => interopDefault(import('..\\pages\\home-software-company-onePage\\index.vue' /* webpackChunkName: "pages/home-software-company-onePage/index" */))
const _24c9ae6c = () => interopDefault(import('..\\pages\\page-404\\index.vue' /* webpackChunkName: "pages/page-404/index" */))
const _ad2e5860 = () => interopDefault(import('..\\pages\\page-about-2\\index.vue' /* webpackChunkName: "pages/page-about-2/index" */))
const _7f047826 = () => interopDefault(import('..\\pages\\page-about-5\\index.vue' /* webpackChunkName: "pages/page-about-5/index" */))
const _9ca72efe = () => interopDefault(import('..\\pages\\page-about-app\\index.vue' /* webpackChunkName: "pages/page-about-app/index" */))
const _1b41fac8 = () => interopDefault(import('..\\pages\\page-blog-5\\index.vue' /* webpackChunkName: "pages/page-blog-5/index" */))
const _2d9c50ae = () => interopDefault(import('..\\pages\\page-blog-5-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-blog-5-left-sidebar/index" */))
const _0d96a568 = () => interopDefault(import('..\\pages\\page-blog-5-wide\\index.vue' /* webpackChunkName: "pages/page-blog-5-wide/index" */))
const _6c3e549c = () => interopDefault(import('..\\pages\\page-blog-app\\index.vue' /* webpackChunkName: "pages/page-blog-app/index" */))
const _38791655 = () => interopDefault(import('..\\pages\\page-blog-app-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-blog-app-left-sidebar/index" */))
const _2ecb57f8 = () => interopDefault(import('..\\pages\\page-blog-app-wide\\index.vue' /* webpackChunkName: "pages/page-blog-app-wide/index" */))
const _f23db602 = () => interopDefault(import('..\\pages\\page-career-details\\index.vue' /* webpackChunkName: "pages/page-career-details/index" */))
const _b35d0c76 = () => interopDefault(import('..\\pages\\page-careers-5\\index.vue' /* webpackChunkName: "pages/page-careers-5/index" */))
const _72667dd0 = () => interopDefault(import('..\\pages\\page-comming-soon-5\\index.vue' /* webpackChunkName: "pages/page-comming-soon-5/index" */))
const _b5eb378c = () => interopDefault(import('..\\pages\\page-contact-5\\index.vue' /* webpackChunkName: "pages/page-contact-5/index" */))
const _b4dbace4 = () => interopDefault(import('..\\pages\\page-contact-app\\index.vue' /* webpackChunkName: "pages/page-contact-app/index" */))
const _1bff4904 = () => interopDefault(import('..\\pages\\page-faq-5\\index.vue' /* webpackChunkName: "pages/page-faq-5/index" */))
const _3b1203dc = () => interopDefault(import('..\\pages\\page-portfolio-5\\index.vue' /* webpackChunkName: "pages/page-portfolio-5/index" */))
const _3a3fad66 = () => interopDefault(import('..\\pages\\page-portfolio-app\\index.vue' /* webpackChunkName: "pages/page-portfolio-app/index" */))
const _2a9ac3cb = () => interopDefault(import('..\\pages\\page-product-5\\index.vue' /* webpackChunkName: "pages/page-product-5/index" */))
const _0888e8df = () => interopDefault(import('..\\pages\\page-product-app\\index.vue' /* webpackChunkName: "pages/page-product-app/index" */))
const _4d97778c = () => interopDefault(import('..\\pages\\page-services-5\\index.vue' /* webpackChunkName: "pages/page-services-5/index" */))
const _5f27b060 = () => interopDefault(import('..\\pages\\page-services-app\\index.vue' /* webpackChunkName: "pages/page-services-app/index" */))
const _7a9c0392 = () => interopDefault(import('..\\pages\\page-services-details-5\\index.vue' /* webpackChunkName: "pages/page-services-details-5/index" */))
const _3de35018 = () => interopDefault(import('..\\pages\\page-shop-5\\index.vue' /* webpackChunkName: "pages/page-shop-5/index" */))
const _1f2fd270 = () => interopDefault(import('..\\pages\\page-shop-app\\index.vue' /* webpackChunkName: "pages/page-shop-app/index" */))
const _3e9652ad = () => interopDefault(import('..\\pages\\page-sign-in\\index.vue' /* webpackChunkName: "pages/page-sign-in/index" */))
const _105a3575 = () => interopDefault(import('..\\pages\\page-single-post-5\\index.vue' /* webpackChunkName: "pages/page-single-post-5/index" */))
const _44adc3c8 = () => interopDefault(import('..\\pages\\page-single-post-5-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-single-post-5-left-sidebar/index" */))
const _d931d282 = () => interopDefault(import('..\\pages\\page-single-post-5-wide\\index.vue' /* webpackChunkName: "pages/page-single-post-5-wide/index" */))
const _7c329809 = () => interopDefault(import('..\\pages\\page-single-post-app\\index.vue' /* webpackChunkName: "pages/page-single-post-app/index" */))
const _278ee7f0 = () => interopDefault(import('..\\pages\\page-single-post-app-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-single-post-app-left-sidebar/index" */))
const _060930ab = () => interopDefault(import('..\\pages\\page-single-post-app-wide\\index.vue' /* webpackChunkName: "pages/page-single-post-app-wide/index" */))
const _b568d1d4 = () => interopDefault(import('..\\pages\\page-single-project-5\\index.vue' /* webpackChunkName: "pages/page-single-project-5/index" */))
const _cb5bd52c = () => interopDefault(import('..\\pages\\page-single-project-app\\index.vue' /* webpackChunkName: "pages/page-single-project-app/index" */))
const _79f6033c = () => interopDefault(import('..\\pages\\rtl-home-app-landing-onePage\\index.vue' /* webpackChunkName: "pages/rtl-home-app-landing-onePage/index" */))
const _2e8dc90e = () => interopDefault(import('..\\pages\\rtl-home-marketing-startup\\index.vue' /* webpackChunkName: "pages/rtl-home-marketing-startup/index" */))
const _7fc5ba31 = () => interopDefault(import('..\\pages\\rtl-home-marketing-startup-onePage\\index.vue' /* webpackChunkName: "pages/rtl-home-marketing-startup-onePage/index" */))
const _64d4f132 = () => interopDefault(import('..\\pages\\rtl-page-about\\index.vue' /* webpackChunkName: "pages/rtl-page-about/index" */))
const _cd1c191a = () => interopDefault(import('..\\pages\\rtl-page-blog\\index.vue' /* webpackChunkName: "pages/rtl-page-blog/index" */))
const _6fcebd7f = () => interopDefault(import('..\\pages\\rtl-page-contact\\index.vue' /* webpackChunkName: "pages/rtl-page-contact/index" */))
const _54198bd2 = () => interopDefault(import('..\\pages\\rtl-page-portfolio\\index.vue' /* webpackChunkName: "pages/rtl-page-portfolio/index" */))
const _4663cd50 = () => interopDefault(import('..\\pages\\rtl-page-product\\index.vue' /* webpackChunkName: "pages/rtl-page-product/index" */))
const _99745092 = () => interopDefault(import('..\\pages\\rtl-page-services\\index.vue' /* webpackChunkName: "pages/rtl-page-services/index" */))
const _4ecbab9f = () => interopDefault(import('..\\pages\\rtl-page-shop\\index.vue' /* webpackChunkName: "pages/rtl-page-shop/index" */))
const _1303ea0c = () => interopDefault(import('..\\pages\\rtl-page-single-post\\index.vue' /* webpackChunkName: "pages/rtl-page-single-post/index" */))
const _7d6dc381 = () => interopDefault(import('..\\pages\\rtl-page-single-project\\index.vue' /* webpackChunkName: "pages/rtl-page-single-project/index" */))
const _300683f8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home-app-landing",
    component: _d61dcd32,
    name: "home-app-landing"
  }, {
    path: "/home-app-landing-onePage",
    component: _7e4fea1f,
    name: "home-app-landing-onePage"
  }, {
    path: "/home-cloud-hosting",
    component: _c67b9060,
    name: "home-cloud-hosting"
  }, {
    path: "/home-crypto",
    component: _1173a67e,
    name: "home-crypto"
  }, {
    path: "/home-cyber-security",
    component: _762cd56e,
    name: "home-cyber-security"
  }, {
    path: "/home-data-analysis",
    component: _5efe1fb3,
    name: "home-data-analysis"
  }, {
    path: "/home-digital-agency",
    component: _5901ae88,
    name: "home-digital-agency"
  }, {
    path: "/home-digital-agency-onePage",
    component: _23cdce40,
    name: "home-digital-agency-onePage"
  }, {
    path: "/home-freelance-personal",
    component: _060ab7e4,
    name: "home-freelance-personal"
  }, {
    path: "/home-help-desk",
    component: _43f49026,
    name: "home-help-desk"
  }, {
    path: "/home-it-solutions",
    component: _30d8632a,
    name: "home-it-solutions"
  }, {
    path: "/home-it-solutions-onePage",
    component: _92027e3c,
    name: "home-it-solutions-onePage"
  }, {
    path: "/home-it-solutions2",
    component: _17697f38,
    name: "home-it-solutions2"
  }, {
    path: "/home-marketing-startup",
    component: _13155f1c,
    name: "home-marketing-startup"
  }, {
    path: "/home-marketing-startup-onePage",
    component: _427caa58,
    name: "home-marketing-startup-onePage"
  }, {
    path: "/home-nft-marketplace",
    component: _3fe78e90,
    name: "home-nft-marketplace"
  }, {
    path: "/home-payment-solutions",
    component: _6210e9bf,
    name: "home-payment-solutions"
  }, {
    path: "/home-saas-technology",
    component: _3d62e519,
    name: "home-saas-technology"
  }, {
    path: "/home-saas-technology-onePage",
    component: _fd48385e,
    name: "home-saas-technology-onePage"
  }, {
    path: "/home-shop-modern",
    component: _4398651c,
    name: "home-shop-modern"
  }, {
    path: "/home-software-company",
    component: _2acb536b,
    name: "home-software-company"
  }, {
    path: "/home-software-company-onePage",
    component: _6c61e023,
    name: "home-software-company-onePage"
  }, {
    path: "/page-404",
    component: _24c9ae6c,
    name: "page-404"
  }, {
    path: "/page-about-2",
    component: _ad2e5860,
    name: "page-about-2"
  }, {
    path: "/page-about-5",
    component: _7f047826,
    name: "page-about-5"
  }, {
    path: "/page-about-app",
    component: _9ca72efe,
    name: "page-about-app"
  }, {
    path: "/page-blog-5",
    component: _1b41fac8,
    name: "page-blog-5"
  }, {
    path: "/page-blog-5-left-sidebar",
    component: _2d9c50ae,
    name: "page-blog-5-left-sidebar"
  }, {
    path: "/page-blog-5-wide",
    component: _0d96a568,
    name: "page-blog-5-wide"
  }, {
    path: "/page-blog-app",
    component: _6c3e549c,
    name: "page-blog-app"
  }, {
    path: "/page-blog-app-left-sidebar",
    component: _38791655,
    name: "page-blog-app-left-sidebar"
  }, {
    path: "/page-blog-app-wide",
    component: _2ecb57f8,
    name: "page-blog-app-wide"
  }, {
    path: "/page-career-details",
    component: _f23db602,
    name: "page-career-details"
  }, {
    path: "/page-careers-5",
    component: _b35d0c76,
    name: "page-careers-5"
  }, {
    path: "/page-comming-soon-5",
    component: _72667dd0,
    name: "page-comming-soon-5"
  }, {
    path: "/page-contact-5",
    component: _b5eb378c,
    name: "page-contact-5"
  }, {
    path: "/page-contact-app",
    component: _b4dbace4,
    name: "page-contact-app"
  }, {
    path: "/page-faq-5",
    component: _1bff4904,
    name: "page-faq-5"
  }, {
    path: "/page-portfolio-5",
    component: _3b1203dc,
    name: "page-portfolio-5"
  }, {
    path: "/page-portfolio-app",
    component: _3a3fad66,
    name: "page-portfolio-app"
  }, {
    path: "/page-product-5",
    component: _2a9ac3cb,
    name: "page-product-5"
  }, {
    path: "/page-product-app",
    component: _0888e8df,
    name: "page-product-app"
  }, {
    path: "/page-services-5",
    component: _4d97778c,
    name: "page-services-5"
  }, {
    path: "/page-services-app",
    component: _5f27b060,
    name: "page-services-app"
  }, {
    path: "/page-services-details-5",
    component: _7a9c0392,
    name: "page-services-details-5"
  }, {
    path: "/page-shop-5",
    component: _3de35018,
    name: "page-shop-5"
  }, {
    path: "/page-shop-app",
    component: _1f2fd270,
    name: "page-shop-app"
  }, {
    path: "/page-sign-in",
    component: _3e9652ad,
    name: "page-sign-in"
  }, {
    path: "/page-single-post-5",
    component: _105a3575,
    name: "page-single-post-5"
  }, {
    path: "/page-single-post-5-left-sidebar",
    component: _44adc3c8,
    name: "page-single-post-5-left-sidebar"
  }, {
    path: "/page-single-post-5-wide",
    component: _d931d282,
    name: "page-single-post-5-wide"
  }, {
    path: "/page-single-post-app",
    component: _7c329809,
    name: "page-single-post-app"
  }, {
    path: "/page-single-post-app-left-sidebar",
    component: _278ee7f0,
    name: "page-single-post-app-left-sidebar"
  }, {
    path: "/page-single-post-app-wide",
    component: _060930ab,
    name: "page-single-post-app-wide"
  }, {
    path: "/page-single-project-5",
    component: _b568d1d4,
    name: "page-single-project-5"
  }, {
    path: "/page-single-project-app",
    component: _cb5bd52c,
    name: "page-single-project-app"
  }, {
    path: "/rtl-home-app-landing-onePage",
    component: _79f6033c,
    name: "rtl-home-app-landing-onePage"
  }, {
    path: "/rtl-home-marketing-startup",
    component: _2e8dc90e,
    name: "rtl-home-marketing-startup"
  }, {
    path: "/rtl-home-marketing-startup-onePage",
    component: _7fc5ba31,
    name: "rtl-home-marketing-startup-onePage"
  }, {
    path: "/rtl-page-about",
    component: _64d4f132,
    name: "rtl-page-about"
  }, {
    path: "/rtl-page-blog",
    component: _cd1c191a,
    name: "rtl-page-blog"
  }, {
    path: "/rtl-page-contact",
    component: _6fcebd7f,
    name: "rtl-page-contact"
  }, {
    path: "/rtl-page-portfolio",
    component: _54198bd2,
    name: "rtl-page-portfolio"
  }, {
    path: "/rtl-page-product",
    component: _4663cd50,
    name: "rtl-page-product"
  }, {
    path: "/rtl-page-services",
    component: _99745092,
    name: "rtl-page-services"
  }, {
    path: "/rtl-page-shop",
    component: _4ecbab9f,
    name: "rtl-page-shop"
  }, {
    path: "/rtl-page-single-post",
    component: _1303ea0c,
    name: "rtl-page-single-post"
  }, {
    path: "/rtl-page-single-project",
    component: _7d6dc381,
    name: "rtl-page-single-project"
  }, {
    path: "/",
    component: _300683f8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
