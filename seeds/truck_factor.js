/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_truck_factor').del()
  await knex('master_truck_factor').insert([
    {
      "model": "KL2450",
      "tf_ob_ts": 88,
      "tf_coal": 0,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "MT4400",
      "tf_ob_ts": 88,
      "tf_coal": 0,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD1500-7",
      "tf_ob_ts": 59.8,
      "tf_coal": 77.7,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD1500",
      "tf_ob_ts": 59.8,
      "tf_coal": 77.7,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "730E",
      "tf_ob_ts": 76.2,
      "tf_coal": 99.7,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "685E",
      "tf_ob_ts": 70,
      "tf_coal": 0,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "EH1100",
      "tf_ob_ts": 26.5,
      "tf_coal": 30.72,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD785",
      "tf_ob_ts": 37.8,
      "tf_coal": 49.1,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "777A",
      "tf_ob_ts": 35,
      "tf_coal": 45,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "A40F",
      "tf_ob_ts": 16.2,
      "tf_coal": 21,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD465",
      "tf_ob_ts": 22.8,
      "tf_coal": 29.7,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "785C",
      "tf_ob_ts": 38.1,
      "tf_coal": 71,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "775C",
      "tf_ob_ts": 28,
      "tf_coal": 35,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "745",
      "tf_ob_ts": 17,
      "tf_coal": 21,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "BELAZ 75131",
      "tf_ob_ts": 55.9,
      "tf_coal": 72.7,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HM400-01",
      "tf_ob_ts": 15.2,
      "tf_coal": 19.7,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "P360",
      "tf_ob_ts": 10,
      "tf_coal": 13,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "3939K",
      "tf_ob_ts": 10,
      "tf_coal": 13,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "830E",
      "tf_ob_ts": 91.7,
      "tf_coal": 18,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "EH4500",
      "tf_ob_ts": 111.06,
      "tf_coal": 111.06,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD465_JB",
      "tf_ob_ts": 22.8,
      "tf_coal": 40,
      "site": "BCP",
      "creation_by": "TM"
    }
   ]);
};
