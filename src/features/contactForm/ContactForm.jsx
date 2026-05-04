import { useMemo, useState } from 'react'
import { Button } from '../../shared/ui/Button.jsx'
import { site } from '../../site/personal.js'

const initial = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  if (!values.message.trim()) errors.message = 'Please write a message.'
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const [sent, setSent] = useState(false)
  const errors = useMemo(() => validate(values), [values])
  const hasErrors = Object.keys(errors).length > 0

  function onChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setSubmitted(false)
    setSent(false)
  }

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    if (hasErrors) return

    // Frontend-only: replace with Formspree/Getform/Netlify Forms later.
    setValues(initial)
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-4">
      {sent ? (
        <div
          className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100 ring-1 ring-emerald-500/25"
          role="status"
        >
          Thank you. Your message passed client-side validation. To deliver
          submissions to an inbox, connect a form backend (for example Formspree
          or a serverless endpoint) in{' '}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
            ContactForm.jsx
          </code>
          .
        </div>
      ) : null}

      <div className="grid gap-2">
        <label className="text-sm font-medium text-white/80" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={onChange}
          className="h-11 w-full rounded-xl bg-white/5 px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
          placeholder="Your name"
          autoComplete="name"
        />
        {submitted && errors.name ? (
          <p className="text-xs text-rose-300">{errors.name}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-white/80" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={onChange}
          className="h-11 w-full rounded-xl bg-white/5 px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
          placeholder="you@example.com"
          autoComplete="email"
          inputMode="email"
        />
        {submitted && errors.email ? (
          <p className="text-xs text-rose-300">{errors.email}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-white/80" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={onChange}
          rows={5}
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
          placeholder="Brief context, timeline, and how I can help."
        />
        {submitted && errors.message ? (
          <p className="text-xs text-rose-300">{errors.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:gap-3">
        <Button type="submit" disabled={submitted && hasErrors}>
          Send message
        </Button>
        <p className="text-xs text-white/50">
          {site.email ? (
            <>
              Or email me at{' '}
              <a
                className="text-violet-300 underline decoration-violet-500/40 underline-offset-2 hover:text-violet-200"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              .
            </>
          ) : (
            <>Prefer GitHub? Message me via my profile — @{site.handle}.</>
          )}
        </p>
      </div>
    </form>
  )
}

