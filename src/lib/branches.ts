export type Branch = {
  name: string;
  slug: string;
  location: string;
  emirate: string;
  email: string;
  phone: string;
  whatsapp: string;
  role: string;
  mapUrl: string;
  mapEmbed: string;
};

/**
 * The five Mariot branches. Shared by the /branches directory and each
 * /branches/[slug] page so the two can never fall out of step.
 */
export const BRANCHES: Branch[] = [
  {
    name: 'Dubai Branch',
    slug: 'dubai-branch',
    location: 'Deira, Dubai, UAE',
    emirate: 'Dubai',
    email: 'admin@mariotkitchen.com',
    phone: '+971 4 288 2777',
    whatsapp: '+971 4 288 2777',
    role: 'Head Office & Showroom',
    mapUrl: 'https://maps.google.com/?q=Mariot+Kitchen+Equipment+Dubai',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14431.906351691736!2d55.333482!3d25.271373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc11a3decb1%3A0xcbf6f96b27d47ed0!2z2YXYp9ix2YrZiNiqINmE2YXYudiv2KfYqiDYp9mE2YXYt9in2KjYriB8IE1hcmlvdCBLaXRjaGVuIEVxdWlwbWVudA!5e0!3m2!1sen!2sus!4v1784732080786!5m2!1sen!2sus',
  },
  {
    name: 'Al Ain Branch',
    slug: 'al-ain-branch',
    location: 'Al Ain Industrial Area, UAE',
    emirate: 'Al Ain',
    email: 'alain@mariotkitchen.com',
    phone: '+971 3 722 7337',
    whatsapp: '+971 3 722 7337',
    role: 'Showroom & Service',
    mapUrl: 'https://maps.google.com/?q=Mariot+Kitchen+Equipment+Al+Ain',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14558.690440569799!2d55.762647!3d24.183212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab7f023fc95a5%3A0xc42649fb40dab407!2sMariot%20Kitchen%20Equipment!5e0!3m2!1sen!2sus!4v1784732114296!5m2!1sen!2sus',
  },
  {
    name: 'Abu Dhabi Muroor Branch',
    slug: 'abu-dhabi-muroor-branch',
    location: 'Muroor Road, Abu Dhabi, UAE',
    emirate: 'Abu Dhabi',
    email: 'sales2@mariotkitchen.com',
    phone: '+971 2 645 9353',
    whatsapp: '+971 2 645 9353',
    role: 'Showroom & Sales',
    mapUrl: 'https://maps.google.com/?q=Mariot+Kitchen+Equipment+Muroor',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7261.004526182325!2d54.374451!3d24.502697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66f6711522f7%3A0xba8c40636e4d1dc1!2sMariot%20Kitchen%20Equip!5e0!3m2!1sen!2sus!4v1784732180517!5m2!1sen!2sus',
  },
  {
    name: 'Sharjah Branch',
    slug: 'sharjah-branch',
    location: 'Al Majaz, Sharjah, UAE',
    emirate: 'Sharjah',
    email: 'sales@mariot-group.com',
    phone: '+971 6 767 7777',
    whatsapp: '+971 6 767 7777',
    role: 'Showroom & Sales',
    mapUrl: 'https://maps.google.com/?q=Mariot+Kitchen+Equipment+Sharjah',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7213.2498989855085!2d55.382416!3d25.316802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b111a48b363%3A0xf594b5fad15d22af!2z2YXYp9ix2YrZiNiqINmE2YXYudiv2KfYqiDYp9mE2YXYt9in2KjYriB8IE1hcmlvdCBLaXRjaGVuIEVxdWlwbWVudA!5e0!3m2!1sen!2sus!4v1784732195077!5m2!1sen!2sus',
  },
  {
    name: 'Sharjah Industrial Branch',
    slug: 'sharjah-industrial-branch',
    location: 'Industrial Area, Sharjah, UAE',
    emirate: 'Sharjah',
    email: 'factory@mariotkitchen.com',
    phone: '+971 6 767 7776',
    whatsapp: '+971 6 767 7776',
    role: 'Fabrication Factory',
    mapUrl: 'https://maps.google.com/?q=Mariot+Kitchen+Equipment+Sharjah+Industrial',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7214.680620003732!2d55.429508!3d25.292768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f1068f8c01d%3A0xfa273e3af48feb67!2z2YXYp9ix2YrZiNiqINmE2YXYudiv2KfYqiDYp9mE2YXYt9in2KjYriDYp9mE2LTYp9ix2YLYqSB8IE1hcmlvdCBLaXRjaGVuIEVxdWlwbWVudA!5e0!3m2!1sen!2sus!4v1784732215386!5m2!1sen!2sus',
  },
];
