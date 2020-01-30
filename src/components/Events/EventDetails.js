import React from 'react';

const EventDetails = ({ eventImg, eventLink, eventTitle, eventClicked, SaveSearch, isSignedIn}) => {
	return(
		<div id='details' className='tc dib br3 pa2 ma4 bw2 mw5 mw7-ns' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
			<div id='eventDetails' className='center pa3 ph5-ns'>
				<h3 className='mw5 center'>{eventTitle}</h3>
				<img src={eventImg} alt='eventImg' style={{width:'350px', height:'250px', display:'block'}}/>
				<a href={eventLink} className='ma2 mt3 f3 white db' target="_blank" rel="noopener noreferrer">Order Tickets Now!</a>
			{
				(isSignedIn && eventClicked)
				?<div id='buttonDiv' className='mt3'>
					<button className='mt1 white b pv2 ph3 bg-gray bn br-pill pointer' onClick={SaveSearch} title="Add this event to my Google Calendar">+ Google Calendar</button>
				</div>
				: ( eventClicked
					? <div>*Log in to add events to your Google Calendar!</div>
					:<div></div>
				)
			}
			</div>
		</div>
	)
}

export default EventDetails;