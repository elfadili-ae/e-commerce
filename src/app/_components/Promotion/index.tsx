'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const TimeBox = ({ value, label }: { value: number; label: string }) => {
  return (
    <li className={classes.timer}>
      <h3>{value}</h3>
      <p>{label}</p>
    </li>
  )
}

const Promotion = () => {
  const [promoTime, setPromoTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set a future time (e.g., 4 days from now)
    const futureDate = Date.now() + 4 * 24 * 60 * 60 * 1000

    const timeDown = setInterval(() => {
      const now = Date.now()
      const timeLeft = futureDate - now

      if (timeLeft <= 0) {
        clearInterval(timeDown)
      } else {
        // Calculate the time components
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

        // Update the state with the remaining time
        setPromoTime({
          days,
          hours,
          minutes,
          seconds,
        })
      }
    }, 1000)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(timeDown)
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Upgrade your gear with unbeatable offers on the latest laptops, smartphones, and
          accessories. Whether you're a gamer, professional, or tech enthusiast, our exclusive deals
          will power you up!
        </p>
      </div>
      <ul className={classes.promoLimit}>
        <TimeBox value={promoTime.days} label="Days" />
        <TimeBox value={promoTime.hours} label="Hours" />
        <TimeBox value={promoTime.minutes} label="Minutes" />
        <TimeBox value={promoTime.seconds} label="Seconds" />
      </ul>
    </section>
  )
}

export default Promotion
