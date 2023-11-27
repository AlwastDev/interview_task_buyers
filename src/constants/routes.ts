export const ROUTES = {
  HOME: '/',

  PUBLIC: {
    ABOUT: '/about-us',
    CONTACT_US: '/contact-us',

    HELP_CENTER: '/help-center',
    HELP_CENTER_LOGIN_SIGNUP: '/help-center/login-signup',
    HELP_CENTER_BUY_REFUND: '/help-center/buy-refund',
    HELP_CENTER_SELL_PAYOT: '/help-center/sell-payout',
    HELP_CENTER_ACCOUNTS: '/help-center/accounts',

    CATEGORIES: '/categories',
    SELLERS: '/sellers',

    TEARMS_CONDITIONS: '/terms-conditions',
    PRIVACY_POLICY: '/privacy-policy',
  },

  PRIVATE: {
    PROFILE: '/cabinet/profile',
    DASHBOARD: '/cabinet/dashboard',
    MESSAGES: '/cabinet/messages',
    SECTIONS: '/cabinet/sections',
    SELLERS: '/cabinet/sellers',
    FINANCIAL: '/cabinet/financial',
    BOUGHT_PRODUCTS: '/cabinet/bought-products',
    ACHIEVEMENT: '/cabinet/achievement',
    PAYMENT: '/cabinet/payment',
    PAYMENT_DETAILS: '/cabinet/payment/details',
    NOTIFICATIONS: '/cabinet/notifications',
    SECURITY: '/cabinet/security',
    REPORT: '/cabinet/report',
    SETTINGS: '/cabinet/settings',
    BUYERS: '/cabinet/buyers',

    SELLER: {
      FINANCIAL_BALANCE: '/cabinet/financial-balance',
      FINANCIAL_BALANCE_DETAILS: '/cabinet/financial-balance/details',

      SALES_OFFERS: '/cabinet/sales-offers',
      SALES_OFFERS_REQUEST_DETAILS: '/cabinet/sales-offers/request-details',
      SALES_OFFERS_PRODUCT_DETAILS: '/cabinet/sales-offers/product-details',
      SALES_OFFERS_EDIT: '/cabinet/sales-offers/edit',

      TOP_SELLERS: '/cabinet/top-sellers',
      CREATE_OFFER: '/cabinet/create-offer',
    },
  },

  AUTH: {
    LOGIN: '/login',
    LOGOUT: '/logout',
    REGISTRATION: '/registration',

    CONFIRM_EMAIL: '/confirm-email',
    CONFIRM_EMAIL_VERIFIED: '/confirm-email/verified',

    CONFIRM_PHONE: '/confirm-phone',
    CONFIRM_PHONE_VERIFIED: '/confirm-phone/verified',

    RESET: '/reset',
    RESET_RESEND_CODE: '/reset/resend-code',
    RESET_UPDATE_PASSWORD: '/reset/update-password',
    RESET_SECCESS: '/reset/success',

    TWO_FACTOR_AUTHENTICATION: '/two-factor-authentication',
  },
};
