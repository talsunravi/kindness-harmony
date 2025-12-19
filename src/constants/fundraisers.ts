
export interface Fundraiser {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  raised: number;
  goal: number;
  daysLeft: number;
  organizer: {
    name: string;
    avatar: string;
  };
}

export const fundraisers: Fundraiser[] = [
  {
    id: 1,
    title: "Community Garden Initiative",
    description: "Help us create green spaces that bring communities together and provide fresh produce.",
    fullDescription: `
      <p>Our Community Garden Initiative aims to transform vacant urban lots into vibrant green spaces that serve multiple community needs. These gardens will provide fresh, organic produce in areas that often lack access to healthy food options, creating "food oasis" neighborhoods.</p>
      
      <p>Beyond just growing food, these community gardens will serve as educational spaces where children and adults can learn about sustainable agriculture, nutrition, and environmental stewardship. We've partnered with local schools to develop curriculum that brings students into the gardens for hands-on learning experiences.</p>
      
      <p>The gardens will also function as community gathering spaces, with seating areas, walking paths, and small event spaces for neighborhood meetings and celebrations. Research shows that such green spaces significantly improve mental health outcomes and strengthen community bonds.</p>
      
      <p>Your donation will help us:</p>
      <ul>
        <li>Purchase soil, seeds, tools, and irrigation systems</li>
        <li>Build raised beds and accessible pathways</li>
        <li>Construct small shelters for education and community events</li>
        <li>Train community garden coordinators who will maintain the spaces</li>
      </ul>
      
      <p>We've already identified five potential garden sites and secured preliminary permission from landowners and city officials. With your support, we can break ground on the first two gardens this spring and have them producing food by summer.</p>
      
      <p>Join us in creating green spaces that nourish both body and spirit in our community!</p>
    `,
    image: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    raised: 12450,
    goal: 20000,
    daysLeft: 45,
    organizer: {
      name: "Green Future Coalition",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  },
  {
    id: 2,
    title: "Music Therapy Program",
    description: "Fund music therapy sessions for children with developmental challenges.",
    fullDescription: `
      <p>Music has a unique power to reach children who face developmental challenges. Our Music Therapy Program provides specialized sessions for children with autism spectrum disorders, Down syndrome, cerebral palsy, and other developmental conditions.</p>
      
      <p>Led by certified music therapists, these sessions use rhythm, melody, and songwriting to help children develop communication skills, improve motor coordination, process emotions, and build social connections. Unlike traditional therapy approaches, music therapy often feels like play rather than work, which helps maintain children's engagement and enthusiasm.</p>
      
      <p>The results we've seen in our pilot program have been remarkable:</p>
      <ul>
        <li>Non-verbal children finding ways to express themselves through instruments</li>
        <li>Children with attention difficulties developing longer focus spans</li>
        <li>Socially isolated children forming connections through group music-making</li>
        <li>Children with physical challenges improving fine motor skills through adaptive instruments</li>
      </ul>
      
      <p>Your contribution will help us:</p>
      <ul>
        <li>Provide scholarships for families who cannot afford therapy</li>
        <li>Purchase specialized adaptive instruments</li>
        <li>Train more music therapists in specific developmental approaches</li>
        <li>Expand our program to reach more children in need</li>
      </ul>
      
      <p>Every child deserves the opportunity to express themselves and connect with others. With your support, we can bring the healing power of music to children who need it most.</p>
    `,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1743&q=80",
    raised: 8320,
    goal: 15000,
    daysLeft: 30,
    organizer: {
      name: "Healing Notes Foundation",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg"
    }
  },
  {
    id: 3,
    title: "Senior Companion Project",
    description: "Connect isolated seniors with caring companions to reduce loneliness and improve wellbeing.",
    fullDescription: `
      <p>Social isolation among seniors has reached epidemic proportions, with research showing that chronic loneliness increases the risk of conditions like heart disease, depression, and cognitive decline. Our Senior Companion Project aims to address this critical issue by creating meaningful connections between isolated seniors and compassionate volunteers.</p>
      
      <p>These aren't just casual visits. Our program creates carefully matched relationships based on shared interests, backgrounds, and personalities. Companions commit to regular weekly visits that include conversation, shared activities, assistance with errands, and simply being present. For many seniors, these visits become the highlight of their week.</p>
      
      <p>Beyond the emotional benefits, our companions serve as important eyes and ears, noticing changes in health or living conditions that might otherwise go unaddressed until a crisis occurs. This early detection component has already helped dozens of seniors get timely medical intervention.</p>
      
      <p>Your support will help us:</p>
      <ul>
        <li>Screen and train compassionate volunteers</li>
        <li>Employ professional social workers to oversee the program and address complex needs</li>
        <li>Provide transportation stipends for volunteers serving seniors in remote areas</li>
        <li>Organize group events that bring multiple seniors and companions together</li>
        <li>Develop technology training so seniors can maintain connections between visits</li>
      </ul>
      
      <p>We currently have a waiting list of over 70 seniors hoping to be matched with a companion. With your generous donation, we can ensure that more older adults in our community receive the social connection that is so vital to their health and happiness.</p>
    `,
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1630&q=80",
    raised: 18750,
    goal: 25000,
    daysLeft: 21,
    organizer: {
      name: "Elder Connection Alliance",
      avatar: "https://randomuser.me/api/portraits/women/57.jpg"
    }
  },
  {
    id: 4,
    title: "Clean Water Initiative",
    description: "Provide clean drinking water to communities facing water insecurity.",
    fullDescription: `
      <p>Access to clean water is a fundamental human right, yet millions of people around the world still struggle with water insecurity. Our Clean Water Initiative focuses on both immediate solutions and sustainable infrastructure for communities in crisis.</p>
      
      <p>Working closely with local leaders and water engineers, we implement appropriate technology solutions based on each community's specific needs. These range from deep wells with hand pumps in rural areas to household water filters in regions with contaminated municipal supplies to rainwater harvesting systems in drought-prone zones.</p>
      
      <p>But our work goes beyond just installing hardware. We take a comprehensive approach that includes:</p>
      <ul>
        <li>Water quality testing and monitoring programs</li>
        <li>Training local technicians who can maintain and repair water systems</li>
        <li>Education on water conservation and hygiene practices</li>
        <li>Supporting local water committees who manage community resources</li>
        <li>Advocating for policy changes that protect water sources</li>
      </ul>
      
      <p>The impact of clean water extends far beyond just health. When communities gain reliable water access:</p>
      <ul>
        <li>Children (especially girls) can attend school instead of collecting water</li>
        <li>Women have more time for education and income generation</li>
        <li>Local economies improve as less time is lost to water-related illness</li>
        <li>Environmental stress decreases as water is used more efficiently</li>
      </ul>
      
      <p>Your contribution to this campaign will directly fund our next three community projects, bringing clean water to approximately 5,000 people. Every donation, no matter the size, brings us closer to a world where everyone has access to this most basic necessity.</p>
    `,
    image: "https://images.unsplash.com/photo-1523878288860-7ad281611901?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80",
    raised: 32180,
    goal: 50000,
    daysLeft: 60,
    organizer: {
      name: "Global Water Partners",
      avatar: "https://randomuser.me/api/portraits/men/72.jpg"
    }
  },
  {
    id: 5,
    title: "Youth Mentorship Program",
    description: "Support career mentoring for disadvantaged youth to help them build better futures.",
    fullDescription: `
      <p>Young people from disadvantaged backgrounds often lack access to professional networks and career guidance that many take for granted. Our Youth Mentorship Program bridges this gap by connecting teens and young adults with successful professionals who serve as mentors, guides, and advocates.</p>
      
      <p>This isn't just about homework help or general encouragement. Our structured program focuses specifically on career development, with mentors helping young people explore potential professions, understand educational requirements, develop workplace skills, and navigate the often-complicated path to meaningful employment.</p>
      
      <p>Each mentoring relationship lasts a minimum of one year, with weekly meetings and ongoing support. Mentors assist with concrete tasks like:</p>
      <ul>
        <li>College and scholarship applications</li>
        <li>Resume development and interview preparation</li>
        <li>Workplace etiquette and communication skills</li>
        <li>Financial literacy and planning</li>
        <li>Introductions to professional networks</li>
      </ul>
      
      <p>The results speak for themselves. In our program's five-year history:</p>
      <ul>
        <li>87% of participating youth have enrolled in post-secondary education or training</li>
        <li>92% report increased confidence in their ability to achieve career goals</li>
        <li>Youth with mentors are 78% more likely to volunteer regularly in their communities</li>
      </ul>
      
      <p>Your donation will support:</p>
      <ul>
        <li>Mentor recruitment, screening, and training</li>
        <li>Career exposure events and workplace visits</li>
        <li>Educational materials and technology access for youth</li>
        <li>Transportation assistance for youth to attend meetings and events</li>
      </ul>
      
      <p>With your help, we can expand our program to serve 50 additional young people this year, giving them the guidance, support, and opportunities they need to build brighter futures.</p>
    `,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80",
    raised: 9850,
    goal: 18000,
    daysLeft: 37,
    organizer: {
      name: "Future Leaders Foundation",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  },
  {
    id: 6,
    title: "Animal Shelter Support",
    description: "Help us provide food, shelter, and medical care for abandoned and rescued animals.",
    fullDescription: `
      <p>Our no-kill animal shelter provides a safe haven for hundreds of abandoned, abused, and homeless animals each year. As the only shelter serving our rural county, we often operate at maximum capacity while facing constantly increasing costs for food, veterinary care, and facility maintenance.</p>
      
      <p>Every animal that comes through our doors receives:</p>
      <ul>
        <li>A thorough medical examination and any necessary treatment</li>
        <li>Nutritious food appropriate to their specific needs</li>
        <li>Safe, clean shelter with appropriate space and enrichment</li>
        <li>Behavioral assessment and rehabilitation when needed</li>
        <li>Spaying/neutering to prevent future unwanted litters</li>
      </ul>
      
      <p>Beyond just caring for animals in our facility, we work to create lasting solutions to pet homelessness through:</p>
      <ul>
        <li>Community education programs about responsible pet ownership</li>
        <li>Low-cost spay/neuter clinics for community pets</li>
        <li>Partnerships with local schools for humane education</li>
        <li>Senior citizen pet support programs to help elderly owners keep their beloved companions</li>
      </ul>
      
      <p>Last year alone, we:</p>
      <ul>
        <li>Rescued and cared for over 750 animals</li>
        <li>Found loving forever homes for 682 cats and dogs</li>
        <li>Reunited 93 lost pets with their families</li>
        <li>Provided over $45,000 in medical care for injured and ill animals</li>
      </ul>
      
      <p>Your donation directly saves lives by providing:</p>
      <ul>
        <li>$25 feeds a shelter dog for one month</li>
        <li>$50 provides vaccines for five kittens</li>
        <li>$100 covers spay/neuter surgery for one animal</li>
        <li>$250 funds emergency medical care for an injured animal</li>
      </ul>
      
      <p>Please help us continue our vital work of protecting and caring for the most vulnerable animals in our community.</p>
    `,
    image: "https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    raised: 14320,
    goal: 22000,
    daysLeft: 28,
    organizer: {
      name: "Paws & Hearts Rescue",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg"
    }
  }
];
