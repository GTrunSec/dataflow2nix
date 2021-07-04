(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tiLog"] = factory();
	else
		root["Airflow"] = root["Airflow"] || {}, root["Airflow"]["tiLog"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMetaValue; });
/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getMetaValue(name) {
  const elem = document.querySelector(`meta[name="${name}"]`);

  if (!elem) {
    return null;
  }

  return elem.getAttribute('content');
}

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultFormat; });
/* unused harmony export defaultFormatWithTZ */
/* unused harmony export defaultTZFormat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateTimeAttrFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatTimezone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isoDateToTimeEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatDateTime; });
/* unused harmony export convertAndFormatUTC */
/* unused harmony export secondsToString */
/* unused harmony export updateAllDateTimes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setDisplayedTimezone; });
/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* global moment, $, document */
const defaultFormat = 'YYYY-MM-DD, HH:mm:ss';
const defaultFormatWithTZ = 'YYYY-MM-DD, HH:mm:ss z';
const defaultTZFormat = 'z (Z)';
const dateTimeAttrFormat = 'YYYY-MM-DDThh:mm:ssTZD';
function formatTimezone(what) {
  if (what instanceof moment) {
    return what.isUTC() ? 'UTC' : what.format(defaultTZFormat);
  }

  if (what === 'UTC') {
    return what;
  }

  return moment().tz(what).format(defaultTZFormat);
}
function isoDateToTimeEl(datetime, options) {
  const dateTimeObj = moment(datetime);
  const addTitle = $.extend({
    title: true
  }, options).title;
  const el = document.createElement('time');
  el.setAttribute('datetime', dateTimeObj.format());

  if (addTitle) {
    el.setAttribute('title', dateTimeObj.isUTC() ? '' : `UTC: ${dateTimeObj.clone().utc().format()}`);
  }

  el.innerText = dateTimeObj.format(defaultFormat);
  return el;
}
const formatDateTime = datetime => moment(datetime).format(defaultFormatWithTZ);
const convertAndFormatUTC = (datetime, tz) => {
  let dateTimeObj = moment.utc(datetime);
  if (tz) dateTimeObj = dateTimeObj.tz(tz);
  return dateTimeObj.format(defaultFormatWithTZ);
};
const secondsToString = seconds => {
  let numdays = Math.floor(seconds % 31536000 / 86400);
  let numhours = Math.floor(seconds % 31536000 % 86400 / 3600);
  let numminutes = Math.floor(seconds % 31536000 % 86400 % 3600 / 60);
  let numseconds = Math.floor(seconds % 31536000 % 86400 % 3600 % 60);
  return (numdays > 0 ? numdays + (numdays === 1 ? ' day ' : ' days ') : '') + (numhours > 0 ? numhours + (numhours === 1 ? ' hour ' : ' hours ') : '') + (numminutes > 0 ? numminutes + (numminutes === 1 ? ' minute ' : ' minutes ') : '') + (numseconds > 0 ? numseconds + (numseconds === 1 ? ' second' : ' seconds') : '');
};
function updateAllDateTimes() {
  // Called after `moment.tz.setDefault` has changed the default TZ to display.
  $('time[data-datetime-convert!="false"]').each((_, el) => {
    const $el = $(el);
    const dt = moment($el.attr('datetime'));
    $el.text(dt.format(defaultFormat));

    if ($el.attr('title') !== undefined) {
      // If displayed date is not UTC, have the UTC date in a title attribute
      $el.attr('title', dt.isUTC() ? '' : `UTC: ${dt.clone().utc().format()}`);
    }
  }); // Update any date-time inputs.
  //
  // Since we have set the default timezone for moment, it will automatically
  // convert it to the new target for us

  $('.datetime input').each((_, el) => {
    el.value = moment(el.value).format();
  });
}
function setDisplayedTimezone(tz) {
  moment.tz.setDefault(tz);
  updateAllDateTimes();
}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSecsToHumanReadable", function() { return convertSecsToHumanReadable; });
/* harmony import */ var _datetime_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* global $, moment, Airflow, window, localStorage, document */

window.isoDateToTimeEl = _datetime_utils__WEBPACK_IMPORTED_MODULE_0__[/* isoDateToTimeEl */ "e"]; // We pull moment in via a webpack entrypoint rather than import so that we don't put it in more than a single .js file. This "exports" it to be globally available.

window.moment = Airflow.moment;

function displayTime() {
  const now = moment();
  $('#clock').attr('datetime', now.format(_datetime_utils__WEBPACK_IMPORTED_MODULE_0__[/* dateTimeAttrFormat */ "a"])).html(`${now.format('HH:mm')} <strong>${Object(_datetime_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatTimezone */ "d"])(now)}</strong>`);
}

function changDisplayedTimezone(tz) {
  localStorage.setItem('selected-timezone', tz);
  Object(_datetime_utils__WEBPACK_IMPORTED_MODULE_0__[/* setDisplayedTimezone */ "f"])(tz);
  displayTime();
  $('body').trigger({
    type: 'airflow.timezone-change',
    timezone: tz
  });
}

