'use client'

import { useRef, useEffect, useCallback } from 'react'

interface Props {
  onClear?: () => void
}

export default function DrawingCanvas({ onClear }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const lastPos = useRef<{ x: number; y: number } | null>(null)

  const getPos = (e: PointerEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = '#2D1B69'
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set internal resolution
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    const ctx = canvas.getContext('2d')
    if (ctx) ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    initCanvas()

    const onDown = (e: PointerEvent) => {
      e.preventDefault()
      drawing.current = true
      const pos = getPos(e, canvas)
      lastPos.current = pos
      // Dot for single tap
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.beginPath()
      ctx.arc(pos.x / window.devicePixelRatio, pos.y / window.devicePixelRatio, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = '#2D1B69'
      ctx.fill()
    }

    const onMove = (e: PointerEvent) => {
      if (!drawing.current || !lastPos.current) return
      e.preventDefault()
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const pos = getPos(e, canvas)
      ctx.beginPath()
      ctx.moveTo(lastPos.current.x / window.devicePixelRatio, lastPos.current.y / window.devicePixelRatio)
      ctx.lineTo(pos.x / window.devicePixelRatio, pos.y / window.devicePixelRatio)
      ctx.stroke()
      lastPos.current = pos
    }

    const onUp = () => {
      drawing.current = false
      lastPos.current = null
    }

    canvas.addEventListener('pointerdown', onDown, { passive: false })
    canvas.addEventListener('pointermove', onMove, { passive: false })
    canvas.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointerleave', onUp)

    return () => {
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointerleave', onUp)
    }
  }, [initCanvas])

  const handleClear = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
    onClear?.()
  }

  return (
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        className="w-full rounded-2xl border-2 border-dashed border-juz-purple border-opacity-40 bg-white"
        style={{ height: '220px', touchAction: 'none' }}
      />
      {/* Watermark guide text */}
      <p className="absolute top-3 left-0 right-0 text-center text-xs text-gray-300 pointer-events-none select-none">
        ✏️ Show your working here
      </p>
      <button
        onClick={handleClear}
        className="absolute bottom-3 right-3 text-xs bg-white border border-gray-200 text-gray-500 px-3 py-1.5 rounded-full hover:bg-gray-50 shadow-sm transition-colors"
      >
        Clear ✕
      </button>
    </div>
  )
}
