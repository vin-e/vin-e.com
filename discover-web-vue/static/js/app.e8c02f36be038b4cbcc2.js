webpackJsonp([1],{

/***/ "/1Rm":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ops/compute/compute.vue": "RelA",
	"./ops/open-table/openTable.vue": "K9p2",
	"./ops/select/select-rule/selectRule.vue": "Q21O",
	"./ops/select/select.vue": "PhG+",
	"./timeline.vue": "qe0M"
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
webpackContext.id = "/1Rm";

/***/ }),

/***/ "1BnB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3zcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var Compute = function () {
  function Compute() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Compute);

    this.id = 0;
    this.op = 'Compute';
    this.data = {
      name: '',
      label: '',
      expression: ''
    };
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Compute, [{
    key: 'createFromSource',
    value: function createFromSource(compute) {
      return Object.assign(this, compute);
    }
  }]);

  return Compute;
}();

/* harmony default export */ __webpack_exports__["default"] = (Compute);

/***/ }),

/***/ "6WwF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-29592628","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/slickgrid/slickgrid.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0,false,false)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('div',{attrs:{"id":"myGrid"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var slickgrid_slickgrid = (esExports);
// CONCATENATED MODULE: ./src/pages/slickgrid/slickgrid.vue
function injectStyle (ssrContext) {
  __webpack_require__("JrJI")
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

/***/ "Dhdz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var SelectRule = function () {
  function SelectRule() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SelectRule);

    this.id = 0;
    this.op = 'SelectRule';
    this.term = '';
    this.condition = '';
    this.value = '';
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SelectRule, [{
    key: 'createFromSource',
    value: function createFromSource(rule) {
      return Object.assign(this, rule);
    }
  }]);

  return SelectRule;
}();

/* harmony default export */ __webpack_exports__["default"] = (SelectRule);

/***/ }),

/***/ "Exlp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "G8Cn":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./agGrid/agGrid.vue": "U6lY",
	"./hypergrid/hypergrid.vue": "kw4V",
	"./slickgrid/slickgrid.vue": "DGjJ"
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
webpackContext.id = "G8Cn";

/***/ }),

/***/ "IcnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./src/timeline/timelineModel.js + 1 modules
var timelineModel = __webpack_require__("k02b");

// CONCATENATED MODULE: ./src/timeline/timelineDefaultStore.js



