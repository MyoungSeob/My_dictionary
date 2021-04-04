import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const {children, width, is_flex, padding, margin, bg, center, height} = props;
    const styles = {
        width : width,
        is_flex : is_flex,
        padding : padding,
        margin : margin,
        bg : bg,
        center : center,
        height : height,
    }

    return (
        <React.Fragment>
            <GridBox {...styles}>
                {children}
            </GridBox>
        </React.Fragment>
    )
}


Grid.defaultProps = {
    center : false,
    children : null,
    width : '100%',
    is_flex : false,
    padding : false,
    margin : false,
    bg : false, 
    height : '100%'
}

const GridBox = styled.div`
    width : ${(props) => (props.width)};
    height : ${(props) => props.height};
    box-sizing : border-box;
    ${(props) => (props.is_flex ? `display : flex; align-items : center; justify-content : space-between` : "")};
    ${(props) => props.padding ? `padding : ${props.padding};` : ""};
    ${(props) => props.margin ? `margin : ${props.margin}` : ""};
    ${(props) => props.bg ? `background-color : ${props.bg}` : ""};
    ${(props) => props.center ? `item-align : center` : ""};

`

export default Grid;