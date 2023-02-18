import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-noataso-tutorial",
  apiKey: process.env.API_KEY,
});
