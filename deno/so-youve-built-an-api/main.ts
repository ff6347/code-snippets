Deno.serve(async (req) => {
  if (req.method === 'POST') {
    const body = await req.json();
    const { inputValue } = body;
    return new Response(
      JSON.stringify({ numberOfCharactes: inputValue.length }),
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
        status: 201,
      },
    );
  } else {
    return new Response('not found', {
      status: 400,
    });
  }
});
