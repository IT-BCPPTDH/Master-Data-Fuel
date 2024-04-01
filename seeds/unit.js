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
      "owner": "DH"
    },
    {
      "unit_no": "EX6008",
      "type": "EX3600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX6009",
      "type": "EX3600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX6010",
      "type": "EX3600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX5034",
      "type": "R9350",
      "brand": "Liebherr",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX5035",
      "type": "R9350",
      "brand": "Liebherr",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX5033",
      "type": "EX2600",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX4024",
      "type": "PC2000",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX4025",
      "type": "PC2000",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX3075",
      "type": "PC1250",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX3076",
      "type": "PC1250",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX3001",
      "type": "R9100",
      "brand": "Liebherr",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX3002",
      "type": "R9100",
      "brand": "Liebherr",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX2050",
      "type": "SY750H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1338",
      "type": "SY500H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1341",
      "type": "SY500H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1421",
      "type": "SY500H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1435",
      "type": "SY365H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1436",
      "type": "SY365H",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1315",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1316",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1317",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1318",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1319",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1320",
      "type": "SY215",
      "brand": "Sany",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1136",
      "type": "ZX210",
      "brand": "Hitachi",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1230",
      "type": "PC400",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1243",
      "type": "SH480",
      "brand": "Sumitomo",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "EX1245",
      "type": "SH480",
      "brand": "Sumitomo",
      "category": "Excavator",
      "owner": "DH"
    },
    {
      "unit_no": "DT4017",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4018",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4019",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4020",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4021",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4022",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4023",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4025",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4026",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4027",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4031",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4034",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4035",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4036",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4037",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4038",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4039",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4041",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4042",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4043",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4044",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4045",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT4046",
      "type": "730E",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3154",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3155",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3162",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3168",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3239",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3240",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3241",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3243",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3244",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3245",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3246",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3248",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3249",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3250",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3251",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3252",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3253",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3254",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3255",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3256",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3257",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3258",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3259",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3260",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3261",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3262",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3263",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3264",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3265",
      "type": "HD1500",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3266",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3267",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3268",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3269",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3270",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3271",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3272",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3273",
      "type": "75131",
      "brand": "Belaz",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2439",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2440",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2442",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2443",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2444",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2445",
      "type": "HD785",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2336",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2348",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2349",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2350",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2353",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2354",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2382",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2411",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2413",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2414",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2446",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2447",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2448",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2449",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2451",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2452",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2453",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2454",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2456",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2457",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2459",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT2460",
      "type": "HD465",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3211",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3217",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3218",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3221",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3222",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT3223",
      "type": "A40",
      "brand": "Volvo",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1320",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1321",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1322",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1325",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1326",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1464",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1465",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1466",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1469",
      "type": "HM400",
      "brand": "Komatsu",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1309",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1310",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1311",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1313",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1317",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1334",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1335",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1226",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1178",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DT1170",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "DH"
    },
    {
      "unit_no": "TD1074",
      "type": "D65",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1115",
      "type": "D155",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1163",
      "type": "D155",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1186",
      "type": "D155",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1194",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1195",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1197",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1207",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1208",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD1209",
      "type": "D8T",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD3114",
      "type": "D375",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD3116",
      "type": "D375",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "TD3130",
      "type": "D375",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "DH"
    },
    {
      "unit_no": "GR3039",
      "type": "14M",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "GR3048",
      "type": "14M",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "GR3049",
      "type": "14M",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "GR3080",
      "type": "STG230C",
      "brand": "Sany",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "GR4069",
      "type": "GD825",
      "brand": "Komatsu",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "GR4071",
      "type": "GD825",
      "brand": "Komatsu",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "GR4081",
      "type": "GD825",
      "brand": "Komatsu",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "GR4086",
      "type": "18M",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "GR5022",
      "type": "24H",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "DH"
    },
    {
      "unit_no": "WT2069",
      "type": "HD785 WT",
      "brand": "Komatsu",
      "category": "Water Truck",
      "owner": "DH"
    },
    {
      "unit_no": "WT3025",
      "type": "777D WT",
      "brand": "Caterpillar",
      "category": "Water Truck",
      "owner": "DH"
    },
    {
      "unit_no": "WT3026",
      "type": "777A WT",
      "brand": "Caterpillar",
      "category": "Water Truck",
      "owner": "DH"
    },
    {
      "unit_no": "WT3027",
      "type": "HD785 WT",
      "brand": "Komatsu",
      "category": "Water Truck",
      "owner": "DH"
    },
    {
      "unit_no": "DR2007",
      "type": "D245",
      "brand": "Drilltech",
      "category": "Drill",
      "owner": "DH"
    },
    {
      "unit_no": "DR3008",
      "type": "D55SP",
      "brand": "Drilltech",
      "category": "Drill",
      "owner": "DH"
    },
    {
      "unit_no": "DR3016",
      "type": "D50KS",
      "brand": "Drilltech",
      "category": "Drill",
      "owner": "DH"
    },
    {
      "unit_no": "PU3109",
      "type": "28MSS",
      "brand": "Multiflow",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "PU3115",
      "type": "MF385",
      "brand": "Multiflow",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "PU3217",
      "type": "MF420",
      "brand": "Multiflow",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "PU3218",
      "type": "MF420",
      "brand": "Multiflow",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "PU3305",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "PU3306",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "PU3307",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "PU3308",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "PU3309",
      "type": "MVCP150",
      "brand": "Sykes",
      "category": "Water Pump",
      "owner": "DH"
    },
    {
      "unit_no": "HEX1231",
      "type": "320",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1242",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1250",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1252",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1255",
      "type": "PC300",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1265",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1283",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1284",
      "type": "PC300",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1398",
      "type": "PC300",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HEX1420",
      "type": "PC300",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1017",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1018",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1019",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1020",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1492",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1493",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1494",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1636",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1637",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1638",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1639",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1647",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1648",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1649",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1650",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1924",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1925",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1926",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1927",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1928",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1961",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1962",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDT1963",
      "type": "FM260JD",
      "brand": "Hino",
      "category": "Dump Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HTD1085",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM"
    },
    {
      "unit_no": "HTD1160",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM"
    },
    {
      "unit_no": "HTD1167",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM"
    },
    {
      "unit_no": "HTD1171",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM"
    },
    {
      "unit_no": "HTD1206",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "BEJM"
    },
    {
      "unit_no": "HGR2022",
      "type": "120NG",
      "brand": "Caterpillar",
      "category": "Grader",
      "owner": "BEJM"
    },
    {
      "unit_no": "HCM1045",
      "type": "BW211D",
      "brand": "Bomag",
      "category": "Compactor",
      "owner": "BEJM"
    },
    {
      "unit_no": "HWC1033",
      "type": "CWM330",
      "brand": "Nissan",
      "category": "Water Truck",
      "owner": "BEJM"
    },
    {
      "unit_no": "HDR4019",
      "type": "MD6290",
      "brand": "CATERPILLAR",
      "category": "Drill",
      "owner": "NRK"
    },
    {
      "unit_no": "HDR4020",
      "type": "SKF07",
      "brand": "TEREX",
      "category": "Drill",
      "owner": "NRK"
    },
    {
      "unit_no": "HDR2023",
      "type": "D245",
      "brand": "SANDVIK",
      "category": "Drill",
      "owner": "NRK"
    },
    {
      "unit_no": "HCM1047",
      "type": "BW211D",
      "brand": "Bomag",
      "category": "Compact",
      "owner": "OKE"
    },
    {
      "unit_no": "HEX1251",
      "type": "330",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "OKE"
    },
    {
      "unit_no": "HEX1271",
      "type": "320",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "OKE"
    },
    {
      "unit_no": "HEX1277",
      "type": "330",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "OKE"
    },
    {
      "unit_no": "HEX1228",
      "type": "320",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "OKE"
    },
    {
      "unit_no": "HEX1392",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "OKE"
    },
    {
      "unit_no": "HTD1168",
      "type": "D7G",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "OKE"
    },
    {
      "unit_no": "HTD1174",
      "type": "D6R",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "OKE"
    },
    {
      "unit_no": "HTD1178",
      "type": "D6R",
      "brand": "Caterpillar",
      "category": "Track Dozer",
      "owner": "OKE"
    },
    {
      "unit_no": "HTD1126",
      "type": "D85SS",
      "brand": "Komatsu",
      "category": "Track Dozer",
      "owner": "OKE"
    },
    {
      "unit_no": "HEX1482",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "OKE"
    },
    {
      "unit_no": "HEX1261",
      "type": "320",
      "brand": "Caterpillar",
      "category": "Excavator",
      "owner": "PK"
    },
    {
      "unit_no": "HEX1424",
      "type": "PC200",
      "brand": "Komatsu",
      "category": "Excavator",
      "owner": "PK"
    },
    {
      "unit_no": "HPU3347",
      "type": "J750",
      "brand": "Boudouin",
      "category": "Water Pump",
      "owner": "JMI"
    },
    {
      "unit_no": "HPU3267",
      "type": "J750",
      "brand": "Boudouin",
      "category": "Water Pump",
      "owner": "JMI"
    },
    {
      "unit_no": "HPU3272",
      "type": "J600SP",
      "brand": "JRM",
      "category": "Water Pump",
      "owner": "JMI"
    },
    {
      "unit_no": "HPU3273",
      "type": "MLT385",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "JMI"
    },
    {
      "unit_no": "HPU3242",
      "type": "MLT420",
      "brand": "Caterpillar",
      "category": "Water Pump",
      "owner": "PMP"
    },
    {
      "unit_no": "HPU3343",
      "type": "HH200",
      "brand": "Metso ",
      "category": "Water Pump",
      "owner": "PMP"
    },
    {
      "unit_no": "HPU3344",
      "type": "HH200",
      "brand": "Metso ",
      "category": "Water Pump",
      "owner": "PMP"
    },
    {
      "unit_no": "HPU3345",
      "type": "HH200",
      "brand": "Metso ",
      "category": "Water Pump",
      "owner": "PMP"
    },
    {
      "unit_no": "HPU3346",
      "type": "HH200",
      "brand": "Metso ",
      "category": "Water Pump",
      "owner": "PMP"
    },
    {
      "unit_no": "HPU3292",
      "type": "MLT420",
      "brand": "Caterpillar",
      "category": "Water Pump",
      "owner": "SIS"
    },
    {
      "unit_no": "HPU3301",
      "type": "MLT420",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "SIS"
    },
    {
      "unit_no": "HPU3302",
      "type": "MLT420",
      "brand": "Multiflo",
      "category": "Water Pump",
      "owner": "SIS"
    }
  ]);
};
