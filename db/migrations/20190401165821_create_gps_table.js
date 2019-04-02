
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gps', (gpsTable) => {
      gpsTable.increments('gp_id');
      gpsTable.integer('surgery_id').notNullable();
      gpsTable.foreign('surgery_id').references('surgery_id').on('surgeries').onDelete('CASCADE');
      gpsTable.string('gp_name').notNullable();
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gps');
};
