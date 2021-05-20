import React from 'react';
import styles from './TableFeedback.module.css';
import DataTable from 'react-data-table-component';

const TableFeedback = () => {

    const customStyles = {
        headRow: {
            style: {
              backgroundColor: 'rgb(87, 143, 216)',
              minHeight: '56px',
              borderBottomWidth: '1px',

              borderBottomStyle: 'solid',
            },
        },
        headCellsS : {
            style : {
                fontSize : '36px',
            },
        }
    }

    const data = [
        {
            stars: 3,
            note: 'eqr',
            date: '21.05.2021',
            feedbakcs: [
             '0000',
             '1111'],
        },
        {
            stars: 5,
            note: 'gfgfg',
            date: '01.04.2021',
            feedbakcs: [
             '0001',
             '1112'],
        },
        {
            stars: 2,
            note:'dfggm',
            date: '15.05.2021',
            feedbakcs: [
             '0002',
             '1113'],
        },
        {
            stars: 1,
            note: 'gjhj',
            date: '27.03.2021',
            feedbakcs: [
            '0003',
            '1114'],
        },
        {
            stars: 4,
            note: 'gfghu',
            date: '12.04.2021',
            feedbakcs: [
                '0004',
                '1115'],
        },
    ];

    const columns = [
        {
            name: 'Address/ Object Name',
            selector: 'address',
            sortable: false,
        },

            {
                name: 'Stars',
                selector: 'stars',
                sortable: true,
            },
            {
                name: 'Note',
                selector: 'note',
                sortable: false,
            },
            {
                name: 'Photo',
                selector: 'photo',
                sortable: false,
            },

        {
            name: 'Date',
            selector: 'date',
            sortable: true,
        },
        {
            name: 'Time',
            selector: 'time',
            sortable: false,
        },
        {
            name: 'Reaction',
            selector: 'reaction',
            sortable: false,
        },
{/*        {
            name: <div className={styles.tableFeedback}><div className={styles.tableFeedbackHeader}>Feedbacks</div>
                    <div className={styles.tableFeedbackItem}>
                    <div>1</div>
                    <div>2</div>
                    </div>
                </div>,
            selector: row => `${row.q1}     ${row.q2}`,

            sortable: true,
        },    */},
        {
            name: 'Feedbacks',
            selector: row => <span>{row.feedbakcs.join('  ')}</span>,
            sortable: false,

        },
    ];
    return(
        <DataTable
            columns={columns}
            data={data}
            pagination
            paginationPerPage={4}
            paginationRowsPerPageOptions={[4,8]}
            customStyles={customStyles}
            striped={true}
        />
    );
}

export default TableFeedback;