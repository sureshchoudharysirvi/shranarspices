// components/ReviewList.jsx
export default function ReviewList({ reviews = [] }) {
  if (!reviews.length) return <p className="mt-2 text-gray-500">No reviews yet.</p>

  return (
    <div className="mt-4 space-y-4">
      {reviews.map(r => (
        <div key={r.id} className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between">
            <strong>{r.name}</strong>
            <span className="text-yellow-700">{'★'.repeat(r.rating)}</span>
          </div>
          <p className="mt-2 text-gray-700">{r.text}</p>
        </div>
      ))}
    </div>
  )
}
