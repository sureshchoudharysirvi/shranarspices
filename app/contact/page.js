// app/contact/page.js
import ContactForm from "../../components/ContactForm"

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-yellow-900">Contact Us</h1>
      <p className="mt-3 text-gray-700">Have a question or bulk order? Drop a message.</p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  )
}
