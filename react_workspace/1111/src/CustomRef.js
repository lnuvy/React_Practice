import React from "react";
import { Component } from "react";
import Button from "./Button";

class CustomRef extends Component {
    constructor(props) {
        super(props)
        this.fileUpload = React.createRef()
    }

    openFileUploadWindow  = () => {
        // console.log(this.fileUpload.current)
        this.fileUpload.current.click()
    }

    render() {
        return (
            <div>
                <Button handleClick={this.openFileUploadWindow}>Upload</Button>
                <input type="file" ref={this.fileUpload} style={{visibility:'hidden'}}></input>
            </div>
        )
    }
}

export default CustomRef;