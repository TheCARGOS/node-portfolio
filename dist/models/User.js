"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    email: String,
    role: String
});
exports.default = mongoose_1.model("User", userSchema);
