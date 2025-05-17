'use client'
import { useEffect, useState } from 'react'

const Name = () => {
  const lines = ['ANNE-', 'FLORE', 'BERNARD']
  const tableLetters = lines.join('').split('')
  const [visibleLetters, setVisibleLetters] = useState(Array(tableLetters.length).fill(false))

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    tableLetters.forEach((_, i) => {
      const delay = Math.random() * 10 + 60
      const timeout = setTimeout(() => {
        setVisibleLetters((prev) => {
          const updated = [...prev]
          updated[i] = true
          return updated
        })
      }, delay)
      timeouts.push(timeout)
    })
    return () => timeouts.forEach(clearTimeout)
  }, [tableLetters])

  let letterIndex = 0

  return (
    <h1 className="font-['Josefin_Sans'] text-[44px] leading-[40px] text-[#300c2a] uppercase font-bold tracking-[0] m-0 text-left absolute top-8 right-8">
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.split('').map((char) => {
            const index = letterIndex++
            return (
              <span
                key={index}
                className={`inline-block transition-opacity duration-300 ${
                  visibleLetters[index] ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export default Name
