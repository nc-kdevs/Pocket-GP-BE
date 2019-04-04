import * as connection from '../db/connection';

export const fetchSurgeries = () => {
  return connection.select('*').from('surgeries');
}

export const addSurgery = (newSurgery: object) => {
  return connection.insert(newSurgery).into('surgeries').returning('*')
}

export const fetchSurgeryByID = (surgeryID: number) => {
  return connection.select('*').groupBy('surgeries.surgery_id').from('surgeries').where('surgeries.surgery_id', '=', surgeryID).returning('*')
}

export const editSurgery = (surgeryID: number, surgeryPatch: object) => {
  return connection.select('*').from('surgeries').where('surgeries.surgery_id', '=', surgeryID).update('surgery_address', surgeryPatch).returning('*')
}

exports.patchArticleByID = (articleID, incBy) => connection('articles')
  .where('articles.article_id', '=', articleID)
  .increment('votes', incBy || 0)
  .returning('*');