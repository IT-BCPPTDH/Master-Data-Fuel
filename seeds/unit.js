/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_unit').del()
  await knex('master_unit').insert([
    {
      "unit_no": "EX7007",
      "type": "EX5500",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX6008",
      "type": "EX3600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX6009",
      "type": "EX3600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX6010",
      "type": "EX3600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX5034",
      "type": "R9350",
      "brand": "Liebherr",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX5035",
      "type": "R9350",
      "brand": "Liebherr",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX5033",
      "type": "EX2600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX4024",
      "type": "PC2000",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX4025",
      "type": "PC2000",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX3075",
      "type": "PC1250",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX3076",
      "type": "PC1250",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX3001",
      "type": "R9100",
      "brand": "Liebherr",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX3002",
      "type": "R9100",
      "brand": "Liebherr",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX2050",
      "type": "SY750H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1338",
      "type": "SY500H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1341",
      "type": "SY500H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1421",
      "type": "SY500H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1435",
      "type": "SY365H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1436",
      "type": "SY365H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1315",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1316",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1317",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1318",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1319",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1320",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1136",
      "type": "ZX210",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1230",
      "type": "PC400",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1243",
      "type": "SH480",
      "brand": "Sumitomo",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX1245",
      "type": "SH480",
      "brand": "Sumitomo",
      "category": "Excavator",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4017",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4018",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4019",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4020",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4021",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4022",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4023",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4025",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4026",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4027",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4031",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4034",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4035",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4036",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4037",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4038",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4039",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4041",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4042",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4043",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4044",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4045",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT4046",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3154",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3155",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3162",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3168",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3239",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3240",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3241",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3243",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3244",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3245",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3246",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3248",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3249",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3250",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3251",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3252",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3253",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3254",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3255",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3256",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3257",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3258",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3259",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3260",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3261",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3262",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3263",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3264",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3265",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3266",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3267",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3268",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3269",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3270",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3271",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3272",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3273",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2439",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2440",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2442",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2443",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2444",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2445",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2336",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2348",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2349",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2350",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2353",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2354",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2382",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2411",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2413",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2414",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2446",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2447",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2448",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2449",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2451",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2452",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2453",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2454",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2456",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2457",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2459",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT2460",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3211",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3217",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3218",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3221",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3222",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT3223",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1320",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1321",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1322",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1325",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1326",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1464",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1465",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1466",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1469",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1309",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1310",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1311",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1313",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1317",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1334",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1335",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1226",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1178",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DT1170",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1074",
      "type": "D65",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1115",
      "type": "D155",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1163",
      "type": "D155",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1186",
      "type": "D155",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1194",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1195",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1197",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1207",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1208",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD1209",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD3114",
      "type": "D375",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD3116",
      "type": "D375",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "TD3130",
      "type": "D375",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR3039",
      "type": "14M",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR3048",
      "type": "14M",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR3049",
      "type": "14M",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR3080",
      "type": "STG230C",
      "brand": "Sany",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR4069",
      "type": "GD825",
      "brand": "Komatsu",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR4071",
      "type": "GD825",
      "brand": "Komatsu",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR4081",
      "type": "GD825",
      "brand": "Komatsu",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR4086",
      "type": "18M",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "GR5022",
      "type": "24H",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "WT2069",
      "type": "HD785 WT",
      "brand": "Komatsu",
      "category": "Water Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "WT3025",
      "type": "777D WT",
      "brand": "Caterpillar",
      "category": "Water Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "WT3026",
      "type": "777A WT",
      "brand": "Caterpillar",
      "category": "Water Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "WT3027",
      "type": "HD785 WT",
      "brand": "Komatsu",
      "category": "Water Truck",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DR2007",
      "type": "D245",
      "brand": "Drilltech",
      "category": "Drill",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DR3008",
      "type": "D55SP",
      "brand": "Drilltech",
      "category": "Drill",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "DR3016",
      "type": "D50KS",
      "brand": "Drilltech",
      "category": "Drill",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3109",
      "type": "28MSS",
      "brand": "Multiflow",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3115",
      "type": "MF385",
      "brand": "Multiflow",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3217",
      "type": "MF420",
      "brand": "Multiflow",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3218",
      "type": "MF420",
      "brand": "Multiflow",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3305",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3306",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3307",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3308",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "PU3309",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1231",
      "type": "320",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1242",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1250",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1252",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1255",
      "type": "PC300",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1265",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1283",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1284",
      "type": "PC300",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1398",
      "type": "PC300",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1420",
      "type": "PC300",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1017",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1018",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1019",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1020",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1492",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1493",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1494",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1636",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1637",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1638",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1639",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1647",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1648",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1649",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1650",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1924",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1925",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1926",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1927",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1928",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1961",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1962",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDT1963",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1085",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1160",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1167",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1171",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1206",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HGR2022",
      "type": "120NG",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HCM1045",
      "type": "BW211D",
      "brand": "Bomag",
      "category": "Compactor",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HWC1033",
      "type": "CWM330",
      "brand": "Nissan",
      "category": "Water Truck",
      "owner": "BEJM",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDR4019",
      "type": "MD6290",
      "brand": "CATERPILLAR",
      "category": "Drill",
      "owner": "NRK",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDR4020",
      "type": "SKF07",
      "brand": "TEREX",
      "category": "Drill",
      "owner": "NRK",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HDR2023",
      "type": "D245",
      "brand": "SANDVIK",
      "category": "Drill",
      "owner": "NRK",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HCM1047",
      "type": "BW211D",
      "brand": "Bomag",
      "category": "Compact",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1251",
      "type": "330",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1271",
      "type": "320",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1277",
      "type": "330",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1228",
      "type": "320",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1392",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1168",
      "type": "D7G",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1174",
      "type": "D6R",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1178",
      "type": "D6R",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HTD1126",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1482",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "OKE",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1261",
      "type": "320",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "PK",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HEX1424",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "PK",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3347",
      "type": "J750",
      "brand": "Boudouin",
      "category": "Water Pump",
      "owner": "JMI",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3267",
      "type": "J750",
      "brand": "Boudouin",
      "category": "Water Pump",
      "owner": "JMI",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3272",
      "type": "J600SP",
      "brand": "JRM",
      "category": "Water Pump",
      "owner": "JMI",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3273",
      "type": "MLT385",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "JMI",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3242",
      "type": "MLT420",
      "brand": "Caterpillar",
      "category": "Water Pump",
      "owner": "PMP",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3343",
      "type": "HH200",
      "brand": "Metso ",
      "category": "Water Pump",
      "owner": "PMP",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3344",
      "type": "HH200",
      "brand": "Metso ",
      "category": "Water Pump",
      "owner": "PMP",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3345",
      "type": "HH200",
      "brand": "Metso ",
      "category": "Water Pump",
      "owner": "PMP",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3346",
      "type": "HH200",
      "brand": "Metso ",
      "category": "Water Pump",
      "owner": "PMP",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3292",
      "type": "MLT420",
      "brand": "Caterpillar",
      "category": "Water Pump",
      "owner": "SIS",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3301",
      "type": "MLT420",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "SIS",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "HPU3302",
      "type": "MLT420",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "SIS",
      "creation_by":"TM",
      "site":"BCP"
    },
    {
      "unit_no": "EX5032",
      "type": "EX2600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "EX4042",
      "type": "PC2000",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT2341",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT2405",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT2403",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1527",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1550",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    { 
      "unit_no": "DT1541",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1535",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1530",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1536",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1529",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1546",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1537",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1547",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1549",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1551",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1531",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1532",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1533",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1534",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1548",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DT1540",
      "type": "P360",
      "brand": "Scania",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "production",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "TD1196",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Dump Truck",
      "owner": "DH",
      "usage": "support",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "HPU3358",
      "type": "HH200",
      "brand": "Metso",
      "category": "Water Pump",
      "owner": "PMP",
      "usage": "support",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "HPU3357",
      "type": "HH200",
      "brand": "Metso",
      "category": "Water Pump",
      "owner": "PMP",
      "usage": "support",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "HPU3365",
      "type": "MF420",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "PMP",
      "usage": "support",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "HPU3372",
      "type": "MF420",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "CHI",
      "usage": "support",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "HPU3301",
      "type": "MF385GSS",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "SIS",
      "usage": "support",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "DR2028",
      "type": "IDM30",
      "brand": "Drilltech",
      "category": "Drill",
      "owner": "DH",
      "usage": "support",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "unit_no": "CN1095",
      "type": "TRX2319",
      "brand": "CRANE FRANA EXCORTS",
      "category": "CRANE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1135",
      "type": "ZX450",
      "brand": "HITACHI EXCAVATOR BACKHOE",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1136",
      "type": "ZX210",
      "brand": "HITACHI EXCAVATOR BACKHOE",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1162",
      "type": "ZX450",
      "brand": "HITACHI EXCAVATOR BACKHOE",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1230",
      "type": "PC400LC",
      "brand": "KOMATSU EXCAVATOR BACKHOE",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1243",
      "type": "SH480",
      "brand": "SUMITOMO EXCAVATOR BACKHOE",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1244",
      "type": "SH480",
      "brand": "SUMITOMO EXCAVATOR BACKHOE",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1245",
      "type": "SH480",
      "brand": "SUMITOMO EXCAVATOR BACKHOE",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1338",
      "type": "SY500",
      "brand": "EXCAVATOR SANY",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1341",
      "type": "SY500",
      "brand": "EXCAVATOR SANY",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR3030",
      "type": "GD705A",
      "brand": "KOMATSU GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR3039",
      "type": "14M",
      "brand": "CATERPILLAR GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR3048",
      "type": "14M3",
      "brand": "GRADER CATERPILLAR",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR3049",
      "type": "14M3",
      "brand": "GRADER CATERPILLAR",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR4067",
      "type": "GD825A",
      "brand": "KOMATSU GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR4069",
      "type": "GD825A",
      "brand": "KOMATSU GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR4071",
      "type": "GD825A",
      "brand": "KOMATSU GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR4081",
      "type": "GD825A",
      "brand": "KOMATSU GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR4086",
      "type": "18M3",
      "brand": "CATERPILLAR GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR5001",
      "type": "24M",
      "brand": "CATERPILLAR GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR5002",
      "type": "24M",
      "brand": "CATERPILLAR GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR5003",
      "type": "24M",
      "brand": "CATERPILLAR GRADER",
      "category": "GRADER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR4089",
      "type": "16M",
      "brand": "GRADER CATERPILLAR",
      "category": "GRADER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR4090",
      "type": "16M",
      "brand": "GRADER CATERPILLAR",
      "category": "GRADER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR5019",
      "type": "24H",
      "brand": "GRADER CATERPILLAR",
      "category": "GRADER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR5020",
      "type": "24H",
      "brand": "GRADER CATERPILLAR",
      "category": "GRADER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD3133",
      "type": "D10T",
      "brand": "DOZER CATERPILLAR",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD4027",
      "type": "D11R",
      "brand": "DOZER CATERPILLAR",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD4028",
      "type": "D11R",
      "brand": "DOZER CATERPILLAR",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1074",
      "type": "D65P-12",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1098",
      "type": "D155A-6",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1101",
      "type": "D155A-6",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1115",
      "type": "D155A-6",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1134",
      "type": "D155A-6",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1163",
      "type": "D155A-6",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1186",
      "type": "D155A-6",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1194",
      "type": "D8T",
      "brand": "DOZER CATERPILLAR",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1195",
      "type": "D8T",
      "brand": "DOZER CATERPILLAR",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1207",
      "type": "D8T",
      "brand": "DOZER CATERPILLAR",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1208",
      "type": "D8T",
      "brand": "DOZER CATERPILLAR",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1209",
      "type": "D8T",
      "brand": "DOZER CATERPILLAR",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD3108",
      "type": "D375A-5",
      "brand": "DOZER KOMATSU",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD3112",
      "type": "D375A-5",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD3113",
      "type": "D375A-5",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD3114",
      "type": "D375A-5",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD3115",
      "type": "D375A-5",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD3116",
      "type": "D375A-5",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD3130",
      "type": "D375A-6",
      "brand": "KOMATSU TRACK DOZER",
      "category": "TRACK DOZER",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TH1002",
      "type": "MHT860",
      "brand": "CATERPILLAR TYRE HANDLER",
      "category": "TYRE HANDLER",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WL1027",
      "type": "IT62G",
      "brand": "CATERPILLAR BACKHOE LOADER",
      "category": "BACKHOE LOADER",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WL1028",
      "type": "IT62G",
      "brand": "CATERPILLAR BACKHOE LOADER",
      "category": "BACKHOE LOADER",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WL4016",
      "type": "980G",
      "brand": "CATERPILLAR BACKHOE LOADER",
      "category": "BACKHOE LOADER",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WL5037",
      "type": "988B",
      "brand": "CATERPILLAR BACKHOE LOADER",
      "category": "BACKHOE LOADER",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1147",
      "type": "10KVA",
      "brand": "PERKINS GENSET",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3152",
      "type": "HD1500-5",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3154",
      "type": "HD1500-5",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3155",
      "type": "HD1500-5",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3156",
      "type": "HD1500-5",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3159",
      "type": "HD1500-5",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3160",
      "type": "HD1500-5",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3162",
      "type": "HD1500-5",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3168",
      "type": "HD1500-5",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3239",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3240",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3241",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3242",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3243",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3244",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3245",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3246",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3247",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3248",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3249",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3250",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3251",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3252",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3253",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3254",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3255",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3256",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3257",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3258",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3259",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3260",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3261",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3262",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3263",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3264",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3265",
      "type": "HD1500-7",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3266",
      "type": "75131",
      "brand": "BELAZ DUMPTRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3267",
      "type": "75131",
      "brand": "BELAZ DUMPTRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3268",
      "type": "75131",
      "brand": "BELAZ DUMPTRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3269",
      "type": "75131",
      "brand": "BELAZ DUMPTRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3270",
      "type": "75131",
      "brand": "BELAZ DUMPTRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3271",
      "type": "75131",
      "brand": "BELAZ DUMPTRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3272",
      "type": "75131",
      "brand": "BELAZ DUMPTRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3273",
      "type": "75131",
      "brand": "BELAZ DUMPTRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4017",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4018",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4019",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4020",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4021",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4022",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4023",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4025",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4026",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4027",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4031",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4034",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4035",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4036",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4037",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4038",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4039",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4041",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4042",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4043",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4044",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4045",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT4046",
      "type": "730E",
      "brand": "KOMATSU DUMP TRUCK",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5028",
      "type": "EH4800",
      "brand": "DUMP TRUCK HITACHI",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5029",
      "type": "EH4800",
      "brand": "DUMP TRUCK HITACHI",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5030",
      "type": "EH4800",
      "brand": "DUMP TRUCK HITACHI",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5031",
      "type": "EH4800",
      "brand": "DUMP TRUCK HITACHI",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5032",
      "type": "EH4800",
      "brand": "DUMP TRUCK HITACHI",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5033",
      "type": "EH4800",
      "brand": "DUMP TRUCK HITACHI",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5034",
      "type": "EH4800",
      "brand": "DUMP TRUCK HITACHI",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5035",
      "type": "EH4800",
      "brand": "DUMP TRUCK HITACHI",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5037",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5039",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5047",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5050",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DR2007",
      "type": "D245KS",
      "brand": "DRILLTECH DRILLING",
      "category": "DRILLING",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DR2010",
      "type": "D245KS",
      "brand": "DRILLTECH DRILLING",
      "category": "DRILLING",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DR3008",
      "type": "D55SP",
      "brand": "DRILLTECH DRILLING",
      "category": "DRILLING",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DR3009",
      "type": "D55SP",
      "brand": "DRILLTECH DRILLING",
      "category": "DRILLING",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DR3016",
      "type": "D50KS",
      "brand": "DRILLTECH DRILLING",
      "category": "DRILLING",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1315",
      "type": "SY215",
      "brand": "EXCAVATOR SANY",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1316",
      "type": "SY215",
      "brand": "EXCAVATOR SANY",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1317",
      "type": "SY215",
      "brand": "EXCAVATOR SANY",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1318",
      "type": "SY215",
      "brand": "EXCAVATOR SANY",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1319",
      "type": "SY215",
      "brand": "EXCAVATOR SANY",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1320",
      "type": "SY215",
      "brand": "EXCAVATOR SANY",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX3001",
      "type": "R9100",
      "brand": "LIEBHERR EXCAVATOR BACKHOE R9100",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX3002",
      "type": "R9100",
      "brand": "LIEBHERR EXCAVATOR BACKHOE R9100",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX3066",
      "type": "PC1250-8",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC1250-8",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX3069",
      "type": "EX1200-6",
      "brand": "HITACHI EXCAVATOR BACKHOE EX1200-6",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX3070",
      "type": "EX1200-6",
      "brand": "HITACHI EXCAVATOR BACKHOE EX1200-6",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX3074",
      "type": "EX1200-6",
      "brand": "HITACHI EXCAVATOR BACKHOE EX1200-6",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX3075",
      "type": "PC1250-8",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC1250-8",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX3076",
      "type": "PC1250-8",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC1250-8",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX4024",
      "type": "PC1250-8",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC2000-8",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX4025",
      "type": "PC1250-8",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC2000-8",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX5033",
      "type": "EX2600-6",
      "brand": "HITACHI EXCAVATOR BACKHOE EX2600-6",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX5034",
      "type": "R9350",
      "brand": "LIEBHERR EXCAVATOR BACKHOE R9350",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX5035",
      "type": "R9350",
      "brand": "LIEBHERR EXCAVATOR BACKHOE R9350",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX6007",
      "type": "EX3600",
      "brand": "HITACHI EXCAVATOR BACKHOE EX3600",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX6008",
      "type": "EX3600",
      "brand": "HITACHI EXCAVATOR BACKHOE EX3600",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX6009",
      "type": "EX3600",
      "brand": "HITACHI EXCAVATOR BACKHOE EX3600",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX6010",
      "type": "EX3600",
      "brand": "HITACHI EXCAVATOR BACKHOE EX3600",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX7006",
      "type": "EX5500",
      "brand": "HITACHI EXCAVATOR SHOVEL EX5500",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX7007",
      "type": "EX5500",
      "brand": "HITACHI EXCAVATOR SHOVEL EX5500",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CN1082",
      "type": "STC550",
      "brand": "CRANE SANY STC550",
      "category": "CRANE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CO1207",
      "type": "",
      "brand": "PLM CONTAINER LUBE STATION",
      "category": "CONTAINER",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1071",
      "type": "190CFM",
      "brand": "ATLAS COPCO AIR COMPRESSOR 190CFM",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1072",
      "type": "190CFM",
      "brand": "ATLAS COPCO AIR COMPRESSOR 190CFM",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1073",
      "type": "190CFM",
      "brand": "ATLAS COPCO AIR COMPRESSOR 190CFM",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1076",
      "type": "392CFM",
      "brand": "ATLAS COPCO AIR COMPRESSOR 392CFM",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1087",
      "type": "773L",
      "brand": "AIRMAN AIR COMPRESSOR 773L",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1088",
      "type": "XAS186",
      "brand": "ATLAS COPCO AIR COMPRESSOR XAS186",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1089",
      "type": "XAS186",
      "brand": "ATLAS COPCO AIR COMPRESSOR XAS186",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1090",
      "type": "XAS186",
      "brand": "ATLAS COPCO AIR COMPRESSOR XAS186",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1091",
      "type": "XAS97",
      "brand": "ATLAS COPCO AIR COMPRESSOR XAS97",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1093",
      "type": "XAS97",
      "brand": "ATLAS COPCO AIR COMPRESSOR XAS97",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1104",
      "type": "XAS97",
      "brand": "ATLAS COPCO AIR COMPRESSOR XAS97",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1108",
      "type": "XAS97",
      "brand": "ATLAS COPCO AIR COMPRESSOR XAS97",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1110",
      "type": "GA30",
      "brand": "ATLAS COPCO AIR COMPRESSOR GA30",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1111",
      "type": "GA30",
      "brand": "ATLAS COPCO AIR COMPRESSOR GA30",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1116",
      "type": "PDS390S",
      "brand": "AIRMAN AIR COMPRESSOR PDS390S",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1119",
      "type": "PDS390S",
      "brand": "AIRMAN AIR COMPRESSOR PDS390S",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1130",
      "type": "ST1147",
      "brand": "AIR COMPRESSOR JIAXING ST1147",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1131",
      "type": "ST1148",
      "brand": "AIR COMPRESSOR JIAXING ST1148",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CT3023",
      "type": "ADT380T38",
      "brand": "IVECO CRANE TRUCK ADT380T38",
      "category": "CRANE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CT3040",
      "type": "MP380E42W",
      "brand": "IVECO CRANE TRUCK MP380E42W (6x6)",
      "category": "CRANE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1309",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1310",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1311",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1313",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1317",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1334",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1335",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FL1020",
      "type": "PFD30",
      "brand": "KOMATSU FORKLIFT PFD30",
      "category": "FORKLIFT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FL1024",
      "type": "MHT860",
      "brand": "MANITOU FORKLIFT",
      "category": "FORKLIFT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FL1030",
      "type": "",
      "brand": "FORKLIFT DEICI HERCULES 6 Ton",
      "category": "FORKLIFT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1070",
      "type": "MP380E42W",
      "brand": "IVECO FUEL TRUCK  (6x6)",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1091",
      "type": "FM66RB",
      "brand": "VOLVO FUEL TRUCK FM66RB",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1101",
      "type": "FM370",
      "brand": "VOLVO FUEL TRUCK FM370",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1102",
      "type": "FM370",
      "brand": "VOLVO FUEL TRUCK FM370",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1108",
      "type": "FM370",
      "brand": "VOLVO SERVICE TRUCK FM370",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1114",
      "type": "FM370",
      "brand": "VOLVO SERVICE TRUCK FM370",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1116",
      "type": "FM480",
      "brand": "VOLVO FUEL TRUCK FM480",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1146",
      "type": "2528",
      "brand": "FUEL TRUCK MERCY 2528",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1075",
      "type": "550KVA",
      "brand": "CATERPILLAR GENSET 550KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1080",
      "type": "75KVA",
      "brand": "WILSON GENSET 75KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1084",
      "type": "250KVA",
      "brand": "PERKINS GENSET 250KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1088",
      "type": "10KVA",
      "brand": "PERKINS GENSET 10KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1093",
      "type": "10KVA",
      "brand": "PERKINS GENSET 10KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1098",
      "type": "5KVA",
      "brand": "KUBOTA GENSET 5KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1101",
      "type": "30KVA",
      "brand": "MITSUBISHI GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1109",
      "type": "60KVA",
      "brand": "STAMFORD GENSET 60 KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1111",
      "type": "20KVA",
      "brand": "STAMFORD GENSET 20KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1112",
      "type": "10KVA",
      "brand": "STAMFORD GENSET 10KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1116",
      "type": "550KVA",
      "brand": "CUMMINS GENSET 550KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1117",
      "type": "80KVA",
      "brand": "HARTECH GENSET 80KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1132",
      "type": "20KVA",
      "brand": "PERKINS GENSET 20KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1142",
      "type": "10KVA",
      "brand": "PERKINS GENSET 10KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1148",
      "type": "10KVA",
      "brand": "PERKINS GENSET 10KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1156",
      "type": "150KVA",
      "brand": "PERKINS GENSET 150KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1157",
      "type": "500KVA",
      "brand": "PERKINS GENSET 500KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1158",
      "type": "20KVA",
      "brand": "PERKINS GENSET 20KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1160",
      "type": "350KVA",
      "brand": "PERKINS GENSET 350KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1162",
      "type": "30KVA",
      "brand": "PERKINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1163",
      "type": "30KVA",
      "brand": "PERKINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1164",
      "type": "30KVA",
      "brand": "PERKINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1165",
      "type": "30KVA",
      "brand": "PERKINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1167",
      "type": "200KVA",
      "brand": "PERKINS GENSET 200KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1174",
      "type": "550KVA",
      "brand": "YANMAR GENSET 550KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1176",
      "type": "YDG5001SE",
      "brand": "YANMAR GENSET YDG5001SE",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1186",
      "type": "30KVA",
      "brand": "PERKINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1187",
      "type": "30KVA",
      "brand": "PERKINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1188",
      "type": "30KVA",
      "brand": "PERKINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1195",
      "type": "100KVA",
      "brand": "CUMMINS GENSET 100KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1203",
      "type": "30KVA",
      "brand": "CUMMINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1204",
      "type": "30KVA",
      "brand": "CUMMINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1205",
      "type": "30KVA",
      "brand": "CUMMINS GENSET 30KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1227",
      "type": "20KVA",
      "brand": "GENSET DEUTZ 20 KVA",
      "category": "GENSET",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCN1086",
      "type": "10230",
      "brand": "MANITOU MHT-X-10230",
      "category": "CRANE",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP0154",
      "type": "C9",
      "brand": "BOOSTER PUMP CATERPILLAR C9",
      "category": "LIGHTING PLANT",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP0156",
      "type": "C9",
      "brand": "BOOSTER PUMP CATERPILLAR C9",
      "category": "LIGHTING PLANT",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HST1128",
      "type": "FM400",
      "brand": "SERVICE TRUCK VOLVO FM400",
      "category": "SERVICE TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LB1087",
      "type": "BB5000",
      "brand": "CLIMAX LOW BED BB5000",
      "category": "LOWBOY",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LB2019",
      "type": "120T",
      "brand": "VOLVO LOW BED 120T",
      "category": "LOWBOY",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP0139",
      "type": "",
      "brand": "DREEDGING KPC",
      "category": "PUMP",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1259",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1260",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1261",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1262",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1264",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1266",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1279",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1282",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1285",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1286",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1292",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1293",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1294",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1295",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1297",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1300",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1303",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1304",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1305",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1314",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1315",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1351",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1352",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1353",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1354",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1361",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1362",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1387",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1388",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1389",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1390",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1391",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1392",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1393",
      "type": "LS3-6000",
      "brand": "PATRIA LIGHTING PLANT LS3-6000",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1395",
      "type": "M10",
      "brand": "ATLAS COPCO LIGHTING PLANT QLT M10",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1397",
      "type": "M10",
      "brand": "ATLAS COPCO LIGHTING PLANT QLT M10",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1398",
      "type": "M10",
      "brand": "ATLAS COPCO LIGHTING PLANT QLT M10",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1399",
      "type": "M10",
      "brand": "ATLAS COPCO LIGHTING PLANT QLT M10",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1429",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1430",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1431",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1432",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1433",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1434",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1435",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1436",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1437",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1438",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1439",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1440",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1441",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1442",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1443",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1444",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1445",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1447",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1450",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1451",
      "type": "NPL-04",
      "brand": "NOBY LIGHTING PLANT NPL-04",
      "category": "LIGHTING PLANT",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LT3021",
      "type": "NKR71",
      "brand": "ISUZU LIGHT TRUCK NKR71",
      "category": "LIGHT TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LT3022",
      "type": "NKR71",
      "brand": "ISUZU LIGHT TRUCK NKR71",
      "category": "LIGHT TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LT3030",
      "type": "130HD",
      "brand": "HINO LIGHT TRUCK 130HD",
      "category": "LIGHT TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LT3031",
      "type": "130HD",
      "brand": "HINO LIGHT TRUCK 130HD",
      "category": "LIGHT TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2092",
      "type": "",
      "brand": "TOYOTA LIGHT VEHICLE TCARRIER",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2197",
      "type": "RGR",
      "brand": "FORD LIGHT VEHICLE RGR",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2488",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2489",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2490",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2491",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2492",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2493",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2494",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2495",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2496",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2497",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2514",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2517",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2518",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2519",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2522",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2524",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2525",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3115",
      "type": "MLT385",
      "brand": "MULTIFLO PUMP MLT385",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2527",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2529",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2536",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2538",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2539",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2587",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2588",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2589",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2590",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2591",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2620",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2626",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2627",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2628",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2629",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2649",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2650",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2651",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2652",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2653",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2791",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2792",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2793",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2794",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2795",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2796",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2847",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2848",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2860",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2861",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2862",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2863",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2864",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2921",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2922",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2923",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2924",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2925",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2929",
      "type": "HDX",
      "brand": "AMBULANCE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV3534",
      "type": "L200-DC",
      "brand": "MITSUBISHI LIGHT VEHICLE L200-DC",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV3723",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5036",
      "type": "MP240E37",
      "brand": "IVECO LIGHT VEHICLE MP240E37",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5037",
      "type": "MP240E37",
      "brand": "IVECO LIGHT VEHICLE MP240E37",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5039",
      "type": "MP240E37",
      "brand": "IVECO LIGHT VEHICLE MP240E37",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5041",
      "type": "MP240E37",
      "brand": "IVECO LIGHT VEHICLE MP240E37",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5257",
      "type": "NKR55",
      "brand": "MITSUBISHI LIGHT VEHICLE NKR55",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5289",
      "type": "DC260G29H",
      "brand": "IVECO LIGHT VEHICLE DC260G29H",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5290",
      "type": "DC260G29H",
      "brand": "IVECO LIGHT VEHICLE DC260G29H",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5309",
      "type": "MP240E37",
      "brand": "IVECO LIGHT VEHICLE MP240E37",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV5310",
      "type": "MP240E37",
      "brand": "IVECO LIGHT VEHICLE MP240E37",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PM2018",
      "type": "FH16550",
      "brand": "VOLVO PRIME MOVER FH16550",
      "category": "PRIME MOVER",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3075",
      "type": "MLT420",
      "brand": "CATERPILLAR PUMP MLT420",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3109",
      "type": "28MS",
      "brand": "MULTIFLO PUMP 28MS",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3117",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MF420",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3118",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MF420",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3217",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MF420",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3218",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MF420",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3305",
      "type": "150",
      "brand": "WATER PUMP SYKES PUMP MVCP 150 IC",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3306",
      "type": "150",
      "brand": "WATER PUMP SYKES PUMP MVCP 150 IC",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3307",
      "type": "150",
      "brand": "WATER PUMP SYKES PUMP MVCP 150 IC",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3308",
      "type": "150",
      "brand": "WATER PUMP SYKES PUMP MVCP 150 IC",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "PU3309",
      "type": "150",
      "brand": "WATER PUMP SYKES PUMP MVCP 150 IC",
      "category": "PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1080",
      "type": "MP240E38",
      "brand": "IVECO SERVICE TRUCK MP240E38",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1097",
      "type": "FM370",
      "brand": "VOLVO SERVICE TRUCK FM370",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1107",
      "type": "FM370",
      "brand": "VOLVO SERVICE TRUCK FM370",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1109",
      "type": "FM370",
      "brand": "VOLVO SERVICE TRUCK FM370",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1115",
      "type": "FM370",
      "brand": "VOLVO SERVICE TRUCK FM370",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1147",
      "type": "2528",
      "brand": "SERVICE TRUCK MERCY AXOR 2528",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1148",
      "type": "2528",
      "brand": "SERVICE TRUCK MERCY AXOR 2528",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1149",
      "type": "2528C",
      "brand": "SERVICE TRUCK MERCY AXOR 2528C",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1152",
      "type": "2528",
      "brand": "SERVICE TRUCK MERCY AXOR 2528",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TK1046",
      "type": "5000L",
      "brand": "PLM FUEL TANK STATION 5000 L",
      "category": "TANKS",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TK1047",
      "type": "5000L",
      "brand": "PLM FUEL TANK STATION 5000 L",
      "category": "TANKS",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TK1208",
      "type": "5000L",
      "brand": "PLM FUEL TANK STATION 5000 L",
      "category": "TANKS",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM1079",
      "type": "500X",
      "brand": "MILLER WELDING MACHINE 500X",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2079",
      "type": "401DX",
      "brand": "MILLER WELDING MACHINE 401DX",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2085",
      "type": "400SS",
      "brand": "WELDING MACHINE MILLER 400SS",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2086",
      "type": "400SS",
      "brand": "MILLER GOLD STAR WELDING MACHINE 400SS",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2094",
      "type": "600AMP",
      "brand": "MILLER WELDING MACHINE 600AMP",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2095",
      "type": "600AMP",
      "brand": "MILLER WELDING MACHINE 600AMP",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2096",
      "type": "600AMP",
      "brand": "MILLER WELDING MACHINE 600AMP",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2104",
      "type": "AIP212",
      "brand": "MILLER WELDING MACHINE AIP212",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2112",
      "type": "401DX",
      "brand": "MILLER WELDING MACHINE 401DX",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2113",
      "type": "401DX",
      "brand": "MILLER WELDING MACHINE 401DX",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2114",
      "type": "401DX",
      "brand": "MILLER WELDING MACHINE 401DX",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2115",
      "type": "401DX",
      "brand": "MILLER WELDING MACHINE 401DX",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2117",
      "type": "800",
      "brand": "MILLER WELDING MACHINE 800",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2127",
      "type": "CPCB",
      "brand": "WELDING MACHINE SIMPSON CPCB II",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WP1001",
      "type": "16000",
      "brand": "WASHPAD PUMP 16000",
      "category": "WATER PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WP1002",
      "type": "16000",
      "brand": "WASHPAD PUMP 20000",
      "category": "WATER PUMP",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1001",
      "type": "PS125",
      "brand": "MITSUBISHI WATER TRUCK PS125",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1029",
      "type": "ADT380T38",
      "brand": "IVECO WATER TRUCK ADT380T38",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1033",
      "type": "ADT380T38",
      "brand": "IVECO WATER TRUCK ADT380T38",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1043",
      "type": "CWB45AL",
      "brand": "NISSAN WATER TRUCK CWB45AL",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1048",
      "type": "ADT380T38",
      "brand": "IVECO WATER TRUCK ADT380T38",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1083",
      "type": "2528",
      "brand": "WATER TRUCK MERCY 2528",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1085",
      "type": "M2528",
      "brand": "WATER TRUCK MERCY M2528",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT3025",
      "type": "777D",
      "brand": "CATERPILLAR WATER TRUCK 777D",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1320",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1321",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1322",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1325",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1326",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1464",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1465",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1466",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1467",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1469",
      "type": "HM400-2",
      "brand": "KOMATSU DUMP TRUCK HM400-2",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2192",
      "type": "777A",
      "brand": "CATERPILLAR DUMP TRUCK 777A",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2215",
      "type": "777A",
      "brand": "CATERPILLAR DUMP TRUCK 777A",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2225",
      "type": "777A",
      "brand": "CATERPILLAR DUMP TRUCK 777A",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2335",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2336",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2337",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2347",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2348",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2349",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2350",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2351",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2352",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2353",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2354",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2382",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2383",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2384",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2385",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2387",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2411",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2412",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2413",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2414",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2434",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2435",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2436",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2437",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2438",
      "type": "EH1100",
      "brand": "HITACHI DUMP TRUCK EH1100",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2439",
      "type": "HD785-7",
      "brand": "KOMATSU DUMP TRUCK HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2440",
      "type": "HD785-7",
      "brand": "KOMATSU DUMP TRUCK HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2442",
      "type": "HD785-7",
      "brand": "KOMATSU DUMP TRUCK HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2443",
      "type": "HD785-7",
      "brand": "KOMATSU DUMP TRUCK HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2444",
      "type": "HD785-7",
      "brand": "KOMATSU DUMP TRUCK HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2445",
      "type": "HD785-7",
      "brand": "KOMATSU DUMP TRUCK HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2446",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2447",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2448",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2449",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2451",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2452",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2453",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2454",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2455",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2456",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2457",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2458",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2459",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2460",
      "type": "HD465-7",
      "brand": "KOMATSU DUMP TRUCK HD465-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3209",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3210",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3211",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3212",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3213",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3214",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3215",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3216",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3217",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3218",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3220",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3221",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3222",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3223",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3224",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3225",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3226",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT3227",
      "type": "A40F",
      "brand": "VOLVO DUMP TRUCK A40F",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT3021",
      "type": "777A",
      "brand": "CATERPILLAR WATER TRUCK 777A",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT3026",
      "type": "777A",
      "brand": "CATERPILLAR WATER TRUCK 777A",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT3027",
      "type": "HD785-7",
      "brand": "KOMATSU WATER TRUCK HD785-7",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "MAIN EQUIPMENT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1133",
      "type": "2545",
      "brand": "AIR COMPRESSOR INGERSOLL RAND 2545",
      "category": "AIR COMPRESSOR",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CT1090",
      "type": "2528",
      "brand": "CRANE TRUCK MERCY AXOR 2528",
      "category": "CRANE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FT1151",
      "type": "2528RMC",
      "brand": "FUEL TRUCK MERCY AXOR 2528 RMC",
      "category": "FUEL TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1039",
      "type": "5034C",
      "brand": "CATERPILLAR-5034C",
      "category": "COMPACTOR",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1040",
      "type": "5034C",
      "brand": "CATERPILLAR-5034C",
      "category": "COMPACTOR",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1041",
      "type": "5034C",
      "brand": "CATERPILLAR-5034C",
      "category": "COMPACTOR",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1042",
      "type": "5034C",
      "brand": "CATERPILLAR-5034C",
      "category": "COMPACTOR",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1045",
      "type": "BW211",
      "brand": "COMPACTOR BOMAG BW211",
      "category": "COMPACTOR",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1047",
      "type": "CSIIGC",
      "brand": "CATERPILLAR COMPACTOR CSIIGC",
      "category": "COMPACTOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1048",
      "type": "D-40",
      "brand": "COMPACTOR SOIL BOMAG BW211 D-40",
      "category": "COMPACTOR",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM2011",
      "type": "100DB",
      "brand": "INGERSOLL RAND COMPACTOR IR 100DB",
      "category": "COMPACTOR",
      "owner": "TERRA FACTOR INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCN1064",
      "type": "GR500E",
      "brand": "TADANO CRANE GR500E",
      "category": "CRANE",
      "owner": "DWI SELARAS ABADI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCN1081",
      "type": "1300SL",
      "brand": "CRANE KATO KA-1300SL TERRAIN",
      "category": "CRANE",
      "owner": "SARANA PRATAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCN1087",
      "type": "MT1840",
      "brand": "MANITOU MT1840",
      "category": "CRANE",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCN1092",
      "type": "2600",
      "brand": "CRANE KOBELCO CKL 2600",
      "category": "CRANE",
      "owner": "PT. INDO CRANE PRATAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCN1093",
      "type": "ST-3600",
      "brand": "CRANE SUMITOMO ST-3600",
      "category": "CRANE",
      "owner": "PT. TOTAL CRANE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCP1124",
      "type": "GA15P",
      "brand": "COMPRESSOR ATLAS COPCO GA15P",
      "category": "AIR COMPRESSOR",
      "owner": "Mandiangin Batubara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCP1136",
      "type": "PDS185S",
      "brand": "AIR COMPRESSOR AIRMAN PDS185S-6C2",
      "category": "AIR COMPRESSOR",
      "owner": "PT. TEKNIK NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDR2023",
      "type": "D245S",
      "brand": "DRILL SANDVICK D245S",
      "category": "DRILLING",
      "owner": "NARIKI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDR4019",
      "type": "MD6290",
      "brand": "DRILL MACHINE CATERPILLAR MD6290 SKF 10",
      "category": "DRILLING",
      "owner": "NARIKI MINEX SEJATI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1021",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1022",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1023",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1024",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1025",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1026",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1027",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1028",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1029",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1030",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1031",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1032",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1033",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1034",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1035",
      "type": "3939K",
      "brand": "DUMP TRUCK MERCEDES BENZ 3939K",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1036",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1037",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1038",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1039",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1040",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1041",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1042",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1043",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1044",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1045",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1046",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1047",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1048",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1049",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1050",
      "type": "P420",
      "brand": "DUMP TRUCK SCANIA P420",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1051",
      "type": "P420",
      "brand": "DUMP TRUCK SCANIA P420",
      "category": "DUMP TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1068",
      "type": "FH16",
      "brand": "PRIME MOVER VOLVO FH16 6X4",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1492",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1493",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1494",
      "type": "FM260JD",
      "brand": "DUMP TRUCK HINO FM260JD",
      "category": "DUMP TRUCK",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1919",
      "type": "A40E",
      "brand": "VOLVO DUMP TRUCK A40E",
      "category": "DUMP TRUCK",
      "owner": "TERRA FACTOR INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1920",
      "type": "A40E",
      "brand": "VOLVO DUMP TRUCK A40E",
      "category": "DUMP TRUCK",
      "owner": "TERRA FACTOR INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1921",
      "type": "A40E",
      "brand": "VOLVO DUMP TRUCK A40E",
      "category": "DUMP TRUCK",
      "owner": "TERRA FACTOR INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1922",
      "type": "A40E",
      "brand": "VOLVO DUMP TRUCK A40E",
      "category": "DUMP TRUCK",
      "owner": "TERRA FACTOR INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1923",
      "type": "A40E",
      "brand": "VOLVO DUMP TRUCK A40E",
      "category": "DUMP TRUCK",
      "owner": "TERRA FACTOR INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT2049",
      "type": "PC800",
      "brand": "EXCAVATOR KOMATSU PC800",
      "category": "EXCAVATOR",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5036",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5038",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5040",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5041",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5042",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5043",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5044",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5045",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5046",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5048",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5049",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5051",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5052",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5053",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5054",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5055",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5056",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5057",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5058",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5059",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5060",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5061",
      "type": "830E",
      "brand": "DUMP TRUCK KOKMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5062",
      "type": "830E",
      "brand": "DUMP TRUCK KOMATSU 830E",
      "category": "DUMP TRUCK",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1228",
      "type": "320D",
      "brand": "CATERPILLAR EXCAVATOR BACKHOE 320D",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1239",
      "type": "ZX350",
      "brand": "HITACHI EXCAVATOR BACKHOE ZX350",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1240",
      "type": "PC300",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC300",
      "category": "EXCAVATOR",
      "owner": "BERKAT ANUGRAH AGUNG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1241",
      "type": "320D",
      "brand": "CATERPILLAR EXCAVATOR BACKHOE 320D",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1242",
      "type": "PC200",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC200",
      "category": "EXCAVATOR",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1246",
      "type": "C15",
      "brand": "CATERPILLAR EXCAVATOR C15 ACERT",
      "category": "EXCAVATOR",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1247",
      "type": "320D",
      "brand": "CATERPILLAR EXCAVATOR BACKHOE 320D",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1248",
      "type": "320D",
      "brand": "CATERPILLAR EXCAVATOR BACKHOE 320D",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1250",
      "type": "PC200",
      "brand": "EXCAVATOR KOMATSU 20 TON PC200",
      "category": "EXCAVATOR",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1251",
      "type": "320D",
      "brand": "CATERPILLAR EXCAVATOR BACKHOE 320D",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1252",
      "type": "PC200",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC200",
      "category": "EXCAVATOR",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1253",
      "type": "320NG",
      "brand": "EXCAVATOR CATERPILLAR 320NG",
      "category": "EXCAVATOR",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1254",
      "type": "390F",
      "brand": "EXCAVATOR CATERPILLAR 390F",
      "category": "EXCAVATOR",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1261",
      "type": "320D-2",
      "brand": "EXCAVATOR CATERPILLAR 320D-2",
      "category": "EXCAVATOR",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1262",
      "type": "ZX200",
      "brand": "HITACHI EXCAVATOR BACKHOE ZX200",
      "category": "EXCAVATOR",
      "owner": "SAMUDERA BIRU NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1265",
      "type": "PC200",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC200",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1266",
      "type": "ZX200",
      "brand": "HITACHI EXCAVATOR BACKHOE ZX200",
      "category": "EXCAVATOR",
      "owner": "SAMUDERA BIRU NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1271",
      "type": "320D",
      "brand": "EXCAVATOR BACKHOE CATERPILLAR 320D",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1273",
      "type": "320D2L",
      "brand": "EXCAVATOR CATERPILLAR 320D2L",
      "category": "EXCAVATOR",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1277",
      "type": "330",
      "brand": "EXCAVATOR CATERPILLAR 330 GC",
      "category": "EXCAVATOR",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1280",
      "type": "ZX200-5G",
      "brand": "EXCAVATOR HITACHI ZX200-5G",
      "category": "EXCAVATOR",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1287",
      "type": "ZX210",
      "brand": "HTACHI EXCAVATOR ZX210",
      "category": "EXCAVATOR",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1289",
      "type": "EC480DL",
      "brand": "EXCAVATOR VOLVO EC480DL",
      "category": "EXCAVATOR",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1290",
      "type": "EC480DL",
      "brand": "EXCAVATOR VOLVO EC480DL",
      "category": "EXCAVATOR",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1291",
      "type": "EC480DL",
      "brand": "EXCAVATOR VOLVO EC480DL",
      "category": "EXCAVATOR",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1292",
      "type": "EC210B",
      "brand": "EXCAVATOR VOLVO EC210B",
      "category": "EXCAVATOR",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1314",
      "type": "ZX350H-5G",
      "brand": "AMPHIBI EXCAVATOR HITACHI ZX350H-5G",
      "category": "EXCAVATOR",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1388",
      "type": "ZX200",
      "brand": "EXCAVATOR HITACHI ZX200",
      "category": "EXCAVATOR",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1389",
      "type": "320",
      "brand": "EXCAVATOR AMPHIBI CATERPILLAR 320",
      "category": "EXCAVATOR",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1390",
      "type": "320",
      "brand": "EXCAVATOR AMPHIBI CATERPILLAR 320",
      "category": "EXCAVATOR",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1392",
      "type": "PC200",
      "brand": "EXCAVATOR KOMATSU PC200",
      "category": "EXCAVATOR",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1398",
      "type": "PC300SE-8",
      "brand": "EXCAVATOR KOMATSU PC300SE-8",
      "category": "EXCAVATOR",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX2048",
      "type": "PC800",
      "brand": "EXCAVATOR KOMATSU PC800",
      "category": "EXCAVATOR",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX5047",
      "type": "R9350",
      "brand": "EXCAVATOR LIEBHER R9350 BACKHOE",
      "category": "EXCAVATOR",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX8019",
      "type": "R996",
      "brand": "EXCAVATOR LIEBHERR R996 BACKHOE",
      "category": "EXCAVATOR",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX8020",
      "type": "R996",
      "brand": "EXCAVATOR LIBHER R996",
      "category": "EXCAVATOR",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX8021",
      "type": "R996",
      "brand": "EXCAVATOR LIEBHERR R996 SHOVEL",
      "category": "EXCAVATOR",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX8022",
      "type": "R996B",
      "brand": "EXCAVATOR LIEBHERR R996B SHOVEL",
      "category": "EXCAVATOR",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX8023",
      "type": "R996",
      "brand": "EXCAVATOR LIEBHERR R996 SHOVEL",
      "category": "EXCAVATOR",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX8024",
      "type": "R996B",
      "brand": "EXCAVATOR LIEBHERR R996B SHOVEL",
      "category": "EXCAVATOR",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX8025",
      "type": "R996B",
      "brand": "EXCAVATOR LIEBHERR R996B SHOVEL",
      "category": "EXCAVATOR",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR2011",
      "type": "511",
      "brand": "KOMATSU GRADER GD 511",
      "category": "GRADER",
      "owner": "TERRA FACTOR INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR3037",
      "type": "14M",
      "brand": "CATERPILLAR GRADER 14 FEET 14M",
      "category": "GRADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR3044",
      "type": "GD535-5",
      "brand": "GRADER KOMATSU GD535-5",
      "category": "GRADER",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR4083",
      "type": "16M",
      "brand": "CATERPILLAR GRADER CAT 16M",
      "category": "GRADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR4084",
      "type": "16M",
      "brand": "CATERPILLAR GRADER CAT 16M",
      "category": "GRADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR4085",
      "type": "16M",
      "brand": "CATERPILLAR GRADER CAT 16M",
      "category": "GRADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR5021",
      "type": "24H",
      "brand": "GRADER CATERPILLAR 24H",
      "category": "GRADER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1178",
      "type": "550KVA",
      "brand": "GENSET  550KVA",
      "category": "GENSET",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1184",
      "type": "1006-6T",
      "brand": "GENSET PERKINS 1006-6T",
      "category": "GENSET",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1190",
      "type": "DE450EO",
      "brand": "DENYO GENSET DE450EO",
      "category": "GENSET",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1191",
      "type": "DE450EO",
      "brand": "DENYO GENSET DE220EO",
      "category": "GENSET",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1193",
      "type": "66KVA",
      "brand": "DENYO GENSET  66 Kva",
      "category": "GENSET",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1196",
      "type": "60KVA",
      "brand": "CUMMINS GENSET  60 Kva",
      "category": "GENSET",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1197",
      "type": "125KVA",
      "brand": "DENYO GENSET  125KVA-D",
      "category": "GENSET",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1198",
      "type": "125KVA",
      "brand": "DENYO GENSET  125KVA-D",
      "category": "GENSET",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1202",
      "type": "40KVA",
      "brand": "GENSET IVECO 40 KVA",
      "category": "GENSET",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1221",
      "type": "500KVA",
      "brand": "GENSET HARTECH 500 KVA (V125)",
      "category": "GENSET",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1222",
      "type": "150KVA",
      "brand": "GENSET HARTECH 150 KVA (V126)",
      "category": "GENSET",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1231",
      "type": "25KVA",
      "brand": "GENSET CUMMINS 25KVA",
      "category": "GENSET",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1234",
      "type": "20KVA",
      "brand": "GENSET DEUTZ 20KVA",
      "category": "GENSET",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1235",
      "type": "36KW",
      "brand": "GENSET PERKINS 36KW",
      "category": "GENSET",
      "owner": "Mandiangin Batubara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1236",
      "type": "120KW",
      "brand": "GENSET WEICHAI 120KW",
      "category": "GENSET",
      "owner": "Mandiangin Batubara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1237",
      "type": "25KVA",
      "brand": "GENSET GREEN POWER 25KVA",
      "category": "GENSET",
      "owner": "Mandiangin Batubara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGS1249",
      "type": "20KVA",
      "brand": "GENSET DEUTCH 20 KVA",
      "category": "GENSET",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1456",
      "type": "MSBK-9",
      "brand": "LIGHTING PLANT MSBK-9 CHI",
      "category": "LIGHTING PLANT",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1457",
      "type": "MSBK-9",
      "brand": "LIGHTING PLANT MSBK-9 CHI",
      "category": "LIGHTING PLANT",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1458",
      "type": "MSBK-9",
      "brand": "LIGHTING PLANT MSBK-9 CHI",
      "category": "LIGHTING PLANT",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1459",
      "type": "MSBK-9",
      "brand": "LIGHTING PLANT MSBK-9 CHI",
      "category": "LIGHTING PLANT",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1460",
      "type": "MSBK-9",
      "brand": "LIGHTING PLANT MSBK-9 CHI",
      "category": "LIGHTING PLANT",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1461",
      "type": "MSBK-9",
      "brand": "LIGHTING PLANT CHI MSBK-9",
      "category": "LIGHTING PLANT",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1462",
      "type": "MSBK-9",
      "brand": "LIGHTING PLANT CHI MSBK-9",
      "category": "LIGHTING PLANT",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1520",
      "type": "PRO2V",
      "brand": "LIGHTING PLANT ALLMAND NL-PRO2V",
      "category": "LIGHTING PLANT",
      "owner": "PT. TEKNIK NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1521",
      "type": "PRO2V",
      "brand": "LIGHTING PLANT ALLMAND NL-PRO2V",
      "category": "LIGHTING PLANT",
      "owner": "PT. TEKNIK NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1522",
      "type": "PRO2V",
      "brand": "LIGHTING PLANT ALLMAND NL-PRO2V",
      "category": "LIGHTING PLANT",
      "owner": "PT. TEKNIK NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1523",
      "type": "PRO2V",
      "brand": "LIGHTING PLANT ALLMAND NL-PRO2V",
      "category": "LIGHTING PLANT",
      "owner": "PT. TEKNIK NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1524",
      "type": "PRO2V",
      "brand": "LIGHTING PLANT ALLMAND NL-PRO2V",
      "category": "LIGHTING PLANT",
      "owner": "PT. TEKNIK NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1527",
      "type": "PRO2V",
      "brand": "LIGHTING PLANT ALLMAND NL-PRO2V",
      "category": "LIGHTING PLANT",
      "owner": "PT. TEKNIK NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP1528",
      "type": "PRO2V",
      "brand": "LIGHTING PLANT ALLMAND NL-PRO2V",
      "category": "LIGHTING PLANT",
      "owner": "PT. TEKNIK NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLP2122",
      "type": "PRO2V",
      "brand": "LIGHTING PLANT  Tower",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLT3031",
      "type": "",
      "brand": "LIGHT TRUCK TYRE MITSUBISHI COLT DIESEL",
      "category": "LIGHT TRUCK",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLT3034",
      "type": "GWE370",
      "brand": "HIGHBED UD TRUCK 60 TON GWE370",
      "category": "LIGHT TRUCK",
      "owner": "ASL TRANSPORT",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLT3035",
      "type": "GWE370",
      "brand": "HIGHBED UD TRUCK 60 TON GWE370",
      "category": "LIGHT TRUCK",
      "owner": "ASL TRANSPORT",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLT3036",
      "type": "TGS40-440",
      "brand": "HIGHBED UD TRUCK 80 TON TGS40-440",
      "category": "LIGHT TRUCK",
      "owner": "ASL TRANSPORT",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2289",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "TRETES UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2295",
      "type": "",
      "brand": "LIGHT VEHICLE MITSUBISHI STRADA",
      "category": "LIGHT VEHICLE",
      "owner": "BERKAT ANUGRAH AGUNG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2347",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2348",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2481",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "K3PC",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2533",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "ANUGRAH ILAHI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2560",
      "type": "HDX",
      "brand": "MITSUBISHI ALL NEW TRITION HDX",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2561",
      "type": "HDX",
      "brand": "MITSUBISHI ALL NEW TRITION HDX",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2562",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2563",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2564",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2565",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2566",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2569",
      "type": "",
      "brand": "LIGHT VEHICLE TOYOTA HILUX 4X4",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2571",
      "type": "HDX-H",
      "brand": "MITSUBISHI ALL NEW TRITION HDX-H",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2579",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2580",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2581",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2582",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2583",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2585",
      "type": "",
      "brand": "TOYOTA LIGHT VEHICLE  INNOVA",
      "category": "LIGHT VEHICLE",
      "owner": "FAHDIL MITRA TAHMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2603",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "TRETES UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2614",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2615",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2616",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2617",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2618",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2619",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2630",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "TERRA FACTOR INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2643",
      "type": "",
      "brand": "LIGHT VEHICLE DOUBLE CABIN MITSUBISHI",
      "category": "LIGHT VEHICLE",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2654",
      "type": "",
      "brand": "HILUX 2.4 EDC 4X4MT",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2655",
      "type": "",
      "brand": "HILUX 2.4 EDC 4X4MT",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2663",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2664",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2665",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2666",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2667",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2669",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON DOUBLE CABIN HDX",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2670",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON DOUBLE CABIN HDX",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2671",
      "type": "",
      "brand": "HILUX 2.4 EDC 4X4MT",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2677",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2678",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2679",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2680",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2681",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2682",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2683",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2684",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2685",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2686",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2687",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2688",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2689",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2690",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2691",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2692",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2693",
      "type": "HLX",
      "brand": "TOYOTA LIGHT VEHICLE  HLX-DC",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2694",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2695",
      "type": "HLX",
      "brand": "TOYOTA LIGHT VEHICLE  HLX-DC",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2696",
      "type": "HLX",
      "brand": "TOYOTA LIGHT VEHICLE  HLX-DC",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2705",
      "type": "HLX",
      "brand": "TOYOTA LIGHT VEHICLE  HLX-DC",
      "category": "LIGHT VEHICLE",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2710",
      "type": "",
      "brand": "LIGHT VEHILE HILUX 2.4 EDC 4X4MT",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2711",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON DOUBLE CABIN HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2712",
      "type": "HLX",
      "brand": "TOYOTA LIGHT VEHICLE  HLX-DC",
      "category": "LIGHT VEHICLE",
      "owner": "PANGGON KARYATAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2713",
      "type": "",
      "brand": "MITSUBISHI LIGHT VEHICLE TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "TRETES UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2717",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON DOUBLE CABIN HDX",
      "category": "LIGHT VEHICLE",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2721",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON DOUBLE CABIN HDX",
      "category": "LIGHT VEHICLE",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2722",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON DOUBLE CABIN HDX",
      "category": "LIGHT VEHICLE",
      "owner": "REIYHAN PRATAMA PUTRA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2728",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2735",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON",
      "category": "LIGHT VEHICLE",
      "owner": "PT. MULTIPLY SARANA INDOTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2744",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PANGGON KARYATAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2765",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2766",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2767",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PT. ASSA EPIROC",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2768",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2769",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2770",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2771",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PT. SERASI AUTORAYA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2772",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PT. SERASI AUTORAYA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2816",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2817",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2818",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2819",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2820",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2821",
      "type": "HDX",
      "brand": "LIGHT VEHICLE TOYOTA HILUX 2.4G",
      "category": "LIGHT VEHICLE",
      "owner": "PT. SUKSES INTI SOLUSINDO",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2823",
      "type": "HDX",
      "brand": "LIGHT VEHICLE TOYOTA HILUX 2.4G",
      "category": "LIGHT VEHICLE",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2824",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2825",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2826",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2827",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2829",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "NARIKI MINEX SEJATI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2830",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2837",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2842",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2846",
      "type": "FE84G",
      "brand": "BUS MEDIUM MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2854",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PT. SUKSES INTI SOLUSINDO",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2865",
      "type": "GLS",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON GLS",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2866",
      "type": "GLX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON GLX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2867",
      "type": "GLS",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON GLS",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2868",
      "type": "GLS",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON GLS",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2869",
      "type": "GLS",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON GLS",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2874",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2878",
      "type": "GLX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON GLX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2879",
      "type": "GLS",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON GLS",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2880",
      "type": "GLS",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON GLS",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2893",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2894",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2895",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2896",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2897",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2898",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2927",
      "type": "HDX",
      "brand": "LIGHT VEHICLE TOYOTA KIJANG INNOVA",
      "category": "LIGHT VEHICLE",
      "owner": "FAHDIL MITRA TAHMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2936",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2937",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2938",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2939",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV3380",
      "type": "",
      "brand": "LIGHT VEHICLE MITSUBISHI L200",
      "category": "LIGHT VEHICLE",
      "owner": "PT. INDIKRAN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV4277",
      "type": "",
      "brand": "TOYOTA LIGHT VEHICLE  Fortuner",
      "category": "LIGHT VEHICLE",
      "owner": "FAHDIL MITRA TAHMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV4294",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE PAJERO",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV4295",
      "type": "HDX",
      "brand": "MITSUBISHI LIGHT VEHICLE PAJERO",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV4296",
      "type": "",
      "brand": "TOYOTA LIGHT VEHICLE  FORTUNER",
      "category": "LIGHT VEHICLE",
      "owner": "ORIX INDONESIA FINANCE",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5174",
      "type": "FE71",
      "brand": "MITSUBISHI LIGHT VEHICLE FE71",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5208",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5227",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5228",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5231",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5232",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5233",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5234",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5236",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5237",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5240",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5243",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5246",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5249",
      "type": "NHR55",
      "brand": "MITSUBISHI LIGHT VEHICLE NHR55",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5250",
      "type": "FE84G",
      "brand": "BUS MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5251",
      "type": "FE84G",
      "brand": "MINIBUS COLT DIESEL FE84GBC",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5252",
      "type": "FE84G",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5253",
      "type": "FE84G",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5256",
      "type": "",
      "brand": "MINIBUS ISUZU NHR 55",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5258",
      "type": "",
      "brand": "BUS HYUNDAI HD MIGHTY",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5263",
      "type": "FE84G",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5264",
      "type": "NKR55",
      "brand": "HINO LIGHT VEHICLE NKR55",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5274",
      "type": "NKR71",
      "brand": "ISUZU LIGHT VEHICLE NKR71",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5275",
      "type": "NKR55",
      "brand": "ISUZU LIGHT VEHICLE NHR55",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5276",
      "type": "NKR55",
      "brand": "ISUZU LIGHT VEHICLE NHR55",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5278",
      "type": "NKR71",
      "brand": "ISUZU LIGHT VEHICLE NKR71",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5279",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5280",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5286",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5293",
      "type": "FE71",
      "brand": "MITSUBISHI LIGHT VEHICLE FE71",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5300",
      "type": "",
      "brand": "MITSUBISHI MANHAUL COLD DIESEL FEB4",
      "category": "MAN HAULER",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5301",
      "type": "FE84GBC",
      "brand": "MINIBUS COLT DIESEL FE84GBC",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5302",
      "type": "FE84GBC",
      "brand": "MINIBUS COLT DIESEL FE84GBC",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5303",
      "type": "FE84GBC",
      "brand": "MINIBUS COLT DIESEL FE84GBC",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5304",
      "type": "FE84GBC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5305",
      "type": "FE71",
      "brand": "MITSUBISHI LIGHT VEHICLE FE71",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5306",
      "type": "FE84GBC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5314",
      "type": "FE84GBC",
      "brand": "MINIBUS COLT DIESEL FE84GBC",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5321",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5322",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5323",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5324",
      "type": "FE84GBC",
      "brand": "MINIBUS COLT DIESEL FE84GBC",
      "category": "LIGHT VEHICLE",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5325",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5326",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5327",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5328",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5329",
      "type": "FE74S",
      "brand": "MITSUBISHI LIGHT VEHICLE FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5332",
      "type": "7019",
      "brand": "MITSUBISHI MOPEN MICROBUS-N 7019 UE",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5333",
      "type": "7019",
      "brand": "MITSUBISHI MOPEN MICROBUS-N 7019 UE",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5334",
      "type": "7019",
      "brand": "MITSUBISHI MOPEN MICROBUS-N 7019 UE",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5335",
      "type": "7019",
      "brand": "MITSUBISHI MOPEN MICROBUS-N 7019 UE",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5336",
      "type": "7019",
      "brand": "MITSUBISHI MOPEN MICROBUS-N 7019 UE",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5338",
      "type": "55B",
      "brand": "MICROBUS ISUZU NLR 55B LX",
      "category": "LIGHT VEHICLE",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5340",
      "type": "FE74S",
      "brand": "MANHAUL MITSUBISHI COLT DIESEL FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5341",
      "type": "FE84G",
      "brand": "MIKROBUS MITSUBISHI COLT DIESEL FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "CV. SETIA MAS UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5342",
      "type": "FE84",
      "brand": "MICROBUS MITSUBISHI FE84",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5349",
      "type": "FE74S",
      "brand": "MANHAUL MITSUBISHI COLT DIESEL FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5350",
      "type": "FE74S",
      "brand": "MANHAUL MITSUBISHI COLT DIESEL FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5360",
      "type": "NHR55",
      "brand": "MICROBUS ISUZU NHR55",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5367",
      "type": "FE74S",
      "brand": "MANHAUL MITSUBISHI COLT DIESEL FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5368",
      "type": "FE74S",
      "brand": "MANHAUL MITSUBISHI COLT DIESEL FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5369",
      "type": "FE74S",
      "brand": "MANHAUL MITSUBISHI COLT DIESEL FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5370",
      "type": "FE74S",
      "brand": "MANHAUL MITSUBISHI COLT DIESEL FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "BAGONG",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5380",
      "type": "71",
      "brand": "BUS ISUZU NQR 71",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5384",
      "type": "55",
      "brand": "MICROBUS ISUZU NCR 55",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5385",
      "type": "FE84G",
      "brand": "MICROBUS MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5386",
      "type": "",
      "brand": "BUS MITSUBISHI COLT DIS FE",
      "category": "LIGHT VEHICLE",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5392",
      "type": "",
      "brand": "MICROBUS ISUZU NQR71",
      "category": "LIGHT VEHICLE",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5398",
      "type": "",
      "brand": "MICROBUS ISUZU",
      "category": "LIGHT VEHICLE",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5402",
      "type": "FE84G",
      "brand": "BUS MEDIUM MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5403",
      "type": "FE84G",
      "brand": "BUS MEDIUM MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5404",
      "type": "FE84G",
      "brand": "BUS MEDIUM MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5405",
      "type": "FE84G",
      "brand": "BUS MEDIUM MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5406",
      "type": "FE84G",
      "brand": "BUS MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5407",
      "type": "FE84G",
      "brand": "BUS MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5408",
      "type": "FE84G",
      "brand": "BUS MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5409",
      "type": "FE84G",
      "brand": "BUS MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5413",
      "type": "FE84G",
      "brand": "MANHAUL MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5414",
      "type": "FE84G",
      "brand": "MANHAUL MITSUBISHI FE84G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5418",
      "type": "FE84G",
      "brand": "LIGHT VEHICLE MITSUBISHI FE 84 G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5419",
      "type": "FE84G",
      "brand": "LIGHT VEHICLE MITSUBISHI FE 84 G",
      "category": "LIGHT VEHICLE",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5420",
      "type": "FE74S",
      "brand": "LIGHT VEHICLE MITSUBISHI FE74S",
      "category": "LIGHT VEHICLE",
      "owner": "KOPERASI KARYAWAN DARMA HENWA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1042",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1043",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1044",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1045",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1046",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1047",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1048",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1049",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1050",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1051",
      "type": "FH16C",
      "brand": "PRIME MOVER VOLVO FH16C",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1066",
      "type": "FH16",
      "brand": "PRIME MOVER VOLVO FH16",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1067",
      "type": "FH16",
      "brand": "PRIME MOVER VOLVO FH16 6X4",
      "category": "PRIME MOVER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9002",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9005",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9007",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9011",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9013",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9015",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9016",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9019",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9020",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9021",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9023",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9029",
      "type": "4054",
      "brand": "MERCEDES BENZ ACTROS 4054",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9034",
      "type": "4054",
      "brand": "MERCEDES BENZ ACTROS 4054",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9035",
      "type": "4054",
      "brand": "MERCEDES BENZ ACTROS 4054",
      "category": "Trailer Truck",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9036",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9037",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9038",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9039",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9040",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9041",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9042",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9043",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9044",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9045",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9046",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9047",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9048",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9049",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9050",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9051",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9052",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9053",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9054",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9055",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9056",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9057",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9058",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9059",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9060",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9061",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9062",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9063",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9064",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9065",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9066",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3223",
      "type": "CD150M",
      "brand": "GODWIN PUMP CD150M",
      "category": "PUMP",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3224",
      "type": "CD150M",
      "brand": "GODWIN PUMP CD150M",
      "category": "PUMP",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3225",
      "type": "CCD225",
      "brand": "PUMP CCD225",
      "category": "PUMP",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3226",
      "type": "CD150M",
      "brand": "GODWIN PUMP CD150M",
      "category": "PUMP",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3233",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MLT420",
      "category": "PUMP",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3234",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MLT420",
      "category": "PUMP",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3238",
      "type": "GM200",
      "brand": "PUMP GM200",
      "category": "PUMP",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3239",
      "type": "HDDS",
      "brand": "DREDGE PUMP 200 HDDS",
      "category": "PUMP",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3240",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MLT420",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3241",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MLT420",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3242",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MLT420",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3243",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MLT420",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3245",
      "type": "EZ-A75",
      "brand": "EXCELLENCE PUMP EZ-A75",
      "category": "PUMP",
      "owner": "SAMUDERA BIRU NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3248",
      "type": "MLT420",
      "brand": "MULTIFLO PUMP MF420",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3249",
      "type": "CD150M",
      "brand": "CD150M",
      "category": "PUMP",
      "owner": "SAMUDERA BIRU NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3250",
      "type": "CD150M",
      "brand": "DRAGFLOW PUMP CD150M",
      "category": "PUMP",
      "owner": "SAMUDERA BIRU NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3251",
      "type": "CD150M",
      "brand": "GODWIN PUMP CD150M",
      "category": "PUMP",
      "owner": "COATES HIRE INDONESIA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3255",
      "type": "320D2L",
      "brand": "WARMAN PUMP 320D2L",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3256",
      "type": "320D2L",
      "brand": "WARMAN PUMP 320D2L",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3258",
      "type": "AHB",
      "brand": "SLURRY PUMP, WARMAN 8/6 AHB",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3266",
      "type": "J600SP",
      "brand": "SLURRY PUMP J600SP",
      "category": "PUMP",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3267",
      "type": "J600SP",
      "brand": "SLURRY PUMP J600SP",
      "category": "PUMP",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3268",
      "type": "J600SP",
      "brand": "SLURRY PUMP J600SP",
      "category": "PUMP",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3272",
      "type": "J600SP",
      "brand": "SLURRY PUMP ATLAS COPCO J-600 SP",
      "category": "PUMP",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3273",
      "type": "J600SP",
      "brand": "SLURRY PUMP J600SP",
      "category": "PUMP",
      "owner": "Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3277",
      "type": "J600SP",
      "brand": "SLURRY PUMP WEIR WARMAN",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3292",
      "type": "MF385HP",
      "brand": "PUMP MULTIFLO MF385HP",
      "category": "PUMP",
      "owner": "PT. SUKSES INTI SOLUSINDO",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3293",
      "type": "MF385HP",
      "brand": "PUMP MULTIFLO MF385HP",
      "category": "PUMP",
      "owner": "PT. SUKSES INTI SOLUSINDO",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HST1120",
      "type": "FVZ285",
      "brand": "ISUZU LUBE TRUCK FVZ285",
      "category": "SERVICE TRUCK",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HST1122",
      "type": "CLA26",
      "brand": "TRUCK MAN CLA26.280",
      "category": "SERVICE TRUCK",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1126",
      "type": "D85ESS",
      "brand": "KOMATSU BULLDOZER D85ESS",
      "category": "TRACK DOZER",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1159",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "TRETES UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1160",
      "type": "D85ESS",
      "brand": "BULLDOZER D85ESS",
      "category": "TRACK DOZER",
      "owner": "",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1167",
      "type": "D85E",
      "brand": "KOMATSU TRACK DOZER D85E",
      "category": "TRACK DOZER",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1168",
      "type": "D7R",
      "brand": "CATERPILLAR TRACK DOZER D7R",
      "category": "TRACK DOZER",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1169",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "TRETES UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1170",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "TRETES UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1171",
      "type": "D85SS",
      "brand": "KOMATSU TRACK DOZER D85SS",
      "category": "TRACK DOZER",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1173",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "TRETES UTAMA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1174",
      "type": "D6R",
      "brand": "CATERPILLAR TRACK DOZER D6R",
      "category": "TRACK DOZER",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1178",
      "type": "D6R",
      "brand": "CATERPILLAR TRACK DOZER D6R",
      "category": "TRACK DOZER",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1187",
      "type": "D6R",
      "brand": "TRACK DOZER CATERPILLAR D6R",
      "category": "TRACK DOZER",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1188",
      "type": "D6R",
      "brand": "TRACK DOZER CATERPILLAR D6R",
      "category": "TRACK DOZER",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1189",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1206",
      "type": "D85ESS",
      "brand": "DOZER KOMATSU D85ESS",
      "category": "TRACK DOZER",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD3132",
      "type": "D10T",
      "brand": "DOZER CATERPILLAR D10T",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD3134",
      "type": "D10T",
      "brand": "DOZER CATERPILLAR D10T",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD4021",
      "type": "D11R",
      "brand": "BULLDOZER CATERPILLAR D11R",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD4022",
      "type": "D11R",
      "brand": "BULLDOZER CATERPILLAR D11R",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD4023",
      "type": "D11R",
      "brand": "BULLDOZER CATERPILLAR D11R",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD4024",
      "type": "D11R",
      "brand": "BULLDOZER CATERPILLAR D11R",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD4025",
      "type": "D11R",
      "brand": "BULLDOZER CATERPILLAR D11R",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD4026",
      "type": "D11R",
      "brand": "BULLDOZER CATERPILLAR D11R",
      "category": "TRACK DOZER",
      "owner": "PT. ARYA ENERGI VENTURA",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTL1025",
      "type": "370",
      "brand": "PRIME MOVER VOLVO FM 370",
      "category": "TOWER LAMP",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3079",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3080",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3081",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3082",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3083",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3084",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3085",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3086",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3087",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3088",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3089",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3090",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3091",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTR3092",
      "type": "STT",
      "brand": "TRAILER 4 AXLE SSB STT",
      "category": "Trailer Truck",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWC2063",
      "type": "FM370",
      "brand": "TRACTOR HEAD VOLVO FM370",
      "category": "WATER TRUCK",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWC2065",
      "type": "FM370",
      "brand": "TRACTOR HEAD VOLVO FM370",
      "category": "WATER TRUCK",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWC2066",
      "type": "FM370",
      "brand": "TRACTOR HEAD VOLVO FM370",
      "category": "WATER TRUCK",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWC2067",
      "type": "FM370",
      "brand": "TRACTOR HEAD VOLVO FM370",
      "category": "WATER TRUCK",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL1037",
      "type": "S4D104E",
      "brand": "KOMATSU LOADER S4D104E",
      "category": "BACKHOE LOADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL1038",
      "type": "L220G",
      "brand": "WHEEL LOADER VOLVO L220G",
      "category": "BACKHOE LOADER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL1039",
      "type": "L220G",
      "brand": "WHEEL LOADER VOLVO L220G",
      "category": "BACKHOE LOADER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL1040",
      "type": "L220G",
      "brand": "WHEEL LOADER VOLVO L220G",
      "category": "BACKHOE LOADER",
      "owner": "PT. DWI MAKMUR PRIMATAMAS",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL2007",
      "type": "966H",
      "brand": "CATERPILLAR LOADER 966H",
      "category": "BACKHOE LOADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL3030",
      "type": "WA500",
      "brand": "KOMATSU LOADER WA500",
      "category": "BACKHOE LOADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL5041",
      "type": "988H",
      "brand": "CATERPILLAR LOADER 988H",
      "category": "BACKHOE LOADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL5042",
      "type": "988H",
      "brand": "CATERPILLAR LOADER 988H",
      "category": "BACKHOE LOADER",
      "owner": "Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWM2117",
      "type": "SC501",
      "brand": "WELDING MACHINE INDIA SC501",
      "category": "WELDING MACHINE",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWM2118",
      "type": "SC501",
      "brand": "WELDING MACHINE INDIA SC501",
      "category": "WELDING MACHINE",
      "owner": "Mandiangin Batubara",
      "usage": "DRY HIRE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWT1071",
      "type": "110PS",
      "brand": "WATER TRUCK MITSUBISHI CANTER 110PS",
      "category": "WATER TRUCK",
      "owner": "BENUA ETAM JAYA MANDIRI",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2882",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2883",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2884",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2885",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0007",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Kaltim Prima coal",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0008",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - CV. Bagong",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0009",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - CV. Tretes Utama",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0010",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - Koperasi Karyawan Kaltim Prima",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0011",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Altrak 1978",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0012",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Atlas Copco Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0013",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. HEXINDO ADIPERKASA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0014",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Liebherr Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0015",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. United Tractor Tbk",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0016",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Kaltim Benua Etam",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0032",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - Koperasi Karyawan PTDH",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0033",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - Other",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0034",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Benua Etam Jaya Mandiri",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0035",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. INDIKRAN",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0036",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Madhani Talata Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0037",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Mandiangin Batubara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0038",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Oelangan Karya Etam",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0039",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Panggon Karyatama Mulia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0040",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Petrolindo Megah Perkasa",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0041",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Primatama Energi Nusantara",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0042",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Jarum Mahakarya Indonesia",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0043",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. DH Global Arrow",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "OTT0044",
      "type": "",
      "brand": "",
      "category": "OTHERS",
      "owner": "BCP - PT. Sanggar Sarana Baja",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RAC2016",
      "type": "C185",
      "brand": "INGERSOLL RAND AIR COMPRESSOR C185",
      "category": "AIR COMPRESSOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RAC2032",
      "type": "C185",
      "brand": "INGERSOLL RAND AIR COMPRESSOR C185",
      "category": "AIR COMPRESSOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD4008",
      "type": "D6R",
      "brand": "CATERPILLAR TRACK DOZER D6R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD4009",
      "type": "D6R",
      "brand": "CATERPILLAR TRACK DOZER D6R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD6027",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD6029",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD6032",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD6034",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD6037",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD6040",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD6043",
      "type": "D8R",
      "brand": "CATERPILLAR TRACK DOZER D8R",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD8002",
      "type": "D10T",
      "brand": "CATERPILLAR TRACK DOZER D10T",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD8004",
      "type": "D10T",
      "brand": "CATERPILLAR TRACK DOZER D10T",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD8005",
      "type": "D10T",
      "brand": "CATERPILLAR TRACK DOZER D10T",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RBD8006",
      "type": "D10T",
      "brand": "CATERPILLAR TRACK DOZER D10T",
      "category": "TRACK DOZER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RCT3003",
      "type": "P340",
      "brand": "SCANIA CRANE TRUCK P340",
      "category": "CRANE TRUCK",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RCT3011",
      "type": "FMX440",
      "brand": "VOLVO CRANE TRUCK FMX440",
      "category": "CRANE TRUCK",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RDR2002",
      "type": "D245KS",
      "brand": "DRILLTECH DRILLING D245KS",
      "category": "DRILLING",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RDR2006",
      "type": "D245KS",
      "brand": "DRILLTECH DRILLING D245KS",
      "category": "DRILLING",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RDR2019",
      "type": "MD6290",
      "brand": "CATERPILLAR DRILLING MD6290",
      "category": "DRILLING",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX2022",
      "type": "PC300",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC300",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX2036",
      "type": "329DLME",
      "brand": "CATERPILLAR EXCAVATOR BACKHOE 329DLME",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX2059",
      "type": "ZX350",
      "brand": "HITACHI EXCAVATOR BACKHOE HITACHI ZX350",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX5019",
      "type": "PC1250",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC1250-8",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX5021",
      "type": "PC1250",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC1250-8",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX6003",
      "type": "PC2000",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC2000-8",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX6004",
      "type": "PC2000",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC2000-8",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX6005",
      "type": "PC2000",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC2000-8",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX6010",
      "type": "PC2000",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC2000-8",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX6012",
      "type": "EX1900",
      "brand": "HITACHI EXCAVATOR BACKHOE EX1900-6",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX6015",
      "type": "PC2000",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC2000-8",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX6017",
      "type": "PC2000",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC2000-8",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX8001",
      "type": "EX3600",
      "brand": "HITACHI EXCAVATOR BACKHOE EX3600",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX8002",
      "type": "EX3600",
      "brand": "HITACHI EXCAVATOR BACKHOE EX3600",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "REX8003",
      "type": "EX3600",
      "brand": "HITACHI EXCAVATOR BACKHOE EX3600",
      "category": "EXCAVATOR",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RFT4008",
      "type": "P420",
      "brand": "KOMATSU FUEL TRUCK P420",
      "category": "FUEL TRUCK",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RFT4016",
      "type": "P420",
      "brand": "KOMATSU FUEL TRUCK P420",
      "category": "FUEL TRUCK",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGE2002",
      "type": "12KVA",
      "brand": "YANMAR GENSET 12 Kva",
      "category": "GENSET",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGE5001",
      "type": "150KVA",
      "brand": "OLYMPIAN GENSET 150 Kva",
      "category": "GENSET",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGE5002",
      "type": "150KVA",
      "brand": "OLYMPIAN GENSET 150 Kva",
      "category": "GENSET",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGE5008",
      "type": "250KVA",
      "brand": "OLYMPIAN GENSET 250 Kva",
      "category": "GENSET",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGE5009",
      "type": "250KVA",
      "brand": "OLYMPIAN GENSET 250 Kva",
      "category": "GENSET",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGR3006",
      "type": "GD825A",
      "brand": "KOMATSU GRADER GD825A-2",
      "category": "GRADER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGR3010",
      "type": "GD825A",
      "brand": "KOMATSU GRADER GD825A-2",
      "category": "GRADER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGR3012",
      "type": "GD825A",
      "brand": "KOMATSU GRADER GD825A-2",
      "category": "GRADER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGR3017",
      "type": "GD825A",
      "brand": "KOMATSU GRADER GD825A-2",
      "category": "GRADER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGR3019",
      "type": "GD825A",
      "brand": "KOMATSU GRADER GD825A-2",
      "category": "GRADER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RGR3020",
      "type": "GD825A",
      "brand": "KOMATSU GRADER GD825A-2",
      "category": "GRADER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2121",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2122",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2123",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2148",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2149",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2171",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2172",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2173",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2174",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2175",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2176",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RLP2177",
      "type": "LT9",
      "brand": "JCB LIGHTING PLANT JCB LT9",
      "category": "LIGHTING PLANT",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RMH7001",
      "type": "P340",
      "brand": "SCANIA MAN HAULER P340",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RMH7004",
      "type": "P124CB",
      "brand": "SCANIA MAN HAULER P124CB",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RMH7005",
      "type": "P340",
      "brand": "SCANIA MAN HAULER P340",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RMH7006",
      "type": "P340",
      "brand": "SCANIA MAN HAULER P340",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RMH7008",
      "type": "",
      "brand": "SCANIA MAN HAULER SCANIA",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RMH8002",
      "type": "P380",
      "brand": "SCANIA MAN HAULER P380",
      "category": "LIGHT VEHICLE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RPU3019",
      "type": "390",
      "brand": "MULTIFLO PUMP MF 390",
      "category": "PUMP",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RST4011",
      "type": "",
      "brand": "SCANIA SERVICE TRUCK LUBE TRUCK",
      "category": "SERVICE TRUCK",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1007",
      "type": "HD465",
      "brand": "KOMATSU DUMP TRUCK HD465",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1016",
      "type": "HD465",
      "brand": "KOMATSU DUMP TRUCK HD465",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1029",
      "type": "HD465",
      "brand": "KOMATSU DUMP TRUCK HD465",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1068",
      "type": "HD465",
      "brand": "KOMATSU DUMP TRUCK HD465",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1070",
      "type": "HD465",
      "brand": "KOMATSU DUMP TRUCK HD465",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1080",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1081",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1082",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1083",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1084",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1085",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1086",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1087",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1088",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1089",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1090",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1091",
      "type": "773E",
      "brand": "CATERPILLAR DUMP TRUCK 773E",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1092",
      "type": "775F",
      "brand": "CATERPILLAR DUMP TRUCK 775F",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1093",
      "type": "775F",
      "brand": "CATERPILLAR DUMP TRUCK 775F",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR1097",
      "type": "775F",
      "brand": "CATERPILLAR DUMP TRUCK 775F",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3017",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3018",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3019",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3021",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3022",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3048",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3049",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3099",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3101",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3102",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3103",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3104",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3105",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3106",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3107",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3109",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3111",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3112",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3113",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3114",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3115",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3137",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3138",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3139",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3140",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3141",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3142",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3143",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3144",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3155",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3156",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3157",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3158",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3159",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3160",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3161",
      "type": "HD7857HB",
      "brand": "KOMATSU DUMP TRUCK HD7857HB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3191",
      "type": "777DHB",
      "brand": "CATERPILLAR DUMP TRUCK 777DHB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3212",
      "type": "777DHB",
      "brand": "CATERPILLAR DUMP TRUCK 777DHB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR3213",
      "type": "777DHB",
      "brand": "CATERPILLAR DUMP TRUCK 777DHB",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5001",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5002",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5003",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5004",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5005",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5006",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5007",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5008",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5009",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5010",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5011",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5012",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5013",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5014",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5015",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5016",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5017",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5018",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5019",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5020",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTR5021",
      "type": "CAT785C",
      "brand": "CATERPILLAR DUMP TRUCK CAT785C",
      "category": "TYRE REMOVER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTS4010",
      "type": "P380",
      "brand": "SCANIA MAN HAULER P380",
      "category": "MAN HAULER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTS4011",
      "type": "P380",
      "brand": "SCANIA MAN HAULER",
      "category": "MAN HAULER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTS4020",
      "type": "P380",
      "brand": "SCANIA MAN HAULER",
      "category": "MAN HAULER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTW3061",
      "type": "P420CB",
      "brand": "SCANIA WATER TRUCK P420CB",
      "category": "WATER TRUCK",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTW5003",
      "type": "HD465",
      "brand": "KOMATSU WATER TRUCK HD465",
      "category": "WATER TRUCK",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RTW5004",
      "type": "HD465",
      "brand": "KOMATSU WATER TRUCK HD465",
      "category": "WATER TRUCK",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RWL3002",
      "type": "",
      "brand": "VOLVO BACKHOE LOADER VOLVO",
      "category": "BACKHOE LOADER",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "RWM1024",
      "type": "",
      "brand": "WELDING MACHINE MILLER",
      "category": "WELDING MACHINE",
      "owner": "MADHANI TALATAH NUSANTARA",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "ST1150",
      "type": "2528C",
      "brand": "SERVICE TRUCK MERCY AXOR 2528C",
      "category": "SERVICE TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TK1033",
      "type": "25KL",
      "brand": "FUEL TANK STATION 25KL",
      "category": "TANKS",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TK1035",
      "type": "50KL",
      "brand": "FUEL TANK STATION 50KL",
      "category": "TANKS",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TK1036",
      "type": "50KL",
      "brand": "FUEL TANK STATION 50KL",
      "category": "TANKS",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TK1037",
      "type": "50KL",
      "brand": "FUEL TANK STATION 50KL",
      "category": "TANKS",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TWEX117",
      "type": "320D",
      "brand": "CATERPILLAR EXCAVATOR BACKHOE 320D",
      "category": "EXCAVATOR",
      "owner": "KALIMANTAN PRIMA COAL",
      "usage": "SUBCONT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2128",
      "type": "CPCB",
      "brand": "WELDING MACHINE SIMPSON CPCB II",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2129",
      "type": "CPCB",
      "brand": "WELDING MACHINE SIMPSON CPCB II",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2130",
      "type": "CPCB",
      "brand": "WELDING MACHINE SIMPSON CPCB II",
      "category": "WELDING MACHINE",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1084",
      "type": "2528",
      "brand": "WATER TRUCK MERCY AXOR 2528",
      "category": "WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "T112",
      "type": "T112",
      "brand": "Fuel Station T112",
      "category": "FS",
      "owner": "DARMA HENWA",
      "usage": "FS",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "T108",
      "type": "T108",
      "brand": "Fuel Station T108",
      "category": "FS",
      "owner": "DARMA HENWA",
      "usage": "FS",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR3080",
      "type": "8s",
      "brand": "SANY STG230C-8S",
      "category": "GRADER SANY",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1424",
      "type": "PC200",
      "brand": "KOMATSU EXCAVATOR BACKHOE PC200",
      "category": "EXCAVATOR",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2948",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5335",
      "type": "FE84BC",
      "brand": "MITSUBISHI LIGHT VEHICLE FE84BC",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GR5022",
      "type": "24H",
      "brand": "GRADER CATERPILLAR 24H",
      "category": "GRADER",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5505",
      "type": "T282B",
      "brand": "LIEBHERR DUMP TRUCK T282B",
      "category": "DUMP TRUCK",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5506",
      "type": "T282B",
      "brand": "LIEBHERR DUMP TRUCK T282B",
      "category": "DUMP TRUCK",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5504",
      "type": "T282B",
      "brand": "LIEBHERR DUMP TRUCK T282B",
      "category": "DUMP TRUCK",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5503",
      "type": "T282B",
      "brand": "LIEBHERR DUMP TRUCK T282B",
      "category": "DUMP TRUCK",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5502",
      "type": "T282B",
      "brand": "LIEBHERR DUMP TRUCK T282B",
      "category": "DUMP TRUCK",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5501",
      "type": "T282B",
      "brand": "LIEBHERR DUMP TRUCK T282B",
      "category": "DUMP TRUCK",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT5516",
      "type": "T282B",
      "brand": "LIEBHERR DUMP TRUCK T282B",
      "category": "DUMP TRUCK",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU01",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU121",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU02",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU108",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU117",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU110",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU109",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU78",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU19",
      "type": "HDX",
      "brand": "LIGHT VEHICLE MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU77",
      "type": "MP380E42W",
      "brand": "IVECO FUEL TRUCK MP380E42W (6x6)",
      "category": "Crant Truck",
      "owner": "",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU4013",
      "type": "MF420",
      "brand": "MULTIFLO PUMP MF420",
      "category": "GENERAL SUPPORT",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU4012",
      "type": "MF420",
      "brand": "MULTIFLO PUMP MF420",
      "category": "PUMP",
      "owner": "",
      "usage": "",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HFT1164",
      "type": "2528",
      "brand": "MERCY AXOR 2528 C",
      "category": "FUEL TRUCK",
      "owner": "PT. PUTRA PERKASA ABADI",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1197",
      "type": "D8T",
      "brand": "CAT D8T",
      "category": "OB SUPPORT",
      "owner": "DARMA HENWA",
      "usage": "OB SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT2069",
      "type": "HD465",
      "brand": "HD465",
      "category": "OB SUPPORT",
      "owner": "DARMA HENWA",
      "usage": "OB SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1435",
      "type": "SY365H",
      "brand": "SANY SY365H",
      "category": "OB SUPPORT",
      "owner": "DARMA HENWA",
      "usage": "OB SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1436",
      "type": "SY365H",
      "brand": "SANY SY365H",
      "category": "OB SUPPORT",
      "owner": "DARMA HENWA",
      "usage": "OB SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1482",
      "type": "PC200",
      "brand": "KOMATSU PC200",
      "category": "OB SUPPORT",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "OB SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV4361",
      "type": "",
      "brand": "MITSUBISHI PAJERO",
      "category": "GENERAL SUPPORT - TRANSPORT",
      "owner": "FAHDIL MITRA TAHMA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5500",
      "type": "FE84BC",
      "brand": "MITSUBISHI FE84BC",
      "category": "GENERAL SUPPORT - TRANSPORT",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5501",
      "type": "FE84BC",
      "brand": "MITSUBISHI FE84BC",
      "category": "GENERAL SUPPORT - TRANSPORT",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5448",
      "type": "FE84G",
      "brand": "MITSUBISHI COLT DIESEL FE84G",
      "category": "GENERAL SUPPORT - TRANSPORT",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5470",
      "type": "FE84G",
      "brand": "MITSUBISHI COLT DIESEL FE84G",
      "category": "GENERAL SUPPORT - TRANSPORT",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2124",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "GENERAL SUPPORT - TRANSPORT",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2888",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "GENERAL SUPPORT - TRANSPORT",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1226",
      "type": "FM260JD",
      "brand": "HINO FM260JD",
      "category": "COAL HAULING",
      "owner": "DARMA HENWA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1170",
      "type": "FM260JD",
      "brand": "HINO FM260JD",
      "category": "COAL HAULING",
      "owner": "DARMA HENWA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1178",
      "type": "FM260JD",
      "brand": "HINO FM260JD",
      "category": "COAL HAULING",
      "owner": "DARMA HENWA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "CP1138",
      "type": "380-200",
      "brand": "ELGY PG 380-200",
      "category": "GENERAL SUPPORT - PLM",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - PLM",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LP1396",
      "type": "LS3-6000",
      "brand": "PATRIA LS3-6000",
      "category": "GENERAL SUPPORT - LIGHTING",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - LIGHTING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2980",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2987",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2988",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2989",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2990",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2991",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2992",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2993",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2994",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2995",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2996",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2119",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2120",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2121",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2122",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2123",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "BELFANO NAHLA UTAMA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2138",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2140",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2141",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2142",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2208",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2209",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2210",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2214",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2215",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WT1097",
      "type": "CWB45AL",
      "brand": "NISSAN CWB45AL",
      "category": "GENERAL SUPPORT - WATER TRUCK",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - WATER TRUCK",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM1029",
      "type": "CPCB",
      "brand": "SIMPSON CPCB II",
      "category": "GENERAL SUPPORT- PLM",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT- PLM",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1074",
      "type": "650KVA",
      "brand": "PERKINS 650KVA",
      "category": "GENERAL SUPPORT - GENSET",
      "owner": "DARMA HENWA",
      "usage": "GENERAL SUPPORT - GENSET",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3337",
      "type": "",
      "brand": "COATES HIRE INDONESIA",
      "category": "GENERAL SUPPORT - DEWATERING",
      "owner": "COATES HIRE INDONESIA",
      "usage": "GENERAL SUPPORT - DEWATERING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3357",
      "type": "MLT420",
      "brand": "MULTIFLO MLT420",
      "category": "GENERAL SUPPORT - DEWATERING",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "GENERAL SUPPORT - DEWATERING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3358",
      "type": "MLT420",
      "brand": "MULTIFLO MLT420",
      "category": "GENERAL SUPPORT - DEWATERING",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "GENERAL SUPPORT - DEWATERING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3347",
      "type": "J600SP",
      "brand": "SLURRY J600SP",
      "category": "GENERAL SUPPORT - DEWATERING",
      "owner": "JARUM MAHAKARYA INDONESIA",
      "usage": "GENERAL SUPPORT - DEWATERING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "MKN08",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "MULTI KONTROL NUSANTARA",
      "usage": "GENERAL SUPPORT - TRANSPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HFT1168",
      "type": "2528",
      "brand": "MERCY AXOR 2528 C",
      "category": "FUEL TRUCK",
      "owner": "PT. PUTRA PERKASA ABADI",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HFT1169",
      "type": "2528",
      "brand": "MERCY AXOR 2528 C",
      "category": "FUEL TRUCK",
      "owner": "PT. PUTRA PERKASA ABADI",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HFT1170",
      "type": "2528",
      "brand": "MERCY AXOR 2528 C",
      "category": "FUEL TRUCK",
      "owner": "PT. PUTRA PERKASA ABADI",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "UT350",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "BACKCHARGE",
      "owner": "UNITED TRACTORS",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "UT351",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "BACKCHARGE",
      "owner": "UNITED TRACTORS",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "UT353",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "BACKCHARGE",
      "owner": "UNITED TRACTORS",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU123",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "BACKCHARGE",
      "owner": "TRAKINDO UTAMA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU06",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "BACKCHARGE",
      "owner": "TRAKINDO UTAMA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU03",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "BACKCHARGE",
      "owner": "TRAKINDO UTAMA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU04",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "BACKCHARGE",
      "owner": "TRAKINDO UTAMA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU05",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "BACKCHARGE",
      "owner": "TRAKINDO UTAMA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU125",
      "type": "FE84GBC",
      "brand": "COLT DIESEL FE84GBC",
      "category": "BACKCHARGE",
      "owner": "TRAKINDO UTAMA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DMP218",
      "type": "FE84GBC",
      "brand": "COLT DIESEL FE84GBC",
      "category": "BACKCHARGE",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2130",
      "type": "FE84GBC",
      "brand": "MITSUBISHI TRITON FE84GBC",
      "category": "COAL HAULING",
      "owner": "DWI MAKMUR PRIMATAMAS",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2131",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "DWI MAKMUR PRIMATAMAS",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9069",
      "type": "FH16",
      "brand": "VOLVO FH16",
      "category": "COAL HAULING",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9070",
      "type": "FH16",
      "brand": "VOLVO FH16",
      "category": "COAL HAULING",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9071",
      "type": "FH16",
      "brand": "VOLVO FH16",
      "category": "COAL HAULING",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9076",
      "type": "FH16",
      "brand": "VOLVO FH16",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1083",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1096",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "COAL HAULING",
      "owner": "DWI MAKMUR PRIMATAMAS",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1095",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "COAL HAULING",
      "owner": "DWI MAKMUR PRIMATAMAS",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1097",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "COAL HAULING",
      "owner": "DWI MAKMUR PRIMATAMAS",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2204",
      "type": "",
      "brand": "LV",
      "category": "COAL HAULING",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2900",
      "type": "",
      "brand": "LV",
      "category": "COAL HAULING",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2940",
      "type": "",
      "brand": "LV",
      "category": "COAL HAULING",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2942",
      "type": "",
      "brand": "LV",
      "category": "COAL HAULING",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2943",
      "type": "",
      "brand": "LV",
      "category": "COAL HAULING",
      "owner": "PRIMATAMA ENERGI NUSANTARA",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1653",
      "type": "440HP",
      "brand": "Volvo FMX440 8X4 440HP RIGID",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1654",
      "type": "440HP",
      "brand": "Volvo FMX-1384R 8X4 440HP RIGID",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1655",
      "type": "440HP",
      "brand": "Volvo FMX-1384R 8X4 440HP RIGID",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1656",
      "type": "440HP",
      "brand": "Volvo FMX-1384R 8X4 440HP RIGID",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1658",
      "type": "440HP",
      "brand": "Volvo FMX-1384R 8X4 440HP RIGID",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1659",
      "type": "440HP",
      "brand": "Volvo FMX440 8X4 440HP RIGID",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1662",
      "type": "440HP",
      "brand": "Volvo FMX-440 8X4 440HP RIGID",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HDT1664",
      "type": "440HP",
      "brand": "Volvo FMX-440 8X4 440HP RIGID",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1078",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1080",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1081",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1082",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1091",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1092",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1093",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9072",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9073",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9074",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9077",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9078",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9079",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9080",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9082",
      "type": "610HP",
      "brand": "PRIME MOVER VOLVO FH16 6X4 610HP",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1084",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1085",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1086",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1087",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM1088",
      "type": "R580",
      "brand": "PRIME MOVER SCANIA R580",
      "category": "PRIME MOVER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR3085",
      "type": "160K",
      "brand": "MOTOR GRADER CATERPILLAR 160K",
      "category": "GRADER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR3086",
      "type": "160K",
      "brand": "MOTOR GRADER CATERPILLAR 160K",
      "category": "GRADER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HGR3087",
      "type": "160K",
      "brand": "MOTOR GRADER CATERPILLAR 160K",
      "category": "GRADER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1469",
      "type": "EW205D",
      "brand": "EXCAVATOR VOLVO EW205D",
      "category": "EXCAVATOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1471",
      "type": "PC210",
      "brand": "EXCAVATOR KOMATSU PC210",
      "category": "EXCAVATOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1472",
      "type": "EC750DL",
      "brand": "Excavator Volvo EC750DL",
      "category": "EXCAVATOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1473",
      "type": "EC750DL",
      "brand": "Excavator Volvo EC750DL",
      "category": "EXCAVATOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HTD1277",
      "type": "D85E",
      "brand": "KOMATSU D85E",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HST1172",
      "type": "FH16",
      "brand": "SERVIS TRUCK VOLVO FH16",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1068",
      "type": "SV526D",
      "brand": "COMPACTOR SAKAI SV526D",
      "category": "COMPACTOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1069",
      "type": "SV526D",
      "brand": "COMPACTOR SAKAI SV526D",
      "category": "COMPACTOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HCM1070",
      "type": "SV526D",
      "brand": "COMPACTOR SAKAI SV526D",
      "category": "COMPACTOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL1045",
      "type": "L350H",
      "brand": "WHEEL LOADER VOLVO L350H",
      "category": "LOADER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HWL5043",
      "type": "L350H",
      "brand": "WHEEL LOADER VOLVO L350H",
      "category": "LOADER",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2152",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2170",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2171",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2172",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2179",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2181",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2182",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2197",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2198",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HFT1171",
      "type": "2528",
      "brand": "MERCY AXOR 2528 C",
      "category": "FUEL TRUCK",
      "owner": "PT. PUTRA PERKASA ABADI",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HFT1171",
      "type": "2528",
      "brand": "MERCY AXOR 2528 C",
      "category": "FUEL TRUCK",
      "owner": "PT. PUTRA PERKASA ABADI",
      "usage": "SUPPORT",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX5032",
      "type": "EX2600",
      "brand": "EXCAVATOR EX2600",
      "category": "EXCAVATOR",
      "owner": "DARMA HENWA",
      "usage": "OB DIGGER",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2341",
      "type": "HD785",
      "brand": "KOMATSU HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "OB TRUCK",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2403",
      "type": "HD785",
      "brand": "KOMATSU HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "OB TRUCK",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT2405",
      "type": "HD785",
      "brand": "KOMATSU HD785-7",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "OB TRUCK",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TD1196",
      "type": "D8T",
      "brand": "CAT D8T",
      "category": "Dozer dan Grader",
      "owner": "DARMA HENWA",
      "usage": "Dozer dan Grader",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DR2028",
      "type": "DM30XC",
      "brand": "ATLAS COPCO EPIROC DM30XC",
      "category": "Support Mining",
      "owner": "EPIROC SHOUTERN ASIA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1448",
      "type": "SY215C",
      "brand": "SANY SY215C",
      "category": "Support Mining",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1449",
      "type": "SY215C",
      "brand": "SANY SY215C",
      "category": "Support Mining",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "EX1450",
      "type": "SY215C",
      "brand": "SANY SY215C",
      "category": "Support Mining",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5511",
      "type": "7019",
      "brand": "MITSUBISHI S-N 7019 UE",
      "category": "Support Sarana",
      "owner": "KOPERASI KARYAWAN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5510",
      "type": "FE84GBC",
      "brand": "COLT DIESEL FE84GBC",
      "category": "BACKCHARGE",
      "owner": "KOPERASI KARYAWAN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5512",
      "type": "FE84GBC",
      "brand": "COLT DIESEL FE84GBC",
      "category": "BACKCHARGE",
      "owner": "KOPERASI KARYAWAN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5514",
      "type": "FE84GBC",
      "brand": "COLT DIESEL FE84GBC",
      "category": "BACKCHARGE",
      "owner": "KOPERASI KARYAWAN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5515",
      "type": "FE84GBC",
      "brand": "COLT DIESEL FE84GBC",
      "category": "BACKCHARGE",
      "owner": "KOPERASI KARYAWAN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5516",
      "type": "FE84GBC",
      "brand": "COLT DIESEL FE84GBC",
      "category": "BACKCHARGE",
      "owner": "KOPERASI KARYAWAN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5506",
      "type": "FE84BC",
      "brand": "MITSUBISHI FE84BC",
      "category": "Support Sarana",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5507",
      "type": "FE84BC",
      "brand": "MITSUBISHI FE84BC",
      "category": "Support Sarana",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5513",
      "type": "FE84BC",
      "brand": "MITSUBISHI FE84BC",
      "category": "Support Sarana",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5524",
      "type": "FE84BC",
      "brand": "MITSUBISHI FE84BC",
      "category": "Support Sarana",
      "owner": "OELANGAN KARYA ETAM",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5489",
      "type": "FE84G",
      "brand": "MITSUBISHI COLT DIESEL FE84G",
      "category": "Support Sarana",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5491",
      "type": "FE84G",
      "brand": "MITSUBISHI COLT DIESEL FE84G",
      "category": "Support Sarana",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5487",
      "type": "FE84BC",
      "brand": "MITSUBISHI FE84BC",
      "category": "Support Sarana",
      "owner": "RIZKIA PUTRI MEMBANGUN",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2259",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DIRE PRATAMA SERVICE",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2799",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LV2905",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "DARMA HENWA",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "FL1032",
      "type": "PFD30",
      "brand": "KOMATSU FORKLIFT PFD30",
      "category": "Support Sarana",
      "owner": "DARMA HENWA",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "GS1262",
      "type": "8KVA",
      "brand": "YANMAR 8 KVA",
      "category": "Support Sarana",
      "owner": "DARMA HENWA",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WL4015",
      "type": "980G",
      "brand": "CAT 980G",
      "category": "Support Sarana",
      "owner": "DARMA HENWA",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2138",
      "type": "800AMP",
      "brand": "MILLER 800AMP",
      "category": "Support Sarana",
      "owner": "DARMA HENWA",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "WM2118",
      "type": "SC501",
      "brand": "INDIA SC501",
      "category": "Support Sarana",
      "owner": "DARMA HENWA",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3372",
      "type": "CD225",
      "brand": "WATER PUMP GODWIN CD225",
      "category": "PUMP",
      "owner": "COATES HIRE INDONESIA",
      "usage": "PUMP",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2151",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3365",
      "type": "MLT420",
      "brand": "MULTIFLO MLT420",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "PUMP",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3343",
      "type": "HH200",
      "brand": "WATER PUMP METSO HH200",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "PUMP",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3344",
      "type": "HH200",
      "brand": "WATER PUMP METSO HH200",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "PUMP",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3345",
      "type": "HH200",
      "brand": "WATER PUMP METSO HH200",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "PUMP",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPU3346",
      "type": "HH200",
      "brand": "WATER PUMP METSO HH200",
      "category": "PUMP",
      "owner": "PETROLINDO MEGAH PERKASA",
      "usage": "PUMP",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV2247",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "SUKSES INTI SOLUSINDO",
      "usage": "Support Sarana",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1488",
      "type": "320D",
      "brand": "CAT 320D-2",
      "category": "Support Mining",
      "owner": "PANGGON KARYATAMA MULIA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LU263",
      "type": "",
      "brand": "TOYOTA HILUX 2.4G",
      "category": "KPC",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LU302",
      "type": "LN167R",
      "brand": "LN167R",
      "category": "KPC",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TRAC607",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LR2150",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LR156",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LR443",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LR461",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LR5069",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "K3PC55",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "V336",
      "type": "GS",
      "brand": "GS KPC",
      "category": "KPC",
      "owner": "KALTIM PRIMA COAL",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "AL47",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "ALTRAK 1978",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HX511",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "HEXINDO ADIPERKASA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "UT310",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "UNITED TRACTORS",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "UT348",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "UNITED TRACTORS",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU122",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "TRAKINDO UTAMA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "TU124",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "TRAKINDO UTAMA",
      "usage": "BACKCHARGE",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "KBE201",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM BANUA ETAM",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "KBE203",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM BANUA ETAM",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "KBE209",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM BANUA ETAM",
      "usage": "KPC",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HLV5492",
      "type": "FE84G",
      "brand": "MITSUBISHI COLT DIESEL FE84G",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9067",
      "type": "FH16",
      "brand": "VOLVO FH16",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HPM9068",
      "type": "FH16",
      "brand": "VOLVO FH16",
      "category": "COAL HAULING",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1527",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1529",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1530",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1531",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1532",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1533",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1534",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1535",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1536",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1537",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1540",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1541",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1546",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1547",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1548",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1549",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1550",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "DT1551",
      "type": "P360",
      "brand": "DUMP TRUCK SCANIA P360",
      "category": "DUMP TRUCK",
      "owner": "DARMA HENWA",
      "usage": "Support Mining",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "LR4106",
      "type": "HDX",
      "brand": "MITSUBISHI TRITON HDX",
      "category": "LIGHT VEHICLE",
      "owner": "KALTIM PRIMA COAL",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1487",
      "type": "EW205D",
      "brand": "Wheel Excavator Volvo EW205D",
      "category": "EXCAVATOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  },
  {
      "unit_no": "HEX1470",
      "type": "EC750DL",
      "brand": "Excavator Volvo EC750DL",
      "category": "EXCAVATOR",
      "owner": "PT. Mandiri Herindo Adiperkasa",
      "usage": "COAL HAULING",
      "site": "BCP",
      "creation_by": "TM"
  }  
  ]);
};
