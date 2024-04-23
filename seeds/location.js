/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_location').del()
  await knex('master_location').insert([
    {
      "location_code": "PANEL1",
      "location_name": "Panel 1",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PANEL2",
      "location_name": "Panel 2",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "JRK",
      "location_name": "Jeruk Pit A",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "RUA",
      "location_name": "Rompad Utara PITA",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "BIMA",
      "location_name": "Bima",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "EN90",
      "location_name": "Ext North 90",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "B60",
      "location_name": "BO4 60",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "EN30",
      "location_name": "Ext North 30",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "B110",
      "location_name": "Bima 110",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "IP",
      "location_name": "INPIT",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "MN",
      "location_name": "Menur",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "B100",
      "location_name": "Bima 100",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "R01",
      "location_name": "Rompad B01",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PITB1",
      "location_name": "PIT B",
      "location_type": "Hauling Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "SMK",
      "location_name": "Bukit Semangka",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PIT A",
      "location_name": "PIT A",
      "location_type": "PIT",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "BCP",
      "location_name": "Bengalon Coal Project",
      "location_type": "Project",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PIT B",
      "location_name": "PIT B",
      "location_type": "PIT",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PORT",
      "location_name": "Lubuk Tutung",
      "location_type": "Hauling Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PITA1",
      "location_name": "Pit A South Rompad",
      "location_type": "Hauling Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "OTR",
      "location_name": "Others",
      "location_type": "Others",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "MWR",
      "location_name": "Mawar",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "Arjuna",
      "location_name": "Arjuna Besar",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "Dump Ex",
      "location_name": "Extention",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "P42",
      "location_name": "Dump P42",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "BWH RMPD",
      "location_name": "Bawah Rompad Pit B",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "AB50",
      "location_name": "Arjuna Besar 50",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "B40",
      "location_name": "Bima 40",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "A60",
      "location_name": "Arjuna 60",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PNL4",
      "location_name": "Panel 4",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PNL3",
      "location_name": "Panel 3",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "RMPD02",
      "location_name": "Rompad B02",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PROJECT",
      "location_name": "Project",
      "location_type": "PIT",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "SC2",
      "location_name": "Seam C2",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "STS42",
      "location_name": "Stock TopSoil B42",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "RP",
      "location_name": "Rompad",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "CB",
      "location_name": "CUTBACK",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "test",
      "location_name": "darma",
      "location_type": "Hauling Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "ENRL110",
      "location_name": "Ext North RL110",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "B04",
      "location_name": "B04",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "CH22",
      "location_name": "CH22",
      "location_type": "Project",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "BSA",
      "location_name": "Batress PIT A",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "FST",
      "location_name": "Fuel Station Panel 2",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "RL50",
      "location_name": "Bima RL50",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "C3",
      "location_name": "CREEK 3",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "BRL90",
      "location_name": "Bima RL90",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "EN50",
      "location_name": "Ext North 50",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "B100",
      "location_name": "BIMA 100",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "ARL 80",
      "location_name": "Arjuna RL 80",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "ARL90",
      "location_name": "ARJUNA RL90",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "ARL70",
      "location_name": "ARJUNA RL70",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "IRL50",
      "location_name": "Inpit RL50",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "BRL30",
      "location_name": "Bima RL30",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "IP2",
      "location_name": "IPD Panel 2",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PIT C",
      "location_name": "PIT C",
      "location_type": "PIT",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "P2A",
      "location_name": "Panel 2 Atas",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "P2T",
      "location_name": "Panel 2 Tengah",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "ABLR",
      "location_name": "ABLR",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "IPD",
      "location_name": "IPD Panel 4",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "B03",
      "location_name": "B03 Dump",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "IPD1",
      "location_name": "Inpit Panel 1",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "IPD2",
      "location_name": "IPD Panel 2",
      "location_type": "Dumping",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "P1A",
      "location_name": "Panel 1 Atas",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "P1B",
      "location_name": "Panel 1 Bawah",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "P1T",
      "location_name": "Panel 1 Tengah",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "P2B",
      "location_name": "Panel 2 Bawah",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "P4T",
      "location_name": "Panel 4 Tengah",
      "location_type": "Loading",
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "location_code": "PITC",
      "location_name": "PIT C",
      "location_type": "Hauling Loading",
      "site": "BCP",
      "creation_by": "TM"
    }
   ]);
};
