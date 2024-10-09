'use client'
import React, { useState } from 'react'
import { RemoveFromCartButton } from '../../../../_components/RemoveFromCartButton'
import classes from './index.module.scss'
import Link from 'next/link'
import { Media } from '../../../../_components/Media'
import { Price } from '../../../../_components/Price'
import { update } from '@react-spring/web'

// type CartItemPropTypes = {
//   product: Product
//   qty: number
//   metaImage: string | Media
//   addItemToCart: (item: { product?: string | Product; quantity?: number; id?: string }) => void
//   index: number
// }

const CartItem = ({ product, qty, metaImage, addItemToCart, index }) => {
  const [quantity, setQuantity] = useState(qty)
  const increaseQuantity = () => {
    if (quantity <= 4) {
      const updatedQty = quantity + 1
      setQuantity(updatedQty)
      addItemToCart({ product, quantity: updatedQty })
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const updatedQty = quantity - 1
      setQuantity(updatedQty)
      addItemToCart({ product, quantity: updatedQty })
    }
  }
  return (
    <div className={classes.cartItem}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No Image</span>}
        {metaImage && typeof metaImage != 'string' && (
          <Media className={classes.media} imgClassName={classes.image} resource={metaImage} />
        )}
      </Link>
      <div className={classes.content}>
        <div className={classes.titleWrapper}>
          <h6 className={classes.title}>
            {product.title.length > 60 ? `${product.title.slice(0, 60)}...` : product.title}
          </h6>
        </div>
        <div className={classes.priceQtyWrapper}>
          <Price product={product} />
          <div className={classes.quantityWrapper}>
            <button
              className={classes.quantityBtn}
              onClick={() => {
                decreaseQuantity()
              }}
            >
              -
            </button>
            <span className={classes.quantity}>{quantity}</span>
            <button
              className={classes.quantityBtn}
              onClick={() => {
                increaseQuantity()
              }}
            >
              +
            </button>
          </div>
          <RemoveFromCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

export default CartItem
