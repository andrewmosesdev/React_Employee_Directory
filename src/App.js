import { Component } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import TableItem from "./components/TableItem";
import API from "./utils/API";

class App extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    API.fetchEmployees()
      .then((res) => {
        console.log(res.data);
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Container>
          <Table>
            {this.state.results.map((result, i) => (
              <TableItem
                number={i + 1}
                key={result.login.uuid}
                name={result.name.first + " " + result.name.last}
                phone={result.phone}
                email={result.email}
                picture={result.picture.medium}
              ></TableItem>
            ))}
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
