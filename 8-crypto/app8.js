function crypto(password){
    let changePass = password.split('').reverse().join('');
    let encryptedPass = changePass.slice(-2) + changePass.slice(2, -2) + changePass.slice(0, 2);
    return encryptedPass;
}

function check (encryptedPass, originalPass){
    if(!encryptedPass || !originalPass){
        return false;
    }
    return crypto(encryptedPass) === originalPass;
}

console.log(crypto('password'));
console.log(check('apowssdr', 'password'));
console.log(check('apossdr', 'password'));