import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/GlobalContext";
import IncomeForm from "../Form/IncomeForm";
import IncomeItem from "./IncomeItem";

function Incomes() {
  const { addIncome, getIncomes, incomes, deleteIncome, totalIncomes } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>RON {totalIncomes()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <IncomeForm />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } = income;

              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  amount={amount}
                  date={date}
                  category={category}
                  description={description}
                  type={type}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  );
}

const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    @media (min-width: 1200px) {
      flex-direction: row;
    }
    .incomes {
      flex: 1;
    }
  }
`;

export default Incomes;
