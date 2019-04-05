const crypto = require('crypto')

//create random bytes to be used by crypto
//iv stands for initialisation vector
let iv = crypto.randomBytes(16)
let hash = crypto.createHash('md5')
    .update('some data we want to encrypt')
    .digest('hex')

// console.log('this is the IV ->', iv,'this is the hash ->', hash)

//list of hashes and ciphers in crypto
//console.log(crypto.getHashes());
//console.log(crypto.getCiphers());

//example of AES-256-CBC encryption/decryption using crypto
let secretMessage = 'this is a secret message';
//message to encrypt

let key = '12345678123456781234567812345678';
//32-bit encryption key
//maybe we can generate this key on user values that cant change? 
//username, dob etc?

let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
//first argument is the encryption algorithm to use
let encrypted = cipher.update(secretMessage, 'utf-8', 'hex');
//first arg is message, second is the format its passed as, third is the format to encrypt too
encrypted += cipher.final('hex');

// console.log('encrypted: ' + encrypted)

let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
//first argument is the decryption algorithm to use
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
//first arg is encrypted message, second is the format its encrypted into, third is the format to decrypt too
decrypted += decipher.final('utf-8');

// console.log('decrypted: ' + decrypted)



encryptData = (data) => {
  const encKey = '12345678123456781234567812345678';
  let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
    return encrypted + iv
}

console.log('ENCRYPTED---->', encryptData(secretMessage))

decryptData = (encrypted, iv) => {
  const decKey = '12345678123456781234567812345678';
  let decipher = crypto.createDecipheriv('aes-256-cbc', decKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
    return decrypted
}

console.log('DECRYPTED---->', decryptData('74ea58f1ae557228919b940cf6d8906a87d196f8875c8565e5077e973d1473d5'))


