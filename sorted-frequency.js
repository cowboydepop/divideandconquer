function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      
      if (arr[mid] >= x) {
        floor = arr[mid];
        right = mid - 1;
      } else {
        
        left = mid + 1;
      }
    }
  
    return floor;
  }
  
  module.exports = findFloor;
  