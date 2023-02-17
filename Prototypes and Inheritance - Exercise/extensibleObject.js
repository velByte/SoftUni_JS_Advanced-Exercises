function extensibleObject() {
    let obj = {
        extend: function (template) {
            for (let prop in template) {
                if (typeof template[prop] === 'function') {
                    Object.getPrototypeOf(obj)[prop] = template[prop];
                } else {
                    obj[prop] = template[prop];
                }
            }
        }
    };
    return obj;
}

function extensibleObject2() {
    class Extensible{}

    Extensible.prototype.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] === 'function') {
                Object.getPrototypeOf(this)[prop] = template[prop];
            } else {
                this[prop] = template[prop];
            }
        }
    }

    return new Extensible();
}