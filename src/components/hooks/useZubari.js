import {useState} from 'react'

const useZubari = () => {
    const [dentists] = useState ([
    {
      id: 1,
      name: "Dr. Charlie Hayes",
      specialty: "Cosmetic Dentist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/olivia-hayes",
        twitter: "https://twitter.com/oliviahayes",
        linkedin: "https://linkedin.com/in/olivia-hayes",
        instagram: "https://instagram.com/oliviahayes"
      }
    },
    {
      id: 2,
      name: "Dr. James Carter",
      specialty: "General Dentist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/emily-carter",
        twitter: "https://twitter.com/emilycarter",
        linkedin: "https://linkedin.com/in/emily-carter",
        instagram: "https://instagram.com/emilycarter"
      }
    },
    {
      id: 3,
      name: "Dr. James Walker",
      specialty: "Orthodontist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/james-walker",
        twitter: "https://twitter.com/jameswalker",
        linkedin: "https://linkedin.com/in/james-walker",
        instagram: "https://instagram.com/jameswalker"
      }
    },
    {
      id: 3,
      name: "Dr. Charlie Hayes 2",
      specialty: "Orthodontist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/james-walker",
        twitter: "https://twitter.com/jameswalker",
        linkedin: "https://linkedin.com/in/james-walker",
        instagram: "https://instagram.com/jameswalker"
      }
    },
    {
      id: 3,
      name: "Dr. James Carter 2",
      specialty: "Orthodontist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/james-walker",
        twitter: "https://twitter.com/jameswalker",
        linkedin: "https://linkedin.com/in/james-walker",
        instagram: "https://instagram.com/jameswalker"
      }
    },
    {
      id: 3,
      name: "Dr. James Walker 2",
      specialty: "Orthodontist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/james-walker",
        twitter: "https://twitter.com/jameswalker",
        linkedin: "https://linkedin.com/in/james-walker",
        instagram: "https://instagram.com/jameswalker"
      }
    },
    {
      id: 3,
      name: "Dr. Charlie Hayes 3",
      specialty: "Orthodontist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/james-walker",
        twitter: "https://twitter.com/jameswalker",
        linkedin: "https://linkedin.com/in/james-walker",
        instagram: "https://instagram.com/jameswalker"
      }
    },
    {
      id: 3,
      name: "Dr. James Carter 3",
      specialty: "Orthodontist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/james-walker",
        twitter: "https://twitter.com/jameswalker",
        linkedin: "https://linkedin.com/in/james-walker",
        instagram: "https://instagram.com/jameswalker"
      }
    },
    {
      id: 3,
      name: "Dr. James Walker 3",
      specialty: "Orthodontist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/james-walker",
        twitter: "https://twitter.com/jameswalker",
        linkedin: "https://linkedin.com/in/james-walker",
        instagram: "https://instagram.com/jameswalker"
      }
    }
  ]);
  return dentists;
};

export default useZubari