import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class Privacy extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Privacy Policy'
          sections={[
            {body: "Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website."},
            {heading: "What personal information do we collect from the people that visit our blog, website or app?", body: "When quoting or applying on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, date of birth, gender, tobacco use or other details to help you with your experience."},
            {heading: "When do we collect information?", body: "We collect information from you when you enter information on our site."},
            {heading: 'How do we use your information?', paragraphs: [
              "We may use the information we collect from you when you quote, apply, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:",
              " • To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.",
              " • To send periodic emails regarding your order or other products and services.",
              " • To follow up with them after correspondence (live chat, email or phone inquiries)"
            ]},
            {heading: "How do we protect your information?", paragraphs: [
              "We do not use vulnerability scanning and/or scanning to PCI standards. We only provide articles and information. We never ask for credit card numbers. We use regular Malware Scanning.",
              "Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.",
              "We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information."
            ]},
            {heading: "Do we use 'cookies'?", body: "Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future."},
            {heading: "We use cookies to:", paragraphs: [
              " • Keep track of advertisements.",
              " • Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.",
              "You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.",
              "If you turn cookies off, some features will be disabled. It won't affect the user's experience that make your site experience more efficient and may not function properly.",
              "However, you will still be able to get a quote and start an application."
            ]},
            {heading: "Third-party disclosure", paragraphs: [
              "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.",
              "However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.",
            ]},
            {heading: "Third-party links", body: "We do not include or offer third-party products or services on our website."},
            {heading: "Google", paragraphs: [
              "Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en",
              "We use Google AdSense Advertising on our website.",
              "Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy."
            ]},
            {heading: "We have implemented the following:", paragraphs: [
              " • Remarketing with Google AdSense",
              " • Google Display Network Impression Reporting",
              "We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website."
            ]},
            {heading: "Opting out:", body: "Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on."},
            {heading: "California Online Privacy Protection Act", paragraphs: [
              "CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf",
              "According to CalOPPA, we agree to the following: Users can visit our site anonymously. Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website. Our Privacy Policy link includes the word 'Privacy' and can be easily be found on the page specified above.",
              "You will be notified of any Privacy Policy changes:",
              " • On our Privacy Policy Page",
              "Can change your personal information:",
              " • By emailing us",
              " • By calling us"
            ]},
            {heading: "How does our site handle Do Not Track signals?", body: "We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place."},
            {heading: "Does our site allow third-party behavioral tracking?", body: "It's also important to note that we allow third-party behavioral tracking."},
            {heading: "COPPA (Children Online Privacy Protection Act)", body: "When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online."},
            {heading: "We do not specifically market to children under the age of 13 years old.  Nor do we condone use of certain features of the site by anyone under 18 years of age."},
            {heading: "Fair Information Practices", body: "The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information."},
            {heading: "In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:", body: "We will notify you via email within 7 business days."},
            {heading: "CAN SPAM Act", body: "The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations."},
            {heading: "We collect your email address in order to:", paragraphs: [
              " • Send information, respond to inquiries, and/or other requests or questions.",
              " • Process orders and to send information and updates pertaining to orders.",
              " • Send you additional information related to your product and/or service.",
              " • Market to our mailing list or continue to send emails to our clients after the original transaction has occurred."
            ]},
            {heading: "To be in accordance with CANSPAM, we agree to the following:", paragraphs: [
              " • Not use false or misleading subjects or email addresses.",
              " • Identify the message as an advertisement in some reasonable way.",
              " • Include the physical address of our business or site headquarters.",
              " • Monitor third-party email marketing services for compliance, if one is used.",
              " • Honor opt-out/unsubscribe requests quickly.",
              " • Allow users to unsubscribe by using the link at the bottom of each email.",
              "If at any time you would like to unsubscribe from receiving future emails, you can email us atteam@myplanmade.com and we will promptly remove you from ALL correspondence."
            ]},
            {heading: "Contacting Us", paragraphs: [
              "If there are any questions regarding this privacy policy, you may contact us using the information below.",
              "www.myplanmade.com",
              "711 Signal Mountain Rd #148 Chattanooga, Tennessee 37405 United States",
              "team@myplanamde.com",
              "Last Edited on 2017-02-07"
            ]}
          ]}
        />
      </main>
    )
  }
}

export default Privacy
