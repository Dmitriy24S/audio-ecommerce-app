import Image from 'next/image'
import React from 'react'
import styles from './Categories.module.css'

const CategoriesButton = () => {
  return (
    <button className={styles.button}>
      Shop
      <Image
        src='/assets/shared/desktop/icon-arrow-right.svg'
        alt='arrow right'
        width={12}
        height={16}
      />
    </button>
  )
}

export default CategoriesButton
