import React, {Component} from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    increase = () => {
        const {count} = this.state
        console.log(`before : ${count}`)
        this.setState( { count : count + 1 })
        console.log(`after : ${count}`)
    }



    render() {
        console.log('child')
        const {count} = this.state
        console.log(`state in render f : ${count}`)
        return (
            <>
                <h1>{count}</h1>
                <button type="button" onClick={this.increase}>increase counting</button>
            </>
        )
    }
}
export default Counter;