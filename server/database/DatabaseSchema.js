"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseService_1 = require("./DatabaseService");
var database = new DatabaseService_1.default();
exports.schema = function () {
    var sql_user = 'CREATE TABLE IF NOT EXISTS `users` (' +
        '`id` int(11) NOT NULL AUTO_INCREMENT,' +
        '`username` varchar(255) NOT NULL,' +
        '`password` varchar(255) NOT NULL,' +
        'PRIMARY KEY(`id`)' +
        ') ENGINE = InnoDB DEFAULT CHARSET = utf8';
    var sql_camp = 'CREATE TABLE IF NOT EXISTS `campgrounds` (' +
        '`id` int(11) NOT NULL AUTO_INCREMENT,' +
        '`name` varchar(255) NOT NULL,' +
        '`image` varchar(255) NOT NULL,' +
        '`username` varchar(255) NOT NULL,' +
        '`user_id` int(11) NOT NULL,' +
        '`description` TEXT,' +
        'PRIMARY KEY(`id`),' +
        'CONSTRAINT `FK_USER_CAMP` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)' +
        ') ENGINE = InnoDB DEFAULT CHARSET = utf8';
    var sql_comment = 'CREATE TABLE IF NOT EXISTS `comments` (' +
        '`id` int(11) NOT NULL AUTO_INCREMENT,' +
        '`username` varchar(255) NOT NULL,' +
        '`user_id` int(11) NOT NULL,' +
        '`text` TEXT NOT NULL,' +
        '`campground_id` int(11) NOT NULL,' +
        'PRIMARY KEY(`id`),' +
        'CONSTRAINT `FK_USER_COMMENT` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),' +
        'CONSTRAINT `FK_CAMP_COMMENT` FOREIGN KEY (`campground_id`) REFERENCES `campgrounds` (`id`)' +
        ') ENGINE = InnoDB DEFAULT CHARSET = utf8';
    database.query(sql_user, null);
    database.query(sql_camp, null);
    database.query(sql_comment, null);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFiYXNlL0RhdGFiYXNlU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQWdEO0FBQ2hELElBQU0sUUFBUSxHQUFHLElBQUkseUJBQWUsRUFBRSxDQUFDO0FBRTFCLFFBQUEsTUFBTSxHQUFHO0lBQ3JCLElBQUksUUFBUSxHQUFHLHNDQUFzQztRQUNwRCx1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLG1DQUFtQztRQUNuQyxtQkFBbUI7UUFDbkIsMENBQTBDLENBQUM7SUFFNUMsSUFBSSxRQUFRLEdBQUcsNENBQTRDO1FBQzFELHVDQUF1QztRQUN2QywrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLG1DQUFtQztRQUNuQyxrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsNkVBQTZFO1FBQzdFLDBDQUEwQyxDQUFDO0lBRTVDLElBQUksV0FBVyxHQUFHLHlDQUF5QztRQUMxRCx1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLDZCQUE2QjtRQUM3Qix1QkFBdUI7UUFDdkIsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixpRkFBaUY7UUFDakYsNEZBQTRGO1FBQzVGLDBDQUEwQyxDQUFDO0lBRTVDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyIsImZpbGUiOiJkYXRhYmFzZS9EYXRhYmFzZVNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhYmFzZVNlcnZpY2UgZnJvbSAnLi9EYXRhYmFzZVNlcnZpY2UnO1xuY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2VTZXJ2aWNlKCk7XG5cbmV4cG9ydCBjb25zdCBzY2hlbWEgPSAoKSA9PiB7XG5cdGxldCBzcWxfdXNlciA9ICdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBgdXNlcnNgICgnICtcblx0XHQnYGlkYCBpbnQoMTEpIE5PVCBOVUxMIEFVVE9fSU5DUkVNRU5ULCcgK1xuXHRcdCdgdXNlcm5hbWVgIHZhcmNoYXIoMjU1KSBOT1QgTlVMTCwnICtcblx0XHQnYHBhc3N3b3JkYCB2YXJjaGFyKDI1NSkgTk9UIE5VTEwsJyArXG5cdFx0J1BSSU1BUlkgS0VZKGBpZGApJyArXG5cdFx0JykgRU5HSU5FID0gSW5ub0RCIERFRkFVTFQgQ0hBUlNFVCA9IHV0ZjgnO1xuXG5cdGxldCBzcWxfY2FtcCA9ICdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBgY2FtcGdyb3VuZHNgICgnICtcblx0XHQnYGlkYCBpbnQoMTEpIE5PVCBOVUxMIEFVVE9fSU5DUkVNRU5ULCcgK1xuXHRcdCdgbmFtZWAgdmFyY2hhcigyNTUpIE5PVCBOVUxMLCcgK1xuXHRcdCdgaW1hZ2VgIHZhcmNoYXIoMjU1KSBOT1QgTlVMTCwnICtcblx0XHQnYHVzZXJuYW1lYCB2YXJjaGFyKDI1NSkgTk9UIE5VTEwsJyArXG5cdFx0J2BwcmljZWAgaW50KDExKSwnICtcblx0XHQnYHVzZXJfaWRgIGludCgxMSkgTk9UIE5VTEwsJyArXG5cdFx0J2BkZXNjcmlwdGlvbmAgVEVYVCwnICtcblx0XHQnUFJJTUFSWSBLRVkoYGlkYCksJyArXG5cdFx0J0NPTlNUUkFJTlQgYEZLX1VTRVJfQ0FNUGAgRk9SRUlHTiBLRVkgKGB1c2VyX2lkYCkgUkVGRVJFTkNFUyBgdXNlcnNgIChgaWRgKScgK1xuXHRcdCcpIEVOR0lORSA9IElubm9EQiBERUZBVUxUIENIQVJTRVQgPSB1dGY4JztcblxuXHRsZXQgc3FsX2NvbW1lbnQgPSAnQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgYGNvbW1lbnRzYCAoJyArXG5cdFx0J2BpZGAgaW50KDExKSBOT1QgTlVMTCBBVVRPX0lOQ1JFTUVOVCwnICtcblx0XHQnYHVzZXJuYW1lYCB2YXJjaGFyKDI1NSkgTk9UIE5VTEwsJyArXG5cdFx0J2B1c2VyX2lkYCBpbnQoMTEpIE5PVCBOVUxMLCcgK1xuXHRcdCdgdGV4dGAgVEVYVCBOT1QgTlVMTCwnICtcblx0XHQnYGNhbXBncm91bmRfaWRgIGludCgxMSkgTk9UIE5VTEwsJyArXG5cdFx0J1BSSU1BUlkgS0VZKGBpZGApLCcgK1xuXHRcdCdDT05TVFJBSU5UIGBGS19VU0VSX0NPTU1FTlRgIEZPUkVJR04gS0VZIChgdXNlcl9pZGApIFJFRkVSRU5DRVMgYHVzZXJzYCAoYGlkYCksJyArXG5cdFx0J0NPTlNUUkFJTlQgYEZLX0NBTVBfQ09NTUVOVGAgRk9SRUlHTiBLRVkgKGBjYW1wZ3JvdW5kX2lkYCkgUkVGRVJFTkNFUyBgY2FtcGdyb3VuZHNgIChgaWRgKScgK1xuXHRcdCcpIEVOR0lORSA9IElubm9EQiBERUZBVUxUIENIQVJTRVQgPSB1dGY4JztcblxuXHRkYXRhYmFzZS5xdWVyeShzcWxfdXNlciwgbnVsbCk7XG5cdGRhdGFiYXNlLnF1ZXJ5KHNxbF9jYW1wLCBudWxsKTtcblx0ZGF0YWJhc2UucXVlcnkoc3FsX2NvbW1lbnQsIG51bGwpO1xufTtcbiJdfQ==
