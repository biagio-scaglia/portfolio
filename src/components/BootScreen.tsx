import { useState, useEffect, useRef } from 'react'
import { Howl } from 'howler'
import bootupSound from '../assets/sound/bootup.mp3'
import bootBackground from '../assets/sfondo-avvio.jpeg'
import Windows7Spinner from './Windows7Spinner'
import userIcon from '../assets/icone/user.png'

interface BootScreenProps {
  onComplete: (userName: string) => void
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [bootStage, setBootStage] = useState<'cmd' | 'gui' | 'logon' | 'welcome'>('cmd')
  const [cmdLinesCount, setCmdLinesCount] = useState(0)
  const [progress, setProgress] = useState(0)
  const soundRef = useRef<Howl | null>(null)
  const [userName, setUserName] = useState('')

  const cmdLines = [
    'Starting Portfolio OS Boot Loader...',
    'Copyright (C) 2026 Biagio Scaglia. All Rights Reserved.',
    '',
    'Detecting hardware components...',
    'Processor: Intel Core i7-4770K @ 3.50GHz',
    'Memory: 16384 MB RAM (DDR3 Dual Channel) - PASS',
    'Storage: SSD SATA3 512GB - HEALTHY (100%)',
    'GPU: NVIDIA GeForce GTX 760 - Aero Mode Supported',
    '',
    'Loading virtual filesystem...',
    '[  OK  ] Loading PORTFOLIO.SYS',
    '[  OK  ] Starting WindowManager.exe',
    '[  OK  ] Launching Explorer7.exe',
    '[  OK  ] Initializing Audio Engine (Howler.js)',
    '[  OK  ] Loading system libraries: React.js, Vite',
    '[  OK  ] Mounting virtual directory C:\\Users\\biagio.scaglia',
    '',
    'Boot sequence completed. Redirecting to Logon GUI...'
  ]

  // Inizializza l'audio con Howler
  useEffect(() => {
    const sound = new Howl({
      src: [bootupSound],
      volume: 0.5,
      preload: true,
      html5: false,
    })
    soundRef.current = sound

    return () => {
      if (soundRef.current) {
        soundRef.current.stop()
        soundRef.current.unload()
      }
    }
  }, [])

  // Fase 1: Simulazione Stampa Righe CMD Terminale
  useEffect(() => {
    if (bootStage !== 'cmd') return

    const lineInterval = setInterval(() => {
      setCmdLinesCount((prev) => {
        const next = prev + 1
        if (next >= cmdLines.length) {
          clearInterval(lineInterval)
          setTimeout(() => {
            setBootStage('gui')
          }, 450)
          return cmdLines.length
        }
        return next
      })
    }, 70) // stampa veloce riga per riga

    return () => clearInterval(lineInterval)
  }, [bootStage, cmdLines.length])

  // Fase 2: Avanzamento barra di progresso GUI
  useEffect(() => {
    if (bootStage !== 'gui') return

    const duration = 2800 // 2.8 secondi per l'animazione dell'orb
    const interval = 50
    const increment = 100 / (duration / interval)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 100) {
          clearInterval(progressInterval)
          setBootStage('logon')
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(progressInterval)
  }, [bootStage])

