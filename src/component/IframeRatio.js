import React,{ Component } from 'react';

import Iframe from 'react-iframe';





const IframeRatio =()=>{
	
	return(
		
		 <Iframe url="https://wcims.ratio.it/lframe/?t=959725b570d3d0d51e18e799a987a8c0"
				        width="100%"
				        height="450px"
				        display="initial"
				        position="relative"
				        styles={{border:"1px solid #d9d9d9", overflow:"visible", width:"100%", height:"100px"}}
				        allowFullScreen />
		
	)
};

export default IframeRatio;