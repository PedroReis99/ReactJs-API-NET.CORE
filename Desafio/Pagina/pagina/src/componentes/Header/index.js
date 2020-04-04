import React from 'react';
import styled from 'styled-components';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import {CloudUpload} from '@styled-icons/material-rounded/CloudUpload';
import {ListAlt} from '@styled-icons/material-twotone/ListAlt';
import Main from '../../pages/main/index';
import Rota from '../../pages/main/desktop2';
import Upload from '../../pages/main/desktop3';

//Color: rg(255,255,255); Deixa o icone com a cor branca
//Declarei uma constante para o icone, nela declaro o tamanho, largura, cor distancia das margens, etc...
    const IconUpload = styled(CloudUpload)`
        width: 35px;
        height: 35px;
        color rgb(255,255,255);
        margin-top: 80px;
        margin-left: -35px;
    `

    const IconList = styled(ListAlt)`
        width: 35px;
        height: 35px;
        color rgb(255,255,255);
        margin-left: 20px;
    `

const Header = () => (

    <div className="Div-lateral">
        <Switch>
            <Route exact path="/ListaProdutos" component={Main}/>
            <Route exact path="/ImportacaoProdutos" component={Rota}/>
            <Route exact path="ImportacaoProdutos/Upload" component={Upload}/>
        </Switch>
            <BrowserRouter>
                <Link to="/ListaProdutos">
                    <IconList />
                </Link>
            </BrowserRouter>
            <BrowserRouter>
                <Link to="/ImportacaoProdutos">
                    <IconUpload />
                </Link>
        </BrowserRouter>
    </div>
);

export default Header;