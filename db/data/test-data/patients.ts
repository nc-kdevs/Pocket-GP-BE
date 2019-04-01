class Patient {
  constructor(
    patient_username: string,
    patient_password: string,
    first_name: string,
    surname: string,
    telephone: string,
    email: string,
    address: string,
    surgery_id: number,
    emerg_contact: string,
    general_med?: string,
  ) {

  }
}

const patient1 = new Patient(
  'billybob22',
  'cowboy55',
  'billy',
  'bob',
  '07872630981',
  'cowboybilly@gmail.com',
  'the Ranch/shed Hill/chortlon/M21 7BB',
  1,
  '01739827640',
  'penicillan LSD cronic back pain headaches and anxiety'
);

const patient2 = new Patient(
  'spike',
  'password',
  'sarah',
  'applebee',
  '07719820081',
  'spikeyGirlBrackets@outlook.com',
  '18 green acre drive/chapeltown/MCR/M9 2PL',
  1,
  '01268930298',
  'pregnant diabetic'
);

const patient3 = new Patient(
  'snuffles3',
  'password2',
  'chauncey',
  'von snuffles',
  '07987777790',
  'chaunceyvonsnufflesthethird@guildwars.co.uk',
  '9 lions arch/divinitys reach/prestwich/M8 2CS',
  1,
  '01268930298',
  'stress valium migraines'
);

const patient4 = new Patient(
  'captainGrimes',
  'hilltop23',
  'daryl',
  'grimes',
  '07820371134',
  'daryl-grimes@yahoo.co.uk',
  '13 kingdom walk/walkden/MCR/M10 7WD',
  1,
  '01268930200',
  'developing bruising and rash'
);

export let patients = [patient1, patient2, patient3, patient4];