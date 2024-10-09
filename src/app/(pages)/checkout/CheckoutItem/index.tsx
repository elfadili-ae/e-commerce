import React from 'react'

import classes from './index.module.scss'
import { Media } from '../../../_components/Media'
import Link from 'next/link'
import { Price } from '../../../_components/Price'

const CheckoutItem = ({ product, qty, metaImage }) => {
  return (
    <div className={classes.checkoutItem}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No Image</span>}
        {metaImage && typeof metaImage != 'string' && (
          <Media className={classes.media} imgClassName={classes.image} resource={metaImage} />
        )}
      </Link>
      <div className={classes.elements}>
        <h6 className={classes.product}>
          {product.title.length > 30 ? `${product.title}...` : product.title}
        </h6>
        <div className={classes.detailsWrapper}>
          <p className={classes.quantity}>x{qty}</p>
          <p className={classes.price}>
            <Price product={product} button={false} quantity={qty} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
