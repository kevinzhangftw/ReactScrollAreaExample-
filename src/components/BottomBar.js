import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const getStyles = (props) => ({
  button: {
    position: 'absolute',
    width: '80%',
    height: '60%',
    bottom: 20
  }
})

const BottomBar = ({ style, onCheckoutButtonClick }) => {
  const styles = getStyles()

  return (
    <Toolbar style={style}>
      <Button style={styles.button} variant="raised" color="primary">
          Looks Good! Checkout
      </Button>
    </Toolbar>
  )
}


export default BottomBar
