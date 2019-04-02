
exports.up = function(knex, Promise) {
  return knex.schema.createTable('surgeries', (surgeriesTable) => {
      surgeriesTable.increments('surgery_id').primary();
      surgeriesTable.string('surgery_name').notNullable();
      surgeriesTable.string('surgery_username').notNullable();
      surgeriesTable.string('surgery_password').notNullable();
      surgeriesTable.string('surgery_address').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('surgeries');
};
