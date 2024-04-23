/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_bucket_cap').del()
  await knex('master_bucket_cap').insert([
    {
      "digger": "EX-EX5500",
      "buck_cap_lcm": 29,
      "buckAct_cap_lcm": 27.6,
      "buckAct_cap_bcm": 20.4,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-EX3600",
      "buck_cap_lcm": 22,
      "buckAct_cap_lcm": 20.9,
      "buckAct_cap_bcm": 15.5,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-EX2600",
      "buck_cap_lcm": 15,
      "buckAct_cap_lcm": 14.3,
      "buckAct_cap_bcm": 10.6,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-PC2000",
      "buck_cap_lcm": 12,
      "buckAct_cap_lcm": 11.4,
      "buckAct_cap_bcm": 8.4,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-PC1250",
      "buck_cap_lcm": 7,
      "buckAct_cap_lcm": 6.7,
      "buckAct_cap_bcm": 4.9,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-EX1200",
      "buck_cap_lcm": 7,
      "buckAct_cap_lcm": 6.7,
      "buckAct_cap_bcm": 4.9,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-CAT349D",
      "buck_cap_lcm": 3.1,
      "buckAct_cap_lcm": 2.9,
      "buckAct_cap_bcm": 2.2,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-PC400",
      "buck_cap_lcm": 3.1,
      "buckAct_cap_lcm": 2.9,
      "buckAct_cap_bcm": 2.2,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-PC300",
      "buck_cap_lcm": 2.4,
      "buckAct_cap_lcm": 2.3,
      "buckAct_cap_bcm": 1.7,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "digger": "EX-PC200",
      "buck_cap_lcm": 2,
      "buckAct_cap_lcm": 1.9,
      "buckAct_cap_bcm": 1.4,
      "site": "BCP",
      "creation_by": "TM"
    }
   ]);
};
