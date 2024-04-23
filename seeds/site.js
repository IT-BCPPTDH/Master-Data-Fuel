/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_site').del()
  await knex('master_site').insert([
    {
      code:'ST-1',
      name:'BCP',
      creation_by:'TM'
    },
    {
      code:'ST-2',
      name:'ACP',
      creation_by:'TM'
    },
    {
      code:'ST-3',
      name:'KCP',
      creation_by:'TM'
    },
    {
      code:'ST-4',
      name:'WKP',
      creation_by:'TM'
    },
  ]);
};
