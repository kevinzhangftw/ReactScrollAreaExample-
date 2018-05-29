import React, { PureComponent as Component } from 'react'

// This component allows for declarativly setting the scroll position
// of an element using scrollLeft and scrolLTop props

class ScrollWrapper extends Component {
  constructor (props) {
    super(props)

    this.scrollableElement = null
  }

  // Lifecylce

  componentDidMount () {
    this.scrollableElement.scrollLeft = this.props.scrollLeft
    this.scrollableElement.scrollTop = this.props.scrollTop
  }

  componentDidUpdate (prevProps) {
    if (prevProps.scrollLeft !== this.props.scrollLeft) {
      this.scrollableElement.scrollLeft = this.props.scrollLeft
    }

    if (prevProps.scrollTop !== this.props.scrollTop) {
      this.scrollableElement.scrollTop = this.props.scrollTop
    }
  }

  // Actions

  setRef = (ref) => {
    this.scrollableElement = ref
  }

  // Rendering

  render () {
    const { style } = this.props

    return (
      <div ref={this.setRef} style={style}>
        {this.props.children}
      </div>
    )
  }
}

// ScrollWrapper.propTypes = {
//   children: React.PropTypes.node,
//   style: React.PropTypes.object,
//   scrollLeft: React.PropTypes.number,
//   scrollTop: React.PropTypes.number
// }

export default ScrollWrapper
