/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      unoptimized: true,
   },
   sassOptions: {
      includepaths: [path.join(__dirname, 'styles')],
      prependData: `@import './styles/base.scss';`,
   },
   assetPrefix: 'http://hitmanmf.beget.tech', 
};

module.exports = nextConfig
