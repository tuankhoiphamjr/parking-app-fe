import React, { useEffect, useState } from "react";
import { makeData, Logo, Tips } from "./Utils";
import { matchSorter } from "match-sorter";
import { Link } from "react-router-dom";
import { UserApi } from "../../api";
import { Button } from "@material-ui/core";

// Import React Table
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

const CustomTable = () => {
      const [data, setData] = useState([]);
      useEffect(() => {
            const fetchData = async () => {
                  let data = await await UserApi.getAllUserInfo();
                  data = data.filter((element) => element.role !== "admin");
                  setData(data);
            };

            fetchData();
      }, []);
      return (
            <main>
                  <div className="main__container">
                        <div className="main-container-title">
                              <h1>Quản lý tài khoản</h1>
                        </div>
                        <ReactTable
                              data={data}
                              filterable
                              defaultFilterMethod={(filter, row) =>
                                    String(row[filter.id]) === filter.value
                              }
                              columns={[
                                    {
                                          Header: "Tên",
                                          columns: [
                                                {
                                                      Header: "Tên",
                                                      id: "firstName",
                                                      accessor: (d) =>
                                                            d.firstName,
                                                      filterMethod: (
                                                            filter,
                                                            rows
                                                      ) =>
                                                            matchSorter(
                                                                  rows,
                                                                  filter.value,
                                                                  {
                                                                        keys: [
                                                                              "firstName",
                                                                        ],
                                                                  }
                                                            ),
                                                      filterAll: true,
                                                },
                                                {
                                                      Header: "Họ",
                                                      id: "lastName",
                                                      accessor: (d) =>
                                                            d.lastName,
                                                      filterMethod: (
                                                            filter,
                                                            rows
                                                      ) =>
                                                            matchSorter(
                                                                  rows,
                                                                  filter.value,
                                                                  {
                                                                        keys: [
                                                                              "lastName",
                                                                        ],
                                                                  }
                                                            ),
                                                      filterAll: true,
                                                },
                                          ],
                                    },
                                    {
                                          Header: "Thông tin",
                                          columns: [
                                                {
                                                      Header: "Số điện thoại",
                                                      id: "phoneNumber",
                                                      accessor: (d) =>
                                                            d.phoneNumber,
                                                      filterMethod: (
                                                            filter,
                                                            rows
                                                      ) =>
                                                            matchSorter(
                                                                  rows,
                                                                  filter.value,
                                                                  {
                                                                        keys: [
                                                                              "phoneNumber",
                                                                        ],
                                                                  }
                                                            ),
                                                      filterAll: true,
                                                },
                                                {
                                                      Header: "Email",
                                                      id: "email",
                                                      accessor: (d) => d.email,
                                                      filterMethod: (
                                                            filter,
                                                            rows
                                                      ) =>
                                                            matchSorter(
                                                                  rows,
                                                                  filter.value,
                                                                  {
                                                                        keys: [
                                                                              "email",
                                                                        ],
                                                                  }
                                                            ),
                                                      filterAll: true,
                                                },
                                                {
                                                      Header: "Loại tài khoản",
                                                      accessor: "role",
                                                      id: "role",
                                                      Cell: ({ value }) => (
                                                            <div
                                                                  style={{
                                                                        textAlign:
                                                                              "center",
                                                                  }}
                                                            >
                                                                  {value ===
                                                                  "owner"
                                                                        ? "Chủ bãi"
                                                                        : "Người dùng"}
                                                            </div>
                                                      ),
                                                      filterMethod: (
                                                            filter,
                                                            row
                                                      ) => {
                                                            if (
                                                                  filter.value ===
                                                                  "all"
                                                            ) {
                                                                  return true;
                                                            }
                                                            if (
                                                                  filter.value ===
                                                                  "owner"
                                                            ) {
                                                                  return (
                                                                        row[
                                                                              filter
                                                                                    .id
                                                                        ] ===
                                                                        "owner"
                                                                  );
                                                            }
                                                            return (
                                                                  row[
                                                                        filter
                                                                              .id
                                                                  ] === "user"
                                                            );
                                                      },
                                                      Filter: ({
                                                            filter,
                                                            onChange,
                                                      }) => (
                                                            <select
                                                                  onChange={(
                                                                        event
                                                                  ) =>
                                                                        onChange(
                                                                              event
                                                                                    .target
                                                                                    .value
                                                                        )
                                                                  }
                                                                  style={{
                                                                        width: "100%",
                                                                  }}
                                                                  value={
                                                                        filter
                                                                              ? filter.value
                                                                              : "all"
                                                                  }
                                                            >
                                                                  <option value="all">
                                                                        Tất cả
                                                                  </option>
                                                                  <option value="owner">
                                                                        Chủ bãi
                                                                  </option>
                                                                  <option value="user">
                                                                        Người
                                                                        dùng
                                                                  </option>
                                                            </select>
                                                      ),
                                                },
                                                {
                                                      Header: "Tác vụ",
                                                      id: "button",
                                                      Cell: (props) => {
                                                            return (
                                                                  <div
                                                                        style={{
                                                                              textAlign:
                                                                                    "center",
                                                                        }}
                                                                  >
                                                                        <Link
                                                                              to={{
                                                                                    pathname: `/users/${props.original._id}`,
                                                                                    data: props.original,
                                                                              }}
                                                                        >
                                                                              <Button
                                                                                    variant="contained"
                                                                                    color="primary"
                                                                                    size="small"
                                                                                    style={{fontSize:12}}
                                                                              >
                                                                                    Xem chi tiết
                                                                              </Button>
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
                              className="-striped -highlight table"
                        />
                  </div>
            </main>
      );
};

export default CustomTable;
