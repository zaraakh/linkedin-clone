import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitles) => 
       (

        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitles}</p>
            </div>
        </div>
      )
    ;

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      {newsArticle('Zara Kh', "Top news - New Job")}
    {newsArticle("1234", "123")}
    </div>
  )
}

export default Widgets
