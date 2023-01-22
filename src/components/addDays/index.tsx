import Container from "./style";
import { AddContext } from "../../context/calculateContext";
import { useContext, useState } from "react";

const AddDays = () => {
  const { setDaysToAdd }: any = useContext(AddContext);
  const [value, setValue] = useState("");
  const daysEvent = (event: any) => {
    event.preventDefault();
    setDaysToAdd((old: any) => [
      ...old,
      event.target.parentNode.children[0].value,
    ]);
    console.log(event.target.parentNode.children[0].value);
  };
  return (
    <Container>
      <span>Imporme os dias</span>
      <div>
        <input type="number" value={value} />
        <button
          type="submit"
          onClick={() => {
            daysEvent;
            setValue("");
          }}
        >
          Adicionar dias
        </button>
      </div>
    </Container>
  );
};

export default AddDays;
