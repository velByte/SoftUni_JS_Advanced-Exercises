function attachEventsListeners() {
    [...document.querySelectorAll('input[type="button"]')].forEach(btn => btn.addEventListener('click', convert));


    function convert(e) {
        const input = e.target.parentNode.querySelector('input[type="text"]');
        const id = input.id;
        const value = Number(input.value);
        const units = {
            days: {
                hours: 24,
                minutes: 1440,
                seconds: 86400
            },
            hours: {
                days: 1 / 24,
                minutes: 60,
                seconds: 3600
            },
            minutes: {
                days: 1 / 1440,
                hours: 1 / 60,
                seconds: 60
            },
            seconds: {
                days: 1 / 86400,
                hours: 1 / 3600,
                minutes: 1 / 60
            }
        }
        const unit = units[id];
        Object.entries(unit).forEach(([key, val]) => {
            document.getElementById(key).value = value * val;
        });
    }
}