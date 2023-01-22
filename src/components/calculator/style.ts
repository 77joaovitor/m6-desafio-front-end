import styled from "styled-components";

const Container = styled.form`
  height: 70vh;
  width: 45vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  > h1 {
    font-size: 1.2rem;
    color: black;
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-start;
    justify-content: center;
  }
  span {
    font-size: 0.8rem;
    color: black;
  }
  .addDays {
    position: relative;
  }

  .inputAddDays {
    width: 5rem;
    height: 5rem;
  }
  #buttonDays {
    width: 40%;
    height: 3rem;
    background-color: #6868ff;
  }
  input {
    width: 100%;
    height: 3rem;
    background-color: white;
    border: 1px solid #c2e2ff;
    color: black;
    border-radius: 4px;
  }
  #infoDays {
    display: flex;
    flex-direction: initial;
    gap: 5px;
    .pDays {
      color: black;
    }
  }
  > button {
    width: 80%;
    height: 3rem;
    background-color: #6868ff;
  }
`;

export default Container;
