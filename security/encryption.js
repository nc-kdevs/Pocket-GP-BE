const crypto = require('crypto')

let iv = crypto.randomBytes(16)

const encKey = '12345678123456781234567812345678';

// export let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
// export let encrypted = cipher.update(dataToEnc, 'utf-8', 'hex');
// encrypted += cipher.final('hex');

// export const encryptDataObj = (dataObj) => {
//   const {dataObj} = dataToEnc  
//   const encKey = '12345678123456781234567812345678';
//   let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
//   let encrypted = cipher.update(dataToEnc, 'utf-8', 'hex');
//   encrypted += cipher.final('hex');
//     return encrypted
// }

// export const encryptData = (data) => {
//   const encKey = '12345678123456781234567812345678';
//   let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
//   let encrypted = cipher.update(dataToEnc, 'utf-8', 'hex');
//   encrypted += cipher.final('hex');
//     return encrypted
// }

exports.encrypt = (obj) => {
  const array = Object.entries(obj);
  const newArray = array.map(([key, value]) => {
    if (typeof value === 'string') {
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