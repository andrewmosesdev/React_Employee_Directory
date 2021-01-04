import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import TableItem from "./components/TableItem";
import API from "./utils/API";

export default function App() {
  // set initial states to empty string/array (sub for componentOnMount)
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);

  // API hook sets results on mount
  useEffect(() => {
    API.fetchEmployees()
      .then((res) => setResults(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (sort) {
      ascendingSort("first", results);
    } else {
      descendingSort("first", results);
    }
    console.log(sort);
    // eslint-disable-next-line
  }, [sort]);

  const ascendingSort = (prop, arr) => {
    arr.sort((a, b) => {
      if (a.name[prop] < b.name[prop]) {
        return -1;
      } else if (a.name[prop] > b.name[prop]) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const descendingSort = (prop, arr) => {
    arr.sort((a, b) => {
      if (a.name[prop] < b.name[prop]) {
        return 1;
      } else if (a.name[prop] > b.name[prop]) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="App">
      <div className="row">
        <Navbar></Navbar>
      </div>
      <Container className="container">
        <div className="row">
          <form>
            <label>
              Filter by Name:
              <input
                type="text"
                className="searchBar"
                value={search}
                onChange={(event) => {
                  // set search state to the value in the input field
                  setSearch(event.target.value);
                }}
              />
            </label>
          </form>
        </div>

        <div className="row">
          <Table sort={sort} setSort={setSort}>
            {/* if search length < 1, map through results and create table items for every result  */}
            {search.length < 1
              ? results.map((result, i) => (
                  <TableItem
                    number={i}
                    key={result.login.uuid}
                    name={result.name.first + " " + result.name.last}
                    phone={result.phone}
                    email={result.email}
                    picture={result.picture.medium}
                  ></TableItem>
                ))
              : // else map through results and return those results that match search
                // eslint-disable-next-line
                results.map((result, i) => {
                  if (
                    result.name.first
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return (
                      <TableItem
                        number={i}
                        key={result.login.uuid}
                        name={result.name.first + " " + result.name.last}
                        phone={result.phone}
                        email={result.email}
                        picture={result.picture.medium}
                      ></TableItem>
                    );
                  }
                })}
          </Table>
        </div>
      </Container>
    </div>
  );
}
