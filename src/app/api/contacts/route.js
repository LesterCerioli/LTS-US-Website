import { saveContactData } from "@/app/services/saveDataContacts";

export async function POST(req) {
    try {
        const body = await req.json();

        if (!body.name || !body.email || !body.phone || !body.message) {
            return new Response(
                JSON.stringify({ error: "All fields are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        
        await saveContactData(body);

        return new Response(
            JSON.stringify({ message: "Data received successfully" }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("API Error:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}