import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

import LoginForm from './LoginForm'

import classes from './index.module.scss'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <div className={classes.login}>
      <div className={classes.leftContainer}>
        <div className={classes.logo}>
          <Link href="/">
            <Image src="/pixel-pulse-white.png" alt="pixel pulse logo" width={128} height={50} />
          </Link>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.formWrap}>
          <RenderParams className={classes.params} />
          <h5>Log in</h5>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
