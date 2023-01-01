import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Tooltip } from 'antd';
import { IoCopy } from 'react-icons/io5';
import cx from 'classnames';

function CopyButton({
    link,
    disabled,
    className = '',
    toolTipMessage,
    icon,
}: {
    link: string;
    disabled?: boolean;
    className?: string;
    toolTipMessage?: React.ReactNode;
    icon?: React.ReactNode;
}) {
    const [showTooltip, setTooltip] = React.useState(false);

    React.useEffect(() => {
        let timer: any = null;
        if (showTooltip) {
            timer = setTimeout(() => setTooltip(false), 5000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [showTooltip]);

    return (
        <CopyToClipboard text={disabled ? '' : link} onCopy={() => setTooltip(true)}>
            <Tooltip className="text-center" open={showTooltip} title={toolTipMessage || 'Copied'}>
                <Button
                    className={cx('flex items-center py-0 space-x-3', className)}
                    key="button_to_copy"
                    icon={icon || <IoCopy />}
                >
                    Copy link
                </Button>
            </Tooltip>
        </CopyToClipboard>
    );
}

CopyButton.propTypes = {};

export default CopyButton;
