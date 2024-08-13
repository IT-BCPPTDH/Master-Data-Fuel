/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('master_unit_banlaws').del()
    await knex('master_unit_banlaws').insert([
        {
            "unit_input" : "1116",
            "unit_elipse" : "FT1116",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI1677",
            "unit_banlaw" : "HS1116"
        },
        {
            "unit_input" : "1101",
            "unit_elipse" : "FT1101",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI1814",
            "unit_banlaw" : "ST1101"
        },
        {
            "unit_input" : "4008",
            "unit_elipse" : "RFT4008",
            "owner" : "PT. Madhani Talata Nusantara",
            "pin_banlaw" : "FI1662",
            "unit_banlaw" : "RT4008"
        },
        {
            "unit_input" : "3002",
            "unit_elipse" : "RFT3002",
            "owner" : "PT. Madhani Talata Nusantara",
            "pin_banlaw" : "FI1617",
            "unit_banlaw" : "RTF3002"
        },
        {
            "unit_input" : "3007",
            "unit_elipse" : "RFT3007",
            "owner" : "PT. Madhani Talata Nusantara",
            "pin_banlaw" : "FI1889",
            "unit_banlaw" : "RFT3007 - CMD BENGALON"
        },
        {
            "unit_input" : "4016",
            "unit_elipse" : "RFT4016",
            "owner" : "PT. Madhani Talata Nusantara",
            "pin_banlaw" : "FI1445",
            "unit_banlaw" : "RT4016"
        },
        {
            "unit_input" : "1102",
            "unit_elipse" : "FT1102",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI1668",
            "unit_banlaw" : "ST1102"
        },
        {
            "unit_input" : "20107",
            "unit_elipse" : "20107",
            "owner" : "PT. Benua Etam Jaya Mandiri",
            "pin_banlaw" : "FI1813",
            "unit_banlaw" : "HS1102"
        },
        {
            "unit_input" : "1108",
            "unit_elipse" : "FT1108",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI1664",
            "unit_banlaw" : "HS1108"
        },
        {
            "unit_input" : "1114",
            "unit_elipse" : "FT1114",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI1446",
            "unit_banlaw" : "HS1114"
        },
        {
            "unit_input" : "1146",
            "unit_elipse" : "FT1146",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "",
            "unit_banlaw" : "FT1146"
        },
        {
            "unit_input" : "1151",
            "unit_elipse" : "FT1151",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "",
            "unit_banlaw" : "FT1151"
        },
        {
            "unit_input" : "1070",
            "unit_elipse" : "FT1070",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI1810",
            "unit_banlaw" : "ST1070"
        },
        {
            "unit_input" : "1091",
            "unit_elipse" : "FT1091",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "",
            "unit_banlaw" : "ST1091"
        },
        {
            "unit_input" : "1102H",
            "unit_elipse" : "HST1102",
            "owner" : "PT. Benua Etam Jaya Mandiri",
            "pin_banlaw" : "FI1813",
            "unit_banlaw" : "HS1102"
        },
        {
            "unit_input" : "2585",
            "unit_elipse" : "HLV2585",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "HLV2585",
            "unit_banlaw" : "HLV2585"
        },
        {
            "unit_input" : "4277",
            "unit_elipse" : "HLV4277",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI1557",
            "unit_banlaw" : "HLV4277"
        },
        {
            "unit_input" : "369",
            "unit_elipse" : "BEJM369",
            "owner" : "PT. Benua Etam Jaya Mandiri",
            "pin_banlaw" : "FI1972",
            "unit_banlaw" : "BEJM369"
        },
        {
            "unit_input" : "RT010",
            "unit_elipse" : "RT010",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "RT010",
            "unit_banlaw" : "RT010"
        },
        {
            "unit_input" : "LT224",
            "unit_elipse" : "LT224",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "LT224",
            "unit_banlaw" : "LT224"
        },
        {
            "unit_input" : "2927",
            "unit_elipse" : "HLV2927",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI2159",
            "unit_banlaw" : "HLV2927"
        },
        {
            "unit_input" : "4302",
            "unit_elipse" : "HLV4302",
            "owner" : "PT. Darma Henwa Tbk",
            "pin_banlaw" : "FI2160",
            "unit_banlaw" : "HLV4302"
        }
    ]);
  };
  