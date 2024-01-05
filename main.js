const moment = require('moment-timezone');

class Scheduly {
    constructor(duration, timezone = 'UTC') {
        this.duration = this.parseDuration(duration);
        this.timezone = timezone;
        this.timer = null;
    }

    parseDuration(duration) {
        const matches = duration.match(/(\d+)([hms])/g);
        let milliseconds = 0;

        matches.forEach(match => {
            const value = parseInt(match.slice(0, -1));
            const unit = match.slice(-1);

            switch (unit) {
                case 'h': milliseconds += value * 60 * 60 * 1000; break;
                case 'm': milliseconds += value * 60 * 1000; break;
                case 's': milliseconds += value * 1000; break;
                default: break;
            }
        });

        return milliseconds;
    }

    calculateNextExecution() {
        const now = moment().tz(this.timezone);
        let nextExecution = now.clone().add(this.duration);

        return nextExecution;
    }

    schedule(fn) {
        if (this.timer) {
            console.error('Scheduling already in progress. Please stop the current schedule before starting a new one.');
            return;
        }
        
        const nextExecutionTime = this.calculateNextExecution();
        const delay = nextExecutionTime.diff(moment());

        setTimeout(() => {
            fn();
            this.timer = setInterval(fn, this.duration);
        }, delay);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
module.exports = Scheduly;
