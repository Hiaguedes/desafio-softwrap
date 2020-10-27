import React from 'react';
import './Inputs.css';
import TablePage from '../../components/TablePage/TablePage'

export default function Inputs(){

    return (
        <>
        <TablePage data={

[
    {nome:'Hiago0',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Hiago1',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Hiago2',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Hiago3',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Hiago4',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Hiago5',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Hiago6',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Hiago7',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Hiago8',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
    {nome:'Carlos',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},


]
        } numberRows={5}/>
        </>
    )
}