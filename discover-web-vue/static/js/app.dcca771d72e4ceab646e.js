webpackJsonp([1],{

/***/ "0eh5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3zcb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compute = function () {
  function Compute() {
    (0, _classCallCheck3.default)(this, Compute);

    this.id = 0;
    this.op = 'Compute';
    this.data = {
      name: '',
      label: '',
      expression: ''
    };
  }

  (0, _createClass3.default)(Compute, [{
    key: 'createFromSource',
    value: function createFromSource(compute) {
      return (0, _assign2.default)(this, compute);
    }
  }]);
  return Compute;
}();

exports.default = Compute;

/***/ }),

/***/ "4InH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exports = {};

function requireAll(r) {
  r.keys().forEach(function (key) {
    if (r(key).default) {
      _exports[r(key).default.name] = r(key).default;
    } else {}
  });
}
requireAll(__webpack_require__("Y0jW"));

exports.default = _exports;

/***/ }),

/***/ "4OD1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTP = undefined;

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTP = exports.HTTP = _axios2.default.create({
  baseURL: 'http://discover-appserver-java.us-west-2.elasticbeanstalk.com/'
  // baseURL: 'http://projects.tech-antics.com:9100/'
});

/***/ }),

/***/ "CKtZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timelineModel = __webpack_require__("k02b");

var _timelineModel2 = _interopRequireDefault(_timelineModel);

var _store = __webpack_require__("IcnI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = function state() {
  return {
    columns: [],
    duration: 0,
    timeline: new _timelineModel2.default(_store.store.getters.uid, _store.store.getters.table, 'Workbook ' + _store.store.getters.indexer),
    totalRows: 0
  };
};

var getters = {
  columns: function columns(state) {
    return state.columns;
  },
  duration: function duration(state) {
    return state.duration;
  },
  timeline: function timeline(state) {
    return state.timeline;
  },
  totalRows: function totalRows(state) {
    return state.totalRows;
  }
};

var mutations = {
  updateColumns: function updateColumns(state, columns) {
    state.columns = columns;
  },
  updateDuration: function updateDuration(state, duration) {
    state.duration = duration;
  },
  updateTimeline: function updateTimeline(state, timeline) {
    state.timeline = timeline;
  },
  updateTimelineName: function updateTimelineName(state, name) {
    state.timeline.name = name;
  },
  updateTotalRows: function updateTotalRows(state, totalRows) {
    state.totalRows = totalRows;
  }
};

exports.default = {
  state: state,
  getters: getters,
  mutations: mutations
};

/***/ }),

/***/ "DGjJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue-tidyroutes/dist/tidyroutes.js
var tidyroutes = __webpack_require__("sAf1");
var tidyroutes_default = /*#__PURE__*/__webpack_require__.n(tidyroutes);

