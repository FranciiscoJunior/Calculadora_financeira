import React, { useState } from "react";
import * as C from "./style"
import Grid from "../Grid";

const Form = ({handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState("");

    const generaateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1 ) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generaateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}></C.Input>
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Valor</C.Label>
                        <C.Input
                            value={amount}
                            type="number"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                </C.InputContent>

                    <C.RadioGroup>
                        <C.Input
                            type="radio"
                            id="rIncome"
                            defaultChecked="groupo1"
                            onChange={() => setExpense(!isExpense)}
                        />

                        <C.Label htmlFor="rIncome">Entrada</C.Label>

                        <C.Input
                            type="radio"
                            id="rExpenses"
                            name="group1"
                            onChange={() => setExpense(!isExpense)}
                        />

                        <C.Label htmlFor="setExpense">Saída</C.Label>

                    </C.RadioGroup>
                    
                    <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>

            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
};

export default Form;