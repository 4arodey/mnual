"use strict";
/**
 * Oleg Karpach code 21/07/17.
 */
var CampgroundRepository_1 = require("./repository/CampgroundRepository");
var CommentRepository_1 = require("./repository/CommentRepository");
var campgroundRepository = new CampgroundRepository_1.default();
var commentRepository = new CommentRepository_1.default();
var authentication = {};
authentication.checkCampOwner = function (req, res, next) {
    if (req.isAuthenticated()) {
        try {
            campgroundRepository.findOneById(req.params.id, function (callback) {
                if (callback.campground.user_id !== req.user.id) {
                    res.status(403).send({ message: 'You have no permission' });
                }
                else {
                    next();
                }
            });
        }
        catch (err) {
            res.status(500).send({ message: err });
        }
    }
    else {
        res.status(403).send({ message: 'Please Login First' });
    }
};
authentication.checkCommentOwner = function (req, res, next) {
    if (req.isAuthenticated()) {
        try {
            commentRepository.findOneById(req.params.comment_id, function (callback) {
                if (callback.comment.user_id !== req.user.id) {
                    res.status(403).send({ message: 'You have no permission' });
                }
                else {
                    next();
                }
            });
        }
        catch (err) {
            res.status(500).send({ message: err });
        }
    }
    else {
        res.status(403).send({ message: 'Please Login First' });
    }
};
authentication.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(403).send({ message: 'Please Login First' });
};
module.exports = authentication;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGhlbnRpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUVILDBFQUFxRTtBQUNyRSxvRUFBK0Q7QUFFL0QsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLDhCQUFvQixFQUFFLENBQUM7QUFDeEQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLDJCQUFpQixFQUFFLENBQUM7QUFFbEQsSUFBSSxjQUFjLEdBQVEsRUFBRSxDQUFDO0FBRTdCLGNBQWMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLElBQVM7SUFDN0QsSUFBSSxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUU7UUFDMUIsSUFBSTtZQUNILG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFDLFFBQWE7Z0JBQzdELElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7b0JBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQztpQkFDNUQ7cUJBQU07b0JBQ04sSUFBSSxFQUFFLENBQUM7aUJBQ1A7WUFDRixDQUFDLENBQUMsQ0FBQztTQUNIO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1NBQ3RDO0tBQ0Q7U0FBTTtRQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUN4RDtBQUNGLENBQUMsQ0FBQztBQUVGLGNBQWMsQ0FBQyxpQkFBaUIsR0FBRyxVQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsSUFBUztJQUNoRSxJQUFJLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRTtRQUMxQixJQUFJO1lBQ0gsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQUMsUUFBYTtnQkFDbEUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO2lCQUM1RDtxQkFBTTtvQkFDTixJQUFJLEVBQUUsQ0FBQztpQkFDUDtZQUNGLENBQUMsQ0FBQyxDQUFDO1NBQ0g7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7U0FDdEM7S0FDRDtTQUFNO1FBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0tBQ3hEO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsY0FBYyxDQUFDLFVBQVUsR0FBRyxVQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsSUFBUztJQUN6RCxJQUFJLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRTtRQUMxQixPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2Q7SUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDO0FBRUYsaUJBQVMsY0FBYyxDQUFDIiwiZmlsZSI6IkF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPbGVnIEthcnBhY2ggY29kZSAyMS8wNy8xNy5cbiAqL1xuXG5pbXBvcnQgQ2FtcGdyb3VuZFJlcG9zaXRvcnkgZnJvbSAnLi9yZXBvc2l0b3J5L0NhbXBncm91bmRSZXBvc2l0b3J5JztcbmltcG9ydCBDb21tZW50UmVwb3NpdG9yeSBmcm9tICcuL3JlcG9zaXRvcnkvQ29tbWVudFJlcG9zaXRvcnknO1xuXG5jb25zdCBjYW1wZ3JvdW5kUmVwb3NpdG9yeSA9IG5ldyBDYW1wZ3JvdW5kUmVwb3NpdG9yeSgpO1xuY29uc3QgY29tbWVudFJlcG9zaXRvcnkgPSBuZXcgQ29tbWVudFJlcG9zaXRvcnkoKTtcblxubGV0IGF1dGhlbnRpY2F0aW9uOiBhbnkgPSB7fTtcblxuYXV0aGVudGljYXRpb24uY2hlY2tDYW1wT3duZXIgPSAocmVxOiBhbnksIHJlczogYW55LCBuZXh0OiBhbnkpID0+IHtcblx0aWYgKHJlcS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjYW1wZ3JvdW5kUmVwb3NpdG9yeS5maW5kT25lQnlJZChyZXEucGFyYW1zLmlkLCAoY2FsbGJhY2s6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAoY2FsbGJhY2suY2FtcGdyb3VuZC51c2VyX2lkICE9PSByZXEudXNlci5pZCkge1xuXHRcdFx0XHRcdHJlcy5zdGF0dXMoNDAzKS5zZW5kKHsgbWVzc2FnZTogJ1lvdSBoYXZlIG5vIHBlcm1pc3Npb24nIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5leHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyciB9KVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdQbGVhc2UgTG9naW4gRmlyc3QnIH0pO1xuXHR9XG59O1xuXG5hdXRoZW50aWNhdGlvbi5jaGVja0NvbW1lbnRPd25lciA9IChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xuXHRpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbW1lbnRSZXBvc2l0b3J5LmZpbmRPbmVCeUlkKHJlcS5wYXJhbXMuY29tbWVudF9pZCwgKGNhbGxiYWNrOiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKGNhbGxiYWNrLmNvbW1lbnQudXNlcl9pZCAhPT0gcmVxLnVzZXIuaWQpIHtcblx0XHRcdFx0XHRyZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdZb3UgaGF2ZSBubyBwZXJtaXNzaW9uJyB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIgfSlcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzLnN0YXR1cyg0MDMpLnNlbmQoeyBtZXNzYWdlOiAnUGxlYXNlIExvZ2luIEZpcnN0JyB9KTtcblx0fVxufTtcblxuYXV0aGVudGljYXRpb24uaXNMb2dnZWRJbiA9IChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xuXHRpZiAocmVxLmlzQXV0aGVudGljYXRlZCgpKSB7XG5cdFx0cmV0dXJuIG5leHQoKTtcblx0fVxuXHRyZXMuc3RhdHVzKDQwMykuc2VuZCh7IG1lc3NhZ2U6ICdQbGVhc2UgTG9naW4gRmlyc3QnIH0pO1xufTtcblxuZXhwb3J0ID0gYXV0aGVudGljYXRpb247XG5cbiJdfQ==
