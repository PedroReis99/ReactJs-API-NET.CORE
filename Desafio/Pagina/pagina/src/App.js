import React, {Component} from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import "./Styles.css";//Estilos Css
import "./css/FlexDiv.css";//Estilos Css
import './css/Lateral.css';//Estilos Css
import './css/Titulo.css';//Estilo css
import './css/Table.css';//Estilo css
import './css/Desktop2.css';//Estilo css
import './css/Desktop3.css';//Estilo css
import Header from './componentes/Header/index';//Componente
import Upload from './pages/main/desktop3';//Pagina Desktop3
import FileList from './pages/main/FlieList';//Pagina Desktop3


class App extends Component{

  state = {
    uploadedFiles: [],
  };

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });
  };

  render(){
    const { uploadedFiles } = this.state;

    return (
      <div className="Flex-div">
          <Header />
          <Upload onUpload={this.handleUpload} />
          { !!uploadedFiles.length && (
            <FileList files={uploadedFiles} />
          )}
      </div>
    );
  }
}

export default App;
