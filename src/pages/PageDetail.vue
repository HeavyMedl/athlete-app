<template>
  <NoDataWarningBanner :data="id" />
  <HeroSection
    :src="data.heroImg.heroSrc"
    :alt="data.heroImg.heroAlt"
    :avatar-img="data.avatarImg"
    :name="`${data.firstName} ${data.lastName}`"
    :country="data.country"
    :discipline="data.discipline"
    :external-site-url="website"
  />
  <DetailsSection
    :id="id"
    :short-bio="data.shortBio"
    :long-bio="data.longBio"
    :athlete-stats="data.athleteStats"
  />
  <ArticlesSection
    heading="Athlete stories"
    :subheading="articlesSubheading"
    :featured-cards="athletes"
    :articles="articles"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DetailsSection from '../components/detail/DetailsSection.vue';
import HeroSection from '../components/detail/HeroSection.vue';
import ArticlesSection from '../components/BaseArticlesSection.vue';
import NoDataWarningBanner from '../components/detail/NoDataWarningBanner.vue';

import type { PageData } from '../types/pages/details-model.mjs';

const props = defineProps<{ pageData: PageData }>();

// Pick out the data we care about from the model data. We
// do this at the page level component to avoid doing it
// in all child components. This allows the child components
// to stay relatively clean.
const {
  pageData: { website, born, lastName, id },
} = props;