var timelineDefaultStore_state = function state() {
  return {
    columns: [],
    duration: 0,
    timeline: new timelineModel["default"](store.getters.uid, store.getters.table, 'Workbook ' + store.getters.indexer),
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

/* harmony default export */ var timelineDefaultStore = ({
  state: timelineDefaultStore_state,
  getters: getters,
  mutations: mutations
});
// CONCATENATED MODULE: ./src/store/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });




// hard coded at the moment. Need to refactor
var stateModule = timelineDefaultStore.state,
    store_getters = timelineDefaultStore.getters,
    store_mutations = timelineDefaultStore.mutations;


vue_esm["default"].use(vuex_esm["a" /* default */]);

// tiny table:
// table: 'pub.consumer_data.oi.ecom.test.support.report_type'

// small table
// table: 'pub.demo.baseball.batting'

// large tables:
// table: 'pub.consumer_data.oi.ecom.test.data.meow_combined'
// table: 'pub.consumer_data.oi.ecom.test.support.oi_base_table'

var store = new vuex_esm["a" /* default */].Store({
  state: {
    indexer: 1,
    table: 'pub.demo.baseball.batting',
    timelines: [],
    uid: 'oi_jcristini'
  },
  getters: {
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
    addTimeline: function addTimeline(state) {
      var newId = state.indexer++;
      state.timelines.push(newId);

      store.registerModule('timelineModule' + newId, {
        state: stateModule,
        getters: store_getters,
        mutations: store_mutations,
        namespaced: true // making our module reusable
      });
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
    updateUid: function updateUid(state, value) {
      state.uid = value;
    }
  }
});

/***/ }),

/***/ "IslV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/utilities/http-common.js


var HTTP = axios_default.a.create({
  baseURL: 'http://discover-appserver-java.us-west-2.elasticbeanstalk.com/'
  // baseURL: 'http://projects.tech-antics.com:9100/'
});
// CONCATENATED MODULE: ./src/timeline/timelineService.js


/* harmony default export */ var timelineService = __webpack_exports__["a"] = ({
  query: function query(options) {
    var query = {
      params: {
        start: options.start,
        end: options.end,
        uid: options.uid,
        tableName: options.uid
      }
    };
    return HTTP.get('api/query', query);
  },
  timeline: function timeline(options) {
    return HTTP.post('api/timeline/run', {
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
    return HTTP.post('api/timeline/macro', {
      loginInfo: {
        uid: options.uid
      },
      start: 0,
      end: 0,
      ops: options.ops
    });
  },
  workspaceLoad: function workspaceLoad(uid) {
    return HTTP.get('api/workspace/' + uid);
  },
  workspaceSave: function workspaceSave(timeline) {
    return HTTP.post('api/workspace', {
      loginInfo: {
        uid: timeline.uid
      },
      workspace: {
        timelines: [{
          name: timeline.name,
          ops: timeline.ops
        }]
      }
    });
  },
  workspaceRemove: function workspaceRemove(uid) {
    return HTTP.post('api/workspace/remove/' + uid);
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
});

/***/ }),

/***/ "JrJI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "Mhs4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./node_modules/vue-tidyroutes/dist/tidyroutes.js
var tidyroutes = __webpack_require__("sAf1");
var tidyroutes_default = /*#__PURE__*/__webpack_require__.n(tidyroutes);

// CONCATENATED MODULE: ./src/utilities/vue-file-loader.js
function requireAll(r, Vue) {
  r.keys().forEach(function (key) {
    Vue.component(r(key).default.name, r(key).default);
  });
}

var options = {
  install: function install(Vue) {
    requireAll(__webpack_require__("/1Rm"), Vue);
    // requireAll(require.context('./tabs', true, /\.vue$/), Vue)
  }
};

/* harmony default export */ var vue_file_loader = (options);
// CONCATENATED MODULE: ./src/pages/index.js
var pages_exports = {};

function pages_requireAll(r) {
  r.keys().forEach(function (key) {
    pages_exports[key] = r(key);
  });
}
pages_requireAll(__webpack_require__("G8Cn"));

/* harmony default export */ var pages = (pages_exports);
// EXTERNAL MODULE: ./src/store/index.js + 1 modules
var store = __webpack_require__("IcnI");

// EXTERNAL MODULE: ./node_modules/vue-nav-tabs/dist/vue-tabs.common.js
var vue_tabs_common = __webpack_require__("lEct");
var vue_tabs_common_default = /*#__PURE__*/__webpack_require__.n(vue_tabs_common);

// CONCATENATED MODULE: ./src/main.js




// Discover-Web components, pages and store

 // eslint-disable-line no-unused-vars


// External UI Items (i.e. OpenSource imports)


vue_esm["default"].use(vue_router_esm["a" /* default */]);
vue_esm["default"].use(vue_file_loader);

vue_esm["default"].use(vue_tabs_common_default.a);

var router = new vue_router_esm["a" /* default */]({
  routes: tidyroutes_default.a.export()
});

vue_esm["default"].config.productionTip = false;

var vm = new vue_esm["default"]({

  el: '#app',

  template: '\n    <div>\n      <router-view></router-view>\n    </div>',

  router: router,

  store: store["a" /* store */]
});

Object.defineProperties(vue_esm["default"].prototype, {
  $bus: {
    get: function get() {
      return vm;
    }
  }
});

window.vm = vm;

/***/ }),

