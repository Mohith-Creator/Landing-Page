import { LayoutDashboard, FolderKanban, CheckSquare, Calendar, MessageSquare, Settings, Check, Circle, BarChart3 } from 'lucide-react'
import './DashboardPreview.css'

export default function DashboardPreview() {
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: FolderKanban, label: 'Projects' },
    { icon: CheckSquare, label: 'Tasks' },
    { icon: Calendar, label: 'Calendar' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Settings, label: 'Settings' },
  ]

  const stats = [
    { label: 'Tasks Done', value: '24/36', color: '#22C55E' },
    { label: 'Active Projects', value: '8', color: '#315CF5' },
    { label: 'Team Members', value: '12', color: '#8B5CF6' },
  ]

  const tasks = [
    { title: 'Design system updates', status: 'done', assignee: 'AK' },
    { title: 'API integration review', status: 'progress', assignee: 'SM' },
    { title: 'User research report', status: 'progress', assignee: 'JD' },
    { title: 'Sprint planning notes', status: 'todo', assignee: 'RP' },
  ]

  const projects = [
    { name: 'Website Redesign', progress: 85 },
    { name: 'Mobile App v2', progress: 62 },
    { name: 'Analytics Dashboard', progress: 40 },
  ]

  return (
    <div className="dash-preview">
      <div className="dash-sidebar">
        <div className="dash-sidebar-logo">
          <div className="dash-logo-dot"></div>
          <span>FlowPilot</span>
        </div>
        <nav className="dash-sidebar-nav">
          {sidebarItems.map((item) => (
            <div key={item.label} className={`dash-nav-item ${item.active ? 'active' : ''}`}>
              <item.icon size={16} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="dash-main">
        <div className="dash-topbar">
          <div>
            <h3>Project Overview</h3>
            <span className="dash-date">Oct 14, 2026</span>
          </div>
        </div>

        <div className="dash-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="dash-stat-card">
              <span className="dash-stat-value" style={{ color: stat.color }}>{stat.value}</span>
              <span className="dash-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="dash-content-grid">
          <div className="dash-tasks">
            <h4>Recent Tasks</h4>
            <div className="dash-task-list">
              {tasks.map((task) => (
                <div key={task.title} className="dash-task-item">
                  <div className={`dash-task-status ${task.status}`}>
                    {task.status === 'done' ? <Check size={10} /> : <Circle size={8} />}
                  </div>
                  <span className="dash-task-title">{task.title}</span>
                  <div className="dash-task-assignee">{task.assignee}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-chart">
            <h4>Progress</h4>
            <div className="dash-chart-bars">
              {projects.map((project) => (
                <div key={project.name} className="dash-bar-item">
                  <div className="dash-bar-header">
                    <span>{project.name}</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="dash-bar-track">
                    <div className="dash-bar-fill" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
