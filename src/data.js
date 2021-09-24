export const data = [
  {
    brewType: "AEROPRESS",
    icon: require("./images/testicon.svg").default,
    color: "#E39F61",
    brewTime: 95, //Seconds
    settings: [15, 16], //Coffee, Ratio
    recipe: {
      5: "Rinse Kalita filter",
      10: "Add coffee (grind size should be the consistency of table salt)",
      20: "Gently pour 50g of water just off boil onto the coffee.",
      46: "Wait 20 seconds",
      60: "Begin series of five - 25g pulse pours every 10 seconds.",
      70: "Continue second series of six 20g pulse pours in center of bed at 10 second intervals for 1 minute until 285g",
      80: "Finish pouring with 20g pour ~2:10 seconds, sinking any remaining crust from bloom. Draw down should take 20-30 seconds.",
    },
  },
  {
    brewType: "CHEMEX",
    color: "#E18E62",
    icon: require("./images/testicon.svg").default,
    brewTime: 90, //Seconds
    settings: [30, 17], //Coffe, Ratio
    recipe: {},
  },
  {
    brewType: "CLEVER DRIPPER",
    color: "#E07E64",
    icon: require("./images/testicon.svg").default,
    brewTime: 360, //Seconds
    settings: [18, 13], //Coffee, Ratio
    recipe: {
      10: "instruction 1",
      20: "instruction 2",
      40: "test",
      55: "test",
    },
  },
  {
    brewType: "FRENCH PRESS",
    color: "#DE7166",
    icon: require("./images/testicon.svg").default,
    brewTime: 310, //Seconds
    settings: [30, 18], //Coffe, Ratio
    recipe: {},
  },
  {
    brewType: "JAPANESE ICED",
    color: "#DF6976",
    icon: require("./images/testicon.svg").default,
    brewTime: 60, //Seconds
    settings: [5, 10], //Coffee, Ratio
    recipe: {
      10: "instruction 1",
      20: "instruction 2",
      40: "test",
      55: "test",
    },
  },
  {
    brewType: "KALITA WAVE",
    color: "#E16C85",
    icon: require("./images/testicon.svg").default,
    brewTime: 90, //Seconds
    settings: [1, 1], //Coffe, Ratio
    recipe: {},
  },
  {
    brewType: "KEURIG",
    color: "#E36F9A",
    icon: require("./images/testicon.svg").default,
    brewTime: 60, //Seconds
    settings: [5, 10], //Coffee, Ratio
    recipe: {
      10: "instruction 1",
      20: "instruction 2",
      40: "test",
      55: "test",
    },
  },
  {
    brewType: "V60",
    color: "#DA76B5",
    icon: require("./images/testicon.svg").default,
    brewTime: 150, //Seconds
    settings: [22, 16], //Coffe, Ratio
    recipe: {},
  },
];
