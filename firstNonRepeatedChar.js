
let string = "aabbccdeeffg"

function firstNonRepeatedChar() {

    for (ch of string) {
        console.log(string.indexOf(ch),string.lastIndexOf(ch));
        
        if (string.indexOf(ch) === string.lastIndexOf(ch)) {
            return ch
        }
    }
    return null
}

console.log(firstNonRepeatedChar());
