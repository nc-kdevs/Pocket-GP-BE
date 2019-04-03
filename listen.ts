const appListen = require('./app.js');

const { PORT = 9090 } = process.env;

appListen.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
