import React from 'react';
import Title from '../../componentes/Titulos/TituloDesktop2';//Componente
import styled from 'styled-components';
import {ShoppingBag} from '@styled-icons/remix-line/ShoppingBag';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import Upload from './desktop3';


const IconBag = styled(ShoppingBag)`
width: 60px;
height: 60px;
color: rgb(0,0,0);
margin-top: 20px;
margin-left:30px;
`

const Rota = () => (
    <div className="Div-Geral">
    <Title />

    <div className="Div-CaminhoProduto">
        <Switch>
            <Route exact path="ImportacaoProdutos/Upload" component={Upload}/>
        </Switch>
        <BrowserRouter>
            <Link to="ImportacaoProdutos/Upload">
                <IconBag />
            </Link>
        </BrowserRouter>
        <center>
            <h3 id="Desktop2">Produtos</h3>
        </center>
    </div>
    </div>
);

export default Rota;