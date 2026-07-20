import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { OrbitControls, Loader } from '@react-three/drei'
import './App.css'
import SpaceScene from './components/SpaceScene'



// импортируем все 27 фото как модули
import photo1 from '/src/assets/gallery/photo1.JPG'
import photo2 from '/src/assets/gallery/photo2.JPG'
import photo3 from '/src/assets/gallery/photo3.JPG'
import photo4 from '/src/assets/gallery/photo4.JPG'
import photo5 from '/src/assets/gallery/photo5.JPG'
import photo6 from '/src/assets/gallery/photo6.JPG'
import photo7 from '/src/assets/gallery/photo7.png'
import photo8 from '/src/assets/gallery/photo8.png'
import photo9 from '/src/assets/gallery/photo9.png'
import photo10 from '/src/assets/gallery/photo10.png'
import photo11 from '/src/assets/gallery/photo11.png'
import photo12 from '/src/assets/gallery/photo12.JPG'
import photo13 from '/src/assets/gallery/photo13.png'
import photo14 from '/src/assets/gallery/photo14.png'
import photo15 from '/src/assets/gallery/photo15.png'
import photo16 from '/src/assets/gallery/photo16.png'
import photo17 from '/src/assets/gallery/photo17.png'
import photo18 from '/src/assets/gallery/photo18.png'
import photo19 from '/src/assets/gallery/photo19.png'
import photo20 from '/src/assets/gallery/photo20.png'
import photo21 from '/src/assets/gallery/photo21.png'
import photo22 from '/src/assets/gallery/photo22.png'
import photo23 from '/src/assets/gallery/photo23.png'
import photo24 from '/src/assets/gallery/photo24.png'
import photo25 from '/src/assets/gallery/photo25.JPG'
import photo26 from '/src/assets/gallery/photo26.png'
import photo27 from '/src/assets/gallery/photo27.png'

