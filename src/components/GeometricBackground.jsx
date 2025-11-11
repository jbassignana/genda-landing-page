import { motion } from 'framer-motion'
import { useMemo } from 'react'

const GeometricBackground = ({ variant = 'default' }) => {
  
  // Generar posiciones aleatorias para las formas
  const shapes = useMemo(() => {
    const count = variant === 'global' ? 25 : 15
    const colors = [
      'bg-emerald-500/50',
      'bg-emerald-400/55',
      'bg-teal-500/50',
      'bg-teal-400/55',
      'bg-sky-500/45',
      'bg-sky-400/50',
      'bg-blue-500/45',
      'bg-blue-400/50',
      'bg-cyan-500/45',
      'bg-cyan-400/50',
      'bg-slate-400/40',
    ]

    const sizes = ['w-32 h-32', 'w-40 h-40', 'w-48 h-48', 'w-56 h-56', 'w-64 h-64', 'w-72 h-72', 'w-80 h-80']

    return Array.from({ length: count }, (_, i) => {
      const gridCols = 5
      const gridRows = Math.ceil(count / gridCols)
      const col = i % gridCols
      const row = Math.floor(i / gridCols)
      
      const verticalPadding = 20 // Más padding para evitar cortes
      const baseX = (col / gridCols) * 100 + (Math.random() - 0.5) * 15
      const baseY = verticalPadding + (row / gridRows) * (100 - verticalPadding * 2) + (Math.random() - 0.5) * 8
      
      return {
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        top: baseY,
        left: baseX,
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 2,
        moveX: (Math.random() - 0.5) * 300,
        scale: 1 + Math.random() * 0.4,
        rotate: (Math.random() - 0.5) * 360,
      }
    })
  }, [variant])

  const gradients = useMemo(() => [
    { color: 'rgba(16, 185, 129, 0.35)', size: 250 },
    { color: 'rgba(20, 184, 166, 0.35)', size: 300 },
    { color: 'rgba(56, 189, 248, 0.3)', size: 350 },
    { color: 'rgba(59, 130, 246, 0.3)', size: 400 },
    { color: 'rgba(6, 182, 212, 0.3)', size: 450 },
  ], [])

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} blur-3xl rounded-full will-change-transform`}
          style={{
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            x: '-50%',
          }}
          animate={{
            x: [
              '-50%',
              `calc(-50% + ${shape.moveX * 0.25}px)`,
              `calc(-50% + ${shape.moveX * 0.5}px)`,
              `calc(-50% + ${shape.moveX * 0.75}px)`,
              `calc(-50% + ${shape.moveX}px)`,
              `calc(-50% + ${shape.moveX * 0.75}px)`,
              `calc(-50% + ${shape.moveX * 0.5}px)`,
              `calc(-50% + ${shape.moveX * 0.25}px)`,
              '-50%'
            ],
            rotate: [
              0,
              shape.rotate * 0.2,
              shape.rotate * 0.4,
              shape.rotate * 0.6,
              shape.rotate * 0.8,
              shape.rotate,
              shape.rotate * 0.7,
              shape.rotate * 0.3,
              0
            ],
            scale: [
              1,
              1 + (shape.scale - 1) * 0.3,
              1 + (shape.scale - 1) * 0.6,
              shape.scale,
              1 + (shape.scale - 1) * 0.8,
              shape.scale * 0.9,
              1 + (shape.scale - 1) * 0.5,
              1 + (shape.scale - 1) * 0.2,
              1
            ],
            opacity: [0.7, 0.75, 0.8, 0.85, 0.9, 0.85, 0.8, 0.75, 0.7],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        />
      ))}

      {gradients.map((gradient, i) => {
        const moveXLarge = i % 2 === 0 ? 120 : -120
        
        return (
          <motion.div
            key={`gradient-${i}`}
            className="absolute rounded-full blur-3xl will-change-transform"
            style={{
              width: `${gradient.size}px`,
              height: `${gradient.size}px`,
              top: `${25 + (i * 12) % 50}%`,
              left: `${10 + (i * 20) % 80}%`,
              background: `radial-gradient(circle, ${gradient.color} 0%, transparent 70%)`,
            }}
            animate={{
              x: [
                0,
                moveXLarge * 0.2,
                moveXLarge * 0.4,
                moveXLarge * 0.6,
                moveXLarge * 0.8,
                moveXLarge,
                moveXLarge * 0.7,
                moveXLarge * 0.4,
                moveXLarge * 0.1,
                -moveXLarge * 0.2,
                0
              ],
              rotate: [0, 20, 40, 60, 80, 90, 70, 40, 10, -20, 0],
              scale: [1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.2, 1.15, 1.1, 1.05, 1],
              opacity: [0.5, 0.55, 0.6, 0.65, 0.7, 0.65, 0.6, 0.55, 0.5, 0.5],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1,
            }}
          />
        )
      })}
    </div>
  )
}

export default GeometricBackground
