import { Container } from '../shared/ui/Container.jsx'
import { SectionTitle } from '../shared/ui/SectionTitle.jsx'
import { ContactForm } from '../features/contactForm/ContactForm.jsx'
import { site } from '../site/personal.js'

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-zinc-950">
      <Container className="py-16 sm:py-24">
        <SectionTitle
          eyebrow="Contact"
          title="Professional inquiries"
          description={`For internship opportunities, academic collaboration, or technical questions, you may use the form below or write directly to ${site.email}. The form currently performs client-side validation only; backend delivery can be connected when required. GitHub: @${site.handle}.`}
        />
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

