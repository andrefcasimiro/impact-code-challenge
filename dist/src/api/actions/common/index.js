"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const R = __importStar(require("ramda"));
const helpers_1 = require("./helpers");
exports.get = async (key, id) => await helpers_1.fetchHelper(key, id);
exports.list = async (key, filters) => {
    const table = await helpers_1.fetchHelper(key);
    if (!filters || R.isEmpty(filters)) {
        return table;
    }
    let result = [];
    table.forEach((entry) => {
        Object.keys(filters).forEach((field) => {
            if (typeof filters[field][0] === 'number') {
                result = entry[field] >= filters[field][0] && !result.includes(entry)
                    ? result.concat(entry)
                    : result;
            }
            if (filters[field].includes(entry[field]) && !result.includes(entry)) {
                result = result.concat(entry);
            }
        });
    });
    return result;
};
exports.add = async (key, input) => {
    const table = await helpers_1.fetchHelper(key);
    let _input = {
        id: table.length + 1,
    };
    Object.keys(input).forEach(key => {
        _input = Object.assign({}, _input, { [key]: helpers_1.sanitize([input[key]])[0] });
    });
    return await helpers_1.postHelper(key, _input);
};
