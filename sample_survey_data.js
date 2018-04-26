// RAW DATA

const rawResponseOne = {
  step: 10,
  responses: {
    0: 0,
    1: 0,
    2: 2,
    3: 1,
    4: 0,
    5: 3,
    6: 0,
    7: 3,
    8: 1,
    9: 5,
    10: 0
  }
};

const rawResponseTwo = {
  step: 10,
  responses: {
    0: 2,
    1: 0,
    2: 7,
    3: 0,
    4: 0,
    5: 2,
    6: 0,
    7: 4,
    8: 1,
    9: 4,
    10: 0
  }
};

const rawResponseThree = {
  step: 10,
  responses: {
    0: 3,
    1: 1,
    2: 4,
    3: 0,
    4: 0,
    5: 1,
    6: 1,
    7: 7,
    8: 0,
    9: 6,
    10: 1
  }
};

// Parsed Response

const parsedResponseOne = {
  "budget": 1,
  "activityPreferences": {
    "outdoors": 2,
    "spa/shopping": 4,
    "nightlife": 3,
    "culture": 1
  }
};

const parsedResponseTwo = {
  "budget": 3,
  "activityPreferences": {
    "outdoors": 2,
    "spa/shopping": 1,
    "nightlife": 3,
    "culture": 4
  }
};

const parsedResponseThree = {
  "budget": 4,
  "activityPreferences": {
    "outdoors": 3,
    "spa/shopping": 1,
    "nightlife": 4,
    "culture": 2
  }
};
