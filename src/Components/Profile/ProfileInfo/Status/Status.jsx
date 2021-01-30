import React from "react";

class Status extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.ProfileStatus
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if (prevProps.ProfileStatus !== this.props.ProfileStatus){
           this.setState({
               statusText: this.props.ProfileStatus
           })
       }
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode=() => {
        this.setState({
            editMode: false,
        })
        this.props.UpdateProfileStatus(this.state.statusText)
    }
    changeInputStatus = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }
    render() {
        if (this.props.CurrentUserId === this.props.userId){
            return <>
                {!this.state.editMode &&
                <div><span onDoubleClick={this.activeEditMode}>Status: <span>{this.props.ProfileStatus}</span></span></div>}
                {this.state.editMode &&
                <div><input onChange={this.changeInputStatus} autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.statusText}/></div>}
            </>
        }
        else {
            return <>
                <div><span>Status: <span>{this.props.ProfileStatus}</span></span></div>
            </>
        }
    }
}

export default Status