import React, { Component } from 'react'
import Modal from 'react-modal'
import BottomBar from './components/BottomBar'

const getStyles = (props) => ({
  parent: {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%'
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
      backgroundColor: 'rgba(255,0,0,0.5)'
    }
  }
})

class App extends Component {
  state = {
    open: false,
  }

  handleOpenModal = () => {
    this.setState({ open: true })
  }

  handleCloseModal = () => {
    this.setState({ open: false })
  }

  handleBottomBarButtonClick = () => {
    console.log("handleBottomBarButtonClick")
    this.setState({
      open: false
    })
  }

  stopPropagation = (e) => {
    console.log('stopping propagation')
    e.stopPropagation()
  }

  disableScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  render() {
    const styles = getStyles()
    const { open } = this.state
    // const scrollEnabled = !open
    return (
      <div style={styles.parent}>
        <button onClick={this.handleOpenModal}>Open modal</button>
        <Modal
          isOpen={open}
          onRequestClose={this.handleCloseModal}
          style={styles.modal}
          contentLabel="Example Modal"
          onAfterOpen={this.disableScroll}
        >
          <div
            onClick={this.stopPropagation}
            onTouchStart={this.stopPropagation}
            onTouchMove={this.stopPropagation}
            onScroll={this.stopPropagation}
            ref={(r) => r.focus()}
          >
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
          <BottomBar
            style={styles.bar}
            onButtonClick={this.handleBottomBarButtonClick}/>
          </div>
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
        <h1>parent text</h1>
        <h1>parent text</h1>
        <h1>parent text</h1>
      </div>
    );
  }
}

export default App;