// EXTERNAL MODULE: ./node_modules/slickgrid-es6/dist/slick.es6.min.js
var slick_es6_min = __webpack_require__("YlVP");
var slick_es6_min_default = /*#__PURE__*/__webpack_require__.n(slick_es6_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/slickgrid/slickgrid.vue
//
//
//
//
//
//
//
//



// import { options, columns } from './grid-config'

var jQuery = window.jQuery;

var SlickGrid = {
  name: 'slickgrid',
  created: function created() {
    var columns = [{ id: 'title', name: 'Title', field: 'title' }, { id: 'duration', name: 'Duration', field: 'duration' }, { id: '%', name: '% Complete', field: 'percentComplete' }, { id: 'start', name: 'Start', field: 'start' }, { id: 'finish', name: 'Finish', field: 'finish' }, { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven' }];
    var options = {
      enableCellNavigation: true,
      enableColumnReorder: false
    };
    jQuery(function () {
      var data = [];
      for (var i = 0; i < 500; i++) {
        data[i] = {
          title: 'Task ' + i,
          duration: '5 days',
          percentComplete: Math.round(Math.random() * 100),
          start: '01/01/2009',
          finish: '01/05/2009',
          effortDriven: i % 5 === 0
        };
      }
      new slick_es6_min["Grid"]('#myGrid', data, columns, options); // eslint-disable-line no-new
    });
  }
};

tidyroutes_default.a.route('/slick-grid', {
  name: 'slick-grid',
  component: SlickGrid
});

/* harmony default export */ var slickgrid = (SlickGrid);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ea21d9d","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/slickgrid/slickgrid.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0,false,false)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('div',{attrs:{"id":"myGrid"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var slickgrid_slickgrid = (esExports);
// CONCATENATED MODULE: ./src/pages/slickgrid/slickgrid.vue
function injectStyle (ssrContext) {
  __webpack_require__("kART")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  slickgrid,
  slickgrid_slickgrid,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var pages_slickgrid_slickgrid = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "DLnp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Dhdz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectRule = function () {
  function SelectRule() {
    (0, _classCallCheck3.default)(this, SelectRule);

    this.id = 0;
    this.op = 'SelectRule';
    this.term = '';
    this.condition = '';
    this.value = '';
  }

  (0, _createClass3.default)(SelectRule, [{
    key: 'createFromSource',
    value: function createFromSource(rule) {
      return (0, _assign2.default)(this, rule);
    }
  }]);
  return SelectRule;
}();

exports.default = SelectRule;

/***/ }),

/***/ "EUX/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HG7G":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IUek":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/home/home.vue
//
//
//
//
//
//
//

/* harmony default export */ var home = ({
  name: 'home',
  methods: {
    createWorkbook: function createWorkbook() {
      this.$bus.$emit('createWorkbook');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-124d0825","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/home/home.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("Home Page")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",on:{"click":_vm.createWorkbook}},[_vm._v("Create Work Book")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var home_home = (esExports);
// CONCATENATED MODULE: ./src/home/home.vue
function injectStyle (ssrContext) {
  __webpack_require__("cvDV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  home,
  home_home,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_home_home = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "IcnI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("NYxO");

var _vuex2 = _interopRequireDefault(_vuex);

var _timelineDefaultStore = __webpack_require__("CKtZ");

var _timelineDefaultStore2 = _interopRequireDefault(_timelineDefaultStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// hard coded at the moment. Need to refactor
var stateModule = _timelineDefaultStore2.default.state,
    getters = _timelineDefaultStore2.default.getters,
    mutations = _timelineDefaultStore2.default.mutations;


_vue2.default.use(_vuex2.default);

// tiny table:
// table: 'pub.consumer_data.oi.ecom.test.support.report_type'

// small table
// table: 'pub.demo.baseball.batting'

// large tables:
// table: 'pub.consumer_data.oi.ecom.test.data.meow_combined'
// table: 'pub.consumer_data.oi.ecom.test.support.oi_base_table'

var store = exports.store = new _vuex2.default.Store({
  state: {
    indexer: 0,
    table: 'pub.demo.baseball.batting',
    timelines: [],
    uid: 'oi_jcristini'
  },
  getters: {
    allTimelines: function allTimelines(state) {
      return state.timelines.map(function (t) {
        return state['timelineModule' + t].timeline;
      });
    },
    indexer: function indexer(state) {
      return state.indexer;
    },
    table: function table(state) {
      return state.table;
    },
    timelines: function timelines(state) {
      return state.timelines;
    },
    uid: function uid(state) {
      return state.uid;
    }
  },
  mutations: {
    addTimeline: function addTimeline(state, timeline) {
      var newId = state.indexer++;
      state.timelines.push(newId);

      store.registerModule('timelineModule' + newId, {
        state: stateModule,
        getters: getters,
        mutations: mutations,
        namespaced: true // making our module reusable
      });

      if (timeline) {
        state['timelineModule' + newId].timeline.setOperations(timeline);
      }
    },
    removeAllTimelines: function removeAllTimelines(state) {
      state.timelines.forEach(function (t) {
        store.unregisterModule('timelineModule' + t);
      });
      state.timelines = [];
    },
    removeTimeline: function removeTimeline(state, id) {
      store.unregisterModule('timelineModule' + id);
      state.timelines = state.timelines.filter(function (t) {
        return t !== id;
      });
    },
    updateTable: function updateTable(state, value) {
      state.table = value;
    },
    updateTimelines: function updateTimelines(state, value) {
      state.timelines = value;
    },
    updateUid: function updateUid(state, value) {
      state.uid = value;
    }
  }
});

/***/ }),

/***/ "IslV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueInject = __webpack_require__("GeUp");

var _vueInject2 = _interopRequireDefault(_vueInject);

var _httpCommon = __webpack_require__("4OD1");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Service = {
  query: function query(options) {
    var query = {
      params: {
        start: options.start,
        end: options.end,
        uid: options.uid,
        tableName: options.uid
      }
    };
    return _httpCommon.HTTP.get('api/query', query);
  },
  timeline: function timeline(options) {
    return _httpCommon.HTTP.post('api/timeline/run', {
      loginInfo: {
        uid: options.uid,
        gateway: 'https://www2.1010data.com/cgi-bin/gw'
      },
      start: options.startRow || 0,
      end: options.endRow || 10,
      ops: options.ops
    });
  },
  timelineAsMacro: function timelineAsMacro(options) {
    return _httpCommon.HTTP.post('api/timeline/macro', {
      loginInfo: {
        uid: options.uid
      },
      start: 0,
      end: 0,
      ops: options.ops
    });
  },
  workspaceLoad: function workspaceLoad(uid) {
    return _httpCommon.HTTP.get('api/workspace/' + uid);
  },
  workspaceSave: function workspaceSave(timelines) {
    return _httpCommon.HTTP.post('api/workspace', {
      loginInfo: {
        uid: timelines[0].uid
      },
      workspace: {
        timelines: timelines
      }
    });
  },
  workspaceRemove: function workspaceRemove(uid) {
    return _httpCommon.HTTP.post('api/workspace/remove/' + uid);
  },
  transform: function transform(res) {
    var colDefs = res.data.cols.map(function (c) {
      return {
        headerName: c.title && c.title.length > 0 ? c.title : c.name,
        field: c.name
      };
    });

    var rows = res.data.cols[0].data.map(function (d, i) {
      var o = {};
      res.data.cols.forEach(function (c) {
        o[c.name] = c.data[i];
      });
      return o;
    });

    return {
      columnDefs: colDefs,
      rowData: rows
    };
  },
  transformAgGrid: function transformAgGrid(res) {
    var data = this.transform(res);
    var rowCountDef = {
      headerName: '#',
      // it is important to have node.id here, so that when the id changes (which happens
      // when the row is loaded) then the cell is refreshed.
      valueGetter: 'node.id',
      cellRenderer: function cellRenderer(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="static/images/loading.gif">';
        }
      }
    };

    data.columnDefs.unshift(rowCountDef);

    return data;
  }
};

_vueInject2.default.service('DiscoveryApi', function () {
  return Service;
});

/***/ }),

/***/ "K9p2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/timeline/ops/open-table/openTable.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var openTable = ({
  name: 'OpenTable',
  props: ['op']
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2b787e69","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/ops/open-table/openTable.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel panel-default"},[_c('div',{staticClass:"panel-heading"},[_vm._v("\n    "+_vm._s(_vm.op.op)+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.op.data.table}},[_vm._v("Base Table:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.op.data.table),expression:"op.data.table"}],staticClass:"form-control",domProps:{"value":(_vm.op.data.table)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.op.data, "table", $event.target.value)}}})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var open_table_openTable = (esExports);
// CONCATENATED MODULE: ./src/timeline/ops/open-table/openTable.vue
function injectStyle (ssrContext) {
  __webpack_require__("erTp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  openTable,
  open_table_openTable,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var ops_open_table_openTable = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperties = __webpack_require__("HSQo");

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _routes = __webpack_require__("eqvY");

var _routes2 = _interopRequireDefault(_routes);

var _vueInject = __webpack_require__("GeUp");

var _vueInject2 = _interopRequireDefault(_vueInject);

var _vueFileLoader = __webpack_require__("Tirt");

var _vueFileLoader2 = _interopRequireDefault(_vueFileLoader);

var _store = __webpack_require__("IcnI");

var _services = __webpack_require__("TlBL");

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

// Vue.use(VueToastr2, {})
_vue2.default.use(_vueFileLoader2.default);

// import services to register injection

// import VueToastr2 from 'vue-toastr-2'

// Discover-Web components, pages and store

_vue2.default.use(_vueInject2.default);

_vue2.default.config.productionTip = false;

var vm = new _vue2.default({

  el: '#app',

  template: '\n    <div>\n      <app></app>\n    </div>',

  router: _routes2.default,

  store: _store.store
});

(0, _defineProperties2.default)(_vue2.default.prototype, {
  $bus: {
    get: function get() {
      return vm;
    }
  }
});

window.vm = vm;

/***/ }),

/***/ "PhG+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/timeline/ops/select/select.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var select_select = ({
  name: 'Select',
  props: ['op', 'id'],
  methods: {
    addRule: function addRule() {
      this.$emit('addRule', this.op);
    },
    isLastRule: function isLastRule(index) {
      return this.op.data.rules.length === index + 1;
    },
    remove: function remove() {
      this.$emit('remove', this.op);
    },
    removeRule: function removeRule(rule) {
      this.$emit('removeRule', this.op, rule);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-69afe458","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/ops/select/select.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel panel-default"},[_c('div',{staticClass:"panel-heading"},[_vm._v("\n    "+_vm._s(_vm.op.op)+"\n    "),_c('button',{staticClass:"btn btn-danger pull-right",on:{"click":_vm.remove}},[_c('i',{staticClass:"fa fa-trash-o"})])]),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_vm._l((_vm.op.data.rules),function(rule,key,index){return _c('select-rule',{key:key,attrs:{"id":_vm.id,"rule":rule,"last":_vm.isLastRule(key)},on:{"removeRule":_vm.removeRule}})}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12 text-center"},[_c('button',{staticClass:"btn btn-default btn-add-or",on:{"click":_vm.addRule}},[_vm._v("Add 'Or'")])])])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var ops_select_select = (esExports);
