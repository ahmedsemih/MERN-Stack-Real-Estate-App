"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
const user_1 = __importDefault(require("./user"));
const type_1 = __importDefault(require("./type"));
const estate_1 = __importDefault(require("./estate"));
const details_1 = __importDefault(require("./details"));
const province_1 = __importDefault(require("./province"));
const district_1 = __importDefault(require("./district"));
const location_1 = __importDefault(require("./location"));
const detailedType_1 = __importDefault(require("./detailedType"));
const notification_1 = __importDefault(require("./notification"));
const typeDefs = (0, merge_1.mergeTypeDefs)([
    province_1.default,
    district_1.default,
    details_1.default,
    estate_1.default,
    detailedType_1.default,
    location_1.default,
    notification_1.default,
    type_1.default,
    user_1.default,
]);
exports.default = typeDefs;
//# sourceMappingURL=index.js.map