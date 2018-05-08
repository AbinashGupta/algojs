// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My solution
// function anagrams(stringA, stringB) {

//     const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const strB = stringB.replace(/[^\w]/g, "").toLowerCase();

//     const sortedA = strA.split('').sort().join('');
//     const sortedB = strB.split('').sort().join('');

//     return sortedA === sortedB

// }

function anagrams(stringA, stringB) {
    
        const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
        const strB = stringB.replace(/[^\w]/g, "").toLowerCase();
    
        const mapA = strA.split('').reduce((acc, curr) => {
            acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1
            return acc
        }, {})
    
        const mapB = strB.split('').reduce((acc, curr) => {
            acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1
            return acc
        }, {})

        if (Object.keys(mapA).length !== Object.keys(mapB).length) {
            return false
        }

        for (let key in mapA) {
            if (mapA[key] !== mapB[key]) {
                return false
            }
        }

        return true
    
    }

module.exports = anagrams;
