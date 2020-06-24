import React, { useState, useEffect } from "react";
import { countries } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

function CountryPicker(props) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    };

    fetchCountries();
  }, [setFetchedCountries]);

  

  function handleChange(e){
    const n = e.target.value;
    props.handleCountryName(n);
    
    
  }

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect name='selectedCountry' onChange={handleChange}>
          <option value="global">Global</option>
          {fetchedCountries &&
            fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
