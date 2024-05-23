import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';

const Editor = (props) => {
    const editor = useRef(null);
    
    return (
        <>
            <JoditEditor
                ref={editor}
                value={props.content}
                onBlur={newContent => props.setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => props.setContent(newContent)}
            />
        </>
    )
}

export default Editor