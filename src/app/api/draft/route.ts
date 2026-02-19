import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Called by sanity-plugin-iframe-pane to enable draft mode for preview
// This only sets the draftMode cookie - actual draft content requires
// SANITY_API_READ_TOKEN on the server, so this is safe to expose.
export async function GET(request: NextRequest) {
  const draft = await draftMode();
  draft.enable();
  return NextResponse.json({ enabled: true });
}
