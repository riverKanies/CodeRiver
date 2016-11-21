import React from 'react'
import styles from './styles'

type Props = {
  score: number
};

const surveyResults = [
  {
    header: "Burned Out Zombie",
    description: "You’re walking among us, but you’re not quite alive! You’re burning out and you need to course correct immediately.",
    range: [1,10]
  },
  {
    header: "Surviving, but not Thriving",
    description: "You’re getting through each day okay, but not really thriving. It’s time to take control of your life, and go from knowing what you need to do to actually doing it.",
    range: [11,20]
  },
  {
    header: "Part-Time Thriving",
    description: "Sometimes you’re thriving, sometimes you’re not. You’ve got some key building blocks, but you need a plan to create the life you want.",
    range: [21,30]
  },
  {
    header: "Thriving, but Room for More Thriving",
    description: "You’re mostly thriving, but with some small changes and microsteps, you could take it to the top level.",
    range: [31,40]
  },
  {
    header: "Thrive Champion",
    description: "Congratulations – you’re a Super Thriver! What you need to do now is lock in those habits for the long-term.",
    range: [41,50]
  }
];

const mapTextToScore = (score) => 
  surveyResults.find( obj => score >= obj.range[0] && score <= obj.range[1] )

const PulseScore = ({
  score
}: Props) => {
  const content = mapTextToScore(score);

  return (
    <div className="PulseScore">
      <h2> {content.header} </h2>
      <p> {content.description} </p>
    </div>
  )
}

PulseScore.defaultProps = {
  score: 1
}

export default PulseScore
