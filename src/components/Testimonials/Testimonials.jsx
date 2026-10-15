import { Star } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at Meridian',
    initials: 'SC',
    color: '#315CF5',
    quote: 'FlowPilot completely changed how our team manages projects. We went from scattered spreadsheets to a single source of truth — and our delivery speed improved by 30%.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Engineering Lead at Vantage',
    initials: 'MR',
    color: '#8B5CF6',
    quote: 'The automation features alone save us hours every week. FlowPilot feels like it was built by people who actually understand how dev teams work.',
  },
  {
    name: 'Emily Thornton',
    role: 'Operations Director at Clearpath',
    initials: 'ET',
    color: '#22C55E',
    quote: 'We evaluated five different tools before choosing FlowPilot. The clean interface and smart scheduling features made it the obvious choice for our remote team.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Loved by teams everywhere</h2>
          <p className="section-subtitle">
            See what teams are saying about their experience with FlowPilot.
          </p>
          <p className="testimonials-disclaimer">Sample testimonials for demonstration purposes only.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>
              <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: `${t.color}15`, color: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
