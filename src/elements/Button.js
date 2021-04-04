import React from 'react';
import styled from 'styled-components';

const Button=(props)=>{
    const { text, children, _onClick, margin, is_float, width, padding, bg} = props;

    const styles = {
        margin : margin,
        padding : padding,
        width : width,
        bg : bg,
    }

    if(!is_float){
    return(
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text ? text : children} </ElButton>
        </React.Fragment>
    )
    } else {
        return (
            <React.Fragment>
                <FloatButton {...styles} onClick={_onClick}>{text ? text : children} </FloatButton>
            </React.Fragment>
        )
    }
}

Button.defaultProps={
    text : false,
    children : null,
    _onClick : () => {},
    margin : false,
    is_float : false,
    width : "100%",
    padding : "12px 0px",
    bg : false,
}

const ElButton = styled.button `
    width : ${props => props.width};
    padding : ${props => props.padding};
    ${props => props.margin ? `margin : ${props.margin};` : ""};
    ${props => props.bg ? `background-color : ${props.bg};` : ""};
    box-sizing : border-box;
    border : None;
    
`
const FloatButton = styled.button`
    display : flex;
    width : 60px;
    height : 60px;
    background-color : #778899;
    color : #ffffff;
    box-sizing : border-box;
    font-size : 26px;
    font-weight : 800;
    position : fixed;
    bottom : 50px;
    right : 16px;
    text-align : center;
    border : none;
    border-radius :50px;
    align-items : center;
    justify-content : center;
    vertical-align : middle;
`
export default Button;