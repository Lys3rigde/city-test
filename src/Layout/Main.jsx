
import { Table } from '../Components/Table';
import { useEffect, useState } from 'react';
import { Search } from '../Components/Search';

export const Main = () => {
    const [title, setTitle] = useState([]);
    const [cars, setCars] = useState([]);
    const [rowItem, setRowItem] = useState('');
    const [dateItem, setDateItem] = useState('');
    const [searchText, setSearchText] = useState('');
    const sortData = (field) => {
        const carsData = cars.concat();
        const sortCars = carsData.sort((a,b) => {return a[field] > b[field] ? 1 : -1})
        setCars(sortCars);
    }

    const detailRow = (row) => {
        setRowItem(row);
    };

    const handleTest = (e) => {
        console.log(e.target.dataset.value);
        setDateItem(e.target.dataset.value)
    }

    const onSearchSend = (text) => {
        if(!text) {
            return cars;
        }
        return cars.filter(
            el=>{
                el['mark'].includes(text)
            }
        )
    };

    const SearchSend = onSearchSend();
    console.log(SearchSend);
    
    useEffect(() => {
        fetch(`https://city-mobil.ru/api/cars`) 
        .then(response => response.json())
        .then(data => {
            setTitle(data.tariffs_list)
            setCars(data.cars)
        })
    }, [])

        return (
        <div className='main'>
                <Table title={title} cars={cars} sortData={sortData} detailRow={detailRow} rowItem={rowItem} handleTest={handleTest} dateItem={dateItem} onSearchSend={onSearchSend} />
        </div>  
    );
};