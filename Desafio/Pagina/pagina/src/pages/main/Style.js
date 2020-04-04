import styled, { css } from 'styled-components';



const dragActive = css`
    border-color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    margin-top: 30px;
    margin-left: 30px;
    width: 450px;
    height: 350px;
    background: #DCDCDC;
    border: dashed #000000 5px;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 15px;
    -moz-border-radius: 10px;
    padding: 0px;
    justify-content: center;
    align-items: center;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};

`;

const messageColors = {
    default: '#808080',
    error: '#e57878',
    success: '#78e5d5',
};

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || "default"]};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;