function solve(input) {

    function carsMaker() {
        let objectsCollection = {};

        return {
            create: (name, parentName) => {
                if (parentName) {
                    objectsCollection[name] = Object.create(objectsCollection[parentName])
                } else {
                    objectsCollection[name] = {}
                }
            },
            set: (name, key, value) => {
                objectsCollection[name][key] = value;
            },
            print: name => {
                let ownProperties = [];
                let properties = [];
                for (let key in objectsCollection[name]) {
                    properties.push(`${key}:${objectsCollection[name][key]}`);
                }
                console.log(properties.join(","));
            }
        }
    }

    let maker = carsMaker();

    input.forEach(item => {
        let [cmd, name, ...res] = item.split(" ");
        switch (cmd) {

            case "create":
                if (res[0] === "inherit") {
                    maker[cmd](name, res[1])
                } else {
                    maker[cmd](name);
                }
                break;
            case "set":
                let [key, value] = res;
                maker[cmd](name, key, value);
                break;
            case "print":
                maker[cmd](name);
                break;
            default:
                break;
        }
    })
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']

)