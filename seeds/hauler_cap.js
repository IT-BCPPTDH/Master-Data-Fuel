/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_hauler_cap').del()
  await knex('master_hauler_cap').insert([
    {
      "hauler_type": "DT-730E",
      "vessel_bcm": 74,
      "vessel_ton": 90,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "hauler_type": "DT-HD1500",
      "vessel_bcm": 55,
      "vessel_ton": 80,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "hauler_type": "DT-HD785-7",
      "vessel_bcm": 38,
      "vessel_ton": 45,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "hauler_type": "DT-777A",
      "vessel_bcm": 35,
      "vessel_ton": 45,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "hauler_type": "DT-HD465",
      "vessel_bcm": 24,
      "vessel_ton": 30.7,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "hauler_type": "DT-ADT40",
      "vessel_bcm": 15,
      "vessel_ton": 15,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "hauler_type": "DT-20T",
      "vessel_bcm": 8,
      "vessel_ton": 8,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "hauler_type": "EH1100",
      "vessel_bcm": 24,
      "vessel_ton": 30.7,
      "site": "BCP",
      "creation_by": "TM"
    }
   ]);
};
