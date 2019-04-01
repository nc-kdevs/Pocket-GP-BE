
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ailments',
  (ailmentsTable) => {
      ailmentsTable.string('patient_username').notNullable();
      ailmentsTable.foreign('patient_username').references('patient_username').on('patients').onDelete('CASCADE');
      ailmentsTable.increments('patient_id');
      ailmentsTable.string('ailment_type').notNullable();
      ailmentsTable.string('ailment_name').notNullable();
      ailmentsTable.string('ailment_description', 255).notNullable();
      ailmentsTable.date('date').defaultsTo(knex.fn.now());
      ailmentsTable.string('image');
      ailmentsTable.string('prescription');
      ailmentsTable.string('treatment_table');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ailments');
};