function App() {
  const [step, setStep] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showStart, setShowStart] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  

  const photos = [
    { src: photo1, caption: 'Момент, когда я понял, что ты - моя судьба 💫' },
    { src: photo2, caption: 'Твоя улыбка освещает даже самые темные дни ✨' },
    { src: photo3, caption: 'Это был лучший день! Помнишь? 🌟' },
    { src: photo4, caption: 'С тобой каждое приключение становится волшебным 🎭' },
    { src: photo5, caption: 'Твои глаза - целая вселенная 🌌' },
    { src: photo6, caption: 'Наш маленький космос счастья 🌙' },
    { src: photo7, caption: 'Ты делаешь обычные моменты особенными 💝' },
    { src: photo8, caption: 'Вместе мы можем всё! 🚀' },
    { src: photo9, caption: 'Эта фотка - доказательство нашей химии 💕' },
    { src: photo10, caption: 'Когда ты рядом, время останавливается ⏰' },
    { src: photo11, caption: 'Твой смех - моя любимая мелодия 🎵' },
    { src: photo12, caption: 'Мы как две звезды на одной орбите 🌠' },
    { src: photo13, caption: 'С тобой я чувствую себя как дома 🏡' },
    { src: photo14, caption: 'Наша история только начинается 📖' },
    { src: photo15, caption: 'Ты - мое самое яркое созвездие 🌟' },
    { src: photo16, caption: 'Каждый день с тобой - это подарок 🎁' },
    { src: photo17, caption: 'Мы создаем свою галактику любви 💖' },
    { src: photo18, caption: 'Твоя поддержка значит для меня всё 🤗' },
    { src: photo19, caption: 'Вот почему я влюбился в тебя снова 💘' },
    { src: photo20, caption: 'Ты - мой любимый человек во вселенной 🌍' },
    { src: photo21, caption: 'Наши мечты сбываются вместе ✨' },
    { src: photo22, caption: 'Ты вдохновляешь меня быть лучше 🌈' },
    { src: photo23, caption: 'С тобой я вижу мир по-другому 👁️' },
    { src: photo24, caption: 'Наша любовь сильнее гравитации 💪' },
    { src: photo25, caption: 'Спасибо, что ты есть в моей жизни 🙏' },
    { src: photo26, caption: 'Мы - команда мечты! 🎯' },
    { src: photo27, caption: 'Я люблю тебя больше, чем звезд на небе 🌃' },
  ]

  const photoGroups = {
    1: photos.slice(0, 7),
    2: photos.slice(7, 17),
    3: photos.slice(17, 27),
  }

  const messages = [
    {
      title: 'Старт путешествия 🚀',
      text: 'Сейчас мы отправимся в космическое путешествие по нашим самым дорогим воспоминаниям.',
    },
    {
      title: 'Глава 1. Начало 💫',
      text: 'Первая планета слева — это наши шаги навстречу друг другу. Каждое фото здесь хранит магию начала.',
    },
    {
      title: 'Глава 2. Наш космос 🌌',
      text: 'Планета справа светится нашим счастьем. Здесь живут моменты, когда мы были просто вместе — и этого было достаточно.',
    },
    {
      title: 'Глава 3. Мечты и будущее ✨',
      text: 'Эта планета — наш тёплый дом, где рождаются мечты и растут прекрасные истории. Здесь начинается наше завтра.',
    },
    {
      title: 'Финал. Ты — моя вселенная 💖',
      text: 'В бесконечности космоса есть только одна константа — моя любовь к тебе, Алтынай.',
    },
  ]

  const handlePhotoClick = (globalIndex) => {
    setSelectedPhoto(globalIndex)
  }

  const closePhoto = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = (e) => {
    e.stopPropagation()
    setSelectedPhoto((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = (e) => {
    e.stopPropagation()
    setSelectedPhoto((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const handleNextStep = () => {
    if (step === 4) { 
      setStep(0)
      setCurrentMessage(0)
    } else { 
      setStep(Math.min(step + 1, 4))
      setCurrentMessage(Math.min(currentMessage + 1, messages.length - 1))
    }
  }

  const handlePrevStep = () => {
    setStep(Math.max(step - 1, 0))
    setCurrentMessage(Math.max(currentMessage - 1, 0))
  }

  return (
    <>
      <div className="canvas-container">
        <Canvas 
          camera={{ position: [0, 8, 42], fov: isMobile ? 60 : 50 }}
          dpr={[1, 2]}
          gl={{ 
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
          }}
        >
          <Suspense fallback={null}>
            <SpaceScene
              step={step}
              photoGroups={photoGroups}
              onPhotoClick={handlePhotoClick}
            />
          </Suspense>
          <OrbitControls
            enableZoom={true}
            minDistance={isMobile ? 10 : 8}
            maxDistance={isMobile ? 50 : 40}
            enablePan={false}
            enableRotate={true}
            autoRotate={false}
            rotateSpeed={isMobile ? 0.5 : 1}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* Экран загрузки: показывает прогресс вместо чёрного, пока грузятся текстуры */}
      <Loader
        containerStyles={{ background: 'radial-gradient(circle at 50% 40%, #1a0b1f 0%, #000 80%)' }}
        barStyles={{ background: '#ff6b9d' }}
        dataStyles={{ color: '#ffd1e6', fontSize: '14px', letterSpacing: '0.05em' }}
        dataInterpolation={(p) => `Загрузка космоса… ${p.toFixed(0)}%`}
      />

      <div className="ui-overlay">
        <div style={{ marginTop: '1.5rem' }}>
          <AnimatePresence mode="wait">
            {showStart ? (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className="message-card"
              >
                <h2>Для самой лучшей Алтынай 💝</h2>
                <p>Я сделал для тебя космическое путешествие по нашей истории.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.8 }}>
                  Лети вперед по главам, приближай планеты и рассмотри наши моменты в космосе.
                </p>
                <button className="planet-button" onClick={() => { const a = document.getElementById('bg-audio'); if(a){ a.muted = false; a.play().catch(()=>{}); } setShowStart(false); setStep(0); setCurrentMessage(0); }}>
                  Взлететь 🚀
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={currentMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="message-card"
              >
                <h2>{messages[currentMessage].title}</h2>
                <p>{messages[currentMessage].text}</p>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <button
                    className="planet-button"
                    style={{ opacity: step === 0 ? 0.4 : 1 }}
                    onClick={handlePrevStep}
                    disabled={step === 0}
                  >
                    Назад
                  </button>
                  <button
                    className="planet-button"
                    onClick={handleNextStep}
                  >
                    {step === 4 ? 'Повторить ♻️' : 'Дальше ✨'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!showStart && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="instructions"
          >
            Свайпай экран / верти телефон, приближай планеты и кликай на фото 🌟
          </motion.p>
        )}
      </div>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '0.5rem' : '1rem',
              boxSizing: 'border-box',
            }}
            onClick={closePhoto}
          >
            <motion.div
              initial={{ scale: 0.3, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.3, rotateY: -90 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxWidth: isMobile ? '100%' : '900px',
                maxHeight: isMobile ? '100%' : '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, rgba(255,107,157,0.1), rgba(196,113,237,0.1))',
                backdropFilter: 'blur(20px)',
                border: '3px solid #ff6b9d',
                borderRadius: isMobile ? '16px' : '20px',
                padding: isMobile ? '1rem 0.5rem' : '2rem',
                boxShadow: '0 0 80px rgba(255,107,157,0.6), inset 0 0 60px rgba(255,107,157,0.2)',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img 
                  src={photos[selectedPhoto].src}
                  alt={photos[selectedPhoto].caption}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: isMobile ? '60vh' : '65vh',
                    borderRadius: '12px',
                    objectFit: 'contain',
                    marginBottom: isMobile ? '0.5rem' : '1rem',
                  }}
                />
                <p style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: isMobile ? '0.85rem' : '1.2rem',
                  textShadow: '0 0 15px rgba(255,107,157,0.8)',
                  padding: isMobile ? '0.5rem' : '0 1rem',
                  lineHeight: isMobile ? '1.3' : '1.5',
                  maxHeight: isMobile ? '15vh' : 'auto',
                  overflow: 'auto',
                }}>
                  {photos[selectedPhoto].caption}
                </p>
              </div>

              <button
                onClick={closePhoto}
                style={{
                  position: 'absolute',
                  top: isMobile ? '0.3rem' : '1rem',
                  right: isMobile ? '0.3rem' : '1rem',
                  background: 'rgba(255,107,157,0.4)',
                  border: '2px solid #ff6b9d',
                  color: '#fff',
                  width: isMobile ? '35px' : '50px',
                  height: isMobile ? '35px' : '50px',
                  borderRadius: '50%',
                  fontSize: isMobile ? '1.1rem' : '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20,
                  fontWeight: 'bold',
                }}
              >
                ✕
              </button>

              <button
                onClick={prevPhoto}
                style={{
                  position: 'absolute',
                  left: isMobile ? '0.3rem' : '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,107,157,0.4)',
                  border: '2px solid #ff6b9d',
                  color: '#fff',
                  width: isMobile ? '35px' : '50px',
                  height: isMobile ? '35px' : '50px',
                  borderRadius: '50%',
                  fontSize: isMobile ? '1.3rem' : '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20,
                }}
              >
                ‹
              </button>

              <button
                onClick={nextPhoto}
                style={{
                  position: 'absolute',
                  right: isMobile ? '0.3rem' : '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,107,157,0.4)',
                  border: '2px solid #ff6b9d',
                  color: '#fff',
                  width: isMobile ? '35px' : '50px',
                  height: isMobile ? '35px' : '50px',
                  borderRadius: '50%',
                  fontSize: isMobile ? '1.3rem' : '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20,
                }}
              >
                ›
              </button>

              <div style={{
                position: 'absolute',
                bottom: isMobile ? '0.3rem' : '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: isMobile ? '0.7rem' : '0.9rem',
                color: 'rgba(255,255,255,0.9)',
                background: 'rgba(0,0,0,0.7)',
                padding: isMobile ? '0.3rem 0.7rem' : '0.5rem 1rem',
                borderRadius: '20px',
                zIndex: 20,
                fontWeight: '600',
              }}>
                {selectedPhoto + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
