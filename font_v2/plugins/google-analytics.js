// plugins/google-analytics.js

export default ({ app }) => {
  if (process.browser) {
      // Google Analytics script
      window.dataLayer = window.dataLayer || [];
      function gtag() {
          window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', process.env.googleAnalyticsID);
      
      // Inject the script into the page
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-6N0FKQ9ECB`;
      document.head.appendChild(script);
  }
};
