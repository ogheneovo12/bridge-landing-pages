import React from 'react';
import { Button, Modal } from 'antd';
import styled from '@emotion/styled';
import Image from 'next/image';

const StyledModal = styled(Modal)`
    .ant-modal-content {
        width: 95%;
        max-width: 378px;
        border-radius: 10px;
        margin: 0 auto;
    }
    .ant-modal-body {
        text-align: center;
        border-radius: 10px;
        padding: 30px;
    }
`;

function AlertModal({
    isOpen,
    onClose,
    actionText,
    onActionClick,
    message,
}: {
    isOpen: boolean;
    onClose?: () => void;
    actionText?: React.ReactNode;
    onActionClick?: () => void;
    message?: string;
}) {
    return (
        <StyledModal footer={null} open={isOpen} onCancel={onClose}>
            <Image className="mx-auto" src="/success.png" width={128} height={134} alt="success illustration" />
            {message && <p className="text-lg font-medium text-black my-7">{message}</p>}
            <Button
                onClick={onActionClick}
                className="h-[61px] bg-black border-black text-white w-full rounded-md font-bold uppercase text-base hover:shadow-lg hover:opacity-80"
            >
                {actionText}
            </Button>
        </StyledModal>
    );
}

AlertModal.propTypes = {};

export default AlertModal;
