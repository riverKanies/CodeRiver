import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

import imageComputer from './assets/computer.png'
import imageGraph from './assets/graphs.png'
import imageCloud from './assets/cloud.png'

class Employers extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Employers'
          subheader='The best life insurance products.  Now for everyone.'
          icons={[
            {image: imageComputer, caption: 'PlanMade integrates with your benefits administration system bringing financial wellness to the forefront of your benefits package.'},
            {image: imageGraph, caption: 'Increase employee engagement and satisfaction with the best financial protection products in the market.'},
            {image: imageCloud, caption: 'Our web-based platform means zero paper and the ability for employees to engage away from work.'}
          ]}
          sections={[
            {heading: 'Benefits administration integration', body: "Our goal is to make the absolute best financial products available for every worker, no matter their income.  PlanMade is offered alongside your other benefits making it easier for employees to find the coverage they need.  Drop us a line to see what an integration would look like for your company."},
            {heading: "Financial wellness is more than a buzzword", body: "Let’s face it, traditional group life insurance isn’t the best fit for every employee.  Driving meaningful change in the financial lives of our workforce starts with top-notch financial protection products.  Employees are asking more questions about rates, fees, and other options available in the market.  PlanMade meets the demand for more individualized financial protection at the best possible cost.  Attract and retain the best talent out there—PlanMade will help."},
            {heading: "Let us handle the legwork", body: "A valuable workplace benefit has never been this easy.  Because PlanMade offers individual products with payment deducted from individuals’ bank accounts, there is no administrative work on the HR staff.  No payroll deductions or monthly bills.  Additionally, we take care of all service requests from your employees."},
          ]}
          links={[
            {label: 'Employees', url: '/employees'},
            {label: 'Brokers', url: '/brokers'}
          ]}
        />
      </main>
    )
  }
}

export default Employers
