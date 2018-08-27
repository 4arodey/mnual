"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseService_1 = require("../database/DatabaseService");
var database = new DatabaseService_1.default();
var CommentRepository = /** @class */ (function () {
    function CommentRepository() {
    }
    CommentRepository.prototype.findAll = function (callback) {
    };
    CommentRepository.prototype.findOneById = function (id, callback) {
        database.query('SELECT * FROM comments WHERE id = ?', [id]).then(function (result) { return callback({ comment: result[0] }); });
    };
    CommentRepository.prototype.createOne = function (item, callback) {
        database.query('INSERT INTO comments SET ?', item).then(function (result) { return callback({ comment_id: result.insertId }); });
    };
    CommentRepository.prototype.updateOne = function (item) {
        database.query('UPDATE comments SET ? WHERE id = ?', [item, item.id]);
    };
    CommentRepository.prototype.deleteOne = function (id) {
        database.query('DELETE FROM comments WHERE id = ?', [id]);
    };
    return CommentRepository;
}());
exports.default = CommentRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkvQ29tbWVudFJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwrREFBMEQ7QUFFMUQsSUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBZSxFQUFFLENBQUM7QUFFdkM7SUFBQTtJQXVCQSxDQUFDO0lBdEJBLG1DQUFPLEdBQVAsVUFBUSxRQUFhO0lBQ3JCLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksRUFBVSxFQUFFLFFBQWE7UUFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMvRCxVQUFDLE1BQVcsSUFBSyxPQUFBLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFoQyxDQUFnQyxDQUNqRCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxJQUFhLEVBQUUsUUFBYTtRQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDdEQsVUFBQyxNQUFXLElBQUssT0FBQSxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXpDLENBQXlDLENBQzFELENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLElBQWE7UUFDdEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLEVBQVU7UUFDbkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQSIsImZpbGUiOiJyZXBvc2l0b3J5L0NvbW1lbnRSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL0Jhc2VSZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9tb2RlbC9Db21tZW50JztcbmltcG9ydCBEYXRhYmFzZVNlcnZpY2UgZnJvbSAnLi4vZGF0YWJhc2UvRGF0YWJhc2VTZXJ2aWNlJztcblxuY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2VTZXJ2aWNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnRSZXBvc2l0b3J5IGltcGxlbWVudHMgQmFzZVJlcG9zaXRvcnk8Q29tbWVudD4ge1xuXHRmaW5kQWxsKGNhbGxiYWNrOiBhbnkpOiB2b2lkIHtcblx0fVxuXG5cdGZpbmRPbmVCeUlkKGlkOiBudW1iZXIsIGNhbGxiYWNrOiBhbnkpOiB2b2lkIHtcblx0XHRkYXRhYmFzZS5xdWVyeSgnU0VMRUNUICogRlJPTSBjb21tZW50cyBXSEVSRSBpZCA9ID8nLCBbaWRdKS50aGVuKFxuXHRcdFx0KHJlc3VsdDogYW55KSA9PiBjYWxsYmFjayh7IGNvbW1lbnQ6IHJlc3VsdFswXSB9KVxuXHRcdCk7XG5cdH1cblxuXHRjcmVhdGVPbmUoaXRlbTogQ29tbWVudCwgY2FsbGJhY2s6IGFueSk6IHZvaWQge1xuXHRcdGRhdGFiYXNlLnF1ZXJ5KCdJTlNFUlQgSU5UTyBjb21tZW50cyBTRVQgPycsIGl0ZW0pLnRoZW4oXG5cdFx0XHQocmVzdWx0OiBhbnkpID0+IGNhbGxiYWNrKHsgY29tbWVudF9pZDogcmVzdWx0Lmluc2VydElkIH0pXG5cdFx0KTtcblx0fVxuXG5cdHVwZGF0ZU9uZShpdGVtOiBDb21tZW50KTogdm9pZCB7XG5cdFx0ZGF0YWJhc2UucXVlcnkoJ1VQREFURSBjb21tZW50cyBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbaXRlbSwgaXRlbS5pZF0pO1xuXHR9XG5cblx0ZGVsZXRlT25lKGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHRkYXRhYmFzZS5xdWVyeSgnREVMRVRFIEZST00gY29tbWVudHMgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG5cdH1cbn1cbiJdfQ==
