import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;
  > input {
    width: 3rem;
    height: 2rem;
  }
  > div {
    gap: 10px;
    justify-content: space-between;
  }
  > div > button {
    font-size: 0.8rem;
  }
`;

export default Container;
