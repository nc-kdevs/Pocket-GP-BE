
exports.up = function (knex, Promise) {
  return knex.schema.createTable('ailments',
    (ailmentsTable) => {
      ailmentsTable.increments('ailment_id');
      ailmentsTable.string('patient_username').notNullable();
      ailmentsTable.foreign('patient_username').references('patient_username').on('patients').onDelete('CASCADE');
      ailmentsTable.string('ailment_type').notNullable();
      ailmentsTable.string('ailment_name').notNullable();
      ailmentsTable.string('ailment_description', 255).notNullable();
      ailmentsTable.timestamp('date', { useTz: true }).defaultsTo(knex.fn.now());
      ailmentsTable.string('image', 500);
      ailmentsTable.string('prescription', 500);
      ailmentsTable.string('treatment_plan', 500);
    })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ailments');
};
