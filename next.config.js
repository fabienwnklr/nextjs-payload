import { config as dotenv } from 'dotenv'
import { sizes } from './blocks/Image/sizes'

dotenv();

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'localhost',
      // Your domain(s) here
    ],
    deviceSizes: sizes,
  },
};