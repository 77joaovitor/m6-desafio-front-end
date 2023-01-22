import Container from "./styled";
import { useContext } from "react";
import { AddContext } from "../../context/calculateContext";

const Result = () => {
  const { result} = useContext(AddContext);
  const array = [];
  for (let key in result) {
    console.log(key);

    array.push({ key, value: result[key] });
  }

  console.log(array);

  return (
    <Container>
      {result && (
        <>
          <h1>Você receberá</h1>
          {}
          {array.map((elem: any, index) => (
            <div key={index}>
              {elem["key"] === "1" ? "Amanha" : elem["key"]}
              <span>R${elem["value"]}.00</span>
            </div>
          ))}
          {/* <div>
            Amanha: <span>R${result[0]}.00</span>
          </div>
          <div>
            Em 15 dias: <span>R${result[1]}.00</span>
          </div>
          <div>
            Em 30 dias: <span>R${result[2]}.00</span>
          </div>
          <div>
            Em 90 dias: <span>R${result[3]}.00</span>
          </div> */}
        </>
      )}
    </Container>
  );
};

export default Result;
