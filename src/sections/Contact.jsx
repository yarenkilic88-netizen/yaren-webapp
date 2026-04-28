import { Container } from '../shared/ui/Container.jsx'
import { SectionTitle } from '../shared/ui/SectionTitle.jsx'
import { ContactForm } from '../features/contactForm/ContactForm.jsx'

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-zinc-950">
      <Container className="py-16 sm:py-24">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s talk"
          description="For now, this form validates on the frontend. When you’re ready, we can connect it to Formspree / Netlify Forms / Getform."
        />
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

