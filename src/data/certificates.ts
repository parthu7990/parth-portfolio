export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
  type: string;
}

// Paste your certificate names, issuers, dates and "verify" links below.
// If a certificate has no verify link, leave the `link` field empty ("").
export const certificates: Certificate[] = [
  {
    title: 'MERN Stack workshop',
    issuer: 'CreArt® Solutions Pvt Ltd',
    date: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1e3Z8t2FGiTRH8ZI7Ku5lmGJ-mXMnOTu4/view?usp=drive_link',
    type: 'Workshop Hand On Experience',
  },
  {
    title: 'Python Compition ',
    issuer: 'Sankalchand Patel College of Engineering (SPCE) - Visnagar',
    date: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1iHVxx1-CCeO_BLWUb_3Ho7MOOAA7T7q7/view?usp=drive_link',
    type: 'Technical',
  },
  {
    title: 'AI Tools Workshop',
    issuer: 'Be 10x',
    date: 'Sep 2025',
    link: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997667893',
    type: 'Technical',
  },
  {
    title: 'Powe Bi Workshop',
    issuer: 'Office Master',
    date: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1TP-rszPcAYVW9x28B2jklfEKhy9V_CeD/view?usp=drive_link',
    type: 'Design',
  },
  {
    title: 'Young professional ',
    issuer: 'TCS iON',
    date: ' Feb 2025',
    link: 'https://drive.google.com/file/d/16n4XWdsLZUsGM53Bn2m0-Gw1eGfq6jg7/view?usp=drive_link',
    type: 'Soft Skills',
  },
  {
    title: 'Web development fundamentals',
    issuer: 'L&T EduTech',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/1VLk6cAowzV9xSha7SLsK65zHnsGlGhmH/view?usp=drive_link',
    type: 'Skill Development',
  },
  {
    title: 'Full stack mastery',
    issuer: 'L&T EduTech',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/187ymDWPWezBcDb0KJg_lgK0kuJEdTv3J/view?usp=drive_link',
    type: 'Skill Development',
  },
];

