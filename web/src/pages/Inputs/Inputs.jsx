import React, {useState, useEffect} from 'react';
import './Inputs.css';
import TablePage from '../../components/TablePage/TablePage';
import {Button, Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";

export default function Inputs(){
    const [data,setData] = useState([])

    const { register, errors, handleSubmit } = useForm();   
    const onSubmit = dataInput => setData([...data,dataInput]);

    return (
        <>
        <Form className="form" variant="light" onSubmit={handleSubmit(onSubmit)}>
            <Form.Label>Nome Completo:</Form.Label>
            <Form.Control name="nome" className="input-form" type="text" ref={register(
                {
                    required: {
                        value: true,
                        message: 'Favor preencher o campo'
                    }
                    
                    
                    })}/>
            <Form.Text className="error-text w-100">{errors?.nome?.message}</Form.Text>

            <Form.Label>Idade:</Form.Label>
            <Form.Control name="idade" className="input-form" type="number" ref={register(
                {
                    min:{
                        value: 5,
                        message: 'A idade mínima é de 5 anos'
                    },
                    max:{
                        value: 120,
                        message: 'A idade máxima é de 120 anos'
                    },
                    required: {
                        value:true,
                        message: 'Favor preencher o campo'
                    }
                    
                    })}/>
            <Form.Text className="error-text w-100">{errors?.idade?.message}</Form.Text>

            <Form.Label>Estado Civil:</Form.Label>
            <Form.Control name="estadoCivil" as="select" className="input-form" type="text" ref={register({required: true})}>
                <option>Solteiro(a)</option>
                <option>Casado(a)</option>
                <option>Divorciado(a)</option>
                <option>Viúvo(a)</option>
                <option>Separado(a)</option>
            </Form.Control>

            <Form.Label>CPF:</Form.Label>
            <Form.Control name="cpf" className="input-form" type="number" ref={
                register(
                {
                    required: {
                        value: true,
                        message: 'Favor preencher o campo'
            }
            
            })
            }/>
            <Form.Text className="error-text w-100">{errors?.cpf?.message}</Form.Text>
            

            <Form.Label>Cidade:</Form.Label>
            <Form.Control name="cidade" className="input-form" type="text" ref={register({
                required: {
                    value: true,
                    message: 'Favor preencher o campo'
                }
                })}/>

            <Form.Text className="error-text w-100">{errors?.cidade?.message}</Form.Text>

            <Form.Label>Estado:</Form.Label>
            <Form.Control name="estado" className="input-form" type="text" ref={register(
                {required: {
                    value: true,
                    message: 'Favor preencher o campo'
                }
                })}/>
            <Form.Text className="error-text w-100">{errors?.estado?.message}</Form.Text>

            <Button className="mt-4" variant="primary" type="submit">Adicionar Dado</Button>
        </Form>
        <TablePage data={data} numberRows={4} setData={setData}/>
        </>
    )
}