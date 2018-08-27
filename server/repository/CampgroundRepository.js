"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseService_1 = require("../database/DatabaseService");
var database = new DatabaseService_1.default();
var CampgroundRepository = /** @class */ (function () {
    function CampgroundRepository() {
    }
    CampgroundRepository.prototype.findAll = function (callback) {
        database.query('SELECT * FROM campgrounds', null).then(function (results) { return callback(results); });
    };
    CampgroundRepository.prototype.findOneById = function (id, callback) {
        database.query('SELECT * FROM campgrounds WHERE id = ?', [id]).then(function (campResult) {
            var campground = [], comments = [];
            database.query('SELECT * FROM comments WHERE campground_id = ?', [id]).then(function (commentResult) {
                campground = campResult[0];
                comments = commentResult;
                callback({ campground: campground, comments: comments });
            });
        });
    };
    CampgroundRepository.prototype.createOne = function (campground, callback) {
        database.query('INSERT INTO campgrounds SET ?', campground).then(function (result) { return callback({ campground_id: result.insertId }); });
    };
    CampgroundRepository.prototype.updateOne = function (campground) {
        database.query('UPDATE campgrounds SET ? WHERE id = ?', [campground, campground.id]);
    };
    CampgroundRepository.prototype.deleteOne = function (id) {
        database.query('DELETE FROM campgrounds WHERE id = ?', [id]);
    };
    return CampgroundRepository;
}());
exports.default = CampgroundRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkvQ2FtcGdyb3VuZFJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwrREFBMEQ7QUFFMUQsSUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBZSxFQUFFLENBQUM7QUFFdkM7SUFBQTtJQWtDQSxDQUFDO0lBakNBLHNDQUFPLEdBQVAsVUFBUSxRQUFhO1FBQ3BCLFFBQVEsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNyRCxVQUFDLE9BQXFCLElBQUssT0FBQSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQWpCLENBQWlCLENBQzVDLENBQUM7SUFDSCxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLEVBQVUsRUFBRSxRQUFhO1FBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFVBQXNCO1lBQzFGLElBQUksVUFBVSxHQUFRLEVBQUUsRUFDdkIsUUFBUSxHQUFRLEVBQUUsQ0FBQztZQUVwQixRQUFRLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUF3QjtnQkFDcEcsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsUUFBUSxHQUFHLGFBQWEsQ0FBQztnQkFFekIsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFBVSxVQUFzQixFQUFFLFFBQWE7UUFDOUMsUUFBUSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQy9ELFVBQUMsTUFBVyxJQUFLLE9BQUEsUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUE1QyxDQUE0QyxDQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFBVSxVQUFzQjtRQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsRUFBVTtRQUNuQixRQUFRLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0YsMkJBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBIiwiZmlsZSI6InJlcG9zaXRvcnkvQ2FtcGdyb3VuZFJlcG9zaXRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gJy4vQmFzZVJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2FtcGdyb3VuZCB9IGZyb20gJy4uL21vZGVsL0NhbXBncm91bmQnO1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uL21vZGVsL0NvbW1lbnQnO1xuaW1wb3J0IERhdGFiYXNlU2VydmljZSBmcm9tICcuLi9kYXRhYmFzZS9EYXRhYmFzZVNlcnZpY2UnO1xuXG5jb25zdCBkYXRhYmFzZSA9IG5ldyBEYXRhYmFzZVNlcnZpY2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtcGdyb3VuZFJlcG9zaXRvcnkgaW1wbGVtZW50cyBCYXNlUmVwb3NpdG9yeTxDYW1wZ3JvdW5kPiB7XG5cdGZpbmRBbGwoY2FsbGJhY2s6IGFueSk6IHZvaWQge1xuXHRcdGRhdGFiYXNlLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGNhbXBncm91bmRzJywgbnVsbCkudGhlbihcblx0XHRcdChyZXN1bHRzOiBDYW1wZ3JvdW5kW10pID0+IGNhbGxiYWNrKHJlc3VsdHMpXG5cdFx0KTtcblx0fVxuXG5cdGZpbmRPbmVCeUlkKGlkOiBudW1iZXIsIGNhbGxiYWNrOiBhbnkpOiB2b2lkIHtcblx0XHRkYXRhYmFzZS5xdWVyeSgnU0VMRUNUICogRlJPTSBjYW1wZ3JvdW5kcyBXSEVSRSBpZCA9ID8nLCBbaWRdKS50aGVuKChjYW1wUmVzdWx0OiBDYW1wZ3JvdW5kKSA9PiB7XG5cdFx0XHRsZXQgY2FtcGdyb3VuZDogYW55ID0gW10sXG5cdFx0XHRcdGNvbW1lbnRzOiBhbnkgPSBbXTtcblxuXHRcdFx0ZGF0YWJhc2UucXVlcnkoJ1NFTEVDVCAqIEZST00gY29tbWVudHMgV0hFUkUgY2FtcGdyb3VuZF9pZCA9ID8nLCBbaWRdKS50aGVuKChjb21tZW50UmVzdWx0OiBDb21tZW50W10pID0+IHtcblx0XHRcdFx0Y2FtcGdyb3VuZCA9IGNhbXBSZXN1bHRbMF07XG5cdFx0XHRcdGNvbW1lbnRzID0gY29tbWVudFJlc3VsdDtcblxuXHRcdFx0XHRjYWxsYmFjayh7IGNhbXBncm91bmQ6IGNhbXBncm91bmQsIGNvbW1lbnRzOiBjb21tZW50cyB9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlT25lKGNhbXBncm91bmQ6IENhbXBncm91bmQsIGNhbGxiYWNrOiBhbnkpOiB2b2lkIHtcblx0XHRkYXRhYmFzZS5xdWVyeSgnSU5TRVJUIElOVE8gY2FtcGdyb3VuZHMgU0VUID8nLCBjYW1wZ3JvdW5kKS50aGVuKFxuXHRcdFx0KHJlc3VsdDogYW55KSA9PiBjYWxsYmFjayh7IGNhbXBncm91bmRfaWQ6IHJlc3VsdC5pbnNlcnRJZCB9KVxuXHRcdCk7XG5cdH1cblxuXHR1cGRhdGVPbmUoY2FtcGdyb3VuZDogQ2FtcGdyb3VuZCk6IHZvaWQge1xuXHRcdGRhdGFiYXNlLnF1ZXJ5KCdVUERBVEUgY2FtcGdyb3VuZHMgU0VUID8gV0hFUkUgaWQgPSA/JywgW2NhbXBncm91bmQsIGNhbXBncm91bmQuaWRdKTtcblx0fVxuXG5cdGRlbGV0ZU9uZShpZDogbnVtYmVyKTogdm9pZCB7XG5cdFx0ZGF0YWJhc2UucXVlcnkoJ0RFTEVURSBGUk9NIGNhbXBncm91bmRzIFdIRVJFIGlkID0gPycsIFtpZF0pO1xuXHR9XG59XG4iXX0=
