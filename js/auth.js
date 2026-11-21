/* Authentication entry points.
   The original sign-in and role logic is retained in app.js to preserve its
   shared state and existing data flow. This file handles the dedicated login route.
*/
(function () {
  "use strict";
  function routeLogin() {
    if (window.location.hash === "#login" && typeof window.openGate === "function") {
      window.openGate();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", routeLogin, { once: true });
  } else {
    routeLogin();
  }
  window.addEventListener("hashchange", routeLogin);
})();
