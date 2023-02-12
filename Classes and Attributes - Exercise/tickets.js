function tickets(ticketsDescriptionArray, sortingCriterial) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let resultMap = new Map();

  ticketsDescriptionArray.forEach((item, index) => {
    let [destination, price, status] = item.split("|");
    price = Number(price);
    resultMap.set(index, new Ticket(destination, price, status));
  });

  let result = undefined;

  switch (sortingCriterial) {
    case "destination":
      let destinationSortedAsc = new Map(
        [...resultMap.entries()].sort((a, b) => {
          return a[1].destination.localeCompare(b[1].destination);
        })
      );
      result = destinationSortedAsc;
      break;
    case "price":
      let priceSortedAsc = new Map(
        [...resultMap.entries()].sort((a, b) => {
          return a[1].price - a[1].price;
        })
      );
      result = priceSortedAsc;
      break;
    case "status":
      let statusSortedAsc = new Map(
        [...resultMap.entries()].sort((a, b) => {
          return a[1].status.localeCompare(b[1].status);
        })
      );
      result = statusSortedAsc;
      break;
    default:
      break;
  }


  return Array.from(result.values())
  
}

let inputA = [
  "Philadelphia|94.20|available",
  "New York City|95.99|available",
  "New York City|95.99|sold",
  "Boston|126.20|departed",
];
let inputB = "status";

tickets(inputA, inputB);
