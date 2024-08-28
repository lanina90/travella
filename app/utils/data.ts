export type TOffer = {
  id: number;
  rating: number;
  title: string;
  location: string;
  price: number;
  img: string;
};
export type TTestimonial = {
  id: number;
  name: string;
  feedback: string;
  img: string;
};


interface IData {
  destinations: { city: string; img: string; id: number }[];
  offers: {
    county: TOffer[];
    camping: TOffer[];
    adventure: TOffer[];
    hiking: TOffer[];
    group_trip: TOffer[];
  };
  testimonials: TTestimonial[]
}

export const data: IData = {
  destinations: [
    {
      id: 1,
      city: "London",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0f75865d52fdb82cf3_slider4-p-500.webp",
    },
    {
      id: 2,
      city: "Thailand",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1e9cd9914bbe73a176_slider2-p-500.webp",
    },
    {
      id: 3,
      city: "Singapore",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef28aa010ac66a92bf2d_slider6-p-500.webp",
    },
    {
      id: 4,
      city: "India",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1370502b903640a589_slider3-p-500.webp",
    },
    {
      id: 5,
      city: "Dubai",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef13ab999b20dcb81289_slider1-p-500.webp",
    },
    {
      id: 6,
      city: "Paris",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef146b3a3840a14ecf86_slider5-p-500.webp",
    },
  ],
  offers: {
    county: [
      {
        id: 1,
        rating: 4.5,
        title: "Explore Culture",
        location: "India",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef234ed0e1db0d7f2076_country1-p-800.webp",
      },
      {
        id: 2,
        rating: 4.5,
        title: "Scenic Beauty",
        location: "Japan",
        price: 350,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1f1754a0f554aa73ce_country2-p-800.webp",
      },
      {
        id: 3,
        rating: 4.4,
        title: "Iconic Landmark",
        location: "London",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1f5c334145f791411c_country3-p-800.webp",
      },
      {
        id: 4,
        rating: 4.5,
        title: "Luxurious Lifestyle",
        location: "Dubai",
        price: 350,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef13ab999b20dcb81289_slider1-p-800.webp",
      },
      {
        id: 5,
        rating: 4.5,
        title: "Nature & Adventure",
        location: "Singapore",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef2251ed02da5bec668d_country4-p-800.webp",
      },
      {
        id: 6,
        rating: 4.6,
        title: "Culture & History",
        location: "USA",
        price: 350,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1f2cd0ba5f5cd981c1_country5-p-800.webp",
      },
      {
        id: 7,
        rating: 4.6,
        title: "Natural Beauty",
        location: "Rome",
        price: 350,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef29881c4a82923b89e7_country6-p-800.webp",
      },
      {
        id: 8,
        rating: 4.6,
        title: "Luxury Travel",
        location: "Paris",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef24ea9f9a57c3f36f4c_country7-p-800.webp",
      },
    ],
    camping: [
      {
        id: 1,
        rating: 4.5,
        title: "Overnight Camping",
        location: "India",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0ba3bafb4036173871_camp1-p-800.webp",
      },
      {
        id: 2,
        rating: 4.5,
        title: "Night Tent",
        location: "Thailand",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0ab419b34221a29f29_camp2-p-800.webp",
      },
      {
        id: 3,
        rating: 4.5,
        title: "Nature Camp",
        location: "London",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0ba3bafb4036173871_camp1-p-800.webp",
      },
      {
        id: 4,
        rating: 4.5,
        title: "Tent Trip",
        location: "Dubai",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef23468c623366b339ce_camp4-p-800.webp",
      },
    ],
    adventure: [
      {
        id: 1,
        rating: 4.5,
        title: "Sky Diving",
        location: "India",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef08c43fd10a415f1906_adventure1-p-800.webp",
      },
      {
        id: 2,
        rating: 4.5,
        title: "Theme Park",
        location: "Thailand",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1458e72fb21f420e32_adventure2-p-800.webp",
      },
      {
        id: 3,
        rating: 4.5,
        title: "skating",
        location: "London",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0ba3bafb403617387a_adventure4-p-800.webp",
      },
      {
        id: 4,
        rating: 4.5,
        title: "Paragliding",
        location: "Dubai",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef190165db165ff33471_adventure3-p-800.webp",
      },
    ],
    hiking: [
      {
        id: 1,
        rating: 4.5,
        title: "Hiking",
        location: "India",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1ad4470e9704ff4a5d_hiking2-p-800.webp",
      },
      {
        id: 2,
        rating: 4.5,
        title: "Journey on foot",
        location: "London",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0e95093eddb0c1489c_hiking4-p-800.webp",
      },
      {
        id: 3,
        rating: 4.5,
        title: "Explore Culture",
        location: "Paris",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0ecd1535aa86932cd3_hiking3-p-800.webp",
      },
      {
        id: 4,
        rating: 4.5,
        title: "Hiking",
        location: "Paris",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0d35394ce5d7e03e75_hiking1-p-800.webp",
      },
    ],
    group_trip: [
      {
        id: 1,
        rating: 4.5,
        title: "Walking Tour",
        location: "India",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef0fa3b21d7fbbfba125_group-trip2-p-800.webp",
      },
      {
        id: 2,
        rating: 4.5,
        title: "Walking Tour",
        location: "London",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1a881c4a82923b7473_group-trip1-p-800.webp",
      },
      {
        id: 3,
        rating: 4.5,
        title: "Water Rafting",
        location: "Kitulgala",
        price: 250,
        img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667ef1a4f7a95be1583e4c2_group-trip3-p-800.webp",
      }
    ],
  },
  testimonials: [
    {
      id: 1,
      name: "olivia cole",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667fa00112bac6ef75a63a2_user1.jpg"
    },
    {
      id: 2,
      name: "Even White",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667fa01810174fe1cf91887_user2.jpg"
    },
    {
      id: 3,
      name: "John Miller",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667fa011dabfdc8244b2835_user3.jpg"
    },
    {
      id: 4,
      name: "John Miller",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667fa00112bac6ef75a63a2_user1.jpg"
    },
    {
      id: 5,
      name: "John Millers",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667fa011dabfdc8244b2835_user3.jpg"
    },
    {
      id: 6,
      name: "Rayan Millers",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      img: "https://cdn.prod.website-files.com/666001600530be8dd46480e1/6667fa01810174fe1cf91887_user2.jpg"
    }
  ]
};
