import { Search } from './Search';

function Table ({title, cars, sortData, detailRow, rowItem, handleTest, dateItem, onSearchSend}) {

    const comfortPlus = 'Комфорт+'
    
    return (
        <div className="table">
            <Search onSearchSend={onSearchSend} />
            <div className="table__search">
                    <button className='table__button table__text' onClick={()=> {sortData('name')}}>Марка и модель</button>
                        {
                            title.map(t =>(
                                <span className='table__title' key={t}>{t}</span>
                            ))
                        }
                </div>
            {
                cars.map(c => (
                    <div className='table__wrapper'>
                        <span className='table__name' key={c.model}>{c.mark} {c.model}</span>
                        {c.tariffs.Стандарт ? <button className="table__text" data-value={c.tariffs.Стандарт.year} onClick={(e) => {handleTest(e); detailRow(c)}}>{c.tariffs.Стандарт.year}</button> : <span className="table__text">—</span>}
                        {c.tariffs.Комфорт ? <button className="table__text" data-value={c.tariffs.Комфорт.year} onClick={(e) => {handleTest(e); detailRow(c)}}>{c.tariffs.Комфорт.year}</button> : <span className="table__text">—</span>}
                        {c.tariffs.Бизнес ? <button className="table__text" data-value={c.tariffs.Бизнес.year} onClick={(e) => {handleTest(e); detailRow(c)}}>{c.tariffs.Бизнес.year}</button> : <span className="table__text">—</span>}
                        {c.tariffs[comfortPlus] ? <button className="table__text" data-value={c.tariffs[comfortPlus].year} onClick={(e) => {handleTest(e); detailRow(c)}}>{c.tariffs[comfortPlus].year}</button> : <span className="table__text">—</span>}
                        {c.tariffs.Эконом ? <button className="table__text" data-value={c.tariffs.Эконом.year} onClick={(e) => {handleTest(e); detailRow(c)}}>{c.tariffs.Эконом.year}</button> : <span className="table__text">—</span>}
                        {c.tariffs.Минивен ? <button className="table__text" data-value={c.tariffs.Минивен.year} onClick={(e) => {handleTest(e); detailRow(c)}}>{c.tariffs.Минивен.year}</button> : <span className="table__text">—</span>}
                        {c.tariffs.Лайт ? <button className="table__text"data-value={c.tariffs.Лайт.year} onClick={(e) => {handleTest(e); detailRow(c)}}>{c.tariffs.Лайт.year}</button> : <span className="table__text">—</span>}
                    </div>
                ))
            }
            <span className='table__info'>Выбран автомобиль {rowItem.mark} {rowItem.model} {dateItem} года выпуска</span>
            {console.log(rowItem)}
        </div>
    )

}

export {Table}