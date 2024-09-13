// plugins/scroll-top.js
export default ({ app }) => {
  app.router.afterEach(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  });
};
