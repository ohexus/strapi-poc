import type { Schema, Attribute } from '@strapi/strapi';

export interface SliderSliderItem extends Schema.Component {
  collectionName: 'components_slider_slider_items';
  info: {
    displayName: 'SliderItem';
  };
  attributes: {
    alt: Attribute.String;
    src: Attribute.Component<'slider.slider-item-src'>;
    href: Attribute.String;
  };
}

export interface SliderSliderItemSrc extends Schema.Component {
  collectionName: 'components_slider_slider_item_srcs';
  info: {
    displayName: 'SliderItemSrc';
  };
  attributes: {
    xxl: Attribute.Media<'images'> & Attribute.Required;
    xl: Attribute.Media<'images'> & Attribute.Required;
    l: Attribute.Media<'images'> & Attribute.Required;
    m: Attribute.Media<'images'> & Attribute.Required;
    s: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ServiceOverviewServiceOverviewCard extends Schema.Component {
  collectionName: 'components_service_overview_service_overview_cards';
  info: {
    displayName: 'ServiceOverviewCard';
  };
  attributes: {
    image: Attribute.Component<'core.image'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    actions: Attribute.Component<
      'service-overview.service-overview-action',
      true
    >;
    link: Attribute.Component<'core.link'>;
  };
}

export interface ServiceOverviewServiceOverviewAction extends Schema.Component {
  collectionName: 'components_service_overview_service_overview_actions';
  info: {
    displayName: 'ServiceOverviewAction';
  };
  attributes: {
    icon: Attribute.Relation<
      'service-overview.service-overview-action',
      'oneToOne',
      'api::icon-name.icon-name'
    >;
    text: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.String;
  };
}

export interface PreviewBannerPreviewBannerTab extends Schema.Component {
  collectionName: 'components_preview_banner_preview_banner_tabs';
  info: {
    displayName: 'PreviewBannerTab';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Relation<
      'preview-banner.preview-banner-tab',
      'oneToOne',
      'api::icon-name.icon-name'
    >;
    images: Attribute.Component<'preview-banner.preview-banner-tab-images'>;
  };
}

export interface PreviewBannerPreviewBannerTabImages extends Schema.Component {
  collectionName: 'components_preview_banner_preview_banner_tab_images';
  info: {
    displayName: 'PreviewBannerTabImages';
  };
  attributes: {
    desktop: Attribute.String;
    mobile: Attribute.String;
    tablet: Attribute.String;
  };
}

export interface PreviewBannerPreviewBannerAction extends Schema.Component {
  collectionName: 'components_preview_banner_preview_banner_actions';
  info: {
    displayName: 'PreviewBannerAction';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    variant: Attribute.Relation<
      'preview-banner.preview-banner-action',
      'oneToOne',
      'api::button-variant.button-variant'
    >;
  };
}

export interface NewsNewsItem extends Schema.Component {
  collectionName: 'components_news_news_items';
  info: {
    displayName: 'NewsItem';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    date: Attribute.String & Attribute.Required;
    image: Attribute.Component<'core.image'>;
    link: Attribute.Component<'core.link'>;
  };
}

export interface FeedbackComment extends Schema.Component {
  collectionName: 'components_core_comments';
  info: {
    displayName: 'Comment';
    description: '';
  };
  attributes: {
    author: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
  };
}

export interface DownloadAppBannerQrCode extends Schema.Component {
  collectionName: 'components_download_app_banner_qr_codes';
  info: {
    displayName: 'QrCode';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
  };
}

export interface CoreLink extends Schema.Component {
  collectionName: 'components_core_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String & Attribute.Required;
    target: Attribute.String;
  };
}

export interface CoreImage extends Schema.Component {
  collectionName: 'components_core_images';
  info: {
    displayName: 'Image';
    icon: 'brush';
  };
  attributes: {
    alt: Attribute.String;
    src: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ComponentsSlider extends Schema.Component {
  collectionName: 'components_components_sliders';
  info: {
    displayName: 'Slider';
    description: '';
  };
  attributes: {
    componentName: Attribute.Relation<
      'components.slider',
      'oneToOne',
      'api::component-name.component-name'
    >;
    items: Attribute.Component<'slider.slider-item', true>;
  };
}

export interface ComponentsServiceOverview extends Schema.Component {
  collectionName: 'components_components_service_overviews';
  info: {
    displayName: 'ServiceOverview';
    description: '';
  };
  attributes: {
    componentName: Attribute.Relation<
      'components.service-overview',
      'oneToOne',
      'api::component-name.component-name'
    >;
    left: Attribute.Component<'service-overview.service-overview-card'>;
    right: Attribute.Component<'service-overview.service-overview-card'>;
  };
}

export interface ComponentsPreviewBanner extends Schema.Component {
  collectionName: 'components_components_preview_banners';
  info: {
    displayName: 'PreviewBanner';
  };
  attributes: {
    componentName: Attribute.Relation<
      'components.preview-banner',
      'oneToOne',
      'api::component-name.component-name'
    >;
    title: Attribute.String & Attribute.Required;
    tabs: Attribute.Component<'preview-banner.preview-banner-tab', true>;
    hint: Attribute.String;
    actions: Attribute.Component<'preview-banner.preview-banner-action', true>;
  };
}

export interface ComponentsPartnersShowcase extends Schema.Component {
  collectionName: 'components_blocks_partners_showcases';
  info: {
    displayName: 'PartnersShowcase';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'core.image', true>;
    componentName: Attribute.Relation<
      'components.partners-showcase',
      'oneToOne',
      'api::component-name.component-name'
    >;
  };
}

export interface ComponentsNews extends Schema.Component {
  collectionName: 'components_components_news';
  info: {
    displayName: 'News';
  };
  attributes: {
    componentName: Attribute.Relation<
      'components.news',
      'oneToOne',
      'api::component-name.component-name'
    >;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    items: Attribute.Component<'news.news-item', true>;
    bottomLink: Attribute.Component<'core.link'>;
  };
}

export interface ComponentsFeedback extends Schema.Component {
  collectionName: 'components_blocks_feedbacks';
  info: {
    displayName: 'Feedback';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    comment: Attribute.Component<'feedback.comment'> & Attribute.Required;
    vimeoId: Attribute.String & Attribute.Required;
    componentName: Attribute.Relation<
      'components.feedback',
      'oneToOne',
      'api::component-name.component-name'
    >;
  };
}

export interface ComponentsDownloadAppBanner extends Schema.Component {
  collectionName: 'components_components_download_app_banners';
  info: {
    displayName: 'DownloadAppBanner';
  };
  attributes: {
    componentName: Attribute.Relation<
      'components.download-app-banner',
      'oneToOne',
      'api::component-name.component-name'
    >;
    qrCode: Attribute.Component<'download-app-banner.qr-code'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    image: Attribute.Component<'core.image'>;
  };
}

export interface ComponentsConnectBanner extends Schema.Component {
  collectionName: 'components_components_connect_banners';
  info: {
    displayName: 'ConnectBanner';
  };
  attributes: {
    componentName: Attribute.Relation<
      'components.connect-banner',
      'oneToOne',
      'api::component-name.component-name'
    >;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    link: Attribute.Component<'core.link'>;
  };
}

export interface ComponentsCompanyAdvantages extends Schema.Component {
  collectionName: 'components_components_company_advantages';
  info: {
    displayName: 'CompanyAdvantages';
  };
  attributes: {
    items: Attribute.Component<'company-advantages.advantage-card', true>;
    componentName: Attribute.Relation<
      'components.company-advantages',
      'oneToOne',
      'api::component-name.component-name'
    >;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface CompanyAdvantagesAdvantageCard extends Schema.Component {
  collectionName: 'components_company_advantages_advantage_cards';
  info: {
    displayName: 'AdvantageCard';
  };
  attributes: {
    iconName: Attribute.Relation<
      'company-advantages.advantage-card',
      'oneToOne',
      'api::icon-name.icon-name'
    >;
    imgSrc: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    link: Attribute.Component<'core.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'slider.slider-item': SliderSliderItem;
      'slider.slider-item-src': SliderSliderItemSrc;
      'service-overview.service-overview-card': ServiceOverviewServiceOverviewCard;
      'service-overview.service-overview-action': ServiceOverviewServiceOverviewAction;
      'preview-banner.preview-banner-tab': PreviewBannerPreviewBannerTab;
      'preview-banner.preview-banner-tab-images': PreviewBannerPreviewBannerTabImages;
      'preview-banner.preview-banner-action': PreviewBannerPreviewBannerAction;
      'news.news-item': NewsNewsItem;
      'feedback.comment': FeedbackComment;
      'download-app-banner.qr-code': DownloadAppBannerQrCode;
      'core.link': CoreLink;
      'core.image': CoreImage;
      'components.slider': ComponentsSlider;
      'components.service-overview': ComponentsServiceOverview;
      'components.preview-banner': ComponentsPreviewBanner;
      'components.partners-showcase': ComponentsPartnersShowcase;
      'components.news': ComponentsNews;
      'components.feedback': ComponentsFeedback;
      'components.download-app-banner': ComponentsDownloadAppBanner;
      'components.connect-banner': ComponentsConnectBanner;
      'components.company-advantages': ComponentsCompanyAdvantages;
      'company-advantages.advantage-card': CompanyAdvantagesAdvantageCard;
    }
  }
}
