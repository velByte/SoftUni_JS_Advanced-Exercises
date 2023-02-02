function argumentInfo(...input){
    let collection = new Map(); 
    input.forEach(item => {
        let type = typeof(item); 
        let value = item; 
        if(collection.has(type)){
            let content = collection.get(type);
            content++; 
            collection.set(type, content); 
        } else {
            collection.set(type, 1);
        }
        console.log(`${type}: ${value}`);
    })

    let sortedCollection = new Map([...collection.entries()].sort((a, b) => {
        return b[1] - a[1]
    }));
    
    sortedCollection.forEach((value, key) => {
        console.log(`${key} = ${value}`);
    })
}

argumentInfo({ name: 'bob'}, 3.333, 9.999)