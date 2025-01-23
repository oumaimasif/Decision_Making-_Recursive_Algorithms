function Palindrome(str) {
    //supprime || replace tous les caracteres qui ne sont pas des lettres ou des chiffres  
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');


    if (str.length <= 1) { return true; }

    if (str.shift() === str.pop()) {
        // console.log(str.shift());
        return Palindrome(str.join(''));
    }
    else { return false; }
}
console.log(Palindrome('Sommo s')); 
