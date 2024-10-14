'use client'
import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

const CategoryCard = ({ category }: { category: Category }) => {
  const { setCategoryFilter } = useFilter()
  const imageUrl = category.media as Media
  return (
    <Link
      className={classes.card}
      href="/products"
      style={{ backgroundImage: `url(${imageUrl.url})` }}
      onClick={() => {
        setCategoryFilter([category.id])
      }}
    >
      <div className={classes.titleHolder}>
        <h5 className={classes.cardTitle}>{category.title}</h5>
      </div>
    </Link>
  )
}

export default CategoryCard
