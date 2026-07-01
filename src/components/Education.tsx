export default function Education() {
  const educationList = [
    {
      institution: 'ITS Academy APULIA DIGITAL',
      degree: 'Diploma di Tecnico Superiore (EQF 5)',
      specialization: 'Sviluppo e analisi di software e applicazioni web/mobile',
      period: '11/2024 – Attuale',
      location: 'Bari, Italia',
      grade: 'In corso',
      gradeColor: '#3182ce',
      icon: 'fa-user-graduate'
    },
    {
      institution: 'Aldo Moro (BA) & partners',
      degree: 'Master Executive in UX/UI Design',
      specialization: 'Meridia Formazione, Talent Garden, Università degli Studi di Bari Aldo Moro',
      period: '11/2023 – 06/2024',
      location: 'Italia (Online & In sede)',
      grade: 'Voto: 30/30',
      gradeColor: '#38a169',
      icon: 'fa-laptop-code'
    },
    {
      institution: 'I.I.S.S. Tommaso Fiore',
      degree: 'Diploma di Scuola Superiore (EQF 4)',
      specialization: 'Amministrazione, Finanza e Marketing (Sistemi Informativi Aziendali)',
      period: '09/2018 – 06/2023',
      location: 'Modugno (BA), Italia',
      grade: 'Voto: 85/100',
      gradeColor: '#805ad5',
      icon: 'fa-school'
    }
  ]

  return (
    <div style={{ padding: '15px', fontFamily: 'Segoe UI, Tahoma, sans-serif', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h3 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#2b6cb0', borderBottom: '1px solid #edf2f7', paddingBottom: '6px' }}>
        <i className="fas fa-graduation-cap" style={{ marginRight: '6px' }}></i> Percorso di Studi & Formazione
      </h3>
      
      {educationList.map((edu, index) => (
        <div key={index} style={{
          background: '#fff',
          border: '1px solid #cbd5e0',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
          display: 'flex',
          gap: '15px',
          alignItems: 'flex-start'
        }}>
          {/* Icona laterale scolastica */}
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)',
            border: '1px solid #90cdf4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2b6cb0',
            fontSize: '18px',
            flexShrink: 0
          }}>
            <i className={`fas ${edu.icon}`}></i>
          </div>

          {/* Dettagli della formazione */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: '#1a365d' }}>
                {edu.institution}
              </h4>
              <span style={{
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#fff',
                background: edu.gradeColor,
                padding: '2px 8px',
                borderRadius: '4px',
                whiteSpace: 'nowrap'
              }}>
                {edu.grade}
              </span>
            </div>
            
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#2d3748' }}>
              {edu.degree}
            </div>
            
            <div style={{ fontSize: '12px', color: '#718096' }}>
              <i className="far fa-calendar-alt" style={{ marginRight: '4px' }}></i> {edu.period}
              <span style={{ margin: '0 8px', color: '#cbd5e0' }}>|</span>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '4px' }}></i> {edu.location}
            </div>

            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#4a5568', lineHeight: '1.5', background: '#f7fafc', padding: '8px 12px', borderRadius: '4px', borderLeft: '3px solid #cbd5e0' }}>
              {edu.specialization}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
