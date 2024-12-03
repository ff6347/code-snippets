// netlify/edge-functions/serve-file.ts
import { Context } from "https://edge.netlify.com";
import { codeToHtml } from "https://esm.sh/shiki@1.0.0";
import ghdark from "https://esm.sh/shiki/themes/github-dark-default.mjs";
import ghlight from "https://esm.sh/shiki/themes/github-light-default.mjs";

export default async function handler(request: Request, context: Context) {
	const url = new URL(request.url);
	const path = url.pathname;
	const ext = path.split(".").pop();
	const isDirectAccess = request.headers.get("accept")?.includes("text/html");

	// Only process js and css files
	if (ext !== "js" && ext !== "css") {
		return context.next();
	}

	try {
		const response = await context.next();
		if (!response.ok) return response;

		const contentType = ext === "js" ? "application/javascript" : "text/css";

		// For direct browser access, show highlighted version
		if (isDirectAccess) {
			const content = await response.clone().text();

			const highlighted = await codeToHtml(content, {
				lang: ext,
				themes: {
					light: ghlight,
					dark: ghdark,
				},
			});
			// const escapedContent = escapeHtml(content);

			return new Response(
				`<!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 0; padding: 20px; max-width: 800px;}
							pre,
code {
	white-space: pre-wrap;
	word-wrap: break-word;
	tab-size: 2;
}
              pre {
							line-height: 1.4;
                background: white;
                padding: 20px;
                overflow-x: auto;
              }
              code {
							/* Monospace Code */
font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
font-weight: normal;


              }
            </style>
          </head>
          <body>
            ${highlighted}
          </body>
        </html>`,
				{
					headers: { "Content-Type": "text/html" },
				},
			);
		}

		// Return original file with correct MIME type
		return new Response(response.clone().body, {
			headers: { "Content-Type": contentType },
		});
	} catch (error) {
		console.error("Error:", error);
		return new Response("File not found", { status: 404 });
	}
}
