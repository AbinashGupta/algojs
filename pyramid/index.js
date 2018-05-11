// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//my solution
// function pyramid(n) {
//     const col = 2*n - 1
//     const mid = n - 1;
//     const arr = Array(col).fill(' ');
//     for ( i=0; i < n; i++) {
//         arr.fill('#', (mid - i), (mid + i) + 1) 
//         console.log(arr.join(''));
//     }
// }

//my solution with hint --> same as solution
function pyramid(n, row = 0, level = '') {

    const mid = n - 1;
    if ( row === n ) {
        return
    }

    if ( level.length === (2*n - 1)) {
        console.log(level)
        return pyramid(n, row + 1)
    }
    else if (level.length >= (mid - row) && level.length <= (mid + row)) {
        level += '#'
    }
    else {
        level += ' '
    }

    return pyramid(n, row, level)

}


module.exports = pyramid;
