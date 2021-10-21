const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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

const initialState = {
    dialogsData: [
        {id: 1, name: 'Dmitriy', avatar: 'https://cdn.freelance.ru/images/att/1324133_900_600.png' },
        {id: 2, name: 'Yulia', avatar: 'https://i.pinimg.com/736x/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg'},
        {id: 3, name: 'Artemko', avatar: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg'},
        {id: 4, name: 'Eugen', avatar: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg'}
    ] as Array<dialogsPropsType>,
    messageData: [
        {id: 1, message: 'Hi', avatar: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'},
        {id: 2, message: 'How are you?', avatar: 'https://i.pinimg.com/736x/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg'},
        {id: 3, message: 'Go playing in football...', avatar: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'},
        {id: 4, message: 'bla bla bla', avatar: 'https://i.pinimg.com/736x/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg'}
    ] as Array<messagePropsType>,
}

export type InitialStateType = typeof initialState

type DialogsActionsTypes =
    ReturnType<typeof addMessageActionCreator>


const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: messagePropsType = {
                id: 7,
                message: action.newMessageText,
                avatar: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    } as const
}

    export default dialogsReducer;