// CONCATENATED MODULE: ./src/timeline/ops/select/select.vue
function injectStyle (ssrContext) {
  __webpack_require__("EUX/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69afe458"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  select_select,
  ops_select_select,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var timeline_ops_select_select = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Q21O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vuejs-auto-complete/dist/build.js
var build = __webpack_require__("/Ce5");
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("RUzx");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/timeline/ops/select/select-rule/selectRule.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var selectRule = ({
  name: 'SelectRule',
  props: ['rule', 'last', 'id'],
  data: function data() {
    return {
      indexer: 0,
      isSimple: false,
      selectedColumns: []
    };
  },
  created: function created() {
    if (!this.rule.term && !this.rule.condition && this.rule.value) {
      this.isSimple = true;
    }

    if (this.rule.value) {
      var self = this;
      this.rule.value.split(' ').forEach(function (x) {
        return self.addTag(x);
      });
    }
  },

  components: {
    Autocomplete: build_default.a,
    Multiselect: vue_multiselect_min_default.a
  },
  computed: {
    columns: function columns() {
      return this.$store.getters['timelineModule' + this.id + '/columns'].map(function (c) {
        // add additional fields for multiselect dropdown
        c['code'] = c.field;
        c['search'] = c.name + ' ' + c.field;
        return c;
      });
    }
  },
  watch: {
    columns: function columns() {
      this.setPredefinedValue();
    },
    selectedColumns: function selectedColumns(selected) {
      var self = this;
      // multiselect filters based on a tracked id.
      // to have the ability to add multiple of one item we need to update the tracked id.
      selected = selected.map(function (s) {
        s.search = s.search + '.' + self.indexer++;
        return s;
      });

      if (self.rule) {
        // this updates the model value
        self.rule.value = selected.map(function (s) {
          return s.code;
        }).join(' ');
      }
    }
  },
  mounted: function mounted() {
    this.setPredefinedValue();
  },

  methods: {
    addTag: function addTag(newTag) {
      var tag = {
        name: newTag,
        code: newTag,
        typed: true
      };
      this.selectedColumns.push(tag);
    },
    columnLabel: function columnLabel(col) {
      return col.typed ? '' + col.name : col.name + ' - ' + col.code;
    },
    formattedAutocomplete: function formattedAutocomplete(result) {
      return result.name + ' [' + result.field + ']';
    },
    removeRule: function removeRule() {
      this.$emit('removeRule', this.rule);
    },
    setPredefinedValue: function setPredefinedValue() {
      var self = this;
      this.$nextTick(function () {
        if (self.rule.term && self.columns.length > 0) {
          var value = self.$refs.autocomplete.source.filter(function (item) {
            return item.field === self.rule.term;
          });

          if (value) {
            self.$refs.autocomplete.setValues(value[0]);
          }
        }
      });
    },
    updateIsSimple: function updateIsSimple() {
      if (this.isSimple && this.rule.term && this.rule.condition) {
        this.rule.term = '';
        this.rule.condition = '';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-071a1012","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/ops/select/select-rule/selectRule.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-rule-container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12 text-right"},[_c('div',{staticClass:"form-check"},[_c('label',{staticClass:"form-check-label"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.isSimple),expression:"isSimple"}],staticClass:"form-check-input",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.isSimple)?_vm._i(_vm.isSimple,null)>-1:(_vm.isSimple)},on:{"change":[function($event){var $$a=_vm.isSimple,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.isSimple=$$a.concat([$$v]))}else{$$i>-1&&(_vm.isSimple=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.isSimple=$$c}},_vm.updateIsSimple]}}),_vm._v("\n          Simple Comparison\n        ")])])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isSimple),expression:"!isSimple"}],staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-sm-12 tight-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.rule.term}},[_vm._v("Term")]),_vm._v(" "),_c('autocomplete',{ref:"autocomplete",attrs:{"source":_vm.columns,"initial-value":_vm.rule.term,"input-class":"form-control","results-display":_vm.formattedAutocomplete,"results-property":"field","results-value":"field"},model:{value:(_vm.rule.term),callback:function ($$v) {_vm.$set(_vm.rule, "term", $$v)},expression:"rule.term"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-sm-12 tight-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.rule.condition}},[_vm._v("Condition")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rule.condition),expression:"rule.condition"}],staticClass:"form-control",domProps:{"value":(_vm.rule.condition)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.rule, "condition", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-sm-12 tight-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.rule.value}},[_vm._v("Value")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rule.value),expression:"rule.value"}],staticClass:"form-control",domProps:{"value":(_vm.rule.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.rule, "value", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-1 col-sm-12 tight-gutter"},[_c('button',{staticClass:"delete-btn",on:{"click":_vm.removeRule}},[_c('i',{staticClass:"fa fa-trash-o"})])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isSimple),expression:"isSimple"}],staticClass:"row"},[_c('div',{staticClass:"col-xs-12 tight-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.rule.term}},[_vm._v("Term")]),_vm._v(" "),_c('multiselect',{ref:"expressionSelect",attrs:{"tag-placeholder":"Add new selection","placeholder":"Search or add a selection","track-by":"search","options":_vm.columns,"multiple":true,"taggable":true,"showLabels":false,"custom-label":_vm.columnLabel,"close-on-select":false,"clear-on-select":true},on:{"tag":_vm.addTag},model:{value:(_vm.selectedColumns),callback:function ($$v) {_vm.selectedColumns=$$v},expression:"selectedColumns"}})],1)])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.last),expression:"!last"}],staticClass:"row label-or"},[_vm._m(0,false,false)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-12 text-center"},[_c('span',{staticClass:"label label-primary"},[_vm._v("Or")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var select_rule_selectRule = (esExports);
// CONCATENATED MODULE: ./src/timeline/ops/select/select-rule/selectRule.vue
function injectStyle (ssrContext) {
  __webpack_require__("HG7G")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-071a1012"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  selectRule,
  select_rule_selectRule,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var select_select_rule_selectRule = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "RelA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("RUzx");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/timeline/ops/compute/compute.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var compute = ({
  name: 'Compute',
  props: ['op', 'id'],
  components: {
    Multiselect: vue_multiselect_min_default.a
  },
  computed: {
    columns: function columns() {
      return this.$store.getters['timelineModule' + this.id + '/columns'].map(function (c) {
        return { name: c.name, code: c.field, search: c.name + ' ' + c.field };
      });
    }
  },
  created: function created() {
    this.$emit('freezeAtBoth');
  },

  data: function data() {
    return {
      indexer: 0,
      selectedColumns: []
    };
  },
  watch: {
    selectedColumns: function selectedColumns(selected) {
      var self = this;
      // multiselect filters based on a tracked id.
      // to have the ability to add multiple of one item we need to update the tracked id.
      selected = selected.map(function (s) {
        s.search = s.search + '.' + self.indexer++;
        return s;
      });

      // this updates the model value
      this.op.data.expression = selected.map(function (s) {
        return s.code;
      }).join(' ');
    }
  },
  methods: {
    addTag: function addTag(newTag) {
      var tag = {
        name: newTag,
        code: newTag.substring(0, 2),
        typed: true
      };
      this.selectedColumns.push(tag);
    },
    columnLabel: function columnLabel(col) {
      return col.typed ? '' + col.name : col.name + ' - ' + col.code;
    },
    remove: function remove() {
      this.$emit('remove', this.op);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-59fc86bc","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/ops/compute/compute.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel panel-default compute"},[_c('div',{staticClass:"panel-heading"},[_vm._v("\n    Column\n    "),_c('button',{staticClass:"btn btn-danger pull-right",on:{"click":_vm.remove}},[_c('i',{staticClass:"fa fa-trash-o"})])]),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3 col-sm-12 no-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.op.data.name}},[_vm._v("Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.op.data.name),expression:"op.data.name"}],staticClass:"form-control",domProps:{"value":(_vm.op.data.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.op.data, "name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-sm-12 no-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.op.data.label}},[_vm._v("Label")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.op.data.label),expression:"op.data.label"}],staticClass:"form-control",domProps:{"value":(_vm.op.data.label)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.op.data, "label", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-sm-12 no-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.op.data.expression}},[_vm._v("Expression")]),_vm._v(" "),_c('multiselect',{ref:"computeSelect",attrs:{"tag-placeholder":"Add new selection","placeholder":"Search or add a selection","track-by":"search","options":_vm.columns,"multiple":true,"taggable":true,"showLabels":false,"custom-label":_vm.columnLabel,"close-on-select":false,"clear-on-select":true},on:{"tag":_vm.addTag},model:{value:(_vm.selectedColumns),callback:function ($$v) {_vm.selectedColumns=$$v},expression:"selectedColumns"}})],1)])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var compute_compute = (esExports);
// CONCATENATED MODULE: ./src/timeline/ops/compute/compute.vue
function injectStyle (ssrContext) {
  __webpack_require__("uTeA")
  __webpack_require__("WHtt")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59fc86bc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  compute,
  compute_compute,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var ops_compute_compute = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Tirt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exports = {};
function requireAll(r, Vue) {
  r.keys().forEach(function (key) {
    // install component
    Vue.component(r(key).default.name, r(key).default);
  });
}

function exportAll(r) {
  r.keys().forEach(function (key) {
    // set for named export
    _exports[r(key).default.name] = r(key).default;
  });
}

var options = {
  install: function install(Vue) {
    requireAll(__webpack_require__("yK4o"), Vue);
  }
};

exportAll(__webpack_require__("yK4o"));

exports.default = options;
exports.exports = _exports;

/***/ }),

/***/ "TlBL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exports = {};

function requireAll(r) {
  r.keys().forEach(function (key) {
    if (r(key).default) {
      _exports[r(key).default.name] = r(key).default;
    } else {}
  });
}
requireAll(__webpack_require__("ofb8"));

exports.default = _exports;

/***/ }),

/***/ "UyOL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function () {
  function Select() {
    (0, _classCallCheck3.default)(this, Select);

    this.id = 0;
    this.op = 'Select';
    this.data = {
      rules: []
    };
  }

  (0, _createClass3.default)(Select, [{
    key: 'createFromSource',
    value: function createFromSource(select) {
      return (0, _assign2.default)(this, select);
    }
  }]);
  return Select;
}();

exports.default = Select;

/***/ }),

/***/ "WHtt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XoBE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./node_modules/vue-context-menu/vue-context-menu.js
var vue_context_menu = __webpack_require__("+jlW");
var vue_context_menu_default = /*#__PURE__*/__webpack_require__.n(vue_context_menu);

// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.js
var vuedraggable = __webpack_require__("DAYN");
var vuedraggable_default = /*#__PURE__*/__webpack_require__.n(vuedraggable);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/app/app.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var jQuery = window.jQuery;

/* harmony default export */ var app = ({
  name: 'app',
  dependencies: { discoveryApi: 'DiscoveryApi' },
  components: {
    contextMenu: vue_context_menu_default.a,
    draggable: vuedraggable_default.a
  },
  data: function data() {
    return {
      addModal: null,
      contentEditable: false,
      draggableOptions: {
        draggable: '.draggable'
      },
      removeId: undefined,
      removeModal: null,
      timelineTitles: []
    };
  },
  computed: {
    latestTimelineId: function latestTimelineId() {
      return this.$store.state.indexer;
    },
    table: function table() {
      return this.$store.state.table;
    },

    timelines: {
      get: function get() {
        return this.$store.state.timelines;
      },
      set: function set(val) {
        this.$store.commit('updateTimelines', val);
      }
    },
    uid: function uid() {
      return this.$store.state.uid;
    }
  },
  mounted: function mounted() {
    // assign add modal elem
    this.addModal = jQuery(this.$el.children.timelineModal);
    this.removeModal = jQuery(this.$el.children.confirmModal);

    // load initial saved timeline(s)
    this.timelineLoad();

    var self = this;
    this.$nextTick(function () {
      self.$bus.$on('createWorkbook', function () {
        self.openAddTimelineModal();
      });
      // set titles after load
      self.updateAllTimelineTitles();
    });
  },

  methods: extends_default()({
    changeContentEditable: function changeContentEditable(editable) {
      this.contentEditable = editable;
    },
    createTimeline: function createTimeline() {
      this.addTimeline();
      var self = this;
      this.$nextTick(function () {
        // update titles
        self.updateAllTimelineTitles();

        self.addModal.modal('hide');
        // todo: navigate to new tab.
        self.$router.push({ path: '/timeline/' + self.latestTimelineId });
      });
    },
    navigateTo: function navigateTo(url) {
      this.$router.push({ path: url });
    },
    navigateToFirstVisible: function navigateToFirstVisible() {
      if (this.timelines && this.timelines.length > 0) {
        this.$router.push({ path: '/timeline/' + this.timelines[0] });
      } else {
        this.$router.push('/');
      }
    },
    onEndDrag: function onEndDrag() {
      this.updateAllTimelineTitles();
    },
    openAddTimelineModal: function openAddTimelineModal() {
      this.addModal.modal('show');
    },
    openContext: function openContext() {
      if (this.timelines && this.timelines.length > 0) {
        this.$refs.ctxMenu.open();
      }
    },
    removeTimelineConfirmed: function removeTimelineConfirmed() {
      var self = this;
      this.removeModal.modal('hide');
      this.$nextTick(function () {
        self.$store.commit('removeTimeline', self.removeId);
        self.$nextTick(function () {
          if (self.$route.params.id - 0 === self.removeId) {
            self.navigateToFirstVisible();
          }

          self.removeId = undefined;
        });

        self.updateAllTimelineTitles();
      });
    },
    removeTimeline: function removeTimeline(id) {
      this.removeId = id;
      this.removeModal.modal('show');
    },
    timelineLoad: function timelineLoad() {
      var self = this;
      this.discoveryApi.workspaceLoad(this.uid).then(function (res) {
        if (res.status === 200) {
          // clear existings timelines
          self.removeAllTimelines();

          if (res.data.timelines && res.data.timelines.length > 0) {
            // create new timeline with data
            res.data.timelines.forEach(function (t) {
              self.addTimeline(t);
            });

            // debugger
            // self.$toastr.info(`Workspace Loaded (${res.data.duration})`, 'Title')
          } else {
              // alert no data to be loaded
            }

          self.updateAllTimelineTitles();
          self.navigateToFirstVisible();
          // emit event after successfully loading.
          self.$bus.$emit('loadDefaultTimeline');
        } else {
          // alert failed to load
        }
      });
    },
    timelineSave: function timelineSave() {
      var timelines = this.$store.getters.allTimelines;
      if (timelines && timelines.length > 0) {
        this.discoveryApi.workspaceSave(timelines).then(function (res) {
          if (res.status === 200) {
            // alert save
          } else {
              // alert save failed
            }
        });
      }
    },
    timelineRemove: function timelineRemove() {
      var self = this;
      this.discoveryApi.workspaceRemove(this.uid).then(function (res) {
        if (res.status === 200) {
          self.removeAllTimelines();
          // alert removed
        } else {
            // alert removed failed
          }
      });
    },
    updateAllTimelineTitles: function updateAllTimelineTitles() {
      var self = this;
      // when timeline ids are updated we need to update the titles
      this.$nextTick(function () {
        self.timelineTitles = self.timelines.map(function (t) {
          return self.$store.getters['timelineModule' + t + '/timeline'].name || 'name not found';
        });
      });
    },
    updateTable: function updateTable(e) {
      this.$store.commit('updateTable', e.target.value);
    },
    updateTimelineName: function updateTimelineName(e) {
      clearTimeout(this.timelineNameChange);

      var self = this;
      this.timelineNameChange = setTimeout(function () {
        // need a cleaner way to call the update name
        self.$store._mutations['timelineModule' + e.target.id + '/updateTimelineName'][0](e.target.innerText);
      }, 400);
    },
    updateUid: function updateUid(e) {
      this.$store.commit('updateUid', e.target.value);
    }
  }, Object(vuex_esm["mapMutations"])(['addTimeline', 'removeAllTimelines', 'increment']))
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3890635c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/app/app.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12 col-md-6 col-md-offset-3 text-center padding-to"},[_c('div',{staticClass:"panel panel-default compute"},[_c('div',{staticClass:"panel-body"},[_c('button',{staticClass:"btn btn-info",on:{"click":_vm.timelineLoad}},[_vm._v("Load Workspaces")]),_vm._v(" "),_c('button',{staticClass:"btn btn-info",on:{"click":_vm.timelineSave}},[_vm._v("Save All Workspaces")]),_vm._v(" "),_c('button',{staticClass:"btn btn-info",on:{"click":_vm.timelineRemove}},[_vm._v("Remove Workspaces")])])])])]),_vm._v(" "),_c('div',{staticClass:"row app-container"},[_c('div',{staticClass:"col-md-12"},[_c('router-view',{key:_vm.$route.fullPath})],1)]),_vm._v(" "),_c('nav',{staticClass:"navbar navbar-fixed-bottom"},[_c('div',{staticClass:"navbar-left"},[_c('router-link',{staticClass:"nav-icons nav-large-icon nav-home-icon",attrs:{"to":"/"}},[_c('i',{staticClass:"fa fa-home"})]),_vm._v(" "),_c('a',{staticClass:"nav-icons nav-large-icon nav-context-icon",on:{"click":function($event){$event.preventDefault();_vm.openContext($event)}}},[_c('i',{staticClass:"fa fa-list"})])],1),_vm._v(" "),_c('draggable',{staticClass:"nav navbar-nav dragArea",attrs:{"element":'ul',"role":"tablist","list":_vm.timelines,"options":_vm.draggableOptions},on:{"end":_vm.onEndDrag}},_vm._l((_vm.timelines),function(t,index,key){return _c('li',{key:key,staticClass:"draggable"},[_c('router-link',{attrs:{"to":("/timeline/" + t)}},[_c('span',{attrs:{"id":t,"contenteditable":_vm.contentEditable},on:{"input":_vm.updateTimelineName,"dblclick":function($event){_vm.changeContentEditable(true)},"blur":function($event){_vm.changeContentEditable(false)}}},[_vm._v(_vm._s(_vm.timelineTitles[index]))]),_vm._v(" "),_c('span',{staticClass:"nav-remove-timeline",on:{"click":function($event){_vm.removeTimeline(t)}}},[_c('i',{staticClass:"fa fa-close"})])])],1)})),_vm._v(" "),_c('div',{staticClass:"navbar-left"},[_c('a',{staticClass:"nav-icons nav-add-icon",on:{"click":function($event){$event.preventDefault();_vm.openAddTimelineModal($event)}}},[_c('i',{staticClass:"fa fa-plus"})])])],1)]),_vm._v(" "),_c('context-menu',{ref:"ctxMenu",attrs:{"id":"context-menu"}},_vm._l((_vm.timelines),function(t,index,key){return _c('li',{key:key,on:{"click":function($event){_vm.navigateTo(("/timeline/" + t))}}},[_c('a',{domProps:{"innerHTML":_vm._s(_vm.timelineTitles[index])}})])})),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"timelineModal","tabindex":"-1","role":"dialog","aria-labelledby":"myModalLabel"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_vm._m(0,false,false),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.uid}},[_vm._v("UID")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"UID"},domProps:{"value":_vm.uid},on:{"input":_vm.updateUid}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.table}},[_vm._v("Open Table")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Open Table"},domProps:{"value":_vm.table},on:{"input":_vm.updateTable}})])])])]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-default",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":_vm.createTimeline}},[_vm._v("Add")])])])])]),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"confirmModal","tabindex":"-1","role":"dialog","aria-labelledby":"myRemoveLabel"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_vm._m(1,false,false),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_vm._v("\n          Are you sure you want to delete this worksheet?\n        ")]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-default",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"},on:{"click":_vm.removeTimelineConfirmed}},[_vm._v("Yes remove!")])])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]),_vm._v(" "),_c('h4',{staticClass:"modal-title",attrs:{"id":"myModalLabel"}},[_vm._v("Add Worksheet")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]),_vm._v(" "),_c('h4',{staticClass:"modal-title",attrs:{"id":"myModalLabel"}},[_vm._v("Are you sure?")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var app_app = (esExports);
// CONCATENATED MODULE: ./src/app/app.vue
function injectStyle (ssrContext) {
  __webpack_require__("0eh5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  app,
  app_app,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_app_app = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Y0jW":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./timeline/ops/compute/computeModel.js": "3zcb",
	"./timeline/ops/open-table/openTableModel.js": "h9SQ",
	"./timeline/ops/select/select-rule/selectRuleModel.js": "Dhdz",
	"./timeline/ops/select/selectModel.js": "UyOL",
	"./timeline/timelineModel.js": "k02b"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "Y0jW";

/***/ }),

/***/ "ZVGt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns a function, that, as long as it continues to be invoked rapidly, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, delay) {
  var timeout;
  return function (event, immediate) {
    var context = this;
    var args = arguments;
    var later = function later() {
      clearTimeout(timeout);
      return func.apply(context, args);
    };
    clearTimeout(timeout);
    if (immediate) {
      func.apply(context, args);
    } else {
      timeout = setTimeout(later, delay);
    }
  };
}

var HyperGridRepository = function () {
  function HyperGridRepository(grid, options) {
    (0, _classCallCheck3.default)(this, HyperGridRepository);

    var self = this;
    this.grid = grid;
    this.offset = 0;
    this.serverSize = 0;
    this.oldOffset = 0;
    this.frameSize = options.bufferLen || 1000; // How much data to request from the server
    this.minFrameSize = this.frameSize; // Lower bound of server request
    this.frameIncrement = 100; // How much to move the offset of the frame
    this.initialFrame = true; // Very very first frame for building Hypergrid schema
    this.newFrameRecieved = false; // First frame after moving offset
    this.debouncedScrollingHandler = debounce(this.checkScrollBars, 300);
    this.grid.addEventListener('fin-scroll-y', function (e) {
      self.debouncedScrollingHandler(e); // Handle scrolling after it has stopped for a brief delay
    });
    this.frame = [];
  }

  (0, _createClass3.default)(HyperGridRepository, [{
    key: 'onNewFrame',
    value: function onNewFrame() {}
  }, {
    key: 'resizeFrame',
    value: function resizeFrame(scalar) {
      this.viewPortLen = this.grid.renderer.visibleRows.length;
      this.frameSize = Math.max(this.viewPortLen * scalar, this.minFrameSize);
      this.frameSize = Math.min(this.frameSize, this.serverSize);
      this.frame.length = this.frameSize;
    }
  }, {
    key: 'checkScrollBars',
    value: function checkScrollBars(e) {
      console.log('Handle Scroll');

      var vscrollValue = e.detail.value || this.grid.getVScrollValue();
      var oldVScollValue = e.detail.oldValue;
      var minScroll = this.grid.sbVScroller.range.min;
      var maxScroll = this.grid.sbVScroller.range.max;
      var direction = vscrollValue - oldVScollValue;
      var deltaMin = vscrollValue - minScroll;
      var deltaMax = maxScroll - vscrollValue;
      console.log(vscrollValue, oldVScollValue);
      if (direction > 0 && deltaMax < this.frameIncrement) {
        this.reframe(this.frameIncrement, vscrollValue);
      } else if (direction < 0 && deltaMin < this.frameIncrement) {
        this.reframe(-this.frameIncrement, vscrollValue);
      }
    }
  }, {
    key: 'reframe',
    value: function reframe(offset, vscrollValue) {
      console.log('reframe', vscrollValue);
      if (this.offset === 0 && offset < 0) {
        // Already requesting the top most data
        console.log('reframe aborted for top');
        return;
      }

      if (offset > 0 && offset + this.offset + this.frameSize > this.serverSize) {
        // Already requesting the bottom most data
        console.log('reframe aborted for bottom');
        return;
      }

      this.oldOffset = this.offset;
      this.offset = this.offset + offset;
      this.offset = Math.max(this.offset, 0);
      this.newFrameRecieved = false;
      this.query();
    }
  }, {
    key: 'query',
    value: function query() {
      window.vm.$bus.$emit('hyperGridScroll', { start: this.offset, end: this.frameSize + this.offset });
    }
  }, {
    key: 'handleResponse',
    value: function handleResponse(e) {
      var self = this;
      self.serverSize = e.dataLen;

      var columns = e.columnDefs.map(function (x) {
        return { header: x.headerName, name: x.field };
      });

      self.grid.setData({ data: e.rowData, schema: columns });

      if (!self.newFrameRecieved) {
        self.newFrameRecieved = true;

        if (!self.initialFrame) {
          self.grid.setVScrollValue(self.frameSize - self.frameIncrement);
        }

        if (self.initialFrame) {
          self.initialFrame = false;
        }
        setTimeout(self.onNewFrame, 0);
      }
    }
  }]);
  return HyperGridRepository;
}();

exports.default = HyperGridRepository;

/***/ }),

