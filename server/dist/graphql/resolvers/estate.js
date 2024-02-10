"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estate_1 = __importDefault(require("../../services/estate"));
exports.default = {
    Query: {
        async estate(_, args) {
            const estate = await estate_1.default.getEstate(args._id);
            return estate;
        },
        async estates(_, args) {
            const estates = await estate_1.default.getEstates(args.limit, args.offset);
            return estates;
        },
        async estatesBySeller(_, args) {
            const estates = await estate_1.default.getEstatesBySeller(args.sellerId, args.limit, args.offset);
            return estates;
        },
        async estatesByFilter(_, args) {
            const estates = await estate_1.default.getEstatesByFilter(args);
            return estates;
        },
        async estatesSortedByDate(_, args) {
            const estates = await estate_1.default.getEstatesSortedByDate(args.desc, args.limit, args.offset);
            return estates;
        },
        async estatesSortedByPrice(_, args) {
            const estates = await estate_1.default.getEstatesSortedByPrice(args.desc, args.limit, args.offset);
            return estates;
        },
        async estatesBySearch(_, args) {
            const estates = await estate_1.default.getEstatesBySearch(args.search, args.sortBy, args.order, args.limit, args.offset);
            return estates;
        },
    },
    Mutation: {
        async createEstate(_, args) {
            const estate = await estate_1.default.createEstate(args);
            return estate;
        },
        async updateEstate(_, args) {
            const estate = await estate_1.default.updateEstate(args);
            return estate;
        },
    },
};
//# sourceMappingURL=estate.js.map