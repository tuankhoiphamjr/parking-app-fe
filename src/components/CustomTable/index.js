import React, { useEffect, useState } from "react";
import { makeData, Logo, Tips } from "./Utils";
import { matchSorter } from "match-sorter";
import axios from "axios";
import { Link } from "react-router-dom";

// Import React Table
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

const CustomTable = () => {
  const getData = async () => {
    let res = await axios.get(`http://192.168.192.1:8080/api/user`, {
      headers: {
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOTE1ZGQxZTRiZGM1MmIwNDk4OTUyZCIsImlhdCI6MTYyNjU4NDQ4OSwiZXhwIjoxNjU4MTIwNDg5fQ.0dI3abE6TLKc5-shzxT0h296p6_czISMXnfJ8L42iy0",
      },
    });
    return res.data;
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getData();
      data = data.filter((element) => element.role !== "admin");
      setData(data);
    };

    fetchData();

    console.log("1231213")
  }, []);
  return (
    <div>
      <ReactTable
        data={data}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
        columns={[
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                id: "firstName",
                accessor: (d) => d.firstName,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["firstName"] }),
                filterAll: true,
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: (d) => d.lastName,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["lastName"] }),
                filterAll: true,
              },
            ],
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Phone Number",
                id: "phoneNumber",
                accessor: (d) => d.phoneNumber,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["phoneNumber"] }),
                filterAll: true,
              },
              {
                Header: "Email",
                id: "email",
                accessor: (d) => d.email,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["email"] }),
                filterAll: true,
              },
              {
                Header: "User Type",
                accessor: "role",
                id: "role",
                Cell: ({ value }) => (
                  <div style={{ textAlign: "center" }}>
                    {value === "owner" ? "owner" : "user"}
                  </div>
                ),
                filterMethod: (filter, row) => {
                  if (filter.value === "all") {
                    return true;
                  }
                  if (filter.value === "owner") {
                    return row[filter.id] === "owner";
                  }
                  return row[filter.id] === "user";
                },
                Filter: ({ filter, onChange }) => (
                  <select
                    onChange={(event) => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                  >
                    <option value="all">Show All</option>
                    <option value="owner">Owner</option>
                    <option value="user">User</option>
                  </select>
                ),
              },
              {
                Header: "Action",
                id: "button",
                Cell: (props) => {
                  return (
                    <div style={{textAlign: "center"}}>
                      <Link
                        to={{
                          pathname: `/users/${props.original._id}`,
                          data: props.original,
                        }}
                      >
                        <button onClick={(e) => console.log(123)}>View / Edit</button>
                      </Link>
                    </div>
                  );
                },
              },
            ],
          },
        ]}
        defaultPageSize={10}
        minRows={10}
        pageSizeOptions={[5, 10]}
        className="-striped -highlight"
      />
    </div>
  );
};

export default CustomTable;
