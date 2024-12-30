import connectToDB from "../../../app/lib/database"; // Update this based on your file path
import Shop from "@/app/models/shops"; // Adjust the path as needed

// GET method to fetch total number of shops
export async function GET(req) {
  try {
    await connectToDB();
    const totalShops = await Shop.find();
    return new Response(JSON.stringify({ totalShops }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch total number of shops",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// POST method to create a new shop
export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const shop = await Shop.create(body);
    return new Response(JSON.stringify({ success: true, shop }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to create a new shop",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
