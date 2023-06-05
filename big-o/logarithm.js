// Binary Search
const binarySearch = (array, value) => {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        let middelIndex = Math.floor((firstIndex + lastIndex) / 2);
        if(array[middelIndex] === value){
            return middelIndex;
        }
        if(array[middelIndex] > value){
            lastIndex = middelIndex - 1;
        }else{
            firstIndex = middelIndex + 1;
        }
    }
    return -1;
}

const data = [1,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59];
const value = 37;
console.log(binarySearch(data, value));