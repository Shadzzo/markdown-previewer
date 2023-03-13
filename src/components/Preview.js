import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Preview({content, editorRef}) {
    const [isClicked, setIsClicked] = useState(false);

    const expand = () => {
        setIsClicked(true)
        editorRef.current.style.display = "none";
    }

    const collapse = () => {
        setIsClicked(false);
        editorRef.current.style.display = "block";
    }

    return ( 
        <div className="preview-wrapper">
            <div className="window-wrapper">
                <h3 className="preview-title">Previewer</h3>
                {!isClicked ?  
                    <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" onClick={() => expand()}/> :
                    <FontAwesomeIcon icon={faChevronUp} className="arrow-icon" onClick={() => collapse()}/> 
                }
            </div>
            <div className="preview-content" dangerouslySetInnerHTML={{__html:content}}>
            </div>
        </div>
     );
}

export default Preview;