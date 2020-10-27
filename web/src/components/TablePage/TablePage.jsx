import React, {useState, useEffect} from 'react';
import {Table, Button, Form} from 'react-bootstrap';
import './TablePage.css';
import Pagination from 'react-bootstrap/Pagination';


export default function TablePage({data,numberRows=3,setData}){
    const [numberButtons, setNumberButtons] = useState();
    const [buttonsElements, setButtonsElements] = useState([]);
    const [buttonIndex,setButtonIndex]= useState(1);
    const [editableObject, setEditableObject] = useState({});
    const [numberIndexEdit, setNumberIndexEdit] = useState();

    useEffect(()=> {
        setNumberButtons(Math.ceil(data.length/numberRows));
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
    
        setData(data.filter((data,index)=> index !== Number(dataTr)))
    }

    const handleExcludeEditButtonClicked = e => {
        setEditableObject({})
    }

    const handleSendEditLine = e => {
        const allTds = e.target.parentElement.parentElement.children;

        setData(
            data.map((ele,index)=> 
                index === numberIndexEdit ?
                ele = {
                    nome: allTds[0].querySelector('input').value,
                    idade:Number(allTds[1].querySelector('input').value),
                    estadoCivil:allTds[2].querySelector('select').value,
                    cpf: Number(allTds[3].querySelector('input').value),
                    cidade:allTds[4].querySelector('input').value,
                    estado: allTds[5].querySelector('input').value
                }
                : ele=ele
            )
        )

        setEditableObject({})
    }

    const handleEditButtonClicked =(e) => {
        let linha = e.target.parentElement.parentElement;
        const dataTr = linha.getAttribute('data-tr');
        setNumberIndexEdit(Number(dataTr));
        const objdata = data[Number(dataTr)];

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
                data
                .filter((ele,index) => index < (buttonIndex)*numberRows && index >= (buttonIndex-1)*numberRows)
                .map((data,index)=> {
                    return(
                        <tr key={(buttonIndex-1)*numberRows+index} data-tr={(buttonIndex-1)*numberRows+index}>
                            <td>{data.nome}</td>
                            <td>{data.idade}</td>
                            <td>{data.estadoCivil}</td>
                            <td>{data.cpf}</td>
                            <td>{data.cidade}</td>
                            <td>{data.estado}</td>
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
            <td><Form.Control type="number" defaultValue={editableObject.idade} /></td>
            <td><Form.Control name="estadoCivil" as="select" defaultValue={editableObject.estadoCivil} className="input-form" type="text">
                <option>Solteiro(a)</option>
                <option>Casado(a)</option>
                <option>Divorciado(a)</option>
                <option>Viúvo(a)</option>
                <option>Separado(a)</option>
            </Form.Control></td>
            <td><Form.Control type="number" defaultValue={editableObject.cpf} /></td>
            <td><Form.Control type="text" defaultValue={editableObject.cidade} /></td>
            <td><Form.Control type="text" defaultValue={editableObject.estado} /></td>
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

