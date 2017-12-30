webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(4);

var _cloudComputing = __webpack_require__(5);

var _cloudComputing2 = _interopRequireDefault(_cloudComputing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const image = document.createElement('img');
//image.src = 'http://lorempixel.com/400/400';


/*No caso desta imagem, por ser muito grande o webpack vai inclui-la no bundle.
Neste caso vamos ter erro ao tentar localizar o arquivo para solucionar está situação
em webpack.config será necessária a configuração do atributo publicPath*/

/*const image1 = document.createElement('img');
image1.src = grandeImagem;

const image2 = document.createElement('img');
image2.src = pequenaImagem;

document.body.appendChild(image);
document.body.appendChild(image1);
document.body.appendChild(image2);*/

exports.default = function () {
    var image2 = document.createElement('img');
    image2.src = _cloudComputing2.default;
    document.body.appendChild(image2);
};
//Carrega as imagens em base64
//import grandeImagem from '../assets/1200x1200.jpg';

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "img {\r\n    border: 10px solid black;\r\n}", ""]);

// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }
]);