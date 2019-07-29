window._ = require('lodash');
window.moment = require('moment');
window.swal = require('sweetalert2');
require('moment-timezone');






/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

console.log("process.env.MIX_API_ENDPOINT",process.env.NODE_ENV);

window.axios.defaults.baseURL = process.env.MIX_API_ENDPOINT;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = "application/json";
window.axios.defaults.headers.common['Accept'] = "application/json";
//window.axios.defaults.headers.common['Authorization'] = 'Bearer '+token;

_.mixin({
  'can' : function(perm, value) {
    return _.includes(perm, value);
  }
});
