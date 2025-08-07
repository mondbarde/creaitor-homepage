export async function GET() {
  const content = 'google.com, pub-3480092389255344, DIRECT, f08c47fec0942fa0';
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}