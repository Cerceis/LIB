"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressionHash = exports.primeConst = void 0;
exports.primeConst = [
    [
        '0', '1', '0', '0', '0', '0',
        '1', '0', '1', '0', '0', '0',
        '1', '0', '1', '0', '0', '0',
        '1', '0', '1', '1', '1', '1',
        '1', '0', '0', '1', '1', '0',
        '0', '0'
    ],
    [
        '0', '1', '1', '1', '0', '0',
        '0', '1', '0', '0', '1', '1',
        '0', '1', '1', '1', '0', '1',
        '0', '0', '0', '1', '0', '0',
        '1', '0', '0', '1', '0', '0',
        '0', '1'
    ],
    [
        '1', '0', '1', '1', '0', '1',
        '0', '1', '1', '1', '0', '0',
        '0', '0', '0', '0', '1', '1',
        '1', '1', '1', '0', '1', '1',
        '1', '1', '0', '0', '1', '1',
        '1', '1'
    ],
    [
        '1', '1', '1', '0', '1', '0',
        '0', '1', '1', '0', '1', '1',
        '0', '1', '0', '1', '1', '1',
        '0', '1', '1', '0', '1', '1',
        '1', '0', '1', '0', '0', '1',
        '0', '1'
    ],
    [
        '0', '0', '1', '1', '1', '0',
        '0', '1', '0', '1', '0', '1',
        '0', '1', '1', '0', '1', '1',
        '0', '0', '0', '0', '1', '0',
        '0', '1', '0', '1', '1', '0',
        '1', '1'
    ],
    [
        '0', '1', '0', '1', '1', '0',
        '0', '1', '1', '1', '1', '1',
        '0', '0', '0', '1', '0', '0',
        '0', '1', '0', '0', '0', '1',
        '1', '1', '1', '1', '0', '0',
        '0', '1'
    ],
    [
        '1', '0', '0', '1', '0', '0',
        '1', '0', '0', '0', '1', '1',
        '1', '1', '1', '1', '1', '0',
        '0', '0', '0', '0', '1', '0',
        '1', '0', '1', '0', '0', '1',
        '0', '0'
    ],
    [
        '1', '0', '1', '0', '1', '0',
        '1', '1', '0', '0', '0', '1',
        '1', '1', '0', '0', '0', '1',
        '0', '1', '1', '1', '1', '0',
        '1', '1', '0', '1', '0', '1',
        '0', '1'
    ],
    [
        '1', '1', '0', '1', '1', '0',
        '0', '0', '0', '0', '0', '0',
        '0', '1', '1', '1', '1', '0',
        '1', '0', '1', '0', '1', '0',
        '1', '0', '0', '1', '1', '0',
        '0', '0'
    ],
    [
        '0', '0', '0', '1', '0', '0',
        '1', '0', '1', '0', '0', '0',
        '0', '0', '1', '1', '0', '1',
        '0', '1', '1', '0', '1', '1',
        '0', '0', '0', '0', '0', '0',
        '0', '1'
    ],
    [
        '0', '0', '1', '0', '0', '1',
        '0', '0', '0', '0', '1', '1',
        '0', '0', '0', '1', '1', '0',
        '0', '0', '0', '1', '0', '1',
        '1', '0', '1', '1', '1', '1',
        '1', '0'
    ],
    [
        '0', '1', '0', '1', '0', '1',
        '0', '1', '0', '0', '0', '0',
        '1', '1', '0', '0', '0', '1',
        '1', '1', '1', '1', '0', '1',
        '1', '1', '0', '0', '0', '0',
        '1', '1'
    ],
    [
        '0', '1', '1', '1', '0', '0',
        '1', '0', '1', '0', '1', '1',
        '1', '1', '1', '0', '0', '1',
        '0', '1', '1', '1', '0', '1',
        '0', '1', '1', '1', '0', '1',
        '0', '0'
    ],
    [
        '1', '0', '0', '0', '0', '0',
        '0', '0', '1', '1', '0', '1',
        '1', '1', '1', '0', '1', '0',
        '1', '1', '0', '0', '0', '1',
        '1', '1', '1', '1', '1', '1',
        '1', '0'
    ],
    [
        '1', '0', '0', '1', '1', '0',
        '1', '1', '1', '1', '0', '1',
        '1', '1', '0', '0', '0', '0',
        '0', '0', '0', '1', '1', '0',
        '1', '0', '1', '0', '0', '1',
        '1', '1'
    ],
    [
        '1', '1', '0', '0', '0', '0',
        '0', '1', '1', '0', '0', '1',
        '1', '0', '1', '1', '1', '1',
        '1', '1', '0', '0', '0', '1',
        '0', '1', '1', '1', '0', '1',
        '0', '0'
    ],
    [
        '1', '1', '1', '0', '0', '1',
        '0', '0', '1', '0', '0', '1',
        '1', '0', '1', '1', '0', '1',
        '1', '0', '1', '0', '0', '1',
        '1', '1', '0', '0', '0', '0',
        '0', '1'
    ],
    [
        '1', '1', '1', '0', '1', '1',
        '1', '1', '1', '0', '1', '1',
        '1', '1', '1', '0', '0', '1',
        '0', '0', '0', '1', '1', '1',
        '1', '0', '0', '0', '0', '1',
        '1', '0'
    ],
    [
        '0', '0', '0', '0', '1', '1',
        '1', '1', '1', '1', '0', '0',
        '0', '0', '0', '1', '1', '0',
        '0', '1', '1', '1', '0', '1',
        '1', '1', '0', '0', '0', '1',
        '1', '0'
    ],
    [
        '0', '0', '1', '0', '0', '1',
        '0', '0', '0', '0', '0', '0',
        '1', '1', '0', '0', '1', '0',
        '1', '0', '0', '0', '0', '1',
        '1', '1', '0', '0', '1', '1',
        '0', '0'
    ],
    [
        '0', '0', '1', '0', '1', '1',
        '0', '1', '1', '1', '1', '0',
        '1', '0', '0', '1', '0', '0',
        '1', '0', '1', '1', '0', '0',
        '0', '1', '1', '0', '1', '1',
        '1', '1'
    ],
    [
        '0', '1', '0', '0', '1', '0',
        '1', '0', '0', '1', '1', '1',
        '0', '1', '0', '0', '1', '0',
        '0', '0', '0', '1', '0', '0',
        '1', '0', '1', '0', '1', '0',
        '1', '0'
    ],
    [
        '0', '1', '0', '1', '1', '1',
        '0', '0', '1', '0', '1', '1',
        '0', '0', '0', '0', '1', '0',
        '1', '0', '1', '0', '0', '1',
        '1', '1', '0', '1', '1', '1',
        '0', '0'
    ],
    [
        '0', '1', '1', '1', '0', '1',
        '1', '0', '1', '1', '1', '1',
        '1', '0', '0', '1', '1', '0',
        '0', '0', '1', '0', '0', '0',
        '1', '1', '0', '1', '1', '0',
        '1', '0'
    ],
    [
        '1', '0', '0', '1', '1', '0',
        '0', '0', '0', '0', '1', '1',
        '1', '1', '1', '0', '0', '1',
        '0', '1', '0', '0', '0', '1',
        '0', '1', '0', '1', '0', '0',
        '1', '0'
    ],
    [
        '1', '0', '1', '0', '1', '0',
        '0', '0', '0', '0', '1', '1',
        '0', '0', '0', '1', '1', '1',
        '0', '0', '0', '1', '1', '0',
        '0', '1', '1', '0', '1', '1',
        '0', '1'
    ],
    [
        '1', '0', '1', '1', '0', '0',
        '0', '0', '0', '0', '0', '0',
        '0', '0', '1', '1', '0', '0',
        '1', '0', '0', '1', '1', '1',
        '1', '1', '0', '0', '1', '0',
        '0', '0'
    ],
    [
        '1', '0', '1', '1', '1', '1',
        '1', '1', '0', '1', '0', '1',
        '1', '0', '0', '1', '0', '1',
        '1', '1', '1', '1', '1', '1',
        '1', '1', '0', '0', '0', '1',
        '1', '1'
    ],
    [
        '1', '1', '0', '0', '0', '1',
        '1', '0', '1', '1', '1', '0',
        '0', '0', '0', '0', '0', '0',
        '0', '0', '1', '0', '1', '1',
        '1', '1', '1', '1', '0', '0',
        '1', '1'
    ],
    [
        '1', '1', '0', '1', '0', '1',
        '0', '1', '1', '0', '1', '0',
        '0', '1', '1', '1', '1', '0',
        '0', '1', '0', '0', '0', '1',
        '0', '1', '0', '0', '0', '1',
        '1', '1'
    ],
    [
        '0', '0', '0', '0', '0', '1',
        '1', '0', '1', '1', '0', '0',
        '1', '0', '1', '0', '0', '1',
        '1', '0', '0', '0', '1', '1',
        '0', '1', '0', '1', '0', '0',
        '0', '1'
    ],
    [
        '0', '0', '0', '1', '0', '1',
        '0', '0', '0', '0', '1', '0',
        '1', '0', '0', '1', '0', '0',
        '1', '0', '1', '0', '0', '1',
        '0', '1', '1', '0', '0', '1',
        '1', '1'
    ],
    [
        '0', '0', '1', '0', '0', '1',
        '1', '1', '1', '0', '1', '1',
        '0', '1', '1', '1', '0', '0',
        '0', '0', '1', '0', '1', '0',
        '1', '0', '0', '0', '0', '1',
        '0', '1'
    ],
    [
        '0', '0', '1', '0', '1', '1',
        '1', '0', '0', '0', '0', '1',
        '1', '0', '1', '1', '0', '0',
        '1', '0', '0', '0', '0', '1',
        '0', '0', '1', '1', '1', '0',
        '0', '0'
    ],
    [
        '0', '1', '0', '0', '1', '1',
        '0', '1', '0', '0', '1', '0',
        '1', '1', '0', '0', '0', '1',
        '1', '0', '1', '1', '0', '1',
        '1', '1', '1', '1', '1', '1',
        '0', '0'
    ],
    [
        '0', '1', '0', '1', '0', '0',
        '1', '1', '0', '0', '1', '1',
        '1', '0', '0', '0', '0', '0',
        '0', '0', '1', '1', '0', '1',
        '0', '0', '0', '1', '0', '0',
        '1', '1'
    ],
    [
        '0', '1', '1', '0', '0', '1',
        '0', '1', '0', '0', '0', '0',
        '1', '0', '1', '0', '0', '1',
        '1', '1', '0', '0', '1', '1',
        '0', '1', '0', '1', '0', '1',
        '0', '0'
    ],
    [
        '0', '1', '1', '1', '0', '1',
        '1', '0', '0', '1', '1', '0',
        '1', '0', '1', '0', '0', '0',
        '0', '0', '1', '0', '1', '0',
        '1', '0', '1', '1', '1', '0',
        '1', '1'
    ],
    [
        '1', '0', '0', '0', '0', '0',
        '0', '1', '1', '1', '0', '0',
        '0', '0', '1', '0', '1', '1',
        '0', '0', '1', '0', '0', '1',
        '0', '0', '1', '0', '1', '1',
        '1', '0'
    ],
    [
        '1', '0', '0', '1', '0', '0',
        '1', '0', '0', '1', '1', '1',
        '0', '0', '1', '0', '0', '0',
        '1', '0', '1', '1', '0', '0',
        '1', '0', '0', '0', '0', '1',
        '0', '1'
    ],
    [
        '1', '0', '1', '0', '0', '0',
        '1', '0', '1', '0', '1', '1',
        '1', '1', '1', '1', '1', '1',
        '1', '0', '1', '0', '0', '0',
        '1', '0', '1', '0', '0', '0',
        '0', '1'
    ],
    [
        '1', '0', '1', '0', '1', '0',
        '0', '0', '0', '0', '0', '1',
        '1', '0', '1', '0', '0', '1',
        '1', '0', '0', '1', '1', '0',
        '0', '1', '0', '0', '1', '0',
        '1', '1'
    ],
    [
        '1', '1', '0', '0', '0', '0',
        '1', '0', '0', '1', '0', '0',
        '1', '0', '1', '1', '1', '0',
        '0', '0', '1', '0', '1', '1',
        '0', '1', '1', '1', '0', '0',
        '0', '0'
    ],
    [
        '1', '1', '0', '0', '0', '1',
        '1', '1', '0', '1', '1', '0',
        '1', '1', '0', '0', '0', '1',
        '0', '1', '0', '0', '0', '1',
        '1', '0', '1', '0', '0', '0',
        '1', '1'
    ],
    [
        '1', '1', '0', '1', '0', '0',
        '0', '1', '1', '0', '0', '1',
        '0', '0', '1', '0', '1', '1',
        '1', '0', '1', '0', '0', '0',
        '0', '0', '0', '1', '1', '0',
        '0', '1'
    ],
    [
        '1', '1', '0', '1', '0', '1',
        '1', '0', '1', '0', '0', '1',
        '1', '0', '0', '1', '0', '0',
        '0', '0', '0', '1', '1', '0',
        '0', '0', '1', '0', '0', '1',
        '0', '0'
    ],
    [
        '1', '1', '1', '1', '0', '1',
        '0', '0', '0', '0', '0', '0',
        '1', '1', '1', '0', '0', '0',
        '1', '1', '0', '1', '0', '1',
        '1', '0', '0', '0', '0', '1',
        '0', '1'
    ],
    [
        '0', '0', '0', '1', '0', '0',
        '0', '0', '0', '1', '1', '0',
        '1', '0', '1', '0', '1', '0',
        '1', '0', '0', '0', '0', '0',
        '0', '1', '1', '1', '0', '0',
        '0', '0'
    ],
    [
        '0', '0', '0', '1', '1', '0',
        '0', '1', '1', '0', '1', '0',
        '0', '1', '0', '0', '1', '1',
        '0', '0', '0', '0', '0', '1',
        '0', '0', '0', '1', '0', '1',
        '1', '0'
    ],
    [
        '0', '0', '0', '1', '1', '1',
        '1', '0', '0', '0', '1', '1',
        '0', '1', '1', '1', '0', '1',
        '1', '0', '1', '1', '0', '0',
        '0', '0', '0', '0', '1', '0',
        '0', '0'
    ],
    [
        '0', '0', '1', '0', '0', '1',
        '1', '1', '0', '1', '0', '0',
        '1', '0', '0', '0', '0', '1',
        '1', '1', '0', '1', '1', '1',
        '0', '1', '0', '0', '1', '1',
        '0', '0'
    ],
    [
        '0', '0', '1', '1', '0', '1',
        '0', '0', '1', '0', '1', '1',
        '0', '0', '0', '0', '1', '0',
        '1', '1', '1', '1', '0', '0',
        '1', '0', '1', '1', '0', '1',
        '0', '1'
    ],
    [
        '0', '0', '1', '1', '1', '0',
        '0', '1', '0', '0', '0', '1',
        '1', '1', '0', '0', '0', '0',
        '0', '0', '1', '1', '0', '0',
        '1', '0', '1', '1', '0', '0',
        '1', '1'
    ],
    [
        '0', '1', '0', '0', '1', '1',
        '1', '0', '1', '1', '0', '1',
        '1', '0', '0', '0', '1', '0',
        '1', '0', '1', '0', '1', '0',
        '0', '1', '0', '0', '1', '0',
        '1', '0'
    ],
    [
        '0', '1', '0', '1', '1', '0',
        '1', '1', '1', '0', '0', '1',
        '1', '1', '0', '0', '1', '1',
        '0', '0', '1', '0', '1', '0',
        '0', '1', '0', '0', '1', '1',
        '1', '1'
    ],
    [
        '0', '1', '1', '0', '1', '0',
        '0', '0', '0', '0', '1', '0',
        '1', '1', '1', '0', '0', '1',
        '1', '0', '1', '1', '1', '1',
        '1', '1', '1', '1', '0', '0',
        '1', '1'
    ],
    [
        '0', '1', '1', '1', '0', '1',
        '0', '0', '1', '0', '0', '0',
        '1', '1', '1', '1', '1', '0',
        '0', '0', '0', '0', '1', '0',
        '1', '1', '1', '0', '1', '1',
        '1', '0'
    ],
    [
        '0', '1', '1', '1', '1', '0',
        '0', '0', '1', '0', '1', '0',
        '0', '1', '0', '1', '0', '1',
        '1', '0', '0', '0', '1', '1',
        '0', '1', '1', '0', '1', '1',
        '1', '1'
    ],
    [
        '1', '0', '0', '0', '0', '1',
        '0', '0', '1', '1', '0', '0',
        '1', '0', '0', '0', '0', '1',
        '1', '1', '1', '0', '0', '0',
        '0', '0', '0', '1', '0', '1',
        '0', '0'
    ],
    [
        '1', '0', '0', '0', '1', '1',
        '0', '0', '1', '1', '0', '0',
        '0', '1', '1', '1', '0', '0',
        '0', '0', '0', '0', '1', '0',
        '0', '0', '0', '0', '1', '0',
        '0', '0'
    ],
    [
        '1', '0', '0', '1', '0', '0',
        '0', '0', '1', '0', '1', '1',
        '1', '1', '1', '0', '1', '1',
        '1', '1', '1', '1', '1', '1',
        '1', '1', '1', '1', '1', '0',
        '1', '0'
    ],
    [
        '1', '0', '1', '0', '0', '1',
        '0', '0', '0', '1', '0', '1',
        '0', '0', '0', '0', '0', '1',
        '1', '0', '1', '1', '0', '0',
        '1', '1', '1', '0', '1', '0',
        '1', '1'
    ],
    [
        '1', '0', '1', '1', '1', '1',
        '1', '0', '1', '1', '1', '1',
        '1', '0', '0', '1', '1', '0',
        '1', '0', '0', '0', '1', '1',
        '1', '1', '1', '1', '0', '1',
        '1', '1'
    ],
    [
        '1', '1', '0', '0', '0', '1',
        '1', '0', '0', '1', '1', '1',
        '0', '0', '0', '1', '0', '1',
        '1', '1', '1', '0', '0', '0',
        '1', '1', '1', '1', '0', '0',
        '1', '0'
    ],
];
exports.compressionHash = {
    "a": [
        '0', '1', '1', '0', '1', '0',
        '1', '0', '0', '0', '0', '0',
        '1', '0', '0', '1', '1', '1',
        '1', '0', '0', '1', '1', '0',
        '0', '1', '1', '0', '0', '1',
        '1', '1'
    ],
    "b": [
        '1', '0', '1', '1', '1', '0',
        '1', '1', '0', '1', '1', '0',
        '0', '1', '1', '1', '1', '0',
        '1', '0', '1', '1', '1', '0',
        '1', '0', '0', '0', '0', '1',
        '0', '1'
    ],
    "c": [
        '0', '0', '1', '1', '1', '1',
        '0', '0', '0', '1', '1', '0',
        '1', '1', '1', '0', '1', '1',
        '1', '1', '0', '0', '1', '1',
        '0', '1', '1', '1', '0', '0',
        '1', '0'
    ],
    "d": [
        '1', '0', '1', '0', '0', '1',
        '0', '1', '0', '1', '0', '0',
        '1', '1', '1', '1', '1', '1',
        '1', '1', '0', '1', '0', '1',
        '0', '0', '1', '1', '1', '0',
        '1', '0'
    ],
    "e": [
        '0', '1', '0', '1', '0', '0',
        '0', '1', '0', '0', '0', '0',
        '1', '1', '1', '0', '0', '1',
        '0', '1', '0', '0', '1', '0',
        '0', '1', '1', '1', '1', '1',
        '1', '1'
    ],
    "f": [
        '1', '0', '0', '1', '1', '0',
        '1', '1', '0', '0', '0', '0',
        '0', '1', '0', '1', '0', '1',
        '1', '0', '1', '0', '0', '0',
        '1', '0', '0', '0', '1', '1',
        '0', '0'
    ],
    "g": [
        '0', '0', '0', '1', '1', '1',
        '1', '1', '1', '0', '0', '0',
        '0', '0', '1', '1', '1', '1',
        '0', '1', '1', '0', '0', '1',
        '1', '0', '1', '0', '1', '0',
        '1', '1'
    ],
    "h": [
        '0', '1', '0', '1', '1', '0',
        '1', '1', '1', '1', '1', '0',
        '0', '0', '0', '0', '1', '1',
        '0', '0', '1', '1', '0', '1',
        '0', '0', '0', '1', '1', '0',
        '0', '1'
    ],
};