# Scheduly

scheduly is a simple JavaScript library for scheduling function executions based on specific timings and various time zones.

## Installation

To install scheduly, use the following command:
```bach
npm install scheduly
```

## Features

- Easy scheduling of functions.
- Support for multiple time zones.
- Customizable scheduling intervals.

## Usage

First, import scheduly into your project:

```js
const ScheduleFunction = require(scheduly);
```
Then, create a new ScheduleFunction instance, specifying the interval and time zone. For example, to run a function every 4 hours and 1 minute:
```js
const schedule = new ScheduleFunction("4h01m", "Europe/London");
```
Now, you can schedule your function:
```js
schedule.schedule(() => {
    // Your function logic here
});
```

To stop the scheduled function:
```js
schedule.stop();
```
## Examples

### Scheduling a Function in GMT:
```js
const gmtSchedule = new ScheduleFunction("2h30m", "GMT");
gmtSchedule.schedule(() => {
    console.log(This function runs every 2 hours and 30 minutes in GMT.);
});
```

### Scheduling a Function in New York Time:
```js
const nySchedule = new ScheduleFunction("1h", "America/New_York");
nySchedule.schedule(() => {
    console.log(This function runs every hour in New York time.);
});
```
### Scheduling a Function in Tokyo Time:
```js
const tokyoSchedule = new ScheduleFunction("3h45m", "Asia/Tokyo");
tokyoSchedule.schedule(() => {
    console.log(This function runs every 3 hours and 45 minutes in Tokyo time.);
});
```

