const noInjectableDecorator = require("./no-injectable-decorator");
const plugin = { rules: { "enforce-no-injectable-decorator": noInjectableDecorator } };
module.exports = plugin;