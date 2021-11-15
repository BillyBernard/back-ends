const plants = [
    {
        nickname: 'Marble Queen Pothos',
        species: 'Epipremnum aureum',
        image_url: 'marble-pothos.png',
        water_frequency: 'Water every 1-2 weeks',
        light_requirement: 'Thrives in medium to low indirect light. Not suited for intense, direct sun.',
        user_id: 1,
    },

    {
        nickname: 'Snake Plant Laurentii',
        species: 'Dracaena trifasciata',
        image_url: 'snake-plant2.png',
        water_frequency: 'Water every 2-3 weeks',
        light_requirement: 'Thrives in medium to bright indirect light, but can tolerate low indirect light.',
        user_id: 1,
    },
    {
        nickname: 'ZZ Plant',
        species: 'Zamioculcas',
        image_url: 'zz.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement:
        'Thrives in medium to low indirect light. Can tolerate bright indirect light. Not suited for intense, direct sun.',
        user_id: 2,
    },
    {
        nickname: 'Echeveria',
        species: 'succulents',
        image_url: 'ech.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 3,
    },
]
/*
    {
        nickname: 'Monstera Deliciosa',
        species: '',
        image_url: 'monstera.png',
        water_frequency: 'Water every 1-2 weeks',
        light_requirement:
        'Thrives in bright to medium indirect light. Not usually suited for direct sun but can be acclimated to withstand it.',
        user_id: 1,
    },
    {
        nickname: 'Bird’s Nest Fern',
        species: '',
        image_url: 'birds-fern.png',
        water_frequency: 'Water weekly',
        light_requirement: 'Thrives in medium to bright indirect light, but can tolerate low indirect light.',
        user_id: 2,
    },
    {
        nickname: 'Philodendron Green',
        species: '',
        image_url: 'philodendron.png',
        water_frequency: 'Water every 1-2 weeks',
        light_requirement: 'Thrives in medium indirect light, but can tolerate low indirect light.',
        user_id: 3,
    },
    {
        nickname: 'Calathea Rattlesnake',
        species: '',
        image_url: 'rattlesnake.png',
        water_frequency: 'Water every 1-2 weeks',
        light_requirement: 'Thrives in medium to bright indirect light, but can tolerate low indirect light.',
        user_id: 1,
    },
    {
        nickname: 'Hoya Kerrii Plant',
        species: '',
        image_url: 'hoyakerrii.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 2,
    },
    {
        nickname: 'Haworthia Zebra',
        species: '',
        image_url: 'zebra.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 3,
    },
    {
        nickname: 'Echeveria Preta',
        species: '',
        image_url: 'ech-preta.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 1,
    },
    {
        nickname: 'Sago Palm',
        species: '',
        image_url: 'sago.png',
        water_frequency: 'Water twice a week',
        light_requirement: 'Medium or bright light.',
        user_id: 1,
    },
    {
        nickname: 'Echeveria Lola',
        species: '',
        image_url: 'ech-lola.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 2,
    },
    {
        nickname: 'Moss Ball',
        species: '',
        image_url: 'moss-ball.png',
        water_frequency:
        'Keep submerged in distilled or filtered room temperature, or colder, water. Change water once every 1-2 weeks, depending on algae growth.',
        user_id: 3,
        light_requirement: 'Thrives in low to medium indirect light. Not suited for intense, direct sun.',
    },
    {
        nickname: 'Succulent',
        species: '',
        image_url: 'succulent.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 1,
    },
    {
        nickname: 'Pilea Peperomioides',
        species: '',
        image_url: 'pilea.png',
        water_frequency: 'Water every 2-3 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright to medium indirect light.',
        user_id: 2,
    },
    {
        nickname: 'Air Plant',
        species: '',
        image_url: 'air-plant2.png',
        water_frequency:
            'Soak weekly in a bowl of room temperature water for 15-30 minutes. Shake excess water off afterward.',
        user_id: 3,
        light_requirement: 'Thrives in bright indirect light. Keep smaller air plants out of intense, direct sun.',
    },
    {
        nickname: 'White Orchid',
        species: '',
        image_url: 'white-orchid.png',
        water_frequency: 'Water about every week with 3-4 tablespoons of water',
        light_requirement: 'Thrives in bright indirect light, but can tolerate medium indirect light. Avoid direct sun.',
        user_id: 1,
    },
    {
        nickname: 'Purple Orchid',
        species: '',
        image_url: 'purple-orchid.png',
        water_frequency: 'Water about every week with 3-4 tablespoons of water',
        light_requirement: 'Thrives in bright indirect light, but can tolerate medium indirect light. Avoid direct sun.',
        user_id: 2,
    },
    {
        nickname: 'Calathea Medallion',
        species: '',
        image_url: 'medallion.png',
        water_frequency: 'Water every 1-2 weeks',
        light_requirement: 'Thrives in medium to bright indirect light, but can tolerate low indirect light.',
        user_id: 3,
    },
    {
        nickname: 'Red Anthurium',
        species: '',
        image_url: 'red-anth.png',
        water_frequency: 'Water every 1-2 weeks,',
        light_requirement: 'Thrives in bright indirect light, but can tolerate medium indirect light. Avoid direct sun.',
        user_id: 1,
    },
    {
        nickname: 'Pink Anthurium',
        species: '',
        image_url: 'pink-anth.png',
        water_frequency: 'Water every 1-2 weeks',
        light_requirement: 'Thrives in bright indirect light, but can tolerate medium indirect light. Avoid direct sun.',
        user_id: 1,
    },
    {
        nickname: 'Olmsted x Parlor Palm',
        species: '',
        image_url: 'olmsted.png',
        water_frequency: 'Water every 1-2 weeks,',
        user_id: 2,
        light_requirement:
            'Thrives in medium to bright indirect light, can tolerate low indirect light. Not suited for intense, direct sun.',
    },
    {
        nickname: 'Xerographica Air Plant',
        species: '',
        image_url: 'xero-airplant.png',
        water_frequency:
            'Soak weekly in a bowl of room temperature water for 15-30 minutes. Shake excess water off afterward.',
        user_id: 3,
        light_requirement: 'Thrives in bright indirect light, but can tolerate bright direct light.',
    },
    {
        nickname: 'String of Pearls',
        species: '',
        image_url: 'string-pearls.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 1,
    },
    {
        nickname: 'Kalanchoe Flapjack',
        species: '',
        image_url: 'flapjack.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 2,
    },
    {
        nickname: 'Sempervivum Red Beauty',
        species: '',
        image_url: 'semp-red.png',
        water_frequency: 'Water every 3-4 weeks',
        light_requirement: 'Thrives in bright direct light, but can tolerate bright indirect light.',
        user_id: 3,
    },
    {
        nickname: 'Aloe Vera',
        species: '',
        image_url: 'aloe.png',
        water_frequency: 'Water heavily about once every two weeks, waiting until the soil dries out fully.',
        user_id: 1,
        light_requirement:
            'Six to eight hours of direct sun is best, although most aloe vera plants will tolerate some light shade or filtered sun at midday.',
    },
    {
        nickname: 'Bromeliad',
        species: '',
        image_url: 'bromeliad.png',
        water_frequency: 'Water once a week',
        light_requirement: 'Provide bright light without direct sun exposure.',
        user_id: 2,
    },
    {
        nickname: 'Aglaonema',
        species: '',
        image_url: 'agla.png',
        water_frequency: 'Water every 2-3 weeks',
        user_id: 3,
        light_requirement:
            'Grow red aglaonema in low, medium, or bright light. The plant often shows the best color in medium or indirect light indoors.',
    },
    {
        nickname: 'Spider Plant',
        species: '',
        image_url: 'spider.png',
        water_frequency: 'Water once a week',
        light_requirement: 'Bright, indirect light and they will flourish',
        user_id: 1,
    },
    {
        nickname: 'Dracaena Lemon Lime ',
        species: '',
        image_url: 'lemon-lime.png',
        water_frequency: 'Water once a week but not if soil feels moist',
        light_requirement: 'Light sunlight',
        user_id: 1,
    },
]
*/
exports.seed = function (knex) {
    return knex('plants')
        .then(function () {
            return knex('plants').insert(plants);
        });
};

exports.plants = plants