import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/GlobalContext";
import IncomeForm from "../Form/IncomeForm";
import { useEffect } from "react";

function Incomes() {
  const { addIncome, getIncomes, incomes } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <IncomeForm />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } = income;

              return (
                <li>{title}</li>
                // <IncomeItem
                //   key={_id}
                //   id={_id}
                //   title={title}
                //   description={description}
                //   amount={amount}
                //   date={date}
                //   type={type}
                //   category={category}
                //   indicatorColor="var(--color-green)"
                //   deleteItem={deleteIncome}
                // />
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
    .incomes {
      flex: 1;
    }
  }
`;

export default Incomes;