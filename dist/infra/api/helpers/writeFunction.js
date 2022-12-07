"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncWriteFile = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
// ✅ write to file SYNCHRONOUSLY
function syncWriteFile(filename, data) {
    (0, fs_1.writeFileSync)((0, path_1.join)(__dirname, filename), data, {
        flag: "a+",
    });
    const contents = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, filename), "utf-8");
    return contents;
}
exports.syncWriteFile = syncWriteFile;
//# sourceMappingURL=writeFunction.js.map