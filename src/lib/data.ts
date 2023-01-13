
// create example data for the chart from a survey about diversity and inclusion

const fakeData = [
  {
    topics: [
      "Discrimination",
      "Sexual Harassment",
      "Sensitive Topics",
      "Workplace Culture",
      "Workplace Environment",
      "Workplace Relationships",
    ],
    responses: [2, 5, 3, 5, 2, 3],
  }
]

function randomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + color;
}

function makeBgForBars() {
  let bg = [];
  for (let i = 0; i < fakeData[0].topics.length; i++) {
    bg.push(randomColor());
  }
  return bg;
}
// const colors = [];
// for (let i = 0; i < 6; i++) {
//     const color = `rgb(${255 * i / 5}, ${255 * (1 - i / 5)}, ${64})`;
//     colors.push(color);
// }
// console.log(colors);
export const data = {
  labels: [...fakeData[0].topics],
  datasets: [
    {
      label: '% of respondents',
      data: [...fakeData[0].responses],
      // backgroundColor: [
      //   'rgba(255, 134,159,0.4)',
      //   'rgba(98,  182, 239,0.4)',
      //   'rgba(255, 218, 128,0.4)',
      //   'rgba(113, 205, 205,0.4)',
      //   'rgba(170, 128, 252,0.4)',
      //   'rgba(255, 177, 101,0.4)',
      // ],
      backgroundColor: makeBgForBars(),
      borderWidth: 2,
      // borderColor: [
      //   'rgba(255, 134, 159, 1)',
      //   'rgba(98,  182, 239, 1)',
      //   'rgba(255, 218, 128, 1)',
      //   'rgba(113, 205, 205, 1)',
      //   'rgba(170, 128, 252, 1)',
      //   'rgba(255, 177, 101, 1)',
      // ],
      borderColor: makeBgForBars(),
    },
  ],
};

// fakeData
// {
//   "labels": ["Discrimination", "Sexual Harassment", "Sensitive Topics", "Workplace Culture", "Workplace Environment", "Workplace Relationships"],
//   "datasets": [
//     {
//       "label": "Number of complaints resolved",
//       "data": [35, 100, 55, 90, 40, 60],
//       "backgroundColor": ["#dab0c5", "#cd3879", "#121d93", "#104593", "#cace28", "#6f1130"],
//       "borderWidth": 2,
//       "borderColor": ["#e4e1a5", "#bb34e5", "#392322", "#961ab1", "#8444fb", "#30c5c8"]
//     }
//   ]
// }
