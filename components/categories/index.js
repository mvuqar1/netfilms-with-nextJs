import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css";


export default function Categories({ categories }) {

 
  return (
    <div className={styles.category} >
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.id}`}
          className={styles.category}
        >
          <div className={styles.category}>{category.name}</div>
        </Link>
      ))}
    </div>
  )
}
