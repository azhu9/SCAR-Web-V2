// SCAR team history, shown on the About page (newest season first).
//
// To add a season, copy an entry and put it at the top. Fields:
//   years     shown in the year list, e.g. '2026–27'
//   game      that year's VEX U game
//   teams     team name(s) that season
//   captains, leads   names as written (optional)
//   awards    list of awards and rankings (optional)
//   note      a short line shown under the details (optional)
//   media     photos and videos for the carousel, in order:
//     { image: '25-26', alt: 'What the photo shows' }
//        `image` is a file name in src/assets/history/ without `.webp`. To add one, put
//        the original in assets-src/history/ and run `npm run images`.
//        Add `fit: 'contain'` for renders or graphics that shouldn't be cropped, and
//        `bg: '#fff'` to set the color behind them.
//     { youtube: 'VIDEO_ID', title: 'What the video is' }
//        The ID is the part after `v=` in a YouTube link.

export const SEASONS = [
  {
    years: '2025–26',
    game: 'Push Back',
    teams: 'SCAR',
    captains: 'Andy Zhu, Siddharth Paul',
    leads: 'Suzeyu George Cui, Ivan Shi',
    awards: ['Worlds Ranking: 17'],
    note: 'Thank you to our sponsors Whimsy Tech, Onshape, JLCMC, EasyEDA, and Rutgers IDEA for a successful season.',
    media: [
      { image: '25-26-3', alt: "SCAR's two 2025–26 robots side by side on display" },
      { image: '25-26', alt: "SCAR's 2025–26 robot on the Push Back field during a match" },
      { image: '25-26-2', alt: "SCAR's 2025–26 robots on a table" },
    ],
  },
  {
    years: '2024–25',
    game: 'High Stakes',
    teams: 'SCAR',
    captains: 'Mahdhav Rawal, Jouan Yu',
    leads: 'Andy Zhu, Marco Hu, Siddharth Paul, Ivan Shi',
    awards: ['Worlds Ranking: 25'],
    note: 'Thank you to our sponsors Whimsy Tech, Onshape, and Rutgers IDEA for a successful season.',
    media: [
      { image: '24-25-2', alt: "SCAR's red and blue High Stakes robots side by side" },
      { image: '24-25', alt: 'Two SCAR robots facing each other on the field' },
      { image: '24-25-field', alt: 'Render of the 2024–25 High Stakes game field', fit: 'contain', bg: '#000' },
    ],
  },
  {
    years: '2023–24',
    game: 'Over Under',
    teams: 'SCAR & SCAR 2',
    captains: 'Kyle De Guzman, Brian Chen',
    leads: 'Jouan Yu, Mahdhav Rawal, Khoi Dinh, Andy Zhu',
    awards: ['Tournament Champion', 'Robot Skills Champion', 'Worlds Ranking: 17 & 24'],
    media: [
      { image: '23-24', alt: "SCAR 2's robot climbing the elevation bar during a match" },
      { image: '23-24-3', alt: 'The 2023–24 team posing behind their robots' },
      { image: '23-24-2', alt: 'SCAR robots and controllers on a pit table with green triballs' },
    ],
  },
  {
    years: '2022–23',
    game: 'Spin Up',
    teams: 'SKAR',
    captains: 'Jack Lowry',
    leads: 'Zach Soriano, Kyle De Guzman',
    awards: ['Judges Award', 'Design Award', 'Worlds Ranking: 14'],
    media: [
      { image: '22-23', alt: 'The 2022–23 SKAR team with their robots in the lab' },
      { image: '22-23-2', alt: 'The team in front of the VEX Robotics World Championship entrance' },
    ],
  },
  {
    years: '2021–22',
    game: 'Tipping Point',
    teams: 'SKAR',
    captains: 'Jack Lowry, Agam Modasiya',
    awards: ['Judges Award', 'Design Award', 'Worlds Ranking: 2'],
    media: [{ youtube: '8isLmoizb6A', title: "SKAR's 2021–22 Tipping Point season video" }],
  },
  {
    years: '2020–21',
    game: 'Change Up',
    teams: 'SKAR',
    media: [{ image: '20-21', alt: 'Render of the 2020–21 Change Up game field', fit: 'contain', bg: '#fff' }],
  },
  {
    years: '2019–20',
    game: 'Tower Takeover',
    teams: 'SKAR & RUSK',
    awards: ['Tournament Champion', 'Design Award', 'Excellence Award', 'Worlds Ranking: 15'],
    media: [{ image: '19-20', alt: 'The 2019–20 team with their robots at an IEEE table' }],
  },
  {
    years: '2018–19',
    game: 'Turning Point',
    teams: 'RUSK',
    captains: 'Timothy Petersen, Mathew Chan',
    leads: 'Israel Jackson, Peter Doroshenko',
    awards: ['Tournament Champion', 'Design Award', 'Excellence Award', 'Worlds Ranking: 15'],
    media: [{ image: '18-19', alt: 'The 2018–19 RUSK team behind their robots at a Rutgers ECE table' }],
  },
  {
    years: '2017–18',
    game: 'In the Zone',
    teams: 'RUSK',
    captains: 'Kevin Quizhpi, Rupesh Chinta',
    leads: 'Hari Vijayakumar, Atul Srivastava',
    media: [{ image: '17-18', alt: 'The 2017–18 RUSK team with their robots at a Rutgers table' }],
  },
  {
    years: '2016–17',
    game: 'Starstruck',
    teams: 'RUSK',
    awards: ['Excellence Award', 'Worlds Ranking: 15'],
    media: [{ youtube: '9f9nFUleKmE', title: "RUSK's 2016–17 Starstruck season video" }],
  },
];
