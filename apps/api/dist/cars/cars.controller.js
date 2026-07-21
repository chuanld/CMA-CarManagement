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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const shared_types_1 = require("@car-marketplace/shared-types");
const zod_validation_pipe_1 = require("../common/zod-validation.pipe");
const public_decorator_1 = require("../auth/public.decorator");
const roles_decorator_1 = require("../auth/roles.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const cars_service_1 = require("./cars.service");
let CarsController = class CarsController {
    carsService;
    constructor(carsService) {
        this.carsService = carsService;
    }
    getFilters() {
        return this.carsService.getFilters();
    }
    getSaved(user) {
        return this.carsService.findSavedForUser(user.id);
    }
    findAdmin(dto) {
        return this.carsService.findAdmin(dto);
    }
    findAdminById(id) {
        return this.carsService.findAdminById(id);
    }
    updateAdmin(id, dto, user) {
        return this.carsService.updateAdmin(id, user, dto);
    }
    findPublicById(id, user) {
        return this.carsService.findPublicById(id, user?.id);
    }
    findPublic(query, user) {
        return this.carsService.findPublic(query, user?.id);
    }
    create(dto, user) {
        return this.carsService.create(user, dto);
    }
    toggleSaved(id, user) {
        return this.carsService.toggleSaved(id, user.id);
    }
    updateStatus(id, dto) {
        return this.carsService.updateStatus(id, dto);
    }
    remove(id) {
        return this.carsService.remove(id);
    }
};
exports.CarsController = CarsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('filters'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getFilters", null);
__decorate([
    (0, common_1.Get)('saved'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "getSaved", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)('admin/search'),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.adminGetCarsInputSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "findAdmin", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Get)('admin/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "findAdminById", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Patch)('admin/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.updateCarSchema))),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "updateAdmin", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "findPublicById", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.publicGetCarsQuerySchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "findPublic", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.addCarSchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/save'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "toggleSaved", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.updateCarStatusSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "updateStatus", null);
__decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "remove", null);
exports.CarsController = CarsController = __decorate([
    (0, common_1.Controller)('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
//# sourceMappingURL=cars.controller.js.map