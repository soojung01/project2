import React from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import List from "../components/list/List";
import Layout from "../components/layout/Layout";

function TodoList() {
  return (
    <div className="container">
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </div>
  );
}

export default TodoList;
