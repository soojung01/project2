import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  height: 60px;
  border: 1px solid #edecec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;

function Header() {
  return (
    <HeaderStyle>
      <div>My Todo List</div>
      <div>React</div>
    </HeaderStyle>
  );
}

export default Header;