var el = document.createElement('span');
function escapeHtml(text) {
  el.textContent = text;
  return el.innerHTML;
}
window.escapeHtml = escapeHtml;
function convertSecsToHumanReadable(seconds) {
  var oriSeconds = seconds;
  var floatingPart = oriSeconds - Math.floor(oriSeconds);
  seconds = Math.floor(seconds);
  var secondsPerHour = 60 * 60;
  var secondsPerMinute = 60;
  var hours = Math.floor(seconds / secondsPerHour);
  seconds = seconds - hours * secondsPerHour;
  var minutes = Math.floor(seconds / secondsPerMinute);
  seconds = seconds - minutes * secondsPerMinute;
  var readableFormat = '';

  if (hours > 0) {
    readableFormat += hours + 'Hours ';
  }

  if (minutes > 0) {
    readableFormat += minutes + 'Min ';
  }

  if (seconds + floatingPart > 0) {
    if (Math.floor(oriSeconds) === oriSeconds) {
      readableFormat += seconds + 'Sec';
    } else {
      seconds += floatingPart;
      readableFormat += seconds.toFixed(3) + 'Sec';
    }
  }

  return readableFormat;
}
window.convertSecsToHumanReadable = convertSecsToHumanReadable;

function postAsForm(url, parameters) {
  var form = $('<form></form>');
  form.attr('method', 'POST');
  form.attr('action', url);
  $.each(parameters || {}, function (key, value) {
    var field = $('<input></input>');
    field.attr('type', 'hidden');
    field.attr('name', key);
    field.attr('value', value);
    form.append(field);
  });
  var field = $('<input></input>');
  field.attr('type', 'hidden');
  field.attr('name', 'csrf_token');
  field.attr('value', csrfToken);
  form.append(field); // The form needs to be a part of the document in order for us to be able
  // to submit it.

  $(document.body).append(form);
  form.submit();
}

window.postAsForm = postAsForm;

function initializeUITimezone() {
  const local = moment.tz.guess();
  const selectedTz = localStorage.getItem('selected-timezone');
  const manualTz = localStorage.getItem('chosen-timezone');

  function setManualTimezone(tz) {
    localStorage.setItem('chosen-timezone', tz);

    if (tz == local && tz == Airflow.serverTimezone) {
      $('#timezone-manual').hide();
      return;
    }

    $('#timezone-manual a').data('timezone', tz).text(Object(_datetime_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatTimezone */ "d"])(tz));
    $('#timezone-manual').show();
  }

  if (manualTz) {
    setManualTimezone(manualTz);
  }

  changDisplayedTimezone(selectedTz || Airflow.defaultUITimezone);

  if (Airflow.serverTimezone !== 'UTC') {
    $('#timezone-server a').html(`${Object(_datetime_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatTimezone */ "d"])(Airflow.serverTimezone)} <span class="label label-primary">Server</span>`);
    $('#timezone-server').show();
  }

  if (Airflow.serverTimezone !== local) {
    $('#timezone-local a').attr('data-timezone', local).html(`${Object(_datetime_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatTimezone */ "d"])(local)} <span class="label label-info">Local</span>`);
  } else {
    $('#timezone-local').hide();
  }

  $('a[data-timezone]').click(evt => {
    changDisplayedTimezone($(evt.target).data('timezone'));
  });
  $('#timezone-other').typeahead({
    source: $(moment.tz.names().map(tzName => {
      const category = tzName.split('/', 1)[0];
      return {
        category,
        name: tzName.replace('_', ' '),
        tzName
      };
    })),
    showHintOnFocus: 'all',
    showCategoryHeader: true,
    items: 'all',

    afterSelect(data) {
      // Clear it for next time we open the pop-up
      this.$element.val('');
      setManualTimezone(data.tzName);
      changDisplayedTimezone(data.tzName); // We need to delay the close event to not be in the form handler,
      // otherwise bootstrap ignores it, thinking it's caused by interaction on
      // the <form>

      setTimeout(() => {
        document.activeElement.blur(); // Bug in typeahed, it thinks it's still shown!

        this.shown = false;
        this.focused = false;
      }, 1);
    }

  });
}

$(document).ready(() => {
  initializeUITimezone();
  $('#clock').attr('data-original-title', hostName).attr('data-placement', 'bottom').parent().show();
  displayTime();
  setInterval(displayTime, 1000);
  $.ajaxSetup({
    beforeSend: function (xhr, settings) {
      if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader("X-CSRFToken", csrfToken);
      }
    }
  });
  $.fn.datetimepicker.defaults.format = 'YYYY-MM-DD HH:mm:ssZ';
  $.fn.datetimepicker.defaults.sideBySide = true;
  $('.datetimepicker').datetimepicker(); // Fix up filter fields from FAB adds to the page. This event is fired after
  // the FAB registered one which adds the new control

  $('#filter_form a.filter').click(() => {
    $('.datetimepicker').datetimepicker();
  }); // Global Tooltip selector

  $('.js-tooltip').tooltip();
});

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _meta_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* global document, window, $, */


