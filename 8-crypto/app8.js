function crypto(password){
    let changePass = password.split('').reverse().join('');
    let encryptedPass = changePass.slice(-2) + changePass.slice(2, -2) + changePass.slice(0, 2);
    return encryptedPass;
}

function check(encryptedPass, originalPass){
    let reverseChangePass = encryptedPass.slice(-2) + encryptedPass.slice(2, -2) + encryptedPass.slice(0,2);
    let decryptedPass = reverseChangePass.split('').reverse().join('');
    return decryptedPass === originalPass;
}

console.log(crypto('hello'));
console.log(check('ehlol', 'hello'));
console.log(check('ehlol', 'helo'));

