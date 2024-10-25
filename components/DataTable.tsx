import { Table } from "antd";
import React from "react";

const data = [
  {
    key: "1",
    QuizName: "John Brown",
    isCorrect: "false",
    SolveDate: "11 Nov 2204",
  },
  {
    key: "2",
    QuizName: "Jim Green",
    isCorrect: "true",
    SolveDate: "11 Nov 2204",
  },
  {
    key: "3",
    QuizName: "Joe Black",
    isCorrect: "true",
    SolveDate: "11 Nov 2204",
  },
  {
    key: "4",
    QuizName: "Joe doe",
    isCorrect: "false",
    SolveDate: "11 Nov 2204",
  },
];

const columns = [
      {
        title: 'Quiz Name',
        dataIndex: 'QuizName',
        key: 'QuizName',
      },
      {
        title: 'is correct ?!',
        dataIndex: 'isCorrect',
        key: 'isCorrect',
      },
      {
        title: 'Solve Date',
        dataIndex: 'SolveDate',
        key: 'SolveDate',
      },
    ];

export const DataTable = () => {
  return <Table columns={columns} dataSource={data} />;
};
