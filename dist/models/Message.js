"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var messageSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    description: String
});
exports.default = mongoose_1.model("Message", messageSchema);
