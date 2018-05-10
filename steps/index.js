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

// solution #2
function steps(n, row = 0, stairs = '') {

    if ( n === row) {
        return
    }
    
    if (stairs.length === n) {
        console.log(stairs)
        return steps(n, row + 1)
    }

    stairs.length <= row ? stairs += '#' : stairs += ' '

    steps(n, row, stairs)

}
module.exports = steps;
