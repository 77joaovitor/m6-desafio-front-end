import Container from "./style";
import { useForm, useFieldArray, set } from "react-hook-form";
import { AddContext } from "../../context/calculateContext";
import { useContext } from "react";
import * as React from "react";
import AddDays from "../addDays";

const Calculator = () => {
  const { register, handleSubmit, control } = useForm();
  const [openModalDays, setOpenModalDays] = React.useState(false);
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "days", // unique name for your Field Array
    }
  );

  const { calculate, daysToAdd }: any = useContext(AddContext);
  return (
    <Container onSubmit={handleSubmit(calculate)}>
      <h1>Simule sua antecipação</h1>
      <div>
        <span>Informe o valor da venda *</span>
        <input type="text" id="amount" {...register("amount")} />
      </div>
      <div>
        <span>Em quantas parcelas *</span>
        <input type="text" id="installments" {...register("installments")} />
      </div>
      <div>
        <span>Informe o percentual de MDR *</span>

        <input type="text" id="mdr" {...register("mdr")} />
      </div>
      <div>
        <div id="infoDays">
          {daysToAdd?.map((elem: any) => (
            <p className="pDays">{elem}</p>
          ))}
        </div>
        <AddDays />
        {/* <form>
          <span>Informe as dias</span>
          <input type="number" className="addDays" />
          <button
            id="buttonDays"
            onClick={(event) => {
              event.preventDefault();

              setOpenModalDays(true);
              // append({ value: "" }, { focusName: "value" });
            }}
          >
            Adicionar dia
          </button>
        </form> */}
        {/* {fields.map((field, index) => (
          <section className="addDays" key={field.id}>
            <input
              className="inputAddDays"
              {...register(`days.${index}.value`)}
            />
          </section>
        ))} */}
      </div>
      <button type="submit">Calcular</button>
    </Container>
  );
};

export default Calculator;
