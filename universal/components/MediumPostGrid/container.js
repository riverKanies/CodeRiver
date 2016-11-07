/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { loadMediumPosts, KEY } from 'modules/MediumPosts'

type Props = {
  dispatch: Function,
  mediumPosts: Object
}

export class MediumPostsContainer extends React.Component {
  props: Props;

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(loadMediumPosts())
  }

  render () {
    const { list } = this.props.mediumPosts

    return (
      <div>
        <h1>you know...</h1>
        <ul>
          {list.map(item => (<li>{item.title}</li>))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mediumPosts: state[KEY]
  }
}

export default connect(
  mapStateToProps,
)(MediumPostsContainer)
