const crypto = require('crypto')

const iv = Buffer.alloc(16, 0);

const encKey = '12345678123456781234567812345678';

const encrypt = (obj) => {
  const array = Object.entries(obj);
  const newArray = array.map(([key, value]) => {
    if (typeof value === 'string' && value) {
      let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
      let encrypted = cipher.update(value, 'utf-8', 'hex');
      encrypted += cipher.final('hex');
      return [key, encrypted]
    }
    else return [key, value];
  })
  const encryptedObj = {};
  newArray.forEach(pair => {
    encryptedObj[pair[0]] = pair[1];
  })
  return encryptedObj;
}

const decrypt = (encryptedObj) => {
  const array = Object.entries(encryptedObj);
  const newArray = array.map(([key, value]) => {
    if (typeof value === 'string' && value) {
      let decipher = crypto.createDecipheriv('aes-256-cbc', encKey, iv);
      let decrypted = decipher.update(value, 'hex', 'utf-8');
      decrypted += decipher.final('utf-8');
      return [key, decrypted];
    }
    else return [key, value];
  })
  const decryptedObj = {};
  newArray.forEach(([key, value]) => {
    decryptedObj[key] = value;
  })
  return decryptedObj;
}
// const obj = { a: 'test msg', b: 2019, c: 'another message super secret' };
// const enc = encrypt(obj);
// console.log(enc, '<-- encrypted');
// const dec = decrypt(enc)
// console.log(dec, '<-- decrypted')

module.exports = { encrypt, decrypt }
