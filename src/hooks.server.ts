import type { Handle, RequestEvent } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(/<%=\s*(\w+)\s*%>/gi, function (match, p1) {
        return process.env[p1] ?? "";
      }),
  });
  appendHeaders(event, response);
  return response;
};

const appendHeaders = (event: RequestEvent, res: Response) => {
  res.headers.append("X-Content-Type-Options", "nosniff");
  res.headers.append("X-Frame-Options", "SAMEORIGIN");
  res.headers.append(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains;"
  );
}
