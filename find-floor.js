function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] >= num) {
       
        firstOccurrence = mid;
        right = mid - 1;
      } else {
        
        left = mid + 1;
      }
    }
  
    if (firstOccurrence === -1 || arr[firstOccurrence] !== num) {
      
      return -1;
    }
  
   
    const lastOccurrence = left - 1;
  
    
    return lastOccurrence - firstOccurrence + 1;
  }
  
  module.exports = sortedFrequency;
  