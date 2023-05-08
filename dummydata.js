const food = 
{
  collection: [
    {
      id: "1",
      title: "new dish",
      images: [
        "https://cdn.hootout.com/VidyBack-videos/food.png",
        "https://cdn.hootout.com/VidyBack-videos/food2.png",
        "https://cdn.hootout.com/VidyBack-videos/food3.png",
        "https://cdn.hootout.com/VidyBack-videos/food4.png",
        "https://cdn.hootout.com/VidyBack-videos/food5.png",
        "https://cdn.hootout.com/VidyBack-videos/food6.png",
      ],
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "10%",
      customerReview: "love the food",
      customerName: "Sonu",
    },
    {
      id: "2",
      title: "Platter",
      images: ["https://cdn.hootout.com/VidyBack-videos/food2.png"],
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "10%",
      customerReview: "Awesome Taste",
      customerName: "rohan",
    },
  ],
};

const auto = {
  collection: [
    {
      id: "2",
      title: "2019 Mercedes-Benz CLA",
      images: ["https://cdn.hootout.com/VidyBack-videos/benz2.jpeg","https://cdn.hootout.com/VidyBack-videos/benz1.jpeg","https://cdn.hootout.com/VidyBack-videos/benz3.jpeg","https://cdn.hootout.com/VidyBack-videos/benz4.jpeg","https://cdn.hootout.com/VidyBack-videos/benz5.jpeg","https://cdn.hootout.com/VidyBack-videos/benz6.jpeg","https://cdn.hootout.com/VidyBack-videos/benz7.jpeg","https://cdn.hootout.com/VidyBack-videos/benz8.jpeg"],
      customerReview: "We got a top notch car with a top notch experience. Our benz is our family's perfect new travel partner",
      customerName: "Kapil Malhotra",
      location: "Santacruz",
      price: "Rs.30,90,000",
      contactName: "Spinny.com",
      contactNumber: "971-089-7108",
      originalPrice: "Rs.30,90,000",
      discountedPrice: "Rs.30,00,000",
      discountPercentage: "1%",
      desc: "Mercedes-Benz CLA is designed for maximum comfort and luxury, with plush leather seats, ambient lighting, and a state-of-the-art sound system. It also features advanced infotainment and connectivity features, such as a large touchscreen display, voice recognition, and smartphone integration.",
      feature1: "Cruise control",
      feature2: "Sunroof",
      feature3: "Airbags",
    },
    {
      id: "3",
      title: "2021 Jeep Compass",
      images: ["https://cdn.hootout.com/VidyBack-videos/Jeep1.jpeg","https://cdn.hootout.com/VidyBack-videos/Jeep2.jpeg","https://cdn.hootout.com/VidyBack-videos/Jeep3.jpeg","https://cdn.hootout.com/VidyBack-videos/Jeep4.jpeg","https://cdn.hootout.com/VidyBack-videos/Jeep5.jpeg"],
      customerReview: "Jeep Compass offer a comfortable and convenient way to travel and enjoy the great outdoors.",
      customerName: "Anish Jhaveri",
      location: "Santacruz",
      price: "Rs.24,50,000",
      contactName: "Spinny.com",
      contactNumber: "971-089-7108",
      originalPrice: "Rs.24,50,000",
      discountedPrice: "Rs.24,00,000",
      discountPercentage: "1%",
      desc: "Jeep Compass is designed for maximum comfort and luxury, with plush leather seats, ambient lighting, and a state-of-the-art sound system. It also features advanced infotainment and connectivity features, such as a large touchscreen display, voice recognition, and smartphone integration.",
      feature1: "Anti-glare mirrors",
      feature2: "Wireless Phone Charging",
      feature3: "Airbags",
    },
    {
      id: "4",
      title: "2017 Mercedes-Benz C-Class",
      images: ["https://cdn.hootout.com/VidyBack-videos/benzW1.jpeg","https://cdn.hootout.com/VidyBack-videos/benzW2.jpeg","https://cdn.hootout.com/VidyBack-videos/benzW3.jpeg","https://cdn.hootout.com/VidyBack-videos/benzW4.jpeg","https://cdn.hootout.com/VidyBack-videos/benzW5.jpeg","https://cdn.hootout.com/VidyBack-videos/benzW6.jpeg","https://cdn.hootout.com/VidyBack-videos/benzW7.jpeg"],
      customerReview: "We got a great car, approved by all generations of our family.",
      customerName: "Tom",
      location: "Las Vegas",
      price: "$202,000",
      contactName: "Spinny.com",
      contactNumber: "971-089-7108",
      originalPrice: "$202,000",
      discountedPrice: "$199,000",
      discountPercentage: "1%",
      desc: "Mercedes-Benz C-Classs is designed for maximum comfort and luxury, with plush leather seats, ambient lighting, and a state-of-the-art sound system. It also features advanced infotainment and connectivity features, such as a large touchscreen display, voice recognition, and smartphone integration.",
      feature1: "Seat lumbar support",
      feature2: "Integrated (in-dash) music system",
      feature3: "GPS navigation system",
    },
    {
      id: "5",
      title: "2018 BMW 3 Series",
      images: ["https://cdn.hootout.com/VidyBack-videos/bmw1.jpeg","https://cdn.hootout.com/VidyBack-videos/bmw2.jpeg","https://cdn.hootout.com/VidyBack-videos/bmw3.jpeg","https://cdn.hootout.com/VidyBack-videos/bmw4.jpeg","https://cdn.hootout.com/VidyBack-videos/bmw5.jpeg","https://cdn.hootout.com/VidyBack-videos/bmw6.jpeg","https://cdn.hootout.com/VidyBack-videos/bmw7.jpeg"],
      customerReview: "We got a great car, approved by all generations of our family.",
      customerName: "Simran Gujral",
      location: "Santacruz",
      price: "Rs.34,50,000",
      contactName: "Spinny.com",
      contactNumber: "971-089-7108",
      originalPrice: "Rs.34,50,000",
      discountedPrice: "Rs.34,00,000",
      discountPercentage: "1%",
      desc: "BMW 3 Series is designed for maximum comfort and luxury, with plush leather seats, ambient lighting, and a state-of-the-art sound system. It also features advanced infotainment and connectivity features, such as a large touchscreen display, voice recognition, and smartphone integration.",
      feature1: "Keyless start",
      feature2: "Touch screen infotainment system",
      feature3: "Rain sensing wipers",
    },
    // {
    //   id: "2",
    //   title: "Camper Van",
    //   images: ["https://cdn.hootout.com/VidyBack-videos/mini1.jpg","https://cdn.hootout.com/VidyBack-videos/mini2.jpg","https://cdn.hootout.com/VidyBack-videos/mini3.jpg","https://cdn.hootout.com/VidyBack-videos/mini4.jpg"],
    //   customerReview: "Camper Van offer a comfortable and convenient way to travel and enjoy the great outdoors.",
    //   customerName: "Tom",
    //   location: "Las Vegas",
    //   price: "$60,000",
    //   contactName: "Hotwheels",
    //   contactNumber: "987654xxxx",
    //   originalPrice: "$60,000",
    //   discountedPrice: "$50,000",
    //   discountPercentage: "16%",
    //   desc: "Camper Van offers a variety of sleeping arrangements and can accommodate up to four people. Some of the key features of the California include a pop-up roof, a fully equipped kitchenette, and a comfortable seating area. It is available in several trims, with varying levels of luxury and amenities.",
    //   feature1: "Sleeping Accommodations",
    //   feature2: "Kitchen Facilities",
    //   feature3: "Power and Water Systems",
    // },
    // {
    //   id: "3",
    //   title: "E-Bike",
    //   images: [
    //     "https://cdn.hootout.com/VidyBack-videos/elecB1.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/elecB2.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/elecB3.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/elecB4.jpg",
    //   ],
    //   customerReview: "Wonderful look, And easy and really joyful riding experience.Only the drawback may face is the pick up on hikes.",
    //   customerName: "Manjeet",
    //   location: "Miami",
    //   price: "$10,000",
    //   contactName: "Biker's Point",
    //   contactNumber: "987654xxxx",
    //   originalPrice: "$10,000",
    //   discountedPrice: "$9,000",
    //   discountPercentage: "10%",
    //   desc: "E-bikes are becoming increasingly popular as a means of transportation, recreation, and exercise. They offer several advantages over traditional bicycles.",
    //   feature1: "Power Assistance: The electric motor on an e-bike provides power assistance to the rider, making it easier to pedal and travel longer distances.",
    //   feature2: "Improved Speed: E-bikes can reach speeds of up to 20-28 mph (32-45 kph), depending on the model and local regulations.",
    //   feature3: "Eco-Friendly: E-bikes are an eco-friendly alternative to cars and other vehicles that use fossil fuels.",
    // },






    ////////////////////
    // {
    //   id: "6",
    //   title: "Car Story",
    //   images: [
    //     "https://cdn.hootout.com/VidyBack-videos/autostory1.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/autostory2.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/autostory3.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/autostory4.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/autostory5.jpg",
    //   ],
    //   customerReview: "Such a nice car",
    //   customerName: "Manjeet",
    //   location: "Kurla West",
    //   price: 100,
    //   contactName: "Agent",
    //   contactNumber: "9876543210",
    //   originalPrice: 10,
    //   discountedPrice: 5,
    //   discountPercentage: "50%",
    //   desc: "Both engines are paired with a six-speed manual gearbox as standard, while a six-speed automatic gearbox is available as an option.",
    //   feature1: "The Thar is equipped with a four-wheel-drive system that comes with low-range gearing, allowing it to tackle tough off-road terrain.",
    //   feature2: "The Thar is offered with two engine options, a 2.0-liter turbocharged petrol engine and a 2.2-liter turbocharged diesel engine.",
    //   feature3: "The Thar comes with a six-speed manual gearbox as standard, while a six-speed automatic gearbox is available as an option.",
    // },
    // {
    //   id: "4",
    //   title: "5 Sports Car",
    //   images: [
    //     "https://cdn.hootout.com/VidyBack-videos/car3.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/car4.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/car5.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/car6.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/car7.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/car8.jpg",
    //   ],
    //   customerReview: "Such a nice car",
    //   customerName: "Manjeet",
    //   location: "Kurla West",
    //   price: 100,
    //   contactName: "Agent",
    //   contactNumber: "9876543210",
    //   originalPrice: 10,
    //   discountedPrice: 5,
    //   discountPercentage: "50%",
    //   desc: "the Mahindra Thar is a capable off-road SUV that offers a unique blend of classic design and modern technology.",
    //   feature1: "The Thar is equipped with a four-wheel-drive system that comes with low-range gearing, allowing it to tackle tough off-road terrain.",
    //   feature2: "The Thar is offered with two engine options, a 2.0-liter turbocharged petrol engine and a 2.2-liter turbocharged diesel engine.",
    //   feature3: "The Thar comes with a six-speed manual gearbox as standard, while a six-speed automatic gearbox is available as an option.",
    // },
    // {
    //   id: "5",
    //   title: "Car Story2",
    //   images: [
    //     "https://cdn.hootout.com/VidyBack-videos/autostory21.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/autostory22.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/autostory23.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/autostory24.jpg",
    //     "https://cdn.hootout.com/VidyBack-videos/autostory25.jpg",
    //   ],
    //   customerReview: "Such a nice car",
    //   customerName: "Manjeet",
    //   location: "Kurla West",
    //   price: 100,
    //   contactName: "Agent",
    //   contactNumber: "9876543210",
    //   originalPrice: 10,
    //   discountedPrice: 5,
    //   discountPercentage: "50%",
    //   desc: "The Thar is also equipped with a four-wheel-drive system that comes with low-range gearing, allowing it to tackle tough off-road terrain.",
    //   feature1: "The Thar is equipped with a four-wheel-drive system that comes with low-range gearing, allowing it to tackle tough off-road terrain.",
    //   feature2: "The Thar is offered with two engine options, a 2.0-liter turbocharged petrol engine and a 2.2-liter turbocharged diesel engine.",
    //   feature3: "The Thar comes with a six-speed manual gearbox as standard, while a six-speed automatic gearbox is available as an option.",
    // },
  ],
};

