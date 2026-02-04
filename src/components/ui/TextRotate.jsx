import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const text = ['Your Safety, Our Priority', "Fueling Your Adventures", "Miles of Trust","Happy Faces"]

const TextRotate = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0
        return state + 1
      })
    }, 8000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative flex w-full items-center justify-center py-4 text-center">
      <AnimatePresence>
        <motion.div
          className="absolute cursor-pointer text-6xl font-extrabold tracking-tight text-blue-700 "
          key={index}
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.8 }}
          transition={{ ease: 'easeInOut', delay: 0.3, duration: 0.7 }}
          whileHover={{ scale: 1.1 }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TextRotate;
