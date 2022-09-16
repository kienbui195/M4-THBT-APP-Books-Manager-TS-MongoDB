"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const web_router_1 = require("./src/routers/web.router");
const app = (0, express_1.default)();
const port = 8080;
const DB_URL = "mongodb://localhost:27017";
app.set('views', path_1.default.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(body_parser_1.default.json());
app.use('/', web_router_1.webRouter);
mongoose_1.default.connect(DB_URL)
    .then(() => console.log(`DB connected`))
    .catch(err => console.log(err.message));
app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map