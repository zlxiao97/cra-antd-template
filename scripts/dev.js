const concurrently = require("concurrently");

concurrently(["npm run watch", "craco start"], {
  killOthers: true
});
