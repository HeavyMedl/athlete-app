export interface DetailsModel {
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
  pageName: string;
  subsection1: string;
  siteId: string;
  contentType: string;
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
  id: string;
  firstName: string;
  lastName: string;
  shortBio: string;
  website: string;
  born: string;
  died: null;
  gender: string;
  nationality: string;
  relatedPublications: any[];
  media: string[];
}

export interface TwitterProperties {
  'twitter:card': string;
  'twitter:image': string;
  'twitter:creator': string;
  'twitter:description': string;
  'twitter:image:alt': string;
  'twitter:site': string;
  'twitter:title': string;
}
