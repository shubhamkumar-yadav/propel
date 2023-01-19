import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../assets/css/PopUp.css';

function PopUp({triggerButton,content,openUnMarkModel}) {
    return (
        <Popup
            trigger={triggerButton}
            modal
            nested
            open={openUnMarkModel}
        >
            {content}
        </Popup>
    )
};
export { PopUp };