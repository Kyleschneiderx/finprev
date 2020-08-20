  
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AdsList from './adsList'


 


const User = (props) => {


    const [Ads, setAds] = useState()
    console.log(Ads)



    useEffect(() => {
        axios.get(`https://graph.facebook.com/v8.0/${props.match.params.userId}/ads?fields=effective_status%2Cname%2Ccampaign_id%2Cid%2Cpreviews.ad_format(DESKTOP_FEED_STANDARD)&filtering=%5B%7B'field'%3A'effective_status'%2C%20'operator'%3A'IN'%2C%20'value'%3A%20%5B'ACTIVE'%5D%7D%5D&access_token=${props.match.params.userToken}`)
        .then(res => {
            setAds(res.data.data)
            console.log(Ads)
            }).catch(error => {
                props.history.push("/home")
            })
    },[])



    return(
        <>
        <div className="artists_list">
            <h3> Ad Accounts </h3>
            <div className="artist_container">
                <AdsList allAds={Ads}/>
            </div>

        </div>
        </>
    )
}

export default User;