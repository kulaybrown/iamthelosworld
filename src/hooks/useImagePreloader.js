import { useEffect, useState } from 'react'

function preloadImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve()
      return
    }

    const image = new Image()
    image.onload = () => resolve()
    image.onerror = () => resolve()
    image.src = src
  })
}

export default function useImagePreloader(imageSources = []) {
  const [isReady, setIsReady] = useState(imageSources.length === 0)

  useEffect(() => {
    let isMounted = true

    setIsReady(imageSources.length === 0)

    Promise.all(imageSources.map(preloadImage)).then(() => {
      if (isMounted) {
        setIsReady(true)
      }
    })

    return () => {
      isMounted = false
    }
  }, [imageSources])

  return isReady
}