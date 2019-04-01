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

const patient5 = new Patient(
  'fluffy1999',
  '#imGorgeous',
  'john',
  'xe',
  '07881002871',
  'fluffy1@gmail.com',
  '14 coxes ave/MCR/M4 6an',
  2,
  '01739827640',
  'allergic to peanuts'
);

const patient6 = new Patient(
  '123chris',
  '123chris',
  'christopher',
  'applebee',
  '07221986090',
  'chris-applebee241@outlook.com',
  '18 green acre drive/chapeltown/MCR/M9 2PL',
  1,
  '01268930298'
);

const patient7 = new Patient(
  'northcoders',
  'federation',
  'jonny',
  'von flipflop',
  '01754209871',
  'octo-musical@yahoo.co.uk',
  'federation house/federation street/MCR/M1 2CS',
  2,
  '07999210733',
  'stress migraines'
);

const patient8 = new Patient(
  'akira',
  'BOOM!',
  'akira',
  'kutsinagi',
  '07213223198',
  'endoftheworld@gmail.com',
  '12 kingdom walk/walkden/MCR/M10 7WD',
  2,
  '01266930211',
  'minor excema'
);

const patient9 = new Patient(
  'snorlax',
  'pokeball',
  'mr',
  'snorlax',
  '07213221986',
  'ash.ketchup@outlook.com',
  '49 lions arch/divinitys reach/prestwich/M8 2CS',
  2,
  '01268838871',
);

const patient10 = new Patient(
  'KDEVS',
  'PocketGP',
  'rose',
  'von snuffles',
  '07552190789',
  'devsRus@northcoders.co.uk',
  '9 lions arch/divinitys reach/prestwich/M8 2CS',
  2,
  '01268018890',
  'ongoing physio appointments once a month - private'
);

export let patients = [patient1, patient2, patient3, patient4, patient5, patient6, patient7, patient8, patient9, patient10];