const estate = {
  collection: [
    {
      id: "1",
      title: "Ocean View Villa",
      images: [
        "https://cdn.hootout.com/VidyBack-videos/estate1.jpg",
        "https://cdn.hootout.com/VidyBack-videos/estate2.jpg",
        "https://cdn.hootout.com/VidyBack-videos/estate3.jpg",
        "https://cdn.hootout.com/VidyBack-videos/estate4.jpg",
        "https://cdn.hootout.com/VidyBack-videos/estate5.jpg",
        "https://cdn.hootout.com/VidyBack-videos/estate6.jpg",
      ],
      customerReview: "Good location and everything worked well and was as described. Would definitely stay again.",
      customerName: "John",
      location: "Miami",
      price: "$1000",
      contactName: "Agent",
      contactNumber: "987654xxxx",
      originalPrice: "$1000",
      discountedPrice: "$900",
      discountPercentage: "10%",
      feature1: "Brand new modern and stylish furniture with king size bed",
      feature2: "Room essentials such as towels, bed linens, pillows, body wash, shampoo, conditioner and toilet",
      feature3: "Complimentary high-speed Wi-Fi",
    },
    {
      id: "3",
      title: "Interior",
      images: [
        "https://cdn.hootout.com/VidyBack-videos/int.jpg",
        "https://cdn.hootout.com/VidyBack-videos/int1.jpg",
        "https://cdn.hootout.com/VidyBack-videos/int2.jpg",
        "https://cdn.hootout.com/VidyBack-videos/int3.jpg",
        "https://cdn.hootout.com/VidyBack-videos/int4.jpg",
        "https://cdn.hootout.com/VidyBack-videos/int5.jpg",
      ],
      customerReview: "Such a nice Bunglow",
      customerName: "User",
      location: "Kurla West",
      price: "100",
      contactName: "Agent",
      contactNumber: "9876543210",
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "50%",
    },
    {
      id: "4",
      title: "Bunglow",
      images: [
        "https://cdn.hootout.com/VidyBack-videos/Bung.png",
        "https://cdn.hootout.com/VidyBack-videos/Bung2.png",
        "https://cdn.hootout.com/VidyBack-videos/Bung3.png",
        "https://cdn.hootout.com/VidyBack-videos/Bung4.png",
      ],
      customerReview: "Such a nice Bunglow",
      customerName: "User",
      location: "Kurla West",
      price: "100",
      contactName: "Agent",
      contactNumber: "9876543210",
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "50%",
    },
    {
      id: "5",
      title: "Flat",
      images: ["https://cdn.hootout.com/VidyBack-videos/flat.png"],
      customerReview: "Such a nice Flat",
      customerName: "User",
      location: "Kurla West",
      price: "100",
      contactName: "Agent2",
      contactNumber: "9876543210",
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "50%",
    },
    {
      id: "6",
      title: "Flat Square",
      images: [
        "https://cdn.hootout.com/VidyBack-videos/re1.jpg",
        "https://cdn.hootout.com/VidyBack-videos/re2.jpg",
        "https://cdn.hootout.com/VidyBack-videos/re3.jpg",
        "https://cdn.hootout.com/VidyBack-videos/re4.jpg",
        "https://cdn.hootout.com/VidyBack-videos/re5.jpg",
        "https://cdn.hootout.com/VidyBack-videos/re6.jpg",
      ],
      customerReview: "Such a nice Flat",
      customerName: "User",
      location: "Kurla West",
      price: "100",
      contactName: "Agent2",
      contactNumber: "9876543210",
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "50%",
    },
  ],
};

