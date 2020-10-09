"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userControllers = __importStar(require("../controllers/user.controllers"));
var guestControllers = __importStar(require("../controllers/guest.controllers"));
var verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
var path_1 = __importDefault(require("path"));
var router = express_1.Router();
router
    .get("/", function (req, res) { return res.sendFile(path_1.default.join(__dirname, "../../dist/index.html")); })
    .post("/signin", userControllers.signIn)
    .get("/user", verifyToken_1.default, userControllers.userFromJWT)
    .get("/dashboard", verifyToken_1.default, userControllers.getDashboard)
    .get("/message", userControllers.getMessages)
    .delete("/message/:id", userControllers.deleteMessage)
    .post("/message", guestControllers.postMessage)
    .get("/downloadCV", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../../dist/public/carlos-CV.pdf"));
})
    .get("/*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../../dist/index.html"));
});
exports.default = router;
