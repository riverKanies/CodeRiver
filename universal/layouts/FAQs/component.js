import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class FAQs extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='FAQs'
          sections={[
            {heading: 'PlanMade is offered through my employer.  Who should I contact about my policy?', body: "We strongly encourage any employee to contact PlanMade directly for any reason regarding a life insurance policy purchased or applied-for through PlanMade."},
            {heading: "My employer doesn’t offer PlanMade.  Can I purchase from you directly?", paragraphs: [
              "Yes and no.  Let us explain:",
              "The employers we work with truly understand the value of financial wellness.  We believe employers are most adequately positioned to offer the best financial wellness products to their employees.  Because of this, we would rather be offered at work as part of your employee benefits package.",
              "However, we’re very aware that benefits aren’t offered at every job.  Additionally, we want to make sure individuals that are not employed (for any reason whatsoever) have access to the best life insurance.  In these scenarios, we’re more than willing to work with you directly.  If you fall into this category please feel free to contact us--we’ll come up with the best course of action."
            ]},
            {heading: "Will you share any of my information with third parties?", paragraphs: [
              "Great question! Imbedded in our DNA is a promise to never share, sell, or disseminate your information to any other individual or organization outside the scope of underwriting and issuing your life insurance policy.",
              "That’s a long way of saying your information is safe with us.  We don’t want anyone sharing our information--so we would never share yours."
            ]},
            {heading: "How does PlanMade get paid?", body: "We get paid commissions from the life insurance carriers directly.  These commissions are already included in the cost of coverage, so PlanMade will never charge any additional fees or commissions to you or your employers."},
            {heading: "How do I know I’m getting the lowest quote out there?", paragraphs: [
              "Life insurance is regulated at the state level, and all insurance rates (including life insurance) must be approved by each state’s respective regulating body.  Put another way, PlanMade cannot change the rates shown—but neither can any other insurance broker.",
              "However, this doesn’t mean rates with every carrier are the same! The beauty in working with a broker, as opposed to a captive agent, is that we can help you secure life insurance from the carrier with the lowest cost.  We encourage everyone to bring us quotes from another insurance agent—chances have it that we can find you something more affordable."
            ]},
            {heading: "I have [insert health condition]. Can I get approved for coverage?", paragraphs: [
              'This is one we hear from our clients every day.  The very broad answer is: “It really depends on your unique scenario, but I’m positive we can find the best life insurance option for you.”',
              "We’re intentionally vague here because no two individuals are the same.  However, in our years of experience, we have a pretty good understanding of which carriers are willing to underwrite particular medical conditions.  If you have a question particular to your condition, please feel free to give us a call or send us an email.  We promise this information is totally confidential and we’ll be able to advise you individually."
            ]},
            {heading: "I bought an expensive policy a while ago.  Can I buy one from you instead?", body: "Generally speaking, the answer is YES! However, there are some carriers and/or policies that might be in your best interest to keep instead of purchasing from PlanMade.  We would be more than happy to take a look at your current policy and let you know which direction might be best for your particular needs."},
            {heading: "I have a question that wasn’t answered here.  Where can I ask it?", body: "We love questions! Feel free to call or email us with any question you may have.  If you choose to email, we’ll try our best to get back to you in the same business day."}
          ]}
          links={[
            {label: 'Get a Quote', url: '/quote'},
            {label: 'Home', url: '/'}
          ]}
        />
      </main>
    )
  }
}

export default FAQs
