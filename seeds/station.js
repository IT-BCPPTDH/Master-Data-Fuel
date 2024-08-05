/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('master_station').del()
    await knex('master_station').insert([
        {
            "fuel_station_name": "T112",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": 110000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "TK1037-1",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": 50000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "TK1036-1",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": 50000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "TK1047",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": 5000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "FT1116",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 40000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "FT1101",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 20000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "FT1102",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 20000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "FT1146",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 16000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "FT1108",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 20000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "FT1114",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 20000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "FT1151",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 16000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "TK1036-2",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": 50000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "T112-2",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": 110000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "BEJM369",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 5000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "TK1035",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": "26000",
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "PT. DIRE",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 5000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "PT. MTN",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": "32000",
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "TK1037 MACFILL",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": 20000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "FT1154",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 16000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "HFT1164",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 16000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "HFT1120",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": "1000",
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "TK1037-2",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": 50000,
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "TK1033",
            "fuel_station_type": "Fuel Station",
            "fuel_capacity": "25000",
            "fuel_nozel": 1
        },
        {
            "fuel_station_name": "HFT1171",
            "fuel_station_type": "Fuel Truck",
            "fuel_capacity": 20000,
            "fuel_nozel": 1
        }
    ]);
  };
  