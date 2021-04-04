import React from 'react';
import {Grid, Text, Button} from '../elements';
import styled from 'styled-components';
import {history} from "../redux/configStore"


const Card =(props)=> {

    return (
      <React.Fragment>
        <Grid padding="20px">
          <Grid bg={"#ffffff"} margin="15px 0px 15px 0px">
            <Grid padding="10px">
              <Grid is_flex>
                <Text size="20px">단어</Text>
                {/* //<Button width="70px" _onClick={() => {history.push(`/edit/${props.id}`)}}>수정/삭제</Button> */}
              </Grid>
              <Grid>
                <Text>{props.word}</Text>
                <Line />
              </Grid>
              <Text size="20px">설명</Text>
              <Grid>
                <Text>{props.explain}</Text>
                <Line />
              </Grid>
              <Text size="20px">예시</Text>
              <Grid>
                <Text color={"blue"}>{props.example}</Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

Card.defaultProps = {
  word : "단어입니다",
  explain : "설명입니다" ,
  example : '예시입니다',
}

const Line = styled.hr`
    border : 0.5px dashed #EFF6FF;
`

export default Card;