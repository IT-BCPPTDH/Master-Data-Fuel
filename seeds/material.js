/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_material').del()
  await knex('master_material').insert([
    {
      "material_name": "C",
      "material_code": "Coal Blasted (not used)",
      "material_code_prod": "C",
      "treatment_factor": 1,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "OBNP",
      "material_code": "NP OB",
      "material_code_prod": "NP",
      "treatment_factor": 1,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "OB",
      "material_code": "OB Blast",
      "material_code_prod": "OB",
      "treatment_factor": 1,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "OBWM",
      "material_code": "Mud Liquid (40%)",
      "material_code_prod": "OB",
      "treatment_factor": 0.4,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "OBDM",
      "material_code": "Mud Solid (60%)",
      "material_code_prod": "OB",
      "treatment_factor": 0.6,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "RM",
      "material_code": "Red Mudstone (not used)",
      "material_code_prod": "OB",
      "treatment_factor": 0.8,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "OT",
      "material_code": "Other Material (not used)",
      "material_code_prod": "NP",
      "treatment_factor": 0.8,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "OBHM",
      "material_code": "OB Hard Material (not used)",
      "material_code_prod": "OB",
      "treatment_factor": 0.75,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "CFD",
      "material_code": "Coal",
      "material_code_prod": "C",
      "treatment_factor": 0.9,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "CNP",
      "material_code": "NP Coal",
      "material_code_prod": "NP",
      "treatment_factor": 1,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "TSO",
      "material_code": "TS Outpit",
      "material_code_prod": "TS",
      "treatment_factor": 0.8,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "TSNP",
      "material_code": "TS Rehandling",
      "material_code_prod": "NP",
      "treatment_factor": 0.8,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "TS",
      "material_code": "TS Inpit",
      "material_code_prod": "TS",
      "treatment_factor": 1,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    },
    {
      "material_name": "OBFD",
      "material_code": "OB Freedig",
      "material_code_prod": "OB",
      "treatment_factor": 1,
      "site": "BCP",
      "creation_by": "TM",
      "isDelete": false
    }
   ]);
};