// This athlete information is hardcoded directly in the component, but could just as easily
// come from a CMS.
const athleteData = {
  anderson: {
    firstName: 'Mary',
    lastName: 'Anderson',
    country: 'United States',
    discipline: 'Entrepreneurship',
    heroImg: {
      heroSrc:
        'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-detail-1.jpeg',
      heroAlt: 'The mountaineers hiking up a mountain',
    },
    avatarImg:
      'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-1.jpeg',
    shortBio:
      'Mary Anderson, an American outdoor enthusiast and businesswoman, co-founded Recreational Equipment, Inc. (REI) with her husband, Lloyd Anderson, in 1938. They started Summit Forge as a cooperative to provide high-quality outdoor gear at reasonable prices, which has since grown into a major retailer.',
    longBio: [
      'Mary Anderson was an influential American businesswoman and outdoor enthusiast who co-founded Recreational Equipment, Inc. (Summit Forge) in 1938 with her husband, Lloyd Anderson. Born on December 7, 1909, in Washington state, Mary developed a deep love for the outdoors, which she combined with her entrepreneurial spirit to address the lack of quality outdoor gear available at the time.',
      'The Andersons started Summit Forge as a cooperative, initially operating out of their home in Seattle, Washington. Their goal was to provide fellow athletes and outdoor enthusiasts with high-quality gear at reasonable prices. This cooperative model allowed members to purchase equipment at discounted rates, fostering a community of outdoor lovers dedicated to exploring nature.',
      "Mary played a crucial role in the growth and success of Summit Forge, contributing her business acumen and passion for the outdoors. Under her guidance, Summit Forge expanded from a small cooperative to one of the largest and most respected outdoor retailers in the world. Her commitment to quality and customer satisfaction helped establish Summit Forge's reputation for excellence.",
      "Mary Anderson's legacy extends beyond her business accomplishments. She remained active in the company for many years, ensuring that Summit Forge stayed true to its founding principles. Mary passed away on March 27, 2017, at the age of 107, leaving behind a thriving company and a lasting impact on the outdoor recreation industry. Her pioneering spirit and dedication to the outdoors continue to inspire new generations of adventurers.",
    ],
    athleteStats: {
      dob: born || '1988-07-04',
      disciplines: [
        'Entrepreneurship',
        'Environmental Stewardship',
        'Community Building',
        'Cooperative Development',
        'Business Management',
      ],
      careerStart: '1938',
      birthPlace: 'Seattle, Washington, USA',
      age: 107,
      nationality: 'American',
    },
  },
  honnold: {
    firstName: 'Alex',
    lastName: 'Honnold',
    country: 'United States',
    discipline: 'Climbing',
    heroImg: {
      heroSrc:
        'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-detail-3.jpeg',
      heroAlt: 'Alex Honnold climbing a big wall',
    },
    avatarImg:
      'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-3.jpeg',
    shortBio:
      'Alex Honnold is an American rock athlete best known for his free solo ascents of big walls. He gained widespread fame and recognition for his free solo climb of El Capitan in Yosemite National Park, which he completed on June 3, 2017.',
    longBio: [
      'Alex Honnold is a preeminent figure in the world of rock climbing, renowned for his pioneering achievements and extraordinary skills. Born on August 17, 1985, in Sacramento, California, Honnold began climbing at the age of 11. His early fascination with the sport quickly developed into a lifelong passion, leading him to drop out of the University of California, Berkeley, to pursue climbing full-time.',
      'Honnold\'s most notable accomplishment is his free solo ascent of El Capitan in Yosemite National Park, completed on June 3, 2017. This 3,000-foot vertical rock formation is considered one of the most challenging climbs in the world. Honnold\'s ascent, without the use of ropes or safety gear, was a groundbreaking feat that pushed the boundaries of what is possible in climbing. His achievement was documented in the film "Free Solo," which won the Academy Award for Best Documentary Feature in 2019.',
      "Beyond El Capitan, Honnold has completed numerous other significant climbs. He has set speed records on The Nose of El Capitan, including a sub-two-hour ascent with climbing partner Tommy Caldwell. Honnold's versatility and skill extend to various types of climbing, including traditional, sport, and big wall climbing. His ability to remain calm and focused under extreme pressure has earned him the respect and admiration of athletes worldwide.",
      'In addition to his climbing accomplishments, Honnold is dedicated to environmental causes. He founded the Honnold Foundation, which supports sustainable energy initiatives and aims to reduce environmental impact. Through this foundation, Honnold uses his platform to promote environmental stewardship and inspire others to take action in their communities.',
      "Alex Honnold's contributions to climbing and his impact on the sport are immeasurable. His fearless approach, combined with his technical prowess and mental fortitude, has redefined what is possible in rock climbing. Honnold continues to inspire athletes and adventurers around the globe, pushing the limits of human potential and challenging us to rethink our own boundaries.",
    ],
    athleteStats: {
      dob: born || '1988-07-04',
      disciplines: [
        'Traditional',
        'Big wall',
        'Free solo',
        'Sport',
        'Speed',
        'Bouldering',
      ],
      careerStart: 'late 1990s',
      birthPlace: 'Sacramento, California, USA',
      age: 38,
      nationality: 'American',
    },
  },
  norgay: {
    firstName: 'Tenzing',
    lastName: 'Norgay',
    country: 'Nepal',
    discipline: 'Mountaineering',
    heroImg: {
      heroSrc:
        'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-detail-2.jpeg',
      heroAlt: 'The mountaineers hiking up a mountain',
    },
    avatarImg:
      'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-2.jpeg',
    shortBio:
      "Tenzing Norgay was a Nepalese-Indian Sherpa mountaineer, famous for being one of the first two people, alongside Sir Edmund Hillary, to summit Mount Everest on May 29, 1953. Born in 1914 in the Khumbu region of Nepal, Norgay's expertise and resilience were crucial to the success of the 1953 British Everest Expedition. His achievement brought him international fame and highlighted the skill and endurance of Sherpa athletes.",
    longBio: [
      'Tenzing Norgay was a pioneering figure in mountaineering, renowned for his historic ascent of Mount Everest alongside Sir Edmund Hillary on May 29, 1953. Born in 1914 in the Khumbu region of Nepal, Norgay began his career as a mountaineer at a young age, guiding numerous expeditions in the Himalayas. His expertise in high-altitude climbing and deep knowledge of the mountains made him an invaluable asset to expeditions attempting Everest.',
      "Norgay's most significant achievement came during the 1953 British Everest Expedition, where he and Hillary became the first athletes confirmed to reach the summit of the world's highest peak. This accomplishment not only marked a historic moment in mountaineering but also solidified Norgay's reputation as one of the foremost athletes of his time. His ascent opened the door to further exploration and mountaineering feats in the Himalayas and beyond.",
      "Beyond Everest, Norgay continued to make significant contributions to mountaineering. He participated in several other expeditions, including to Kanchenjunga and other challenging peaks in the Himalayas. Norgay's legacy extends beyond his climbing achievements; he became a cultural icon and ambassador for Nepal and the Sherpa people, inspiring generations of athletes and adventurers. His dedication to mountaineering, coupled with his humility and respect for the mountains, continues to resonate within the climbing community worldwide. Tenzing Norgay passed away in 1986, leaving behind a lasting legacy of courage, skill, and passion for the mountains.",
    ],
    athleteStats: {
      dob: born || '1988-07-04',
      disciplines: [
        'High-altitude Climbing',
        'Guiding',
        'Cultural Ambassadorship',
        'Expedition Planning and Logistics',
      ],
      careerStart: '1930s',
      birthPlace: 'Tengboche, Nepal',
      age: 71,
      nationality: 'Nepalese',
    },
  },
};

