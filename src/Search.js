import React, {useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({hideButton}) {

    const [input, setInput] = useState('');
    const [state, dispatch] = useStateValue();
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        history.push('/search');
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            {hideButton ? (
                <div className="search__buttonsHidden">
                    <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
            
        </form>
    )
}

export default Search
