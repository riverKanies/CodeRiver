import React from 'react'
import styles from './styles'

const title = 'Extended Family'
const text = `Thrive Global is so grateful to all the amazing people who helped get us to launch.
              Thank you to Katherine Bahamonde, Dossey Richards, Mitchell Bradford III, Ross Cooperman, Molly Erdmann,
              Melanie Deziel, Andrew Fader, Anika George, Lance Gould, Levi Gray, Hannah Guzzo, Hannah Kay Herdlinger,
              and Erin Rosenblum, Lauren Rothberg for their commitment to every detail in getting our company to 
              launch. Our deep thanks and gratitude goes to Pia Celestino and Paula Celestino from Crea7ive,
              Ray Cheng and Gabe Whaley from MSCHF, Omri Bojko and Daria Rose from TVP, and the entire team at 
              Udacity led by Brandy Camacho for their technology expertise and innovative design.
              Special thanks to the amazing Jess Gonchor and Jeff Koons for designing our logo, which 
              so perfectly encapsulates who we are, and to Colleen Lake for bringing our beloved Phone Bed 
              to life. We’re so grateful to the entire team at Spartan for their hard work: Jacob Arellano,
              Jonathan Barber, Jonathan Bragdon, Bill Brock, Andrew Frank, Sheldon Grizzle, Tyler Jenks, Justin Kropp, 
              Nick Krzemienski, Sam McDavid, Brittany Metzler, Jesse Morris, Travis Palmer, Daniel Searles,
              Benjamin Wald, Gabe Weaver, Beau Wingfield, and Brian Zambrano.`
              
const title2 = 'Our Trainers & Facilitators'
const text2 = `And thank you to our incredible Thrive facilitators around the world: Veronica Alweiss,
              Kathy Anderson, Danny Bader, Mithra Bindhu, Jose Caraball, Peter Felsmann, Cesar Gamio,
              Kerry Held, Els van der Helm, Shveta Suri Kohli, Amber Krzys, LeeAnn Mallorie, John Marin,
              Kyoko Miyagawa, Chiharu Onishi, David Raynr, Mary Ann Somerville, Agapi Stassinopoulos, Steven Terry,
              Noriko Tsutagawa, Rob Ungar, Christopher Vincent, Kim Vincent, Margalit Ward, Cindy Whiston, and Sam Wigan.`

export const ExtendedFamilySection = () => {
  return (
    <div>
      <section className={styles.SectionContainer}>
        <h2 className={styles.title}>{title2}</h2>
        <p className={styles.content}> {text2} </p>
      </section>
      <section className={styles.SectionContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{text}</p>
      </section>
    </div>
  )
}

export default ExtendedFamilySection
