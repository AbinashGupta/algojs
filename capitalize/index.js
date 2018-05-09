// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//my solution #1 same as solution #2
// function capitalize(str) {
//     const strArray = str.split('');
//     for (let i=0; i<str.length; i++) {
//         if (i === 0) {
//             strArray[i] = strArray[i].toUpperCase();
//         }
//         else if(strArray[i] === ' ') {
//             strArray[i + 1] = strArray[i + 1].toUpperCase();
//         }
//     }

//     return strArray.join('');
// }

//my solution #2 same as solution #1
function capitalize(str) {
    const strArray = str.split(' ');

    return strArray.map((word) => {
        const wordArr = word.split('')
        wordArr[0] = wordArr[0].toUpperCase();
        return wordArr.join('')
    }).join(' ');
}

function capitalize(str) {

}
module.exports = capitalize;