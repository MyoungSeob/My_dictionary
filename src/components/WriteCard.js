import React from 'react';
import {Grid, Text, Input, Button} from '../elements'
import {useDispatch} from 'react-redux'
import {actionCreators as postActions} from '../redux/modules/post'
import moment from 'moment'

const WriteCard = (props) => {
  const dispatch = useDispatch();

  const [word, setWord] = React.useState("");
  const [explain, setExplain] = React.useState("");
  const [example, setExample] = React.useState("");
 
  
  const addCard =()=> {
    if(word==="" ||explain==="" ||example===""){
      window.alert("내용을 입력해주세요!")
      return;
    }
    window.alert("등록되었습니다!")
    dispatch(postActions.addPostFB(word, explain, example))
  }
  
  return (
    <Grid padding="20px" >
      <Grid bg="#ffffff" >
        <Grid padding="0px 10px">
          <Text size={"25px"} bold>
            단어 추가하기
          </Text>
        </Grid>
        <Grid padding="10px">      
          <Input
            label="단어"
            placeholder="단어를 입력해 주세요"
            _onChange={(e) => {
              setWord(e.target.value)
            }}            
          />
        </Grid>
        <Grid padding="10px">
          <Input
            label="설명"
            placeholder="설명을 입력해 주세요"
            _onChange={(e) => {
              setExplain(e.target.value)
            }}
          />
        </Grid>
        <Grid padding="10px">
          <Input
            label="예시"
            placeholder="예시를 입력해주세요"
            _onChange={(e) => {
              setExample(e.target.value)
            }}
          />
        </Grid>
        <Grid>
        <Button _onClick={() => {addCard();}}margin="auto">추가하기</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WriteCard;