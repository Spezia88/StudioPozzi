import React,{ Component } from 'react';

import Iframe from 'react-iframe';





const IframeRatio =()=>{
	
	return(
		
		 <Iframe url="https://box.ratio.it/2/index.php?bg=ffffff&text=333333&link=45bdbf&news=428bca&border=dddddd&logo=logo6&t=959725b570d3d0d51e18e799a987a8c0"
				        width="100%"
				        height="100px"
				        display="initial"
				        position="relative"
				        styles={{border:"1px solid #d9d9d9", overflow:"visible", width:"100%"}}
				        allowFullScreen />
		
	)
};

export default IframeRatio;