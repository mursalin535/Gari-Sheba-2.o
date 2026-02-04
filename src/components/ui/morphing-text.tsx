import { useEffect, useRef } from "react"

interface MorphingTextProps {
  texts: string[]
  className?: string
  speed?: number // pixels per second
}

export const MorphingText: React.FC<MorphingTextProps> = ({ texts, className, speed = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrame: number

    const animate = () => {
      scrollRef.current += speed / 60 // approximate per frame
      if (scrollRef.current >= container.scrollWidth / 2) {
        scrollRef.current = 0
      }
      container.scrollLeft = scrollRef.current
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [speed])

  // Duplicate texts for seamless scroll
  const repeatedTexts = [...texts, ...texts]

  return (
    <div
      ref={containerRef}
      className={`flex gap-6 whitespace-nowrap overflow-hidden ${className}`}
    >
      {repeatedTexts.map((text, i) => (
        <span key={i} className="inline-block font-bold text-lg md:text-2xl">
          {text}
        </span>
      ))}
    </div>
  )
}
