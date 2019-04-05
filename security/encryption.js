const crypto = require('crypto')

let iv = crypto.randomBytes(16)

const encKey = '12345678123456781234567812345678';

export let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
export let encrypted = cipher.update(dataToEnc, 'utf-8', 'hex');
encrypted += cipher.final('hex');

export const encryptDataObj = (dataObj) => {
  const {dataObj} = dataToEnc  
  const encKey = '12345678123456781234567812345678';
  let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
  let encrypted = cipher.update(dataToEnc, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
    return encrypted
}

export const encryptData = (data) => {
  const encKey = '12345678123456781234567812345678';
  let cipher = crypto.createCipheriv('aes-256-cbc', encKey, iv);
  let encrypted = cipher.update(dataToEnc, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
    return encrypted
}