const travel = {
  collection: [
    {
      id: "1",
      title: "Trip to Mahabaleshwar",
      images: ["https://cdn.hootout.com/VidyBack-videos/Travel1.png"],
      customerReview: "Such a nice place",
      customerName: "User",
      location: "Mahabaleshwar",
      price: "100",
      contactName: "Agent",
      contactNumber: "9876543210",
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "50%",
    },
    {
      id: "2",
      title: "Mumbai",
      images: ["https://cdn.hootout.com/VidyBack-videos/Travel2.png"],
      customerReview: "Best City",
      customerName: "User",
      location: "Kurla West",
      price: "100",
      contactName: "Agent2",
      contactNumber: "9876543210",
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "50%",
    },
    {
      id: "3",
      title: "Mumbai square",
      images: [
        "https://cdn.hootout.com/VidyBack-videos/ttsq1.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttsq2.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttsq3.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttsq4.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttsq5.jpg",
      ],
      customerReview: "Best City",
      customerName: "User",
      location: "Kurla West",
      price: "100",
      contactName: "Agent2",
      contactNumber: "9876543210",
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "50%",
    },
    {
      id: "4",
      title: "Mumbai Post size",
      images: [
        "https://cdn.hootout.com/VidyBack-videos/ttpc1.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttpc2.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttpc3.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttpc4.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttpc5.jpg",
        "https://cdn.hootout.com/VidyBack-videos/ttpc6.jpg",
      ],
      customerReview: "Best City",
      customerName: "User",
      location: "Kurla West",
      price: "100",
      contactName: "Agent2",
      contactNumber: "9876543210",
      originalPrice: 10,
      discountedPrice: 5,
      discountPercentage: "50%",
    },
  ],
};

