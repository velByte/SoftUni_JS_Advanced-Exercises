function solve(input) {
    function closure() {
        let collection = [];

        return {
            add: str => collection.push(str),
            remove: str => (collection = collection.filter(item => item !== str)),
            print: () => console.log(collection.join(","))
        };
    }

    const commands = new Map([
        ["add", str => fn.add(str)],
        ["remove", str => fn.remove(str)],
        ["print", () => fn.print()]
    ]);

    const fn = closure();

    input.forEach(item => {
        const [cmd, value] = item.split(" ");
        const command = commands.get(cmd);
        command ? command(value) : null;
    });
}
