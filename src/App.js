import React, { Component } from 'react'
import Modal from 'react-modal'
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
    bottom: '0',
    backgroundColor: 'rgba(255,0,0,0.5)',
    minHeight: 100,
  },
  modal: {
    content : {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left:0,
      backgroundColor: '#222'
    }
  }
})

class App extends Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  bottomBarAfterMount = () => {
    console.log("bottomBarAfterMount")
    //TODO: disable scrolling on parent...
  }

  bottomBarAfterUnmount = () => {
    console.log("bottomBarAfterUnmount")
    //TODO: disable scrolling on parent...
  }

  onBottomBarButtonClick = () => {
    console.log("onBottomBarButtonClick")
    this.setState({
      open: false
    })
  }

  render() {
    const styles = getStyles()
    const { open } = this.state
    return (
      <div className="App">
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal
          isOpen={open}
          onRequestClose={this.onCloseModal}
          style={styles.modal}
          contentLabel="Example Modal"
        >
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
          <BottomBar
            style={styles.bar}
            afterMount={this.bottomBarAfterMount}
            afterUnount={this.bottomBarAfterUnmount}
            onButtonClick={this.onBottomBarButtonClick}/>
        </Modal>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>

      </div>
    );
  }
}

export default App;
