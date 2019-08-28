"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
exports.get = async (key, id) => await helpers_1.fetchHelper(key, id);
exports.list = async (key, filters) => {
    const table = await helpers_1.fetchHelper(key);
    let result = [];
    table.forEach((entry) => {
        Object.keys(filters).forEach((field) => {
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
