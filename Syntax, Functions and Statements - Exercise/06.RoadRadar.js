function solve(speed, area) {

    let limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    if (speed <= limits[area]) {
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
        return;
    }

    let diff = Math.abs(limits[area] - speed);

    let status = getStatus(diff);

    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits[area]} - ${status}`);

    function getStatus(diff) {
        if (diff <= 20) {
            return "speeding";
        } else if (diff <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }

}