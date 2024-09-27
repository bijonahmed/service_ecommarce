// plugins/echo.client.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export default defineNuxtPlugin((nuxtApp) => {
  Pusher.logToConsole = true;

  nuxtApp.provide('echo', new Echo({
    broadcaster: 'pusher',
    key: '300d162fd051675e56e4',
    cluster: 'ap2',
    forceTLS: true
  }));
});


