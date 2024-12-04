//reverse a string
    let str = "hello";

    for (let i = str.length - 1 ; i >= 0; i--) {
        // console.log(str[i]);
    }

//counst vowels
    let vowel = "count vowel in this string"
    let count = 0;
    for (let i of vowel) {
        if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
            count = count + 1;
        }
    }
    // console.log(`total vowel in string : ${count}`);

//check string is pallindrom or not
// let testString = "radar"
    let testString = "hello"
    let tempArr = []

    for(let i = testString.length - 1; i >= 0; i--){
        tempArr.push(testString[i])
    }
    // console.log(tempArr.join(""))
    // if(tempArr.join("") == testString) console.log("stringn is pallindrom ")
    // else console.log("stringn is not pallindrom ")

// toggle case of string
    let original_string = "heLLo NikHil"
    let toggle_string_array = []

    for (let i of original_string) {
        if(i === i.toUpperCase()){
            toggle_string_array.push(i.toLowerCase())
        }else{
            toggle_string_array.push(i.toUpperCase())
        }
    }

    // console.log(original_string);
    // console.log(toggle_string_array.join(""));

