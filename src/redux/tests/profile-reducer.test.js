import profileReducer, {deletePost} from "../profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'Its my first post!', likeCount: 99},
        {id: 3, message: 'Its my first post!', likeCount: 45},
        {id: 4, message: 'Its my first post!', likeCount: 45},
        {id: 5, message: 'Its my first post!', likeCount: 45}
    ]
}

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(4)
})