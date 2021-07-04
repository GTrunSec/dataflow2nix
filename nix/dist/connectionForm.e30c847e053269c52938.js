(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["connectionForm"] = factory();
	else
		root["Airflow"] = root["Airflow"] || {}, root["Airflow"]["connectionForm"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports) {

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
 * Created by janomar on 23/07/15.
 */
function decode(str) {
  return new DOMParser().parseFromString(str, "text/html").documentElement.textContent;
}
/**
 * Returns a map of connection type to its controls.
 */


function getConnTypesToControlsMap() {
  const connTypesToControlsMap = new Map();
  const extraFormControls = Array.from(document.querySelectorAll("[id^='extra__'"));
  extraFormControls.forEach(control => {
    const connTypeEnd = control.id.indexOf('__', 'extra__'.length);
    const connType = control.id.substring('extra__'.length, connTypeEnd);
    const controls = connTypesToControlsMap.has(connType) ? connTypesToControlsMap.get(connType) : [];
    controls.push(control.parentElement.parentElement);
    connTypesToControlsMap.set(connType, controls);
  });
  return connTypesToControlsMap;
}
/**
 * Returns the DOM element that contains the different controls.
 */


function getControlsContainer() {
  return document.getElementById('conn_id').parentElement.parentElement.parentElement;
}

$(document).ready(function () {
  const fieldBehavioursElem = document.getElementById('field_behaviours');
  const config = JSON.parse(decode(fieldBehavioursElem.textContent)); // Prevent login/password fields from triggering browser auth extensions

  const form = document.getElementById('model_form');
  if (form) form.setAttribute('autocomplete', 'off'); // Save all DOM elements into a map on load.

  const controlsContainer = getControlsContainer();
  const connTypesToControlsMap = getConnTypesToControlsMap();
  /**
   * Changes the connection type.
   * @param {string} connType The connection type to change to.
   */

  function changeConnType(connType) {
    Array.from(connTypesToControlsMap.values()).forEach(controls => {
      controls.filter(control => control.parentElement === controlsContainer).forEach(control => controlsContainer.removeChild(control));
    });
    const controls = connTypesToControlsMap.get(connType) || [];
    controls.forEach(control => controlsContainer.appendChild(control)); // Restore field behaviours.

    restoreFieldBehaviours(); // Apply behaviours to fields.

    applyFieldBehaviours(connType);
  }
  /**
   * Restores the behaviour for all fields. Used to restore fields to a
   * well-known state during the change of connection types.
   */


  function restoreFieldBehaviours() {
    Array.from(document.querySelectorAll('label[data-origText]')).forEach(elem => {
      elem.innerText = elem.dataset.origText;
      delete elem.dataset.origText;
    });
    Array.from(document.querySelectorAll('.form-control')).forEach(elem => {
      elem.placeholder = '';
      elem.parentElement.parentElement.classList.remove('hide');
    });
  }
  /**
   * Applies special behaviour for fields. The behaviour is defined through
   * config, passed by the server.
   *
   * @param {string} connType The connection type to apply.
   */


  function applyFieldBehaviours(connType) {
    if (config[connType]) {
      if (Array.isArray(config[connType].hidden_fields)) {
        config[connType].hidden_fields.forEach(field => {
          document.getElementById(field).parentElement.parentElement.classList.add('hide');
        });
      }

      if (config[connType].relabeling) {
        Object.keys(config[connType].relabeling).forEach(field => {
          const label = document.querySelector(`label[for='${field}']`);
          label.dataset.origText = label.innerText;
          label.innerText = config[connType].relabeling[field];
        });
      }

      if (config[connType].placeholders) {
        Object.keys(config[connType].placeholders).forEach(field => {
          const placeholder = config[connType].placeholders[field];
          document.getElementById(field).placeholder = placeholder;
        });
      }
    }
  }

  const connTypeElem = document.getElementById('conn_type');
  $(connTypeElem).on('change', e => {
    connType = e.target.value;
    changeConnType(connType);
  }); // Initialize the form by setting a connection type.

  changeConnType(connTypeElem.value);
});

/***/ })

/******/ });
});