define("control-debug", [], function(require, exports, module) {
    function control(min, max, now) {
        if (now < min) {
            return min;
        } else if (now > max) {
            return max;
        } else {
            return now;
        }
    }
    exports.control = control;
});
