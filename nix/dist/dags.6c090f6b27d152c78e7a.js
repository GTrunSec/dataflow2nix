(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dags"] = factory();
	else
		root["Airflow"] = root["Airflow"] || {}, root["Airflow"]["dags"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(13);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* global document, window, $, d3, STATE_COLOR, isoDateToTimeEl, */

const DAGS_INDEX = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('dags_index');
const ENTER_KEY_CODE = 13;
const pausedUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('paused_url');
const statusFilter = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('status_filter');
const autocompleteUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('autocomplete_url');
const graphUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('graph_url');
const dagRunUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('dag_run_url');
const taskInstanceUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('task_instance_url');
const blockedUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('blocked_url');
const csrfToken = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('csrf_token');
const lastDagRunsUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('last_dag_runs_url');
const dagStatsUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('dag_stats_url');
const taskStatsUrl = Object(_meta_value__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('task_stats_url');
$('#tags_filter').select2({
  placeholder: 'Filter DAGs by tag',
  allowClear: true
});
$('#tags_filter').on('change', e => {
  e.preventDefault();
  const query = new URLSearchParams(window.location.search);

  if (e.val.length) {
    if (query.has('tags')) query.delete('tags');
    e.val.forEach(value => {
      query.append('tags', value);
    });
  } else {
    query.delete('tags');
    query.set('reset_tags', 'reset');
  }

  if (query.has('page')) query.delete('page');
  window.location = `${DAGS_INDEX}?${query.toString()}`;
});
$('#tags_form').on('reset', e => {
  e.preventDefault();
  const query = new URLSearchParams(window.location.search);
  query.delete('tags');
  if (query.has('page')) query.delete('page');
  query.set('reset_tags', 'reset');
  window.location = `${DAGS_INDEX}?${query.toString()}`;
});
$('#dag_query').on('keypress', e => {
  // check for key press on ENTER (key code 13) to trigger the search
  if (e.which === ENTER_KEY_CODE) {
    const query = new URLSearchParams(window.location.search);
    query.set('search', e.target.value.trim());
    query.delete('page');
    window.location = `${DAGS_INDEX}?${query.toString()}`;
    e.preventDefault();
  }
});
$('#page_size').on('change', function onPageSizeChange() {
  const pSize = $(this).val();
  window.location = `${DAGS_INDEX}?page_size=${pSize}`;
});
const encodedDagIds = new URLSearchParams();
$.each($('[id^=toggle]'), function toggleId() {
  const $input = $(this);
  const dagId = $input.data('dag-id');
  encodedDagIds.append('dagIds', dagId);
  $input.on('change', () => {
    const isPaused = $input.is(':checked');
    const url = `${pausedUrl}?is_paused=${isPaused}&dag_id=${encodeURIComponent(dagId)}`;
    $input.removeClass('switch-input--error');
    $.post(url).fail(() => {
      setTimeout(() => {
        $input.prop('checked', !isPaused);
        $input.addClass('switch-input--error');
      }, 500);
    });
  });
});
$('.typeahead').typeahead({
  source(query, callback) {
    return $.ajax(autocompleteUrl, {
      data: {
        query: encodeURIComponent(query),
        status: statusFilter
      },
      success: callback
    });
  },

  autoSelect: false,

  afterSelect(value) {
    const searchQuery = value.trim();

    if (searchQuery) {
      const query = new URLSearchParams(window.location.search);
      query.set('search', searchQuery);
      window.location = `${DAGS_INDEX}?${query}`;
    }
  }

});
$('#search_form').on('reset', () => {
  const query = new URLSearchParams(window.location.search);
  query.delete('search');
  query.delete('page');
  window.location = `${DAGS_INDEX}?${query}`;
});
$('#main_content').show(250);
const diameter = 25;
const circleMargin = 4;
const strokeWidth = 2;
const strokeWidthHover = 6;

function blockedHandler(error, json) {
  $.each(json, function handleBlock() {
    const a = document.querySelector(`[data-dag-id="${this.dag_id}"]`);
    a.title = `${this.active_dag_run}/${this.max_active_runs} active dag runs`;

    if (this.active_dag_run >= this.max_active_runs) {
      a.style.color = '#e43921';
    }
  });
}

function lastDagRunsHandler(error, json) {
  Object.keys(json).forEach(safeDagId => {
    const dagId = json[safeDagId].dag_id;
    const executionDate = json[safeDagId].execution_date;
    const startDate = json[safeDagId].start_date;
    const g = d3.select(`#last-run-${safeDagId}`);
    g.selectAll('a').attr('href', `${graphUrl}?dag_id=${encodeURIComponent(dagId)}&execution_date=${encodeURIComponent(executionDate)}`).insert(isoDateToTimeEl.bind(null, executionDate, {
      title: false
    }));
    g.selectAll('span') // We don't translate the timezone in the tooltip, that stays in UTC.
    .attr('data-original-title', `Start Date: ${startDate}`).style('display', null);
    g.selectAll('.js-loading-last-run').remove();
    $('.js-loading-last-run').remove();
  });
}

function drawDagStatsForDag(dagId, states) {
  const g = d3.select(`svg#dag-run-${dagId.replace(/\./g, '__dot__')}`).attr('height', diameter + strokeWidthHover * 2).attr('width', '110px').selectAll('g').data(states).enter().append('g').attr('transform', (d, i) => {
    const x = i * (diameter + circleMargin) + (diameter / 2 + circleMargin);
    const y = diameter / 2 + strokeWidthHover;
    return `translate(${x},${y})`;
  });
  g.append('svg:a').attr('href', d => `${dagRunUrl}?_flt_3_dag_id=${dagId}&_flt_3_state=${d.state}`).append('circle').attr('id', d => `run-${dagId.replace(/\./g, '_')}${d.state || 'none'}`).attr('class', 'has-svg-tooltip').attr('stroke-width', d => {
    if (d.count > 0) return strokeWidth;
    return 1;
  }).attr('stroke', d => {
    if (d.count > 0) return STATE_COLOR[d.state];
    return 'gainsboro';
  }).attr('fill', '#fff').attr('r', diameter / 2).attr('title', d => d.state).on('mouseover', d => {
    if (d.count > 0) {
      d3.select(this).transition().duration(400).attr('fill', '#e2e2e2').style('stroke-width', strokeWidthHover);
    }
  }).on('mouseout', d => {
    if (d.count > 0) {
      d3.select(this).transition().duration(400).attr('fill', '#fff').style('stroke-width', strokeWidth);
    }
  }).style('opacity', 0).transition().duration(300).delay((d, i) => i * 50).style('opacity', 1);
  d3.select('.js-loading-dag-stats').remove();
  g.append('text').attr('fill', '#51504f').attr('text-anchor', 'middle').attr('vertical-align', 'middle').attr('font-size', 8).attr('y', 3).style('pointer-events', 'none').text(d => d.count > 0 ? d.count : '');
}

function dagStatsHandler(error, json) {
  Object.keys(json).forEach(dagId => {
    const states = json[dagId];
    drawDagStatsForDag(dagId, states);
  });
}

function drawTaskStatsForDag(dagId, states) {
  const g = d3.select(`svg#task-run-${dagId.replace(/\./g, '__dot__')}`).attr('height', diameter + strokeWidthHover * 2).attr('width', states.length * (diameter + circleMargin) + circleMargin).selectAll('g').data(states).enter().append('g').attr('transform', (d, i) => {
    const x = i * (diameter + circleMargin) + (diameter / 2 + circleMargin);
    const y = diameter / 2 + strokeWidthHover;
    return `translate(${x},${y})`;
  });
  g.append('svg:a').attr('href', d => `${taskInstanceUrl}?_flt_3_dag_id=${dagId}&_flt_3_state=${d.state}`).append('circle').attr('id', d => `task-${dagId.replace(/\./g, '_')}${d.state || 'none'}`).attr('class', 'has-svg-tooltip').attr('stroke-width', d => {
    if (d.count > 0) return strokeWidth;
    return 1;
  }).attr('stroke', d => {
    if (d.count > 0) return STATE_COLOR[d.state];
    return 'gainsboro';
  }).attr('fill', '#fff').attr('r', diameter / 2).attr('title', d => d.state || 'none').on('mouseover', function mouseOver(d) {
    if (d.count > 0) {
      d3.select(this).transition().duration(400).attr('fill', '#e2e2e2').style('stroke-width', strokeWidthHover);
    }
  }).on('mouseout', function mouseOut(d) {
    if (d.count > 0) {
      d3.select(this).transition().duration(400).attr('fill', '#fff').style('stroke-width', strokeWidth);
    }
  }).style('opacity', 0).transition().duration(300).delay((d, i) => i * 50).style('opacity', 1);
  d3.select('.js-loading-task-stats').remove();
  g.append('text').attr('fill', '#51504f').attr('text-anchor', 'middle').attr('vertical-align', 'middle').attr('font-size', 8).attr('y', 3).style('pointer-events', 'none').text(d => d.count > 0 ? d.count : '');
}

function taskStatsHandler(error, json) {
  Object.keys(json).forEach(dagId => {
    const states = json[dagId];
    drawTaskStatsForDag(dagId, states);
  });
}

if (encodedDagIds.has('dagIds')) {
  // dags on page fetch stats
  d3.json(blockedUrl).header('X-CSRFToken', csrfToken).post(encodedDagIds, blockedHandler);
  d3.json(lastDagRunsUrl).header('X-CSRFToken', csrfToken).post(encodedDagIds, lastDagRunsHandler);
  d3.json(dagStatsUrl).header('X-CSRFToken', csrfToken).post(encodedDagIds, dagStatsHandler);
  d3.json(taskStatsUrl).header('X-CSRFToken', csrfToken).post(encodedDagIds, taskStatsHandler);
} else {
  // no dags, hide the loading dots
  $('.js-loading-task-stats').remove();
  $('.js-loading-dag-stats').remove();
}

function showSvgTooltip(text, circ) {
  const tip = $('#svg-tooltip');
  tip.children('.tooltip-inner').text(text);
  const centeringOffset = tip.width() / 2;
  tip.css({
    display: 'block',
    left: `${circ.left + 12.5 - centeringOffset}px`,
    // 12.5 == half of circle width
    top: `${circ.top - 25}px` // 25 == position above circle

  });
}

function hideSvgTooltip() {
  $('#svg-tooltip').css('display', 'none');
}

$(window).on('load', () => {
  $('body').on('mouseover', '.has-svg-tooltip', e => {
    const elem = e.target;
    const text = elem.getAttribute('title');
    const circ = elem.getBoundingClientRect();
    showSvgTooltip(text, circ);
  });
  $('body').on('mouseout', '.has-svg-tooltip', () => {
    hideSvgTooltip();
  });
});

/***/ })
/******/ ]);
});