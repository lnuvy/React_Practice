import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Button from './Button'
import words from './dummyData2'  // 더미데이터
import Word from './Word'

class App extends Component {

  state = {
    toggle: true,
    words: words,
    mean: ""
  }

  toggleScreenMode = () => {
    this.setState({toggle: !this.state.toggle})
  }


  // 단어장 삭제 이벤트핸들러 함수
  handleRemove = (id, e) => {
    const word = e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    console.log(id)
    console.log(word)     // 버튼 엘리먼트

    alert(`${word} 를 삭제 하시겠습니까?`)

    const words_filtered = this.state.words.filter( (w, index) => index !== id )
    this.setState({words: words_filtered})
  }

  handleShow = (id, e) => {
    const word = e.target.previousSibling.previousSibling.innerText
    console.log(id)
    console.log(word)

    this.setState({mean: word})
  }

  render() {
    const { toggle } = this.state
    const { words } = this.state
    const { mean } = this.state

    return (
      <div className={`normal ${toggle ? "" : "dark"}`}>
        <Button handleClick={this.toggleScreenMode} position="gooseok">{ toggle ? "DARK" : "LIGHT" }</Button>
        <h1>단어장</h1>
        <hr/>
        {words.map( (w, id) => {
          return (
            <Word key={id} w={w} handleRemove={(e) => this.handleRemove(id, e)} handleShow={(e) => this.handleShow(id, e)}></Word>
          )
        })}
      </div>
    )
  }
}
export default App;
