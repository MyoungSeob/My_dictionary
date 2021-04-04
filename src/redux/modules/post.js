import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { firestore, storage } from "../../shared/firebase";

const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST"
const LOADING = "LOADING";

const addPost = createAction(ADD_POST, (post) => ({post}));
const getPost = createAction(GET_POST, (post_list, paging) => ({post_list, paging}));
const editPost = createAction(EDIT_POST, (post_id, post) => ({post_id, post}));
const deletePost = createAction(DELETE_POST, (post_id) => ({post_id}));
const loading = createAction(LOADING, (is_loading) => ({is_loading}));

const initialState ={
    list : [],
    is_loading : false,
};

const initialPost = {
    word : "단어입니다",
    explain : "설명입니다" ,
    example : '예시입니다',
}

const addPostFB = (word="", explain="", example="") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");
    const _post = {
        ...initialPost,
        word : word,
        explain : explain,
        example : example,
    }
    postDB
    .add({..._post})
    .then((doc) => {
        dispatch(addPost(_post));
        console.log(_post);
        history.replace("/");
    });
  };
};

const getPostFB = () => {
    return function (dispatch, getState, {history}){

    

        dispatch(loading(true));


        const postDB = firestore.collection("post");
        

        postDB.get().then((docs) => {
            let post_list = [];
            
            docs.forEach((doc) => {
                let _post = doc.data();
                let post = {
                    word : _post.word,
                    explain : _post.explain,
                    example : _post.example,
                }

                post_list.push(post);

            });
            post_list.pop();
            dispatch(getPost(post_list));
        });

        return;

        postDB.get().then((docs) => {
            let post_list = [];
            docs.forEach((doc) => {
                let _post = doc.data();
                let post = {
                    word : _post.word,
                    explain : _post.explain,
                    example : _post.example,
                }

                post_list.push(post);

            });
            console.log(post_list)
            dispatch(getPost(post_list))
        })
    }
}
const editPostFB = (post_id = null, post={}) => {
    return function (dispatch, getState, {history}){
        if(!post_id) {
            console.log("게시물 정보가 없습니다")
            return;
        }

        const _post_index = getState().post.list.findIndex(p => p.id === post_id)
        const _post = getState().post.list[_post_index]

        console.log(_post)

        const postDB = firestore.collection("post");
        postDB.doc(post_id).update(post).then(doc => {
            dispatch(editPost(post_id, {...post}));
            history.replace('/')
        })
    }
}
export default handleActions(
    {
        [ADD_POST] : (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
        }),
        [GET_POST] : (state, action) => produce(state, (draft) => {
            draft.list.push(...action.payload.post_list);
        }),
        [EDIT_POST] : (state, action) => produce(state, (draft) => {
            let idx = draft.list.findIndex((p) => p.id === action.payload.post_id)

            draft.list[idx] = {...draft.list[idx], ...action.payload.post};
        })
    }, initialState
);

const actionCreators ={
    ADD_POST,
    GET_POST,
    getPostFB,
    addPostFB,
    editPostFB
};

export {actionCreators};