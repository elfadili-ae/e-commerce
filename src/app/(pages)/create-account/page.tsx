import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <div className={classes.createAccount}>
      <div className={classes.leftContainer}>
        <div className={classes.logo}>
          <Link href="/">
            <Image src="/pixel-pulse-white.png" alt="pixel pulse logo" width={128} height={50} />
          </Link>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.formWrap}>
          <h5>Create Account </h5>
          <RenderParams />
          <CreateAccountForm />
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
