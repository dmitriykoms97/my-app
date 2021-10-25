import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {postsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/preloader/formsControl/FormsControls";

const maxLength30 = maxLengthCreator(10);

type myPostPropsType = {
    addPost: (newPostText: string) => void
    posts: Array<postsType>
}

type AddPostPropsType = {
    newPostText: string
}


const MyPosts = React.memo((props: myPostPropsType) => {

    console.log('Render MyPosts')

    let postElements = props.posts.map((p: postsType) => <Post key={p.id} id={p.id} message={p.message}
                                                               likeCount={p.likeCount}/>)

    let addNewPost = (data: AddPostPropsType) => {
        props.addPost(data.newPostText)
    }

    return <div>
        <h3>My posts</h3>
        <AddPostReduxForm onSubmit={addNewPost}/>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
})

const AddPostForm: React.FC<InjectedFormProps<AddPostPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter, what you want to say...'
                       name={'newPostText'}
                       component={Textarea}
                       validate={[requiredField, maxLength30]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<AddPostPropsType>({
    form: 'profileAddPostForm'
})(AddPostForm)


export default MyPosts;
