import React from "react";
import styles from "./App.module.css";
import { Chart, CountryPicker, Cards } from "./components";
import { fetchData } from "./api/index";
// function App() {
//   return (
//     <div className={styles.container}>
//       <Cards />
//       <Chart />
//       <CountryPicker />
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    data: {},
    country:''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryName = async (country)=>{
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData ,country:country});
    // console.log(fetchedData)
  }

  

  render() {
    const { data ,country} = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />

        <CountryPicker handleCountryName={this.handleCountryName}/>
        
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
