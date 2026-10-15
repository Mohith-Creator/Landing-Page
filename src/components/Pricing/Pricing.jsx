import { useState } from 'react'
import { Check } from 'lucide-react'
import Button from '../Button/Button'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    description: 'For individuals and small experiments.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: 'Get Started Free',
    variant: 'secondary',
    features: [
      'Up to 5 projects',
      '1 GB storage',
      'Basic analytics',
      'Community support',
      'Core integrations',
    ],
  },
  {
    name: 'Professional',
    description: 'For growing teams that need more power.',
    monthlyPrice: 19,
    yearlyPrice: 15,
    cta: 'Start Free Trial',
    variant: 'primary',
    popular: true,
    features: [
      'Unlimited projects',
      '50 GB storage',
      'Advanced analytics',
      'Priority support',
      'Workflow automation',
      'Custom fields',
      'Team permissions',
    ],
  },
  {
    name: 'Team',
    description: 'For organizations that need full control.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    cta: 'Start Free Trial',
    variant: 'outline-primary',
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'Admin controls',
      'SSO & SAML',
      'Custom workflows',
      'Audit log',
      'Dedicated support',
      'API access',
    ],
  },
]

export default function Pricing({ onStartTrial }) {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-subtitle">
            Start for free and scale as your team grows. No hidden fees.
          </p>
          <p className="pricing-demo-note">All prices shown are illustrative demo pricing.</p>
        </div>

        <div className="pricing-toggle">
          <span className={!annual ? 'toggle-active' : ''}>Monthly</span>
          <button
            className={`toggle-switch ${annual ? 'toggle-on' : ''}`}
            onClick={() => setAnnual(!annual)}
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
          >
            <div className="toggle-knob"></div>
          </button>
          <span className={annual ? 'toggle-active' : ''}>
            Yearly <span className="toggle-save">Save 20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.popular ? 'pricing-popular' : ''}`}>
              {plan.popular && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">{plan.name}</h3>
                <p className="pricing-plan-desc">{plan.description}</p>
                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{annual ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="pricing-period">/month</span>
                </div>
                {annual && plan.yearlyPrice > 0 && (
                  <p className="pricing-billed">Billed annually</p>
                )}
              </div>
              <Button
                variant={plan.variant}
                size="md"
                className="pricing-cta"
                onClick={onStartTrial}
              >
                {plan.cta}
              </Button>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
