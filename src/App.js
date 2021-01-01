import React, { useState, useEffect } from "react";
import "./App.css";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import TableItem from "./components/TableItem";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
        <Table>
          <TableItem>
            
          </TableItem>
        </Table>
      </Container>
    </div>
  );
}

export default App;
