import React from 'react';
import styles from './TableFeedback.module.css';
import DataTable from 'react-data-table-component';
import photogr from '../../assets/Hotel.jpg';


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
        },
        tableWrapper : {
            style : {
                maxWidth : '100vw',
            },
        },
    }

    const data = [
        {
            id: 1,
            address: 'service',
            stars: 3,
            note: 'Very very good Very very good Very very good Very very good Very very good Very very good Very very good' ,
            date: '05/21/2021',
            time: '13:04',
            photo: '../../assets/Hotel.jpg',
        },
        {
            id: 2,
            address: 'reception',
            stars: 5,
            note: 'Very very good',
            date: '04/01/2021',
            time: '13:04',
        },
        {
            id: 3,
            address: 'hall',
            stars: 2,
            note:'Very very good',
            date: '05/15/2021',
            time: '13:04',
        },
        {
            id: 4,
            address: 'restaurant',
            stars: 1,
            note: 'Very very good',
            date: '03/27/2021',
            time: '13:04',
        },
        {
            id: 5,
            address: 'food',
            stars: 4,
            note: 'Very very good',
            date: '04/12/2021',
            time: '13:04',
        },
        {
            id: 6,
            address: 'dishes',
            stars: 2,
            note: 'Very very good',
            date: '03/01/2021',
            time: '13:04',
        },
        {
            id: 7,
            address: 'bathroom',
            stars: 5,
            note: 'Very very good',
            date: '02/21/2021',
            time: '13:04',
        },
        {
            id: 8,
            address: 'tv',
            stars: 5,
            note: 'Very very good',
            date: '05/26/2021',
            time: '13:04',
        },
        {
            id: 9,
            address: 'window',
            stars: 5,
            note: 'Very very good',
            date: '01/11/2021',
            time: '13:04',
        },
        {
            id: 10,
            address: 'table',
            stars: 2,
            note: 'Very very good',
            date: '04/21/2021',
            time: '13:04',
        },
        {
            id: 11,
            address: 'room',
            stars: 4,
            note: 'Very very good',
            date: '05/15/2021',
            time: '13:04',
        },
    ];
   


    const columns = [
        {
            name: '№',
            selector: 'id',
            sortable: true,
            width: '50px',
        },
        {
            name: 'Object Name',
            selector: 'address',
            sortable: true,
            center: true,
            compact: true,
            minWidth: '90px',
            maxWidth: '20vw',
        },
        {
            name: <div className={styles.tableFeedback}>
                    <div className={styles.tableFeedbackHeaderHide}>hide</div>
                    <div className={styles.tableFeedbackItem}>Stars</div>
                </div>,
            selector: 'stars',
            sortable: true,
            center: true,
            width: '40px',
        },
        {
            name: <div className={styles.tableFeedback}>
                    <div className={styles.tableFeedbackHeader}>Feedbacks</div>
                    <div className={styles.tableFeedbackItem}>Note</div>
                </div>,
            selector: 'note',
            sortable: false,
            center: true,
            compact: true,
            minWidth: '100px',
            maxWidth: '20vw',
        },
        {
            name: <div className={styles.tableFeedback}>
                    <div className={styles.tableFeedbackHeaderHide}>hide</div>
                    <div className={styles.tableFeedbackItem}>Photo</div>
                </div>,
            selector: 'photo',
            sortable: false,
            center: true,
            compact: true,
            hide: 'md',
            cell: d => <img height="auto" width="100px" alt={d.photo} src={photogr} />
        },
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
            center: true,
            compact: true,  
            width: '80px',         
        },
        {
            name: 'Time',
            selector: 'time',
            sortable: false,
            width: '50px',
            compact: true,
            hide: 'sm',
        },
        {
            name: 'Reaction',
            selector: 'reaction',
            sortable: false,
            center: true,
            compact: true,
            hide: 'sm',
        },
    ];
    return(
        <div>
        <DataTable
            columns={columns}
            data={data}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5,10]}
            customStyles={customStyles}
            striped={true}
        />
        </div>
    );
}

export default TableFeedback;