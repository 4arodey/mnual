"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseService_1 = require("../database/DatabaseService");
var database = new DatabaseService_1.default();
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.findAll = function (callback) {
    };
    UserRepository.prototype.findOneById = function (id, callback) {
        database.query('SELECT * FROM users WHERE id = ?', [id]).then(function (result) { return callback(result[0]); });
    };
    UserRepository.prototype.findOneByUsername = function (username, callback) {
        database.query('SELECT * FROM users WHERE username = ?', [username]).then(function (result) { return callback(result[0]); });
    };
    UserRepository.prototype.createOne = function (item, callback) {
        database.query('INSERT INTO users ( username, password ) values (?,?)', [item.username, item.password]).then(function (result) { return callback({ user_id: result.insertId }); });
    };
    UserRepository.prototype.updateOne = function (item) {
    };
    UserRepository.prototype.deleteOne = function (id) {
    };
    return UserRepository;
}());
exports.default = UserRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkvVXNlclJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwrREFBMEQ7QUFFMUQsSUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBZSxFQUFFLENBQUM7QUFFdkM7SUFBQTtJQTJCQSxDQUFDO0lBMUJBLGdDQUFPLEdBQVAsVUFBUSxRQUFhO0lBQ3JCLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksRUFBVSxFQUFFLFFBQWE7UUFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM1RCxVQUFDLE1BQVcsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FDcEMsQ0FBQztJQUNILENBQUM7SUFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsUUFBZ0IsRUFBRSxRQUFhO1FBQ2hELFFBQVEsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEUsVUFBQyxNQUFXLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQVUsRUFBRSxRQUFhO1FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUMsdURBQXVELEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDM0csVUFBQyxNQUFXLElBQUssT0FBQSxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXRDLENBQXNDLENBQ3ZELENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQVU7SUFDcEIsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxFQUFVO0lBQ3BCLENBQUM7SUFDRixxQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoicmVwb3NpdG9yeS9Vc2VyUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi9CYXNlUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvVXNlcic7XG5pbXBvcnQgRGF0YWJhc2VTZXJ2aWNlIGZyb20gJy4uL2RhdGFiYXNlL0RhdGFiYXNlU2VydmljZSc7XG5cbmNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlU2VydmljZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBpbXBsZW1lbnRzIEJhc2VSZXBvc2l0b3J5PFVzZXI+IHtcblx0ZmluZEFsbChjYWxsYmFjazogYW55KTogdm9pZCB7XG5cdH1cblxuXHRmaW5kT25lQnlJZChpZDogbnVtYmVyLCBjYWxsYmFjazogYW55KTogdm9pZCB7XG5cdFx0ZGF0YWJhc2UucXVlcnkoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgaWQgPSA/JywgW2lkXSkudGhlbihcblx0XHRcdChyZXN1bHQ6IGFueSkgPT4gY2FsbGJhY2socmVzdWx0WzBdKVxuXHRcdCk7XG5cdH1cblxuXHRmaW5kT25lQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogdm9pZCB7XG5cdFx0ZGF0YWJhc2UucXVlcnkoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcm5hbWUgPSA/JywgW3VzZXJuYW1lXSkudGhlbihcblx0XHRcdChyZXN1bHQ6IGFueSkgPT4gY2FsbGJhY2socmVzdWx0WzBdKVxuXHRcdCk7XG5cdH1cblxuXHRjcmVhdGVPbmUoaXRlbTogVXNlciwgY2FsbGJhY2s6IGFueSk6IHZvaWQge1xuXHRcdGRhdGFiYXNlLnF1ZXJ5KCdJTlNFUlQgSU5UTyB1c2VycyAoIHVzZXJuYW1lLCBwYXNzd29yZCApIHZhbHVlcyAoPyw/KScsIFtpdGVtLnVzZXJuYW1lLCBpdGVtLnBhc3N3b3JkXSkudGhlbihcblx0XHRcdChyZXN1bHQ6IGFueSkgPT4gY2FsbGJhY2soeyB1c2VyX2lkOiByZXN1bHQuaW5zZXJ0SWQgfSlcblx0XHQpO1xuXHR9XG5cblx0dXBkYXRlT25lKGl0ZW06IFVzZXIpOiB2b2lkIHtcblx0fVxuXG5cdGRlbGV0ZU9uZShpZDogbnVtYmVyKTogdm9pZCB7XG5cdH1cbn1cbiJdfQ==