/***/ "cvDV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eqvY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__("/ocq");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueFileLoader = __webpack_require__("Tirt");

var componentExports = _interopRequireWildcard(_vueFileLoader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// define pages to import and use on a specific route
var _componentExports$exp = componentExports.exports,
    home = _componentExports$exp.home,
    timeline = _componentExports$exp.timeline;


_vue2.default.use(_vueRouter2.default);

var routes = [{ name: 'home', path: '/', component: home }, { name: 'timeline', path: '/timeline/:id', component: timeline }];

exports.default = new _vueRouter2.default({
  routes: routes
});

/***/ }),

/***/ "erTp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "h9SQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OpenTable = function () {
  function OpenTable(options) {
    (0, _classCallCheck3.default)(this, OpenTable);

    this.id = 0;
    this.op = 'OpenTable';
    this.data = {
      table: options.table || ''
    };
  }

  (0, _createClass3.default)(OpenTable, [{
    key: 'createFromSource',
    value: function createFromSource(table) {
      return (0, _assign2.default)(this, table);
    }
  }]);
  return OpenTable;
}();

exports.default = OpenTable;

/***/ }),

/***/ "k02b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _componentModels = __webpack_require__("4InH");

var _componentModels2 = _interopRequireDefault(_componentModels);

var _store = __webpack_require__("IcnI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = function () {
  function Timeline(uid, table, name) {
    (0, _classCallCheck3.default)(this, Timeline);

    this._currentId = 1;

    this.uid = uid;
    this.name = name || 'Workspace ' + this._currentId;
    this.ops = [];
    this.columns = [];

    this.add('OpenTable', { table: table });
  }

  (0, _createClass3.default)(Timeline, [{
    key: 'createFromSource',
    value: function createFromSource(timeline) {
      (0, _assign2.default)(this, timeline);
    }
  }, {
    key: 'getNextId',
    value: function getNextId() {
      return this._currentId++;
    }
  }, {
    key: 'setNextId',
    value: function setNextId(id) {
      this._currentId = id;
    }
  }, {
    key: 'add',
    value: function add(opType, options) {
      var op = new _componentModels2.default[opType](options);

      op.id = this.getNextId();

      // Set the new rule after the id of op has been set
      if (opType === 'Select') {
        this.addRule(op);
      }

      this.ops.push(op);
    }
  }, {
    key: 'remove',
    value: function remove(op) {
      this.ops = this.ops.filter(function (o) {
        return o.id !== op.id;
      });
    }
  }, {
    key: 'addRule',
    value: function addRule(op) {
      var rule = new _componentModels2.default['SelectRule']();
      rule.id = this.getNextId();

      if (op) {
        op.data.rules.push(rule);
      }

      return rule;
    }
  }, {
    key: 'removeRule',
    value: function removeRule(op, rule) {
      op.data.rules = op.data.rules.filter(function (r) {
        return r.id !== rule.id;
      });
    }
  }, {
    key: 'setOperations',
    value: function setOperations(timeline) {
      if (!timeline) {
        return;
      }

      var self = this;

      var ops = timeline.ops;
      self.name = timeline.name;

      self.ops = ops.map(function (op) {
        var operation = new _componentModels2.default[op.op](op).createFromSource(op);
        if (op.op === 'Select') {
          operation.data.rules = op.data.rules.map(function (r) {
            var rule = new _componentModels2.default['SelectRule']().createFromSource(r);
            rule.id = self.getNextId();
            return rule;
          });
        }

        operation.id = self.getNextId();
        return operation;
      });
    }
  }, {
    key: 'removeOperations',
    value: function removeOperations() {
      this.ops = [];
      this.add('OpenTable', { table: _store.store.getters.table });
    }
  }]);
  return Timeline;
}();

