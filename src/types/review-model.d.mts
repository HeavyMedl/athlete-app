export interface ReviewModel {
  pageData: PageData;
}

export interface PageData {
  reviews: Review[];
}

export interface Review {
  user: string;
  when: string;
  shortReview: string;
  longReview: string;
  rating: number;
  wouldRecommend: boolean;
}
