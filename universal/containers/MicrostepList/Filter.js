import React from 'react'
import { connect } from 'react-redux'
import { updateFilter, KEY } from 'modules/MicrostepsFilter'
import styles from './styles'

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
      <div className={styles.filterContainer}>
        <p className={styles.filterDescription}>Search for a microstep and click the link to copy</p>
        <div className={styles.inputContainer}>
          <span aria-hidden='true' className={styles.inputHighlight}>
            {this.props.filter}
          </span>
          <input
            autoFocus
            placeholder='Search Microsteps'
            className={styles.input}
            type='text'
            value={this.props.filter}
            onChange={this.updateFilter}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filter: state[KEY].filter
})

export default connect(mapStateToProps)(SearchForm)
