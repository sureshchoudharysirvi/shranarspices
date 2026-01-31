import pool from "../../../lib/db"



export async function POST(req) {
  try {
    const { name, email,  mobile, message } = await req.json()

    await pool.query(
      "INSERT INTO contact (name, email,mobile, message) VALUES ($1, $2, $3, $4)",
      [name, email,mobile, message]
    )

    return Response.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return Response.json({ success: false, error: "DB Insert failed" }, { status: 500 })
  }
}
