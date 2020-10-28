import React, {useState, useEffect} from 'react';
import './Inputs.css';
import TablePage from '../../components/TablePage/TablePage';
import {Button, Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import validarCpf from 'validar-cpf';
import {XCircle} from 'react-bootstrap-icons'

export default function Inputs(){
    const [data,setData] = useState([])
    const [cpf,setCpf] = useState()

    const { register, errors, handleSubmit } = useForm();   
    const onSubmit = dataInput => setData([...data,dataInput]);

    const handleCPFInput = (e)=> {
        setCpf(e.target.value)
    }

    return (
        <>
        <Form className="form" variant="light" onSubmit={handleSubmit(onSubmit)}>
            <Form.Label htmlFor="nome">Nome Completo:</Form.Label>
            <Form.Control id="nome"
                          name="nome"
                          className="input-form" 
                          type="text" 
                          style={errors?.nome?.message  ? {color:'red', border:'2px solid red'} : {} } 
                          ref={register(
                {
                    required: {
                        value: true,
                        message: 'Favor preencher o campo'
                    }
                    
                    
                    })}/>
            {errors?.nome?.message &&<Form.Text className="error-text w-100"><XCircle/>  {errors?.nome?.message}</Form.Text>}

            <Form.Label htmlFor="idade">Idade:</Form.Label>
            <Form.Control id="idade"
                          name="idade" 
                          style={errors?.idade?.message  ? {color:'red', border:'2px solid red'} : {} } 
                          className="input-form"  
                          type="number" 
                          ref={register(
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
            {errors?.idade?.message && <Form.Text className="error-text w-100"><XCircle/>  {errors?.idade?.message}</Form.Text>}

            <Form.Label htmlFor="estadoCivil">Estado Civil:</Form.Label>
            <Form.Control id="estadoCivil"
                          name="estadoCivil" 
                          as="select" 
                          className="input-form" 
                          type="text" 
                          ref={register({required: true})}>
                <option>Solteiro(a)</option>
                <option>Casado(a)</option>
                <option>Divorciado(a)</option>
                <option>Viúvo(a)</option>
                <option>Separado(a)</option>
            </Form.Control>

            <Form.Label htmlFor="cpf">CPF:</Form.Label>
            <Form.Control id="cpf" 
                          name="cpf" 
                          onInput={(e) => handleCPFInput(e)} 
                          className="input-form" 
                          style={errors?.cpf?.message  ? {color:'red', border:'2px solid red'} : {} }
                          type="number" 
                          ref={
                register(
                {
                    required: {
                        value: true,
                        message: 'Favor preencher o campo'
            }
            ,pattern: {
                value: /^\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}$/,
                message: 'Digite um cpf no formato correto'
            },
            
            validate: () => validarCpf(cpf) ===true || 'Digite um CPF válido'
            
            })
            }/>
            {errors?.cpf?.message && <Form.Text className="error-text w-100"><XCircle/>  {errors?.cpf?.message}</Form.Text>}
            

            <Form.Label htmlFor="cidade">Cidade:</Form.Label>
            <Form.Control 
                id="cidade" 
                name="cidade" 
                className="input-form" 
                type="text" 
                style={errors?.cidade?.message  ? {color:'red', border:'2px solid red'} : {} }
                ref={register({
                required: {
                    value: true,
                    message: 'Favor preencher o campo'
                }
                })}/>

            { errors?.cidade?.message && <Form.Text className="error-text w-100"><XCircle/>  {errors?.cidade?.message}</Form.Text>}

            <Form.Label htmlFor="estado">Estado:</Form.Label>
            <Form.Control id="estado"
                          name="estado" 
                          className="input-form" 
                          style={errors?.estado?.message  ? {color:'red', border:'2px solid red'} : {} }
                          type="text" 
                          ref={register(
                {required: {
                    value: true,
                    message: 'Favor preencher o campo'
                }
                })}/>
            { errors?.estado?.message && <Form.Text className="error-text w-100"><XCircle/>  {errors?.estado?.message}</Form.Text>}

            <Button className="mt-4" variant="primary" type="submit">Adicionar Dado</Button>
        </Form>
        <TablePage data={data} numberRows={4} setData={setData}/>
        </>
    )
}