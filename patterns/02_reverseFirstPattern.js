// *****
// ****
// ***
// **
// *

let row = 5;

for (let i = row; i > 0; i--){
    let stars = ""
    for(let j = i; j > 0; j--){
        stars = stars + "* "
    }
    console.log(stars);
}