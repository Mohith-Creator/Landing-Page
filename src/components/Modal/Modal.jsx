import { useState, useEffect, useRef } from 'react'
import { X, Mail, ArrowRight, CheckCircle } from 'lucide-react'
import Button from '../Button/Button'
import './Modal.css'

export default function Modal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setEmail('')
      setError('')
      setSubmitted(false)
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
      return () => window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setError('Email address is required.')
      return
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" ref={modalRef} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <CheckCircle size={48} />
            </div>
            <h2 id="modal-title">You're all set!</h2>
            <p>We've sent a confirmation link to <strong>{email}</strong>. Check your inbox to get started with FlowPilot.</p>
            <Button variant="primary" size="lg" onClick={onClose}>Done</Button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-icon">
                <Mail size={24} />
              </div>
              <h2 id="modal-title">Start your free trial</h2>
              <p>No credit card required. Get started in under a minute.</p>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="trial-email">Work email</label>
                <input
                  ref={inputRef}
                  id="trial-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  className={error ? 'input-error' : ''}
                  aria-describedby={error ? 'email-error' : undefined}
                  aria-invalid={!!error}
                />
                {error && <span id="email-error" className="form-error" role="alert">{error}</span>}
              </div>
              <Button type="submit" variant="primary" size="lg" className="modal-submit">
                Get Started <ArrowRight size={18} />
              </Button>
              <p className="modal-terms">By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
