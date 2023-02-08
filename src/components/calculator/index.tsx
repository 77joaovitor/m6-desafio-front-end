import Container from "./style";
import { useForm, useFieldArray, set } from "react-hook-form";
import { AddContext } from "../../context/calculateContext";
import { useContext } from "react";
import * as React from "react";
import AddDays from "../addDays";
import { ErrorMessage } from "@hookform/error-message";

interface FormInputs {
  singleErrorInput: undefined;
  amount: undefined;
  installments: undefined;
  mdr: undefined;
  input: any;
  message: string;
}

const Calculator = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormInputs>();

  console.log(errors);
  const { calculate, daysToAdd } = useContext(AddContext);
  return (
    <Container onSubmit={handleSubmit(calculate as () => void)}>
      <h1>Simule sua antecipação</h1>
      <div>
        <span>Informe o valor da venda *</span>
        <input
          type="text"
          id="amount"
          {...register("amount", { required: "This is required." })}
        />
        {errors.amount && <p className="error">{errors.amount.message}</p>}
      </div>
      <div>
        <span>Em quantas parcelas *</span>
        <input
          type="text"
          id="installments"
          {...register("installments", { required: "This is required." })}
        />
        {errors.installments && (
          <p className="error">{errors.installments.message}</p>
        )}
      </div>
      <div>
        <span>Informe o percentual de MDR *</span>

        <input
          type="text"
          id="mdr"
          {...register("mdr", { required: "This is required." })}
        />
        {errors.mdr && <p className="error">{errors.mdr.message}</p>}
      </div>
      <div>
        <div id="infoDays">
          {daysToAdd?.map((elem: number) => (
            <p className="pDays">{elem}</p>
          ))}
        </div>
        <AddDays />
      </div>
      <button type="submit">Calcular</button>
    </Container>
  );
};

export default Calculator;
