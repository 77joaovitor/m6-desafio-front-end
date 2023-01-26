import Container from "./style";
import { AddContext } from "../../context/calculateContext";
import { useContext } from "react";

const AddDays = () => {
  const { setDaysToAdd } = useContext(AddContext);
  const daysEvent = (event: any) => {
    event.preventDefault();
    setDaysToAdd((old: number[]): any => [
      ...old,
      event.target.parentNode.children[0].value,
    ]);
  };
  return (
    <Container>
      <span>Imporme os dias</span>
      <div>
        <input type="number" />
        <button
          type="submit"
          onClick={(event) => {
            daysEvent(event);
          }}
        >
          Adicionar dias
        </button>
      </div>
    </Container>
  );
};

export default AddDays;
