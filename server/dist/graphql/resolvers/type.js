"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("../../services/type"));
exports.default = {
    Query: {
        async type(_, args) {
            const type = await type_1.default.getType(args._id);
            return type;
        },
        async types() {
            const types = await type_1.default.getTypes();
            return types;
        },
    },
    Mutation: {
        async createType(_, args) {
            const type = await type_1.default.createType(args);
            return type;
        },
        async updateType(_, args) {
            const type = await type_1.default.updateType(args);
            return type;
        },
        async deleteType(_, args) {
            const type = await type_1.default.deleteType(args._id);
            return type;
        },
    },
};
//# sourceMappingURL=type.js.map