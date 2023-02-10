const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const batchSize = 5;

//Need function that returns the end index of the batch, given the start index
//if there not enough items to fill the batch, return the last index

function getBatchEndIndex(startIndex) {
  if (startIndex + batchSize > items.length) {
    return items.length - 1;
  }
  return startIndex + batchSize - 1;
}

// Need function that takes the last batch index and returns the next start index,
// if there not enough items to fill the batch, return the the first index

function getNextBatchStartIndex(lastBatchEndIndex) {
  if (lastBatchEndIndex + batchSize > items.length) {
    return 0;
  }
  return lastBatchEndIndex + 1;
}  

// Need test loop that calls the above functions to get the start and end index of the batch
// and then prints the batch

let batchStartIndex = 0;
let batchEndIndex = getBatchEndIndex(batchStartIndex);

while (batchStartIndex < items.length) {
  console.log(items.slice(batchStartIndex, batchEndIndex + 1));
  batchStartIndex = getNextBatchStartIndex(batchEndIndex);
  batchEndIndex = getBatchEndIndex(batchStartIndex);
}


arr
startIndex
endIndex