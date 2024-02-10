"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const detailedType_1 = __importDefault(require("../../services/detailedType"));
exports.default = {
    Query: {
        async detailedType(_, args) {
            const detailedType = await detailedType_1.default.getDetailedType(args._id);
            return detailedType;
        },
        async detailedTypes() {
            const detailedTypes = await detailedType_1.default.getDetailedTypes();
            return detailedTypes;
        },
        async detailedTypesByParent(_, args) {
            const detailedTypes = await detailedType_1.default.getDetailedTypesByParent(args.parentId);
            return detailedTypes;
        }
    },
    Mutation: {
        async createDetailedType(_, args) {
            const detailedType = await detailedType_1.default.createDetailedType(args);
            return detailedType;
        },
        async updateDetailedType(_, args) {
            const detailedType = await detailedType_1.default.updateDetailedType(args);
            return detailedType;
        },
        async deleteDetailedType(_, args) {
            const detailedType = await detailedType_1.default.deleteDetailedType(args._id);
            return detailedType;
        },
    },
};
//# sourceMappingURL=detailedType.js.map