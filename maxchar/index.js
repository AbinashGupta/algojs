// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = str.split('').reduce((acc, curr)=> {
        acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1
        return acc
    }, {})

    let sortable = [];
    for (let char in charMap) {
        sortable.push([char, charMap[char]]);
    }

    sortable.sort((a,b)=> b[1] - a[1])

    return sortable[0][0]
}

module.exports = maxChar;

