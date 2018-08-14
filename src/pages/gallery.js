import React from "react"
import Link from "gatsby-link"
import '../styles/styles.css'
import MediaQuery from 'react-responsive'
import BarNav from '../frame/header/nav/BarNav'
import BurgerNav from '../frame/header/nav/BurgerNav'
import Carousel from '../content/Carousel'
import Headroom from 'react-headroom'

export default class Gallery extends React.Component {
	render() {
		return (
			<div>
		<MediaQuery minDeviceWidth={1224}>
			<div>
				<Headroom>
					<BarNav />
				</Headroom>
				<Carousel />
				<Carousel />
			</div>
		</MediaQuery>

		<MediaQuery maxDeviceWidth={1224}>
      		<BurgerNav></BurgerNav>
    	</MediaQuery>
  	</div>
		)
	}
	
	

}


