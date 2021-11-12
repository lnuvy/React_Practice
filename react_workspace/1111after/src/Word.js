import Button from "./Button"


function Word({ w, handleRemove, handleShow }) {


    const wordStyle = {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center'
    }

    const onRemove = (e) => {
        handleRemove(e)
    }

    const onShow = (e) => {
        handleShow(e)
    }

    return (
        <div style={wordStyle}>
        <h2>{w.word}</h2>&nbsp;&nbsp;
        <h2>{w.meaning}</h2>&nbsp;&nbsp;
        <Button size="small" handleClick={(e) => onShow(e)}>뜻 보기</Button>
        <Button size="small" handleClick={(e) => onRemove(e)}>DELETE</Button>
      </div>
    )
}
export default Word