const autoQuote = {
  collection: [
    {
      id: "1",
      Quote: "Driving a car is like a meditation. It's a journey itself.",
      Author: "Lynette Winter",
    },
    {
      id: "2",
      Quote: "The automobile has not merely taken over the street, it has dissolved it.",
      Author: "J.B. Jackson",
    },
    {
      id: "3",
      Quote: "A dream without ambition is like a car without gas... you're not going anywhere.",
      Author: "Sean Hampton",
    }
  ],
}

const estateQuote = {
  collection: [
    {
      id: "1",
      Quote: "Home is where love resides, memories are created, and laughter never ends.",
      Author: "Unknown",
    },
    {
      id: "2",
      Quote: "The light is what guides you home, the warmth is what keeps you there.",
      Author: "Ellie Rodriguez",
    }
  ],
}

const autoEvent = {
  collection: [
    {
      id: "1",
      EventName: "Music Event",
      EventDate: "30 Apr 2023",
      userImage: "https://cdn.hootout.com/vidyback/logo/uuser.jpg",
      UserBio: "Alexandra's some dummy bio",
      url: "custommusic.com",
      Brandname: "DJ David Guetta",
      EventStartTime: "12:00:00 AM",
      EventEndTime: "10:00:00 PM",
      EventLocation: "Tomorrowland"
    }
  ],
}

