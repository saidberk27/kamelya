import { createClient } from '@sanity/client';

const sanityToken = await process.env.REACT_APP_SANITY_TOKEN;
const sanityProjectID = await process.env.REACT_APP_SANITY_PROJECT_ID;

export const client = createClient({
  projectId: sanityProjectID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: sanityToken,
  // Only if you want to update content with the client
});

