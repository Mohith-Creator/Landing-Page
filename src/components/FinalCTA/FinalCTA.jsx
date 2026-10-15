import { ArrowRight } from 'lucide-react'
import Button from '../Button/Button'
import './FinalCTA.css'

export default function FinalCTA({ onStartTrial }) {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-card">
          <h2 className="cta-title">Ready to bring your work into focus?</h2>
          <p className="cta-description">
            Join thousands of teams who use FlowPilot to plan, collaborate, and deliver their best work. Start your free trial today.
          </p>
          <Button variant="primary" size="lg" onClick={onStartTrial}>
            Start Free Trial <ArrowRight size={18} />
          </Button>
          <p className="cta-note">Free 14-day trial · No credit card required</p>
        </div>
      </div>
    </section>
  )
}
