import { FolderKanban, Users, Zap, BarChart3, CalendarClock, Layout } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: FolderKanban,
    title: 'Project Management',
    description: 'Organize projects with boards, timelines, and deadlines that keep your team aligned and on track.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Keep discussions, updates, and shared files in one place so nothing gets lost.',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Reduce repetitive tasks with powerful automations that save your team hours every week.',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description: 'Track milestones, measure productivity, and make data-driven decisions with clear dashboards.',
  },
  {
    icon: CalendarClock,
    title: 'Smart Scheduling',
    description: 'Plan work, manage priorities, and stay ahead of deadlines with intelligent scheduling tools.',
  },
  {
    icon: Layout,
    title: 'Centralized Workspace',
    description: 'Keep documents, links, and essential information organized in one unified workspace.',
  },
]

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">Everything you need to stay on track</h2>
          <p className="section-subtitle">
            Powerful tools designed to simplify your workflow and help your team deliver great work, faster.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