/***/ "O5bT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
  created: function created() {
    console.log('select id', this.id);
  },

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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f0ac897","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/ops/select/select.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel panel-default"},[_c('div',{staticClass:"panel-heading"},[_vm._v("\n    "+_vm._s(_vm.op.op)+"\n    "),_c('button',{staticClass:"btn btn-danger pull-right",on:{"click":_vm.remove}},[_c('i',{staticClass:"fa fa-trash-o"})])]),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_vm._l((_vm.op.data.rules),function(rule,key,index){return _c('select-rule',{key:key,attrs:{"id":_vm.id,"rule":rule,"last":_vm.isLastRule(key)},on:{"removeRule":_vm.removeRule}})}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12 text-center"},[_c('button',{staticClass:"btn btn-default btn-add-or",on:{"click":_vm.addRule}},[_vm._v("Add 'Or'")])])])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var ops_select_select = (esExports);
// CONCATENATED MODULE: ./src/timeline/ops/select/select.vue
function injectStyle (ssrContext) {
  __webpack_require__("O5bT")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f0ac897"
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



/* harmony default export */ var selectRule = ({
  name: 'SelectRule',
  props: ['rule', 'last', 'id'],
  components: {
    Autocomplete: build_default.a
  },
  computed: {
    columns: function columns() {
      return this.$store.getters['timelineModule' + this.id + '/columns'] || [];
    }
  },
  watch: {
    columns: function columns() {
      this.setPredefinedValue();
    }
  },
  mounted: function mounted() {
    this.setPredefinedValue();
  },

  methods: {
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
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-11f923b6","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/ops/select/select-rule/selectRule.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-rule-container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-sm-12 tight-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.rule.term}},[_vm._v("Term "+_vm._s(_vm.rule.term))]),_vm._v(" "),_c('autocomplete',{ref:"autocomplete",attrs:{"source":_vm.columns,"initial-value":_vm.rule.term,"input-class":"form-control","results-display":_vm.formattedAutocomplete,"results-property":"field","results-value":"field"},model:{value:(_vm.rule.term),callback:function ($$v) {_vm.$set(_vm.rule, "term", $$v)},expression:"rule.term"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-sm-12 tight-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.rule.condition}},[_vm._v("Condition")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rule.condition),expression:"rule.condition"}],staticClass:"form-control",domProps:{"value":(_vm.rule.condition)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.rule, "condition", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-sm-12 tight-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.rule.value}},[_vm._v("Value")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rule.value),expression:"rule.value"}],staticClass:"form-control",domProps:{"value":(_vm.rule.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.rule, "value", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-1 col-sm-12 tight-gutter"},[_c('button',{staticClass:"delete-btn",on:{"click":_vm.removeRule}},[_c('i',{staticClass:"fa fa-trash-o"})])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.last),expression:"!last"}],staticClass:"row label-or"},[_vm._m(0,false,false)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-12 text-center"},[_c('span',{staticClass:"label label-primary"},[_vm._v("Or")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var select_rule_selectRule = (esExports);
// CONCATENATED MODULE: ./src/timeline/ops/select/select-rule/selectRule.vue
function injectStyle (ssrContext) {
  __webpack_require__("Mhs4")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-11f923b6"
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f057103a","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/ops/compute/compute.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel panel-default compute"},[_c('div',{staticClass:"panel-heading"},[_vm._v("\n    Column\n    "),_c('button',{staticClass:"btn btn-danger pull-right",on:{"click":_vm.remove}},[_c('i',{staticClass:"fa fa-trash-o"})])]),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3 col-sm-12 no-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.op.data.name}},[_vm._v("Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.op.data.name),expression:"op.data.name"}],staticClass:"form-control",domProps:{"value":(_vm.op.data.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.op.data, "name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 col-sm-12 no-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.op.data.label}},[_vm._v("Label")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.op.data.label),expression:"op.data.label"}],staticClass:"form-control",domProps:{"value":(_vm.op.data.label)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.op.data, "label", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-sm-12 no-gutter"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.op.data.expression}},[_vm._v("Expression")]),_vm._v(" "),_c('multiselect',{ref:"computeSelect",attrs:{"tag-placeholder":"Add new selection","placeholder":"Search or add a selection","track-by":"search","options":_vm.columns,"multiple":true,"taggable":true,"showLabels":false,"custom-label":_vm.columnLabel,"close-on-select":false,"clear-on-select":true},on:{"tag":_vm.addTag},model:{value:(_vm.selectedColumns),callback:function ($$v) {_vm.selectedColumns=$$v},expression:"selectedColumns"}})],1)])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var compute_compute = (esExports);
// CONCATENATED MODULE: ./src/timeline/ops/compute/compute.vue
function injectStyle (ssrContext) {
  __webpack_require__("6WwF")
  __webpack_require__("Tz1C")
  __webpack_require__("1BnB")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f057103a"
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

/***/ "TrDY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Tz1C":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U6lY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vue-tidyroutes/dist/tidyroutes.js
var tidyroutes = __webpack_require__("sAf1");
var tidyroutes_default = /*#__PURE__*/__webpack_require__.n(tidyroutes);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/agGrid/agGrid.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var AgGrid = {
  name: 'agGrid',
  computed: {
    table: function table() {
      return this.$store.state.table;
    },
    timelines: function timelines() {
      return this.$store.state.timelines;
    },
    uid: function uid() {
      return this.$store.state.uid;
    }
  },
  data: function data() {
    return {
      addModal: null,
      removeId: undefined,
      removeModal: null,
      tabName: ''
    };
  },
  mounted: function mounted() {
    // assign add modal elem
    this.addModal = jQuery(this.$el.children.timelineModal);
    this.removeModal = jQuery(this.$el.children.confirmModal);
  },

  methods: extends_default()({
    createTimeline: function createTimeline() {
      var _this = this;

      this.addTimeline();

      // have to set it back one after adding new timeline.
      // then set it back 2 so that we are on the latest tab.
      this.$refs.tabs.changeTab(this.$refs.tabs.activeTabIndex, this.$refs.tabs.tabs.length - 1);
      this.$nextTick(function () {
        _this.addModal.modal('hide');
        _this.$refs.tabs.changeTab(_this.$refs.tabs.activeTabIndex, _this.$refs.tabs.tabs.length - 2);
      });
    },
    getTimelineTitle: function getTimelineTitle(t) {
      return this.$store.getters['timelineModule' + t + '/timeline'].name || 'name not found';
    },
    handleTabChange: function handleTabChange(tabIndex, newTab, oldTab) {
      if (newTab.title === '' && this.$refs.tabs.tabs.length - 1 === tabIndex && this.removeId === undefined) {
        this.addModal.modal('show');
      }
    },
    removeTimelineConfirmed: function removeTimelineConfirmed() {
      var _this2 = this;

      // fixes issue where vtabs active property is undefined
      var currentTabIndex = this.$refs.tabs.activeTabIndex;
      if (currentTabIndex > 0) {
        this.$refs.tabs.changeTab(currentTabIndex, 0);
      }

      this.removeModal.modal('hide');
      this.$nextTick(function () {
        _this2.$store.commit('removeTimeline', _this2.removeId);
        _this2.$nextTick(function () {
          // this is a sub tick because removeTimeline triggers handleTabChange which auto fires again
          // to avoid this behavoir removeId is checked to ensure it is undefined.
          _this2.removeId = undefined;
        });
      });
    },
    removeTimeline: function removeTimeline(id) {
      this.removeId = id;
      this.removeModal.modal('show');
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
  }, Object(vuex_esm["b" /* mapMutations */])(['addTimeline', 'increment']))
};

tidyroutes_default.a.route('/', {
  name: 'AgGrid',
  component: AgGrid
});

/* harmony default export */ var agGrid = (AgGrid);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-329cede1","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/agGrid/agGrid.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('vue-tabs',{ref:"tabs",staticClass:"timeline--tabs",on:{"tab-change":_vm.handleTabChange},model:{value:(_vm.tabName),callback:function ($$v) {_vm.tabName=$$v},expression:"tabName"}},[_vm._l((_vm.timelines),function(t,index,key){return _c('v-tab',{key:key},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('span',{attrs:{"id":t,"contenteditable":""},domProps:{"innerHTML":_vm._s(_vm.getTimelineTitle(t))},on:{"input":_vm.updateTimelineName}}),_vm._v(" "),_c('i',{staticClass:"fa fa-close padding-left-5",on:{"click":function($event){_vm.removeTimeline(t)}}})]),_vm._v(" "),_c('timeline',{attrs:{"id":t}})],1)}),_vm._v(" "),_c('v-tab',{staticClass:"add"},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('i',{staticClass:"fa fa-plus"})])])],2)],1)])]),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"timelineModal","tabindex":"-1","role":"dialog","aria-labelledby":"myModalLabel"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_vm._m(0,false,false),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.uid}},[_vm._v("UID")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"UID"},domProps:{"value":_vm.uid},on:{"input":_vm.updateUid}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":_vm.table}},[_vm._v("Open Table")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Open Table"},domProps:{"value":_vm.table},on:{"input":_vm.updateTable}})])])])]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-default",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":_vm.createTimeline}},[_vm._v("Add")])])])])]),_vm._v(" "),_c('div',{staticClass:"modal fade",attrs:{"id":"confirmModal","tabindex":"-1","role":"dialog","aria-labelledby":"myRemoveLabel"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_vm._m(1,false,false),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_vm._v("\n          Are you sure you want to delete this worksheet?\n        ")]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-default",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Cancel")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"},on:{"click":_vm.removeTimelineConfirmed}},[_vm._v("Yes remove!")])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]),_vm._v(" "),_c('h4',{staticClass:"modal-title",attrs:{"id":"myModalLabel"}},[_vm._v("Add Worksheet")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]),_vm._v(" "),_c('h4',{staticClass:"modal-title",attrs:{"id":"myModalLabel"}},[_vm._v("Are you sure?")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var agGrid_agGrid = (esExports);
// CONCATENATED MODULE: ./src/pages/agGrid/agGrid.vue
function injectStyle (ssrContext) {
  __webpack_require__("TrDY")
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
  agGrid,
  agGrid_agGrid,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var pages_agGrid_agGrid = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "UyOL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var Select = function () {
  function Select() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Select);

    this.id = 0;
    this.op = 'Select';
    this.data = {
      rules: []
    };
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Select, [{
    key: 'createFromSource',
    value: function createFromSource(select) {
      return Object.assign(this, select);
    }
  }]);

  return Select;
}();

