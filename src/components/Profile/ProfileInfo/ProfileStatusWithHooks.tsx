import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    updateUserStatus: (status: string) => (profile: any) => void
    status: string
}

const ProfileStatusWithHooks = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const disableEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '------------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={disableEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
