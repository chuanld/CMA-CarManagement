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
exports.DealersController = void 0;
const common_1 = require("@nestjs/common");
const shared_types_1 = require("@car-marketplace/shared-types");
const zod_validation_pipe_1 = require("../common/zod-validation.pipe");
const roles_decorator_1 = require("../auth/roles.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const dealers_service_1 = require("./dealers.service");
let DealersController = class DealersController {
    dealersService;
    constructor(dealersService) {
        this.dealersService = dealersService;
    }
    findAll(user) {
        return this.dealersService.findAllForOwner(user.id);
    }
    findOne(id, user) {
        return this.dealersService.findOneForOwner(id, user.id);
    }
    create(dto, user) {
        return this.dealersService.create(user, dto);
    }
    update(id, dto, user) {
        return this.dealersService.update(id, user.id, dto);
    }
    toggleArchive(id, dto, user) {
        return this.dealersService.toggleArchive(id, user.id, dto.isArchived);
    }
    remove(id, user) {
        return this.dealersService.remove(id, user.id);
    }
};
exports.DealersController = DealersController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DealersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DealersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.createDealerSchema))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DealersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.updateDealerSchema))),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], DealersController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/archive'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(shared_types_1.toggleDealerArchiveSchema))),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], DealersController.prototype, "toggleArchive", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DealersController.prototype, "remove", null);
exports.DealersController = DealersController = __decorate([
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Controller)('dealers'),
    __metadata("design:paramtypes", [dealers_service_1.DealersService])
], DealersController);
//# sourceMappingURL=dealers.controller.js.map