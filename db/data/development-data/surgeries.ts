class Surgery {
  constructor(
    surgery_name: string,
    surgery_username: string,
    surgery_password: string,
    surgery_address: string,
  ) {

  }
}

const surgery1 = new Surgery(
  'the ranch surgery',
  'ranch_surgery',
  'password123',
  'the Ranch/shed Hill/chortlon/M21 7BB'
);

const surgery2 = new Surgery(
  'lions arch surgery',
  'lionsArch',
  'cats4ever',
  '101 lions arch/divinitys reach/prestwich/M8 2SP'
);

export let surgeries = [surgery1, surgery2];