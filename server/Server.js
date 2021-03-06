"use strict";
/**
 * Oleg Karpach code 21/07/17.
 */
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var passport = require("passport");
var userRoutes = require("./routes/User");
var campgroundRoutes = require("./routes/Campground");
var commentRoutes = require("./routes/Comment");
var expressSanitizer = require('express-sanitizer');
//initial database schema
require('./database/DatabaseSchema').schema();
require('./Passport')(passport);
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));
// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));
app.use(expressSanitizer());
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//initial routes
app.use('/api', userRoutes);
app.use('/api', campgroundRoutes);
app.use('/api', commentRoutes);
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});
app.get('*', function (req, res) {
    res.send('Sorry, page not found!');
});
app.listen(8080, function () {
    console.log('This express angular app is listening on port:' + 8080);
});
module.exports = app;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyIsImZpbGUiOiJTZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE9sZWcgS2FycGFjaCBjb2RlIDIxLzA3LzE3LlxuICovXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuXG5pbXBvcnQgKiBhcyB1c2VyUm91dGVzIGZyb20gJy4vcm91dGVzL1VzZXInO1xuaW1wb3J0ICogYXMgY2FtcGdyb3VuZFJvdXRlcyBmcm9tICcuL3JvdXRlcy9DYW1wZ3JvdW5kJztcbmltcG9ydCAqIGFzIGNvbW1lbnRSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvQ29tbWVudCc7XG5cbmNvbnN0IGV4cHJlc3NTYW5pdGl6ZXIgPSByZXF1aXJlKCdleHByZXNzLXNhbml0aXplcicpO1xuXG4vL2luaXRpYWwgZGF0YWJhc2Ugc2NoZW1hXG5yZXF1aXJlKCcuL2RhdGFiYXNlL0RhdGFiYXNlU2NoZW1hJykuc2NoZW1hKCk7XG5yZXF1aXJlKCcuL1Bhc3Nwb3J0JykocGFzc3BvcnQpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuXG5hcHAudXNlKCcvYXBwJywgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NsaWVudC9hcHAnKSkpO1xuYXBwLnVzZSgnL2xpYnMnLCBleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vY2xpZW50L2xpYnMnKSkpO1xuXG4vLyBmb3Igc3lzdGVtLmpzIHRvIHdvcmsuIENhbiBiZSByZW1vdmVkIGlmIGJ1bmRsaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vY2xpZW50JykpKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL25vZGVfbW9kdWxlcycpKSk7XG5cbmFwcC51c2UoZXhwcmVzc1Nhbml0aXplcigpKTtcblxuYXBwLnVzZShzZXNzaW9uKHtcblx0c2VjcmV0OiAnbXlTZWNyZXRLZXknLFxuXHRyZXNhdmU6IHRydWUsXG5cdHNhdmVVbmluaXRpYWxpemVkOiB0cnVlXG59KSk7XG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XG5cbi8vaW5pdGlhbCByb3V0ZXNcbmFwcC51c2UoJy9hcGknLCB1c2VyUm91dGVzKTtcbmFwcC51c2UoJy9hcGknLCBjYW1wZ3JvdW5kUm91dGVzKTtcbmFwcC51c2UoJy9hcGknLCBjb21tZW50Um91dGVzKTtcblxuYXBwLmdldCgnLycsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcblx0cmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9jbGllbnQvaW5kZXguaHRtbCcpKTtcbn0pO1xuXG5hcHAuZ2V0KCcqJywgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xuXHRyZXMuc2VuZCgnU29ycnksIHBhZ2Ugbm90IGZvdW5kIScpO1xufSk7XG5cbmFwcC5saXN0ZW4oODA4MCwgKCkgPT4ge1xuXHRjb25zb2xlLmxvZygnVGhpcyBleHByZXNzIGFuZ3VsYXIgYXBwIGlzIGxpc3RlbmluZyBvbiBwb3J0OicgKyA4MDgwKTtcbn0pO1xuXG5leHBvcnQgPSBhcHA7XG4iXX0=
