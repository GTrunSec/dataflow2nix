(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tree"] = factory();
	else
		root["Airflow"] = root["Airflow"] || {}, root["Airflow"]["tree"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dagTZ", function() { return dagTZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callModal", function() { return callModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callModalDag", function() { return callModalDag; });
/* harmony import */ var _meta_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
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


function updateQueryStringParameter(uri, key, value) {
  const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
  const separator = uri.indexOf('?') !== -1 ? '&' : '?';

  if (uri.match(re)) {
    return uri.replace(re, `$1${key}=${value}$2`);
  }

  return `${uri}${separator}${key}=${value}`;
} // Pills highlighting


$(window).on('load', function onLoad() {
  $(`a[href*="${this.location.pathname}"]`).parent().addClass('active');
  $('.never_active').removeClass('active');
});
const dagId = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('dag_id');
const dagTZ = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('dag_timezone');
const logsWithMetadataUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('logs_with_metadata_url');
const externalLogUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('external_log_url');
const extraLinksUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('extra_links_url');
const pausedUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('paused_url');
let taskId = '';
let executionDate = '';
let subdagId = '';
const showExternalLogRedirect = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('show_external_log_redirect') === 'True';
const buttons = Array.from(document.querySelectorAll('a[id^="btn_"][data-base-url]')).reduce((obj, elm) => {
  obj[elm.id.replace('btn_', '')] = elm;
  return obj;
}, {});

function updateButtonUrl(elm, params) {
  elm.setAttribute('href', `${elm.dataset.baseUrl}?${$.param(params)}`);
}

function updateModalUrls() {
  updateButtonUrl(buttons.subdag, {
    dag_id: subdagId,
    execution_date: executionDate
  });
  updateButtonUrl(buttons.task, {
    dag_id: dagId,
    task_id: taskId,
    execution_date: executionDate
  });
  updateButtonUrl(buttons.rendered, {
    dag_id: dagId,
    task_id: taskId,
    execution_date: executionDate
  });

  if (buttons.rendered_k8s) {
    updateButtonUrl(buttons.rendered_k8s, {
      dag_id: dagId,
      task_id: taskId,
      execution_date: executionDate
    });
  }

  updateButtonUrl(buttons.ti, {
    flt1_dag_id_equals: dagId,
    _flt_3_task_id: taskId,
    _oc_TaskInstanceModelView: executionDate
  });
  updateButtonUrl(buttons.log, {
    dag_id: dagId,
    task_id: taskId,
    execution_date: executionDate
  });
} // Update modal urls on toggle


document.addEventListener('click', event => {
  if (event.target.matches('button[data-toggle="button"]')) {
    updateModalUrls();
  }
});
function callModal(t, d, extraLinks, tryNumbers, sd) {
  taskId = t;
  const location = String(window.location);
  $('#btn_filter').on('click', () => {
    window.location = updateQueryStringParameter(location, 'root', taskId);
  });
  subdagId = sd;
  executionDate = d;
  $('#task_id').text(t);
  $('#execution_date').text(d);
  $('#taskInstanceModal').modal({});
  $('#taskInstanceModal').css('margin-top', '0');
  $('#extra_links').prev('hr').hide();
  $('#extra_links').empty().hide();
  if (subdagId === undefined) $('#div_btn_subdag').hide();else {
    $('#div_btn_subdag').show();
    subdagId = `${dagId}.${t}`;
  }
  $('#dag_dl_logs').hide();
  $('#dag_redir_logs').hide();

  if (tryNumbers > 0) {
    $('#dag_dl_logs').show();

    if (showExternalLogRedirect) {
      $('#dag_redir_logs').show();
    }
  }

  updateModalUrls();
  $('#try_index > li').remove();
  $('#redir_log_try_index > li').remove();
  const startIndex = tryNumbers > 2 ? 0 : 1;

  for (let index = startIndex; index < tryNumbers; index += 1) {
    let url = `${logsWithMetadataUrl}?dag_id=${encodeURIComponent(dagId)}&task_id=${encodeURIComponent(taskId)}&execution_date=${encodeURIComponent(executionDate)}&metadata=null` + '&format=file';
    let showLabel = index;

    if (index !== 0) {
      url += `&try_number=${index}`;
    } else {
      showLabel = 'All';
    }

    $('#try_index').append(`<li role="presentation" style="display:inline">
      <a href="${url}"> ${showLabel} </a>
      </li>`);

    if (index !== 0 || showExternalLogRedirect) {
      const redirLogUrl = `${externalLogUrl}?dag_id=${encodeURIComponent(dagId)}&task_id=${encodeURIComponent(taskId)}&execution_date=${encodeURIComponent(executionDate)}&try_number=${index}`;
      $('#redir_log_try_index').append(`<li role="presentation" style="display:inline">
      <a href="${redirLogUrl}"> ${showLabel} </a>
      </li>`);
    }
  }

  if (extraLinks && extraLinks.length > 0) {
    const markupArr = [];
    extraLinks.sort();
    $.each(extraLinks, (i, link) => {
      const url = `${extraLinksUrl}?task_id=${encodeURIComponent(taskId)}&dag_id=${encodeURIComponent(dagId)}&execution_date=${encodeURIComponent(executionDate)}&link_name=${encodeURIComponent(link)}`;
      const externalLink = $('<a href="#" class="btn btn-primary disabled" target="_blank"></a>');
      const linkTooltip = $('<span class="tool-tip" data-toggle="tooltip" style="padding-right: 2px; padding-left: 3px" data-placement="top" ' + 'title="link not yet available"></span>');
      linkTooltip.append(externalLink);
      externalLink.text(link);
      $.ajax({
        url,
        cache: false,

        success(data) {
          externalLink.attr('href', data.url);
          externalLink.removeClass('disabled');
          linkTooltip.tooltip('disable');
        },

        error(data) {
          linkTooltip.tooltip('hide').attr('title', data.responseJSON.error).tooltip('fixTitle');
        }

      });
      markupArr.push(linkTooltip);
    });
    const extraLinksSpan = $('#extra_links');
    extraLinksSpan.prev('hr').show();
    extraLinksSpan.append(markupArr).show();
    extraLinksSpan.find('[data-toggle="tooltip"]').tooltip();
  }
}
function callModalDag(dag) {
  $('#dagModal').modal({});
  $('#dagModal').css('margin-top', '0');
  executionDate = dag.execution_date;
  updateButtonUrl(buttons.dag_graph_view, {
    dag_id: dag && dag.dag_id,
    execution_date: dag && dag.execution_date
  });
} // Task Instance Modal actions

$('form[data-action]').on('submit', function submit(e) {
  e.preventDefault();
  const form = $(this).get(0); // Somehow submit is fired twice. Only once is the executionDate valid

  if (executionDate) {
    form.execution_date.value = executionDate;
    form.origin.value = window.location;

    if (form.task_id) {
      form.task_id.value = taskId;
    }

    form.action = $(this).data('action');
    form.submit();
  }
}); // DAG Modal actions

$('form button[data-action]').on('click', function onClick() {
  const form = $(this).closest('form').get(0); // Somehow submit is fired twice. Only once is the executionDate valid

  if (executionDate) {
    form.execution_date.value = executionDate;
    form.origin.value = window.location;

    if (form.task_id) {
      form.task_id.value = taskId;
    }

    form.action = $(this).data('action');
    form.submit();
  }
});
$('#pause_resume').on('change', function onChange() {
  const $input = $(this);
  const id = $input.data('dag-id');
  const isPaused = $input.is(':checked');
  const url = `${pausedUrl}?is_paused=${isPaused}&dag_id=${encodeURIComponent(id)}`;
  $input.removeClass('switch-input--error');
  $.post(url).fail(() => {
    setTimeout(() => {
      $input.prop('checked', !isPaused);
      $input.addClass('switch-input--error');
    }, 500);
  });
});

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
module.exports = __webpack_require__(38);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _task_instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _dag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _meta_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* eslint-disable func-names */

/* eslint-disable no-underscore-dangle */

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

/* global treeData, document, window, $, d3, moment, localStorage */



 // dagId comes from dag.html

const dagId = Object(_meta_value__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('dag_id');
const treeDataUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('tree_data');
const numRuns = Object(_meta_value__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('num_runs');

function toDateString(ts) {
  const dt = new Date(ts * 1000);
  return dt.toISOString();
}

function isDagRun(d) {
  return d.run_id !== undefined;
}

function nodeClass(d) {
  let sclass = 'node';
  if (d.children === undefined && d._children === undefined) sclass += ' leaf';else {
    sclass += ' parent';
    if (d.children === undefined) sclass += ' collapsed';else sclass += ' expanded';
  }
  return sclass;
}

document.addEventListener('DOMContentLoaded', () => {
  $('span.status_square').tooltip({
    html: true
  }); // JSON.parse is faster for large payloads than an object literal

  let data = JSON.parse(treeData);
  const tree = d3.layout.tree().nodeSize([0, 25]);
  let nodes = tree.nodes(data);
  const nodeobj = {};

  const getActiveRuns = () => data.instances.filter(run => run.state === 'running').length > 0;

  const now = Date.now() / 1000;
  const devicePixelRatio = window.devicePixelRatio || 1;
  const barHeight = 20;
  const axisHeight = 50;
  const squareSize = 10; // calculate the white space between the tree and instances based on # of instances and tree depth

  let treeDepth = 0;
  nodes.forEach(node => {
    if (node.depth > treeDepth) treeDepth = node.depth;
  });
  treeDepth += 1;
  const squareX = treeDepth * 25 + 200;
  const squareSpacing = 2;
  const margin = {
    top: barHeight / 2 + axisHeight,
    right: 0,
    bottom: 0,
    left: barHeight / 2
  };
  const width = parseInt(960 * devicePixelRatio, 10) - margin.left - margin.right;
  const barWidth = width * 0.9;
  let i = 0;
  let root;

  function populateTaskInstanceProperties(node) {
    // populate task instance properties for display purpose
    let j;

    for (j = 0; j < node.instances.length; j += 1) {
      const dataInstance = data.instances[j];
      const row = node.instances[j]; // check that the dataInstance and the row are valid

      if (dataInstance && dataInstance.execution_date) {
        if (row && row.length) {
          const taskInstance = {
            state: row[0],
            try_number: row[1],
            start_ts: row[2],
            duration: row[3]
          };
          node.instances[j] = taskInstance;
          taskInstance.task_id = node.name;
          taskInstance.operator = node.operator;
          taskInstance.execution_date = dataInstance.execution_date;
          taskInstance.external_trigger = dataInstance.external_trigger; // compute start_date and end_date if applicable

          if (taskInstance.start_ts !== null) {
            taskInstance.start_date = toDateString(taskInstance.start_ts);

            if (taskInstance.state === 'running') {
              taskInstance.duration = now - taskInstance.start_ts;
            } else if (taskInstance.duration !== null) {
              taskInstance.end_date = toDateString(taskInstance.start_ts + taskInstance.duration);
            }
          }
        } else {
          node.instances[j] = {
            task_id: node.name,
            execution_date: dataInstance.execution_date
          };
        }
      }
    }
  }

  const renderNode = node => {
    nodeobj[node.name] = node;

    if (node.name !== '[DAG]') {
      // skip synthetic root node since it's doesn't contain actual task instances
      if (node.start_ts !== undefined) {
        node.start_date = toDateString(node.start_ts);
      }

      if (node.end_ts !== undefined) {
        node.end_date = toDateString(node.end_ts);
      }

      if (node.depends_on_past === undefined) {
        node.depends_on_past = false;
      }

      populateTaskInstanceProperties(node);
    }
  };

  nodes.forEach(node => renderNode(node));
  const diagonal = d3.svg.diagonal().projection(d => [d.y, d.x]);
  const taskTip = d3.tip().attr('class', 'tooltip d3-tip').html(toolTipHtml => toolTipHtml);
  const svg = d3.select('#tree-svg').append('g').attr('class', 'level').attr('transform', `translate(${margin.left},${margin.top})`);
  data.x0 = 0;
  data.y0 = 0;
  const baseNode = nodes.length === 1 ? nodes[0] : nodes[1];
  const numSquare = baseNode.instances.length;
  const xScale = d3.scale.linear().range([squareSize / 2, numSquare * squareSize + (numSquare - 1) * squareSpacing - squareSize / 2]);
  d3.select('#tree-svg').insert('g').attr('transform', `translate(${squareX + margin.left}, ${axisHeight})`).attr('class', 'axis').call(d3.svg.axis().scale(xScale).orient('top') // show a tick every 5 instances
  .ticks(Math.floor(numSquare / 5) || 1).tickFormat(d => {
    if (!numSquare || d > 0 && numSquare < 3) {
      // don't render ticks when there are no instances or when the ticks would overlap
      return '';
    }

    const tickIndex = d === 1 ? numSquare - 1 : Math.round(d * numSquare);
    return moment(baseNode.instances[tickIndex].execution_date).format('MMM DD, HH:mm');
  })).selectAll('text').attr('transform', 'rotate(-30)').style('text-anchor', 'start').call(taskTip);

  function update(source, showTransition = true) {
    // Compute the flattened node list. TODO use d3.layout.hierarchy.
    const updateNodes = tree.nodes(root);
    const duration = showTransition ? 400 : 0;
    const height = Math.max(500, updateNodes.length * barHeight + margin.top + margin.bottom);
    const updateWidth = squareX + numSquare * (squareSize + squareSpacing) + margin.left + margin.right + 50;
    d3.select('#tree-svg').transition().duration(duration).attr('height', height).attr('width', updateWidth);
    d3.select(self.frameElement).transition().duration(duration).style('height', `${height}px`); // Compute the "layout".

    updateNodes.forEach((n, j) => {
      n.x = j * barHeight;
    }); // Update the nodes…

    const node = svg.selectAll('g.node').data(updateNodes, d => d.id || (d.id = ++i));
    const nodeEnter = node.enter().append('g').attr('class', nodeClass).attr('transform', () => `translate(${source.y0},${source.x0})`).style('opacity', 1e-6);
    nodeEnter.append('circle').attr('r', barHeight / 3).attr('class', 'task').attr('data-toggle', 'tooltip').on('mouseover', function (d) {
      let tt = '';

      if (d.operator !== undefined) {
        if (d.operator !== undefined) {
          tt += `operator: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(d.operator)}<br>`;
        }

        tt += `depends_on_past: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(d.depends_on_past)}<br>`;
        tt += `upstream: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(d.num_dep)}<br>`;
        tt += `retries: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(d.retries)}<br>`;
        tt += `owner: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(d.owner)}<br>`;
        tt += `start_date: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(d.start_date)}<br>`;
        tt += `end_date: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(d.end_date)}<br>`;
      }

      taskTip.direction('e');
      taskTip.show(tt, this);
      d3.select(this).transition().duration(duration).style('stroke-width', 3);
    }).on('mouseout', function (d) {
      taskTip.hide(d);
      d3.select(this).transition().duration(duration).style('stroke-width', dd => isDagRun(dd) ? '2' : '1');
    }).attr('height', barHeight).attr('width', d => barWidth - d.y).style('fill', d => d.ui_color).attr('task_id', d => d.name).on('click', toggles);
    nodeEnter.append('text').attr('dy', 3.5).attr('dx', barHeight / 2).text(d => d.name);
    nodeEnter.append('g').attr('class', 'stateboxes').attr('transform', d => `translate(${squareX - d.y},0)`).selectAll('rect').data(d => d.instances).enter().append('rect').on('click', d => {
      if (d.task_id === undefined) Object(_dag__WEBPACK_IMPORTED_MODULE_2__["callModalDag"])(d);else if (nodeobj[d.task_id].operator === 'SubDagOperator') {
        // I'm pretty sure that true is not a valid subdag id, which is what callModal wants
        Object(_dag__WEBPACK_IMPORTED_MODULE_2__["callModal"])(d.task_id, d.execution_date, nodeobj[d.task_id].extra_links, d.try_number, true);
      } else {
        Object(_dag__WEBPACK_IMPORTED_MODULE_2__["callModal"])(d.task_id, d.execution_date, nodeobj[d.task_id].extra_links, d.try_number, undefined);
      }
    }).attr('data-toggle', 'tooltip').attr('rx', d => isDagRun(d) ? '5' : '1').attr('ry', d => isDagRun(d) ? '5' : '1').style('shape-rendering', d => isDagRun(d) ? 'auto' : 'crispEdges').style('stroke-width', d => isDagRun(d) ? '2' : '1').style('stroke-opacity', d => d.external_trigger ? '0' : '1').on('mouseover', function (d) {
      // Calculate duration if it doesn't exist
      const tt = Object(_task_instances__WEBPACK_IMPORTED_MODULE_1__["default"])({ ...d,
        duration: d.duration || moment(d.end_date).diff(d.start_date, 'seconds')
      });
      taskTip.direction('n');
      taskTip.show(tt, this);
      d3.select(this).transition().duration(duration).style('stroke-width', 3);
    }).on('mouseout', function (d) {
      taskTip.hide(d);
      d3.select(this).transition().duration(duration).style('stroke-width', dd => isDagRun(dd) ? '2' : '1');
    }).attr('x', (d, j) => j * (squareSize + squareSpacing)).attr('y', -squareSize / 2).attr('width', 10).attr('height', 10);
    node.selectAll('rect').data(d => d.instances).attr('class', d => `state ${d.state}`); // Transition nodes to their new position.

    nodeEnter.transition().duration(duration).attr('transform', d => `translate(${d.y},${d.x})`).style('opacity', 1);
    node.transition().duration(duration).attr('class', nodeClass).attr('transform', d => `translate(${d.y},${d.x})`).style('opacity', 1); // Transition exiting nodes to the parent's new position.

    node.exit().transition().duration(duration).attr('transform', () => `translate(${source.y},${source.x})`).style('opacity', 1e-6).remove(); // Update the links…

    const link = svg.selectAll('path.link').data(tree.links(updateNodes), d => d.target.id); // Enter any new links at the parent's previous position.

    link.enter().insert('path', 'g').attr('class', 'link').attr('d', () => {
      const o = {
        x: source.x0,
        y: source.y0
      };
      return diagonal({
        source: o,
        target: o
      });
    }).transition().duration(duration).attr('d', diagonal); // Transition links to their new position.

    link.transition().duration(duration).attr('d', diagonal); // Transition exiting nodes to the parent's new position.

    link.exit().transition().duration(duration).attr('d', () => {
      const o = {
        x: source.x,
        y: source.y
      };
      return diagonal({
        source: o,
        target: o
      });
    }).remove(); // Stash the old positions for transition.

    updateNodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
    $('#loading').remove();
  }

  update(root = data, false);

  function toggles(clicked) {
    // Collapse nodes with the same task id
    d3.selectAll(`[task_id='${clicked.name}']`).each(d => {
      if (clicked !== d && d.children) {
        d._children = d.children;
        d.children = null;
        update(d);
      }
    }); // Toggle clicked node

    if (clicked._children) {
      clicked.children = clicked._children;
      clicked._children = null;
    } else {
      clicked._children = clicked.children;
      clicked.children = null;
    }

    update(clicked);
  }

  function handleRefresh() {
    $('#loading-dots').css('display', 'inline-block');
    $.get(`${treeDataUrl}?dag_id=${dagId}&num_runs=${numRuns}`).done(runs => {
      const newData = { ...data,
        ...JSON.parse(runs)
      }; // only rerender the graph if the instances have changed

      if (JSON.stringify(data.instances) !== JSON.stringify(newData.instances)) {
        nodes = tree.nodes(newData);
        nodes.forEach(node => renderNode(node));
        update(root = newData, false);
        data = newData;
      }

      setTimeout(() => {
        $('#loading-dots').hide();
      }, 500);
      $('#error').hide();
    }).fail((_, textStatus, err) => {
      $('#error_msg').text(`${textStatus}: ${err}`);
      $('#error').show();
      setTimeout(() => {
        $('#loading-dots').hide();
      }, 500);
    });
  }

  let refreshInterval;

  function startOrStopRefresh() {
    if ($('#auto_refresh').is(':checked')) {
      refreshInterval = setInterval(() => {
        // only do a refresh if there are any active dag runs
        if (getActiveRuns()) {
          handleRefresh();
        } else {
          $('#auto_refresh').removeAttr('checked');
        }
      }, 3000); // run refresh every 3 seconds
    } else {
      clearInterval(refreshInterval);
    }
  }

  $('#auto_refresh').change(() => {
    if ($('#auto_refresh').is(':checked')) {
      // Run an initial refesh before starting interval if manually turned on
      handleRefresh();
      localStorage.removeItem('disableAutoRefresh');
    } else {
      localStorage.setItem('disableAutoRefresh', 'true');
    }

    startOrStopRefresh();
  });

  function initRefresh() {
    // default to auto-refresh if there are any active dag runs
    if (getActiveRuns() && !localStorage.getItem('disableAutoRefresh')) {
      $('#auto_refresh').attr('checked', true);
    }

    startOrStopRefresh();
    d3.select('#refresh_button').on('click', () => handleRefresh());
  }

  initRefresh();
});

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tiTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskNoInstanceTooltip", function() { return taskNoInstanceTooltip; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _datetime_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _dag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
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

/* global window, moment, convertSecsToHumanReadable */
// We don't re-import moment again, otherwise webpack will include it twice in the bundle!




function makeDateTimeHTML(start, end) {
  // check task ended or not
  const isEnded = end && end instanceof moment && end.isValid();
  return `Started: ${start.format(_datetime_utils__WEBPACK_IMPORTED_MODULE_1__[/* defaultFormat */ "b"])}<br>Ended: ${isEnded ? end.format(_datetime_utils__WEBPACK_IMPORTED_MODULE_1__[/* defaultFormat */ "b"]) : 'Not ended yet'}<br>`;
}

function generateTooltipDateTimes(startDate, endDate, dagTz) {
  if (!startDate) {
    return '<br><em>Not yet started</em>';
  }

  const tzFormat = 'z (Z)';
  const localTZ = moment.defaultZone.name.toUpperCase();
  startDate = moment.utc(startDate);
  endDate = moment.utc(endDate);
  dagTz = dagTz.toUpperCase(); // Generate UTC Start and End Date

  let tooltipHTML = '<br><strong>UTC:</strong><br>';
  tooltipHTML += makeDateTimeHTML(startDate, endDate); // Generate User's Local Start and End Date, unless it's UTC

  if (localTZ !== 'UTC') {
    startDate.tz(localTZ);
    tooltipHTML += `<br><strong>Local: ${startDate.format(tzFormat)}</strong><br>`;
    const localEndDate = endDate && endDate instanceof moment ? endDate.tz(localTZ) : endDate;
    tooltipHTML += makeDateTimeHTML(startDate, localEndDate);
  } // Generate DAG's Start and End Date


  if (_dag__WEBPACK_IMPORTED_MODULE_2__["dagTZ"] !== 'UTC' && _dag__WEBPACK_IMPORTED_MODULE_2__["dagTZ"] !== localTZ) {
    startDate.tz(_dag__WEBPACK_IMPORTED_MODULE_2__["dagTZ"]);
    tooltipHTML += `<br><strong>DAG's TZ: ${startDate.format(tzFormat)}</strong><br>`;
    const dagTZEndDate = endDate && endDate instanceof moment ? endDate.tz(_dag__WEBPACK_IMPORTED_MODULE_2__["dagTZ"]) : endDate;
    tooltipHTML += makeDateTimeHTML(startDate, dagTZEndDate);
  }

  return tooltipHTML;
}

function tiTooltip(ti, {
  includeTryNumber = false
} = {}) {
  let tt = '';

  if (ti.state !== undefined) {
    tt += `<strong>Status:</strong> ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(ti.state)}<br><br>`;
  }

  if (ti.task_id !== undefined) {
    tt += `Task_id: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(ti.task_id)}<br>`;
  }

  tt += `Run: ${Object(_datetime_utils__WEBPACK_IMPORTED_MODULE_1__[/* formatDateTime */ "c"])(ti.execution_date)}<br>`;

  if (ti.run_id !== undefined) {
    tt += `Run Id: <nobr>${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(ti.run_id)}</nobr><br>`;
  }

  if (ti.operator !== undefined) {
    tt += `Operator: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(ti.operator)}<br>`;
  } // Don't translate/format this, keep it as the full ISO8601 date


  if (ti.start_date instanceof moment) {
    tt += `Started: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(ti.start_date.toISOString())}<br>`;
  } else {
    tt += `Started: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(ti.start_date)}<br>`;
  } // Calculate duration on the fly if task instance is still running


  if (ti.state === 'running') {
    const startDate = ti.start_date instanceof moment ? ti.start_date : moment(ti.start_date);
    ti.duration = moment().diff(startDate, 'second');
  }

  tt += `Duration: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(convertSecsToHumanReadable(ti.duration))}<br>`;

  if (includeTryNumber) {
    tt += `Try Number: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(ti.try_number)}<br>`;
  } // dagTZ has been defined in dag.html


  tt += generateTooltipDateTimes(ti.start_date, ti.end_date, _dag__WEBPACK_IMPORTED_MODULE_2__["dagTZ"]);
  return tt;
}
function taskNoInstanceTooltip(taskId, task) {
  let tt = '';

  if (taskId) {
    tt += `Task_id: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(taskId)}<br>`;
  }

  if (task.task_type !== undefined) {
    tt += `Operator: ${Object(_main__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"])(task.task_type)}<br>`;
  }

  tt += '<br><em>DAG has yet to run.</em>';
  return tt;
}
window.tiTooltip = tiTooltip;
window.taskNoInstanceTooltip = taskNoInstanceTooltip;

/***/ })

/******/ });
});