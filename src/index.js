import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CookieBanner,{BannerContent,cookie} from 'react-cookie-banner';

import './index.css';
import {BrowserRouter as Router,hashHistory} from 'react-router-dom';

cookie("www.studiopozzicommercialisti.it", "true",5000000);




const bannerContentProps = {
      styles: {
              banner: {
                fontFamily: 'Source Sans Pro',
                height: 77,
                background: 'rgba(52, 64, 81, 0.88) url(https://rawgit.com/buildo/react-cookie-banner/master/examples/cookie.png) 20px 50% no-repeat',
                backgroundSize: '30px 30px',
                backgroundColor: '#00345c',
                fontSize: '16px',
                fontWeight: 600
              },
              button: {
                display:'none',
                border: '1px solid white',
                borderRadius: 4,
                width: 66,
                height: 32,
                lineHeight: '32px',
                background: 'transparent',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                opacity: 1,
                right: 20,
                marginTop: -18
              },
              message: {
                display: 'block',
                padding: '10px 0px 0px 50px',
                lineHeight: 1.3,
                textAlign: 'left',
                marginRight: 74,
                color: 'white'
              },
              link: {
                textDecoration: 'none',
                fontWeight: 'bold'
              }

      },
      message: "Per garantire la migliore esperienza di navigazione possibile questo sito utilizza cookie tecnici e di terze parti.Scorrendo questa pagina acconsenti all'utilizzo dei cookie.",
      link: { msg: 'Per saperne di più clicca qui', url: '/informativacookie' },
      buttonMessage: 'OK',
      className:'my-react-cookie-banner',
      onAccept:()=>{cookie("accepts-cookies", "true", 10000,'/','studiopozzicommercialisti.it')}
    };

ReactDOM.render(
  <Router history={hashHistory}>	
  		<div>
	  		<CookieBanner >
			 	<BannerContent {...bannerContentProps}  />
			 </CookieBanner>
	  		<App />
  		</div>
   </Router > 
  ,
  document.getElementById('root')
);
