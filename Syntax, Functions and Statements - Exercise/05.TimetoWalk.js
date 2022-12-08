function solve(distancInSteps, footprintInMeters, speed) {
    let distance = distancInSteps * footprintInMeters; //in meters 
    let speedInMetersProS = (speed * 1000) / (60 * 60);
    let breaks = Math.floor(distance / 500);
    //d = st 
    // d = distance
    // s = speed 
    // t = time 
    //t = d/s

    let t = distance / speedInMetersProS;
    t += (breaks * 60);
    let seconds = Math.round(t % 60);
    let minuts = Math.floor((t / 60) % 60);
    let hours = Math.floor((t / 60 / 60) % 60);

    console.log(`${hours < 10 ? "0" + hours : hours}:${minuts < 10 ? "0" + minuts : minuts}:${seconds < 10 ? "0" + seconds : seconds}`);

}