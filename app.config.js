import 'dotenv/config';

export default {
  expo: {
    name: "TransActivaApp",
    slug: "TransActivaApp",
    version: "1.0.0",
    extra: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
};