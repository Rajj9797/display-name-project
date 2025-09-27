// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from './CountriesCard.module.css';

// const CountriesCard = () => {
//     const url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
//     const [countries, setCountries] = useState([]);
//     const [filteredCountries, setFilteredCountries] = useState([]);
//     const [searchValue, setSearchValue] = useState("");

//     const fetchData = async () => {
//         try {
//             const res = await axios.get(url);
//             setCountries(res.data);
//             setFilteredCountries(res.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     const performSearch = (searchValue) => {
//         if (searchValue.trim() === "") {
//             setFilteredCountries(countries);
//         } else {
//             const filtered = countries.filter((country) =>
//                 country.common.toLowerCase().includes(searchValue.toLowerCase())
//             );
//             setFilteredCountries(filtered);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     useEffect(() => {
//         const debounce = setTimeout(() => {
//             performSearch(searchValue);
//         }, 300);

//         return () => clearTimeout(debounce);
//     }, [searchValue, countries]);

//     return (
//         <div>
//             <div className={styles.searchbar}>

//                 <input 
//                     placeholder="Search for countries..." 
//                     className={styles.search}
//                     value={searchValue}
//                     onChange={(e) => setSearchValue(e.target.value)}
//                     // className={styles.searchbar}
//                     data-testid="country-search-input"
//                 />
//             </div>

//             <div className={styles.cardcontainer} data-testid="countryCard">
//                 {filteredCountries.length > 0 ? (
//                     filteredCountries.map((country) => (
//                         <div key={country.common} className={styles.countryCard} data-testid="countryCard">
//                             <img src={country.png} alt={`${country.common} flag`} className={styles.flag} />
//                             <h5>{country.common}</h5>
//                         </div>
//                     ))
//                 ) : (
//                     <p data-testid="no-results"></p> 
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CountriesCard;


import './Countries.css';
import { useState, useEffect, useMemo } from 'react';

const Card = ({ image, title }) => {

    return (
        <div className='countryCard'>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
};

const Countries = () => {
    const [searchData, setSearchData] = useState('');
    const [countryList, setCountryList] = useState([]);
    // const [currentCountryList, setCurrentCountryList] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            setCountryList(data)
            // setCurrentCountryList(data);
        })
        .catch((error) => console.error('Error :',error))
    }, []);

    // function findCurrentList(searchStr) {
    //     return countryList.filter((country) => country.name.common.toLowerCase().includes(searchStr));
    // }


    // function handleChange(e) {
    //     setSearchData(e.target.value);

    //     const searchStr = e.target.value.toLowerCase();

    //     const currentSearchList = findCurrentList(searchStr);
        
    //     setCurrentCountryList(currentSearchList);
        
    // }

    // const findCurrentList = useMemo(() => {
    //     return searchStr => {
    //       return countryList.filter(country => country.name.common.toLowerCase().includes(searchStr))
    //     };
    // }, [searchData]);
    
    // function handleChange(e) {
    //     const searchStr = e.target.value.toLowerCase();
    //     setSearchData(e.target.value);
    
    //     const currentSearchList = findCurrentList(searchStr);
    //     setCurrentCountryList(currentSearchList);
    // }

    const currentCountryList = useMemo(() => {
        const searchStr = searchData.toLowerCase();
        return countryList.filter(country => country.name.common.toLowerCase().includes(searchStr));
    }, [searchData, countryList]);
    
    function handleChange(e) {
        setSearchData(e.target.value);
    }

    return (
        <div>
            <div className="inputDiv">
                <input 
                    type='text'
                    value={searchData}
                    placeholder='Search for countries'
                    onChange={handleChange}
                />
            </div>
            <hr />
            <div className="cardContainer">
                {
                    currentCountryList.map((country) => {
                        return <Card 
                            key={country.name.common}
                            title={country.name.common}
                            image={country.flags.png}
                        />
                    })
                }
                
            </div>
        </div>
    );
};

export default Countries;