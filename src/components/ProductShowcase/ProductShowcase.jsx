import { Check, ArrowUpRight, MessageSquare, CheckCircle, Clock, FileEdit } from 'lucide-react'
import './ProductShowcase.css'

export default function ProductShowcase() {
  const activities = [
    { initials: 'AK', name: 'Anna Kim', action: 'completed', target: 'Design review for homepage', time: '2 min ago', icon: CheckCircle, color: '#22C55E' },
    { initials: 'SM', name: 'Sam Miller', action: 'commented on', target: 'API documentation', time: '8 min ago', icon: MessageSquare, color: '#315CF5' },
    { initials: 'JD', name: 'Jess Davis', action: 'updated', target: 'Sprint planning board', time: '15 min ago', icon: FileEdit, color: '#8B5CF6' },
    { initials: 'RP', name: 'Raj Patel', action: 'scheduled', target: 'Team standup for Friday', time: '32 min ago', icon: Clock, color: '#F59E0B' },
  ]

  const projects = [
    { name: 'Website Redesign', progress: 85, tasks: '34/40', color: '#22C55E' },
    { name: 'Mobile App v2', progress: 62, tasks: '18/29', color: '#315CF5' },
    { name: 'Analytics Dashboard', progress: 40, tasks: '12/30', color: '#8B5CF6' },
    { name: 'Marketing Campaign', progress: 91, tasks: '22/24', color: '#F59E0B' },
  ]

  return (
    <section id="showcase" className="showcase section">
      <div className="container">
        {/* Showcase A */}
        <div className="showcase-block">
          <div className="showcase-content">
            <span className="section-label">Dashboard</span>
            <h2 className="section-title">See the whole picture.</h2>
            <p className="section-subtitle">
              Get a centralized view of every project, deadline, and milestone. FlowPilot's dashboard gives you the clarity to make informed decisions.
            </p>
            <ul className="showcase-benefits">
              <li><Check size={18} /> <span>Real-time progress across all projects</span></li>
              <li><Check size={18} /> <span>Spot bottlenecks before they slow you down</span></li>
              <li><Check size={18} /> <span>Customizable views for every workflow</span></li>
            </ul>
          </div>
          <div className="showcase-visual">
            <div className="showcase-card project-tracker">
              <div className="tracker-header">
                <h4>Project Tracker</h4>
                <span className="tracker-badge">Live</span>
              </div>
              <div className="tracker-list">
                {projects.map((project) => (
                  <div key={project.name} className="tracker-item">
                    <div className="tracker-item-info">
                      <div className="tracker-dot" style={{ background: project.color }}></div>
                      <span className="tracker-name">{project.name}</span>
                      <span className="tracker-tasks">{project.tasks}</span>
                    </div>
                    <div className="tracker-bar">
                      <div className="tracker-bar-fill" style={{ width: `${project.progress}%`, background: project.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Showcase B */}
        <div className="showcase-block showcase-reverse">
          <div className="showcase-content">
            <span className="section-label">Collaboration</span>
            <h2 className="section-title">Make teamwork feel effortless.</h2>
            <p className="section-subtitle">
              Shared tasks, comments, and live updates keep everyone aligned. No more chasing status updates or switching between tools.
            </p>
            <ul className="showcase-benefits">
              <li><Check size={18} /> <span>Comment threads on any task or document</span></li>
              <li><Check size={18} /> <span>Real-time activity feed for full visibility</span></li>
              <li><Check size={18} /> <span>Instant notifications to stay in the loop</span></li>
            </ul>
          </div>
          <div className="showcase-visual">
            <div className="showcase-card activity-feed">
              <div className="feed-header">
                <h4>Activity Feed</h4>
                <a href="#" className="feed-link" onClick={(e) => e.preventDefault()}>View all <ArrowUpRight size={14} /></a>
              </div>
              <div className="feed-list">
                {activities.map((activity, i) => (
                  <div key={i} className="feed-item">
                    <div className="feed-avatar" style={{ background: `${activity.color}15`, color: activity.color }}>
                      {activity.initials}
                    </div>
                    <div className="feed-item-content">
                      <p>
                        <strong>{activity.name}</strong> {activity.action} <span className="feed-target">{activity.target}</span>
                      </p>
                      <span className="feed-time">{activity.time}</span>
                    </div>
                    <div className="feed-icon" style={{ color: activity.color }}>
                      <activity.icon size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
