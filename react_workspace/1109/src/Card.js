import react from "react";
import { Component } from "react";
import Words from './dummyData2'

class Card extends Component {

    state = {
        count: 0
    }

    increaseCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount() {
        this.countID = setInterval(this.increaseCount, 1000)
    }


    render() {

        const { count } = this.state
        const word = Words[count%Words.length]
        return (
            <div className="App">
                <h3>Flash Card</h3>
                <h5>{word.word}</h5>
                <p>{word.meaning}</p>
            </div>
        )
    }

}

// const word = Words[]

//     return <div><h5>{Words.word}</h5><p>{Words.meaning}</p></div>
// }
export default Card;