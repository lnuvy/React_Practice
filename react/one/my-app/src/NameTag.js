import React, { Component } from 'react'

class NameTage extends Component {
    state = {
        name : 'initial name'
    }

    // setState 사용
    changeName = () => {
        this.setState({name: 'changed name'})
    }

    // state 직접변경시 경고메세지 뜨면서 작동안함
    // changeName = () => {
    //     this.state.name = "changed name"
    // }



    render(){
        console.log('NameTag')
        const { name } = this.state
        return (
            <>
                <h1>{name}</h1>
                <button type="button" onClick={() => this.changeName()}>change name!</button>
            </>
        )
    }
}
export default NameTage;