const DEFAULT_HEADERS = {
    Accept: 'application/json',
  };
  
  /**
   * Creates a simplified API client with GET support
   * @param {string} baseUrl - The base API URL
   * @param {string} apiKey - Optional API key (added as query param by default)
   */
  export default function createApiClient(baseUrl, apiKey = '') {
    const get = async (endpoint = '', params = {}, headers = {}) => {
      try {
        const url = new URL(endpoint, baseUrl);
  
        // Append query params, including API key if provided
        const fullParams = { ...params, ...(apiKey ? { api_key: apiKey } : {}) };
        Object.entries(fullParams).forEach(([key, val]) =>
          url.searchParams.append(key, val)
        );
  
        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: { ...DEFAULT_HEADERS, ...headers },
        });
  
        if (!response.ok) {
          throw new Error(`GET ${url} failed with status ${response.status}`);
        }
  
        return await response.json();
      } catch (err) {
        console.error(`GET Error: ${err.message}`);
        throw err;
      }
    };
  
    return { get };
  }
  