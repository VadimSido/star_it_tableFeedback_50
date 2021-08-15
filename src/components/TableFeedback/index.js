import React, {useState, useEffect} from 'react';
import styles from './TableFeedback.module.css';
import DataTable from 'react-data-table-component';
import ImageView from '../ImageView';

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
    };

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [dataObject, setDataObject] = useState([]);
    const dataFull = [];

    useEffect(() => {
        fetch('https://starit-api.herokuapp.com/api/fbo')
            .then(rez => rez.json())
            .then(
                (rezult) => {
                    setIsLoaded(true);
                    setDataObject(rezult);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },[]);

    useEffect(() => {
        fetch('https://starit-api.herokuapp.com/api/feedback')
            .then(rez => rez.json())
            .then(
                (rezult) => {
                    setIsLoaded(true);
                    setData(rezult);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },[]);

      
    for (let i=0; i<data.length; i++) {
        let fbo_id = data[i].fbo_id - 1;
        let strImg = data[i].photo;
        let strImgArray = [];
        let pos = 0;
        if ((i === 5) || (i === 8)) {
            strImgArray.push('');
        }
        else {
        while (true) {
            let foundPos = strImg.indexOf('==',pos);
            if (foundPos === -1) {
                if (strImg[pos] === 'd') {
                    strImgArray.push(strImg.slice(pos));
                }
                break
            };
            if (strImg[pos] === ',') {
                strImgArray.push(strImg.slice(pos+1,foundPos));
                pos = foundPos + 3;
            }
            else {
                strImgArray.push(strImg.slice(pos,foundPos));
                pos = foundPos + 2;
            }
        };

        if ((strImgArray[0] === undefined) && (strImg[0] === 'd')) {
            strImgArray.push(strImg.slice(0));
        };
    }
        dataFull[i] = {
            id: data[i].id,
            point: dataObject[fbo_id].object_name,
            stars: data[i].stars,
            comment: data[i].comment,
            photo: strImgArray,
            date: data[i].date,
            reaction: (data[i].reaction_needed)?'Yes':'No'
        }
    }

    const columns = [
        {
            name: '№',
            selector: 'id',
            sortable: true,
            width: '50px',
        },
        {
            name: 'Object Name',
            selector: 'point',
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
            selector: 'comment',
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
            cell: row => <ImageView photo={row.photo} />                       
        },
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
            center: true,
            compact: true,  
            width: '130px',         
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

    if (error) {
        return <div>ERROR: {error.message}</div>
    }
    else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else {
        return(
            <div>
            <DataTable
                columns={columns}
                data={dataFull}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5,10]}
                customStyles={customStyles}
                striped={true}
            />
            </div>
        );
    };
}


export default TableFeedback;