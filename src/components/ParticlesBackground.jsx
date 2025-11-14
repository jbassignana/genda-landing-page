import { useEffect, useRef } from 'react'

const ParticlesBackground = ({ variant = 'default' }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const particles = []
    
    // Configuración según variante
    const particleCount = variant === 'global' ? 25 : 15
    
    // Colores vibrantes - Solo tonos verdes
    const colors = [
      'rgba(16, 185, 129, 0.6)',  // emerald-500
      'rgba(20, 184, 166, 0.6)',  // teal-500
      'rgba(34, 197, 94, 0.6)',   // green-500
      'rgba(5, 150, 105, 0.6)',   // emerald-600
      'rgba(13, 148, 136, 0.6)',  // teal-600
      'rgba(22, 163, 74, 0.6)',   // green-600
      'rgba(52, 211, 153, 0.6)',  // emerald-400
      'rgba(45, 212, 191, 0.6)',  // teal-400
    ]

    const shapes = ['circle', 'square', 'triangle']

    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Crear partículas
    class Particle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.x = Math.random() * canvas.width
      }

      reset() {
        this.size = Math.random() * 40 + 20
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.shape = shapes[Math.floor(Math.random() * shapes.length)]
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        // Rebote en los bordes
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.speedX *= -1
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.speedY *= -1
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color

        if (this.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.fill()
        } else if (this.shape === 'square') {
          ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2)
        } else if (this.shape === 'triangle') {
          ctx.beginPath()
          ctx.moveTo(0, -this.size)
          ctx.lineTo(this.size, this.size)
          ctx.lineTo(-this.size, this.size)
          ctx.closePath()
          ctx.fill()
        }

        ctx.restore()
      }
    }

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none blur-lg"
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default ParticlesBackground
