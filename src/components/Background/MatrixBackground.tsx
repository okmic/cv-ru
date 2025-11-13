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
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const chars = "010110100101010010101"
    const charArray = chars.split('')
    
    const getFontSize = () => window.innerWidth < 768 ? 12 : 16
    let fontSize = getFontSize()
    let columns = 0
    const drops: number[] = []

    const colors = ['#60a5fa', '#8b5cf6', '#10b981']

    const initDrops = () => {
      drops.length = 0
      const canvasWidth = canvas.getBoundingClientRect().width
      columns = Math.floor(canvasWidth / fontSize)
      
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100
      }
    }

    const draw = () => {
      const canvasWidth = canvas.getBoundingClientRect().width
      const canvasHeight = canvas.getBoundingClientRect().height
      
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      ctx.font = `bold ${fontSize}px monospace`
      ctx.textAlign = 'center'

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        const color = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillStyle = color

        const x = i * fontSize + fontSize / 2
        const y = drops[i] * fontSize
        
        if (y <= canvasHeight + fontSize) {
          ctx.fillText(char, x, y)
        }

        if (y > canvasHeight && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resizeCanvas()
      fontSize = getFontSize()
      initDrops()
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(canvas)

    resizeCanvas()
    initDrops()
    draw()

    return () => {
      resizeObserver.disconnect()
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