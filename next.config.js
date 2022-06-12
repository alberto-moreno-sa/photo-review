/** @type {import('next').NextConfig} */
const pjson = require('./package.json');

const localeSubpaths = {
  en: 'en',
};

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  poweredByHeader: false,
  publicRuntimeConfig: {
    localeSubpaths,
  },
  i18n,
  generateBuildId: async () => {
    return pjson.version;
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
    }

    return config;
  },
};

module.exports = nextConfig;
