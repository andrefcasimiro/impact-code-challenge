"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const R = __importStar(require("ramda"));
const config_1 = __importDefault(require("../../../App/config"));
const fetch = require('node-fetch');
const baseURI = config_1.default.corsOptions.origin;
exports.fetchHelper = (key, id) => {
    const endpoint = id ? `${baseURI}/${key}/${id}` : `${baseURI}/${key}`;
    return fetch(endpoint).then((result) => result.json());
};
exports.postHelper = (key, input) => {
    const endpoint = `${baseURI}/${key}`;
    return fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(input),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((result) => result.json());
};
exports.sanitize = (list) => list.map((item) => {
    if (typeof item === 'string' && !R.isEmpty(item)) {
        return item.replace(/<[^>]*>?/gm, '').trim();
    }
    if (Array.isArray(item)) {
        return exports.sanitize(item);
    }
    if (typeof item === 'object') {
        let _object = {};
        Object.keys(item).forEach((itemKey) => {
            _object = Object.assign({}, _object, { [itemKey]: (exports.sanitize([item[itemKey]]))[0] });
        });
        return _object;
    }
    return item;
});