exports.default = Timeline;

/***/ }),

/***/ "kART":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kw4V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/vue-tidyroutes/dist/tidyroutes.js
var tidyroutes = __webpack_require__("sAf1");
var tidyroutes_default = /*#__PURE__*/__webpack_require__.n(tidyroutes);

// EXTERNAL MODULE: ./src/timeline/timelineService.js
var timelineService = __webpack_require__("IslV");
var timelineService_default = /*#__PURE__*/__webpack_require__.n(timelineService);

// EXTERNAL MODULE: ./node_modules/fin-hypergrid/index.js
var fin_hypergrid = __webpack_require__("oFkT");
var fin_hypergrid_default = /*#__PURE__*/__webpack_require__.n(fin_hypergrid);

// EXTERNAL MODULE: ./node_modules/fin-hypergrid/src/lib/fields.js
var fields = __webpack_require__("C1Ei");
var fields_default = /*#__PURE__*/__webpack_require__.n(fields);

// EXTERNAL MODULE: ./node_modules/fin-hypergrid/src/behaviors/JSON.js
var behaviors_JSON = __webpack_require__("9vUn");
var JSON_default = /*#__PURE__*/__webpack_require__.n(behaviors_JSON);

// EXTERNAL MODULE: ./src/pages/hypergrid/hypergridRepository.js
var hypergridRepository = __webpack_require__("ZVGt");
var hypergridRepository_default = /*#__PURE__*/__webpack_require__.n(hypergridRepository);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/hypergrid/hypergrid.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // eslint-disable-line no-unused-vars

 // eslint-disable-line no-unused-vars
 // eslint-disable-line no-unused-vars
 // eslint-disable-line no-unused-vars

