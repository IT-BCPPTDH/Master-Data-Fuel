exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('master_operator_kimper').del()
    await knex('master_operator_kimper').insert([
        {
          "emp_id": 122686,
          "emp_name": "Hariadi",
          "position": "Operator"
        },
        {
          "emp_id": 121818,
          "emp_name": "Hamja Manurung",
          "position": "Operator"
        },
        {
          "emp_id": 121363,
          "emp_name": "Sayadi bin Laima",
          "position": "Operator"
        },
        {
          "emp_id": 121842,
          "emp_name": "Maryanto",
          "position": "Operator"
        },
        {
          "emp_id": 121304,
          "emp_name": "Daud Prirunan Bin Tunduk",
          "position": "Operator"
        },
        {
          "emp_id": 122109,
          "emp_name": "Yudi Haryanto",
          "position": "Operator"
        },
        {
          "emp_id": 120285,
          "emp_name": "Indra Saputra",
          "position": "Operator"
        },
        {
          "emp_id": 122071,
          "emp_name": "Ronny Petrus Mian",
          "position": "Operator"
        },
        {
          "emp_id": 210667,
          "emp_name": "Esron Pangaribuan",
          "position": "Operator"
        },
        {
          "emp_id": 210703,
          "emp_name": "Jumadi",
          "position": "Operator"
        },
        {
          "emp_id": 210753,
          "emp_name": "Anton Rukka R.",
          "position": "Operator"
        },
        {
          "emp_id": 210848,
          "emp_name": "Palipangan",
          "position": "Operator"
        },
        {
          "emp_id": 213258,
          "emp_name": "Hamzah",
          "position": "Operator"
        },
        {
          "emp_id": 210745,
          "emp_name": "Marthen Ruppa",
          "position": "Operator"
        },
        {
          "emp_id": 122699,
          "emp_name": "Kalvin T Limbong",
          "position": "Operator"
        },
        {
          "emp_id": 210843,
          "emp_name": "Muhammad Yusuf",
          "position": "Operator"
        },
        {
          "emp_id": 210851,
          "emp_name": "Paulus Makkalo",
          "position": "Operator"
        },
        {
          "emp_id": 123488,
          "emp_name": "Marlundu Hutabalian",
          "position": "Operator"
        },
        {
          "emp_id": 123159,
          "emp_name": "Fachrul Rozi",
          "position": "Operator"
        },
        {
          "emp_id": 123322,
          "emp_name": "Yan Sulo Bua",
          "position": "Operator"
        },
        {
          "emp_id": 213275,
          "emp_name": "Yohanes Sarira",
          "position": "Operator"
        },
        {
          "emp_id": 213160,
          "emp_name": "Edy Jaya",
          "position": "Operator"
        },
        {
          "emp_id": 213235,
          "emp_name": "Hadri Fidrianto Sakke",
          "position": "Operator"
        },
        {
          "emp_id": 123260,
          "emp_name": "Bahrum",
          "position": "Operator"
        },
        {
          "emp_id": 122632,
          "emp_name": "Dominggus Padang",
          "position": "Operator"
        },
        {
          "emp_id": 420161,
          "emp_name": "Darmawan",
          "position": ""
        },
        {
          "emp_id": 420090,
          "emp_name": "Slamet Pryo Sudarpo",
          "position": ""
        },
        {
          "emp_id": 420373,
          "emp_name": "Daud Maruru",
          "position": ""
        },
        {
          "emp_id": 420410,
          "emp_name": "Herman",
          "position": ""
        },
        {
          "emp_id": 420374,
          "emp_name": "Sulaiman Arsyad",
          "position": ""
        },
        {
          "emp_id": 213273,
          "emp_name": "Adrianus",
          "position": "Operator"
        },
        {
          "emp_id": 420059,
          "emp_name": "Herman Toding",
          "position": "Operator"
        },
        {
          "emp_id": 420058,
          "emp_name": "Usat Apui",
          "position": "Operator"
        },
        {
          "emp_id": 123425,
          "emp_name": "Asi Tua S",
          "position": "Operator"
        },
        {
          "emp_id": 213370,
          "emp_name": "Abdul Azis",
          "position": ""
        },
        {
          "emp_id": 420082,
          "emp_name": "Amrin",
          "position": ""
        },
        {
          "emp_id": 212328,
          "emp_name": "Melky Kombong",
          "position": "Operator"
        },
        {
          "emp_id": 213199,
          "emp_name": "Abdul Salam",
          "position": "Operator"
        },
        {
          "emp_id": 213313,
          "emp_name": "Wiranto P",
          "position": "Operator"
        },
        {
          "emp_id": 122001,
          "emp_name": "Maman Rahman",
          "position": "Operator"
        },
        {
          "emp_id": 120545,
          "emp_name": "Sumarlin",
          "position": "Operator"
        },
        {
          "emp_id": 213282,
          "emp_name": "Muh David Makkaraka",
          "position": "Operator"
        },
        {
          "emp_id": 121935,
          "emp_name": "Asri Bin Ladalle",
          "position": "Operator"
        },
        {
          "emp_id": 121026,
          "emp_name": "M. Harpenas",
          "position": "Operator"
        },
        {
          "emp_id": 121953,
          "emp_name": "Anwar - Baharuddin",
          "position": "Operator"
        },
        {
          "emp_id": 213284,
          "emp_name": "Deddy Friyanto Thimang",
          "position": "Operator"
        },
        {
          "emp_id": 213220,
          "emp_name": "Nurdin",
          "position": "Operator"
        },
        {
          "emp_id": 120853,
          "emp_name": "Rustam-Ramli",
          "position": "Operator"
        },
        {
          "emp_id": 123315,
          "emp_name": "Usman",
          "position": "Operator"
        },
        {
          "emp_id": 121303,
          "emp_name": "Arisandi",
          "position": "Operator"
        },
        {
          "emp_id": 121355,
          "emp_name": "Windra Wahyudi",
          "position": "Operator"
        },
        {
          "emp_id": 121833,
          "emp_name": "Chandra Susanto",
          "position": "Operator"
        },
        {
          "emp_id": 120775,
          "emp_name": "Nanna Ramba",
          "position": "Operator"
        },
        {
          "emp_id": 213306,
          "emp_name": "Syahdan",
          "position": "Operator"
        },
        {
          "emp_id": 120773,
          "emp_name": "Anwar - Japar",
          "position": "Operator"
        },
        {
          "emp_id": 121102,
          "emp_name": "Padli Congek",
          "position": "Operator"
        },
        {
          "emp_id": 122038,
          "emp_name": "Daniel Tangdan",
          "position": "Operator"
        },
        {
          "emp_id": 121287,
          "emp_name": "Suprayetno Bin Tasman",
          "position": "Operator"
        },
        {
          "emp_id": 120976,
          "emp_name": "Sigit Kurniawan",
          "position": "Operator"
        },
        {
          "emp_id": 120159,
          "emp_name": "Depal",
          "position": "Operator"
        },
        {
          "emp_id": 121284,
          "emp_name": "Aris Surya",
          "position": "Operator"
        },
        {
          "emp_id": 120932,
          "emp_name": "Urbanus Patattan",
          "position": "Operator"
        },
        {
          "emp_id": 120497,
          "emp_name": "Semuel Timang",
          "position": "Operator"
        },
        {
          "emp_id": 120814,
          "emp_name": "Sabinus Opemor WR",
          "position": "Operator"
        },
        {
          "emp_id": 120231,
          "emp_name": "Harisman",
          "position": "Operator"
        },
        {
          "emp_id": 122146,
          "emp_name": "Arlang Arman",
          "position": "Operator"
        },
        {
          "emp_id": 122279,
          "emp_name": "Amin Nur",
          "position": "Operator"
        },
        {
          "emp_id": 121938,
          "emp_name": "Daniel Enos Mangopo",
          "position": "Operator"
        },
        {
          "emp_id": 120650,
          "emp_name": "Zulkifli",
          "position": "Operator"
        },
        {
          "emp_id": 121108,
          "emp_name": "Madianto Sossong Sambo",
          "position": "Operator"
        },
        {
          "emp_id": 120897,
          "emp_name": "Ali Usman",
          "position": "Operator"
        },
        {
          "emp_id": 120575,
          "emp_name": "Syahrani Maudi",
          "position": "Operator"
        },
        {
          "emp_id": 120736,
          "emp_name": "Slamet Riyadi",
          "position": "Operator"
        },
        {
          "emp_id": 120783,
          "emp_name": "Marthen AY.",
          "position": "Operator"
        },
        {
          "emp_id": 120813,
          "emp_name": "M. Sonalia",
          "position": "Operator"
        },
        {
          "emp_id": 120305,
          "emp_name": "Jon Moki BP",
          "position": "Operator"
        },
        {
          "emp_id": 122075,
          "emp_name": "Rusdi Achmad",
          "position": "Operator"
        },
        {
          "emp_id": 122067,
          "emp_name": "Ilyas Santoso",
          "position": "Operator"
        },
        {
          "emp_id": 120439,
          "emp_name": "Rahmadi",
          "position": "Operator"
        },
        {
          "emp_id": 121073,
          "emp_name": "Zainuddin - H. Haleng",
          "position": "Operator"
        },
        {
          "emp_id": 120054,
          "emp_name": "Akhmad Rusdi",
          "position": "Operator"
        },
        {
          "emp_id": 120076,
          "emp_name": "Andarias Simon",
          "position": "Operator"
        },
        {
          "emp_id": 121320,
          "emp_name": "Herbin Sianturi",
          "position": "Operator"
        },
        {
          "emp_id": 120506,
          "emp_name": "Sofyan E",
          "position": "Operator"
        },
        {
          "emp_id": 121078,
          "emp_name": "Haryanto - Warnosukarto",
          "position": "Operator"
        },
        {
          "emp_id": 121076,
          "emp_name": "Andi Bin Ladalle",
          "position": "Operator"
        },
        {
          "emp_id": 120558,
          "emp_name": "Suraji",
          "position": "Operator"
        },
        {
          "emp_id": 122080,
          "emp_name": "Malino Patoban",
          "position": "Operator"
        },
        {
          "emp_id": 121099,
          "emp_name": "Hendra - P. Wetto",
          "position": "Operator"
        },
        {
          "emp_id": 121070,
          "emp_name": "Stepanus - Siampa'Lea",
          "position": "Operator"
        },
        {
          "emp_id": 122692,
          "emp_name": "Janwardi Pasaribu",
          "position": "Operator"
        },
        {
          "emp_id": 121151,
          "emp_name": "Julianto Bin Sodiq",
          "position": "Operator"
        },
        {
          "emp_id": 121873,
          "emp_name": "Jhon Sambolayuk",
          "position": "Operator"
        },
        {
          "emp_id": 210916,
          "emp_name": "Mulyadi",
          "position": "Operator"
        },
        {
          "emp_id": 122281,
          "emp_name": "Samian",
          "position": "Operator"
        },
        {
          "emp_id": 123087,
          "emp_name": "Rusman",
          "position": "Operator"
        },
        {
          "emp_id": 121060,
          "emp_name": "Luther Tandilodang",
          "position": "Operator"
        },
        {
          "emp_id": 122079,
          "emp_name": "Ramli Siregar",
          "position": "Operator"
        },
        {
          "emp_id": 123565,
          "emp_name": "Marthen Roni",
          "position": "Operator"
        },
        {
          "emp_id": 121692,
          "emp_name": "Piter La'bi",
          "position": "Operator"
        },
        {
          "emp_id": 123341,
          "emp_name": "Hamsir",
          "position": "Operator"
        },
        {
          "emp_id": 123301,
          "emp_name": "Maldi Fitrah",
          "position": "Operator"
        },
        {
          "emp_id": 211000,
          "emp_name": "Muhaidi Hairan Ali",
          "position": "Operator"
        },
        {
          "emp_id": 121323,
          "emp_name": "Anselmus Sapa Bin Gregorius",
          "position": "Operator"
        },
        {
          "emp_id": 123656,
          "emp_name": "Yunus Pare",
          "position": "Operator"
        },
        {
          "emp_id": 121087,
          "emp_name": "Rafael Romeo",
          "position": "Operator"
        },
        {
          "emp_id": 121746,
          "emp_name": "Nelson Nogi",
          "position": "Operator"
        },
        {
          "emp_id": 123196,
          "emp_name": "Semuel Paledan",
          "position": "Operator"
        },
        {
          "emp_id": 210747,
          "emp_name": "Arsyad",
          "position": "Operator"
        },
        {
          "emp_id": 123583,
          "emp_name": "Marthen Eden",
          "position": "Operator"
        },
        {
          "emp_id": 121057,
          "emp_name": "Abd. Hadi",
          "position": "Operator"
        },
        {
          "emp_id": 123602,
          "emp_name": "Hamdi",
          "position": "Operator"
        },
        {
          "emp_id": 213062,
          "emp_name": "Suprianto",
          "position": "Operator"
        },
        {
          "emp_id": 210934,
          "emp_name": "Maryono",
          "position": "Operator"
        },
        {
          "emp_id": 120764,
          "emp_name": "Agus Sastra",
          "position": "Operator"
        },
        {
          "emp_id": 122269,
          "emp_name": "Purnomo",
          "position": "Operator"
        },
        {
          "emp_id": 121882,
          "emp_name": "Otniel L",
          "position": "Operator"
        },
        {
          "emp_id": 121913,
          "emp_name": "Andi Jamaluddin",
          "position": "Operator"
        },
        {
          "emp_id": 122652,
          "emp_name": "Asgar Haruna",
          "position": "Operator"
        },
        {
          "emp_id": 123585,
          "emp_name": "Martinus Rinu",
          "position": "Operator"
        },
        {
          "emp_id": 123575,
          "emp_name": "Topan yanto",
          "position": "Operator"
        },
        {
          "emp_id": 123647,
          "emp_name": "Alisman",
          "position": "Operator"
        },
        {
          "emp_id": 210740,
          "emp_name": "Ruben Patandean",
          "position": "Operator"
        },
        {
          "emp_id": 121132,
          "emp_name": "Linus Suli",
          "position": "Operator"
        },
        {
          "emp_id": 121285,
          "emp_name": "Muksin Y Bin M. Yatim",
          "position": "Operator"
        },
        {
          "emp_id": 123307,
          "emp_name": "Hadi Supriono",
          "position": "Operator"
        },
        {
          "emp_id": 210018,
          "emp_name": "Antonius",
          "position": "Operator"
        },
        {
          "emp_id": 123479,
          "emp_name": "Ganti Patale'",
          "position": "Operator"
        },
        {
          "emp_id": 123667,
          "emp_name": "Semuel Musi",
          "position": "Operator"
        },
        {
          "emp_id": 123528,
          "emp_name": "Yan Wariono",
          "position": "Operator"
        },
        {
          "emp_id": 122672,
          "emp_name": "Gufron Nugraha",
          "position": "Operator"
        },
        {
          "emp_id": 210738,
          "emp_name": "Jusriadi",
          "position": "Operator"
        },
        {
          "emp_id": 123476,
          "emp_name": "Agus Paledan",
          "position": "Operator"
        },
        {
          "emp_id": 121349,
          "emp_name": "Syarifuddin",
          "position": "Operator"
        },
        {
          "emp_id": 120394,
          "emp_name": "Muchlis",
          "position": "Operator"
        },
        {
          "emp_id": 123180,
          "emp_name": "Fahrudin yusuf",
          "position": "Operator"
        },
        {
          "emp_id": 122626,
          "emp_name": "Muhibuddin Firdaus",
          "position": "Operator"
        },
        {
          "emp_id": 123312,
          "emp_name": "Arifin Sukur B.",
          "position": "Operator"
        },
        {
          "emp_id": 122126,
          "emp_name": "Sutejo Saputra",
          "position": "Operator"
        },
        {
          "emp_id": 123342,
          "emp_name": "Harmaji",
          "position": "Operator"
        },
        {
          "emp_id": 122706,
          "emp_name": "Endro Suyono",
          "position": "Operator"
        },
        {
          "emp_id": 123332,
          "emp_name": "Abdul Latif",
          "position": "Operator"
        },
        {
          "emp_id": 123051,
          "emp_name": "Juriansyah",
          "position": "Operator"
        },
        {
          "emp_id": 123319,
          "emp_name": "Agus Memed",
          "position": "Operator"
        },
        {
          "emp_id": 123696,
          "emp_name": "Irsyam H",
          "position": "Operator"
        },
        {
          "emp_id": 123654,
          "emp_name": "Linus Rundunan",
          "position": "Operator"
        },
        {
          "emp_id": 123118,
          "emp_name": "Suyamto",
          "position": "Operator"
        },
        {
          "emp_id": 122681,
          "emp_name": "Duma",
          "position": "Operator"
        },
        {
          "emp_id": 123309,
          "emp_name": "Heru Indiarto",
          "position": "Operator"
        },
        {
          "emp_id": 123407,
          "emp_name": "Perdi Sanda",
          "position": "Operator"
        },
        {
          "emp_id": 123366,
          "emp_name": "Petrus Una",
          "position": "Operator"
        },
        {
          "emp_id": 121834,
          "emp_name": "Wensius Wende",
          "position": "Operator"
        },
        {
          "emp_id": 123303,
          "emp_name": "Samsul",
          "position": "Operator"
        },
        {
          "emp_id": 122027,
          "emp_name": "Saparuddin Taslim",
          "position": "Operator"
        },
        {
          "emp_id": 123527,
          "emp_name": "Jamaluddin",
          "position": "Operator"
        },
        {
          "emp_id": 121257,
          "emp_name": "Firdaus Prima Bin Mhd Ridwan",
          "position": "Operator"
        },
        {
          "emp_id": 121408,
          "emp_name": "Jumaidi bin hasan",
          "position": "Operator"
        },
        {
          "emp_id": 122630,
          "emp_name": "Muhammad Kautsar",
          "position": "Operator"
        },
        {
          "emp_id": 121269,
          "emp_name": "Surian Sukeri",
          "position": "Operator"
        },
        {
          "emp_id": 123374,
          "emp_name": "Fatkhul Mu'in",
          "position": "Operator"
        },
        {
          "emp_id": 121828,
          "emp_name": "Maryono Bin Subani",
          "position": "Operator"
        },
        {
          "emp_id": 123314,
          "emp_name": "M. Rizal",
          "position": "Operator"
        },
        {
          "emp_id": 123668,
          "emp_name": "Heriyanto",
          "position": "Operator"
        },
        {
          "emp_id": 121326,
          "emp_name": "Daud bin Syahrir",
          "position": "Operator"
        },
        {
          "emp_id": 210964,
          "emp_name": "M. Hanifah Akbar",
          "position": "Operator"
        },
        {
          "emp_id": 122070,
          "emp_name": "Suhandi Bin Muh. Ali",
          "position": "Operator"
        },
        {
          "emp_id": 123540,
          "emp_name": "Deny Rahmadinata",
          "position": "Operator"
        },
        {
          "emp_id": 212246,
          "emp_name": "Galuh Yuntoro Yono",
          "position": "Operator"
        },
        {
          "emp_id": 211623,
          "emp_name": "Herumadi",
          "position": "Operator"
        },
        {
          "emp_id": 212732,
          "emp_name": "M Ali Sahid",
          "position": "Operator"
        },
        {
          "emp_id": 212167,
          "emp_name": "Zuhdi Anshari",
          "position": "Operator"
        },
        {
          "emp_id": 211515,
          "emp_name": "Sudiardi",
          "position": "Operator"
        },
        {
          "emp_id": 210918,
          "emp_name": "Gregorius Laka",
          "position": "Operator"
        },
        {
          "emp_id": 212188,
          "emp_name": "Kamal KS",
          "position": "Operator"
        },
        {
          "emp_id": 212248,
          "emp_name": "Edi Susilo",
          "position": "Operator"
        },
        {
          "emp_id": 212245,
          "emp_name": "Andri Supiansyah",
          "position": "Operator"
        },
        {
          "emp_id": 123539,
          "emp_name": "Domistianis",
          "position": "Operator"
        },
        {
          "emp_id": 210963,
          "emp_name": "Jamaluddin Arief",
          "position": "Operator"
        },
        {
          "emp_id": 212249,
          "emp_name": "M. Arsyad",
          "position": "Operator"
        },
        {
          "emp_id": 122660,
          "emp_name": "Mika Tonapa",
          "position": "Operator"
        },
        {
          "emp_id": 123116,
          "emp_name": "Firman Wahyudi",
          "position": "Operator"
        },
        {
          "emp_id": 212187,
          "emp_name": "Tiko Saputra",
          "position": "Operator"
        },
        {
          "emp_id": 212163,
          "emp_name": "Fitriadi",
          "position": "Operator"
        },
        {
          "emp_id": 211516,
          "emp_name": "Kursani",
          "position": "Operator"
        },
        {
          "emp_id": 121366,
          "emp_name": "Irwan",
          "position": "Operator"
        },
        {
          "emp_id": 212726,
          "emp_name": "Alamsyah",
          "position": "Operator"
        },
        {
          "emp_id": 121830,
          "emp_name": "Rusli Bin H. Bakri",
          "position": "Operator"
        },
        {
          "emp_id": 212729,
          "emp_name": "Ricky Kusuma Wardana",
          "position": "Operator"
        },
        {
          "emp_id": 123376,
          "emp_name": "Markus Ubang",
          "position": "Operator"
        },
        {
          "emp_id": 213133,
          "emp_name": "Hamka",
          "position": "Operator"
        },
        {
          "emp_id": 121096,
          "emp_name": "Arfian",
          "position": "Operator"
        },
        {
          "emp_id": 211654,
          "emp_name": "Syahrul Mahesa",
          "position": "Operator"
        },
        {
          "emp_id": 212764,
          "emp_name": "Junaidi",
          "position": "Operator"
        },
        {
          "emp_id": 212757,
          "emp_name": "Hendra LBN. Siantar",
          "position": "Operator"
        },
        {
          "emp_id": 123614,
          "emp_name": "Agus Purwanto",
          "position": "Operator"
        },
        {
          "emp_id": 212741,
          "emp_name": "Bayu Putra Bagaskara",
          "position": "Operator"
        },
        {
          "emp_id": 210970,
          "emp_name": "Yulianus Tangki",
          "position": "Operator"
        },
        {
          "emp_id": 210915,
          "emp_name": "Suherman",
          "position": "Operator"
        },
        {
          "emp_id": 212177,
          "emp_name": "Deni",
          "position": "Operator"
        },
        {
          "emp_id": 212759,
          "emp_name": "Khozinatul Asror",
          "position": "Operator"
        },
        {
          "emp_id": 123248,
          "emp_name": "Masmur",
          "position": "Operator"
        },
        {
          "emp_id": 121283,
          "emp_name": "Antonius Ruru",
          "position": "Operator"
        },
        {
          "emp_id": 213271,
          "emp_name": "Suparyono",
          "position": "Operator"
        },
        {
          "emp_id": 213184,
          "emp_name": "Irfandhi Putra",
          "position": "Operator"
        },
        {
          "emp_id": 122255,
          "emp_name": "Slamet",
          "position": "Operator"
        },
        {
          "emp_id": 121307,
          "emp_name": "Prasetyo Dhani",
          "position": "Operator"
        },
        {
          "emp_id": 211658,
          "emp_name": "Rudi Nur",
          "position": "Operator"
        },
        {
          "emp_id": 211452,
          "emp_name": "Joko Sutrianto",
          "position": "Operator"
        },
        {
          "emp_id": 211442,
          "emp_name": "Yasmin",
          "position": "Operator"
        },
        {
          "emp_id": 212763,
          "emp_name": "Feri Hermawan",
          "position": "Operator"
        },
        {
          "emp_id": 122459,
          "emp_name": "Agung Satria P",
          "position": "Operator"
        },
        {
          "emp_id": 212258,
          "emp_name": "Abdul Rahman Sidik",
          "position": "Operator"
        },
        {
          "emp_id": 213239,
          "emp_name": "Zaini Hamma",
          "position": "Operator"
        },
        {
          "emp_id": 211628,
          "emp_name": "Edy Sofyan",
          "position": "Operator"
        },
        {
          "emp_id": 212183,
          "emp_name": "Hernanda Tri Yulianto",
          "position": "Operator"
        },
        {
          "emp_id": 213112,
          "emp_name": "Sigit Dwi Pamungkas",
          "position": "Operator"
        },
        {
          "emp_id": 123541,
          "emp_name": "Novel Siagian",
          "position": "Operator"
        },
        {
          "emp_id": 213041,
          "emp_name": "Patli Bondang",
          "position": "Operator"
        },
        {
          "emp_id": 213188,
          "emp_name": "Muhammad Afdal",
          "position": "Operator"
        },
        {
          "emp_id": 212765,
          "emp_name": "Ari Sukarsen",
          "position": "Operator"
        },
        {
          "emp_id": 123604,
          "emp_name": "Sudirman",
          "position": "Operator"
        },
        {
          "emp_id": 213118,
          "emp_name": "Nicodemos Ambun",
          "position": "Operator"
        },
        {
          "emp_id": 213100,
          "emp_name": "Yopy Tekko",
          "position": "Operator"
        },
        {
          "emp_id": 120266,
          "emp_name": "Hidayat",
          "position": "Operator"
        },
        {
          "emp_id": 212719,
          "emp_name": "Al Hadid Rohman",
          "position": "Operator"
        },
        {
          "emp_id": 212170,
          "emp_name": "Slamet Wahyu Suryanto",
          "position": "Operator"
        },
        {
          "emp_id": 212722,
          "emp_name": "Alfirdaus",
          "position": "Operator"
        },
        {
          "emp_id": 213185,
          "emp_name": "Yuli Setiawan",
          "position": "Operator"
        },
        {
          "emp_id": 122036,
          "emp_name": "Kornelius Barambang",
          "position": "Operator"
        },
        {
          "emp_id": 213330,
          "emp_name": "Rudi",
          "position": "Operator"
        },
        {
          "emp_id": 213297,
          "emp_name": "Suyono",
          "position": "Operator"
        },
        {
          "emp_id": 123780,
          "emp_name": "Hendra",
          "position": "Operator"
        },
        {
          "emp_id": 213331,
          "emp_name": "Deni Nurhadianto",
          "position": "Operator"
        },
        {
          "emp_id": 213360,
          "emp_name": "Budi Santoso",
          "position": "Operator"
        },
        {
          "emp_id": 213043,
          "emp_name": "Yan Luter Sampe",
          "position": "Operator"
        },
        {
          "emp_id": 213129,
          "emp_name": "Zainal Abidin",
          "position": "Operator"
        },
        {
          "emp_id": 213308,
          "emp_name": "Wiyono",
          "position": "Operator"
        },
        {
          "emp_id": 213303,
          "emp_name": "Mashuri",
          "position": "Operator"
        },
        {
          "emp_id": 213302,
          "emp_name": "M.Chaikal Saputra",
          "position": "Operator"
        },
        {
          "emp_id": 123661,
          "emp_name": "Charles Ronald Palenewen",
          "position": "Operator"
        },
        {
          "emp_id": 213335,
          "emp_name": "Lexi Andika Putra",
          "position": "Operator"
        },
        {
          "emp_id": 213334,
          "emp_name": "Lukman",
          "position": "Operator"
        },
        {
          "emp_id": 213194,
          "emp_name": "Marthen Suririk",
          "position": "Operator"
        },
        {
          "emp_id": 213266,
          "emp_name": "Kristianus Pamasi",
          "position": "Operator"
        },
        {
          "emp_id": 213042,
          "emp_name": "Herdi Jafar",
          "position": "Operator"
        },
        {
          "emp_id": 213292,
          "emp_name": "Achmad Sapta Dimyati",
          "position": "Operator"
        },
        {
          "emp_id": 213296,
          "emp_name": "Masdar",
          "position": "Operator"
        },
        {
          "emp_id": 213443,
          "emp_name": "Ardhy Trisna Hermawan",
          "position": "Operator"
        },
        {
          "emp_id": 123240,
          "emp_name": "Agustinus Boro Alu",
          "position": "Operator"
        },
        {
          "emp_id": 213293,
          "emp_name": "Bastomi Ibrahim",
          "position": "Operator"
        },
        {
          "emp_id": 213236,
          "emp_name": "Bambang Haryanto Tangdiseru",
          "position": "Operator"
        },
        {
          "emp_id": 213298,
          "emp_name": "Yeheskel Sampe",
          "position": "Operator"
        },
        {
          "emp_id": 213464,
          "emp_name": "Supianto",
          "position": "Operator"
        },
        {
          "emp_id": 213441,
          "emp_name": "M. Sakir",
          "position": "Operator"
        },
        {
          "emp_id": 213342,
          "emp_name": "Ahmad Zaini",
          "position": "Operator"
        },
        {
          "emp_id": 211388,
          "emp_name": "Maidi",
          "position": "Operator"
        },
        {
          "emp_id": 213301,
          "emp_name": "Bahri Septian",
          "position": "Operator"
        },
        {
          "emp_id": 213088,
          "emp_name": "Fransiskus Kota Padung",
          "position": "Hery Trimanto"
        },
        {
          "emp_id": 213465,
          "emp_name": "Deni sistiyo utomo",
          "position": "Operator"
        },
        {
          "emp_id": 213233,
          "emp_name": "Erwin Paranduk",
          "position": "Operator"
        },
        {
          "emp_id": 213382,
          "emp_name": "Suryanto",
          "position": "Operator"
        },
        {
          "emp_id": 213379,
          "emp_name": "Taslim Anandar",
          "position": "Operator"
        },
        {
          "emp_id": 213338,
          "emp_name": "Ilmiansyah",
          "position": "Operator"
        },
        {
          "emp_id": 213336,
          "emp_name": "Alianor",
          "position": "Operator"
        },
        {
          "emp_id": 212724,
          "emp_name": "Ismail",
          "position": "Operator"
        },
        {
          "emp_id": 212165,
          "emp_name": "Hadri Prasetya",
          "position": "Operator"
        },
        {
          "emp_id": 420208,
          "emp_name": "Bram Teguh J Latang",
          "position": ""
        },
        {
          "emp_id": 120734,
          "emp_name": "Topan",
          "position": "Operator"
        },
        {
          "emp_id": 123219,
          "emp_name": "Ery yulizar",
          "position": "Operator"
        },
        {
          "emp_id": 213201,
          "emp_name": "Nober Amsal",
          "position": "Operator"
        },
        {
          "emp_id": 123173,
          "emp_name": "Darsons",
          "position": "Operator"
        },
        {
          "emp_id": 213288,
          "emp_name": "Irfani Adju",
          "position": "Operator"
        },
        {
          "emp_id": 123394,
          "emp_name": "Yohanes Kapuangan",
          "position": "Operator"
        },
        {
          "emp_id": 122422,
          "emp_name": "Pither Mangaluk",
          "position": "Operator"
        },
        {
          "emp_id": 213193,
          "emp_name": "Darius Sorta Pambunan",
          "position": "Operator"
        },
        {
          "emp_id": 120109,
          "emp_name": "Asfar Abubakar",
          "position": "Operator"
        },
        {
          "emp_id": 213515,
          "emp_name": "Robert Febrian Gozabi",
          "position": "Operator"
        },
        {
          "emp_id": 120235,
          "emp_name": "Hariyanto Tajang",
          "position": "Operator"
        },
        {
          "emp_id": 120683,
          "emp_name": "Thomas Tandi Bongga",
          "position": "Operator"
        },
        {
          "emp_id": 213318,
          "emp_name": "Rico Orino",
          "position": "Operator"
        },
        {
          "emp_id": 213353,
          "emp_name": "Semuel Sampa",
          "position": "Operator"
        },
        {
          "emp_id": 123117,
          "emp_name": "M. Amir",
          "position": "Operator"
        },
        {
          "emp_id": 213355,
          "emp_name": "Suhardi",
          "position": "Operator"
        },
        {
          "emp_id": 120797,
          "emp_name": "Jumarli Bin Hasanuddin",
          "position": "Operator"
        },
        {
          "emp_id": 213357,
          "emp_name": "Syahran",
          "position": "Operator"
        },
        {
          "emp_id": 213359,
          "emp_name": "Yohanes Pasudi",
          "position": "Operator"
        },
        {
          "emp_id": 122181,
          "emp_name": "Yulius Tiku",
          "position": "Operator"
        },
        {
          "emp_id": 213369,
          "emp_name": "Hendri",
          "position": "Operator"
        },
        {
          "emp_id": 122203,
          "emp_name": "Yunus Rante",
          "position": "Operator"
        },
        {
          "emp_id": 213373,
          "emp_name": "Ryan Sagita",
          "position": "Operator"
        },
        {
          "emp_id": 123491,
          "emp_name": "Petpemul Tombo Toding",
          "position": "Operator"
        },
        {
          "emp_id": 122434,
          "emp_name": "Mawardias",
          "position": "Operator"
        },
        {
          "emp_id": 122722,
          "emp_name": "Suko Wiyono",
          "position": "Operator"
        },
        {
          "emp_id": 213508,
          "emp_name": "Mursalim",
          "position": "Operator"
        },
        {
          "emp_id": 213123,
          "emp_name": "Arman Kurniawan",
          "position": "Operator"
        },
        {
          "emp_id": 122654,
          "emp_name": "Lapu Tandiallo",
          "position": "Operator"
        },
        {
          "emp_id": 213305,
          "emp_name": "Eka Prasetia",
          "position": "Operator"
        },
        {
          "emp_id": 123174,
          "emp_name": "Wati elle",
          "position": "Operator"
        },
        {
          "emp_id": 213260,
          "emp_name": "Pirmanto Saranga'",
          "position": "Operator"
        },
        {
          "emp_id": 420209,
          "emp_name": "ABD. Kahar Kadir",
          "position": ""
        },
        {
          "emp_id": 123135,
          "emp_name": "Marthen Luther",
          "position": "Operator"
        },
        {
          "emp_id": 213014,
          "emp_name": "Faizal Rhajis Khana",
          "position": "Operator"
        },
        {
          "emp_id": 122661,
          "emp_name": "Kadri Matiro",
          "position": "Operator"
        },
        {
          "emp_id": 122136,
          "emp_name": "Bambang Sudarsono",
          "position": "Operator"
        },
        {
          "emp_id": 121130,
          "emp_name": "Jenriyanto Patiku",
          "position": "Operator"
        },
        {
          "emp_id": 122119,
          "emp_name": "Andarias Rangu",
          "position": "Operator"
        },
        {
          "emp_id": 213259,
          "emp_name": "Amiruddin bin Muh Ichsan",
          "position": "Operator"
        },
        {
          "emp_id": 120365,
          "emp_name": "Marganda Hutabarat",
          "position": "Operator"
        },
        {
          "emp_id": 213157,
          "emp_name": "Suriyadi",
          "position": "Operator"
        },
        {
          "emp_id": 123679,
          "emp_name": "Bernad",
          "position": "Operator"
        },
        {
          "emp_id": 213636,
          "emp_name": "Saldianto",
          "position": "Operator"
        },
        {
          "emp_id": 213517,
          "emp_name": "Ansar",
          "position": "Operator"
        },
        {
          "emp_id": 122698,
          "emp_name": "Ervian Ala'",
          "position": "Operator"
        },
        {
          "emp_id": 213208,
          "emp_name": "Bondan Seno Aji",
          "position": "Operator"
        },
        {
          "emp_id": 120711,
          "emp_name": "Etmundus Teke",
          "position": "Operator"
        },
        {
          "emp_id": 420061,
          "emp_name": "Hebron Resa",
          "position": "Operator"
        },
        {
          "emp_id": 210842,
          "emp_name": "Bambang Sangga L",
          "position": "Operator"
        },
        {
          "emp_id": 213463,
          "emp_name": "Daya Fajar",
          "position": "Operator"
        },
        {
          "emp_id": 213509,
          "emp_name": "Alfrianus Ritta",
          "position": "Operator"
        },
        {
          "emp_id": 420062,
          "emp_name": "Ardin Rante L.",
          "position": "Operator"
        },
        {
          "emp_id": 213420,
          "emp_name": "Edy Setyawan",
          "position": "Operator"
        },
        {
          "emp_id": 122416,
          "emp_name": "Yosep Timba",
          "position": "Operator"
        },
        {
          "emp_id": 123364,
          "emp_name": "Syamsul Anwar",
          "position": "Operator"
        },
        {
          "emp_id": 123497,
          "emp_name": "James Sirat",
          "position": "Operator"
        },
        {
          "emp_id": 212225,
          "emp_name": "Sukardi",
          "position": "Operator"
        },
        {
          "emp_id": 212231,
          "emp_name": "Doni Wiskian Purba",
          "position": "Operator"
        },
        {
          "emp_id": 212428,
          "emp_name": "Muhammad Abduh",
          "position": "Operator"
        },
        {
          "emp_id": 123208,
          "emp_name": "Sirajuddin",
          "position": "Operator"
        },
        {
          "emp_id": 212430,
          "emp_name": "Evin Windarko",
          "position": "Operator"
        },
        {
          "emp_id": 212272,
          "emp_name": "Teguh Prasetiawan",
          "position": "Operator"
        },
        {
          "emp_id": 123262,
          "emp_name": "Natan Bara",
          "position": "Operator"
        },
        {
          "emp_id": 212178,
          "emp_name": "Danu Wardoyo",
          "position": "Operator"
        },
        {
          "emp_id": 212361,
          "emp_name": "Aman Antonius Nababan",
          "position": "Operator"
        },
        {
          "emp_id": 212179,
          "emp_name": "Mufit Sarifudin",
          "position": "Operator"
        },
        {
          "emp_id": 420219,
          "emp_name": "Darman SIburian",
          "position": ""
        },
        {
          "emp_id": 420218,
          "emp_name": "Agustinus Syukur",
          "position": ""
        },
        {
          "emp_id": 420221,
          "emp_name": "Hamka",
          "position": ""
        },
        {
          "emp_id": 420220,
          "emp_name": "Markus Rayo",
          "position": ""
        },
        {
          "emp_id": 420224,
          "emp_name": "Rajusi",
          "position": ""
        },
        {
          "emp_id": 420225,
          "emp_name": "Marlon Saragih",
          "position": ""
        },
        {
          "emp_id": 420287,
          "emp_name": "ALFIAN",
          "position": ""
        },
        {
          "emp_id": 213513,
          "emp_name": "Bambang Setiawan",
          "position": "Operator"
        },
        {
          "emp_id": 212761,
          "emp_name": "Elman Juniwanto Manurung",
          "position": "Operator"
        },
        {
          "emp_id": 213470,
          "emp_name": "Hairul",
          "position": "Operator"
        },
        {
          "emp_id": 212007,
          "emp_name": "Dadi Suryadi",
          "position": "Operator"
        },
        {
          "emp_id": 213499,
          "emp_name": "Nober Londa",
          "position": "Operator"
        },
        {
          "emp_id": 123272,
          "emp_name": "Sangka",
          "position": "Operator"
        },
        {
          "emp_id": 213557,
          "emp_name": "Saripuddin",
          "position": "Operator"
        },
        {
          "emp_id": 211992,
          "emp_name": "Arisman",
          "position": "Operator"
        },
        {
          "emp_id": 122423,
          "emp_name": "Tomas Batti Mangallo",
          "position": "Operator"
        },
        {
          "emp_id": 210723,
          "emp_name": "Jumianto Toto",
          "position": "Operator"
        },
        {
          "emp_id": 121816,
          "emp_name": "Mulya Slamet",
          "position": "Operator"
        },
        {
          "emp_id": 122417,
          "emp_name": "Bernadus Palumpun",
          "position": "Operator"
        },
        {
          "emp_id": 122477,
          "emp_name": "Poniyoto",
          "position": "Operator"
        },
        {
          "emp_id": 213558,
          "emp_name": "Cornelius Ganti Lolo Bua'",
          "position": ""
        },
        {
          "emp_id": 210985,
          "emp_name": "Sugianto",
          "position": "Operator"
        },
        {
          "emp_id": 123148,
          "emp_name": "Ronal Pademme",
          "position": "Operator"
        },
        {
          "emp_id": 120535,
          "emp_name": "Sukirman",
          "position": "Operator"
        },
        {
          "emp_id": 123198,
          "emp_name": "Abdul Rahman bin Bassong",
          "position": "Operator"
        },
        {
          "emp_id": 123241,
          "emp_name": "Muhammad Ilyas",
          "position": "Operator"
        },
        {
          "emp_id": 123346,
          "emp_name": "Rahmatullah",
          "position": "Operator"
        },
        {
          "emp_id": 122028,
          "emp_name": "Kasnariadi Bin Hasbulah",
          "position": "Operator"
        },
        {
          "emp_id": 123650,
          "emp_name": "Titus Mono",
          "position": "Operator"
        },
        {
          "emp_id": 123651,
          "emp_name": "Abdul Jabar",
          "position": "Operator"
        },
        {
          "emp_id": 210896,
          "emp_name": "Abd. Wahab",
          "position": "Operator"
        },
        {
          "emp_id": 213451,
          "emp_name": "Leri Hendri Siagian",
          "position": "Operator"
        },
        {
          "emp_id": 213404,
          "emp_name": "Angger Saputro",
          "position": "Operator"
        },
        {
          "emp_id": 213234,
          "emp_name": "Ronal Ute Palobo",
          "position": "Operator"
        },
        {
          "emp_id": 213205,
          "emp_name": "Ronal Yohanis",
          "position": "Operator"
        },
        {
          "emp_id": 213247,
          "emp_name": "Amsyaruddin",
          "position": "Operator"
        },
        {
          "emp_id": 123513,
          "emp_name": "Delfi Ade",
          "position": "Operator"
        },
        {
          "emp_id": 212736,
          "emp_name": "Rahmat",
          "position": "Operator"
        },
        {
          "emp_id": 210950,
          "emp_name": "Junhaidi",
          "position": "Operator"
        },
        {
          "emp_id": 212186,
          "emp_name": "Tanamar Tahir",
          "position": "Operator"
        },
        {
          "emp_id": 212180,
          "emp_name": "Ahmad Zulfahmi",
          "position": "Operator"
        },
        {
          "emp_id": 211631,
          "emp_name": "Jhon Tarjo Katimin",
          "position": "Operator"
        },
        {
          "emp_id": 211697,
          "emp_name": "Lukman Azis",
          "position": "Operator"
        },
        {
          "emp_id": 212247,
          "emp_name": "Antolonius Tande",
          "position": "Operator"
        },
        {
          "emp_id": 212181,
          "emp_name": "Arnajil",
          "position": "Operator"
        },
        {
          "emp_id": 211664,
          "emp_name": "Arrahman Nusu",
          "position": "Operator"
        },
        {
          "emp_id": 212701,
          "emp_name": "Rian Choirul",
          "position": "Operator"
        },
        {
          "emp_id": 212703,
          "emp_name": "Abri",
          "position": "Operator"
        },
        {
          "emp_id": 213001,
          "emp_name": "Abdul Rahman RR",
          "position": "Operator"
        },
        {
          "emp_id": 213003,
          "emp_name": "Kukuh Andrianto",
          "position": "Operator"
        },
        {
          "emp_id": 212702,
          "emp_name": "Nasruddin",
          "position": "Operator"
        },
        {
          "emp_id": 213006,
          "emp_name": "Abdul Rahman",
          "position": "Operator"
        },
        {
          "emp_id": 213009,
          "emp_name": "Agung Permadi",
          "position": "Operator"
        },
        {
          "emp_id": 212166,
          "emp_name": "Rudi Sutikno",
          "position": "Operator"
        },
        {
          "emp_id": 213008,
          "emp_name": "Evan Aditia",
          "position": "Operator"
        },
        {
          "emp_id": 212739,
          "emp_name": "Muhammad Kamal A",
          "position": "Operator"
        },
        {
          "emp_id": 212706,
          "emp_name": "Bahroni",
          "position": "Operator"
        },
        {
          "emp_id": 213004,
          "emp_name": "Muhammad Alya W",
          "position": "Operator"
        },
        {
          "emp_id": 213012,
          "emp_name": "Muhammad Ridwan",
          "position": "Operator"
        },
        {
          "emp_id": 212169,
          "emp_name": "Herdi Amir Rowa",
          "position": "Operator"
        },
        {
          "emp_id": 212718,
          "emp_name": "Ahmad Syahril",
          "position": "Operator"
        },
        {
          "emp_id": 213005,
          "emp_name": "Alief Peristiwa",
          "position": "Operator"
        },
        {
          "emp_id": 213002,
          "emp_name": "Andri Amin Nur",
          "position": "Operator"
        },
        {
          "emp_id": 212174,
          "emp_name": "Ahmad Afriana",
          "position": "Operator"
        },
        {
          "emp_id": 212705,
          "emp_name": "Indra Hidayat",
          "position": "Operator"
        },
        {
          "emp_id": 213007,
          "emp_name": "Muhammad Tauhid",
          "position": "Operator"
        },
        {
          "emp_id": 212251,
          "emp_name": "Husni Mubarak",
          "position": "Operator"
        },
        {
          "emp_id": 212250,
          "emp_name": "Nur Mukliansyah",
          "position": "Operator"
        },
        {
          "emp_id": 213010,
          "emp_name": "Abd Razak S",
          "position": "Operator"
        },
        {
          "emp_id": 213011,
          "emp_name": "Ivan Nurul Adi",
          "position": "Operator"
        },
        {
          "emp_id": 212704,
          "emp_name": "Sabaruddin",
          "position": "Operator"
        },
        {
          "emp_id": 120487,
          "emp_name": "Sapril",
          "position": "Operator"
        },
        {
          "emp_id": 121291,
          "emp_name": "M. Basir",
          "position": "Operator"
        },
        {
          "emp_id": 123076,
          "emp_name": "I wayan sugeri",
          "position": "Operator"
        },
        {
          "emp_id": 123427,
          "emp_name": "Ahmad Bastami",
          "position": "Operator"
        },
        {
          "emp_id": 121317,
          "emp_name": "Yamat",
          "position": "Operator"
        },
        {
          "emp_id": 123616,
          "emp_name": "Riky",
          "position": "Operator"
        },
        {
          "emp_id": 121224,
          "emp_name": "Gawat S Pendi",
          "position": "Operator"
        },
        {
          "emp_id": 211526,
          "emp_name": "Sunarto",
          "position": "Operator"
        },
        {
          "emp_id": 420206,
          "emp_name": "Ardino",
          "position": ""
        },
        {
          "emp_id": 420207,
          "emp_name": "Aruliansyah",
          "position": ""
        },
        {
          "emp_id": 123182,
          "emp_name": "La Enre S.",
          "position": "Operator Dredging"
        },
        {
          "emp_id": 123184,
          "emp_name": "Roni",
          "position": "Operator Dredging"
        },
        {
          "emp_id": 210770,
          "emp_name": "Nasri Effendi",
          "position": "Operator Dredging"
        },
        {
          "emp_id": 212420,
          "emp_name": "Abraham",
          "position": "Operator Dredging"
        },
        {
          "emp_id": 212429,
          "emp_name": "Marzuki",
          "position": "Operator Dredging"
        },
        {
          "emp_id": 121524,
          "emp_name": "Verawati Sinaga",
          "position": "Admin"
        },
        {
          "emp_id": 124447,
          "emp_name": "Ernawati",
          "position": "Admin"
        },
        {
          "emp_id": 120526,
          "emp_name": "Sugiono",
          "position": "Operator"
        },
        {
          "emp_id": 120525,
          "emp_name": "Sugiman",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 120529,
          "emp_name": "Sukadi Sp",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 120592,
          "emp_name": "Trisno Suntha",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 120861,
          "emp_name": "Rudi Hartono Bin Zainal",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 121136,
          "emp_name": "Natsir Tau",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 123096,
          "emp_name": "Mohamad Lando",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 211446,
          "emp_name": "Junaedi",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 211671,
          "emp_name": "Timpayung Kanari",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 211673,
          "emp_name": "Yance Kambuna",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 212227,
          "emp_name": "Asmuransyah",
          "position": "Driver Manhaul"
        },
        {
          "emp_id": 420199,
          "emp_name": "Fathan Nur",
          "position": "Admin"
        }
    ]);
  };
  