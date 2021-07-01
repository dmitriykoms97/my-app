let rerenderEntireTree = () => {
    console.log('State changed!');
}

export type postsType = {
    id: number
    message: string
    likeCount: number
}

export type postPageType = {
    postsData: Array<postsType>
    newPostText: string
}

export type dialogsPropsType = {
    id: number
    name: string
    avatar: string
}

export type messagePropsType = {
    id: number
    message: string
    avatar: string
}

export type dialogPageType = {
    dialogsData: Array<dialogsPropsType>
    messageData: Array<messagePropsType>
}

export type RootStateType = {
    profilePage: postPageType
    dialogsPage: dialogPageType
}

let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likeCount: 15},
            {id: 2, message: 'Its my first post!', likeCount: 99},
            {id: 2, message: 'Its my first post!', likeCount: 45},
            {id: 2, message: 'Its my first post!', likeCount: 45},
            {id: 2, message: 'Its my first post!', likeCount: 45}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dmitriy', avatar: 'https://cdn.freelance.ru/images/att/1324133_900_600.png' },
            {id: 2, name: 'Yulia', avatar: 'https://i.pinimg.com/736x/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg'},
            {id: 3, name: 'Artemko', avatar: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg'},
            {id: 4, name: 'Eugen', avatar: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg'}
        ],
        messageData: [
            {id: 1, message: 'Hi', avatar: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'},
            {id: 2, message: 'How are you?', avatar: 'https://i.pinimg.com/736x/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg'},
            {id: 3, message: 'Go playing in football...', avatar: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'},
            {id: 4, message: 'bla bla bla', avatar: 'https://i.pinimg.com/736x/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg'}
        ]
    }
}

export const addPost = () => {
    let newPost: postsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postsData.unshift(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state;