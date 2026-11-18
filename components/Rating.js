const MAX_RATING = 5

export default function Rating({ value, className = '' }) {
  const rating = Math.round(value)

  return (
    <div className={`text-warning ${className}`} aria-label={`Рейтинг ${value} из ${MAX_RATING}`}>
      {'★'.repeat(rating)}
      <span className="text-black-50">{'★'.repeat(MAX_RATING - rating)}</span>
    </div>
  )
}
