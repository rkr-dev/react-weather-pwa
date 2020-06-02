import React,{useState,useEffect} from 'react';
import {getWeather} from './services/weatherAPI';
import {Search} from './components/Search/Search';
import {WeatherCard} from './components/WeatherCard/WeatherCard';
import styles from './App.module.css';

export const App = () => {
const [data,setData] = useState({});
const [query, setQuery] = useState('Tellicherry');

const handleSearch = (str) => {
    setQuery(str);
}

const getWeatherData = async () => {
    const data = await getWeather(query)
    data && setData(data)
}

useEffect(() => {
    getWeatherData()
},[query])

return (<div className={styles.App}>
        <div className={styles.container}>
        <Search setSearchTerm={handleSearch}/>
        <WeatherCard data={data}/>
        </div>
</div>)
}