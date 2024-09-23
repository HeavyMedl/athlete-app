import type { ReviewModel } from '../types/review-model.mjs';

const modelData: ReviewModel = {
  pageData: {
    reviews: [
      {
        user: 'Shirly',
        when: '1721927427',
        shortReview: 'Great Bike Touring Tent!',
        longReview:
          "I love my new tent! It's the perfect size/weight for touring on bike. Easy set up! The first night of use it rained a few hours and the tent stayed perfectly dry inside. The ceiling vents provide good ventilation. The doors are well designed with various options to tie back from partially or fully open. It's really nice to have two doors which also tuck away at the top of the tent. I purchased the foot print separately, which kept the bottom of the tent protected and dry. And finally I love the rainier design.",
        rating: 4,
        wouldRecommend: true,
      },
      {
        user: 'MajorTom',
        when: '1721927427',
        shortReview: 'Great tent. Awesome design.',
        longReview:
          'I read the reviews and out of 4 were pretty bad. I think one guy here has the wrong product and the other guy is really up tight with his snags. This tent is awesome. Love the grid pattern and is a smart choice from Summit Forge, bc when you have this tent lit up it looks amazing from the outside. Yeah, there were a few snags on mesh but nothing to worry about at all. Tent performs well in high wind 40-50mph at the badlands in South Dakota last month. Hated the 1 pole system because it was awkward to set up, until I discovered you need to stake in your tent first in order for it to be a breeze. Lots of pockets. More than I need. Fly vestibule is big enough for my liking. Vertical walls are awesome as I am a tad claustrophobic. Makes it seem larger. Love this tent.',
        rating: 3,
        wouldRecommend: true,
      },
      {
        user: 'MajorTom',
        when: '1721927427',
        shortReview: 'Loving the Half Dome tent!',
        longReview:
          'I originally fell in love with this tent years ago while doing a Yellowstone trip with Summit Forge. Ever since then this tent has been on my camping wish list! I pulled the trigger a few weeks ago (yay dividends!) and am so happy with my purchase. It was super easy to put up (I did it all by myself the first time with no help in crazy wind), looks great, has so many convenient pockets, and withstood crazy wind with no problem. I car camp and backpack and I like that this tent is versatile enough for both. Since I was car camping this weekend, I threw in a twin size air mattress and my dogs bed, and still had about a foot of clearance for our stuff. Very happy customer!',
        rating: 5,
        wouldRecommend: false,
      },
    ],
  },
};
export default modelData;
