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
      "tf_mud_60": 52.8,
      "tf_mud_40": 32.5,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "MT4400",
      "tf_ob_ts": 88,
      "tf_coal": 0,
      "tf_mud_60": 52.8,
      "tf_mud_40": 32.5,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD1500-7",
      "tf_ob_ts": 59.8,
      "tf_coal": 77.7,
      "tf_mud_60": 35.8,
      "tf_mud_40": 23.92,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD1500",
      "tf_ob_ts": 59.8,
      "tf_coal": 77.7,
      "tf_mud_60": 35.8,
      "tf_mud_40": 23.92,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "730E",
      "tf_ob_ts": 76.2,
      "tf_coal": 99.7,
      "tf_mud_60": 45.72,
      "tf_mud_40": 30.48,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "685E",
      "tf_ob_ts": 70,
      "tf_coal": 0,
      "tf_mud_60": 42,
      "tf_mud_40": 28,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "EH1100",
      "tf_ob_ts": 26.5,
      "tf_coal": 30.72,
      "tf_mud_60": 15.9,
      "tf_mud_40": 10.6,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD785",
      "tf_ob_ts": 37.8,
      "tf_coal": 49.1,
      "tf_mud_60": 22.68,
      "tf_mud_40": 15.12,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "777A",
      "tf_ob_ts": 35,
      "tf_coal": 45,
      "tf_mud_60": 21,
      "tf_mud_40": 14,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "A40F",
      "tf_ob_ts": 16.2,
      "tf_coal": 21,
      "tf_mud_60": 9.72,
      "tf_mud_40": 6.48,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD465",
      "tf_ob_ts": 22.8,
      "tf_coal": 29.7,
      "tf_mud_60":13.68,
      "tf_mud_40": 9.12,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "785C",
      "tf_ob_ts": 38.1,
      "tf_coal": 71,
      "tf_mud_60": 22.86,
      "tf_mud_40": 15.24,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "775C",
      "tf_ob_ts": 28,
      "tf_coal": 35,
      "tf_mud_60": 16.8,
      "tf_mud_40": 11.2,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "745",
      "tf_ob_ts": 17,
      "tf_coal": 21,
      "tf_mud_60": 10.2,
      "tf_mud_40": 6.8,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "BELAZ 75131",
      "tf_ob_ts": 55.9,
      "tf_coal": 72.7,
      "tf_mud_60": 33.54,
      "tf_mud_40": 22.36,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HM400-01",
      "tf_ob_ts": 15.2,
      "tf_coal": 19.7,
      "tf_mud_60": 9.12,
      "tf_mud_40": 6.08,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "P360",
      "tf_ob_ts": 10,
      "tf_coal": 13,
      "tf_mud_60": 6,
      "tf_mud_40": 4,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "3939K",
      "tf_ob_ts": 10,
      "tf_coal": 13,
      "tf_mud_60": 6,
      "tf_mud_40": 4,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "830E",
      "tf_ob_ts": 91.7,
      "tf_coal": 18,
      "tf_mud_60": 55.02,
      "tf_mud_40": 36.68,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "EH4500",
      "tf_ob_ts": 111.06,
      "tf_coal": 111.06,
      "tf_mud_60": 66.63,
      "tf_mud_40": 44.42,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "HD465_JB",
      "tf_ob_ts": 22.8,
      "tf_coal": 40,
      "tf_mud_60": 13.68,
      "tf_mud_40": 9.12,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "A40DT",
      "tf_ob_ts": 16.2,
      "tf_coal": 21,
      "tf_mud_60": 9.72,
      "tf_mud_40": 6.48,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "773E",
      "tf_ob_ts": 24,
      "tf_coal": 30,
      "tf_mud_60": 14.4,
      "tf_mud_40": 9.6,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "HD785-7",
      "tf_ob_ts": 40,
      "tf_coal": 50,
      "tf_mud_60": 24,
      "tf_mud_40": 16,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "HD7857HB",
      "tf_ob_ts": 40,
      "tf_coal": 50,
      "tf_mud_60": 24,
      "tf_mud_40": 16,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "HD785-JB",
      "tf_ob_ts": 64,
      "tf_coal": 83,
      "tf_mud_60": 38.4,
      "tf_mud_40": 25.6,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "HD465HB",
      "tf_ob_ts": 22.8,
      "tf_coal": 40,
      "tf_mud_60": 13.68,
      "tf_mud_40": 9.12,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "75131",
      "tf_ob_ts": 55.9,
      "tf_coal": 72.7,
      "tf_mud_60": 33.54,
      "tf_mud_40": 22.36,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "FM260-5",
      "tf_ob_ts": 10,
      "tf_coal": 0,
      "tf_mud_60": 6,
      "tf_mud_40": 4,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "CAT745",
      "tf_ob_ts": 17,
      "tf_coal": 21,
      "tf_mud_60": 10.2,
      "tf_mud_40": 6.8,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "777DHB",
      "tf_ob_ts": 40,
      "tf_coal": 45,
      "tf_mud_60": 24,
      "tf_mud_40": 16,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "HD1500-5",
      "tf_ob_ts": 59.8,
      "tf_coal": 77.7,
      "tf_mud_60": 35.88,
      "tf_mud_40": 23.92,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "775F",
      "tf_ob_ts": 28,
      "tf_coal": 35,
      "tf_mud_60": 16.8,
      "tf_mud_40": 11.2,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "T252",
      "tf_ob_ts": 140,
      "tf_coal": 0,
      "tf_mud_60": 84,
      "tf_mud_40": 56,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "P360-01",
      "tf_ob_ts": 140,
      "tf_coal": 0,
      "tf_mud_60": 84,
      "tf_mud_40": 56,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "X60",
      "tf_ob_ts": 0,
      "tf_coal": 51,
      "tf_mud_60": 0,
      "tf_mud_40": 0,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "A40E",
      "tf_ob_ts": 17.3,
      "tf_coal": 0,
      "tf_mud_60": 10.38,
      "tf_mud_40": 6.92,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "P360-1",
      "tf_ob_ts": 12,
      "tf_coal": 0,
      "tf_mud_60": 7.2,
      "tf_mud_40": 4.8,
      "site": "BCP",
      "operator": "TM"
  },
  {
      "model": "FM260",
      "tf_ob_ts": 8,
      "tf_coal": 18,
      "tf_mud_60": 4.8,
      "tf_mud_40": 3.2,
      "site": "BCP",
      "operator": "TM"
  }
   ]);
};
