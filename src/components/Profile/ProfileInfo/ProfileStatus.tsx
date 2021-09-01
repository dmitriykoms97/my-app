import React, {Component} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";

type PropsType = {
    status: any
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.disableEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;
