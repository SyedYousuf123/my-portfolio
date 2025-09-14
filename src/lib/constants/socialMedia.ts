import Github from '@/../public/assets/icons/github.svg';
import Linkedin from '@/../public/assets/images/linkedin.png';
import Email from '@/../public/assets/icons/mail.svg';

export const SOCIAL_MEDIA_KEYS = {
  LinkedIn: "LinkedIn",
  Email: "Email",
}

export const SOCIAL_MEDIA = {
  "github": {
    name: "GitHub",
    image: Github,
    href: "https://github.com/SyedYousuf123",
    linkName: "syed yousuf ahmed",
    hasLocale: false,
    localeName: false,
  },
  "linkedin": {
    name: "LinkedIn",
    image: Linkedin,
    href: "https://www.linkedin.com/in/syed-yousuf-ahmed-0a9078250/",
    linkName: "syed yousuf ahmed",
    hasLocale: true,
    localeName: false,
  },
  "email": {
    name: "Email",
    image: Email,
    href: "mailto:sy6943750@gmail.com",
    linkName: "sy6943750@gmail.com",
    hasLocale: true,
    localeName: true,
  }
}