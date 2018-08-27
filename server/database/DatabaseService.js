"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
        var _this = this;
        this.pool = {};
        this.getConnection = function (callback) {
            _this.pool.getConnection(callback);
        };
        this.query = function (sql, values) { return new Promise(function (resolve, reject) {
            _this.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    throw err;
                }
                else {
                    connection.query(sql, values, function (err, results) {
                        console.log('SQL: ', sql);
                        console.log('Query values: ', values);
                        connection.release();
                        if (err) {
                            reject(err);
                            throw err;
                        }
                        else {
                            console.log('Query results:', JSON.stringify(results));
                            resolve(results);
                        }
                    });
                }
            });
        }); };
        this.destroy = function () {
            _this.pool.end(function (err) { return console.error(err); });
        };
        this.pool = mysql.createPool({
            connectionLimit: 12,
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'olegang',
            charset: 'utf8'
        });
    }
    return DatabaseService;
}());
exports.default = DatabaseService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFiYXNlL0RhdGFiYXNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUUvQjtJQUdDO1FBQUEsaUJBU0M7UUFYRCxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBYWYsa0JBQWEsR0FBRyxVQUFDLFFBQWE7WUFDN0IsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBRUYsVUFBSyxHQUFHLFVBQUMsR0FBVyxFQUFFLE1BQVcsSUFBSyxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakUsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBQyxHQUFRLEVBQUUsVUFBZTtnQkFDakQsSUFBSSxHQUFHLEVBQUU7b0JBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNaLE1BQU0sR0FBRyxDQUFDO2lCQUNWO3FCQUFNO29CQUNOLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxVQUFDLEdBQVEsRUFBRSxPQUFZO3dCQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDdEMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUVyQixJQUFJLEdBQUcsRUFBRTs0QkFDUixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ1osTUFBTSxHQUFHLENBQUM7eUJBQ1Y7NkJBQU07NEJBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ3ZELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDakI7b0JBQ0YsQ0FBQyxDQUFDLENBQUM7aUJBQ0g7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQXJCb0MsQ0FxQnBDLENBQUM7UUFFSCxZQUFPLEdBQUc7WUFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUE7UUF2Q0EsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQzVCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsYUFBYTtZQUN2QixPQUFPLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztJQUNKLENBQUM7SUFnQ0Ysc0JBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBIiwiZmlsZSI6ImRhdGFiYXNlL0RhdGFiYXNlU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG15c3FsIGZyb20gJ215c3FsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YWJhc2VTZXJ2aWNlIHtcblx0cG9vbDogYW55ID0ge307XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XG5cdFx0XHRjb25uZWN0aW9uTGltaXQ6IDEyLFxuXHRcdFx0aG9zdDogJ2xvY2FsaG9zdCcsXG5cdFx0XHR1c2VyOiAncm9vdCcsXG5cdFx0XHRwYXNzd29yZDogJycsXG5cdFx0XHRkYXRhYmFzZTogJ29sZWdhbmd1bGFyJyxcblx0XHRcdGNoYXJzZXQ6ICd1dGY4J1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0Q29ubmVjdGlvbiA9IChjYWxsYmFjazogYW55KSA9PiB7XG5cdFx0dGhpcy5wb29sLmdldENvbm5lY3Rpb24oY2FsbGJhY2spO1xuXHR9O1xuXG5cdHF1ZXJ5ID0gKHNxbDogc3RyaW5nLCB2YWx1ZXM6IGFueSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKChlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KSA9PiB7XG5cdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25uZWN0aW9uLnF1ZXJ5KHNxbCwgdmFsdWVzLCAoZXJyOiBhbnksIHJlc3VsdHM6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTUUw6ICcsIHNxbCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1F1ZXJ5IHZhbHVlczogJywgdmFsdWVzKTtcblx0XHRcdFx0XHRjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuXHRcdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdFx0dGhyb3cgZXJyO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnUXVlcnkgcmVzdWx0czonLCBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGRlc3Ryb3kgPSAoKSA9PiB7XG5cdFx0dGhpcy5wb29sLmVuZCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cdH1cbn1cbiJdfQ==
