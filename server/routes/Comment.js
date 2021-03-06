"use strict";
/**
 * Oleg Karpach code 22/07/17.
 */
var express = require("express");
var authentication = require("../Authentication");
var CommentRepository_1 = require("../repository/CommentRepository");
var router = express.Router();
var commentRepository = new CommentRepository_1.default();
// get one comment for edit
router.get('/comment/:comment_id/edit', authentication.checkCommentOwner, function (req, res) {
    try {
        commentRepository.findOneById(req.params.comment_id, function (callback) {
            callback.message = 'OK';
            res.status(200).send(callback);
        });
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
});
// create a new comment by campground id
router.post('/comment', authentication.isLoggedIn, function (req, res) {
    req.body.text = req.sanitize(req.body.text);
    try {
        commentRepository.createOne(req.body, function (callback) {
            callback.message = 'OK';
            res.status(200).send(callback);
        });
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
});
// edit one comment by comment id
router.put('/comment/:comment_id/edit', authentication.checkCommentOwner, function (req, res) {
    req.body.text = req.sanitize(req.body.text);
    try {
        commentRepository.updateOne(req.body);
        res.status(200).send({ message: 'OK' });
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
});
// delete one comment
router.delete('/comment/:comment_id', authentication.checkCommentOwner, function (req, res) {
    try {
        commentRepository.deleteOne(req.params.comment_id);
        res.status(200).send({ message: 'OK' });
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
});
module.exports = router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4QztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ2IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtLQUN0QztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsTUFBTSxDQUFDIiwiZmlsZSI6InJvdXRlcy9Db21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPbGVnIEthcnBhY2ggY29kZSAyMi8wNy8xNy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgYXV0aGVudGljYXRpb24gZnJvbSAnLi4vQXV0aGVudGljYXRpb24nO1xuaW1wb3J0IENvbW1lbnRSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcnkvQ29tbWVudFJlcG9zaXRvcnknO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuY29uc3QgY29tbWVudFJlcG9zaXRvcnkgPSBuZXcgQ29tbWVudFJlcG9zaXRvcnkoKTtcblxuLy8gZ2V0IG9uZSBjb21tZW50IGZvciBlZGl0XG5yb3V0ZXIuZ2V0KCcvY29tbWVudC86Y29tbWVudF9pZC9lZGl0JywgYXV0aGVudGljYXRpb24uY2hlY2tDb21tZW50T3duZXIsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0dHJ5IHtcblx0XHRjb21tZW50UmVwb3NpdG9yeS5maW5kT25lQnlJZChyZXEucGFyYW1zLmNvbW1lbnRfaWQsIChjYWxsYmFjazogYW55KSA9PiB7XG5cdFx0XHRjYWxsYmFjay5tZXNzYWdlID0gJ09LJztcblx0XHRcdHJlcy5zdGF0dXMoMjAwKS5zZW5kKGNhbGxiYWNrKTtcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIgfSlcblx0fVxufSk7XG5cbi8vIGNyZWF0ZSBhIG5ldyBjb21tZW50IGJ5IGNhbXBncm91bmQgaWRcbnJvdXRlci5wb3N0KCcvY29tbWVudCcsIGF1dGhlbnRpY2F0aW9uLmlzTG9nZ2VkSW4sIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0cmVxLmJvZHkudGV4dCA9IHJlcS5zYW5pdGl6ZShyZXEuYm9keS50ZXh0KTtcblxuXHR0cnkge1xuXHRcdGNvbW1lbnRSZXBvc2l0b3J5LmNyZWF0ZU9uZShyZXEuYm9keSwgKGNhbGxiYWNrOiBhbnkpID0+IHtcblx0XHRcdGNhbGxiYWNrLm1lc3NhZ2UgPSAnT0snO1xuXHRcdFx0cmVzLnN0YXR1cygyMDApLnNlbmQoY2FsbGJhY2spO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyciB9KVxuXHR9XG59KTtcblxuLy8gZWRpdCBvbmUgY29tbWVudCBieSBjb21tZW50IGlkXG5yb3V0ZXIucHV0KCcvY29tbWVudC86Y29tbWVudF9pZC9lZGl0JywgYXV0aGVudGljYXRpb24uY2hlY2tDb21tZW50T3duZXIsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0cmVxLmJvZHkudGV4dCA9IHJlcS5zYW5pdGl6ZShyZXEuYm9keS50ZXh0KTtcblxuXHR0cnkge1xuXHRcdGNvbW1lbnRSZXBvc2l0b3J5LnVwZGF0ZU9uZShyZXEuYm9keSk7XG5cdFx0cmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiAnT0snIH0pO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyciB9KVxuXHR9XG59KTtcblxuLy8gZGVsZXRlIG9uZSBjb21tZW50XG5yb3V0ZXIuZGVsZXRlKCcvY29tbWVudC86Y29tbWVudF9pZCcsIGF1dGhlbnRpY2F0aW9uLmNoZWNrQ29tbWVudE93bmVyLCAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29tbWVudFJlcG9zaXRvcnkuZGVsZXRlT25lKHJlcS5wYXJhbXMuY29tbWVudF9pZCk7XG5cdFx0cmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiAnT0snIH0pO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyciB9KVxuXHR9XG59KTtcblxuZXhwb3J0ID0gcm91dGVyO1xuIl19
