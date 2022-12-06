import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/modules/todos";
import styled from "styled-components";

const FormStyle = styled.form`
  background-color: #edecec;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;
const InputGroupStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const LabelStyle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const InputStyle = styled.input`
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 10px;
`;
const ButtonStyle = styled.button`
  color: white;
  background-color: #207b71;
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
`;

function Form() {
  const dispatch = useDispatch();

  const initial = {
    id: 0,
    title: "",
    contents: "",
    done: false,
  };
  const [todo, setTodo] = useState(initial);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "" || todo.contents.trim() === "") return;
    dispatch(addCard({ ...todo, id: nanoid() }));
    setTodo(initial);
  };
  return (
    <FormStyle onSubmit={onSubmitHandler}>
      <InputGroupStyle>
        <LabelStyle>제목</LabelStyle>
        <InputStyle
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <LabelStyle>내용</LabelStyle>
        <InputStyle
          name="contents"
          value={todo.contents}
          onChange={onChangeHandler}
        />
      </InputGroupStyle>
      <ButtonStyle>추가하기</ButtonStyle>
    </FormStyle>
  );
}

export default Form;
