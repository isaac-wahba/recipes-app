import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchTerm, clearSearchTerm, selectSearchTerm } from './searchTermSlice.js';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';


export const SearchTerm = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div id="search-container">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search recipes"
            />
            {searchTerm.length > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                >
                    <img src={clearIconUrl} alt="" />
                </button>
            )}
        </div>
    );
};