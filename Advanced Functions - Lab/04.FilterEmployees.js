function solve(data, criteria){
    let parsedData = JSON.parse(data); 
    let index = 0; 
    
    function format(first_name, last_name, email){
        return `${first_name} ${last_name} - ${email}`;
    }

    let result = []; 

    if(criteria === "all"){
        parsedData.forEach(item => result.push(item))
    } else {
        let [key, value] = criteria.split("-");
        parsedData.forEach(item => {
            if(item[`${key}`] === value){
                result.push(item);
            }
        })
    }

    result.forEach(item => {
        console.log(`${index}. ${format(item.first_name, item.last_name, item.email)}`);
        index++;
    })
}

let data = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]
`
;

let criteria = 'last_name-Johnson';

solve(data, criteria)