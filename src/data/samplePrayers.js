
// Global Prayer Database
// Contains diverse prayers from different cultures, traditions, and time zones

export const prayerDatabase = [
  // WORLD PEACE & UNITY PRAYERS (🌍)
  {
    id: 1,
    category: 'world-peace',
    text: 'May all nations find harmony and understanding, letting go of conflicts that divide us and embracing the peace that unites our hearts.',
    country: 'India',
    city: 'New Delhi',
    author: 'Priya Sharma',
    timestamp: new Date('2024-12-01T10:30:00'),
    timezone: 'Asia/Kolkata',
    tradition: 'Hindu',
    language: 'English'
  },
  {
    id: 2,
    category: 'world-peace',
    text: 'Let the weapons of war be transformed into tools of peace, and may children grow up without fear in every corner of our world.',
    country: 'Germany',
    city: 'Berlin',
    author: 'Hans Mueller',
    timestamp: new Date('2024-12-01T16:30:00'),
    timezone: 'Europe/Berlin',
    tradition: 'Christian',
    language: 'English'
  },
  {
    id: 3,
    category: 'world-peace',
    text: 'May dialogue replace conflict, and may understanding bloom where hatred once grew like flowers after rain.',
    country: 'Norway',
    city: 'Oslo',
    author: 'Erik Andersen',
    timestamp: new Date('2024-12-01T07:40:00'),
    timezone: 'Europe/Oslo',
    tradition: 'Lutheran',
    language: 'English'
  },
  {
    id: 4,
    category: 'world-peace',
    text: 'Grant that borders become bridges, and that the walls between us crumble into pathways of friendship and cooperation.',
    country: 'South Africa',
    city: 'Cape Town',
    author: 'Nomsa Mthembu',
    timestamp: new Date('2024-12-01T14:20:00'),
    timezone: 'Africa/Johannesburg',
    tradition: 'Ubuntu',
    language: 'English'
  },
  {
    id: 5,
    category: 'world-peace',
    text: 'May the dawn of each new day bring us closer to a world where justice flows like a river and peace like a mighty stream.',
    country: 'United States',
    city: 'Atlanta',
    author: 'Marcus Washington',
    timestamp: new Date('2024-12-01T19:15:00'),
    timezone: 'America/New_York',
    tradition: 'Baptist',
    language: 'English'
  },

  // COMPASSION & UNDERSTANDING PRAYERS (❤️)
  {
    id: 6,
    category: 'compassion',
    text: 'Grant us the strength to show kindness to those who hurt us, and wisdom to heal wounded hearts with gentle love.',
    country: 'Japan',
    city: 'Kyoto',
    author: 'Kenji Nakamura',
    timestamp: new Date('2024-12-01T15:45:00'),
    timezone: 'Asia/Tokyo',
    tradition: 'Buddhist',
    language: 'English'
  },
  {
    id: 7,
    category: 'compassion',
    text: 'Open our hearts to the suffering of strangers, that we may act with love instead of indifference and bring light to dark places.',
    country: 'Morocco',
    city: 'Marrakech',
    author: 'Fatima Al-Zahra',
    timestamp: new Date('2024-12-01T12:45:00'),
    timezone: 'Africa/Casablanca',
    tradition: 'Islamic',
    language: 'English'
  },
  {
    id: 8,
    category: 'compassion',
    text: 'Help us to see with eyes of compassion, to listen with ears of understanding, and to speak with words that heal.',
    country: 'Thailand',
    city: 'Bangkok',
    author: 'Siriporn Kittisak',
    timestamp: new Date('2024-12-01T20:30:00'),
    timezone: 'Asia/Bangkok',
    tradition: 'Theravada Buddhist',
    language: 'English'
  },
  {
    id: 9,
    category: 'compassion',
    text: 'May we extend mercy to those who struggle, patience to those who falter, and hope to those who despair.',
    country: 'Chile',
    city: 'Santiago',
    author: 'Isabella Rodriguez',
    timestamp: new Date('2024-12-01T21:10:00'),
    timezone: 'America/Santiago',
    tradition: 'Catholic',
    language: 'English'
  },

  // BROTHERHOOD & SISTERHOOD PRAYERS (🤝)
  {
    id: 10,
    category: 'brotherhood',
    text: 'Help us see beyond our differences and recognize the sacred thread that connects all humanity in one beautiful tapestry.',
    country: 'Brazil',
    city: 'Rio de Janeiro',
    author: 'Maria Santos',
    timestamp: new Date('2024-12-01T08:20:00'),
    timezone: 'America/Sao_Paulo',
    tradition: 'Catholic',
    language: 'English'
  },
  {
    id: 11,
    category: 'brotherhood',
    text: 'Unite us across all boundaries of race, religion, and nationality in our shared humanity and common dreams.',
    country: 'Australia',
    city: 'Sydney',
    author: 'James O\'Brien',
    timestamp: new Date('2024-12-01T09:10:00'),
    timezone: 'Australia/Sydney',
    tradition: 'Anglican',
    language: 'English'
  },
  {
    id: 12,
    category: 'brotherhood',
    text: 'Grant that we may build bridges of understanding where others have built walls of separation and fear.',
    country: 'Canada',
    city: 'Toronto',
    author: 'Amara Okafor',
    timestamp: new Date('2024-12-01T18:45:00'),
    timezone: 'America/Toronto',
    tradition: 'Multi-faith',
    language: 'English'
  },
  {
    id: 13,
    category: 'brotherhood',
    text: 'May we celebrate our diversity as strength, and find in our differences the colors that make life\'s painting complete.',
    country: 'Indonesia',
    city: 'Jakarta',
    author: 'Dewi Sartika',
    timestamp: new Date('2024-12-01T22:15:00'),
    timezone: 'Asia/Jakarta',
    tradition: 'Islamic',
    language: 'English'
  },

  // WISDOM & GUIDANCE PRAYERS (💡)
  {
    id: 14,
    category: 'wisdom',
    text: 'Guide our leaders with clear vision and pure intentions for the wellbeing of all people, not just the few.',
    country: 'Kenya',
    city: 'Nairobi',
    author: 'Amara Wanjiku',
    timestamp: new Date('2024-12-01T14:15:00'),
    timezone: 'Africa/Nairobi',
    tradition: 'Protestant',
    language: 'English'
  },
  {
    id: 15,
    category: 'wisdom',
    text: 'Grant us discernment to choose love over fear, and courage to stand for what is right even when we stand alone.',
    country: 'Mexico',
    city: 'Mexico City',
    author: 'Carlos Mendoza',
    timestamp: new Date('2024-12-01T13:25:00'),
    timezone: 'America/Mexico_City',
    tradition: 'Catholic',
    language: 'English'
  },
  {
    id: 16,
    category: 'wisdom',
    text: 'Illuminate our minds with understanding, our hearts with compassion, and our actions with justice and truth.',
    country: 'Egypt',
    city: 'Cairo',
    author: 'Yasmin Hassan',
    timestamp: new Date('2024-12-01T17:50:00'),
    timezone: 'Africa/Cairo',
    tradition: 'Islamic',
    language: 'English'
  },
  {
    id: 17,
    category: 'wisdom',
    text: 'Help us to learn from our mistakes, grow from our challenges, and find wisdom in both success and failure.',
    country: 'South Korea',
    city: 'Seoul',
    author: 'Lee Min-jun',
    timestamp: new Date('2024-12-01T23:30:00'),
    timezone: 'Asia/Seoul',
    tradition: 'Confucian',
    language: 'English'
  },

  // HEALING & HOPE PRAYERS (🕊️)
  {
    id: 18,
    category: 'healing',
    text: 'Bring comfort to those suffering from illness and loss, and restore hope in their hearts like dawn after darkness.',
    country: 'Canada',
    city: 'Vancouver',
    author: 'Sarah Chen',
    timestamp: new Date('2024-12-01T11:00:00'),
    timezone: 'America/Vancouver',
    tradition: 'Multi-faith',
    language: 'English'
  },
  {
    id: 19,
    category: 'healing',
    text: 'Heal the divisions in our communities and restore trust between neighbors and friends who have grown apart.',
    country: 'South Korea',
    city: 'Busan',
    author: 'Park So-young',
    timestamp: new Date('2024-12-01T17:00:00'),
    timezone: 'Asia/Seoul',
    tradition: 'Presbyterian',
    language: 'English'
  },
  {
    id: 20,
    category: 'healing',
    text: 'Bring healing to our planet Earth, that future generations may inherit a world of beauty, not destruction.',
    country: 'New Zealand',
    city: 'Auckland',
    author: 'Aroha Williams',
    timestamp: new Date('2024-12-01T18:20:00'),
    timezone: 'Pacific/Auckland',
    tradition: 'Maori spirituality',
    language: 'English'
  },
  {
    id: 21,
    category: 'healing',
    text: 'Grant healing to broken relationships, wounded spirits, and communities torn apart by misunderstanding and pain.',
    country: 'Ireland',
    city: 'Dublin',
    author: 'Sean O\'Connor',
    timestamp: new Date('2024-12-01T16:45:00'),
    timezone: 'Europe/Dublin',
    tradition: 'Catholic',
    language: 'English'
  },
  {
    id: 22,
    category: 'healing',
    text: 'May those who are lonely find companionship, those who are afraid find courage, and those who are lost find their way home.',
    country: 'Philippines',
    city: 'Manila',
    author: 'Maria Luz Santos',
    timestamp: new Date('2024-12-01T01:30:00'),
    timezone: 'Asia/Manila',
    tradition: 'Catholic',
    language: 'English'
  },

  // Additional prayers from different time zones and cultures
  {
    id: 23,
    category: 'world-peace',
    text: 'May the light of peace shine in every home, every heart, and every nation, dispelling the shadows of conflict and war.',
    country: 'Israel',
    city: 'Jerusalem',
    author: 'David Cohen',
    timestamp: new Date('2024-12-01T15:30:00'),
    timezone: 'Asia/Jerusalem',
    tradition: 'Jewish',
    language: 'English'
  },
  {
    id: 24,
    category: 'compassion',
    text: 'Grant us gentle hearts that beat in rhythm with the suffering of others, and hands that reach out to lift the fallen.',
    country: 'Nepal',
    city: 'Kathmandu',
    author: 'Pemba Sherpa',
    timestamp: new Date('2024-12-01T21:45:00'),
    timezone: 'Asia/Kathmandu',
    tradition: 'Buddhist',
    language: 'English'
  },
  {
    id: 25,
    category: 'brotherhood',
    text: 'Help us remember that we are all children of the same earth, breathing the same air, sharing the same hopes and dreams.',
    country: 'Argentina',
    city: 'Buenos Aires',
    author: 'Diego Fernandez',
    timestamp: new Date('2024-12-01T06:15:00'),
    timezone: 'America/Argentina/Buenos_Aires',
    tradition: 'Catholic',
    language: 'English'
  },
  {
    id: 26,
    category: 'wisdom',
    text: 'Open our minds to new perspectives, our hearts to different experiences, and our souls to the infinite possibilities of growth.',
    country: 'Sweden',
    city: 'Stockholm',
    author: 'Astrid Larsson',
    timestamp: new Date('2024-12-01T12:00:00'),
    timezone: 'Europe/Stockholm',
    tradition: 'Lutheran',
    language: 'English'
  },
  {
    id: 27,
    category: 'healing',
    text: 'Restore what has been broken, renew what has grown weary, and revive what has been lost in the journey of life.',
    country: 'Ghana',
    city: 'Accra',
    author: 'Akosua Mensah',
    timestamp: new Date('2024-12-01T19:30:00'),
    timezone: 'Africa/Accra',
    tradition: 'Methodist',
    language: 'English'
  },
  {
    id: 28,
    category: 'world-peace',
    text: 'Transform our swords into plowshares and our spears into pruning hooks, that we may cultivate peace instead of war.',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    author: 'Hanna Tadesse',
    timestamp: new Date('2024-12-01T20:45:00'),
    timezone: 'Africa/Addis_Ababa',
    tradition: 'Orthodox',
    language: 'English'
  }
]
