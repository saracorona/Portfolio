import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  function animateFadeUp(target, options = {}) {
    if (!target) return undefined

    const isCollection = Array.isArray(target) || target instanceof NodeList
    const trigger = isCollection ? target[0] : target

    return gsap.from(target, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      ...options,
    })
  }

  return { animateFadeUp }
}
