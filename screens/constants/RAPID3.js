export const rapid3Types = {
  RAPID3_FN: 'RAPID3_FN',
  RAPID3_PN: 'RAPID3_PN',
  RAPID3_PTGE: 'RAPID3_PTGE'
};

export const RAPID3_FN = [
  {
    id: 1,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to dress yourself, including shoelaces and buttons?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 2,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to get in and out of bed?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 3,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to lift a full cup of glass to your mouth?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 4,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to walk outdoors on flat ground?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 5,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to wash and dry your entire body?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 6,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to bend down and pick up clothing from the floor?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 7,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to turn regular faucets on and off?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 8,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to get in an out of a car, bus, train, or airplane?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 9,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to walk two miles or three kilometers, if you wish?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 10,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to participate in recreational activities and sports, as you would like, if you wish?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
    ]
  },
  {
    id: 11,
    type: rapid3Types.RAPID3_FN,
    text: `Are you able to get a good night's sleep?`,
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1.1 },
      { text: 'With MUCH difficulty',     points: 2.2 },
      { text: 'Unable to do so',          points: 3.3 }
    ]
  },
  {
    id: 12,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to deal with feelings of anxiety or being nervous?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1.1 },
      { text: 'With MUCH difficulty',     points: 2.2 },
      { text: 'Unable to do so',          points: 3.3 }
    ]
  },
  {
    id: 13,
    type: rapid3Types.RAPID3_FN,
    text: 'Are you able to deal with feelings of depression or feeling blue?',
    answers: [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1.1 },
      { text: 'With MUCH difficulty',     points: 2.2 },
      { text: 'Unable to do so',          points: 3.3 }
    ]
  },
];

export const RAPID3_PN = [
  {
    id: 14,
    type: rapid3Types.RAPID3_PN,
    text: 'How much pain have you had because of your condition OVER THE PAST WEEK?',
    subtitle: 'Please indicate below how severe your pain has been:',
    extremes: [
      { text: 'No pain',                        points: 0 },
      { text: 'Pain as bad as it could be',     points: 10 },
    ]
  }
];

export const RAPID3_PTGE = [
  {
    id: 15,
    type: rapid3Types.RAPID3_PTGE,
    text: 'Considering all the ways in which illness and health conditions may affect you at this time, please indicate below how you are doing:',
    subtitle: '',
    extremes: [
      { text: 'Very well',       points: 0 },
      { text: 'Very poorly',     points: 10 },
    ]
  }
];

export const calculateRAPID3Score = (fn, pn, ptge) => {
  const thresholds = [0,   0.3, 0.7,
                      1.0, 1.3, 1.7,
                      2.0, 2.3, 2.7,
                      3.0, 3.3, 3.7,
                      4.0, 4.3, 4.7,
                      5.0, 5.3, 5.7,
                      6.0, 6.3, 6.7,
                      7.0, 7.3, 7.7,
                      8.0, 8.3, 8.7,
                      9.0, 9.3, 9.7, 10];

  const fn_score = thresholds[fn];
  const cumulative = fn_score + pn + ptge;
  let score = null;

  if (cumulative <= 3) {
    score = ['Near Remission',     3];
  } else if (cumulative <= 6) {
    score = ['Low Severity',       6];
  } else if (cumulative <= 12) {
    score = ['Moderate Severity', 12];
  } else {
    score = ['High Severity',     30];
  }

  return score;
};
