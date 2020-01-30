import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { getCode } from 'country-list';


const initialState = {
	country : '',
	countryCode : '',
	city : '',
	cityList : [],
	period : '',
	calChanged : false,
	supportedCountryCode : ["US", "AU", "AT", "BE", "CA", "DK", "FI", "FR", "DE", "GB", "IE", "LU", "MX", "NL", "NZ", "NO", "PL", "PT", "ES", "SE", "CH", "AE"]
}

class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = initialState;
	}

	onCountryChange (val) {
	    this.props.onSearchChange(false, '', '');
	    this.setState({ country: val },this.getCountryCode);
	}


	getCountryCode = () => {
		const countryName = this.state.country;
		if(countryName === 'United States'){
			this.setState({countryCode : 'US'}, this.getCitiesOfCountry);
		}else if(countryName === 'United Kingdom'){
			this.setState({countryCode : 'GB'}, this.getCitiesOfCountry);
		}else{
			this.setState({countryCode : getCode(countryName)}, this.getCitiesOfCountry);
		}
	}

	getCitiesOfCountry = () => {
		fetch('http://localhost:5000/cities', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        code: this.state.countryCode
	      })
	    })
	    .then(res => res.json())
	    .then(data => {
	    	this.setState({cityList : data}, this.updateCityOptions);
	    })
	}

	updateCityOptions = () => {
		const cities = this.state.cityList;
		let select = document.getElementById('citySelector');
		if(select.childElementCount){
			this.removeCities(select);
		}
	    cities.forEach(city => {
	    	let op = document.createElement('option');
	    	op.textContent = city;
	    	op.value = city;
	    	select.appendChild(op);
	    	}, this.setState({city : cities[0]}))  
	}

	onCityChange = () => {
		const select = document.getElementById('citySelector');
		const val = select.value;
	    this.props.onSearchChange(true, val, this.state.countryCode);
		this.setState(initialState);
		this.removeCities(select);
  	}

	removeCities = (select) => {
		for(let i=1;i<select.childElementCount;i++){
			select.children[i].remove();
		}
	}
	
	componentDidMount() {
		this.forceUpdate();
  	}


  	render(){
  		const {country, supportedCountryCode} = this.state;
		return (
			<div className='pa5' style={{paddingRight:'6rem', paddingLeft:'5rem'}}>
				<h1> Where are you traveling to?</h1>
				<div className='br3 pa5 ma3 ml5 mr5 shadow-5' style={{display:'flex', justifyContent:'center', flexWrap: 'wrap', backgroundColor:'#24478f'}}>
					<div>
					<CountryDropdown
					className='pa3 ba br3 b--blue bg-lightest-blue ma2 mw5'
			          value={country}
			          onChange={(val) => this.onCountryChange(val)}
			          whitelist={supportedCountryCode}/>
			         </div>
					<div id='cities'>
						<select id='citySelector' className='pa3 ba br3 b--blue bg-lightest-blue ma2 mw5' onChange={this.onCityChange}>
							<option value>Select City</option>
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;