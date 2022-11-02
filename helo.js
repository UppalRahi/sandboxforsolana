function stringPallindrome(string){
    const length = string.length
    for(let i = 0; i < length/2 ; i++){
        if(string[i] !== string[length-i-1])
        return false
    }

return true
}

console.log(stringPallindrome(process.argv[2]));
