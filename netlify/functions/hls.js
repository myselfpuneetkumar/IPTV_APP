
export default async (request) => {

  const requestUrl = new URL(request.url);

  const targetUrl = requestUrl.searchParams.get("url");


  // No URL supplied
  if (!targetUrl) {

    return new Response(
      "Missing url parameter",
      {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

  }


  try {

    console.log(
      "Fetching:",
      targetUrl
    );


    const response = await fetch(targetUrl);


    if (!response.ok) {

      return new Response(
        `Upstream server returned ${response.status}`,
        {
          status: response.status,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

    }


    const content = await response.text();


    return new Response(
      content,
      {
        status: 200,

        headers: {

          "Content-Type":
            "application/vnd.apple.mpegurl",

          "Access-Control-Allow-Origin":
            "*",

          "Cache-Control":
            "no-cache",

        },
      }
    );


  } catch (error) {

    console.error(
      "HLS proxy error:",
      error
    );


    return new Response(
      "Unable to fetch HLS stream",
      {
        status: 500,

        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

  }

};