var HyperGridPage = {
  name: 'hypergrid',
  data: function data() {
    return {
      showGrid: false,
      repository: undefined,

      duration: 0,
      totalRows: 0,
      grid: undefined,
      gridOptions: {
        data: [],
        margin: { bottom: '17px', right: '17px' },
        behavior: JSON_default.a,

        showRowNumbers: false,
        showFilterRow: false,
        backgroundColor: 'white',
        foregroundSelectionFont: '13px Tahoma, Geneva, sans-serif',
        columnClip: false,
        columnAutosizing: false,
        enableContinuousRepaint: true
      },
      startRow: 0,
      endRow: 100,
      timeline: {
        '_currentId': 5,
        'uid': 'oi_jcristini',
        'ops': [{
          'id': 1,
          'op': 'OpenTable',
          'data': {
            'table': 'pub.demo.baseball.batting'
          }
        }, {
          'id': 2,
          'op': 'Compute',
          'data': {
            'name': 'BA',
            'label': 'BA',
            'expression': 'h / ab'
          }
        }, {
          'id': 3,
          'op': 'Select',
          'data': {
            'rules': [{
              'id': 4,
              'term': 'year',
              'condition': '>',
              'value': '1990'
            }]
          }
        }],
        'columns': []
      }
    };
  },
  computed: {
    json: function json() {
      return stringify_default()(this.timeline, null, 2);
    }
  },
  mounted: function mounted() {
    var self = this;
    this.$nextTick(function () {
      self.$bus.$on('hyperGridScroll', function (options) {
        console.log(options);
      });

      self.queryData();
    });
  },

  methods: {
    createGrid: function createGrid() {
      if (!this.grid) {
        var self = this;
        this.grid = new fin_hypergrid_default.a('#hypergrid', this.gridOptions);

        this.repository = new hypergridRepository_default.a(this.grid, { bufferLen: 100 });

        this.repository.onNewFrame = function () {
          self.showGrid = true;
        };
        this.repository.onFetch = function () {
          self.showGrid = false;
        };
      }
    },
    queryData: function queryData() {
      var self = this;
      // ensure the instance of grid is created
      self.createGrid();

      // clone initial object then add start and end row
      var options = JSON.parse(stringify_default()(self.timeline));
      assign_default()(options, {
        startRow: self.startRow,
        endRow: self.endRow
      });
      // console.log(options)
      timelineService_default.a.timeline(options).then(function (res) {
        var gridData = timelineService_default.a.transform(res);
        gridData.dataLen = res.data.totalRows;
        self.repository.handleResponse(gridData);
      });
    }
  }
};

