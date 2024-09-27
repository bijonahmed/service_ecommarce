// plugins/swiper.js
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Swiper', Swiper);
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide);
});
