import styled from "styled-components";

const Container = styled.div`
  width: 35vw;
  height: 70vh;
  color: black;
  background-color: aliceblue;
  color: #6868ff;
  display: flex;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.1rem;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 0.5rem;
  align-items: flex-start;
  padding-left: 2rem;
  font-weight: 400;
  h1 {
    font-size: 1.2rem;
    width: 12rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #6868ff;
    display: flex;
  }

  span {
    font-weight: 600;
    margin-bottom: 40px;
    margin-left: 4px;
  }
`;

export default Container;
