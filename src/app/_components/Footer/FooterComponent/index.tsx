'use client'

import React from 'react'
import { Footer, Media } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { inclusions, noHeaderFooterUrls } from '../../../../constants'
import Image from 'next/image'

import classes from './index.module.scss'
import Link from 'next/link'
import { Button } from '../../Button'
import { usePathname } from 'next/navigation'

const Footercomonent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) && classes.hide}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => {
            return (
              <li key={inclusion.title}>
                <Image src={inclusion.icon} alt={inclusion.title} width={64} height={64} />
                <h5>{inclusion.title}</h5>
                <p>{inclusion.description}</p>
              </li>
            )
          })}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter className={classes.gutter}>
          <Link className={classes.logo} href="/">
            <Image src="/pixel-pulse-white.png" alt="pixel pulse logo" width={160} height={40} />
          </Link>
          <p>{footer.copyright}</p>

          <div className={classes.socials}>
            {footer.navItems.map(item => {
              const icon = item.link.icon as Media
              return (
                <Button
                  el="link"
                  newTab={true}
                  href={item.link.url}
                  className={classes.social}
                  key={item.id}
                >
                  <Image src={icon?.url} alt={item.link.label} width={24} height={24} />
                </Button>
              )
            })}
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default Footercomonent
