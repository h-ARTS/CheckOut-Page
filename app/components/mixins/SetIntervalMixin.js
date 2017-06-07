const SetIntervalMixin = {
     componentWillMount() {
          this.intervals = [];
     },
     setInterval() {
          this.intervals.push(setInterval.apply(null, arguments));
     },
     componentWillUnmount() {
          this.intervals.map(clearInterval);
     }
};

export default SetIntervalMixin;