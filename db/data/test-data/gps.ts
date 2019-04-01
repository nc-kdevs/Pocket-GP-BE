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
)

const gp2 = new GP(
	2,
	1,
	'Madame Pomfrey'
)

const gp3 = new GP(
	3,
	1,
	'Doctor Zoidberg'
)

export let gps = [gp1, gp2, gp3]
