export interface LandingModel {
  titlePattern: string;
  icon: string;
  description: string;
  includeJsonModel: boolean;
  hideUniversalNavigation: boolean;
  hideFooter: boolean;
  title: string;
  analytics: Analytics;
  allowZoom: boolean;
  staticRoot: string;
  hideHeaderFooter: boolean;
  openGraphProperties: OpenGraphProperties;
  hideHeader: boolean;
  useAdobeVisitorService: boolean;
  hideGlobalNavigation: boolean;
  favicon: string;
  maskIcon: string;
  canonical: string;
  pageData: PageData;
  customStyles: null;
  customScripts: null;
  useAdobeTarget: boolean;
  canonicalRoot: string;
  hidePromoMessageBanner: boolean;
  meta: null;
  twitterProperties: TwitterProperties;
  schemaType: null;
  siteId: string;
  includeAnalyticsJson: boolean;
  contactPhoneNumber: string;
  deploymentInfo: DeploymentInfo;
}

export interface Analytics {
  templateType: string;
  subsection1: string;
  channel: string;
  siteId: string;
  pageName: string;
  contentType: string;
  pagename: string;
}

export interface DeploymentInfo {
  devEnvironmentName: string;
  environmentName: string;
  applicationId: string;
}

export interface OpenGraphProperties {
  'fb:app_id': string;
  'og:phone_number': string;
  'og:description': string;
  'og:image:type': string;
  'og:image:alt': string;
  'og:image': string;
  'og:title': string;
  'og:locale': string;
  'og:type': string;
  'og:url': string;
  'og:site_name': string;
}

export interface PageData {
  recentArticles: RecentArticle[];
  componentModels: ComponentModels;
}

export interface ComponentModels {
  lead: Lead;
  athletes: athletes;
  'ea-cards': EaCards;
  'summit-forge-engineering-banner': SummitForgeEngineeringBanner;
  'external-component': ExternalComponent;
}

export interface athletes {
  documentType: string;
  canonicalHandleUUID: string;
  meta: null;
  keywords: null;
  lastModifiedDate: string;
  createdDate: string;
  createdBy: string;
  componentName: null;
  modelName: string;
  id: null;
  name: string;
  model: athletesModel;
}

export interface athletesModel {
  text: PurpleText;
  actions: AuthorClass;
  children: AuthorClass;
  headings: AuthorClass;
  config: AuthorClass;
  media: PurpleMedia;
  meta: AuthorClass;
  author: AuthorClass;
}

export interface AuthorClass {}

export interface PurpleMedia {
  feature_1: ImageXsClass;
  feature_2: ImageXsClass;
  feature_3: ImageXsClass;
}

export interface ImageXsClass {
  name: null;
  anchor: null;
  description: null;
  src: string;
  customClass: null;
  alt: null | string;
  srcReference: null | string;
  type: null;
  target: null | string;
}

export interface PurpleText {
  feature_1: FeatureClass;
  feature_2: FeatureClass;
  feature_3: FeatureClass;
  feature_4: FeatureClass;
}

export interface FeatureClass {
  text: string;
  customClass: null;
}

export interface EaCards {
  documentType: string;
  canonicalHandleUUID: string;
  meta: null;
  keywords: null;
  lastModifiedDate: string;
  createdDate: string;
  createdBy: string;
  componentName: null;
  modelName: string;
  id: null;
  name: string;
  model: EaCardsModel;
}

export interface EaCardsModel {
  text: AuthorClass;
  actions: AuthorClass;
  children: PurpleChildren;
  headings: AuthorClass;
  config: AuthorClass;
  media: AuthorClass;
  meta: AuthorClass;
  author: AuthorClass;
}

export interface PurpleChildren {
  card_1: Card;
  card_2: Card;
  card_3: Card;
}

export interface Card {
  canonicalHandleUUID: string;
  meta: null;
  keywords: null;
  lastModifiedDate: string;
  createdDate: string;
  createdBy: string;
  componentName: null;
  modelName: string;
  id: null;
  name: string;
  model: CardModel;
}

export interface CardModel {
  text: FluffyText;
  actions: PurpleActions;
  children: AuthorClass;
  headings: PurpleHeadings;
  config: AuthorClass;
  media: FluffyMedia;
  meta: AuthorClass;
  author: AuthorClass;
}

