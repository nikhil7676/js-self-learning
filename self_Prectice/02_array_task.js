// find maximum Number
    let numbers = [10,9,17,25,15]
    // using inbuild function
    // console.log(Math.max(...numbers))
    let max = null;
    for(let i of numbers){
        if(max < i){
            max = i
        }
    }
    // console.log(`maximum value is ${max}`);

//remove duplicates from array
    let duplicates_value = [1,2,3,2,3,4,5,6,6,7,8,9,7]
    let removed_duplicate_array = []

    for(let i in duplicates_value){
        if(duplicates_value.indexOf(duplicates_value[i]) == i){
            removed_duplicate_array.push(duplicates_value[i])
        }
    }
    // console.log(removed_duplicate_array);

//reverse an array
    function reverseArray(arr){
        let tempArr = []
        for (let i = arr.length-1; i >= 0; i--){
            tempArr.push(arr[i])
        }

        return tempArr;
    }
    let array = [1,2,3,4,5]
    // console.log(reverseArray(array))

//find even number or filter odd and even number
    let mixed_number = [1,2,3,4,5,6,7,8,9,10]
    let odd_number = []
    let even_number = []

    for (let i of mixed_number){
        if(i%2 == 0) odd_number.push(i)
        if(i%2 != 0) even_number.push(i)
    }
    // console.log(`odd numbers : ${odd_number}`);
    // console.log(`even numbers : ${even_number}`);

//concate two  array

console.log(odd_number.concat(even_number))
console.log([...odd_number, ...even_number])
