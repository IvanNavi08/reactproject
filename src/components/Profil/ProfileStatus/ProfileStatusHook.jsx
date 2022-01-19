import React, {useEffect, useState} from "react";

const ProfileStatusHook = (props) => {
    let [editMode, seteditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        seteditMode(true)
    }
    const deactivateEditMode = () =>  {
        seteditMode(false)
        props.updateProfileStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div>
        { ! editMode &&
        <div>
           <b>Status:</b> <span  onDoubleClick={activateEditMode } > {props.status || "?????"} </span>
        </div>
        }
        {editMode &&
        <div>
            <input  onChange={onStatusChange}
                    autoFocus={true} onBlur={deactivateEditMode}
                    value={status}
            />
        </div>
        }
    </div>
}

export default ProfileStatusHook;