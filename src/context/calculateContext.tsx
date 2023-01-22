import { createContext, useState, ReactNode, SetStateAction } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export interface IPropsContext {
  children: ReactNode;
}

interface IAddContext {
  calculate: (data: FormData) => void;
  result: Array<String>;
  setDaysToAdd: any;
  daysToAdd: any;
}

export const AddContext = createContext<IAddContext>({} as IAddContext);

const AddProvider = ({ children }: IPropsContext) => {
  const [result, setResult] = useState(null as any);
  const [daysToAdd, setDaysToAdd] = useState([]);
  const calculate = async (data: any) => {
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