tidyroutes_default.a.route('/hyper-grid', {
  name: 'hyper-grid',
  component: HyperGridPage
});

/* harmony default export */ var hypergrid = (HyperGridPage);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f1f2b62e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/hypergrid/hypergrid.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row timeline"},[_c('div',{staticClass:"col-md-4"},[_c('vue-tabs',{staticClass:"ops--tabs"},[_c('v-tab',{attrs:{"title":"Json"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.json),expression:"json"}],staticClass:"readonly-textarea",domProps:{"value":(_vm.json)},on:{"input":function($event){if($event.target.composing){ return; }_vm.json=$event.target.value}}})])],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-8"},[_c('div',{staticClass:"row info"},[_c('div',{staticClass:"col-md-8"},[_c('span',{staticClass:"badge"},[_vm._v("Total Rows: "+_vm._s(_vm.totalRows))]),_vm._v(" "),_c('span',{staticClass:"badge"},[_vm._v("Load Time: "+_vm._s(_vm.duration)+" ms")])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showGrid),expression:"!showGrid"}]},[_vm._v("Loading...")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showGrid),expression:"showGrid"}],attrs:{"id":"hypergrid"}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var hypergrid_hypergrid = (esExports);
// CONCATENATED MODULE: ./src/pages/hypergrid/hypergrid.vue
function injectStyle (ssrContext) {
  __webpack_require__("pO4p")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  hypergrid,
  hypergrid_hypergrid,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var pages_hypergrid_hypergrid = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ofb8":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./timeline/timelineService.js": "IslV"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "ofb8";

/***/ }),

