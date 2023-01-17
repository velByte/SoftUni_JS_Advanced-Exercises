function solve(obj) {
    if (obj.dizziness === true) {
        let water = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += water;
        obj.dizziness = false;
    }
    return obj;
}


console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
))