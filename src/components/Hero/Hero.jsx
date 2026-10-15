import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../Button/Button'
import DashboardPreview from '../DashboardPreview/DashboardPreview'
import './Hero.css'

export default function Hero({ onStartTrial }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <a href="#features" className="hero-badge">
            <Sparkles size={14} />
            <span>Introducing FlowPilot 2.0</span>
            <ArrowRight size={14} />
          </a>

          <h1 className="hero-title">Your work, finally<br />in one flow.</h1>

          <p className="hero-description">
            FlowPilot helps teams organize projects, collaborate in real time,
            and automate repetitive work — so you can focus on what truly matters.
          </p>

          <div className="hero-actions">
            <Button variant="primary" size="lg" onClick={onStartTrial}>
              Start Free Trial <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => {
              document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Explore Features
            </Button>
          </div>

          <p className="hero-trust">Built for teams that want to do their best work.</p>
        </div>

        <div className="hero-visual">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
