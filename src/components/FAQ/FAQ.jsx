import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    question: 'What is FlowPilot?',
    answer: 'FlowPilot is a productivity platform that helps teams organize projects, collaborate in real time, and automate repetitive workflows. It brings your tasks, conversations, and documents into one centralized workspace.',
  },
  {
    question: 'Can small teams use FlowPilot?',
    answer: 'Absolutely. FlowPilot is designed to scale from solo users and small teams to large organizations. Our free Starter plan supports up to 5 projects and includes all the core features you need to get started.',
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes! Our Starter plan is completely free and includes core project management features, basic analytics, and community support. You can upgrade anytime as your needs grow.',
  },
  {
    question: 'Can I change my subscription?',
    answer: 'You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle. No long-term contracts or cancellation fees.',
  },
  {
    question: 'Does FlowPilot support remote teams?',
    answer: 'FlowPilot is built for distributed and remote teams. Real-time collaboration, activity feeds, and instant notifications ensure everyone stays aligned regardless of timezone or location.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We take security seriously. FlowPilot uses industry-standard encryption, regular backups, and SOC 2 compliant infrastructure. Enterprise plans include SSO, SAML, and audit logging for additional control.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-subtitle">
            Everything you need to know about FlowPilot. Can't find what you're looking for? Reach out to our team.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown size={20} className="faq-chevron" />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
