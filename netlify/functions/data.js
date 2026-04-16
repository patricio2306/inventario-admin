const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };

  try {
    const store = getStore("inventario");

    if (event.httpMethod === "GET") {
      const raw = await store.get("data");
      if (!raw) {
        return { statusCode: 404, headers, body: JSON.stringify({ error: "no data" }) };
      }
      return { statusCode: 200, headers, body: raw };
    }

    if (event.httpMethod === "POST") {
      const body = event.body;
      JSON.parse(body); // validate JSON
      await store.set("data", body);
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
