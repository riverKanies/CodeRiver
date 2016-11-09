import React from 'react'
import { connect } from 'react-redux'

import { updateFilter, KEY } from 'modules/MicrostepsFilter'

type Props = {
  dispatch: Function,
  filter: string
}

class SearchForm extends React.Component {
  props: Props

  constructor (props) {
    super(props)

    this.updateFilter = this.updateFilter.bind(this)
  }

  updateFilter (event) {
    const { dispatch } = this.props

    dispatch(updateFilter(event.target.value))
  }

  render () {
    return (
      <input
        type='text'
        placeholder='filter microsteps'
        value={this.props.filter}
        onChange={this.updateFilter}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  filter: state[KEY].filter
})

export default connect(mapStateToProps)(SearchForm)
