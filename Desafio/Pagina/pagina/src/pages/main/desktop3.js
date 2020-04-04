import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Title from '../../componentes/Titulos/TituloDesktop3';//Componente
import styled from 'styled-components';
import {CloudUpload} from '@styled-icons/material-rounded/CloudUpload';
import {Link, BrowserRouter} from 'react-router-dom';
import { DropContainer, UploadMessage } from './Style';


const IconCloud = styled(CloudUpload)`
width: 130px;
height: 130px;
color: rgb(105,105,105);
margin-top: 60px;
`
export default class Upload extends Component {

    renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return <UploadMessage>
                        <center>
                            <BrowserRouter>
                                <Link>
                                    <IconCloud />
                                </Link>
                            </BrowserRouter>
                            <h4>Arraste um arquivo ou <a href="#">clique aqui</a></h4>
                            <h4>para enviar um arquivo</h4>
                        </center>
            </UploadMessage>
        }

        if (isDragReject) {
            return <UploadMessage type="error"><center>Arquivo não suportado!</center></UploadMessage>
        }

        return <UploadMessage type="success"><center>Solte o arquivo aqui!</center></UploadMessage>
    };


    render(){

        const {onUpload} = this.props;

        return(
            <div>
            <Title />
           <Dropzone accept="image/*" onDropAccepted={onUpload}>
               { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
               )}
           </Dropzone>
            </div>
        );
    }
}