let String = "";
let Result = ''
let alphabet = "abcdefghijklmnpqrstuvwxyza"

function secretNumber(length, repeat, string) {
    let i = 0;
    if (string.length !== length) {
        return false
    } else {
        while (repeat > 0){
            Result = ''
            String += string.substring(length-1,length)
            String += string.substring(0,length-1)
            while (length > i){
                Result += alphabet.substring(alphabet.indexOf(String.substring(i,i+1))+1, alphabet.indexOf(String.substring(i,i+1)) + 2)
                i++
            }
            String = ''
            string = ''
            string = Result
            i = 0;
            repeat--
        }
    } return Result
}

secretNumber(4, 5, "abcd")
console.log(Result)