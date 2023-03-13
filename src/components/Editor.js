import React, { useState, useRef } from 'react';
import { marked } from 'marked';
import Preview from './Preview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
 
function Editor() {
    const [content, setContent] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const textRef = useRef(null);
    const editorRef = useRef(null);

    marked.setOptions({
        gfm: true,
        breaks: true,
    });

    const markdownText = (value) => {
        setContent(marked.parse(value));
    }
    
    const expand = () => {
        setIsClicked(true)
        textRef.current.style.minHeight = "90vh";
    }

    const collapse = () => {
        setIsClicked(false);
        textRef.current.style.minHeight = "200px";
    }

    return (
        <div className="page">
            <div className="editor-wrapper" ref={editorRef}>    
                <div className="window-wrapper">
                    <h3 className="editor-title">Editor</h3>
                    {!isClicked ?  
                    <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" onClick={() => expand()}/> :
                    <FontAwesomeIcon icon={faChevronUp} className="arrow-icon" onClick={() => collapse()}/> 
                    }
                </div>
                <textarea className="editor-text" ref={textRef} typeof="text" onChange={e => markdownText(e.target.value)}></textarea>         
            </div>
            <Preview content={content} editorRef={editorRef}/>
        </div>
     );
}

export default Editor;