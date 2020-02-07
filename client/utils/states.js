const states = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DMV: 'Delaware || Maryland || Virginia',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  International: 'International',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming'
};

//get state full name for artists
export const getStateFullName = abbrev => states[abbrev];

//custom styles to make USA map black
export const statesCustomConfig = () => ({
  AL: {
    fill: 'black'
  },
  AK: {
    fill: 'black'
  },
  AZ: {
    fill: 'black'
  },
  AR: {
    fill: 'black'
  },
  CA: {
    fill: 'black'
  },
  CO: {
    fill: 'black'
  },
  CT: {
    fill: 'black'
  },
  DE: {
    fill: 'black'
  },
  FL: {
    fill: 'black'
  },
  GA: {
    fill: 'black'
  },
  HI: {
    fill: 'black'
  },
  ID: {
    fill: 'black'
  },
  IL: {
    fill: 'black'
  },
  IN: {
    fill: 'black'
  },
  IA: {
    fill: 'black'
  },
  KS: {
    fill: 'black'
  },
  KY: {
    fill: 'black'
  },
  LA: {
    fill: 'black'
  },
  ME: {
    fill: 'black'
  },
  MA: {
    fill: 'black'
  },
  MD: {
    fill: 'black'
  },
  MI: {
    fill: 'black'
  },
  MN: {
    fill: 'black'
  },
  MS: {
    fill: 'black'
  },
  MO: {
    fill: 'black'
  },
  MT: {
    fill: 'black'
  },
  NE: {
    fill: 'black'
  },
  NV: {
    fill: 'black'
  },
  NH: {
    fill: 'black'
  },
  NJ: {
    fill: 'black'
  },
  NM: {
    fill: 'black'
  },
  NY: {
    fill: 'black'
  },
  NC: {
    fill: 'black'
  },
  ND: {
    fill: 'black'
  },
  OH: {
    fill: 'black'
  },
  OK: {
    fill: 'black'
  },
  OR: {
    fill: 'black'
  },
  PA: {
    fill: 'black'
  },
  RI: {
    fill: 'black'
  },
  OW: {
    fill: 'black'
  },
  SC: {
    fill: 'black'
  },
  SD: {
    fill: 'black'
  },
  TN: {
    fill: 'black'
  },
  TX: {
    fill: 'black'
  },
  UT: {
    fill: 'black'
  },
  VA: {
    fill: 'black'
  },
  VT: {
    fill: 'black'
  },
  WA: {
    fill: 'black'
  },
  WV: {
    fill: 'black'
  },
  WI: {
    fill: 'black'
  },
  WY: {
    fill: 'black'
  }
});
