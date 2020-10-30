import React, {useState, useEffect} from 'react';
import {Table, Button, Form} from 'react-bootstrap';
import './TablePage.css';
import Pagination from 'react-bootstrap/Pagination';
import validarCpf from 'validar-cpf';
import DataService from '../../services/firebase.service';

export default function TablePage({data,numberRows=3,setData, keys}){
    const [numberButtons, setNumberButtons] = useState();
    const [buttonsElements, setButtonsElements] = useState([]);
    const [buttonIndex,setButtonIndex]= useState(1);
    const [editableObject, setEditableObject] = useState({});
    const [numberIndexEdit, setNumberIndexEdit] = useState();

    useEffect(()=> {
        setNumberButtons(Math.ceil(Object.entries(data).length/numberRows));
        setButtonsElements([...new Array(numberButtons)].map((ele,index) => ele=index+1 ))
    },[data,numberButtons])

    useEffect(() => {
        setData(data)
    },[data])

    const handleActiveButton = (ele) => {
        setButtonIndex(ele)
    }

    const handleExcludeButtonClicked =(e) => {
        const dataTr = e.target.parentElement.parentElement.getAttribute('data-tr');
    
        setData(Object.entries(data).filter((data,index)=> index !== Number(dataTr)))
        DataService.delete(keys[Number(dataTr)])
        
    }

    const handleExcludeEditButtonClicked = e => {
        setEditableObject({})
    }

    const handleSendEditLine = e => {
        const allTds = e.target.parentElement.parentElement.children;

        if(allTds[0].querySelector('input').value.length ===0) return;

        if(allTds[1].querySelector('input').value.length ===0 ||
             Number(allTds[1].querySelector('input').value) < 5 ||
              Number(allTds[1].querySelector('input').value) > 120) return;

        if(allTds[3].querySelector('input').value.length ===0 ||
             validarCpf(allTds[3].querySelector('input').value) === false) return;

        if(allTds[4].querySelector('input').value.length ===0) return;

        if(allTds[5].querySelector('input').value.length ===0) return;

        const newData = {
            nome: allTds[0].querySelector('input').value,
            idade:Number(allTds[1].querySelector('input').value),
            estadoCivil:allTds[2].querySelector('select').value,
            cpf: Number(allTds[3].querySelector('input').value),
            cidade:allTds[4].querySelector('input').value,
            estado: allTds[5].querySelector('input').value
        }
        setData(
            Object.entries(data).map((ele,index)=> 
                index === numberIndexEdit ?
                ele = newData
                : ele=ele
            )
        )

        DataService.update(keys[numberIndexEdit],newData)

        setEditableObject({})

    }

    const handleEditButtonClicked =(e) => {
        let linha = e.target.parentElement.parentElement;
        const dataTr = linha.getAttribute('data-tr');
        setNumberIndexEdit(Number(dataTr));
        const objdata = Object.entries(data)[Number(dataTr)][1];

        setEditableObject(objdata);

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
                <th>Excluir linha?</th>
                <th>Editar linha?</th>
            </tr>
        </thead>
        <tbody>
            {
                Object.entries(data)
                .filter((ele,index) => index < (buttonIndex)*numberRows && index >= (buttonIndex-1)*numberRows)
                .map((data,index)=> {
                    return(
                        <tr key={(buttonIndex-1)*numberRows+index} data-tr={(buttonIndex-1)*numberRows+index}>
                            <td>{data[1].nome}</td>
                            <td>{data[1].idade}</td>
                            <td>{data[1].estadoCivil}</td>
                            <td>{data[1].cpf}</td>
                            <td>{data[1].cidade}</td>
                            <td>{data[1].estado}</td>
                            <td><Button variant="danger" onClick={e => handleExcludeButtonClicked(e)}>Excluir Linha</Button></td>
                            <td><Button variant="primary" onClick={e => handleEditButtonClicked(e)}>Editar Linha</Button></td>
                        </tr>
                    )
                })
            }

        { 
        Object.keys(editableObject).length !== 0 ?      
        <tr>
            <td><Form.Control type="text" defaultValue={editableObject.nome} /></td>
            <td><Form.Control type="number" defaultValue={editableObject.idade}   /></td>
            <td><Form.Control name="estadoCivil" as="select" defaultValue={editableObject.estadoCivil} className="input-form" type="text">
                <option>Solteiro(a)</option>
                <option>Casado(a)</option>
                <option>Divorciado(a)</option>
                <option>Viúvo(a)</option>
                <option>Separado(a)</option>
            </Form.Control></td>
            <td><Form.Control type="number" defaultValue={editableObject.cpf}  /></td>
            <td><Form.Control type="text" defaultValue={editableObject.cidade} /></td>
            <td><Form.Control type="text" defaultValue={editableObject.estado}  /></td>
            <td><Button variant="danger" onClick={e => handleExcludeEditButtonClicked(e)}>Excluir Edição</Button></td>
            <td><Button variant="primary" onClick={e => handleSendEditLine(e)}>Enviar Edição</Button></td>
        </tr>
        :
        <></>
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

