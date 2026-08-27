const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export function json(data: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers)
  for (const [key, value] of Object.entries(corsHeaders)) {
    if (!headers.has(key)) {
      headers.set(key, value)
    }
  }

  return Response.json(data, { ...init, headers })
}

export function corsPreflight() {
  return new Response(null, { status: 204, headers: corsHeaders })
}