export interface PurpleActions {
  'action-1': Text1;
}

export interface Text1 {
  name: string;
  style: null;
  text: null | string;
  customClass: null;
  apptarget: null;
  target: string;
}

export interface PurpleHeadings {
  'heading-1': FeatureClass;
  'heading-2': FeatureClass;
}

export interface FluffyMedia {
  'image-1': ImageXsClass;
}

export interface FluffyText {
  'text-1': FeatureClass;
}

export interface ExternalComponent {
  documentType: string;
  canonicalHandleUUID: string;
  meta: null;
  keywords: null;
  lastModifiedDate: string;
  createdDate: string;
  createdBy: string;
  componentName: null;
  modelName: string;
  id: null;
  name: string;
  model: ExternalComponentModel;
}

export interface ExternalComponentModel {
  text: AuthorClass;
  actions: AuthorClass;
  children: AuthorClass;
  headings: FluffyHeadings;
  config: PurpleConfig;
  media: AuthorClass;
  meta: AuthorClass;
  author: AuthorClass;
}

export interface PurpleConfig {
  name: string;
  version: string;
  title: string;
}

export interface FluffyHeadings {
  heading_1: FeatureClass;
}

export interface Lead {
  documentType: string;
  canonicalHandleUUID: string;
  meta: null;
  keywords: null;
  lastModifiedDate: string;
  createdDate: string;
  createdBy: string;
  componentName: null;
  modelName: string;
  id: null;
  name: string;
  model: LeadModel;
}

export interface LeadModel {
  text: TentacledText;
  actions: AuthorClass;
  children: AuthorClass;
  headings: FluffyHeadings;
  config: FluffyConfig;
  media: TentacledMedia;
  meta: AuthorClass;
  author: AuthorClass;
}

export interface FluffyConfig {
  noGutter: string;
  fullBleed: string;
  stacked: string;
}

export interface TentacledMedia {
  image_xs: ImageXsClass;
}

export interface TentacledText {
  body: FeatureClass;
}

export interface SummitForgeEngineeringBanner {
  documentType: string;
  canonicalHandleUUID: string;
  meta: null;
  keywords: null;
  lastModifiedDate: string;
  createdDate: string;
  createdBy: string;
  componentName: null;
  modelName: string;
  id: null;
  name: string;
  model: SummitForgeEngineeringBannerModel;
}

export interface SummitForgeEngineeringBannerModel {
  text: StickyText;
  actions: FluffyActions;
  children: FluffyChildren;
  headings: FluffyHeadings;
  config: AuthorClass;
  media: TentacledMedia;
  meta: AuthorClass;
  author: AuthorClass;
}

export interface FluffyActions {
  text_1: Text1;
  text_2: Text1;
}

export interface FluffyChildren {
  'section-1': Section;
  'section-2': Section;
  'section-3': Section;
  'section-4': Section;
  'section-5': Section;
  'section-6': Section;
}

export interface Section {
  canonicalHandleUUID: string;
  meta: null;
  keywords: null;
  lastModifiedDate: string;
  createdDate: string;
  createdBy: string;
  componentName: null;
  modelName: string;
  id: null;
  name: string;
  model: SectionModel;
}

export interface SectionModel {
  text: FluffyText;
  actions: TentacledActions;
  children: AuthorClass;
  headings: TentacledHeadings;
  config: AuthorClass;
  media: FluffyMedia;
  meta: AuthorClass;
  author: AuthorClass;
}

export interface TentacledActions {
  'target-1': Text1;
}

export interface TentacledHeadings {
  'heading-1': FeatureClass;
}

export interface StickyText {
  text_1: FeatureClass;
  text_2: FeatureClass;
}

export interface RecentArticle {
  uri: string;
  articleTitle: string;
  articleAbstract: string;
  releaseDate: string;
  entryId: string;
  featured: boolean;
}

export interface TwitterProperties {
  'twitter:creator': string;
  'twitter:description': string;
  'twitter:image:alt': string;
  'twitter:site': string;
  'twitter:title': string;
  'twitter:card': string;
  'twitter:image': string;
}
