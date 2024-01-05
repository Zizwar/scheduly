// Usage
const Scheduly = require("./main.js");

const schedul = new Scheduly("1m2s", "America/New_York");
schedul.schedule(() => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  console.log({ hour, minute, second });
});
