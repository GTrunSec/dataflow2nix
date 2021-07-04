(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gantt"] = factory();
	else
		root["Airflow"] = root["Airflow"] || {}, root["Airflow"]["gantt"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
module.exports = __webpack_require__(17);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_instances__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _dag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
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

/**
 * @author Dimitry Kudrayvtsev
 * @version 2.1
 * @modifiedby Maxime Beauchemin
 */
// Taken from
// https://github.com/benjaminoakes/moment-strftime/blob/1886cabc4b07d13e3046ae075d357e7aad92ea93/lib/moment-strftime.js
// but I couldn't work out how to make webpack not include moment again.
// TODO: revisit our webpack config
//
// -- Begin moment-strftime
// Copyright (c) 2012 Benjamin Oakes, MIT Licensed

/* global d3, document, moment, data $ */


const replacements = {
  a: 'ddd',
  A: 'dddd',
  b: 'MMM',
  B: 'MMMM',
  c: 'lll',
  d: 'DD',
  '-d': 'D',
  e: 'D',
  F: 'YYYY-MM-DD',
  H: 'HH',
  '-H': 'H',
  I: 'hh',
  '-I': 'h',
  j: 'DDDD',
  '-j': 'DDD',
  k: 'H',
  l: 'h',
  m: 'MM',
  '-m': 'M',
  M: 'mm',
  '-M': 'm',
  p: 'A',
  P: 'a',
  S: 'ss',
  '-S': 's',
  u: 'E',
  w: 'd',
  W: 'WW',
  x: 'll',
  X: 'LTS',
  y: 'YY',
  Y: 'YYYY',
  z: 'ZZ',
  Z: 'z',
  f: 'SSS',
  '%': '%'
};

moment.fn.strftime = function (format) {
  // Break up format string based on strftime tokens
  const tokens = format.split(/(%\-?.)/);
  const momentFormat = tokens.map(token => {
    // Replace strftime tokens with moment formats
    if (token[0] === '%' && !!Object.getOwnPropertyDescriptor(replacements, token.substr(1))) {
      return replacements[token.substr(1)];
    } // Escape non-token strings to avoid accidental formatting


    return token.length > 0 ? `[${token}]` : token;
  }).join('');
  return this.format(momentFormat);
}; // -- End moment-strftime


d3.gantt = () => {
  const FIT_TIME_DOMAIN_MODE = 'fit';
  const tip = d3.tip().attr('class', 'tooltip d3-tip').offset([-10, 0]).html(d => Object(_task_instances__WEBPACK_IMPORTED_MODULE_0__["default"])(d, {
    includeTryNumber: true
  }));
  let margin = {
    top: 20,
    right: 40,
    bottom: 20,
    left: 150
  };
  const yAxisLeftOffset = 220;
  let selector = 'body';
  let timeDomainStart = d3.time.day.offset(new Date(), -3);
  let timeDomainEnd = d3.time.hour.offset(new Date(), +3);
  let timeDomainMode = FIT_TIME_DOMAIN_MODE; // fixed or fit

  let taskTypes = [];
  let height = document.body.clientHeight - margin.top - margin.bottom - 5;
  let width = $('.gantt').width() - margin.right - margin.left - 5;
  let tickFormat = '%H:%M';

  const keyFunction = d => d.start_date + d.task_id + d.end_date;

  let x = d3.time.scale().domain([timeDomainStart, timeDomainEnd]).range([0, width - yAxisLeftOffset]).clamp(true);
  let y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, height - margin.top - margin.bottom], 0.1);

  const rectTransform = d => `translate(${x(d.start_date.valueOf()) + yAxisLeftOffset},${y(d.task_id)})`; // We can't use d3.time.format as that uses local time, so instead we use
  // moment as that handles our "global" timezone.


  const tickFormatter = d => moment(d).strftime(tickFormat);

  let xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(tickFormatter).tickSubdivide(true).tickSize(8).tickPadding(8);
  let yAxis = d3.svg.axis().scale(y).orient('left').tickSize(0);

  const initTimeDomain = tasks => {
    if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
      if (tasks === undefined || tasks.length < 1) {
        timeDomainStart = d3.time.day.offset(new Date(), -3);
        timeDomainEnd = d3.time.hour.offset(new Date(), +3);
        return;
      }

      tasks.forEach(a => {
        if (!(a.start_date instanceof moment)) {
          a.start_date = moment(a.start_date);
        }

        if (!(a.end_date instanceof moment)) {
          a.end_date = moment(a.end_date);
        }
      });
      timeDomainEnd = moment.max(tasks.map(a => a.end_date)).valueOf();
      timeDomainStart = moment.min(tasks.map(a => a.start_date)).valueOf();
    }
  };

  const initAxis = () => {
    x = d3.time.scale().domain([timeDomainStart, timeDomainEnd]).range([0, width - yAxisLeftOffset]).clamp(true);
    y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, height - margin.top - margin.bottom], 0.1);
    xAxis = d3.svg.axis().scale(x).orient('bottom').tickFormat(tickFormatter).tickSubdivide(true).tickSize(8).tickPadding(8);
    yAxis = d3.svg.axis().scale(y).orient('left').tickSize(0);
  };

  function gantt(tasks) {
    initTimeDomain(tasks);
    initAxis();
    const svg = d3.select(selector).append('svg').attr('class', 'chart').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('class', 'gantt-chart').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).attr('transform', `translate(${margin.left}, ${margin.top})`);
    svg.selectAll('.chart').data(tasks, keyFunction).enter().append('rect').on('mouseover', tip.show).on('mouseout', tip.hide).on('click', d => {
      Object(_dag__WEBPACK_IMPORTED_MODULE_1__["callModal"])(d.task_id, d.execution_date, d.extraLinks);
    }).attr('class', d => d.state || 'null').attr('y', 0).attr('transform', rectTransform).attr('height', () => y.rangeBand()).attr('width', d => d3.max([x(d.end_date.valueOf()) - x(d.start_date.valueOf()), 1]));
    svg.append('g').attr('class', 'x axis').attr('transform', `translate(${yAxisLeftOffset}, ${height - margin.top - margin.bottom})`).transition().call(xAxis);
    svg.append('g').attr('class', 'y axis').transition().attr('transform', `translate(${yAxisLeftOffset}, 0)`).call(yAxis);
    svg.call(tip);
    return gantt;
  }

  gantt.redraw = tasks => {
    initTimeDomain(tasks);
    initAxis();
    const svg = d3.select('.chart');
    const ganttChartGroup = svg.select('.gantt-chart');
    const rect = ganttChartGroup.selectAll('rect').data(tasks, keyFunction);
    rect.enter().insert('rect', ':first-child').attr('rx', 5).attr('ry', 5).attr('class', d => d.state || 'null').transition().attr('y', 0).attr('transform', rectTransform).attr('height', () => y.rangeBand()).attr('width', d => d3.max([x(d.end_date.valueOf()) - x(d.start_date.valueOf()), 1]));
    rect.exit().remove();
    svg.select('.x').transition().call(xAxis);
    svg.select('.y').transition().call(yAxis);
    return gantt;
  };

  gantt.margin = function (value) {
    if (!arguments.length) return margin;
    margin = value;
    return gantt;
  };

  gantt.timeDomain = function (value) {
    if (!arguments.length) return [timeDomainStart, timeDomainEnd];
    timeDomainStart = +value[0];
    timeDomainEnd = +value[1];
    return gantt;
  };
  /**
   * @param {string}
   *                vale The value can be "fit" - the domain fits the data or
   *                "fixed" - fixed domain.
   */


  gantt.timeDomainMode = function (value) {
    if (!arguments.length) return timeDomainMode;
    timeDomainMode = value;
    return gantt;
  };

  gantt.taskTypes = function (value) {
    if (!arguments.length) return taskTypes;
    taskTypes = value;
    return gantt;
  };

  gantt.width = function (value) {
    if (!arguments.length) return width;
    width = +value;
    return gantt;
  };

  gantt.height = function (value) {
    if (!arguments.length) return height;
    height = +value;
    return gantt;
  };

  gantt.tickFormat = function (value) {
    if (!arguments.length) return tickFormat;
    tickFormat = value;
    return gantt;
  };

  gantt.selector = function (value) {
    if (!arguments.length) return selector;
    selector = value;
    return gantt;
  };

  return gantt;
};

document.addEventListener('DOMContentLoaded', () => {
  const gantt = d3.gantt().taskTypes(data.taskNames).height(data.height).selector('.gantt').tickFormat('%H:%M:%S');
  gantt(data.tasks);
  $('body').on('airflow.timezone-change', () => {
    gantt.redraw(data.tasks);
  });
});

/***/ })
/******/ ]);
});