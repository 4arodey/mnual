"use strict";
/**
 * Oleg Karpach code 21/07/17.
 */
var bcrypt = require("bcrypt-nodejs");
var passport_local_1 = require("passport-local");
var UserRepository_1 = require("./repository/UserRepository");
var userRepository = new UserRepository_1.default();
module.exports = function (passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        try {
            userRepository.findOneById(id, function (result) {
                done(null, result);
            });
        }
        catch (err) {
            return done(err);
        }
    });
    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-signup', new passport_local_1.Strategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, username, password, done) {
        try {
            userRepository.findOneByUsername(username, function (result) {
                if (result) {
                    return done(false, { message: 'This username is already taken.' });
                }
                else {
                    // if there is no user with that username, create the user
                    var newUser_1 = {
                        id: 0,
                        username: username,
                        password: bcrypt.hashSync(password, null)
                    };
                    userRepository.createOne(newUser_1, function (result) {
                        newUser_1.id = result.user_id;
                        done(null, newUser_1);
                    });
                    return done;
                }
            });
        }
        catch (err) {
            return done(err);
        }
    }));
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-login', new passport_local_1.Strategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, username, password, done) {
        try {
            userRepository.findOneByUsername(username, function (result) {
                if (result) {
                    // if the user is found but the password is wrong
                    if (!bcrypt.compareSync(password, result.password)) {
                        return done(null, false, { message: 'User name or password is wrong' });
                    }
                    else {
                        // all is well, return successful user
                        return done(null, result);
                    }
                }
                else {
                    return done(null, false, { message: 'User name or password is wrong' });
                }
            });
        }
        catch (err) {
            return done(err);
        }
    }));
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O2dCQUN0RCxJQUFJLE1BQU0sRUFBRTtvQkFDWCxpREFBaUQ7b0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDO3FCQUN4RTt5QkFBTTt3QkFDTixzQ0FBc0M7d0JBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDMUI7aUJBQ0Q7cUJBQU07b0JBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDLENBQUM7aUJBQ3hFO1lBQ0YsQ0FBQyxDQUFDLENBQUM7U0FDSDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDRixDQUFDLENBQUMsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6IlBhc3Nwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPbGVnIEthcnBhY2ggY29kZSAyMS8wNy8xNy5cbiAqL1xuXG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0LW5vZGVqcyc7XG5pbXBvcnQgeyBQYXNzcG9ydCB9IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0IFVzZXJSZXBvc2l0b3J5IGZyb20gJy4vcmVwb3NpdG9yeS9Vc2VyUmVwb3NpdG9yeSc7XG5cbmNvbnN0IHVzZXJSZXBvc2l0b3J5ID0gbmV3IFVzZXJSZXBvc2l0b3J5KCk7XG5cbmV4cG9ydCA9IChwYXNzcG9ydDogUGFzc3BvcnQpID0+IHtcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyBwYXNzcG9ydCBzZXNzaW9uIHNldHVwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gcmVxdWlyZWQgZm9yIHBlcnNpc3RlbnQgbG9naW4gc2Vzc2lvbnNcblx0Ly8gcGFzc3BvcnQgbmVlZHMgYWJpbGl0eSB0byBzZXJpYWxpemUgYW5kIHVuc2VyaWFsaXplIHVzZXJzIG91dCBvZiBzZXNzaW9uXG5cblx0Ly8gdXNlZCB0byBzZXJpYWxpemUgdGhlIHVzZXIgZm9yIHRoZSBzZXNzaW9uXG5cdHBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXI6IGFueSwgZG9uZTogYW55KSA9PiB7XG5cdFx0ZG9uZShudWxsLCB1c2VyLmlkKTtcblx0fSk7XG5cblx0Ly8gdXNlZCB0byBkZXNlcmlhbGl6ZSB0aGUgdXNlclxuXHRwYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoKGlkOiBhbnksIGRvbmU6IGFueSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHR1c2VyUmVwb3NpdG9yeS5maW5kT25lQnlJZChpZCwgKHJlc3VsdDogYW55KSA9PiB7XG5cdFx0XHRcdGRvbmUobnVsbCwgcmVzdWx0KTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0cmV0dXJuIGRvbmUoZXJyKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gTE9DQUwgU0lHTlVQID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdC8vIHdlIGFyZSB1c2luZyBuYW1lZCBzdHJhdGVnaWVzIHNpbmNlIHdlIGhhdmUgb25lIGZvciBsb2dpbiBhbmQgb25lIGZvciBzaWdudXBcblx0Ly8gYnkgZGVmYXVsdCwgaWYgdGhlcmUgd2FzIG5vIG5hbWUsIGl0IHdvdWxkIGp1c3QgYmUgY2FsbGVkICdsb2NhbCdcblxuXHRwYXNzcG9ydC51c2UoJ2xvY2FsLXNpZ251cCcsXG5cdFx0bmV3IFN0cmF0ZWd5KHtcblx0XHRcdFx0dXNlcm5hbWVGaWVsZDogJ3VzZXJuYW1lJyxcblx0XHRcdFx0cGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcblx0XHRcdFx0cGFzc1JlcVRvQ2FsbGJhY2s6IHRydWUgLy8gYWxsb3dzIHVzIHRvIHBhc3MgYmFjayB0aGUgZW50aXJlIHJlcXVlc3QgdG8gdGhlIGNhbGxiYWNrXG5cdFx0XHR9LFxuXHRcdFx0KHJlcTogYW55LCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkb25lOiBhbnkpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR1c2VyUmVwb3NpdG9yeS5maW5kT25lQnlVc2VybmFtZSh1c2VybmFtZSwgKHJlc3VsdDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKGZhbHNlLCB7IG1lc3NhZ2U6ICdUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4uJyB9KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgd2l0aCB0aGF0IHVzZXJuYW1lLCBjcmVhdGUgdGhlIHVzZXJcblx0XHRcdFx0XHRcdFx0bGV0IG5ld1VzZXIgPSB7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IDAsXG5cdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWU6IHVzZXJuYW1lLFxuXHRcdFx0XHRcdFx0XHRcdHBhc3N3b3JkOiBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIG51bGwpXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHVzZXJSZXBvc2l0b3J5LmNyZWF0ZU9uZShuZXdVc2VyLCAocmVzdWx0OiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRuZXdVc2VyLmlkID0gcmVzdWx0LnVzZXJfaWQ7XG5cdFx0XHRcdFx0XHRcdFx0ZG9uZShudWxsLCBuZXdVc2VyKVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRvbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdHJldHVybiBkb25lKGVycik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdCk7XG5cblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyBMT0NBTCBMT0dJTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gd2UgYXJlIHVzaW5nIG5hbWVkIHN0cmF0ZWdpZXMgc2luY2Ugd2UgaGF2ZSBvbmUgZm9yIGxvZ2luIGFuZCBvbmUgZm9yIHNpZ251cFxuXHQvLyBieSBkZWZhdWx0LCBpZiB0aGVyZSB3YXMgbm8gbmFtZSwgaXQgd291bGQganVzdCBiZSBjYWxsZWQgJ2xvY2FsJ1xuXG5cdHBhc3Nwb3J0LnVzZSgnbG9jYWwtbG9naW4nLFxuXHRcdG5ldyBTdHJhdGVneSh7XG5cdFx0XHRcdC8vIGJ5IGRlZmF1bHQsIGxvY2FsIHN0cmF0ZWd5IHVzZXMgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLCB3ZSB3aWxsIG92ZXJyaWRlIHdpdGggZW1haWxcblx0XHRcdFx0dXNlcm5hbWVGaWVsZDogJ3VzZXJuYW1lJyxcblx0XHRcdFx0cGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcblx0XHRcdFx0cGFzc1JlcVRvQ2FsbGJhY2s6IHRydWUgLy8gYWxsb3dzIHVzIHRvIHBhc3MgYmFjayB0aGUgZW50aXJlIHJlcXVlc3QgdG8gdGhlIGNhbGxiYWNrXG5cdFx0XHR9LFxuXHRcdFx0KHJlcTogYW55LCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkb25lOiBhbnkpID0+IHsgLy8gY2FsbGJhY2sgd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmQgZnJvbSBvdXIgZm9ybVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHVzZXJSZXBvc2l0b3J5LmZpbmRPbmVCeVVzZXJuYW1lKHVzZXJuYW1lLCAocmVzdWx0OiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gaWYgdGhlIHVzZXIgaXMgZm91bmQgYnV0IHRoZSBwYXNzd29yZCBpcyB3cm9uZ1xuXHRcdFx0XHRcdFx0XHRpZiAoIWJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgcmVzdWx0LnBhc3N3b3JkKSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IG1lc3NhZ2U6ICdVc2VyIG5hbWUgb3IgcGFzc3dvcmQgaXMgd3JvbmcnIH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGFsbCBpcyB3ZWxsLCByZXR1cm4gc3VjY2Vzc2Z1bCB1c2VyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGRvbmUobnVsbCwgcmVzdWx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogJ1VzZXIgbmFtZSBvciBwYXNzd29yZCBpcyB3cm9uZycgfSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdHJldHVybiBkb25lKGVycik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdCk7XG59O1xuIl19
