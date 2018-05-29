import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Scrollable from '../src/utilities/ScrollWrapper'

const getStyles = (props) => ({
  root: {
    padding: '0 20px 80px 20px',
    position: 'absolute',
    width: '100%'
  },
  button: {
    position: 'fixed',
    width: '100%',
    top: 'auto',
    right: '0',
    left: '0',
    bottom: '0',
    minHeight: 100
  }
})

class App extends Component {
  render() {
    const styles = getStyles()
    return (
      <div className="App">
        <Scrollable style={styles.root}>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
          <h1>random text</h1>
        </Scrollable>

        <Button style={styles.button} variant="raised" color="primary">
          Looks Good! Checkout
        </Button>
      </div>
    );
  }
}

export default App;
