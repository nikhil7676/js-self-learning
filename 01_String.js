console.log("hello js strings !!")
//String is immutable

const fullName = "Nikhil Joshi";
//alse declare as : const var_name = new String("hello string")

//start all the main and commanly used strings method / function in js:

console.log(fullName.length) // give length of the string

console.log(fullName.toUpperCase()) //give the string in upper case

console.log(fullName.toLowerCase()) //give the string in upper case

const trimString = "   hello  this is              "
console.log(trimString)
console.log(trimString.trim()) //used to remove all the white spaces from left and rigth of the string ..... is also have trimstart() and trimend() function

console.log(fullName.substring(2,6)) //used to get substring from an existing string

const sliceString = fullName.slice(-5,-1) 
console.log(`sliced string is : ${sliceString}`) //used to get substring from an existing string but it also support neghitive index
console.log(`sliced string is : ${fullName.slice(3,10)}`)

//replace is used fot replace the searched text with given text [ NOTE : all the method / function return shallow copy , not change in original String]
console.log(`sliced string with remove all white space : ${fullName.slice(3,10).replace(" ","")}`)

//used to split and return and array of splited output
//[NOTE : 1st argument for when to split and 2nd for how much split perform (limite) ]
console.log(fullName.split(" ",1))