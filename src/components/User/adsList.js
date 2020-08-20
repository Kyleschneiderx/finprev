  
import React from 'react';
import { Link } from 'react-router-dom';



const AdsList = ({allAds}) => {

    const list = (values) => (
        values ?
            values.map(item => (
                    <div
                      className="ads-list__item"
                      key={item.id}
                      dangerouslySetInnerHTML={{__html: item.previews.data[0].body}}
                    />
            ))
        : null
    )

    return(
        <div className="shell shell--fluid">
            <div className="ads-list">
                {list(allAds)}
            </div>

        </div>
    )

}


export default AdsList;