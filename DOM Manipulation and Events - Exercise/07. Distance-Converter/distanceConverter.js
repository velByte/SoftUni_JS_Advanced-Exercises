function attachEventsListeners() {
    console.log('TODO:...');

    const conversionRates = {
        km: { m: 1000, cm: 100000, mm: 1000000, mi: 0.621371, yrd: 1093.613, ft: 3280.84, in: 39370.1, km: 1 },
        m: { km: 0.001, cm: 100, mm: 1000, mi: 0.000621371, yrd: 1.09361, ft: 3.28084, in: 39.3701, m: 1 },
        cm: { km: 0.00001, m: 0.01, mm: 10, mi: 0.00000621371, yrd: 0.0109361, ft: 0.0328084, in: 0.393701, cm: 1 },
        mm: { km: 0.000001, m: 0.001, cm: 0.1, mi: 0.000000621371, yrd: 0.00109361, ft: 0.00328084, in: 0.0393701, mm: 1 },
        mi: { km: 1.60934, m: 1609.34, cm: 160934, mm: 1609340, yrd: 1760, ft: 5280, in: 63360, mi: 1 },
        yrd: { km: 0.0009144, m: 0.9144, cm: 91.44, mm: 914.4, mi: 0.000568182, ft: 3, in: 36, yrd: 1 },
        ft: { km: 0.0003048, m: 0.3048, cm: 30.48, mm: 304.8, mi: 0.000189394, yrd: 0.333333, in: 12, ft: 1 },
        in: { km: 0.0000254, m: 0.0254, cm: 2.54, mm: 25.4, mi: 0.000015783, yrd: 0.0277778, ft: 0.0833333, in: 1 }
    };

    document.getElementById("convert").addEventListener("click", clickHendler);

    function clickHendler(e) {
        let { from, to } = getInputValues();
        let conversation = calcDistance(from.value, from.unit, to.unit);
        document.getElementById("outputDistance").value = conversation;
    }

    function calcDistance(value, fromUnit, toUnit) {
        return value * conversionRates[fromUnit][toUnit]
    }

    function getInputValues() {

        let fromValue = document.getElementById("inputDistance").value;
        let fromUnit = document.getElementById("inputUnits").value;
        let toUnit = document.getElementById("outputUnits").value;

        return {
            from: {
                value: fromValue,
                unit: fromUnit
            },
            to: {
                value: undefined,
                unit: toUnit
            }
        }
    }
}