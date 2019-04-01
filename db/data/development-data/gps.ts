class GP {
	gp_id: number;
	surgery_id:number;
	gp_name: string;
	constructor(
		gp_id: number,
		surgery_id:number,
		gp_name: string,
	) {
		this.gp_id = gp_id;
		this.surgery_id = surgery_id;
		this.gp_name = gp_name;
	}
}

const gp1 = new GP(
	1,
	1,
	'Doctor Krieger'
);

const gp2 = new GP(
	2,
	1,
	'Madame Pomfrey'
);

const gp3 = new GP(
	3,
	1,
	'Doctor Lovelace'
);

const gp4 = new GP(
	4,
	2,
	'Nurse Nightingale'
);

const gp5 = new GP(
	5,
	2,
	'Doctor Harada'
);

const gp6 = new GP(
	6,
	2,
	'Doctor Zoidberg'
);

export let gps = [gp1, gp2, gp3, gp4, gp5, gp6]
