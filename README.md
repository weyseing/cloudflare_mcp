# References
- https://www.youtube.com/watch?v=3Jsh4brTjE0
- https://github.com/cloudflare/workers-mcp

# Guide
### Node Container: -
- Initialize **package.json**
    > `npm init -y`
- Start up container
    > `docker compose up -d`

### CloudFlare Worker: -
- Create CF worker project
    > `npx create-cloudflare@latest worker-mcp`
- Project selection
    > ```
    > ╭ Create an application with Cloudflare Step 1 of 3
    > │
    > ├ In which directory do you want to create your application?
    > │ dir ./worker-mcp
    > │
    > ├ What would you like to start with?
    > │ category Hello World example
    > │
    > ├ Which template would you like to use?
    > │ type SSR / full-stack app
    > │
    > ├ Which language do you want to use?
    > │ lang TypeScript
    > │
    > ├ Copying template files
    > │ files copied to project directory
    > │
    > ├ Updating name in `package.json`
    > │ updated `package.json`
    > │
    > ├ Installing dependencies
    > │ installed via `npm install`
    > │
    > ╰ Application created
    > 
    > ╭ Configuring your application for Cloudflare Step 2 of 3
    > │
    > ├ Installing wrangler A command line tool for building Cloudflare Workers
    > │ installed via `npm install wrangler --save-dev`
    > │
    > ├ Installing @cloudflare/workers-types
    > │ installed via npm
    > │
    > ├ Adding latest types to `tsconfig.json`
    > │ added @cloudflare/workers-types/2023-07-01
    > │
    > ├ Retrieving current workerd compatibility date
    > │ compatibility date 2025-04-23
    > │
    > ╰ Application configured
    > 
    > ╭ Deploy with Cloudflare Step 3 of 3
    > │
    > ├ Do you want to deploy your application?
    > │ no deploy via `npm run deploy`
    > │
    > ╰ Done
    > 
    > ────────────────────────────────────────────────────────────
    > 🎉  SUCCESS  Application created successfully!
    > ```