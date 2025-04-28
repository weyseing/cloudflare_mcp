# References
- https://www.youtube.com/watch?v=3Jsh4brTjE0
- https://github.com/cloudflare/workers-mcp

# Guide
## Node Container: -
- Initialize **package.json**
    > `npm init -y`
- Start up container
    > `docker compose up -d`

## CloudFlare Worker: -
### Create CF worker project: -
- > `npx create-cloudflare@latest worker-mcp`
- Project selection:
    > ```
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
    > ```

### Setup CF Worker: -
- Set CF account ID to **wrangler.jsonc**
    - `"account_id": "95437c835139b228336df1913750ad6e"`
- Set CF API key in env
    - `CLOUDFLARE_API_TOKEN=<API-KEY-HERE>`
- Setup
    - > `npx workers-mcp setup`