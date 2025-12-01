"use client"
import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState(null)

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-[420px] sm:max-w-[550px] bg-white/90 shadow-lg rounded-2xl p-6 sm:p-8 border border-yellow-800/20"
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-yellow-800 mb-6 text-center">
          Get in Touch
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-yellow-900 mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full border border-yellow-800/30 px-3 py-2 rounded-lg focus:outline-yellow-800 font-serif"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-yellow-900 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="w-full border border-yellow-800/30 px-3 py-2 rounded-lg focus:outline-yellow-800 font-serif"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-yellow-900 mb-1">Message</label>
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={onChange}
            className="w-full border border-yellow-800/30 px-3 py-2 rounded-lg focus:outline-yellow-800 font-serif"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-800 hover:bg-yellow-900 transition text-white py-2.5 text-lg font-serif rounded-lg shadow-md"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-700 text-center mt-4 font-serif">
            ✔ Sent — we will reply soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-700 text-center mt-4 font-serif">
            ✖ Failed — please try again.
          </p>
        )}
      </form>
    </section>
  )
}
