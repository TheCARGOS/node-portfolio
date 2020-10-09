"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFromJWT = exports.deleteMessage = exports.getMessages = exports.getDashboard = exports.signIn = void 0;
var User_1 = __importDefault(require("../models/User"));
var Message_1 = __importDefault(require("../models/Message"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.signIn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, loggedIn, _a, _b;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, req.body];
            case 1:
                body = _d.sent();
                if (!(body && body.username && body.password)) return [3 /*break*/, 6];
                return [4 /*yield*/, User_1.default.findOne({ username: body.username, password: body.password })];
            case 2:
                loggedIn = _d.sent();
                if (!loggedIn) return [3 /*break*/, 4];
                _b = (_a = res).json;
                _c = {
                    error: false,
                    message: "User logged in successfully."
                };
                return [4 /*yield*/, createToken(loggedIn._id)];
            case 3:
                _b.apply(_a, [(_c.token = _d.sent(),
                        _c)]);
                return [3 /*break*/, 5];
            case 4:
                res.json({ error: true });
                _d.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                res.json({ error: true });
                _d.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getDashboard = function (req, res) {
    res.json({
        message: "Welcome mr. Carlos, you're token was validated."
    });
};
exports.getMessages = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var messages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Message_1.default.find()];
            case 1:
                messages = _a.sent();
                res.json(messages);
                return [2 /*return*/];
        }
    });
}); };
exports.deleteMessage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedMessage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                if (!id) return [3 /*break*/, 4];
                if (!(id.length == 24)) return [3 /*break*/, 2];
                return [4 /*yield*/, Message_1.default.deleteOne({ _id: id })];
            case 1:
                deletedMessage = _a.sent();
                deletedMessage.deletedCount ?
                    res.json({ message: "Message deleted" }) :
                    res.json({ message: "Couldnt delete your message" });
                return [3 /*break*/, 3];
            case 2:
                res.json({ message: "id invalid" });
                _a.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                res.json({ message: "no id provided" });
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
function userFromJWT(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, User_1.default.findById(req.userId, { password: 0 })];
                case 1:
                    user = _a.sent();
                    res.json(user);
                    return [2 /*return*/];
            }
        });
    });
}
exports.userFromJWT = userFromJWT;
function createToken(id) {
    return __awaiter(this, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, jsonwebtoken_1.default.sign({ id: id }, "argosisagoodboy")];
                case 1:
                    token = _a.sent();
                    return [2 /*return*/, token];
            }
        });
    });
}
// async function createToken (header: Jose, payload: Payload) {
//     const key = "argosisagoodboy"
//     return await makeJwt({ header, payload, key })
// }
// function responseJSON(req: Request, res: Response, error: boolean, message: string) {
//     res.send({
//         error,
//         messa)ge
//     }
// }
