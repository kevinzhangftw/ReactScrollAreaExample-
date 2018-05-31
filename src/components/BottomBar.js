import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const getStyles = (props) => ({
  button: {
    position: 'fixed',
    top: 'auto',
    right: '0',
    left: '0',
    width: '80%',
    minHeight: 100,
    bottom: 20
  },
  bar: {
    backgroundColor: 'rgba(255,0,0,0.5)',

  }
})

class BottomBar extends Component {

  componentDidMount() {
    if (this.props.afterMount) {
      this.props.afterMount()
    }
  }

  componentWillUnmount() {
    if (this.props.afterUnmount) {
      this.props.afterUnmount()
    }
  }

  handleClick() {
    if (this.props.onButtonClick) {
      this.props.onButtonClick()
    }
  }

  render() {
    const styles = getStyles()
    return (
      <Button
      onClick={this.handleClick.bind(this)}
      style={styles.button} variant="raised" color="primary">
            Looks Good! Checkout
        </Button>
    )
  }

}


export default BottomBar
