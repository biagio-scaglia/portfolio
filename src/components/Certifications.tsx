export default function Certifications() {
  const certifications = [
    { 
      name: 'Pre Security (SEC0) Certificate', 
      issuer: 'TryHackMe', 
      date: 'Apr 2026 – Apr 2029',
      credentialId: '69cea1adeb170aea55e91ffd',
      icon: 'fa-shield-alt',
      color: '#ff2f2f',
      verifyUrl: 'https://tryhackme.com/certificate/69cea1adeb170aea55e91ffd'
    },
    { 
      name: 'Pre Security Certificate', 
      issuer: 'TryHackMe', 
      date: 'Apr 2026 – Apr 2029',
      credentialId: 'THM-E8TJBPYZM8',
      icon: 'fa-user-shield',
      color: '#ff2f2f',
      verifyUrl: 'https://tryhackme.com/certificate/THM-E8TJBPYZM8'
    },
    { 
      name: 'Cybersecurity Essential', 
      issuer: 'Cisco Networking Academy', 
      date: '06/01/2022',
      icon: 'fa-lock',
      color: '#005073'
    },
    { 
      name: 'Web Development Professional Certification', 
      issuer: 'Institute of Management, Technology & Finance', 
      date: '06/02/2024',
      icon: 'fa-laptop-code',
      color: '#2b6cb0'
    },
    { 
      name: 'Python Development Professional Certification', 
      issuer: 'Institute of Management, Technology & Finance', 
      date: '30/01/2024',
      icon: 'fa-terminal',
      color: '#ffd43b'
    },
    { 
      name: 'Wordpress Development', 
      issuer: 'Programming Hub', 
      date: '18/12/2023',
      icon: 'fa-wordpress',
      color: '#21759b',
      isBrand: true
    },
    { 
      name: 'Search Engine Optimization (SEO)', 
      issuer: 'Programming Hub', 
      date: '23/11/2023',
      icon: 'fa-search-dollar',
      color: '#38a169'
    },
    { 
      name: 'JavaScript Programming', 
      issuer: 'Programming Hub', 
      date: '26/11/2023',
      icon: 'fa-js-square',
      color: '#f7df1e',
      isBrand: true
    },
    { 
      name: 'HTML5 Development', 
      issuer: 'Programming Hub', 
      date: '21/11/2023',
      icon: 'fa-html5',
      color: '#e34f26',
      isBrand: true
    },
    { 
      name: 'CSS3 Styling', 
      issuer: 'Programming Hub', 
      date: '21/11/2023',
      icon: 'fa-css3-alt',
      color: '#1572b6',
      isBrand: true
    },
  ]

  return (
    <div style={{ padding: '15px', fontFamily: 'Segoe UI, Tahoma, sans-serif', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Intestazione */}
      <h3 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#2b6cb0', borderBottom: '1px solid #edf2f7', paddingBottom: '6px' }}>
        <i className="fas fa-award" style={{ marginRight: '6px' }}></i> Certificazioni Professionali
      </h3>

      {/* Griglia Certificazioni */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '15px' }}>
        {certifications.map((cert, index) => (
          <div key={index} style={{
            background: '#fff',
            border: '1px solid #cbd5e0',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
            transition: 'transform 0.15s ease',
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            
            {/* Badge Icona */}
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              background: `${cert.color}15`,
              border: `1px solid ${cert.color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: cert.color,
              fontSize: '16px',
              flexShrink: 0
            }}>
              <i className={cert.isBrand ? `fab ${cert.icon}` : `fas ${cert.icon}`}></i>
            </div>

            {/* Dettagli */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 'bold', color: '#2d3748', lineHeight: '1.4' }}>
                {cert.name}
              </h4>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#718096' }}>
                {cert.issuer}
              </span>
              <span style={{ fontSize: '11px', color: '#a0aec0' }}>
                {cert.date}
              </span>
              {cert.credentialId && (
                <div style={{ fontSize: '10px', color: '#4a5568', marginTop: '4px', background: '#f7fafc', padding: '2px 6px', borderRadius: '4px', border: '1px solid #e2e8f0', width: 'fit-content' }}>
                  ID: <code style={{ fontSize: '10px', color: '#e53e3e' }}>{cert.credentialId}</code>
                </div>
              )}
              {cert.verifyUrl && (
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" style={{
                  marginTop: '8px',
                  padding: '3px 8px',
                  background: '#3182ce',
                  border: '1px solid #3182ce',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'inline-block',
                  width: 'fit-content'
                }} onMouseEnter={(e) => e.currentTarget.style.background = '#2b6cb0'} onMouseLeave={(e) => e.currentTarget.style.background = '#3182ce'}>
                  Verifica Licenza
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Riquadro Patente di Guida */}
      <div style={{
        background: 'linear-gradient(to right, #edf2f7 0%, #f7fafc 100%)',
        border: '1px solid #cbd5e0',
        borderRadius: '8px',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#ebf8ff',
          border: '1px solid #bee3f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3182ce',
          fontSize: '18px',
          flexShrink: 0
        }}>
          <i className="fas fa-id-card"></i>
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 'bold', color: '#2d3748' }}>Abilitazioni e Patenti</h4>
          <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#4a5568' }}>
            <i className="fas fa-car" style={{ marginRight: '6px', color: '#718096' }}></i>
            <strong>Patente di guida:</strong> Categoria B (Validità: 19/02/2024 – 19/11/2034)
          </p>
        </div>
      </div>

    </div>
  )
}
