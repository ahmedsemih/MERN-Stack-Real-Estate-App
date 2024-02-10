"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express4_1 = require("@apollo/server/express4");
const graphql_1 = __importDefault(require("./graphql"));
const db_1 = __importDefault(require("./config/db"));
const context_1 = __importDefault(require("./graphql/context"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 5000;
const bootstrapServer = async () => {
    await (0, db_1.default)();
    await graphql_1.default.start();
    app.use((0, cors_1.default)({
        origin: ['https://estate-hub-ase.vercel.app/', process.env.CLIENT_URL],
        credentials: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/graphql", (0, express4_1.expressMiddleware)(graphql_1.default, { context: context_1.default }));
    app.listen(port, () => console.log(`Server is running on port: ${port}`));
};
bootstrapServer();
//# sourceMappingURL=index.js.map