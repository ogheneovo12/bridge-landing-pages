import React from 'react';
import cx from 'classnames';

interface IContainerProps {
    bg?: string;
    sectionClass?: string;
    containerClass?: string;
    id?: string;
}
function Container({ bg, sectionClass, containerClass, id, children }: React.PropsWithChildren<IContainerProps>) {
    return (
        <section id={id} className={cx(sectionClass, `bg-[${bg}] overflow-hidden`)}>
            <div className={cx('container', containerClass)}>{children}</div>
        </section>
    );
}

Container.propTypes = {};

export default Container;
