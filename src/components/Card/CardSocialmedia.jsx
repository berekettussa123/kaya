import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { RotateLeft } from '@material-ui/icons';
export default function CardSocialmedia(props) {
  return (
    <div className='SocialmediaContainer'>
        <div className="socialHeader">Social Media Handles</div>
        <div className="iconAndInputContainer">
            <div className="iconAndInput">
                <div className="iconContainer">
                    <FacebookIcon style={{color:'#4267B2' , transform:'rotateZ(-45deg)'}}/>
                </div>
                <div className="inputContainer">
                    <input type="text" name='facebook_handle' onChange={props.handleChange} defaultValue={props.values[0]}/>
                </div>
            </div>
            <div className="iconAndInput">
                <div className="iconContainer">
                    <TwitterIcon style={{color:'#00acee' , transform:'rotateZ(-45deg)'}}/>
                </div>
                <div className="inputContainer">
                    <input type="text" name='twitter_handle' onChange={props.handleChange} defaultValue={props.values[1]}/>
                </div>
            </div>
            <div className="iconAndInput">
                <div className="iconContainer">
                    <InstagramIcon style={{color:'#3f729b' , transform:'rotateZ(-45deg)'}}/>
                </div>
                <div className="inputContainer">
                    <input type="text" name='instagram_handle' onChange={props.handleChange} defaultValue={props.values[2]}/>
                </div>
            </div>
            <div className="iconAndInput">
                <div className="iconContainer">
                    <YouTubeIcon style={{color:'#FF0000' , transform:'rotateZ(-45deg)'}}/>
                </div>
                <div className="inputContainer">
                    <input name='youtube_handle' type="text" onChange={props.handleChange} defaultValue={props.values[3]}/>
                </div>
            </div>
            <div className="iconAndInput">
                <div className="iconContainer">
                    <LinkedInIcon style={{color:'#0072b1 ' , transform:'rotateZ(-45deg)'}}/>
                </div>
                <div className="inputContainer">
                    <input type="text" name='linkedin_handle' onChange={props.handleChange} defaultValue={props.values[4]}/>
                </div>
            </div>

        </div>
    </div>
  )
}
