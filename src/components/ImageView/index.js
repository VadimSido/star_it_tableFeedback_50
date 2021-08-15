import React from 'react';
import styles from './ImageView.module.css';

const ImageView = ({photo}) => {
    const imgStrView = photo;
    const itemSrcView = imgStrView.map((listSrcView,i) => 
        <div className={styles.container} key={i}>
            <img src={listSrcView} alt="photo" className={styles.itemImg}/>
        </div>
    );

    return(
        <div>
            {itemSrcView}
        </div>
    );
};

export default ImageView;