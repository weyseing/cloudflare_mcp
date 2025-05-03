
import { WorkerEntrypoint } from 'cloudflare:workers'
import { ProxyToSelf } from 'workers-mcp'

export default class MyWorker extends WorkerEntrypoint<Env> {
  /**
   * A warm, friendly greeting from your new Workers MCP server.
   * @param name {string} the name of the person we are greeting.
   * @return {string} the contents of our greeting.
   */
  sayHello(name: string) {
    return `Hello from an MCP Worker, ${name}!`
  }

  /**
   * Perform a DuckDuckGo search and return the Instant Answer API response.
   * @param query {string} The search term to look up
   * @return {object} The parsed response from DuckDuckGo Instant Answer API
   */
  async duckDuckGoSearch(query: string): Promise<any> {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`DDG API error ${resp.status}`);
    return resp.json();
  }

  /**
   * @ignore
   **/
  async fetch(request: Request): Promise<Response> {
    return new ProxyToSelf(this).fetch(request)
  }
}
