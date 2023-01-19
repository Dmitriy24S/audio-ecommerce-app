import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import CheckmarkIcon from '../../assets/CheckmarkIcon'
import styles from './Snackbar.module.css'

export interface SnackbarShape {
  show: () => void
  snackbarIsOpen: boolean
}

interface Props {
  message?: number
}

const Snackbar = forwardRef<SnackbarShape, Props>((props, ref) => {
  Snackbar.displayName = 'Snackbar'
  const { message }: Props = props
  const [showSnackbar, setShowSnackbar] = useState(false)
  // const [timeoutId, setTimeoutId] = useState<number | null>(null)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()
  const [progress, setProgress] = useState(1)
  const [duration, setDuration] = useState(3000)

  const style = {
    '--progress': progress,
    '--duration': duration + 'ms',
  } as React.CSSProperties

  useImperativeHandle(ref, () => ({
    show() {
      // console.log({ showSnackbar }) // false
      setShowSnackbar(true)
      // set default, reset progress bar state, for progress animation?
      setDuration(3000)
      setProgress(0)
      // console.log({ showSnackbar }) // false
      // start close snackbar timeout
      console.log('start close snackbar timeout')
      const newTimeoutId = setTimeout(() => {
        setShowSnackbar(false)
      }, 3000)
      setTimeoutId(newTimeoutId)
    },
    snackbarIsOpen: showSnackbar,
  }))

  useEffect(() => {
    // quick duration for reset of progress bar to 1? for new animation progress bar
    setDuration(1)
    setProgress(1)
    console.log('reset progress bar state')
    const timeout = setTimeout(() => {
      // set default, reset progress bar state, for progress animation?
      setDuration(3000)
      setProgress(0)
    }, 10)
    return () => {
      console.log('clear timeouts')
      clearTimeout(timeout)
      clearTimeout(timeoutId)
    }
  }, [timeoutId, showSnackbar])

  useEffect(() => {
    console.log({ progress })
  }, [progress])

  return (
    <div
      className={[styles.snackbar, showSnackbar ? styles.show : styles.hide].join(' ')}
    >
      <CheckmarkIcon />
      Item added x{message}
      <div className={styles.progress} style={style} />
    </div>
  )
})

export default Snackbar
