import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function RecoverPassword() {
  return (
    <div className={classes.recoverPassword}>
      <div className={classes.leftContainer}>
        <div className={classes.logo}>
          <Link href="/">
            <Image src="/pixel-pulse-white.png" alt="pixel pulse logo" width={128} height={50} />
          </Link>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.formWrap}>
          <RecoverPasswordForm />
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
