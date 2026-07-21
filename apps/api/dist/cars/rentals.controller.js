"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalsController = void 0;
const common_1 = require("@nestjs/common");
const shared_types_1 = require("@car-marketplace/shared-types");
const zod_validation_pipe_1 = require("../common/zod-validation.pipe");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const cars_service_1 = require("./cars.service");
let RentalsController = class RentalsController {
    carsService;
    constructor(carsService) {
        this.carsService = carsService;
    }
    findMine(query, user) {
        return this.carsService.findRentalsForUser(user.id, query.page, query.limit);
    }
    create(dto, user) {
        return this.carsService.createRental(user, dto);
    }
};
exports.RentalsController = RentalsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.paginationQuerySchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "findMine", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.createRentalSchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RentalsController.prototype, "create", null);
exports.RentalsController = RentalsController = __decorate([
    (0, common_1.Controller)('rentals'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], RentalsController);
//# sourceMappingURL=rentals.controller.js.map