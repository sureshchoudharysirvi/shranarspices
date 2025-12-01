import pool from "../../../lib/db"



export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    await pool.query(
      "INSERT INTO contact (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    )

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return Response.json({ success: false, error: "DB Insert failed" }, { status: 500 })
  }
}
