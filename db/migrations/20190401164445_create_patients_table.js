exports.up = function(knex, Promise) {
  return knex.schema.createTable('patients', (patientsTable) => {
      patientsTable.string('patient_username').primary().unique();
      patientsTable.string('patient_password').notNullable();
      patientsTable.string('first_name').notNullable();
      patientsTable.string('surname').notNullable();
      patientsTable.string('telephone').notNullable();
      patientsTable.string('email').notNullable();
      patientsTable.string('address').notNullable();
      patientsTable.integer('surgery_id').notNullable();
      patientsTable.foreign('surgery_id').references('surgery_id').on('surgeries').onDelete('CASCADE');
      patientsTable.string('emerg_contact').notNullable();
      patientsTable.string('general_med', 2000).defaultsTo('none');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patients');
};