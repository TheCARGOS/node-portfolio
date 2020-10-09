"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = express_1.default();
dotenv_1.default.config();
app
    .use(express_1.default.static("dist"))
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }))
    .use(morgan_1.default("dev"))
    .use(index_1.default);
exports.default = app;
