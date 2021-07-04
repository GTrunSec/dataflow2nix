(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["graph"] = factory();
	else
		root["Airflow"] = root["Airflow"] || {}, root["Airflow"]["graph"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
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

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(20);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _task_instances__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _dag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* eslint-disable no-underscore-dangle */

/* eslint-disable no-use-before-define */

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

/*
  global d3, document, nodes, taskInstances, tasks, edges, dagreD3, localStorage, $
*/



 // dagId comes from dag.html

const dagId = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('dag_id');
const executionDate = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('execution_date');
const arrange = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('arrange');
const taskInstancesUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('task_instances_url'); // Build a map mapping node id to tooltip for all the TaskGroups.

function getTaskGroupTips(node) {
  const tips = new Map();

  if (node.children !== undefined) {
    tips.set(node.id, node.tooltip);

    for (const child of node.children.values()) {
      for (const [key, val] of getTaskGroupTips(child)) tips.set(key, val);
    }
  }

  return tips;
}

const taskGroupTips = getTaskGroupTips(nodes); // This maps the actual taskId to the current graph node id that contains the task
// (because tasks may be grouped into a group node)

const mapTaskToNode = new Map(); // Below variables are being used in dag.js

const getTaskInstanceURL = `${taskInstancesUrl}?dag_id=${encodeURIComponent(dagId)}&execution_date=${encodeURIComponent(executionDate)}`;
const duration = 500;
const stateFocusMap = {
  success: false,
  running: false,
  failed: false,
  skipped: false,
  upstream_failed: false,
  up_for_reschedule: false,
  up_for_retry: false,
  queued: false,
  no_status: false
};
const taskTip = d3.tip().attr('class', 'tooltip d3-tip').html(toolTipHtml => toolTipHtml); // Preparation of DagreD3 data structures
// "compound" is set to true to make use of clusters to display TaskGroup.

const g = new dagreD3.graphlib.Graph({
  compound: true
}).setGraph({
  nodesep: 30,
  ranksep: 15,
  rankdir: arrange
}).setDefaultEdgeLabel(() => ({
  lineInterpolate: 'basis'
}));
const render = dagreD3.render();
const svg = d3.select('#graph-svg');
let innerSvg = d3.select('#graph-svg g'); // Remove the node with this nodeId from g.

function removeNode(nodeId) {
  if (g.hasNode(nodeId)) {
    const node = g.node(nodeId);

    if (node.children !== undefined) {
      // If the child is an expanded group node, remove children too.
      node.children.forEach(child => {
        removeNode(child.id);
      });
    }
  }

  g.removeNode(nodeId);
} // Collapse the children of the given group node.


function collapseGroup(nodeId, node) {
  // Remove children nodes
  node.children.forEach(child => {
    removeNode(child.id);
  }); // Map task that are under this node to this node's id

  for (const childId of getChildrenIds(node)) mapTaskToNode.set(childId, nodeId);

  node = g.node(nodeId); // Set children edges onto the group edge

  edges.forEach(edge => {
    const sourceId = mapTaskToNode.get(edge.source_id);
    const targetId = mapTaskToNode.get(edge.target_id);

    if (sourceId !== targetId && !g.hasEdge(sourceId, targetId)) {
      g.setEdge(sourceId, targetId, {
        curve: d3.curveBasis,
        arrowheadClass: 'arrowhead'
      });
    }
  });
  draw();
  focusGroup(nodeId);
  removeExpandedGroup(nodeId, node);
} // Update the page to show the latest DAG.


function draw() {
  innerSvg.remove();
  innerSvg = svg.append('g'); // Run the renderer. This is what draws the final graph.

  innerSvg.call(render, g);
  innerSvg.call(taskTip); // When an expanded group is clicked, collapse it.

  d3.selectAll('g.cluster').on('click', nodeId => {
    if (d3.event.defaultPrevented) return;
    const node = g.node(nodeId);
    collapseGroup(nodeId, node);
  }); // When a node is clicked, action depends on the node type.

  d3.selectAll('g.node').on('click', nodeId => {
    const node = g.node(nodeId);

    if (node.children !== undefined && Object.keys(node.children).length > 0) {
      // A group node
      if (d3.event.defaultPrevented) return;
      expandGroup(nodeId, node);
    } else if (nodeId in tasks) {
      // A task node
      const task = tasks[nodeId];
      let tryNumber;
      if (nodeId in taskInstances) tryNumber = taskInstances[nodeId].tryNumber;else tryNumber = 0;
      if (task.task_type === 'SubDagOperator') Object(_dag__WEBPACK_IMPORTED_MODULE_3__["callModal"])(nodeId, executionDate, task.extra_links, tryNumber, true);else Object(_dag__WEBPACK_IMPORTED_MODULE_3__["callModal"])(nodeId, executionDate, task.extra_links, tryNumber, undefined);
    } else {// join node between TaskGroup. Ignore.
    }
  });
  d3.selectAll('g.node').on('mouseover', function mousover(d) {
    d3.select(this).selectAll('rect').attr('data-highlight', 'highlight');
    highlightNodes(g.predecessors(d));
    highlightNodes(g.successors(d));
    const adjacentNodeNames = [d, ...g.predecessors(d), ...g.successors(d)];
    d3.selectAll('g.nodes g.node').filter(x => !adjacentNodeNames.includes(x)).attr('data-highlight', 'fade');
    d3.selectAll('g.edgePath')[0].forEach(x => {
      const val = g.nodeEdges(d).includes(x.__data__) ? 'highlight' : 'fade';
      d3.select(x).attr('data-highlight', val);
    });
    d3.selectAll('g.edgeLabel')[0].forEach(x => {
      if (!g.nodeEdges(d).includes(x.__data__)) {
        d3.select(x).attr('data-highlight', 'fade');
      }
    });
  });
  d3.selectAll('g.node').on('mouseout', function mouseout(d) {
    d3.select(this).selectAll('rect, circle').attr('data-highlight', null);
    unHighlightNodes(g.predecessors(d));
    unHighlightNodes(g.successors(d));
    d3.selectAll('g.node, g.edgePath, g.edgeLabel').attr('data-highlight', null);
    localStorage.removeItem(focusedGroupKey(dagId));
  });
  updateNodesStates(taskInstances);
  setUpZoomSupport();
}

let zoom = null;

function setUpZoomSupport() {
  // Set up zoom support for Graph
  zoom = d3.behavior.zoom().on('zoom', () => {
    innerSvg.attr('transform', `translate(${d3.event.translate})scale(${d3.event.scale})`);
  });
  svg.call(zoom); // Centering the DAG on load
  // Get Dagre Graph dimensions

  const graphWidth = g.graph().width;
  const graphHeight = g.graph().height; // Get SVG dimensions

  const padding = 20;
  const svgBb = svg.node().getBoundingClientRect();
  const width = svgBb.width - padding * 2;
  const height = svgBb.height - padding; // we are not centering the dag vertically
  // Calculate applicable scale for zoom

  const zoomScale = Math.min(Math.min(width / graphWidth, height / graphHeight), 1.5 // cap zoom level to 1.5 so nodes are not too large
  );
  zoom.translate([width / 2 - graphWidth * zoomScale / 2 + padding, padding]);
  zoom.scale(zoomScale);
  zoom.event(innerSvg);
}

function highlightNodes(nodes) {
  nodes.forEach(nodeid => {
    const myNode = g.node(nodeid).elem;
    d3.select(myNode).selectAll('rect, circle').attr('data-highlight', 'highlight');
  });
}

function unHighlightNodes(nodes) {
  nodes.forEach(nodeid => {
    const myNode = g.node(nodeid).elem;
    d3.select(myNode).selectAll('rect, circle').attr('data-highlight', null);
  });
}

d3.selectAll('.js-state-legend-item').on('mouseover', function mouseover() {
  if (!stateIsSet()) {
    const state = $(this).data('state');
    focusState(state);
  }
}).on('mouseout', () => {
  if (!stateIsSet()) {
    clearFocus();
  }
});
d3.selectAll('.js-state-legend-item').on('click', function click() {
  const state = $(this).data('state');
  clearFocus();

  if (!stateFocusMap[state]) {
    const color = d3.select(this).style('border-color');
    focusState(state, this, color);
    setFocusMap(state);
  } else {
    setFocusMap();
    d3.selectAll('.js-state-legend-item').style('background-color', null);
  }
}); // Returns true if a node's id or its children's id matches searchText

function nodeMatches(nodeId, searchText) {
  if (nodeId.indexOf(searchText) > -1) return true; // The node's own id does not match, it may have children that match

  const node = g.node(nodeId);

  if (node.children !== undefined) {
    const children = getChildrenIds(node);

    for (const child of children) {
      if (child.indexOf(searchText) > -1) return true;
    }
  }

  return false;
}

d3.select('#searchbox').on('keyup', () => {
  const s = document.getElementById('searchbox').value;
  if (s === '') return;
  let match = null;

  if (stateIsSet()) {
    clearFocus();
    setFocusMap();
  }

  d3.selectAll('g.nodes g.node').filter(function highlight(d) {
    if (s === '') {
      d3.selectAll('g.edgePaths, g.edgeLabel').attr('data-highlight', null);
      d3.select(this).attr('data-highlight', null);
    } else {
      d3.selectAll('g.edgePaths, g.edgeLabel').attr('data-highlight', 'fade');

      if (nodeMatches(d, s)) {
        if (!match) match = this;
        d3.select(this).attr('data-highlight', null);
      } else {
        d3.select(this).attr('data-highlight', 'fade');
      }
    } // We don't actually use the returned results from filter


    return null;
  }); // This moves the matched node to the center of the graph area

  if (match) {
    const transform = d3.transform(d3.select(match).attr('transform'));
    const svgBb = svg.node().getBoundingClientRect();
    transform.translate = [svgBb.width / 2 - transform.translate[0], svgBb.height / 2 - transform.translate[1]];
    transform.scale = [1, 1];

    if (zoom != null) {
      zoom.translate(transform.translate);
      zoom.scale(1);
      zoom.event(innerSvg);
    }
  }
});

function clearFocus() {
  d3.selectAll('g.node, g.edgePaths, g.edgeLabel').attr('data-highlight', null);
  localStorage.removeItem(focusedGroupKey(dagId));
}

function focusState(state, node, color) {
  d3.selectAll('g.node, g.edgePaths, g.edgeLabel').attr('data-highlight', 'fade');
  d3.selectAll(`g.node.${state}`).attr('data-highlight', null);
  d3.selectAll(`g.node.${state} rect`).attr('data-highlight', null);
  d3.select(node).style('background-color', color);
}

function setFocusMap(state) {
  for (const key in stateFocusMap) {
    if ({}.hasOwnProperty.call(stateFocusMap, key)) {
      stateFocusMap[key] = false;
    }
  }

  if (state != null) {
    stateFocusMap[state] = true;
  }
}

function stateIsSet() {
  for (const key in stateFocusMap) {
    if (stateFocusMap[key]) {
      return true;
    }
  }

  return false;
}

function handleRefresh() {
  $('#loading-dots').css('display', 'inline-block');
  $.get(getTaskInstanceURL).done(tis => {
    // eslint-disable-next-line no-global-assign
    taskInstances = JSON.parse(tis);
    updateNodesStates(taskInstances);
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
    $('#chart_section').hide(1000);
    $('#datatable_section').hide(1000);
  });
}

let refreshInterval;

function startOrStopRefresh() {
  if ($('#auto_refresh').is(':checked')) {
    refreshInterval = setInterval(() => {
      handleRefresh();
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
  if (localStorage.getItem('disableAutoRefresh')) {
    $('#auto_refresh').removeAttr('checked');
  }

  startOrStopRefresh();
  d3.select('#refresh_button').on('click', () => handleRefresh());
} // Generate tooltip for a group node


function groupTooltip(nodeId, tis) {
  const numMap = new Map([['success', 0], ['failed', 0], ['upstream_failed', 0], ['up_for_retry', 0], ['running', 0], ['no_status', 0]]);

  for (const child of getChildrenIds(g.node(nodeId))) {
    if (child in tis) {
      const ti = tis[child];
      const stateKey = ti.state == null ? 'no_status' : ti.state;
      if (numMap.has(stateKey)) numMap.set(stateKey, numMap.get(stateKey) + 1);
    }
  }

  const tip = taskGroupTips.get(nodeId);
  let tt = `${Object(_main__WEBPACK_IMPORTED_MODULE_1__["escapeHtml"])(tip)}<br><br>`;

  for (const [key, val] of numMap.entries()) tt += `<strong>${Object(_main__WEBPACK_IMPORTED_MODULE_1__["escapeHtml"])(key)}:</strong> ${val} <br>`;

  return tt;
} // Assigning css classes based on state to nodes
// Initiating the tooltips


function updateNodesStates(tis) {
  for (const nodeId of g.nodes()) {
    const {
      elem
    } = g.node(nodeId);
    elem.setAttribute('class', `node enter ${getNodeState(nodeId, tis)}`);
    elem.setAttribute('data-toggle', 'tooltip');
    const taskId = nodeId;

    elem.onmouseover = evt => {
      if (taskId in tis) {
        const tt = Object(_task_instances__WEBPACK_IMPORTED_MODULE_2__["default"])(tis[taskId]);
        taskTip.show(tt, evt.target); // taskTip is defined in graph.html
      } else if (taskGroupTips.has(taskId)) {
        const tt = groupTooltip(taskId, tis);
        taskTip.show(tt, evt.target);
      } else if (taskId in tasks) {
        const tt = Object(_task_instances__WEBPACK_IMPORTED_MODULE_2__["taskNoInstanceTooltip"])(taskId, tasks[taskId]);
        taskTip.show(tt, evt.target);
      }
    };

    elem.onmouseout = taskTip.hide;
    elem.onclick = taskTip.hide;
  }
} // Returns list of children id of the given task group


function getChildrenIds(group) {
  const children = [];

  for (const [key, val] of Object.entries(group.children)) {
    if (val.children === undefined) {
      // node
      children.push(val.id);
    } else {
      // group
      const subGroupChildren = getChildrenIds(val);

      for (const id of subGroupChildren) {
        children.push(id);
      }
    }
  }

  return children;
} // Return list of all task group ids in the given task group including the given group itself.


function getAllGroupIds(group) {
  const children = [group.id];

  for (const [key, val] of Object.entries(group.children)) {
    if (val.children !== undefined) {
      // group
      const subGroupChildren = getAllGroupIds(val);

      for (const id of subGroupChildren) {
        children.push(id);
      }
    }
  }

  return children;
} // Return the state for the node based on the state of its taskinstance or that of its
// children if it's a group node


function getNodeState(nodeId, tis) {
  const node = g.node(nodeId);

  if (node.children === undefined) {
    if (nodeId in tis) {
      return tis[nodeId].state || 'no_status';
    }

    return 'no_status';
  }

  const children = getChildrenIds(node);
  const childrenStates = new Set();
  children.forEach(taskId => {
    if (taskId in tis) {
      const {
        state
      } = tis[taskId];
      childrenStates.add(state == null ? 'no_status' : state);
    }
  }); // In this order, if any of these states appeared in childrenStates, return it as
  // the group state.

  const priority = ['failed', 'upstream_failed', 'up_for_retry', 'up_for_reschedule', 'queued', 'scheduled', 'sensing', 'running', 'shutdown', 'removed', 'no_status', 'success', 'skipped'];

  for (const state of priority) {
    if (childrenStates.has(state)) return state;
  }

  return 'no_status';
} // Returns the key used to store expanded task group ids in localStorage


function expandedGroupsKey() {
  return `expandedGroups_${dagId}`;
} // Returns the key used to store the focused task group id in localStorage


function focusedGroupKey() {
  return `focused_group_${dagId}`;
} // Focus the graph on the expanded/collapsed node


function focusGroup(nodeId) {
  if (nodeId != null && zoom != null) {
    const {
      x
    } = g.node(nodeId);
    const {
      y
    } = g.node(nodeId); // This is the total canvas size.

    const {
      width,
      height
    } = svg.node().getBoundingClientRect(); // This is the size of the node or the cluster (i.e. group)

    let rect = d3.selectAll('g.node').filter(n => n === nodeId).select('rect');
    if (rect.empty()) rect = d3.selectAll('g.cluster').filter(n => n === nodeId).select('rect'); // Is there a better way to get nodeWidth and nodeHeight ?

    const [nodeWidth, nodeHeight] = [rect[0][0].attributes.width.value, rect[0][0].attributes.height.value]; // Calculate zoom scale to fill most of the canvas with the node/cluster in focus.

    const scale = Math.min(Math.min(width / nodeWidth, height / nodeHeight), 1.5 // cap zoom level to 1.5 so nodes are not too large
    ) * 0.9;
    const [deltaX, deltaY] = [width / 2 - x * scale, height / 2 - y * scale];
    zoom.translate([deltaX, deltaY]);
    zoom.scale(scale);
    zoom.event(innerSvg.transition().duration(duration));
    const children = new Set(g.children(nodeId)); // Set data attr to highlight the focused group (via CSS).

    d3.selectAll('g.nodes g.node').forEach(function cssHighlight(d) {
      if (d === nodeId || children.has(d)) {
        d3.select(this).attr('data-highlight', null);
      } else {
        d3.select(this).attr('data-highlight', 'fade');
      }
    });
    localStorage.setItem(focusedGroupKey(dagId), nodeId);
  }
} // Expands a group node


function expandGroup(nodeId, node, focus = true) {
  node.children.forEach(val => {
    // Set children nodes
    g.setNode(val.id, val.value);
    mapTaskToNode.set(val.id, val.id);
    g.node(val.id).id = val.id;

    if (val.children !== undefined) {
      // Set children attribute so that the group can be expanded later when needed.
      const groupNode = g.node(val.id);
      groupNode.children = val.children; // Map task that are under this node to this node's id

      for (const childId of getChildrenIds(val)) mapTaskToNode.set(childId, val.id);
    } // Only call setParent if node is not the root node.


    if (nodeId != null) g.setParent(val.id, nodeId);
  }); // Add edges

  edges.forEach(edge => {
    const sourceId = mapTaskToNode.get(edge.source_id);
    const targetId = mapTaskToNode.get(edge.target_id);

    if (sourceId !== targetId && !g.hasEdge(sourceId, targetId)) {
      g.setEdge(sourceId, targetId, {
        curve: d3.curveBasis,
        arrowheadClass: 'arrowhead',
        label: edge.label
      });
    }
  });
  g.edges().forEach(edge => {
    // Remove edges that were associated with the expanded group node..
    if (nodeId === edge.v || nodeId === edge.w) {
      g.removeEdge(edge.v, edge.w);
    }
  });
  draw();

  if (focus) {
    focusGroup(nodeId);
  }

  saveExpandedGroup(nodeId);
}

function getSavedGroups() {
  let expandedGroups;

  try {
    expandedGroups = new Set(JSON.parse(localStorage.getItem(expandedGroupsKey(dagId))));
  } catch {
    expandedGroups = new Set();
  }

  return expandedGroups;
} // Clean up invalid group_ids from saved_group_ids (e.g. due to DAG changes)


function pruneInvalidSavedGroupIds() {
  // All the groupIds in the whole DAG
  const allGroupIds = new Set(getAllGroupIds(nodes));
  let expandedGroups = getSavedGroups(dagId);
  expandedGroups = Array.from(expandedGroups).filter(groupId => allGroupIds.has(groupId));
  localStorage.setItem(expandedGroupsKey(dagId), JSON.stringify(expandedGroups));
} // Remember the expanded groups in local storage so that it can be used
// to restore the expanded state of task groups.


function saveExpandedGroup(nodeId) {
  // expandedGroups is a Set
  const expandedGroups = getSavedGroups(dagId);
  expandedGroups.add(nodeId);
  localStorage.setItem(expandedGroupsKey(dagId), JSON.stringify(Array.from(expandedGroups)));
} // Remove the nodeId from the expanded state


function removeExpandedGroup(nodeId, node) {
  const expandedGroups = getSavedGroups(dagId);
  const childGroupIds = getAllGroupIds(node);
  childGroupIds.forEach(childId => expandedGroups.delete(childId));
  localStorage.setItem(expandedGroupsKey(dagId), JSON.stringify(Array.from(expandedGroups)));
} // Restore previously expanded task groups


function expandSavedGroups(expandedGroups, node) {
  if (node.children === undefined) return;
  node.children.forEach(childNode => {
    if (expandedGroups.has(childNode.id)) {
      expandGroup(childNode.id, g.node(childNode.id), false);
      expandSavedGroups(expandedGroups, childNode);
    }
  });
}

pruneInvalidSavedGroupIds();
const focusNodeId = localStorage.getItem(focusedGroupKey(dagId));
const expandedGroups = getSavedGroups(dagId); // Always expand the root node

expandGroup(null, nodes); // Expand the node that were previously expanded

expandSavedGroups(expandedGroups, nodes); // Restore focus (if available)

if (g.hasNode(focusNodeId)) {
  focusGroup(focusNodeId);
}

initRefresh();

/***/ })
/******/ ]);
});