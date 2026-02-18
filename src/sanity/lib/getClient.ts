import { client } from "./client";
import { previewClient } from "./preview-client";

export function getClient(preview = false) {
  return preview ? previewClient : client;
}
