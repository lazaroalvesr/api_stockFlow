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
exports.FolderController = void 0;
const common_1 = require("@nestjs/common");
const Folder_1 = require("../dto/Folder");
const folder_service_1 = require("./folder.service");
const UpdatePasta_1 = require("../dto/UpdatePasta");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let FolderController = class FolderController {
    constructor(folderService) {
        this.folderService = folderService;
    }
    create(folder) {
        return this.folderService.create(folder);
    }
    getAll() {
        return this.folderService.buscarTodas();
    }
    getById(id) {
        return this.folderService.buscarPorID(id);
    }
    updated(id, pastaAtualizada) {
        return this.folderService.atualizar(id, pastaAtualizada);
    }
    deleteById(id) {
        return this.folderService.Delete(id);
    }
};
exports.FolderController = FolderController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Folder_1.FolderDTO]),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("getAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdatePasta_1.UpdatePastaDTO]),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "updated", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "deleteById", null);
exports.FolderController = FolderController = __decorate([
    (0, common_1.Controller)('folder'),
    __metadata("design:paramtypes", [folder_service_1.FolderService])
], FolderController);
//# sourceMappingURL=folder.controller.js.map