/***/ "pO4p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qe0M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/ag-grid-vue/main.js
var main = __webpack_require__("Ku5W");
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./node_modules/vue-nav-tabs/dist/vue-tabs.common.js
var vue_tabs_common = __webpack_require__("lEct");
var vue_tabs_common_default = /*#__PURE__*/__webpack_require__.n(vue_tabs_common);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/timeline/timeline.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var timeline = ({
  name: 'timeline',
  components: {
    AgGridVue: main["AgGridVue"],
    VTab: vue_tabs_common["VTab"],
    VueTabs: vue_tabs_common["VueTabs"]
  },
  dependencies: { discoveryApi: 'DiscoveryApi' },
  data: function data() {
    return {
      id: undefined,
      currentStart: 0,
      gridOptions: {
        rowModelType: 'infinite',
        paginationPageSize: 100,
        maxBlocksInCache: 10,
        maxConcurrentDatasourceRequests: 1,
        columnDefs: []
      },
      macro: undefined,
      macroLoading: true,
      refreshAtColumn: false,
      refreshAtRow: false
    };
  },
  computed: {
    columns: function columns() {
      return this.$store.getters['timelineModule' + this.id + '/columns'];
    },
    duration: function duration() {
      return this.$store.getters['timelineModule' + this.id + '/duration'];
    },
    json: function json() {
      return stringify_default()(this.timeline, null, 2);
    },
    refreshAt: function refreshAt() {
      return this.refreshAtColumn || this.refreshAtRow;
    },
    timeline: function timeline() {
      return this.$store.getters['timelineModule' + this.id + '/timeline'];
    },
    totalRows: function totalRows() {
      return this.$store.getters['timelineModule' + this.id + '/totalRows'];
    }
  },
  created: function created() {
    this.id = this.$route.params.id - 0;

    if (!this.$store.state.timelines.includes(this.id)) {
      this.$router.push('/');
    }

    var self = this;
    this.$nextTick(function () {
      self.gridOptions.datasource = self.createDataSource();
    });
  },

  methods: {
    addCompute: function addCompute() {
      this.timeline.add('Compute');
    },
    addRule: function addRule(op) {
      this.timeline.addRule(op);
    },
    addSelect: function addSelect() {
      this.timeline.add('Select');
    },
    freezeAtBoth: function freezeAtBoth() {
      this.refreshAtColumn = true;
      this.refreshAtRow = true;
    },
    freezeAtColumn: function freezeAtColumn() {
      this.refreshAtColumn = true;
    },
    freezeAtRow: function freezeAtRow() {
      this.refreshAtRow = true;
    },
    getComponentType: function getComponentType(op) {
      return op.constructor.name;
    },
    handleTabChange: function handleTabChange(tabIndex, newTab, oldTab) {
      if (newTab.title === 'Macro') {
        this.macro = undefined;
        this.loadMacro();
      }
    },
    loadMacro: function loadMacro() {
      var self = this;
      this.discoveryApi.timelineAsMacro(self.timeline).then(function (res) {
        self.macro = res.data;
      });
    },
    refreshColumn: function refreshColumn(columnName) {
      this.gridOptions.api.ensureColumnVisible(columnName);
      this.refreshAtColumn = false;
    },
    refreshRow: function refreshRow() {
      this.gridOptions.api.ensureIndexVisible(this.currentStart, 'top');
      this.refreshAtRow = false;
    },
    remove: function remove(op) {
      this.timeline.remove(op);
    },
    removeRule: function removeRule(op, rule) {
      this.timeline.removeRule(op, rule);
    },
    runTimeline: function runTimeline() {
      this.currentStart = this.gridOptions.api.getFirstDisplayedRow() || 0;
      this.gridOptions.api.setDatasource(this.createDataSource());
    },
    createDataSource: function createDataSource() {
      var _this = this;

      var self = this;
      return {
        rowCount: null,
        getRows: function getRows(params) {
          // clone initial object then add start and end row
          var options = JSON.parse(stringify_default()(self.timeline));
          assign_default()(options, {
            startRow: params.startRow,
            endRow: params.endRow
          });

          self.discoveryApi.timeline(options).then(function (res) {
            var grid = self.discoveryApi.transformAgGrid(res);
            self.gridOptions.columnDefs = grid.columnDefs;

            _this.$store.commit('timelineModule' + _this.id + '/updateDuration', res.data.duration);
            _this.$store.commit('timelineModule' + _this.id + '/updateTotalRows', res.data.totalRows);
            _this.$store.commit('timelineModule' + _this.id + '/updateColumns', grid.columnDefs.filter(function (c) {
              return c.headerName && c.field;
            }).map(function (c) {
              return { name: c.headerName.replace(/\r?\n|\r/g, ' '), field: c.field };
            }));

            params.successCallback(grid.rowData, res.data.totalRows);

            if (self.refreshAt) {
              self.$nextTick(function () {
                if (self.refreshAtRow) {
                  self.refreshRow();
                }

                if (self.refreshAtColumn) {
                  self.refreshColumn(grid.columnDefs[grid.columnDefs.length - 1].field);
                }
              });
            }
          });
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-56da060c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/timeline.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.timeline)?_c('div',[_vm._v("\n  no timeline\n")]):_c('div',{staticClass:"row timeline"},[_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"uid"}},[_vm._v("User Id")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.timeline.uid),expression:"timeline.uid"}],staticClass:"form-control",domProps:{"value":(_vm.timeline.uid)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.timeline, "uid", $event.target.value)}}})]),_vm._v(" "),_c('vue-tabs',{ref:"timelineTabs",staticClass:"ops--tabs",on:{"tab-change":_vm.handleTabChange}},[_c('v-tab',{attrs:{"title":"Timeline"}},[_vm._l((_vm.timeline.ops),function(op,key,index){return _c('div',{key:key,staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c(_vm.getComponentType(op),{tag:"component",attrs:{"op":op,"id":_vm.id},on:{"addRule":_vm.addRule,"freezeAtBoth":_vm.freezeAtBoth,"freezeAtColumn":_vm.freezeAtColumn,"freezeAtRow":_vm.freezeAtRow,"remove":_vm.remove,"removeRule":_vm.removeRule}})],1)])])])}),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('button',{staticClass:"btn btn-default",on:{"click":_vm.addCompute}},[_vm._v("Add Column")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":_vm.addSelect}},[_vm._v("Add Select")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":_vm.runTimeline}},[_vm._v("Run Timeline")])])],2),_vm._v(" "),_c('v-tab',{attrs:{"title":"Json"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.json),expression:"json"}],staticClass:"readonly-textarea",attrs:{"readonly":""},domProps:{"value":(_vm.json)},on:{"input":function($event){if($event.target.composing){ return; }_vm.json=$event.target.value}}})]),_vm._v(" "),_c('v-tab',{attrs:{"title":"Macro"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.macro),expression:"!macro"}],staticClass:"text-center"},[_c('img',{attrs:{"src":"static/images/loading.gif","alt":"loading macro data"}})]),_vm._v(" "),_c('textarea',{directives:[{name:"show",rawName:"v-show",value:(_vm.macro),expression:"macro"},{name:"model",rawName:"v-model",value:(_vm.macro),expression:"macro"}],staticClass:"readonly-textarea",attrs:{"readonly":""},domProps:{"value":(_vm.macro)},on:{"input":function($event){if($event.target.composing){ return; }_vm.macro=$event.target.value}}})])],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-8"},[_c('div',{staticClass:"row info"},[_c('div',{staticClass:"col-md-12"},[_c('span',{staticClass:"badge"},[_vm._v("Total Rows: "+_vm._s(_vm.totalRows))]),_vm._v(" "),_c('span',{staticClass:"badge"},[_vm._v("Load Time: "+_vm._s(_vm.duration)+" ms")])])]),_vm._v(" "),_c('ag-grid-vue',{ref:"grid",staticClass:"ag-fresh",staticStyle:{"width":"100%","height":"500px"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.gridOptions.columnDefs}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var timeline_timeline = (esExports);
// CONCATENATED MODULE: ./src/timeline/timeline.vue
function injectStyle (ssrContext) {
  __webpack_require__("DLnp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  timeline,
  timeline_timeline,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_timeline_timeline = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "uTeA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yK4o":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app/app.vue": "XoBE",
	"./home/home.vue": "IUek",
	"./pages/hypergrid/hypergrid.vue": "kw4V",
	"./pages/slickgrid/slickgrid.vue": "DGjJ",
	"./timeline/ops/compute/compute.vue": "RelA",
	"./timeline/ops/open-table/openTable.vue": "K9p2",
	"./timeline/ops/select/select-rule/selectRule.vue": "Q21O",
	"./timeline/ops/select/select.vue": "PhG+",
	"./timeline/timeline.vue": "qe0M"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "yK4o";

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.dcca771d72e4ceab646e.js.map