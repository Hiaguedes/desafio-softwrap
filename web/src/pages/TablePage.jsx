import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import './TablePage.css';
import Pagination from 'react-bootstrap/Pagination';


export default function TablePage(){
    const [DataTable,setDataTable] = useState([
        {name:'Hiago0',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
        {name:'Hiago1',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
        {name:'Hiago2',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
        {name:'Hiago3',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
        {name:'Hiago4',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
        {name:'Hiago5',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
        {name:'Hiago6',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
        {name:'Hiago7',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},
        {name:'Hiago8',idade:25, estadoCivil:'solteiro', cpf: 11111, cidade:'Petrópolis', estado: 'Rio de Janeiro'},


    ]);
    const [numberButtons, setNumberButtons] = useState();
    const [buttonsElements, setButtonsElements] = useState([]);
    const [buttonIndex,setButtonIndex]= useState(1);

    useEffect(()=> {
        setNumberButtons(Math.floor(DataTable.length/3));
        setButtonsElements([...new Array(numberButtons)].map((ele,index) => ele=index+1 ))
    },[DataTable,numberButtons])

    const handleActiveButton = (ele) => {
        setButtonIndex(ele)
    }

    return (
    <div className="table-container">
    <Table responsive hover variant="dark">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Estado Civil</th>
                <th>CPF</th>
                <th>Cidade</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            {
                DataTable
                .filter((ele,index) => index < (buttonIndex)*3 && index >= (buttonIndex-1)*3)
                .map((data,index)=> {
                    return(
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.idade}</td>
                            <td>{data.estadoCivil}</td>
                            <td>{data.cpf}</td>
                            <td>{data.cidade}</td>
                            <td>{data.estado}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </Table>
        <Pagination>
        {         
            buttonsElements.map((ele) =>{
                if(buttonIndex === ele) return <Pagination.Item active key={ele}>{ele}</Pagination.Item>

                return <Pagination.Item onClick={() => handleActiveButton(ele)} key={ele}>{ele}</Pagination.Item>
            })
        }
        </Pagination>
    </div>
    )
}

