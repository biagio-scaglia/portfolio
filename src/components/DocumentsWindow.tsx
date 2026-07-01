import { useState, useEffect } from 'react'
import Window from './Window'
import Windows7Spinner from './Windows7Spinner'
import curriculumPDF from '../assets/Curriculum Vitae - Biagio Scaglia.pdf'
import fiammaImg from '../assets/fiamma.jpg'
import zoeImg from '../assets/zoe.jpg'
import bariImg from '../assets/Bari.jpg'

interface DocumentsWindowProps {
  onClose: () => void
  onMinimize?: () => void
  icon?: React.ReactNode
}

export default function DocumentsWindow({ onClose, onMinimize, icon }: DocumentsWindowProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState<'all' | 'documents' | 'images'>('all')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth <= 550

  const handleOpenPDF = () => {
    window.open(curriculumPDF, '_blank')
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  const images = [
    { name: 'Fiamma.jpg', src: fiammaImg, size: '71 KB', date: '12/12/2025' },
    { name: 'Zoe.jpg', src: zoeImg, size: '195 KB', date: '15/12/2025' },
    { name: 'Bari.jpg', src: bariImg, size: '423 KB', date: '20/12/2025' },
  ]

  return (
    <Window
      title="Documenti"
      width={750}
      height={520}
      defaultPosition={{ x: 150, y: 100 }}
      onClose={onClose}
      onMinimize={onMinimize}
      icon={icon}
    >
      <div style={{ display: 'flex', height: '100%', fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
        
        {/* Barra di Navigazione Sinistra (Explorer Sidebar) - Nascosta su Mobile */}
        {!isMobile && (
          <div style={{
            width: '180px',
            background: 'linear-gradient(to right, #f4f7fc 0%, #ebf2f9 100%)',
            borderRight: '1px solid #d9d9d9',
            padding: '15px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            userSelect: 'none',
            flexShrink: 0
          }}>
            {/* Sezione Preferiti */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#687b9b', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <i className="fas fa-star" style={{ color: '#d69e2e', marginRight: '6px' }}></i> Preferiti
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '8px' }}>
                <div
                  onClick={() => setActiveCategory('all')}
                  style={{
                    padding: '4px 8px',
                    fontSize: '12px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    background: activeCategory === 'all' ? 'rgba(0, 120, 215, 0.15)' : 'transparent',
                    border: activeCategory === 'all' ? '1px solid rgba(0, 120, 215, 0.25)' : '1px solid transparent',
                    color: '#2d3748',
                    fontWeight: activeCategory === 'all' ? 'bold' : 'normal'
                  }}
                >
                  <i className="fas fa-desktop" style={{ color: '#4a5568', marginRight: '6px', width: '14px' }}></i> Desktop
                </div>
              </div>
            </div>

            {/* Sezione Raccolte */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#687b9b', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <i className="fas fa-folder-open" style={{ color: '#dd6b20', marginRight: '6px' }}></i> Raccolte
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '8px' }}>
                <div
                  onClick={() => setActiveCategory('documents')}
                  style={{
                    padding: '4px 8px',
                    fontSize: '12px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    background: activeCategory === 'documents' ? 'rgba(0, 120, 215, 0.15)' : 'transparent',
                    border: activeCategory === 'documents' ? '1px solid rgba(0, 120, 215, 0.25)' : '1px solid transparent',
                    color: '#2d3748',
                    fontWeight: activeCategory === 'documents' ? 'bold' : 'normal'
                  }}
                >
                  <i className="fas fa-file-alt" style={{ color: '#3182ce', marginRight: '6px', width: '14px' }}></i> Documenti
                </div>
                <div
                  onClick={() => setActiveCategory('images')}
                  style={{
                    padding: '4px 8px',
                    fontSize: '12px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    background: activeCategory === 'images' ? 'rgba(0, 120, 215, 0.15)' : 'transparent',
                    border: activeCategory === 'images' ? '1px solid rgba(0, 120, 215, 0.25)' : '1px solid transparent',
                    color: '#2d3748',
                    fontWeight: activeCategory === 'images' ? 'bold' : 'normal'
                  }}
                >
                  <i className="fas fa-image" style={{ color: '#38a169', marginRight: '6px', width: '14px' }}></i> Immagini
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pane Principale Destro (File Grid) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#fff', overflowY: 'auto' }}>
          
          {/* Breadcrumb / Top Bar */}
          <div style={{
            padding: '10px 15px',
            borderBottom: '1px solid #edf2f7',
            background: '#f7fafc',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: '#4a5568'
          }}>
            <span style={{ color: '#718096' }}>Raccolte</span>
            <span>&gt;</span>
            <span style={{ fontWeight: '600', color: '#2d3748' }}>
              {activeCategory === 'all' ? 'Tutti i file' : activeCategory === 'documents' ? 'Documenti' : 'Immagini'}
            </span>
          </div>

          <div style={{ padding: isMobile ? '12px' : '20px' }}>
            {/* Contenuto Documenti (PDF) */}
            {(activeCategory === 'all' || activeCategory === 'documents') && (
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Documenti PDF
                </h3>
                <div
                  onClick={handleOpenPDF}
                  onMouseEnter={() => setHoveredItem('pdf')}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    padding: '12px 15px',
                    border: hoveredItem === 'pdf' ? '1px solid #90cdf4' : '1px solid #cbd5e0',
                    background: hoveredItem === 'pdf' ? 'linear-gradient(to bottom, #ebf8ff 0%, #e1f5fe 100%)' : '#f7fafc',
                    boxShadow: hoveredItem === 'pdf' ? '0 0 8px rgba(66, 153, 225, 0.2)' : 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '6px',
                    background: '#fed7d7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e53e3e',
                    fontSize: '24px',
                    flexShrink: 0
                  }}>
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', fontSize: '13px', color: '#2d3748' }}>
                      Curriculum Vitae - Biagio Scaglia.pdf
                    </div>
                    <div style={{ fontSize: '11px', color: '#718096', marginTop: '2px' }}>
                      Dimensione: 434 KB • Tipo: Documento PDF
                    </div>
                  </div>
                  <span style={{
                    fontSize: '11px',
                    color: '#3182ce',
                    background: '#fff',
                    border: '1px solid #cbd5e0',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    Apri CV <i className="fas fa-external-link-alt" style={{ fontSize: '9px' }}></i>
                  </span>
                </div>
              </div>
            )}

            {/* Contenuto Immagini (Grid) */}
            {(activeCategory === 'all' || activeCategory === 'images') && (
              <div>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Raccolta Foto
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile
                    ? 'repeat(2, 1fr)'
                    : 'repeat(auto-fill, minmax(140px, 1fr))',
                  gap: '12px'
                }}>
                  {images.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => handleImageClick(img.src)}
                      onMouseEnter={() => setHoveredItem(`img-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{
                        border: hoveredItem === `img-${index}` ? '1px solid #90cdf4' : '1px solid #cbd5e0',
                        background: '#fff',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        boxShadow: hoveredItem === `img-${index}`
                          ? '0 4px 10px rgba(66, 153, 225, 0.25)'
                          : '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.15s ease',
                        position: 'relative',
                        boxSizing: 'border-box',
                        padding: '4px'
                      }}
                    >
                      {/* Image frame */}
                      <div style={{
                        position: 'relative',
                        width: '100%',
                        height: isMobile ? '90px' : '110px',
                        background: '#edf2f7',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        {loadingImages[img.src] && (
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                          }}>
                            <Windows7Spinner size={24} />
                          </div>
                        )}
                        <img
                          src={img.src}
                          alt={img.name}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: loadingImages[img.src] ? 'none' : 'block',
                          }}
                          onLoadStart={() => {
                            setLoadingImages(prev => ({ ...prev, [img.src]: true }))
                          }}
                          onLoad={() => {
                            setLoadingImages(prev => ({ ...prev, [img.src]: false }))
                          }}
                          onError={() => {
                            setLoadingImages(prev => ({ ...prev, [img.src]: false }))
                          }}
                        />
                      </div>

                      {/* File Label */}
                      <div style={{
                        padding: '6px 4px 2px 4px',
                        fontSize: '11px',
                        textAlign: 'left'
                      }}>
                        <div style={{ fontWeight: 'bold', color: '#2d3748', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {img.name}
                        </div>
                        <div style={{ color: '#718096', fontSize: '9px', marginTop: '1px' }}>
                          {img.size}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal per immagine selezionata */}
        {selectedImage && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10002,
              cursor: 'pointer',
            }}
            onClick={() => setSelectedImage(null)}
          >
            {loadingImages[selectedImage] && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
              }}>
                <Windows7Spinner size={48} />
              </div>
            )}
            <img
              src={selectedImage}
              alt="Preview"
              loading="lazy"
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: '4px',
                border: '4px solid #fff',
                boxShadow: '0 5px 25px rgba(0,0,0,0.5)',
                display: loadingImages[selectedImage] ? 'none' : 'block',
              }}
              onLoadStart={() => {
                setLoadingImages(prev => ({ ...prev, [selectedImage]: true }))
              }}
              onLoad={() => {
                setLoadingImages(prev => ({ ...prev, [selectedImage]: false }))
              }}
              onError={() => {
                setLoadingImages(prev => ({ ...prev, [selectedImage]: false }))
              }}
            />
          </div>
        )}
      </div>
    </Window>
  )
}
