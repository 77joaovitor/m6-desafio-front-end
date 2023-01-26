import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { Resolver } from "react-hook-form";

export interface IPropsContext {
  children: ReactNode;
}

interface IData {
  amount: number;
  installments: number;
  mdr: number;
  days?: Array<number>;
}

interface IAddContext {
  calculate: (data: IData) => void;
  result: Array<String>;
  setDaysToAdd:
    | Dispatch<SetStateAction<number[]>>
    | Dispatch<SetStateAction<never[]>>;
  daysToAdd: number[];
}

export const AddContext = createContext<IAddContext>({} as IAddContext);

const AddProvider = ({ children }: IPropsContext) => {
  const [result, setResult] = useState([]);
  const [daysToAdd, setDaysToAdd] = useState([]);
  const calculate = async (data: IData) => {
    const calculateData =
      daysToAdd.length > 0
        ? {
            amount: data.amount,
            installments: data.installments,
            mdr: data.mdr,
            days: daysToAdd,
          }
        : {
            amount: data.amount,
            installments: data.installments,
            mdr: data.mdr,
          };
    await api
      .post("", calculateData)
      .then((res) => {
        setResult(res.data);
      })
      .catch((error) =>
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };
  return (
    <AddContext.Provider value={{ calculate, result, setDaysToAdd, daysToAdd }}>
      {children}
    </AddContext.Provider>
  );
};
export default AddProvider;
