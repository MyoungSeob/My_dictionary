import React from 'react';
import styled from 'styled-components';
import {Grid, Text} from '../elements'

const Input =(props)=>{
    const {label, placeholder, type, _onChange, ref} = props;
    return (
        <React.Fragment>
            <Grid>
                {label && <Text size= "20px"margin="0px">{label}</Text>}                
                <ElTextArea
                rows={2}
                placeholder={placeholder}
                onChange={_onChange}
                ref = {ref}
                ></ElTextArea>
            </Grid>
        </React.Fragment>
    )
}


Input.defaultProps = {
    label : false,
    placeholder : '텍스트를 입력해주세요',
    type : "text",
    value : "",
    _onChange : () => {},
    ref : null,

}

const ElTextArea = styled.textarea`
border : 1px solid #212121;
width : 100%;
padding : 12px 4px;
box-sizing : border-box;
font-size : 15px;
`

export default Input;