/* harmony default export */ __webpack_exports__["default"] = (Select);

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

/***/ "erTp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "h9SQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var OpenTable = function () {
  function OpenTable(options) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, OpenTable);

    this.id = 0;
    this.op = 'OpenTable';
    this.data = {
      table: options.table || ''
    };
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(OpenTable, [{
    key: 'createFromSource',
    value: function createFromSource(table) {
      return Object.assign(this, table);
    }
  }]);

  return OpenTable;
}();

/* harmony default export */ __webpack_exports__["default"] = (OpenTable);

/***/ }),

/***/ "k02b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/utilities/componentModels.js
var componentModels_exports = {};

function requireAll(r) {
  r.keys().forEach(function (key) {
    if (r(key).default) {
      componentModels_exports[r(key).default.name] = r(key).default;
    } else {}
  });
}
requireAll(__webpack_require__("Y0jW"));

/* harmony default export */ var componentModels = (componentModels_exports);
// EXTERNAL MODULE: ./src/store/index.js + 1 modules
var store = __webpack_require__("IcnI");

// CONCATENATED MODULE: ./src/timeline/timelineModel.js





var timelineModel_Timeline = function () {
  function Timeline(uid, table, name) {
    classCallCheck_default()(this, Timeline);

    this._currentId = 1;

    this.uid = uid;
    this.name = name || 'Workspace ' + this._currentId;
    this.ops = [];
    this.columns = [];

    this.add('OpenTable', { table: table });
  }

  createClass_default()(Timeline, [{
    key: 'createFromSource',
    value: function createFromSource(timeline) {
      Object.assign(this, timeline);
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
      var op = new componentModels[opType](options);

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
      var rule = new componentModels['SelectRule']();
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
        var operation = new componentModels[op.op](op).createFromSource(op);
        if (op.op === 'Select') {
          operation.data.rules = op.data.rules.map(function (r) {
            var rule = new componentModels['SelectRule']().createFromSource(r);
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
      this.add('OpenTable', { table: store["a" /* store */].getters.table });
    }
  }]);

  return Timeline;
}();

/* harmony default export */ var timelineModel = __webpack_exports__["default"] = (timelineModel_Timeline);

/***/ }),

/***/ "kw4V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue-tidyroutes/dist/tidyroutes.js
var tidyroutes = __webpack_require__("sAf1");
var tidyroutes_default = /*#__PURE__*/__webpack_require__.n(tidyroutes);

// EXTERNAL MODULE: ./src/timeline/timelineService.js + 1 modules
var timelineService = __webpack_require__("IslV");

// EXTERNAL MODULE: ./node_modules/fin-hypergrid/index.js
var fin_hypergrid = __webpack_require__("oFkT");
var fin_hypergrid_default = /*#__PURE__*/__webpack_require__.n(fin_hypergrid);

// EXTERNAL MODULE: ./node_modules/fin-hypergrid/src/lib/fields.js
var fields = __webpack_require__("C1Ei");
var fields_default = /*#__PURE__*/__webpack_require__.n(fields);

// EXTERNAL MODULE: ./node_modules/fin-hypergrid/src/behaviors/JSON.js
var behaviors_JSON = __webpack_require__("9vUn");
var JSON_default = /*#__PURE__*/__webpack_require__.n(behaviors_JSON);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/pages/hypergrid/hypergridRepository.js



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

var hypergridRepository_HyperGridRepository = function () {
  function HyperGridRepository(grid, options) {
    classCallCheck_default()(this, HyperGridRepository);

    this.frame = [];

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
  }

  createClass_default()(HyperGridRepository, [{
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

/* harmony default export */ var hypergridRepository = (hypergridRepository_HyperGridRepository);
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
      return JSON.stringify(this.timeline, null, 2);
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

        this.repository = new hypergridRepository(this.grid, { bufferLen: 100 });

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
      var options = JSON.parse(JSON.stringify(self.timeline));
      Object.assign(options, {
        startRow: self.startRow,
        endRow: self.endRow
      });
      // console.log(options)
      timelineService["a" /* default */].timeline(options).then(function (res) {
        var gridData = timelineService["a" /* default */].transform(res);
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

/***/ "pO4p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qe0M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ag-grid-vue/main.js
var main = __webpack_require__("Ku5W");
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// EXTERNAL MODULE: ./src/timeline/timelineService.js + 1 modules
var timelineService = __webpack_require__("IslV");

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
//
//
//

// components

// services


/* harmony default export */ var timeline = ({
  name: 'timeline',
  props: ['id'],
  components: {
    AgGridVue: main["AgGridVue"]
  },
  data: function data() {
    return {
      currentStart: 0,
      gridOptions: {
        rowModelType: 'infinite',
        paginationPageSize: 100,
        maxBlocksInCache: 10,
        maxConcurrentDatasourceRequests: 1,
        datasource: undefined,
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
      return JSON.stringify(this.timeline, null, 2);
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
    this.gridOptions.datasource = this.createDataSource();
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

      timelineService["a" /* default */].timelineAsMacro(self.timeline).then(function (res) {
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
      this.currentStart = this.gridOptions.api.getFirstDisplayedRow();
      this.gridOptions.api.setDatasource(this.createDataSource());
    },
    timelineLoad: function timelineLoad() {
      var self = this;
      timelineService["a" /* default */].workspaceLoad(this.timeline.uid).then(function (res) {
        if (res.status === 200) {
          self.timeline.setOperations(res.data.timelines[0]);
          // alert loaded
        } else {
            // alert failed to load
          }
      });
    },
    timelineSave: function timelineSave() {
      // var self = this
      timelineService["a" /* default */].workspaceSave(this.timeline).then(function (res) {
        if (res.status === 200) {
          // alert save
        } else {
            // alert save failed
          }
      });
    },
    timelineRemove: function timelineRemove() {
      var self = this;
      timelineService["a" /* default */].workspaceRemove(this.timeline.uid).then(function (res) {
        if (res.status === 200) {
          self.timeline.removeOperations();
          // alert removed
        } else {
            // alert removed failed
          }
      });
    },
    createDataSource: function createDataSource() {
      var _this = this;

      var self = this;
      return {
        getRows: function getRows(params) {
          // clone initial object then add start and end row
          var options = JSON.parse(JSON.stringify(self.timeline));
          Object.assign(options, {
            startRow: params.startRow,
            endRow: params.endRow
          });

          timelineService["a" /* default */].timeline(options).then(function (res) {
            var grid = timelineService["a" /* default */].transformAgGrid(res);
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1c723b37","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/timeline/timeline.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row timeline"},[_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"uid"}},[_vm._v("User Id")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.timeline.uid),expression:"timeline.uid"}],staticClass:"form-control",domProps:{"value":(_vm.timeline.uid)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.timeline, "uid", $event.target.value)}}})]),_vm._v(" "),_c('vue-tabs',{staticClass:"ops--tabs",on:{"tab-change":_vm.handleTabChange}},[_c('v-tab',{attrs:{"title":"Timeline"}},[_vm._l((_vm.timeline.ops),function(op,key,index){return _c('div',{key:key,staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c(_vm.getComponentType(op),{tag:"component",attrs:{"op":op,"id":_vm.id},on:{"addRule":_vm.addRule,"freezeAtBoth":_vm.freezeAtBoth,"freezeAtColumn":_vm.freezeAtColumn,"freezeAtRow":_vm.freezeAtRow,"remove":_vm.remove,"removeRule":_vm.removeRule}})],1)])])])}),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('button',{staticClass:"btn btn-default",on:{"click":_vm.addCompute}},[_vm._v("Add Column")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":_vm.addSelect}},[_vm._v("Add Select")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":_vm.runTimeline}},[_vm._v("Run Timeline")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12 text-center padding-top"},[_c('button',{staticClass:"btn btn-info",on:{"click":_vm.timelineLoad}},[_vm._v("Load")]),_vm._v(" "),_c('button',{staticClass:"btn btn-info",on:{"click":_vm.timelineSave}},[_vm._v("Save")]),_vm._v(" "),_c('button',{staticClass:"btn btn-info",on:{"click":_vm.timelineRemove}},[_vm._v("Remove")])])])],2),_vm._v(" "),_c('v-tab',{attrs:{"title":"Json"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.json),expression:"json"}],staticClass:"readonly-textarea",attrs:{"readonly":""},domProps:{"value":(_vm.json)},on:{"input":function($event){if($event.target.composing){ return; }_vm.json=$event.target.value}}})]),_vm._v(" "),_c('v-tab',{attrs:{"title":"Macro"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.macro),expression:"!macro"}],staticClass:"text-center"},[_c('img',{attrs:{"src":"static/images/loading.gif","alt":"loading macro data"}})]),_vm._v(" "),_c('textarea',{directives:[{name:"show",rawName:"v-show",value:(_vm.macro),expression:"macro"},{name:"model",rawName:"v-model",value:(_vm.macro),expression:"macro"}],staticClass:"readonly-textarea",attrs:{"readonly":""},domProps:{"value":(_vm.macro)},on:{"input":function($event){if($event.target.composing){ return; }_vm.macro=$event.target.value}}})])],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-8"},[_c('div',{staticClass:"row info"},[_c('div',{staticClass:"col-md-12"},[_c('span',{staticClass:"badge"},[_vm._v("Total Rows: "+_vm._s(_vm.totalRows))]),_vm._v(" "),_c('span',{staticClass:"badge"},[_vm._v("Load Time: "+_vm._s(_vm.duration)+" ms")])])]),_vm._v(" "),_c('ag-grid-vue',{staticClass:"ag-fresh",staticStyle:{"width":"100%","height":"500px"},attrs:{"gridOptions":_vm.gridOptions,"columnDefs":_vm.gridOptions.columnDefs}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var timeline_timeline = (esExports);
// CONCATENATED MODULE: ./src/timeline/timeline.vue
function injectStyle (ssrContext) {
  __webpack_require__("Exlp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c723b37"
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


/***/ })

},["NHnr"]);
//# sourceMappingURL=app.e8c02f36be038b4cbcc2.js.map