export default function WorkExperience() {
  const experiences = [
    {
      company: 'Biagio Scaglia Dev',
      role: 'Freelance Web & Mobile Developer',
      type: 'Autonomo',
      period: 'Maggio 2026 – Presente',
      location: 'Bari, Puglia, Italia (In sede)',
      accomplishments: [
        'Sviluppo di applicazioni web e mobile trasformando idee in prodotti digitali completi e intuitivi.',
        'Lato mobile: utilizzo di Flutter per creare app performanti e coerenti su Android.',
        'Lato web: realizzazione di soluzioni moderne e scalabili con tecnologie front-end e back-end.',
        'Focalizzazione su user experience (UX), pulizia del codice, prestazioni e rilascio end-to-end.'
      ],
      link: {
        text: 'Vellum su Google Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.biagioscaglia.vellum'
      },
      tags: ['Flutter', 'Android', 'Web Dev', 'UX/UI', 'Mobile'],
      color: '#3182ce',
      icon: 'fa-laptop-code'
    },
    {
      company: 'Prisma Srl',
      role: 'Full Stack Developer (.NET / React)',
      type: 'Tempo pieno',
      period: 'Febbraio 2026 – Presente',
      location: 'Lecce, Puglia, Italia (Ibrido)',
      accomplishments: [
        'Sviluppo di applicazioni web moderne e scalabili utilizzando .NET per il backend e React per il frontend.',
        'Progettazione e implementazione di funzionalità robuste, integrazione di API REST e gestione database SQL Server.',
        'Ottimizzazione delle prestazioni dell\'applicazione e scrittura di codice pulito, testabile e manutenibile.'
      ],
      tags: ['.NET', 'C#', 'React', 'REST API', 'SQL Server', 'Full Stack'],
      color: '#38a169',
      icon: 'fa-code-branch'
    },
    {
      company: 'Pokémon Go - Raid Italia',
      role: 'Telegram Bot Developer',
      type: 'Collaborazione',
      period: 'Aprile 2026 – Giugno 2026',
      location: 'Da remoto',
      accomplishments: [
        'Sviluppo e ottimizzazione di un bot Telegram avanzato per la gestione automatizzata di offerte e prodotti affiliati.',
        'Categorizzazione dinamica dei contenuti e implementazione dell\'inoltro automatico multi-canale.',
        'Integrazione di link di affiliazione e pulsanti di navigazione interattivi inline.'
      ],
      tags: ['Node.js', 'JavaScript', 'Telegram Bot API', 'Automation'],
      color: '#0088cc',
      icon: 'fa-robot'
    },
    {
      company: 'Yumeverse Games',
      role: 'Sviluppatore Web (Frontend Developer)',
      type: 'Collaborazione',
      period: 'Dicembre 2025 – Giugno 2026',
      location: 'Da remoto',
      accomplishments: [
        'Progettazione e sviluppo di landing page moderne e altamente performanti con Astro e JavaScript vanilla.',
        'Implementazione di componenti interattivi e ottimizzazione SEO per uno studio indipendente di videogiochi.'
      ],
      tags: ['Astro', 'HTML/CSS', 'JavaScript', 'Responsive Design', 'SEO'],
      color: '#e53e3e',
      icon: 'fa-gamepad'
    },
    {
      company: 'sgamapp',
      role: 'Sviluppatore Applicazioni Mobili',
      type: 'Tempo pieno',
      period: 'Settembre 2025 – Febbraio 2026',
      location: 'Bari, Puglia, Italia (Ibrido)',
      accomplishments: [
        'Sviluppo di sgamapp, una web app e un\'app mobile per la manifestazione JOB&Orienta di Verona.',
        'Contributo alla riduzione del digital gap ed incremento dell\'autonomia degli utenti fragili attraverso soluzioni dedicate.'
      ],
      tags: ['React Native', 'Mobile Development', 'Accessibility', 'Web App'],
      color: '#805ad5',
      icon: 'fa-mobile-alt'
    },
    {
      company: 'PASSBARI',
      role: 'Sviluppatore di Software',
      type: 'Collaborazione',
      period: '01/08/2025 – 31/08/2025',
      location: 'Modugno (BA), Italia',
      accomplishments: [
        'Sviluppo e ottimizzazione di applicazioni web e mobile proprietarie.',
        'Manutenzione, refactoring e integrazione di nuove tecnologie all\'interno del codebase esistente.'
      ],
      tags: ['Software Engineering', 'Refactoring', 'Bug Fixing', 'Git'],
      color: '#dd6b20',
      icon: 'fa-cogs'
    },
    {
      company: 'Consorzio Artemide',
      role: 'Consulente AI',
      type: 'Collaborazione',
      period: '03/06/2024 – 03/12/2024',
      location: 'Bari, Italia',
      accomplishments: [
        'Creazione e implementazione di strategie di marketing digitale supportate dall\'intelligenza artificiale.',
        'Guida e motivazione del team di marketing e garanzia della coerenza del brand.'
      ],
      tags: ['Artificial Intelligence', 'Digital Marketing', 'Team Leadership', 'AI Prompting'],
      color: '#319795',
      icon: 'fa-brain'
    },
    {
      company: 'Freelance',
      role: 'Esperto di Contenuti Digitali',
      type: 'Collaborazione',
      period: 'Giugno 2018 – Presente',
      location: 'Modugno (BA), Italia',
      accomplishments: [
        'Gestione collaborativa della pagina Instagram @italian_sonic_fanpage.',
        'Collaborazione ufficiale con brand importanti come Plaion e DeAgostini per il marketing dei videogiochi.',
        'Creazione di contenuti esclusivi ed ottimizzazione dell\'engagement della community.'
      ],
      tags: ['Content Creation', 'Social Media', 'Community Management', 'Brand Collaboration'],
      color: '#d69e2e',
      icon: 'fa-hashtag'
    }
  ]

  return (
    <div style={{ padding: '15px', fontFamily: 'Segoe UI, Tahoma, sans-serif', position: 'relative' }}>
      <h3 style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#2b6cb0', borderBottom: '1px solid #edf2f7', paddingBottom: '6px' }}>
        <i className="fas fa-briefcase" style={{ marginRight: '6px' }}></i> Esperienze Professionali
      </h3>

      <div style={{
        position: 'absolute',
        left: '29px',
        top: '60px',
        bottom: '30px',
        width: '2px',
        background: 'linear-gradient(to bottom, #bee3f8 0%, #edf2f7 100%)',
        zIndex: 1
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 2 }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#fff',
              border: `3px solid ${exp.color}`,
              boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: exp.color,
              fontSize: '12px',
              flexShrink: 0
            }}>
              <i className={`fas ${exp.icon}`}></i>
            </div>

            <div style={{
              flex: 1,
              background: '#fff',
              border: '1px solid #cbd5e0',
              borderRadius: '8px',
              padding: '15px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: '#1a365d' }}>
                    {exp.company}
                  </h4>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#2d3748', marginTop: '2px' }}>
                    {exp.role}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    color: exp.color,
                    background: `${exp.color}15`,
                    border: `1px solid ${exp.color}40`,
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <div style={{ fontSize: '11px', color: '#718096', marginBottom: '10px' }}>
                <i className="far fa-calendar-alt" style={{ marginRight: '4px' }}></i> {exp.period}
                <span style={{ margin: '0 8px', color: '#cbd5e0' }}>|</span>
                <i className="fas fa-map-marker-alt" style={{ marginRight: '4px' }}></i> {exp.location}
              </div>

              <ul style={{ margin: '0 0 12px 0', paddingLeft: '15px', fontSize: '12px', lineHeight: '1.6', color: '#4a5568', listStyleType: 'none' }}>
                {exp.accomplishments.map((acc, aIndex) => (
                  <li key={aIndex} style={{ position: 'relative', marginBottom: '6px', paddingLeft: '12px' }}>
                    <span style={{ position: 'absolute', left: 0, color: exp.color }}>•</span>
                    {acc}
                  </li>
                ))}
              </ul>

              {exp.link && (
                <div style={{ marginBottom: '12px', fontSize: '12px' }}>
                  <i className="fas fa-external-link-alt" style={{ color: exp.color, marginRight: '6px' }}></i>
                  <a href={exp.link.url} target="_blank" rel="noopener noreferrer" style={{
                    color: '#2b6cb0',
                    fontWeight: 'bold',
                    textDecoration: 'none'
                  }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>
                    {exp.link.text}
                  </a>
                </div>
              )}

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                borderTop: '1px solid #edf2f7',
                paddingTop: '10px'
              }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '10px',
                      background: '#f7fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '4px',
                      padding: '2px 6px',
                      color: '#4a5568',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
