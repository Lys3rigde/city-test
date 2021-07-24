import { useState } from 'react';
import search from './search.svg';

export const Search = ({onSearchSend}) => {
const [searchValue, setSearchValue] = useState('');

    return (
        <div className='search'>
    <form className="search__wrapper">
        <input type="text" className='search__input' placeholder="Поиск" value = {searchValue} onChange={(e) => {setSearchValue(e.target.value)}} />
        <img src={search} alt="Search" className="search__icon" />
    </form>
    <button className='search__btn' onClick={()=>onSearchSend(searchValue)}>Найти</button>
</div>
    );
}