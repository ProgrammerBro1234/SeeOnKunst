import logo from './logo.svg';
import './App.css';
//import anime from 'animejs/lib/anime.es.js';
import anime from 'animejs';
import React, { useState } from 'react';
import { useEffect } from 'react';


export default function App() {
  return (
    <>
      <DotGrid/>
      <Mesopotaamia/>
      
      
    </>

  );
}



const grid_width = 69;
const grid_height = 10;

const DotGrid = () => {



  const handleDotClick = (e) => {
    
    
    
    anime({
      targets: ".Punkt",
      scale: [
        {value: 1.35, easing: "easeOutSine", duration: 250},
        {value: 1, easing: "easeInOutQuad", duration: 500}
      ],
      translateY: [
        {value: -100, easing: "easeOutSine", duration: 1},
        {value: 1, easing: "easeInOutQuad", duration: 500}
      ],
      
      opacity: [
        {value: 1.35, easing: "easeOutSine", duration: 250},
        {value: 1, easing: "easeInOutQuad", duration: 500}
      ],
      delay: anime.stagger(100, {
        grid: [grid_height, grid_width],
        from: e.target.dataset.index,
      })
    
    });

    

  };

  const dots = [];

  let index = 0;

  for (let i = 0; i < grid_height; i++){
    const row = []
    for (let j = 0; j < grid_width; j++) {
      row.push(
        
        <div
          className="Punkt" data-index={index} onClick={handleDotClick}>
            

        </div>
        
    

      );
      index = index +1
    }
    dots.push(<div>{row}</div>);
  }

  return (
    dots
  );

}




const Mesopotaamia = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.5, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []); // Run the animation only once when the component mounts

  return (
    <div>

     
      
      <svg style={{ textAlign: "center", alignItems: "center", justifyContent: "center"}} viewBox="0 0 400 400" width="1500" height="200">
        <text id="textPath" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="120">
          <tspan x="50" dy="0">E</tspan>
          <tspan x="125" dy="0">S</tspan>
          <tspan x="200" dy="0">I</tspan>
          <tspan x="275" dy="0">A</tspan>
          <tspan x="350" dy="0">J</tspan>
          <tspan x="425" dy="0">A</tspan>
          <tspan x="500" dy="0"> </tspan>
          <tspan x="575" dy="0">K</tspan>
          <tspan x="650" dy="0">U</tspan>
          <tspan x="725" dy="0">N</tspan>
          <tspan x="800" dy="0">S</tspan>
          <tspan x="875" dy="0">T</tspan>
        </text>
      </svg>
      <div style={{display: "flex"}}>
        <div className="kast" >
        <h3 className='pealkirjad'>Paleoliitikum
          <h5 className='alapealkiri'>600 000 - 10 000eKr</h5>
          </h3>
        <div style={{display: "flex"}}>
        
          <div className='tekstiKast'>

            <ul>
              <li>koopamaalingud         </li>
              <li>väike skulptuur</li>
              <li>inimfiguur</li>
            </ul>
          </div>
          <div className='pildikast'>
            <img width="100" height="100" src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/3695/images/file-5976f26c8701c.jpg'></img>
          </div>
          
          <div>
            <img width="100" height="100" src='https://p.ohtuleht.ee/59/i/2019/9/12/ebnzdmuu.nde.jpg'></img>
          </div>
        </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'>Mesoliitikum
        <h5 className='alapealkiri'>10 000 - 5000eKr</h5>
        </h3>
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>tööriistad</li>
            <li>stiliseerimine</li>
            <li>vanimate asulate teke, kogukond</li>
            <li>kromlehh</li>
            <li>dolmen</li>
            
          </ul>
        </div>

        <div className='pildikast'>
            <img width="100" height="100" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Macro%2C_Liquid_drop_on_Feather%2C_70-300mm-Coupler_%26_reverse_Lens-213.jpg'></img>
          </div>
          
          <div>
            <img width="100" height="100" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Stonehenge_Total.jpg/300px-Stonehenge_Total.jpg'></img>
          </div>
      </div>

      
    </div>
    <div className="kast">
      <h3 className='pealkirjad'>Neoliitikum
        <h5 className='alapealkiri'>5000 - 1800 eKr</h5>
        </h3>
      
      <div style={{display:"flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>põlluharimine</li>
            <li>loomakasvatus</li>
            <li>koopamaalingud - hobune, ratas</li>
          </ul>
        </div>
        <div className='pildikast'>
            <img width="100" height="100" src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/3695/images/file-5976f26c8701c.jpg'></img>
          </div>
          
          <div>
            <img width="100" height="100" src='https://p.ohtuleht.ee/59/i/2019/9/12/ebnzdmuu.nde.jpg'></img>
          </div>
      </div>

      
      
    </div>
  </div>

  <svg style={{ textAlign: "center", alignItems: "center", justifyContent: "center"}} viewBox="0 0 400 400" width="1300" height="200">
        <text id="textPath" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="120">
          <tspan x="50" dy="0">M</tspan>
          <tspan x="125" dy="0">E</tspan>
          <tspan x="200" dy="0">S</tspan>
          <tspan x="275" dy="0">O</tspan>
          <tspan x="350" dy="0">P</tspan>
          <tspan x="425" dy="0">O</tspan>
          <tspan x="500" dy="0">T</tspan>
          <tspan x="575" dy="0">A</tspan>
          <tspan x="650" dy="0">A</tspan>

          <tspan x="750" dy="0">M</tspan>
          <tspan x="825" dy="0">I</tspan>
          <tspan x="900" dy="0">A</tspan>
          <tspan x="975" dy="0"> </tspan>
          <tspan x="1050" dy="0">K</tspan>
          <tspan x="1125" dy="0">U</tspan>
          <tspan x="1200" dy="0">N</tspan>
          <tspan x="1275" dy="0">S</tspan>
          <tspan x="1350" dy="0">T</tspan>

        </text>
      </svg>
      <div style={{display: "flex"}}>
        <div className="kast" >
        <h3 className='pealkirjad'>Paleoliitikum
          <h5 className='alapealkiri'>600 000 - 10 000eKr</h5>
          </h3>
          

        <div className='tekstiKast'>
          <ul>
            <li>
              hello
            </li>
          </ul>
        </div>
      </div>
        <div className="kast" >
      <h3 className='pealkirjad'>Mesoliitikum
        <h5 className='alapealkiri'>10 000 - 5000eKr</h5>
        </h3>
        

      <div className='tekstiKast'>fsadf</div>
    </div>
    <div className="kast">
      <h3 className='pealkirjad'>Neoliitikum
        <h5 className='alapealkiri'>5000 - 1800 eKr</h5>
        </h3>
      <div className='tekstiKast'>sadf</div>
      <div></div>
    </div>
  </div>
      
    </div>
  );
};

