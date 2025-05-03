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
- Create via CF template
    > `npx create-cloudflare@latest worker-mcp`
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
    > `"account_id": "95437c835139b228336df1913750ad6e"`
- Set CF API key in env
    - API's permission template: `Edit Cloudflare Workers`
    - ENV: `CLOUDFLARE_API_TOKEN=<API-KEY-HERE>`
- Deploy worker to CF
    - **First deploy:** `npx workers-mcp setup`
    - **Re-deploy:** `npm run deploy`
- MCP server config
    > ```json
    > {
    >     "mcpServers": {
    >         "worker-mcp-window": {
    >         "command": "workers-mcp",
    >         "args": [
    >             "run",
    >             "worker-mcp",
    >             "https://worker-mcp.sysadm.workers.dev/",
    >             "\\\\wsl.localhost\\Ubuntu-20.04\\home\\jeremy\\test\\cloudflare_mcp\\worker-mcp
    >         ],
    >         "env": {}
    >         }
    >     }
    > }
    > ```