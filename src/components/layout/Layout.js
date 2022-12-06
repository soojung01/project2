import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

function Layout(props) {
  return <LayoutStyle>{props.children}</LayoutStyle>;
}

export default Layout;
