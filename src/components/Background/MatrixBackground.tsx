import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const chars = "010110100101010010101"
    const charArray = chars.split('')
    
    const getFontSize = () => window.innerWidth < 768 ? 12 : 16
    let fontSize = getFontSize()
    let columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    const colors = ['#60a5fa', '#8b5cf6', '#10b981']

    const initDrops = () => {
      drops.length = 0
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100
      }
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `bold ${fontSize}px monospace`
      ctx.textAlign = 'center'

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        const color = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillStyle = color

        const x = i * fontSize + fontSize / 2
        const y = drops[i] * fontSize
        
        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resizeCanvas()
      fontSize = getFontSize()
      columns = Math.floor(canvas.width / fontSize)
      initDrops()
    }

    resizeCanvas()
    initDrops()
    draw()

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  )
}