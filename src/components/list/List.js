import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCard, statCard } from "../../redux/modules/todos";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
const TodoStyle = styled.div`
  width: 270px;
  border: 4px solid #207b71;
  border-radius: 10px;
  padding: 12px 24px 24px 24px;
`;
const TodoTitleStyle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0;
`;
const DelBtnStyle = styled.button`
  width: 120px;
  height: 40px;
  background-color: white;
  border: 1px solid;
  border-radius: 10px;
  border-color: red;
  margin: 10px;
`;

const DoneBtnStyle = styled.button`
  width: 120px;
  height: 40px;
  background-color: white;
  border: 1px solid;
  border-radius: 10px;
  border-color: green;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

function List() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const cardDelete = (todoId) => {
    dispatch(delCard(todoId));
  };

  const cardDone = (todoId) => {
    dispatch(statCard(todoId));
  };

  return (
    <div>
      <h2>Working..🔥</h2>
      <CardStyle>
        {todos.map((todo) => {
          if (!todo.done) {
            return (
              <TodoStyle key={todo.id}>
                <LinkStyle to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </LinkStyle>
                <TodoTitleStyle>{todo.title}</TodoTitleStyle>
                <div>{todo.contents}</div>
                <DelBtnStyle onClick={() => cardDelete(todo.id)}>
                  삭제하기
                </DelBtnStyle>
                <DoneBtnStyle
                  borderColor="green"
                  onClick={() => cardDone(todo.id)}
                >
                  {todo.done ? "취소" : "완료"}
                </DoneBtnStyle>
              </TodoStyle>
            );
          } else return null;
        })}
      </CardStyle>
      <h2>done..🔥</h2>
      <CardStyle>
        {todos.map((todo) => {
          if (todo.done) {
            return (
              <TodoStyle key={todo.id}>
                <LinkStyle to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </LinkStyle>
                <TodoTitleStyle>{todo.title}</TodoTitleStyle>
                <div>{todo.contents}</div>
                <DelBtnStyle
                  className="btn btn--del"
                  onClick={() => cardDelete(todo.id)}
                >
                  삭제하기
                </DelBtnStyle>
                <DoneBtnStyle
                  className="btn btn--done"
                  onClick={() => cardDone(todo.id)}
                >
                  {todo.done ? "취소" : "완료"}
                </DoneBtnStyle>
              </TodoStyle>
            );
          } else return null;
        })}
      </CardStyle>
    </div>
  );
}

export default List;
