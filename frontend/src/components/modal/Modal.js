import React from 'react'
import ModalBox from './ModalBox'
import Overlay from './Overlay'

export default function Modal({children, handleClose}) {


    return (
        <>
            <Overlay onClick={() => handleClose()}/>
            <ModalBox>
                {children}
            </ModalBox>
        </>
    )
}
