'use client'

import { useState } from 'react'

interface ContactFormData {
  name: string
  phone: string
  email: string
  serviceType: string
  message: string
}

type FieldErrors = Partial<Record<keyof ContactFormData, string>>

const INITIAL_FORM: ContactFormData = {
  name: '',
  phone: '',
  email: '',
  serviceType: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [submittedName, setSubmittedName] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [generalError, setGeneralError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name as keyof ContactFormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault()
    setLoading(true)
    setFieldErrors({})
    setGeneralError(null)

    try {
      const response = await fetch(
        'https://nuvisa-backend.hola-1c9.workers.dev/page-contacts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        const body = await response.json().catch(() => null)

        if (body?.details && Array.isArray(body.details)) {
          const errors: FieldErrors = {}
          for (const detail of body.details) {
            if (detail.field && detail.message) {
              errors[detail.field as keyof ContactFormData] = detail.message
            }
          }
          setFieldErrors(errors)
        } else {
          setGeneralError('No pudimos enviar tu mensaje. Por favor intenta nuevamente.')
        }
        return
      }

      const body = await response.json().catch(() => null)
      setSubmittedName(body?.name ?? formData.name)
      setFormData(INITIAL_FORM)
    } catch {
      setGeneralError('No pudimos enviar tu mensaje. Por favor intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contacto" id="contacto">
      <div className="section-header reveal">
        <span className="section-tag">Contacto</span>
        <h2>Hablemos de tu próximo almuerzo</h2>
        <p>
          Cuéntanos qué necesitas y te preparamos una propuesta a la medida.
        </p>
      </div>
      <div className="contacto-wrapper">
        <div className="contacto-info reveal">
          <h3>Información de contacto</h3>
          <p>
            Estamos listos para atenderte. Escríbenos o llámanos y responderemos
            lo antes posible.
          </p>
          <div className="contacto-item">
            <div className="contacto-item-icon">📍</div>
            <div className="contacto-item-text">
              <strong>Ubicación</strong>
              <span>Iquique, Chile</span>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-icon">📞</div>
            <div className="contacto-item-text">
              <strong>Teléfono</strong>
              <span>+56 9 5094 5142</span>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-icon">✉️</div>
            <div className="contacto-item-text">
              <strong>Email</strong>
              <span>contacto@nuvisafood.cl</span>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-icon">🕐</div>
            <div className="contacto-item-text">
              <strong>Horario</strong>
              <span>Lunes a Sábado · 7:00 - 17:00</span>
            </div>
          </div>
        </div>

        {submittedName !== null ? (
          <div className="contacto-form contacto-success">
            <h3>¡Mensaje enviado!</h3>
            <p>
              Gracias, <strong>{submittedName}</strong>. Recibimos tu solicitud
              y te responderemos a la brevedad.
            </p>
            <button className="form-submit" onClick={() => setSubmittedName(null)}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form className="contacto-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldErrors.name ? 'field--error' : ''}
                />
                {fieldErrors.name && (
                  <span className="form-field-error">{fieldErrors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+56 9 ..."
                  value={formData.phone}
                  onChange={handleChange}
                  className={fieldErrors.phone ? 'field--error' : ''}
                />
                {fieldErrors.phone && (
                  <span className="form-field-error">{fieldErrors.phone}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={fieldErrors.email ? 'field--error' : ''}
              />
              {fieldErrors.email && (
                <span className="form-field-error">{fieldErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">Tipo de servicio</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className={fieldErrors.serviceType ? 'field--error' : ''}
              >
                <option value="">Selecciona una opción</option>
                <option value="Almuerzos corporativos">Almuerzos corporativos</option>
                <option value="Catering para eventos">Catering para eventos</option>
                <option value="Delivery personal">Delivery personal</option>
                <option value="Otro">Otro</option>
              </select>
              {fieldErrors.serviceType && (
                <span className="form-field-error">{fieldErrors.serviceType}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntanos qué necesitas: cantidad de personas, frecuencia, preferencias alimentarias..."
                value={formData.message}
                onChange={handleChange}
                className={fieldErrors.message ? 'field--error' : ''}
              />
              {fieldErrors.message && (
                <span className="form-field-error">{fieldErrors.message}</span>
              )}
            </div>

            {generalError && (
              <p className="form-error">{generalError}</p>
            )}

            <button className="form-submit" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar solicitud →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
