exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('master_activity').del()
  await knex('master_activity').insert([
    {
      "activity_name": "Breakdown",
      "delay_description": "Breakdown",
      "code": "B1",
      "creation_by":"TM"
    },
    {
      "activity_name": "PM Service",
      "delay_description": "Breakdown",
      "code": "B2",
      "creation_by":"TM"
    },
    {
      "activity_name": "Rain",
      "delay_description": "Idle",
      "code": "S1",
      "creation_by":"TM"
    },
    {
      "activity_name": "Slippery",
      "delay_description": "Idle",
      "code": "S2",
      "creation_by":"TM"
    },
    {
      "activity_name": "Safety Talk",
      "delay_description": "Idle",
      "code": "S3",
      "creation_by":"TM"
    },
    {
      "activity_name": "Shift Change/Prestart Check",
      "delay_description": "Idle",
      "code": "S4",
      "creation_by":"TM"
    },
    {
      "activity_name": "Rest and Meal",
      "delay_description": "Idle",
      "code": "S5",
      "creation_by":"TM"
    },
    {
      "activity_name": "Daily Pray",
      "delay_description": "Idle",
      "code": "S6",
      "creation_by":"TM"
    },
    {
      "activity_name": "Blasting",
      "delay_description": "Idle",
      "code": "S7",
      "creation_by":"TM"
    },
    {
      "activity_name": "Refuelling/Greasing",
      "delay_description": "Idle",
      "code": "S8",
      "creation_by":"TM"
    },
    {
      "activity_name": "Survey/Sample",
      "delay_description": "Idle",
      "code": "S9",
      "creation_by":"TM"
    },
    {
      "activity_name": "Safety Fatique Test",
      "delay_description": "Idle",
      "code": "S10",
      "creation_by":"TM"
    },
    {
      "activity_name": "Friday Pray",
      "delay_description": "Idle",
      "code": "S11",
      "creation_by":"TM"
    },
    {
      "activity_name": "Sunday Pray",
      "delay_description": "Idle",
      "code": "S12",
      "creation_by":"TM"
    },
    {
      "activity_name": "Fasting",
      "delay_description": "Idle",
      "code": "S13",
      "creation_by":"TM"
    },
    {
      "activity_name": "Foggy",
      "delay_description": "Idle",
      "code": "S14",
      "creation_by":"TM"
    },
    {
      "activity_name": "Public Holiday",
      "delay_description": "Idle",
      "code": "S15",
      "creation_by":"TM"
    },
    {
      "activity_name": "No Operator",
      "delay_description": "Idle",
      "code": "D1",
      "creation_by":"TM"
    },
    {
      "activity_name": "Operator Fatique",
      "delay_description": "Idle",
      "code": "D2",
      "creation_by":"TM"
    },
    {
      "activity_name": "Waiting Operator",
      "delay_description": "Idle",
      "code": "D3",
      "creation_by":"TM"
    },
    {
      "activity_name": "No Truck",
      "delay_description": "Idle",
      "code": "D4",
      "creation_by":"TM"
    },
    {
      "activity_name": "No Equipment Support",
      "delay_description": "Idle",
      "code": "D5",
      "creation_by":"TM"
    },
    {
      "activity_name": "Lighting Plant Problem",
      "delay_description": "Idle",
      "code": "D6",
      "creation_by":"TM"
    },
    {
      "activity_name": "Washing Equipment",
      "delay_description": "Idle",
      "code": "D7",
      "creation_by":"TM"
    },
    {
      "activity_name": "Front Maintanance",
      "delay_description": "Idle",
      "code": "D8",
      "creation_by":"TM"
    },
    {
      "activity_name": "Road Maintanance",
      "delay_description": "Idle",
      "code": "D9",
      "creation_by":"TM"
    },
    {
      "activity_name": "Disposal Maintanance",
      "delay_description": "Idle",
      "code": "D10",
      "creation_by":"TM"
    },
    {
      "activity_name": "Stokcpile Full/Crusher Maint.",
      "delay_description": "Idle",
      "code": "D11",
      "creation_by":"TM"
    },
    {
      "activity_name": "No Working Area",
      "delay_description": "Idle",
      "code": "D12",
      "creation_by":"TM"
    },
    {
      "activity_name": "Blockade",
      "delay_description": "Idle",
      "code": "D13",
      "creation_by":"TM"
    },
    {
      "activity_name": "Dust",
      "delay_description": "Idle",
      "code": "D14",
      "creation_by":"TM"
    },
    {
      "activity_name": "Standby Accident",
      "delay_description": "Idle",
      "code": "D15",
      "creation_by":"TM"
    },
    {
      "activity_name": "Stop Loading DT Refuelling",
      "delay_description": "Idle",
      "code": "D16",
      "creation_by":"TM"
    },
    {
      "activity_name": "No Stock/Material",
      "delay_description": "Idle",
      "code": "D17",
      "creation_by":"TM"
    },
    {
      "activity_name": "No Job",
      "delay_description": "Idle",
      "code": "D18",
      "creation_by":"TM"
    },
    {
      "activity_name": "Others",
      "delay_description": "Idle",
      "code": "D19",
      "creation_by":"TM"
    },
    {
      "activity_name": "Toilet",
      "delay_description": "Idle",
      "code": "D20",
      "creation_by":"TM"
    },
    {
      "activity_name": "Queuing",
      "delay_description": "Idle",
      "code": "D21",
      "creation_by":"TM"
    },
    {
      "activity_name": "No Digger",
      "delay_description": "Idle",
      "code": "D22",
      "creation_by":"TM"
    },
    {
      "activity_name": "Tyre Check",
      "delay_description": "Idle",
      "code": "D23",
      "creation_by":"TM"
    },
    {
      "activity_name": "Cleaning Vessel Truck",
      "delay_description": "Idle",
      "code": "D24",
      "creation_by":"TM"
    },
    {
      "activity_name": "Working Production",
      "delay_description": "Working",
      "code": "W1",
      "creation_by":"TM"
    },
    {
      "activity_name": "Pit Support",
      "delay_description": "Working",
      "code": "W2",
      "creation_by":"TM"
    },
    {
      "activity_name": "Coal Cleaning",
      "delay_description": "Working",
      "code": "W3",
      "creation_by":"TM"
    },
    {
      "activity_name": "Travel Blasting",
      "delay_description": "Working",
      "code": "W4",
      "creation_by":"TM"
    },
    {
      "activity_name": "Travel Loading Point",
      "delay_description": "Working",
      "code": "W5",
      "creation_by":"TM"
    },
    {
      "activity_name": "Travel to Maintenance",
      "delay_description": "Working",
      "code": "W6",
      "creation_by":"TM"
    },
    {
      "activity_name": "Rehabilitation",
      "delay_description": "Working",
      "code": "W7",
      "creation_by":"TM"
    },
    {
      "activity_name": "Waiting Truck",
      "delay_description": "Working",
      "code": "W8",
      "creation_by":"TM"
    },
    {
      "activity_name": "Dump Maintenance",
      "delay_description": "Working",
      "code": "W9",
      "creation_by":"TM"
    },
    {
      "activity_name": "Haul Road Maintenance (HRM)",
      "delay_description": "Working",
      "code": "W10",
      "creation_by":"TM"
    },
    {
      "activity_name": "Stockpile ROM Maintenance",
      "delay_description": "Working",
      "code": "W11",
      "creation_by":"TM"
    },
    {
      "activity_name": "PLM Support",
      "delay_description": "Working",
      "code": "W12",
      "creation_by":"TM"
    },
    {
      "activity_name": "Maintenance Groundtest",
      "delay_description": "Working",
      "code": "W13",
      "creation_by":"TM"
    },
    {
      "activity_name": "Others",
      "delay_description": "Working",
      "code": "W14",
      "creation_by":"TM"
    },
    {
      "activity_name": "Working Support",
      "delay_description": "Working",
      "code": "W15",
      "creation_by":"TM"
    },
    {
      "activity_name": "Queuing at Front",
      "delay_description": "Working",
      "code": "W16",
      "creation_by":"TM"
    },
    {
      "activity_name": "Queuing at Road",
      "delay_description": "Working",
      "code": "W17",
      "creation_by":"TM"
    }
  ]);
};
