// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// my solution #1
// function steps(n) {
//     const arr = Array(n).fill(' ');
//     for (i=0; i<arr.length; i++) {
//         arr[i] = '#';
//         console.log(arr.join(''));
//     }  
// }

//my solution #2
function steps(n, total) {

    const tot = total || n;
    if ( n === 0 ) {
        return
    }

    console.log()

}

module.exports = steps;
