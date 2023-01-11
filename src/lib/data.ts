
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

export const data = {
  labels: [...fakeData[0].topics],
  datasets: [
    {
      label: '% of respondents',
      data: [...fakeData[0].responses],
      backgroundColor: [
        'rgba(255, 134,159,0.4)',
        'rgba(98,  182, 239,0.4)',
        'rgba(255, 218, 128,0.4)',
        'rgba(113, 205, 205,0.4)',
        'rgba(170, 128, 252,0.4)',
        'rgba(255, 177, 101,0.4)',
      ],
      borderWidth: 2,
      borderColor: [
        'rgba(255, 134, 159, 1)',
        'rgba(98,  182, 239, 1)',
        'rgba(255, 218, 128, 1)',
        'rgba(113, 205, 205, 1)',
        'rgba(170, 128, 252, 1)',
        'rgba(255, 177, 101, 1)',
      ],
    },
  ],
};


