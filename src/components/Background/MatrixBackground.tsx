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

    // Матричные символы
    const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charArray = chars.split('')
    
    const getFontSize = () => window.innerWidth < 768 ? 12 : 16
    let fontSize = getFontSize()
    let columns = 0
    const drops: number[] = []

    // Фиолетовая палитра как в матрице
    const colors = ['#c084fc', '#a855f7', '#9333ea', '#7c3aed', '#6d28d9']

    const initDrops = () => {
      drops.length = 0
      const canvasWidth = canvas.getBoundingClientRect().width
      columns = Math.floor(canvasWidth / fontSize)
      
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100)
      }
    }

    const draw = () => {
      const canvasWidth = canvas.getBoundingClientRect().width
      const canvasHeight = canvas.getBoundingClientRect().height
      
      // Полупрозрачный черный фон для эффекта шлейфа
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      ctx.font = `bold ${fontSize}px monospace`
      ctx.textAlign = 'center'

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        
        // Градиент цвета - первый символ в колонке ярче
        const colorIndex = Math.min(Math.floor(drops[i] / 10), colors.length - 1)
        ctx.fillStyle = colors[colorIndex]

        const x = i * fontSize + fontSize / 2
        const y = drops[i] * fontSize
        
        // Рисуем только если символ в пределах видимой области
        if (y > 0 && y <= canvasHeight + fontSize) {
          ctx.fillText(char, x, y)
        }

        // Случайно сбрасываем каплю когда она выходит за нижнюю границу
        if (y > canvasHeight && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        // Увеличиваем скорость для более динамичного эффекта
        drops[i] += 1
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
      style={{ opacity: 0.7 }}
    />
  )
}