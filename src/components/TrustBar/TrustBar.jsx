import './TrustBar.css'

export default function TrustBar() {
  const companies = ['Meridian', 'Vantage', 'Clearpath', 'NovaBridge', 'Skyland']

  return (
    <section className="trust-bar">
      <div className="container">
        <p className="trust-heading">Helping modern teams work better</p>
        <div className="trust-logos">
          {companies.map((company) => (
            <div key={company} className="trust-logo">
              <span>{company}</span>
            </div>
          ))}
        </div>
        <p className="trust-note">Trusted by 2,000+ teams worldwide*</p>
        <p className="trust-disclaimer">*Illustrative figure for demo purposes</p>
      </div>
    </section>
  )
}
