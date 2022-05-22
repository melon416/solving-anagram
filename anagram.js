
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


// second approach

function checkTwo(str1, str2) {
    if(str1.length !== str2.length) return false;
    const data = {};
    
    for(let i = 0; i < str1.length; i ++) {
        if(data[str1[i]] === undefined) data[str1[i]] = 0;
        if(data[str2[i]] === undefined) data[str2[i]] = 0;
        data[str1[i]] ++;
        data[str2[i]] --;
    }
    
    return Object.values(data).every(t => t === 0);
}

function solve(input) {
    const result = [];
    for(let i = 0; i < input.length; i ++) {
        let exist = false;
        for(let j = 0; j < result.length; j ++) {
            if(checkTwo(result[j][0], input[i])) {
                exist = true;
                result[j].push(input[i]);
                break;
            }
        }
        if(exist === false) {
            result.push([input[i]]);
        }
    }
    return result;
}
console.log(solve(["dog","cat","god","tac","act","bat"]))
