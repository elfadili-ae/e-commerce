import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { RenderParams } from '../../_components/RenderParams'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'

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
          <Link href="/login" className={classes.backLink}>
            <Image src="/assets/icons/left-arrow.svg" alt="back button" width={24} height={24} />
            <p>Back</p>
          </Link>
          <RenderParams className={classes.params} />
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
