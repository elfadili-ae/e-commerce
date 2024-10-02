import Link from 'next/link'
import React from 'react'

import classes from './index.module.scss'
import { Category, Media } from '../../../../payload/payload-types'
import Image from 'next/image'

const CategoryCard = ({ category }: { category: Category }) => {
  const imageUrl = category.media as Media
  return (
    <Link
      className={classes.card}
      href="/products"
      style={{ backgroundImage: `url(${imageUrl.url})` }}
    >
      <div className={classes.titleHolder}>
        <h5 className={classes.cardTitle}>{category.title}</h5>
      </div>
    </Link>
  )
}

export default CategoryCard
