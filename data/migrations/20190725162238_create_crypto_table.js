exports.up = function(knex, Promise) {
  return knex.schema.createTable("crypto", tbl => {
    tbl.increments();

    tbl.string("name", 128).notNullable();
    tbl.decimal("price").notNullable();
  });
};

exports.down = function(knex, Promise) {
  // undo the operation in up
  return knex.schema.dropTableIfExists("crypto");
};
