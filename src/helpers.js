export const onKeyPress = (slides, setCurrent, current) => evt => {
  let { slide, step } = current
  switch (evt.code) {
    case 'ArrowLeft':
      slide--
      step = 1
      break
    case 'ArrowRight':
      slide++
      step = 1
      break
    case 'ArrowUp':
      step--
      if (step === 0 && slide > 1) {
        slide--
        step = slides[slide - 1].steps
      }
      break
    case 'ArrowDown':
      step++
      if (step > slides[slide - 1].steps) {
        slide++
        step = 1
      }
      break
    default:
      return
  }

  slide = Math.max(slide, 1)
  slide = Math.min(slide, slides.length)
  step = Math.max(step, 1)

  setCurrent({ slide, step })
}
