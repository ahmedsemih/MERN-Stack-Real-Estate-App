"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const details_1 = __importDefault(require("../../services/details"));
exports.default = {
    Query: {
        async details(_, args) {
            const details = await details_1.default.getDetails(args._id);
            return details;
        },
    },
    Mutation: {
        async createDetails(_, args) {
            const details = await details_1.default.createDetails(args);
            return details;
        },
        async updateDetails(_, args) {
            const details = await details_1.default.updateDetails(args);
            return details;
        },
    },
};
//# sourceMappingURL=details.js.map