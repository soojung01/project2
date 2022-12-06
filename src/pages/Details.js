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
  margin: -150px 0px 0px -200px;
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

  // const todo = useSelector((todo) => todo.todos.todos); // => todos => 2개
  // const detail = todo.find((todo) => todo.id === id);

  console.log(todo);

  //useEffect 쓰일때: API 호출 = 웹사이트에서 정보 들고옴

  useEffect(() => {
    dispatch(findId(id));
  }, [dispatch, id]);

  //1.[]없으면 상태가 업데이트 될때마다 실행
  //2.[]처음 렌더링 할 때만 실행
  //3.[dispatch, id] dispatch, id가 업데이트 될 때마다 실행
  //의존성 배열
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
