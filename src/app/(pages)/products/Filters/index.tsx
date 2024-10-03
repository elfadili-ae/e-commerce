'use client'
import React from 'react'

import classes from './index.module.scss'
import { Category } from '../../../../payload/payload-types'
import Checkbox from '../../../_components/Checkbox'
import { useFilter } from '../../../_providers/Filter'
import { HR } from '../../../_components/HR'
import RadioButton from '../../../_components/Radio'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilter, setSort } = useFilter()
  const handleCategories = (value: string) => {
    if (categoryFilters.includes(value)) {
      const updatedcategoryFilters = categoryFilters.filter(cat => cat != value)
      setCategoryFilter(updatedcategoryFilters)
    } else {
      setCategoryFilter([...categoryFilters, value])
    }
  }
  const handleSorting = (value: string) => {
    setSort(value)
  }

  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map((cat: Category) => {
            const isSelected = categoryFilters.includes(cat.id)
            return (
              <Checkbox
                key={cat.id}
                label={cat.title}
                value={cat.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6>Sort By</h6>
        <div className={classes.categories}>
          <RadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSorting}
            groupName="sort"
          />
          <RadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSorting}
            groupName="sort"
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
