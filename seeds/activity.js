exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_activity').del()
  await knex('master_activity').insert([
    {
      "activity_name": "OB Production",
      "delay_description": "READY TIME",
      "code": 100,
      "creation_by": "TM"
    },
    {
      "activity_name": "MUD Production 40%",
      "delay_description": "READY TIME",
      "code": null,
      "creation_by": "TM"
    },
    {
      "activity_name": "MUD Production 60%",
      "delay_description": "READY TIME",
      "code": null,
      "creation_by": "TM"
    },
    {
      "activity_name": "Top Soil Production",
      "delay_description": "READY TIME",
      "code": null,
      "creation_by": "TM"
    },
    {
      "activity_name": "Coal Production",
      "delay_description": "READY TIME",
      "code": null,
      "creation_by": "TM"
    },
    {
      "activity_name": "General Work",
      "delay_description": "READY TIME",
      "code": 132,
      "creation_by": "TM"
    },
    {
      "activity_name": "MUD NP",
      "delay_description": "READY TIME",
      "code": null,
      "creation_by": "TM"
    },
    {
      "activity_name": "OB NP",
      "delay_description": "READY TIME",
      "code": null,
      "creation_by": "TM"
    },
    {
      "activity_name": "Kabut/Fog",
      "delay_description": "STANDBY  TIME",
      "code": 107,
      "creation_by": "TM"
    },
    {
      "activity_name": "Hujan/Rain",
      "delay_description": "STANDBY  TIME",
      "code": 105,
      "creation_by": "TM"
    },
    {
      "activity_name": "Slippery",
      "delay_description": "STANDBY  TIME",
      "code": 106,
      "creation_by": "TM"
    },
    {
      "activity_name": "Tidak Ada Truck (PA)",
      "delay_description": "STANDBY  TIME",
      "code": 138,
      "creation_by": "TM"
    },
    {
      "activity_name": "Lighting Plant Problem",
      "delay_description": "STANDBY  TIME",
      "code": 123,
      "creation_by": "TM"
    },
    {
      "activity_name": "No Operator",
      "delay_description": "STANDBY  TIME",
      "code": 102,
      "creation_by": "TM"
    },
    {
      "activity_name": "Tidak Ada Lokasi Kerja",
      "delay_description": "STANDBY  TIME",
      "code": 135,
      "creation_by": "TM"
    },
    {
      "activity_name": "No Material",
      "delay_description": "STANDBY  TIME",
      "code": null,
      "creation_by": "TM"
    },
    {
      "activity_name": "No Operator",
      "delay_description": "STANDBY  TIME",
      "code": 102,
      "creation_by": "TM"
    },
    {
      "activity_name": "Problem Customer",
      "delay_description": "STANDBY  TIME",
      "code": null,
      "creation_by": "TM"
    },
    {
      "activity_name": "Blokade",
      "delay_description": "STANDBY  TIME",
      "code": 140,
      "creation_by": "TM"
    },
    {
      "activity_name": "Dumpingan Crowded",
      "delay_description": "STANDBY  TIME",
      "code": 122,
      "creation_by": "TM"
    },
    {
      "activity_name": "Pergantian Shift",
      "delay_description": "DELAY TIME",
      "code": 110,
      "creation_by": "TM"
    },
    {
      "activity_name": "Istirahat / Makan",
      "delay_description": "DELAY TIME",
      "code": 109,
      "creation_by": "TM"
    },
    {
      "activity_name": "Safety Talk",
      "delay_description": "DELAY TIME",
      "code": 104,
      "creation_by": "TM"
    },
    {
      "activity_name": "Isi Solar",
      "delay_description": "DELAY TIME",
      "code": 1,
      "creation_by": "TM"
    },
    {
      "activity_name": "Puasa",
      "delay_description": "DELAY TIME",
      "code": 139,
      "creation_by": "TM"
    },
    {
      "activity_name": "Sholat / Ibadah",
      "delay_description": "DELAY TIME",
      "code": 103,
      "creation_by": "TM"
    },
    {
      "activity_name": "Survey",
      "delay_description": "DELAY TIME",
      "code": 141,
      "creation_by": "TM"
    },
    {
      "activity_name": "Travel Blasting",
      "delay_description": "DELAY TIME",
      "code": 151,
      "creation_by": "TM"
    },
    {
      "activity_name": "Sholat Jumat",
      "delay_description": "DELAY TIME",
      "code": 129,
      "creation_by": "TM"
    },
    {
      "activity_name": "Tes Fatique",
      "delay_description": "DELAY TIME",
      "code": 101,
      "creation_by": "TM"
    },
    {
      "activity_name": "Ibadah Minggu",
      "delay_description": "DELAY TIME",
      "code": 150,
      "creation_by": "TM"
    },
    {
      "activity_name": "Washing unit",
      "delay_description": "DELAY TIME",
      "code": 136,
      "creation_by": "TM"
    },
    {
      "activity_name": "Travel Pindah Loading Point",
      "delay_description": "DELAY TIME",
      "code": 136,
      "creation_by": "TM"
    },
    {
      "activity_name": "Cek Ban",
      "delay_description": "DELAY TIME",
      "code": 12,
      "creation_by": "TM"
    },
    {
      "activity_name": "Travel RFU",
      "delay_description": "DELAY TIME",
      "code": 3,
      "creation_by": "TM"
    },
    {
      "activity_name": "Ijin Toilet",
      "delay_description": "DELAY TIME",
      "code": 127,
      "creation_by": "TM"
    },
    {
      "activity_name": "Menunggu Truck",
      "delay_description": "DELAY TIME",
      "code": 5,
      "creation_by": "TM"
    },
    {
      "activity_name": "Service Loading Point",
      "delay_description": "DELAY TIME",
      "code": 128,
      "creation_by": "TM"
    },
    {
      "activity_name": "Service Dumping Point",
      "delay_description": "DELAY TIME",
      "code": 119,
      "creation_by": "TM"
    },
    {
      "activity_name": "Menunggu Excavator",
      "delay_description": "DELAY TIME",
      "code": 124,
      "creation_by": "TM"
    },
    {
      "activity_name": "Blasting",
      "delay_description": "DELAY TIME",
      "code": 131,
      "creation_by": "TM"
    },
    {
      "activity_name": "Debu/Dust",
      "delay_description": "DELAY TIME",
      "code": 121,
      "creation_by": "TM"
    },
    {
      "activity_name": "Tidak Ada Unit Support",
      "delay_description": "DELAY TIME",
      "code": 137,
      "creation_by": "TM"
    },
    {
      "activity_name": "Perbaikan Jalan",
      "delay_description": "DELAY TIME",
      "code": 118,
      "creation_by": "TM"
    },
    {
      "activity_name": "Digger/Truck Amblas",
      "delay_description": "DELAY TIME",
      "code": 156,
      "creation_by": "TM"
    },
    {
      "activity_name": "Perbaikan Dispatch",
      "delay_description": "DELAY TIME",
      "code": 202,
      "creation_by": "TM"
    },
    {
      "activity_name": "Fatigue",
      "delay_description": "DELAY TIME",
      "code": 2,
      "creation_by": "TM"
    },
    {
      "activity_name": "Bersihkan Vessel",
      "delay_description": "DELAY TIME",
      "code": 149,
      "creation_by": "TM"
    },
    {
      "activity_name": "Pergantian Operator",
      "delay_description": "DELAY TIME",
      "code": 201,
      "creation_by": "TM"
    },
    {
      "activity_name": "Pengecekan Trainer / Training",
      "delay_description": "DELAY TIME",
      "code": 4,
      "creation_by": "TM"
    },
    {
      "activity_name": "Menunggu operator",
      "delay_description": "DELAY TIME",
      "code": 102,
      "creation_by": "TM"
    },
    {
      "activity_name": "Cek Safety",
      "delay_description": "DELAY TIME",
      "code": 117,
      "creation_by": "TM"
    },
    {
      "activity_name": "Schedule",
      "delay_description": "BREAKDOWN",
      "code": 133,
      "creation_by": "TM"
    },
    {
      "activity_name": "Breakdown Unsc",
      "delay_description": "BREAKDOWN",
      "code": 134,
      "creation_by": "TM"
    },
    {
      "activity_name": "Accident",
      "delay_description": "BREAKDOWN",
      "code": 130,
      "creation_by": "TM"
    }
   ]);
};
