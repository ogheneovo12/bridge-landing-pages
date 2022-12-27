import React from 'react';
import { Table as AntdTable } from 'antd';
import styles from './Table.module.scss';

function Table({ datasource, columns }: { datasource: any; columns: any }) {
    return (
        <AntdTable
            scroll={{ x: '100vw' }}
            className={styles?.ant_custom_table}
            columns={columns}
            dataSource={datasource}
        />
    );
}

Table.propTypes = {};

export default Table;