  // Esegui l'accesso quando l'utente immette il nome
  const handleLogin = () => {
    const finalName = userName.trim() || 'Ospite'
    setBootStage('welcome')

    // Avvia l'audio del logon una sola volta
    if (soundRef.current) {
      try {
        soundRef.current.stop()
        soundRef.current.seek(0)
        soundRef.current.play()
      } catch (err) {
        console.log('Errore riproduzione audio logon:', err)
      }
    }

    // Carica il Desktop al termine della traccia (2.5 secondi)
    setTimeout(() => {
      onComplete(finalName)
    }, 2500)
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000000',
        zIndex: 20000,
        fontFamily: 'Consolas, Monaco, monospace, Segoe UI',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      {/* Iniezione Stili CSS per Animazione Orb e Logon */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orb-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orb-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 15px rgba(255,255,255,0.7)); }
        }
        .boot-orb-container {
          position: relative;
          width: 80px;
          height: 80px;
          animation: orb-rotate 4s linear infinite;
        }
        .boot-orb {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          filter: blur(1px);
        }
        .orb-red { background: #ff4b4b; top: 12px; left: 33px; box-shadow: 0 0 10px #ff4b4b; }
        .orb-green { background: #4bff4b; bottom: 12px; left: 33px; box-shadow: 0 0 10px #4bff4b; }
        .orb-blue { background: #4b4bff; top: 33px; left: 12px; box-shadow: 0 0 10px #4b4bff; }
        .orb-yellow { background: #ffff4b; top: 33px; right: 12px; box-shadow: 0 0 10px #ffff4b; }
        
        .logo-pulse {
          animation: orb-pulse 2.5s ease-in-out infinite;
        }
        
        .logon-input::placeholder {
          color: #718096;
          font-style: italic;
        }
        
        .logon-input-wrapper {
          border: 1px solid #7f9db9;
          transition: all 0.2s ease;
          background: #fff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2) inset;
        }
        .logon-input-wrapper:hover, .logon-input-wrapper:focus-within {
          border-color: #3182ce !important;
          box-shadow: 0 0 8px rgba(66, 153, 225, 0.8), 0 1px 3px rgba(0,0,0,0.1) inset !important;
        }
        
        .blue-arrow-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(to bottom, #a0c0e0 0%, #3a75a7 50%, #21598a 100%) !important;
          border: 1px solid #1d4b75 !important;
          color: #fff !important;
          cursor: pointer;
          display: flex;
          align-items: center;
          justifyContent: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3) !important;
          transition: all 0.15s ease !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .blue-arrow-btn:hover {
          background: linear-gradient(to bottom, #5d93c4 0%, #2e6290 50%, #173d61 100%) !important;
          border-color: #153a5c !important;
          box-shadow: 0 0 8px rgba(66, 153, 225, 0.8), 0 1px 3px rgba(0,0,0,0.3) !important;
        }
        .blue-arrow-btn:active {
          background: linear-gradient(to bottom, #173d61 0%, #2e6290 100%) !important;
          border-color: #112d47 !important;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.5) !important;
        }
      `}} />

      {/* STAGE 1: SIMULAZIONE TERMINALE CMD */}
      {bootStage === 'cmd' && (
        <div style={{
          padding: '20px',
          color: '#ffffff',
          fontSize: '13px',
          lineHeight: '1.6',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          textAlign: 'left'
        }}>
          {cmdLines.slice(0, cmdLinesCount).map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          {/* Cursore lampeggiante in basso */}
          <div style={{ display: 'inline-block', width: '8px', height: '15px', background: '#fff', marginLeft: '2px', animation: 'orb-pulse 1s steps(2) infinite' }} />
        </div>
      )}

      {/* STAGE 2: SCHERMATA GUI CARICAMENTO (Windows 7 Boot Loader) */}
      {bootStage === 'gui' && (
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          fontFamily: 'Segoe UI, Tahoma, sans-serif'
        }}>
          {/* Orb animate di avvio di Windows 7 */}
          <div className="logo-pulse" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="boot-orb-container">
              <div className="boot-orb orb-red" />
              <div className="boot-orb orb-green" />
              <div className="boot-orb orb-blue" />
              <div className="boot-orb orb-yellow" />
            </div>
            <div style={{ marginTop: '20px', color: '#fff', fontSize: '13px', letterSpacing: '2px', fontWeight: '500' }}>
              PORTFOLIO OS
            </div>
          </div>

          {/* Barra di progresso */}
          <div style={{ width: '220px', height: '6px', background: '#222', borderRadius: '3px', overflow: 'hidden', border: '1px solid #444' }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(to right, #52c41a, #a0d911)',
              boxShadow: '0 0 8px #52c41a',
              transition: 'width 0.1s ease-out'
            }} />
          </div>

          <div style={{ color: '#888', fontSize: '12px' }}>
            Avvio di Windows...
          </div>
        </div>
      )}

      {/* STAGE 3 & 4: LOGON / BENVENUTO (Windows 7 Logon Screen) */}
      {(bootStage === 'logon' || bootStage === 'welcome') && (
        <div
          style={{
            height: '100%',
            backgroundImage: `url(${bootBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            fontFamily: 'Segoe UI, Tahoma, sans-serif'
          }}
        >
          {/* Glass Overlay per contrasto visivo */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)',
            zIndex: 1
          }} />

          {/* Logon Panel */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '280px'
          }}>
            
            {/* Foto Profilo Utente (Omino Generico di Windows) */}
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '8px',
              border: '3px solid rgba(255,255,255,0.7)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={userIcon} 
                alt="Logon Avatar" 
                style={{ 
                  width: '75%', 
                  height: '75%', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.15))'
                }} 
              />
            </div>

            {/* Nome utente / Stato di Welcome */}
            {bootStage === 'logon' ? (
              <>
                <div style={{
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: '500',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  marginBottom: '15px'
                }}>
                  Biagio Scaglia
                </div>

                {/* Password Input Box (Simulata per il Nome Utente) */}
                <div 
                  className="logon-input-wrapper"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: '4px',
                    padding: '2px',
                    boxSizing: 'border-box',
                    gap: '6px',
                    background: '#ffffff'
                  }}
                >
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleLogin()
                      }
                    }}
                    placeholder="Scrivi il tuo nome..."
                    className="logon-input"
                    autoFocus
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      padding: '6px 10px',
                      fontSize: '13px',
                      color: '#2d3748',
                      fontWeight: '500',
                      fontFamily: 'Segoe UI, Tahoma, sans-serif'
                    }}
                  />
                  
                  {/* Pulsante circolare freccia blu login */}
                  <button
                    onClick={handleLogin}
                    className="blue-arrow-btn"
                  >
                    <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
                  </button>
                </div>
                
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px', marginTop: '12px', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                  Premi Invio per accedere
                </div>
              </>
            ) : (
              /* Messaggio di Benvenuto in Logon */
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <div style={{
                  color: '#fff',
                  fontSize: '22px',
                  fontWeight: '300',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span>Benvenuto</span>
                  <Windows7Spinner size={24} />
                </div>
                <div style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '13px',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}>
                  {userName.trim() || 'Ospite'}
                </div>
              </div>
            )}

          </div>

          {/* Footer Logon Screen */}
          <div style={{
            position: 'absolute',
            bottom: '35px',
            zIndex: 2,
            textAlign: 'center',
            color: '#fff',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
            opacity: 0.95
          }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic', letterSpacing: '0.5px' }}>
              Windows 7
            </div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px', opacity: 0.75 }}>
              Professional
            </div>
          </div>

        </div>
      )}

    </div>
  )
}
