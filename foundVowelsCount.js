const str = "Earth is the happiest place"

const vowels = [ "a" , "e", "i", "o", "u"]

function countVowels(){
    let count = 0
     for(ch of str){
        if(vowels.includes(ch)){
            count++
        }
     }

     return count
}
console.log(countVowels());
