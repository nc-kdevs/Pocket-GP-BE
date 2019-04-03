var appListen = require('./app.js');
var _a = process.env.PORT, PORT = _a === void 0 ? 9090 : _a;
appListen.listen(PORT, function () { return console.log("Now listening on port " + PORT); });
