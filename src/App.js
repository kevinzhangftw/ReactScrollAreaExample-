import React, { Component } from 'react'
import Scrollable from '../src/utilities/ScrollWrapper'
import BottomBar from './components/BottomBar'

const getStyles = (props) => ({
  root: {
    padding: '0 20px 80px 20px',
    position: 'absolute',
    width: '100%'
  },
  bar: {
    position: 'fixed',
    width: '100%',
    top: 'auto',
    right: '0',
    left: '0',
    bottom: '0',
    backgroundColor: 'rgba(255,0,0,0.5)',
    minHeight: 100,
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
        <BottomBar style={styles.bar}/>

      </div>
    );
  }
}

export default App;
