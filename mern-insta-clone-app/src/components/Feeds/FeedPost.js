import React, {useState, useEffect} from 'react'
import {Form, Button, Card,Image } from 'react-bootstrap'
import logo from '../../Assets/instalogo.png';
import reslogo from '../../Assets/passres.png'
import i1 from '../../Assets/1.jpg'
import i2 from '../../Assets/2.jpg'
import i3 from '../../Assets/3.jpg'
import i4 from '../../Assets/4.jpg'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

function FeedPost() {
    // TimeAgo.addDefaultLocale(en)
 
    // Create formatter (English)
    // const timeAgo = new TimeAgo('en-US')
    
    
    // const agoTime=timeAgo.format(new Date('Mon Apr 21 2020 10:10:05 GMT+0530 (India Standard Time)'))

    const agoTime="8 hours ago"
    const [like,setLike]=useState(true);
    const [heartData,setHeartData]=useState();
    useEffect(() => {
        setHeartData(getHeart());
    
    }, [like])
    // var heartData=<div></div>;
    function getHeart(){
       
        if(like)
        {
            return <i class="fa fa-heart likeHeart" aria-hidden="true" onClick={likeToggel}></i>
        }
        else
        {
            return <i class="fa fa-heart-o" aria-hidden="true" onClick={likeToggel}></i>
        }
       
    }

    const likeToggel=()=>{
        setLike(!like);
    }

    return (
        <div>
            
            <Card  className='postCard'>
             <Card.Header className='postCardHead'>
             <img src={i1} className='profilePicPost'/>
             <div className = 'postHeadText'>
                 <div className='unamePost'>Sruthi Vellore</div>
                 <div className='locPost'>Hyderabad</div>
             </div>

            </Card.Header>
                    
            <Card.Body className='postCardBody'>
            <img src={i1} className='picPost'/>
  
            </Card.Body>
            <Card.Body className='postCardBodyLike'>
                <div className = 'postBodyIcons'>
                <div className="likeIcon">
                            {heartData}
                        </div>
                         
                        <div className="commentIcon">
                            <svg aria-label="Comment" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                        </div>
                </div>
                <div className='postCardBodyText'>
                    <div> <span className=' bold'>300 likes</span></div>
                    <div> <span className=' bold'>Sruthi Vellore</span> Am I cutee ?  😢😢😢</div>
                    <div class='postCardComments'>
                        <div className ='commentExpansion'>View all comments</div>
                        <div><span className=' bold'>Shithanshu</span> Ofcourse...!</div>   
                    </div>  
                    <div><span className="grey sm">{agoTime}</span></div>  
                               
                </div>

                

                        
            </Card.Body>
            <Card.Footer className='postCardFooter'>
                <form className='commentForm'>
                <textarea className='commentFormArea' placeholder='Add a comment...'></textarea>
                <button className='commentFormButton buttonForm' disabled>Post</button></form>
            </Card.Footer>
            </Card>

            
        </div>
    )
}

export default FeedPost
