import React, { Component } from 'react';
import api from '../../services/api';//Api ASP.NET CORE
import styled from 'styled-components';
import {MagnifyingGlass} from '@styled-icons/open-iconic/MagnifyingGlass';
import {DeleteForever} from '@styled-icons/material/DeleteForever';
import {Link, BrowserRouter} from 'react-router-dom';
import Title from '../../componentes/Titulos/TituloDesktop1';//Componente

export default class Main extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/Products');
        
        console.log(response.data);

        this.setState({ products: response.data });
    };

    render(){

    const Icon = styled(MagnifyingGlass)`
        width: 25px;
        height: 25px;
        margin-left: -35px;
    `
    const IconTrash = styled(DeleteForever)`
        width: 25px;
        height: 25px;
        color: rgb(255,0,0);
    `
        return(
            <div className="Total">
                <Title />
            <div className="Table-div">
                    <form id="Form-Table">
                        <input type="text" id="Caixa-Pesquisa" placeholder="       Busca personalizada" />
                        <BrowserRouter>
                            <Link>
                                <Icon />
                            </Link>
                        </BrowserRouter>
                    </form>       
                    <table id="Tabela-produtos" border="1">
                        <thead>
                            <tr>
                                <th id="Cod">Código:</th>
                                <th>Nome:</th>
                                <th id="Value">Valor:</th>
                                <th></th>
                            </tr>
                        </thead>
                        {this.state.products.map(product => (     
                            <tbody>
                                <tr>
                                    <td><center><b>{product.id}</b></center></td>
                                    <td><center><b>{product.nome}</b></center></td>
                                    <td>
                                        <center>
                                            <b>
                                                {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(product.valor)}
                                            </b>
                                        </center>
                                    </td>
                                    <td>
                                        <center>
                                            <BrowserRouter>
                                                <Link>
                                                    <IconTrash />
                                                </Link>
                                            </BrowserRouter>
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                        <tfoot>
                            <tr>
                                <th colSpan="4">
                                    <center>
                                        <b>
                                            Paginas: 1 de 4
                                        </b>
                                    </center>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
            </div>
            </div>
        );
    }
}