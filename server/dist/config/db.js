"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async () => {
    mongoose_1.default
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("Connected to MongoDB."))
        .catch((error) => console.log(error));
};
exports.default = connectDb;
//# sourceMappingURL=db.js.map