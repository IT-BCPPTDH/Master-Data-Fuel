/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_prod_budget').del()
  await knex('master_prod_budget').insert([
    {
      "model": " EX-R996 ",
      "digger": " HEX8019 ",
      "ob": 1832,
      "coal": 1905.47,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R996 ",
      "digger": " HEX8020 ",
      "ob": 1832,
      "coal": 1905.47,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R996 ",
      "digger": " HEX8023 ",
      "ob": 1832,
      "coal": 1905.47,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R996 ",
      "digger": " HEX8024 ",
      "ob": 1832,
      "coal": 1905.47,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R996 ",
      "digger": " HEX8025 ",
      "ob": 1832,
      "coal": 1905.47,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R996 ",
      "digger": " HEX8021 ",
      "ob": 1832,
      "coal": 1905.47,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R996 ",
      "digger": " HEX8022 ",
      "ob": 1832,
      "coal": 1905.47,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-EX5500 ",
      "digger": " EX7007 ",
      "ob": 1550,
      "coal": 1622.4,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-EX3600 ",
      "digger": " EX6008 ",
      "ob": 1250,
      "coal": 1362.4,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-EX3600 ",
      "digger": " EX6009 ",
      "ob": 1250,
      "coal": 1362.4,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-EX3600 ",
      "digger": " EX6010 ",
      "ob": 1250,
      "coal": 1362.4,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R9350 ",
      "digger": " HEX5047 ",
      "ob": 1110,
      "coal": 1154.4,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R9350 ",
      "digger": " EX5034 ",
      "ob": 1110,
      "coal": 1154.4,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R9350 ",
      "digger": " EX5035 ",
      "ob": 1110,
      "coal": 1154.4,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-EX2600 ",
      "digger": " EX5033 ",
      "ob": 950,
      "coal": 1050.4,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-PC2000 ",
      "digger": " EX4024 ",
      "ob": 740,
      "coal": 769.6,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-PC2000 ",
      "digger": " EX4025 ",
      "ob": 740,
      "coal": 769.6,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R9100 ",
      "digger": " EX3001 ",
      "ob": 294,
      "coal": 509.6,
      "ts": 500,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-R9100 ",
      "digger": " EX3002 ",
      "ob": 490,
      "coal": 509.6,
      "ts": 500,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-PC1250 ",
      "digger": " EX3076 ",
      "ob": 430,
      "coal": 430,
      "ts": 447.2,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " EX-PC1250 ",
      "digger": " EX3075 ",
      "ob": 430,
      "coal": 430,
      "ts": 447.2,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX2048 ",
      "ob": 250,
      "coal": 260,
      "ts": 150,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX2047 ",
      "ob": 250,
      "coal": 260,
      "ts": 150,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX1292 ",
      "ob": 120,
      "coal": 124.8,
      "ts": 150,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX2049 ",
      "ob": 250,
      "coal": 260,
      "ts": 150,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX1284 ",
      "ob": null,
      "coal": 156,
      "ts": 170,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX1255 ",
      "ob": null,
      "coal": 156,
      "ts": 170,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX1277 ",
      "ob": 200,
      "coal": 187.2,
      "ts": 180,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX1289 ",
      "ob": 200,
      "coal": 187.2,
      "ts": 180,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX1283 ",
      "ob": null,
      "coal": 156,
      "ts": 170,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " SY500 ",
      "digger": " EX1341 ",
      "ob": 220,
      "coal": 286,
      "ts": 220,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " SY500 ",
      "digger": " EX1338 ",
      "ob": 256,
      "coal": 286,
      "ts": 220,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " SY200 ",
      "digger": " EX1317 ",
      "ob": 120,
      "coal": 124.8,
      "ts": 100,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX1251 ",
      "ob": 200,
      "coal": 156,
      "ts": 170,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": " HEX1392 ",
      "ob": 120,
      "coal": 124.8,
      "ts": 100,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " SY200 ",
      "digger": "EX1318",
      "ob": 120,
      "coal": 124.8,
      "ts": 100,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "HEX1248",
      "ob": 200,
      "coal": 156,
      "ts": 170,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "HEX1291",
      "ob": 120,
      "coal": 125,
      "ts": 150,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "HEX1228",
      "ob": 120,
      "coal": 124.8,
      "ts": 100,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "EX1320",
      "ob": 120,
      "coal": 124.8,
      "ts": 124.8,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "EX1319",
      "ob": 120,
      "coal": 124.8,
      "ts": 100,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " SY500 ",
      "digger": "EX1421",
      "ob": 256,
      "coal": 283,
      "ts": 220,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "SY200",
      "digger": "EX1316",
      "ob": 120,
      "coal": 123.8,
      "ts": 100,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": " SY500 ",
      "digger": "EX2050",
      "ob": 256,
      "coal": 286,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "HEX1482",
      "ob": 256,
      "coal": null,
      "ts": 256,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "EX1315",
      "ob": 120,
      "coal": 123.8,
      "ts": null,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "EX1230",
      "ob": 120,
      "coal": 124.8,
      "ts": 100,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "EX1435",
      "ob": null,
      "coal": null,
      "ts": 220,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "EX1482",
      "ob": null,
      "coal": null,
      "ts": 220,
      "site": "BCP",
      "creation_by": "TM"
    },
    {
      "model": "",
      "digger": "EX1436",
      "ob": null,
      "coal": null,
      "ts": 220,
      "site": "BCP",
      "creation_by": "TM"
    }
   ]);
};