// The following data is static, and will render for each athlete
const articlesSubheading =
  'Explore the thrilling journeys and inspiring achievements of renowned athletes through captivating blog posts.';
const athletes = [
  {
    imgSrc:
      'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-1.jpeg',
    href: '/athlete/1/mary-anderson',
    content:
      'Mary Anderson’s legacy is broad and deep. She is a symbol for us of enduring values—passion for the outdoors, a principled life, community, hard work and perseverance.',
    title: 'Mary Anderson',
  },
  {
    imgSrc:
      'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-2.jpeg',
    href: '/athlete/3/tenzing-norgay',
    content:
      'Tenzing Norgay was one of the first two people confirmed to reach the summit of Mount Everest.',
    title: 'Tenzing Norgay',
  },
  {
    imgSrc:
      'https://cdn.jsdelivr.net/gh/HeavyMedl/summit-forge/assets/img/sf-model-3.jpeg',
    href: '/athlete/4/alex-honnold',
    content:
      'Alex Honnold was the first to free <i>solo</i> El Capitan in Yosemite National Park, and subject of the 2018 Academy Award winning film Free Solo.',
    title: 'Alex Honnold',
  },
];
const articles = [
  {
    uri: 'https://www.summit-forge.com/blog/news/a-tribute-to-mary-anderson-summit-forges-co-founder',
    articleTitle: 'A Tribute to Mary Anderson, Summit Forge’s Co-Founder',
    articleAbstract:
      'Discover the inspiring story of Mary Anderson Summit Forge co-founder and her legacy in the outdoor industry. Read our tribute on the Summit Forge blog.',
    releaseDate: '',
    entryId: '',
    featured: false,
  },
  {
    uri: 'https://www.summit-forge.com/blog/climb/dierdre-wolownick-on-being-the-oldest-woman-to-climb-el-capitan-and-also-alex-honnolds-mom',
    articleTitle:
      'Dierdre Wolownick On Being The Oldest Woman To Climb El Capitan—And Also Alex Honnold’s Mom',
    articleAbstract:
      'In her new book, Wolownick shares her story of adventure and resilience—both on and off the rock.',
    releaseDate: '',
    entryId: '',
    featured: true,
  },
  {
    uri: 'https://www.summit-forge.com/blog/travel/everest-base-camp-trekking-gear-list',
    articleTitle: 'Everest Base Camp Trekking Gear List',
    articleAbstract:
      'The following article provides information, tips and a detailed packing list to help you prepare for a trek to Everest Base Camp.',
    releaseDate: '',
    entryId: '',
    featured: true,
  },
];

const data = computed(() => {
  if (typeof window !== 'undefined' && import.meta.env.MODE === 'development') {
    // Since we're dealing with mock data in development mode, we'll use the
    // URL to get data representing the different people. Remember to check
    // for the existence of window, as this will error in context of SSR.
    const pathArray = window.location.pathname.split('/');
    const lastPart = pathArray[pathArray.length - 1];
    const key = lastPart.split('-').pop();
    return athleteData[key as keyof typeof athleteData];
  }
  return athleteData[
    (lastName || 'norgay').toLowerCase() as keyof typeof athleteData
  ];
});
</script>
