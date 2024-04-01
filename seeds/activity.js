exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_activity').del()
  await knex('master_activity').insert([
    {
      "activity_name": "Breakdown",
      "delay_description": "Breakdown",
      "code": "B1"
    },
    {
      "activity_name": "PM Service",
      "delay_description": "Breakdown",
      "code": "B2"
    },
    {
      "activity_name": "Rain",
      "delay_description": "Idle",
      "code": "S1"
    },
    {
      "activity_name": "Slippery",
      "delay_description": "Idle",
      "code": "S2"
    },
    {
      "activity_name": "Safety Talk",
      "delay_description": "Idle",
      "code": "S3"
    },
    {
      "activity_name": "Shift Change/Prestart Check",
      "delay_description": "Idle",
      "code": "S4"
    },
    {
      "activity_name": "Rest and Meal",
      "delay_description": "Idle",
      "code": "S5"
    },
    {
      "activity_name": "Daily Pray",
      "delay_description": "Idle",
      "code": "S6"
    },
    {
      "activity_name": "Blasting",
      "delay_description": "Idle",
      "code": "S7"
    },
    {
      "activity_name": "Refuelling/Greasing",
      "delay_description": "Idle",
      "code": "S8"
    },
    {
      "activity_name": "Survey/Sample",
      "delay_description": "Idle",
      "code": "S9"
    },
    {
      "activity_name": "Safety Fatique Test",
      "delay_description": "Idle",
      "code": "S10"
    },
    {
      "activity_name": "Friday Pray",
      "delay_description": "Idle",
      "code": "S11"
    },
    {
      "activity_name": "Sunday Pray",
      "delay_description": "Idle",
      "code": "S12"
    },
    {
      "activity_name": "Fasting",
      "delay_description": "Idle",
      "code": "S13"
    },
    {
      "activity_name": "Foggy",
      "delay_description": "Idle",
      "code": "S14"
    },
    {
      "activity_name": "Public Holiday",
      "delay_description": "Idle",
      "code": "S15"
    },
    {
      "activity_name": "No Operator",
      "delay_description": "Idle",
      "code": "D1"
    },
    {
      "activity_name": "Operator Fatique",
      "delay_description": "Idle",
      "code": "D2"
    },
    {
      "activity_name": "Waiting Operator",
      "delay_description": "Idle",
      "code": "D3"
    },
    {
      "activity_name": "No Truck",
      "delay_description": "Idle",
      "code": "D4"
    },
    {
      "activity_name": "No Equipment Support",
      "delay_description": "Idle",
      "code": "D5"
    },
    {
      "activity_name": "Lighting Plant Problem",
      "delay_description": "Idle",
      "code": "D6"
    },
    {
      "activity_name": "Washing Equipment",
      "delay_description": "Idle",
      "code": "D7"
    },
    {
      "activity_name": "Front Maintanance",
      "delay_description": "Idle",
      "code": "D8"
    },
    {
      "activity_name": "Road Maintanance",
      "delay_description": "Idle",
      "code": "D9"
    },
    {
      "activity_name": "Disposal Maintanance",
      "delay_description": "Idle",
      "code": "D10"
    },
    {
      "activity_name": "Stokcpile Full/Crusher Maint.",
      "delay_description": "Idle",
      "code": "D11"
    },
    {
      "activity_name": "No Working Area",
      "delay_description": "Idle",
      "code": "D12"
    },
    {
      "activity_name": "Blockade",
      "delay_description": "Idle",
      "code": "D13"
    },
    {
      "activity_name": "Dust",
      "delay_description": "Idle",
      "code": "D14"
    },
    {
      "activity_name": "Standby Accident",
      "delay_description": "Idle",
      "code": "D15"
    },
    {
      "activity_name": "Stop Loading DT Refuelling",
      "delay_description": "Idle",
      "code": "D16"
    },
    {
      "activity_name": "No Stock/Material",
      "delay_description": "Idle",
      "code": "D17"
    },
    {
      "activity_name": "No Job",
      "delay_description": "Idle",
      "code": "D18"
    },
    {
      "activity_name": "Others",
      "delay_description": "Idle",
      "code": "D19"
    },
    {
      "activity_name": "Toilet",
      "delay_description": "Idle",
      "code": "D20"
    },
    {
      "activity_name": "Queuing",
      "delay_description": "Idle",
      "code": "D21"
    },
    {
      "activity_name": "No Digger",
      "delay_description": "Idle",
      "code": "D22"
    },
    {
      "activity_name": "Tyre Check",
      "delay_description": "Idle",
      "code": "D23"
    },
    {
      "activity_name": "Cleaning Vessel Truck",
      "delay_description": "Idle",
      "code": "D24"
    },
    {
      "activity_name": "Working Production",
      "delay_description": "Working",
      "code": "W1"
    },
    {
      "activity_name": "Pit Support",
      "delay_description": "Working",
      "code": "W2"
    },
    {
      "activity_name": "Coal Cleaning",
      "delay_description": "Working",
      "code": "W3"
    },
    {
      "activity_name": "Travel Blasting",
      "delay_description": "Working",
      "code": "W4"
    },
    {
      "activity_name": "Travel Loading Point",
      "delay_description": "Working",
      "code": "W5"
    },
    {
      "activity_name": "Travel to Maintenance",
      "delay_description": "Working",
      "code": "W6"
    },
    {
      "activity_name": "Rehabilitation",
      "delay_description": "Working",
      "code": "W7"
    },
    {
      "activity_name": "Waiting Truck",
      "delay_description": "Working",
      "code": "W8"
    },
    {
      "activity_name": "Dump Maintenance",
      "delay_description": "Working",
      "code": "W9"
    },
    {
      "activity_name": "Haul Road Maintenance (HRM)",
      "delay_description": "Working",
      "code": "W10"
    },
    {
      "activity_name": "Stockpile ROM Maintenance",
      "delay_description": "Working",
      "code": "W11"
    },
    {
      "activity_name": "PLM Support",
      "delay_description": "Working",
      "code": "W12"
    },
    {
      "activity_name": "Maintenance Groundtest",
      "delay_description": "Working",
      "code": "W13"
    },
    {
      "activity_name": "Others",
      "delay_description": "Working",
      "code": "W14"
    },
    {
      "activity_name": "Working Support",
      "delay_description": "Working",
      "code": "W15"
    },
    {
      "activity_name": "Queuing at Front",
      "delay_description": "Working",
      "code": "W16"
    },
    {
      "activity_name": "Queuing at Road",
      "delay_description": "Working",
      "code": "W17"
    }
  ]);
};
