import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { findId } from "../redux/modules/todos.js";
import styled from "styled-components";

const DetailBox = styled.div`
  border: 2px solid #edecec;
  width: 600px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -200px 0px 0px -280px;
`;

const DetailHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const ButtonStyle = styled.button`
  width: 120px;
  height: 40px;
  background-color: white;
  border: 1px solid;
  border-radius: 10px;
  border-color: #edecec;
`;

const TitleStyle = styled.div`
  padding: 0 24px;
  font-size: 32px;
  font-weight: 600;
`;

const ContentsStyle = styled.div`
  padding: 0 24px;
  margin-top: 20px;
`;

function Details() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findId(id));
  }, [dispatch, id]);

  return (
    <DetailBox>
      <DetailHeader>
        <div>ID: {todo.id}</div>
        <ButtonStyle
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </ButtonStyle>
      </DetailHeader>
      <TitleStyle>{todo.title}</TitleStyle>
      <ContentsStyle>{todo.contents}</ContentsStyle>
    </DetailBox>
  );
}

export default Details;
