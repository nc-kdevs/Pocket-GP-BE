class Ailment {
  constructor(
    patient_username: string,
    ailment_id: number,
    ailment_type: string,
    ailment_name: string,
    ailment_description: string,
    date: string,
    image?: string,
    prescription?: string,
    treatment_plan?: string,
  ) {

  }
}

const ailment1 = new Ailment(
  'billybob22',
  1,
  'anxiety',
  'mental illness',
  'exam pressure, thinks everyone is out to get him',
  '2018-02-1116:72:98ZT',
  '',
  'propodamal',
  'one pill in the morning'
);

const ailment2 = new Ailment(
  'billybob22',
  2,
  'backpain',
  'cronic',
  'damaged nerve when doing roller hockey',
  '2018-02-1116:72:98ZT',
  'URL',
  'ibrufen',
  'when ever it hurts'
);

const ailment3 = new Ailment(
  'billybob22',
  3,
  'anxiety',
  'mental illness',
  'reacurring depression related to anxiety',
  '2018-02-1116:72:98ZT',
  '',
  'LSD',
  'before she goes to sleep'
);

const ailment4 = new Ailment(
  'spike',
  4,
  'diabetic',
  'diabeties',
  'type 1',
  '2018-02-1116:02:08ZT',
  '',
  'insulin',
  'injection 3 times a day'
);

const ailment5 = new Ailment(
  'snuffles3',
  5,
  'stress',
  'mental illness',
  'its stressful being the fanciest cat so can lose his hair, hence the hat',
  '2019-03-2112:20:95ZT',
  'URL',
  'valium',
  'strictly regulated, only when necessary'
);

const ailment6 = new Ailment(
  'captainGrimes',
  6,
  'rash',
  'not diagnosed',
  'appreaed after he was bitten on a night out',
  '2018-12-0116:15:38ZT',
  'URL',
);

const ailment7 = new Ailment(
  'captainGrimes',
  7,
  'bruising',
  'not diagnosed',
  'he has started to bruise very easily and they stay a long time',
  '2018-12-2116:12:98ZT',
  'URL',
);

export let ailments = [ailment1, ailment2, ailment3, ailment4, ailment5, ailment6, ailment7];