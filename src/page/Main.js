import React from 'react';
import {Grid, Button} from '../elements';
import Card from '../components/Card';
import {history} from '../redux/configStore';
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as postActions} from '../redux/modules/post'
import InfinityScroll from '../shared/InfinityScroll';

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);


  React.useEffect(() => {
    if(post_list.length===0){
      dispatch(postActions.getPostFB())
    }
    
  }, []);

  console.log(post_list)
  return (
    <React.Fragment>
      {/* <InfinityScroll
        callNext={()=>{
          dispatch(postActions.getPostFB(paging.next))
        }}
        is_next={paging.next ? true : false}
        loading={is_loading}
      > */}

      <Grid bg={"#EFF6FF"} padding="15px 0px 20px 0px">
        <Grid>
          {post_list.map((p, idx) => {
            return <Card key={p.id} {...p}/>
          })}
        </Grid>
        <Button
          is_float
          _onClick={() => {
            history.push("/write");
          }}
          text={"+"}
        />
      </Grid>
    {/* </InfinityScroll> */}
    </React.Fragment>
  );
};

export default Main;