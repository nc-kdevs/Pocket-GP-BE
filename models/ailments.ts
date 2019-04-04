import * as connection from '../db/connection';

export const fetchAilment = (ailment_id: number) => {
  return connection.select('*').from('ailments').where({ ailment_id });
}

export const updateAilment = (ailment_id: number, { ailment_type, ailment_name, ailment_description, image, prescription, treatment_plan }) => {
  const updateObj: any = {};
  if (ailment_type) updateObj.ailment_type = ailment_type;
  if (ailment_name) updateObj.ailment_name = ailment_name;
  if (ailment_description) updateObj.ailment_description = ailment_description;
  if (image) updateObj.image = image;
  if (prescription) updateObj.prescription = prescription;
  if (treatment_plan) updateObj.treatment_plan = treatment_plan;
  return connection('ailments').where({ ailment_id }).update(updateObj).returning('*');
}