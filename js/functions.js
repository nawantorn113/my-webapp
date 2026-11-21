/* Shared navigation helpers for the ABG NSSKRU web app. */
(function () {
  "use strict";
  window.navigateABGTab = function (tabId) {
    const button = document.querySelector('.tab-btn[data-tab="' + tabId + '"]');
    if (button && !button.hidden) button.click();
  };
})();
