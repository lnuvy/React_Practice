import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CustomRef from './CustomRef';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <h1>File Upload</h1>
        <CustomRef></CustomRef>
      </div>
    )
    
  }
}

export default App;




// 할일 모달
/*
<Modal open={open}>
          <div className="header">할일을 추가하시겠습니까?</div>
          <div className="body">
            <label>할일 이름: <input type="text"/></label><br/>
            <label>할일 설명: <input type="text"/></label>
          </div>
          <div className="footer">
            <Button size="small">추가</Button>
            <Button size="small" handleClick={closeModal}>닫기</Button>
          </div>
        </Modal>
        */






// remove 모달
/*
import Modal from './Modal'
  import Button from './Button'
  state = {
    open: false,
    sentence: ""
  }

  openModal = () => {
    this.setState({ open: true })
  }
  // !this.state.open 토글

  closeModal = () => {
    this.setState({ open: false })
  }

  changeSen = () => {
    this.setState({ sentence: "removed Succesfully!"})
    this.closeModal()
  }

  render() {
    const {open} = this.state
    const {openModal, closeModal} = this
    const {sentence} = this.state
    return (
      <>
        <Button handleClick={openModal}>삭제 모달</Button>
        <h3>{sentence}</h3>
        <Modal open={open}>
          <div className="header">삭제하시겠습니까?</div>
          <div className="body">
            삭제하려면 확인을 누르세요
          </div>
          <div className="footer">
            <Button size="small" handleClick={this.changeSen}>확인</Button>
            <Button size="small" handleClick={closeModal}>닫기</Button>
          </div>
        </Modal>
      </>
    )
    
  }
*/