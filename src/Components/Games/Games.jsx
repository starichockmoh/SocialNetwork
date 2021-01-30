import React from "react";
import GamePost from './GamePost'
import {UpdateGameTextActionCreator, AddGameActionCreator} from "../../Redux/Reducers/Games.Reducer";


const Games = (props) => {
    let GamesPostElements = props.GamesState.GamesPosts.map(p => <GamePost Post={p.Post} author={p.author}/>)
    let GamePostChange = (e) =>{
        let text = e.target.value
        props.dispatch(UpdateGameTextActionCreator(text))
    }
    let AddPost = () => {
        props.dispatch(AddGameActionCreator())
    }
    return (
        <div>{GamesPostElements}
        <textarea placeholder='Enter text' onChange={GamePostChange} value={props.GamesState.NewGamePostText}/>
            <button onClick={AddPost}> ADD </button>
        </div>
    )
}

export default Games