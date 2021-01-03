import React, {useState, useEffect} from "react";
import "./App.css";
// import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import TableItem from "./components/TableItem";

function App() {
  const [users, setUsers] = useState(0);
  const [errors, setErrors] = useState(0);
  const [filteredUsers, setFilteredUsers] = useState(0);

  function userFilter(users) {
    // return users.filter(user => JSON.stringify(user))
    return (users)
  }

  async function fetchUsers() {
    const res = await fetch("https://randomuser.me/api/?results=15");
    res
    .json()
    .then(res => setUsers(res.results))
    .catch(err => setErrors(err))
  }

  useEffect(() => fetchUsers(), [errors])

  useEffect(() => {}, [setFilteredUsers])




  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
       
        <Table>
        {userFilter(users).map(user => {
          <TableItem
            name={user.name.first + " " + user.name.last}
          ></TableItem>
          })}
        </Table>
        
      </Container>
    </div>
  );
}


export default App;