const autoTips = {
  collection: [
    {
      id: "1",
      tip1:"Regular maintenance and timely repairs can extend the lifespan of your vehicle and save you from costly breakdowns.",
    },
    {
      id: "2",
      tip1:"Regular maintenance is crucial for your car's longevity and optimal performance.",
    },
    {
      id: "3",
      tip1:"Regular cleaning of your car, both inside and outside, helps to prevent damage to the paint and other components",
    }
  ],
}

const estateTips = {
  collection: [
    {
      id: "1",
      tip1:"When buying real estate, don't just focus on the property itself. Consider the location, the neighborhood, the schools.",
    },
    {
      id: "2",
      tip1:"It's crucial to investigate the builder's reputation before investing in a future project.",
    }
  ]
}

const autoBlogs = {
  collection: [
    {
      id: "1",
      title:"First business blogs",
      Images: ["https://cdn.hootout.com/vidyback/logo/uuser.jpg"],
    }
  ],
}

const sports = {
  collection: [
    {
      id: "1",
      title:"Royals Sports Organization",
      description: "Register players for your team with a free Sports Registration ",
      date: "14-04-2023",
      location: "3306 Stout Street, York, Pennsylvania, United States"
    }
  ],
}

const jobs = {
  collection: [
    {
      id: "1",
      title:"Product Manager",
      description: "Deeply understand Customer Support business and strategies, clarify business priorities for the cross-functional team, and set qualitative and quantitative objectives.",
      email: "john@greatesite.com",
      author: "Kuchnaya Technolabs"
    }
  ],
}

const politics = {
  collection: [
    {
      id: "1",
      title:"NBM Political Party",
      candidate: "Jason Smith",
      message: "We believe in empowering the youth of today to care. We need to right to vote for change.",
    }
  ],
}

module.exports = {
  food,
  auto,
  estate,
  travel,
  autoQuote,
  autoEvent,
  autoTips,
  autoBlogs,
  sports,
  jobs,
  politics,
  estateTips,
  estateQuote
};
