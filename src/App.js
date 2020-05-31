import React from "react";
import styles from "./App.module.css";
import { Chart, CountryPicker, Cards } from "./components";
import fetchData from "./api/index";
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
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
