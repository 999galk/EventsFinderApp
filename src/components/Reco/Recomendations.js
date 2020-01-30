import React from 'react';

const Recomendations = ({onSearchChange}) => {
	return(
		<div className='mt5 mb3'>
			<h1>Recomended for you:</h1>
			<div className='shadow-5' style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
				<div className='grow br3 ma3 dib bw2 shadow-5 pointer'>
					<div className='relative'>
	      				<img className='br3' alt='Travel' src="https://content.skyscnr.com/b62fd4346123d1eb9f7525c8f72f2a8a/stock-photo-new-york-city-at-twilight-128894587.jpg?resize=400px:400px" width='550px' height='450px'/>
	      				<div className='br3 absolute bottom-0 left-0 h-25 bg-black w-100'>
	      					<div className='b white f3 mt4'>
	    					New York, NY, <span className='f4'>United States</span>
		  					</div>
		      				<div className='f4 mt2 pointer' style={{color:'#ff884d'}} onClick={() => onSearchChange(true, 'New York', 'US')}>
		      				Get Events >
		      				</div>
		      			</div>
	      			</div>
	    		</div>
	    		<div className='tc grow br3 ma3 dib bw2 shadow-5 pointer'>
					<div className='relative'>
	      				<img className='br3' alt='Travel' src="https://images.contentstack.io/v3/assets/bltfc5888374a59f773/blta62df7d4a3f7004b/5d4826e7c9f15943d8429534/Berlin_Mitte_iStock-1048311846.jpg?auto=webp&format=pjpg&quality=80&width=640&height=720&fit=crop" width='300px' height='450px'/>
	      				<div className='br3 absolute bottom-0 left-0 h-25 bg-black w-100'>
	      					<div className='b white f3 mt4'>
	    					Berlin, <span className='f4'>Germany</span>
		  					</div>
		      				<div className='f4 mt2 pointer' style={{color:'#ff884d'}} onClick={() => onSearchChange(true, 'Berlin', 'DE')}>
		      				Get Events >
		      				</div>
		      			</div>
	      			</div>
	    		</div>
	    		<div className='tc grow br3 ma3 dib bw2 shadow-5 pointer'>
					<div className='relative'>
	      				<img className='br3' alt='Travel' src="https://www.tosomeplacenew.com/wp-content/uploads/2019/11/Fall-is-a-great-time-to-visit-Paris-.jpg" width='300px' height='450px'/>
	      				<div className='br3 absolute bottom-0 left-0 h-25 bg-black w-100'>
	      					<div className='b white f3 mt4'>
	    					Paris, <span className='f4'>France</span>
		  					</div>
		      				<div className='f4 mt2 pointer' style={{color:'#ff884d'}} onClick={() => onSearchChange(true, 'Paris', 'FR')}>
		      				Get Events >
		      				</div>
		      			</div>
	      			</div>
	    		</div>
			</div>
		</div>
	);
}

export default Recomendations;