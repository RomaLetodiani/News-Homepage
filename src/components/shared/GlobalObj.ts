import bannerDesktop from '../../assets/images/image-web-3-desktop.jpg';
import bannerMobile from '../../assets/images/image-web-3-desktop.jpg';

import retro from '../../assets/images/image-retro-pcs.jpg';
import laptop from '../../assets/images/image-top-laptops.jpg';
import gaming from '../../assets/images/image-gaming-growth.jpg';

import logo from '../../assets/images/logo.svg';

export const GlobalObj = {
  logo,
  header: ['Home', 'New', 'Popular', 'Trending', 'Categories'],
  hero: {
    title: 'The Bright Future of Web 3.0?',
    desc: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
    button: 'Read more',
    mainBanner: {
      desktop: bannerDesktop,
      mobile: bannerMobile,
      alt: 'Hero Image',
    },
    news: {
      title: 'New',
      items: [
        {
          title: 'Hydrogen VS Electric Cars',
          desc: 'Will hydrogen-fueled cars ever catch up to EVs?',
        },
        {
          title: 'The Downsides of AI Artistry',
          desc: 'What are the possible adverse effects of on-demand AI image generation?',
        },
        {
          title: 'Is VC Funding Drying Up?',
          desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
        },
      ],
    },
    topics: [
      {
        id: 1,
        title: 'Reviving Retro PCs',
        desc: 'What happens when old PCs are given modern upgrades?',
        img: { link: retro, alt: 'Retro PC' },
      },
      {
        id: 2,
        title: 'Top 10 Laptops of 2024',
        desc: 'Our best picks for various needs and budgets.',
        img: { link: laptop, alt: 'Laptop' },
      },
      {
        id: 3,
        title: 'The Growth of Gaming',
        desc: 'How the pandemic has sparked fresh opportunities.',
        img: { link: gaming, alt: 'Gaming' },
      },
    ],
  },
};
