import { Layers, UserPlus, Rocket } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: Layers,
    title: 'Create your workspace',
    description: 'Set up your workspace in seconds. Choose a template or start from scratch — FlowPilot adapts to the way you work.',
  },
  {
    number: '02',
    icon: UserPlus,
    title: 'Bring your team together',
    description: 'Invite teammates, assign roles, and start collaborating. Everyone gets the context they need from day one.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Track progress and deliver',
    description: 'Monitor tasks, hit milestones, and ship projects on time with dashboards built for clarity.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How it works</span>
          <h2 className="section-title">Get started in three steps</h2>
          <p className="section-subtitle">
            No steep learning curve. FlowPilot is designed to get your team up and running in minutes.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                <step.icon size={28} />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector" aria-hidden="true"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
