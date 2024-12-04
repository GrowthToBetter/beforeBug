export const fetcher = async (url: string) => {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include', // Penting untuk mengirim cookies
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }
  
    return response.json();
  };