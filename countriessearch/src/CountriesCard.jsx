import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './CountriesCard.module.css';

const CountriesCard = () => {
    const url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const fetchData = async () => {
        try {
            const res = await axios.get(url);
            setCountries(res.data);
            setFilteredCountries(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const performSearch = (searchValue) => {
        if (searchValue.trim() === "") {
            setFilteredCountries(countries);
        } else {
            const filtered = countries.filter((country) =>
                country.common.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredCountries(filtered);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const debounce = setTimeout(() => {
            performSearch(searchValue);
        }, 300);

        return () => clearTimeout(debounce);
    }, [searchValue, countries]);

    return (
        <div>
            <div className={styles.searchbar}>

                <input 
                    placeholder="Search for countries..." 
                    className={styles.search}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    // className={styles.searchbar}
                    data-testid="country-search-input"
                />
            </div>

            <div className={styles.cardcontainer}>
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                        <div key={country.common} className={styles.countryCard} data-testid="countryCard">
                            <img src={country.png} alt={`${country.common} flag`} className={styles.flag} />
                            <h5>{country.common}</h5>
                        </div>
                    ))
                ) : (
                    <p data-testid="no-results"></p> 
                )}
            </div>
        </div>
    );
};

export default CountriesCard;
