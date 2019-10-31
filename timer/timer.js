function getTimer(name, countSeconds) {
    const timer = {
        name: name,
        counter: countSeconds,
        start: start
    };

    const interval  = setInterval(() => {
        let seconds = beautifyValue(--timer.counter % 60);
        console.log(`${timer.name}: ${seconds}`)
    }, 1000);

    function start() {
        let sec = timer.counter;

        setTimeout(() => {
            clearInterval(interval)
        }, sec * 1000);
    }

    function pause() {
        clearInterval(interval)
    }

    function beautifyValue(val) {
        return val > 9 ? val : "0" + val;
    }

    return timer;
}

var timer = getTimer('test',10);

timer.start();

// setTimeout((timer) => {
//     timer.pause();
// }, 4000);
