import React from 'react';
import { Carousel } from 'antd';
import { url } from 'inspector';
//import '../assets/b1.webp'

const contentStyle1: React.CSSProperties = {
  
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  
  backgroundImage:`url(${require("../assets/b1.webp")})`,
  backgroundSize:"100vw 33vw",
  height:"33vw",
  backgroundRepeat:"no-repeat"
};

const contentStyle2: React.CSSProperties = {
  
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  
  backgroundImage:`url(${require("../assets/b2.webp")})`,
  backgroundSize:"100vw 33vw",
  height:"33vw",
  backgroundRepeat:"no-repeat"
};

const contentStyle3: React.CSSProperties = {
  
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  
  backgroundImage:`url(${require("../assets/b3.webp")})`,
  backgroundSize:"100vw 33vw",
  height:"33vw",
  backgroundRepeat:"no-repeat"
};

const Carousel1: React.FC = () => (
  <Carousel autoplay>
    <div >
        
      <div style={contentStyle1}></div>
    </div>
    <div>
      <h3 style={contentStyle2}></h3>
    </div>
    <div>
      <h3 style={contentStyle3}></h3>
    </div>
    
  </Carousel>
);

export default Carousel1;