// count frequency for each character

let string = "my name is tarunkonda";

let freq = {}

for(i in string){
    let char = string[i]
    if(char.trim() == ""){
        continue
    }
    if(freq[char]){
        freq[char]++
    }else{
        freq[char] = 1
    }
}

console.log(freq);


