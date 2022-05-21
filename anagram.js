
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Assume we have an array of strings called strings.
// Group the anagrams together, and return the list of anagram groups. You can return the answer in any order.
// Input: strings = [“dog”,”cat”,”god”,”tac”,”act”,”bat"]
// Output: [["bat”],[“dog”,”god”],[“cat”,”tac”,”act”]]
function solve(input) {
    const data = {};
    for(let i = 0; i < input.length; i ++) {
        const sorted = input[i].split('').sort().join('');
        console.log("srr", sorted);
        if(data[sorted] === undefined) {
            data[sorted] = [];
        }
        data[sorted].push(input[i]);
    }
    return Object.values(data);
}
console.log(solve(["dog","cat","god","tac","act","bat"]));

