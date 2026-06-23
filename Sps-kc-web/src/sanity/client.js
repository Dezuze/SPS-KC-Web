import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "bvy9q97t",
  dataset: "production",
  apiVersion: "2025-06-07",
  useCdn: false,
});
