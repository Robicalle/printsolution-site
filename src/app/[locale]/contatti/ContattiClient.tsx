"use client";
import { useLocale } from "next-intl";
import PageHero from "@/components/PageHero";
import { useState } from "react";

export default function ContattiClient() {
  const locale = useLocale();
  const [formData, setFormData] = useState({
    nome: "", azienda: "", email: "", telefono: "", messaggio: "", interesse: "generico", privacy: false, _hp_field: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nome: "", azienda: "", email: "", telefono: "", messaggio: "", interesse: "generico", privacy: false, _hp_field: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        title={locale === 'it' ? "Contatti" : "Contact Us"}
        subtitle={locale === 'it' ? "Richiedi informazioni, richiedi una consulenza gratuita o visita i nostri uffici a Sesto San Giovanni." : "Request information, request a free consultation or visit our offices in Sesto San Giovanni."}
        breadcrumb="Print Solution"
        imageSrc="/images/hero-contatti.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Scrivici' : 'Write to Us'}</h2>
              {status === "success" ? (
                <div className="card-modern p-8 text-center">
                  <span className="text-5xl block mb-4">✅</span>
                  <h3 className="text-xl font-bold text-dark-800 mb-2">{locale === 'it' ? 'Messaggio Inviato!' : 'Message Sent!'}</h3>
                  <p className="text-gray-500">
                    {locale === 'it' ? 'Grazie per averci contattato. Ti risponderemo il prima possibile.' : 'Thank you for contacting us. We will reply as soon as possible.'}
                  </p>
                  <button onClick={() => setStatus("idle")} className="btn-outline mt-6 text-sm">
                    {locale === 'it' ? 'Invia un altro messaggio' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot - hidden from humans */}
                  <div className="absolute opacity-0 -z-10" aria-hidden="true" tabIndex={-1}>
                    <input
                      type="text"
                      name="_hp_field"
                      value={formData._hp_field}
                      onChange={(e) => setFormData({ ...formData, _hp_field: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{locale === 'it' ? 'Nome e Cognome *' : 'Full Name *'}</label>
                      <input
                        type="text" required value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all text-sm"
                        placeholder={locale === 'it' ? "Mario Rossi" : "John Smith"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{locale === 'it' ? 'Azienda' : 'Company'}</label>
                      <input
                        type="text" value={formData.azienda}
                        onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all text-sm"
                        placeholder={locale === 'it' ? "La Mia Azienda S.r.l." : "My Company Ltd."}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all text-sm"
                        placeholder={locale === 'it' ? "mario@azienda.it" : "john@company.com"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{locale === 'it' ? 'Telefono' : 'Phone'}</label>
                      <input
                        type="tel" value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all text-sm"
                        placeholder="+39 02 1234567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{locale === 'it' ? 'Interesse' : 'Interest'}</label>
                    <select
                      value={formData.interesse}
                      onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all text-sm bg-white"
                    >
                      <option value="generico">{locale === 'it' ? 'Informazioni generali' : 'General information'}</option>
                      <option value="packaging">{locale === 'it' ? 'Soluzioni Packaging' : 'Packaging Solutions'}</option>
                      <option value="etichette">{locale === 'it' ? 'Stampanti Etichette' : 'Label Printers'}</option>
                      <option value="consumabili">{locale === 'it' ? 'Consumabili e Ricambi' : 'Consumables & Spare Parts'}</option>
                      <option value="demo">{locale === 'it' ? 'Consulenza gratuita' : 'Free consultation'}</option>
                      <option value="assistenza">{locale === 'it' ? 'Assistenza Tecnica' : 'Technical Support'}</option>
                      <option value="leasing">{locale === 'it' ? 'Leasing / Finanziamento' : 'Leasing / Financing'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{locale === 'it' ? 'Messaggio *' : 'Message *'}</label>
                    <textarea
                      required rows={5} value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all text-sm resize-none"
                      placeholder={locale === 'it' ? "Descrivi le tue esigenze..." : "Describe your requirements..."}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500/20"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-500">
                      {locale === 'it' ? (
                        <>
                          Ho letto e accetto la{" "}
                          <a href="/privacy" target="_blank" className="text-cyan-500 underline hover:text-cyan-400">
                            Privacy Policy
                          </a>{" "}
                          e acconsento al trattamento dei miei dati personali ai sensi del GDPR (Reg. UE 2016/679). *
                        </>
                      ) : (
                        <>
                          I have read and accept the{" "}
                          <a href="/privacy" target="_blank" className="text-cyan-500 underline hover:text-cyan-400">
                            Privacy Policy
                          </a>{" "}
                          and consent to the processing of my personal data under GDPR (EU Reg. 2016/679). *
                        </>
                      )}
                    </label>
                  </div>
                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl">
                      {locale === 'it' ? 'Si è verificato un errore. Riprova o scrivici a info@printsolution.it' : 'An error occurred. Please try again or email us at info@printsolution.it'}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full text-center disabled:opacity-60 min-h-[48px] text-base"
                  >
                    {status === "sending" ? (
                      <>{locale === 'it' ? 'Invio in corso...' : 'Sending...'}</>
                    ) : (
                      <>
                        {locale === 'it' ? 'Invia Messaggio' : 'Send Message'}
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'I Nostri Recapiti' : 'Our Contact Details'}</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                      ),
                      title: locale === 'it' ? "Sede" : "Office",
                      content: "Via Pisa 200, int. 23\n20099 Sesto San Giovanni (MI)",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                      ),
                      title: locale === 'it' ? "Telefono" : "Phone",
                      content: "+39 02 4943 9417",
                      href: "tel:+390249439417",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                      ),
                      title: "Email",
                      content: "info@printsolution.it",
                      href: "mailto:info@printsolution.it",
                    },
                  ].map((c) => (
                    <div key={c.title} className="flex items-start gap-4 bg-surface-50 rounded-xl p-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-dark-800 text-sm">{c.title}</p>
                        {c.href ? (
                          <a href={c.href} className="text-gray-500 text-sm hover:text-cyan-500 transition-colors">
                            {c.content}
                          </a>
                        ) : (
                          <p className="text-gray-500 text-sm whitespace-pre-line">{c.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Booking CTA */}
              <div className="card-modern p-6 bg-gradient-to-r from-cyan-500/5 to-magenta-500/5">
                <h3 className="text-lg font-bold text-dark-800 mb-2">{locale === 'it' ? '🎯 Consulenza gratuita' : '🎯 Free consultation'}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {locale === 'it' ? 'Vieni nella nostra sala demo a Sesto San Giovanni. Porta i tuoi materiali e testa le macchine dal vivo. Su appuntamento, gratuita.' : 'Visit our demo room in Sesto San Giovanni. Bring your materials and test the machines live. By appointment, free of charge.'}
                </p>
                <a href="tel:+390249439417" className="btn-primary text-sm !py-2.5">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  {locale === 'it' ? 'Chiama per Prenotare' : 'Call to Book'}
                </a>
              </div>

              {/* Google Maps */}
              <div>
                <h3 className="text-lg font-bold text-dark-800 mb-4">{locale === 'it' ? 'Dove Siamo' : 'Where We Are'}</h3>
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.1!2d9.2389!3d45.5336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c7c89dbfffff%3A0x0!2sVia+Pisa+200%2C+20099+Sesto+San+Giovanni+MI!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Print Solution — Via Pisa 200, Sesto San Giovanni"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  {locale === 'it' ? 'Via Pisa 200, int. 23 — 20099 Sesto San Giovanni (MI) — Parcheggio disponibile' : 'Via Pisa 200, int. 23 — 20099 Sesto San Giovanni (MI) — Parking available'}
                </p>
              </div>

              {/* Orari */}
              <div className="bg-surface-50 rounded-xl p-6">
                <h3 className="font-bold text-dark-800 mb-3">{locale === 'it' ? 'Orari' : 'Hours'}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">{locale === 'it' ? 'Lunedì — Venerdì' : 'Monday — Friday'}</span>
                    <span className="font-medium text-dark-800">9:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">{locale === 'it' ? 'Sabato — Domenica' : 'Saturday — Sunday'}</span>
                    <span className="text-gray-500">{locale === 'it' ? 'Chiuso' : 'Closed'}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">{locale === 'it' ? 'Demo su appuntamento' : 'Demos by appointment'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
