import React from 'react'
import { connect } from 'react-redux'
import { loadMicrosteps, KEY } from 'modules/Products'

type Props = {
  dispatch: Function,
  products: Object
}
export class ProductList extends React.Component {
  props: Props;

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(loadMicrosteps())
  }

  render () {
    const { list } = this.props.products

    return (
      <div>
        <h1>A Product List!</h1>
        <ul>
          {list.map(item => (<li>{item.title}</li>))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state[KEY]
  }
}

export default connect(
  mapStateToProps,
)(ProductList)
