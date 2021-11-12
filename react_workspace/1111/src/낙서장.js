
class App extends Component {
    constructor(props) {
        super(props)
        this.fileupload = React.createRef()
    }
    openFileUploadWindow = () => {
        this.fileupload.current.click()
    }
  
    render() {
        return (
            <div className="App2">
                <h1>File Upload</h1>
                <Button handleClick={this.openFileUploadWindow}>Upload</Button>
                <input type="file" ref={this.fileupload} style={{visibility:'hidden'}}></input>
            </div>
        )
    }
  }
  
  export default App;