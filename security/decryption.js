const crypto = require('crypto')

let iv = crypto.randomBytes(16)

let decKey = '12345678123456781234567812345678';

// export let decipher = crypto.createDecipheriv('aes-256-cbc', decKey, iv);
// export let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
// decrypted += decipher.final('utf-8');

// decryptData = (data) => {
//   const encKey = '12345678123456781234567812345678';
//   let decipher = crypto.createDecipheriv('aes-256-cbc', decKey, iv);
//   let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
//   decrypted += decipher.final('utf-8');
//     return decrypted
// }

// const decrypt=(encryptedObj) => {
//   const array = Object.entries(encryptedObj);
//   const newArray.map()
//   let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
// }