const executionDate = Object(_meta_value__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('execution_date');
const dagId = Object(_meta_value__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('dag_id');
const taskId = Object(_meta_value__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('task_id');
const logsWithMetadataUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('logs_with_metadata_url');
const DELAY = parseInt(Object(_meta_value__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('delay'), 10);
const AUTO_TAILING_OFFSET = parseInt(Object(_meta_value__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('auto_tailing_offset'), 10);
const ANIMATION_SPEED = parseInt(Object(_meta_value__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('animation_speed'), 10);
const TOTAL_ATTEMPTS = parseInt(Object(_meta_value__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('total_attempts'), 10);

function recurse(delay = DELAY) {
  return new Promise(resolve => setTimeout(resolve, delay));
} // Enable auto tailing only when users scroll down to the bottom
// of the page. This prevent auto tailing the page if users want
// to view earlier rendered messages.


function checkAutoTailingCondition() {
  const docHeight = $(document).height();
  console.debug($(window).scrollTop());
  console.debug($(window).height());
  console.debug($(document).height());
  return $(window).scrollTop() !== 0 && $(window).scrollTop() + $(window).height() > docHeight - AUTO_TAILING_OFFSET;
}

function toggleWrap() {
  $('pre code').toggleClass('wrap');
}

function scrollBottom() {
  $('html, body').animate({
    scrollTop: $(document).height()
  }, ANIMATION_SPEED);
}

window.toggleWrapLogs = toggleWrap;
window.scrollBottomLogs = scrollBottom; // Streaming log with auto-tailing.

function autoTailingLog(tryNumber, metadata = null, autoTailing = false) {
  console.debug(`Auto-tailing log for dag_id: ${dagId}, task_id: ${taskId}, \
   execution_date: ${executionDate}, try_number: ${tryNumber}, metadata: ${JSON.stringify(metadata)}`);
  return Promise.resolve($.ajax({
    url: logsWithMetadataUrl,
    data: {
      dag_id: dagId,
      task_id: taskId,
      execution_date: executionDate,
      try_number: tryNumber,
      metadata: JSON.stringify(metadata)
    }
  })).then(res => {
    // Stop recursive call to backend when error occurs.
    if (!res) {
      document.getElementById(`loading-${tryNumber}`).style.display = 'none';
      return;
    } // res.error is a boolean
    // res.message is the log itself or the error message


    if (res.error) {
      if (res.message) {
        console.error(`Error while retrieving log: ${res.message}`);
      }

      document.getElementById(`loading-${tryNumber}`).style.display = 'none';
      return;
    }

    if (res.message) {
      // Auto scroll window to the end if current window location is near the end.
      let shouldScroll = false;

      if (autoTailing && checkAutoTailingCondition()) {
        shouldScroll = true;
      } // Detect urls


      const urlRegex = /http(s)?:\/\/[\w\.\-]+(\.?:[\w\.\-]+)*([\/?#][\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=\.%]+)?/g;
      res.message.forEach(item => {
        const logBlockElementId = `try-${tryNumber}-${item[0]}`;
        let logBlock = document.getElementById(logBlockElementId);

        if (!logBlock) {
          const logDivBlock = document.createElement('div');
          const logPreBlock = document.createElement('pre');
          logDivBlock.appendChild(logPreBlock);
          logPreBlock.innerHTML = `<code id="${logBlockElementId}"  ></code>`;
          document.getElementById(`log-group-${tryNumber}`).appendChild(logDivBlock);
          logBlock = document.getElementById(logBlockElementId);
        } // The message may contain HTML, so either have to escape it or write it as text.


        const escapedMessage = Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(item[1]);
        const linkifiedMessage = escapedMessage.replace(urlRegex, url => `<a href="${url}" target="_blank">${url}</a>`);
        logBlock.innerHTML += `${linkifiedMessage}\n`;
      }); // Auto scroll window to the end if current window location is near the end.

      if (shouldScroll) {
        scrollBottom();
      }
    }

    if (res.metadata.end_of_log) {
      document.getElementById(`loading-${tryNumber}`).style.display = 'none';
      return;
    }

    recurse().then(() => autoTailingLog(tryNumber, res.metadata, autoTailing));
  });
}

$(document).ready(() => {
  // Lazily load all past task instance logs.
  // TODO: We only need to have recursive queries for
  // latest running task instances. Currently it does not
  // work well with ElasticSearch because ES query only
  // returns at most 10k documents. We want the ability
  // to display all logs in the front-end.
  // An optimization here is to render from latest attempt.
  for (let i = TOTAL_ATTEMPTS; i >= 1; i -= 1) {
    // Only autoTailing the page when streaming the latest attempt.
    const autoTailing = i === TOTAL_ATTEMPTS;
    autoTailingLog(i, null, autoTailing);
  }
});

/***/ })

/******/ });
});