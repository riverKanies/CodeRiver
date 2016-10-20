import React from 'react'
import { connect } from 'react-redux'
import { loadMicrosteps } from 'modules/Products'

type Props = {
  dispatch: Function
}
export class ProductList extends React.Component {
  props: Props;

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(loadMicrosteps())
  }

  render () {
    return (
      <div>A Product List!</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps,
)(ProductList)
