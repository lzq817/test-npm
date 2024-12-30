export function getUrlParams(url?: string): Record<string, string> {
  const searchParams = new URLSearchParams(
    url ? new URL(url).search : window.location.search
  );
  const params: Record<string, string> = {};
  
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  
  return params;
} 