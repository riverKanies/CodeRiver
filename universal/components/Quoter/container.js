/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Quoter from './component'
import { KEY } from 'modules/Quoter'


type Props = {
}

// export class QuoterContainer extends React.Component {
//   render () {
//     return <Quoter />
//   }
// }

const mapStateToProps = (store) => (store[KEY])

export default connect(mapStateToProps)(Quoter)//(QuoterContainer)
