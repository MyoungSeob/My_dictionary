import React from 'react';
import {Grid, Text, Input, Button} from '../elements'
import {useDispatch} from 'react-redux'
import {actionCreators as postActions} from '../redux/modules/post'
import moment from 'moment'

const Edit = (props) => {
  const dispatch = useDispatch();

  const post_id = props.match.params.id

  const [word, setWord] = React.useState("");
  const [explain, setExplain] = React.useState("");
  const [example, setExample] = React.useState("");
 
  
  const editCard =()=> {
    if(word==="" ||explain==="" ||example===""){
      window.alert("수정할 내용을 입력해주세요!")
      return;
    }
    window.alert("수정되었습니다!")
    dispatch(postActions.editPostFB(post_id, {word : word, explain : explain, example : example}))
  }
  
  return (
    <Grid padding="20px" >
      <Grid bg="#ffffff" >
        <Grid padding="0px 10px">
          <Text size={"25px"} bold>
            단어 수정하기
          </Text>
        </Grid>
        <Grid padding="10px">      
          <Input
            label="단어"
            placeholder="단어를 수정해 주세요"
            value={word}
            _onChange={(e) => {
              setWord(e.target.value)
            }}            
          />
        </Grid>
        <Grid padding="10px">
          <Input
            label="설명"
            placeholder="설명을 수정해 주세요"
            value={explain}
            _onChange={(e) => {
              setExplain(e.target.value)
            }}
          />
        </Grid>
        <Grid padding="10px">
          <Input
            label="예시"
            placeholder="예시를 수정해주세요"
            value={example}
            _onChange={(e) => {
              setExample(e.target.value)
            }}
          />
        </Grid>
        <Grid>
        <Button _onClick={() => {editCard();}}margin="auto">추가하기</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Edit;