import './App.css';
import anime from 'animejs';
import { useEffect } from 'react';






export default function App() {

  useEffect(() => {
    
    
    
    const sections = [
      document.querySelector("#section-one"),
      document.querySelector("#section-two"),
      document.querySelector("#section-three"),
      document.querySelector("#section-four"),
      document.querySelector("#section-five"),
      document.querySelector("#section-six"),
      document.querySelector("#section-seven"),
      document.querySelector("#section-eight"),
      document.querySelector("#section-nine"),
      document.querySelector("#section-ten"),
      document.querySelector("#section-eleven"),
      document.querySelector("#section-twelve"),
      document.querySelector("#section-thirteen"),
      document.querySelector("#section-fourteen"),
    ];

    function callbackFunction(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
        }
      });
    }

    const options = {};
    const observer = new IntersectionObserver(callbackFunction, options);
    sections.forEach(section => observer.observe(section));

    // Clean up observer on component unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Esimene/>
      <DotGrid/>
      <Esiaeg/>
      <Mesopotaamia/>
      <VanaEgiptus/>
      <Egeuse/>
      <VanaKreeka/>
      <Rooma/>
      <Varakristlik/>
      <Bytsants/>
      <Keskaeg/>
      <Romaani/>
      <Gooti/>
      <GootikaEestis/>
      <VaraRenessanss/>
      <KõrgRenessanss/>
      <RenessanssMSE/>
      
    </>

  );
}



const grid_width = 27;
const grid_height = 9;

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
    <div style={{textAlign: "center", alignItems: "center"}}>{dots}</div>
  );

}








const Esiaeg = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
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
      
     
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 150 20">
          <text id="textPath" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="7">
            <tspan x="50" dy="0">E</tspan>
            <tspan x="60" dy="0">S</tspan>
            <tspan x="70" dy="0">I</tspan>
            <tspan x="80" dy="0">A</tspan>
            <tspan x="90" dy="0">E</tspan>
            <tspan x="100" dy="0">G</tspan>
            
          </text>
        </svg>
      </div>

      <div className='container'>
        <div className="kast"  >
          <h3 className='pealkirjad'>Paleoliitikum</h3>
            <h5 className='alapealkiri'>600 000 eKr - 10 000 eKr</h5>
            
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>koopamaalingud         </li>
                <li>väike skulptuur</li>
                <li>inimfiguur</li>
              </ul>
              <figure>
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Loewenmensch1.jpg/150px-Loewenmensch1.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Lõvimess Hohlenstein Stadel 40 000 eKr - 35 000 eKr</figcaption>
              </figure>
              <figure>
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venus_von_Willendorf_01.jpg/220px-Venus_von_Willendorf_01.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Willendorfi veenus 25 000 eKr</figcaption>
              </figure>
            </div>
            
          </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'>Mesoliitikum</h3>
        <h5 className='alapealkiri'>10 000 eKr - 5000 eKr</h5>
        
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>tööriistad</li>
            <li>stiliseerimine</li>
            <li>vanimate asulate teke, kogukond</li>
            <li>kromlehh</li>
            <li>dolmen</li>
            
          </ul>
          <figure>
            <img className='pildikast' src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/3695/images/file-5976f26c8701c.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Altamira koobas, vanus: 15 000</figcaption>
          </figure>
          <figure>
            
            <img className='pildikast' src='https://i.err.ee/smartcrop?type=optimize&width=1472&aspectratio=16%3A10&url=https%3A%2F%2Fs.err.ee%2Fphoto%2Fcrop%2F2015%2F04%2F12%2F226830h717a.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Lascaux koobas, vanus: 18 000a</figcaption>
          </figure>
        </div>

        
        </div>

      
      </div>
    <div className="kast" >
      <h3 className='pealkirjad'>Neoliitikum</h3>
        <h5 className='alapealkiri'>5000 eKr - 1800 eKr</h5>
        
      
      <div style={{display:"flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>põlluharimine</li>
            <li>loomakasvatus</li>
            <li>koopamaalingud - hobune</li>
          </ul>
          <figure>
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Macro%2C_Liquid_drop_on_Feather%2C_70-300mm-Coupler_%26_reverse_Lens-213.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Dolmen Prantsusmaal, vanus: 6500 a</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://images.immediate.co.uk/production/volatile/sites/7/2020/04/GettyImages-105955888-f1865bb.jpg?quality=90&resize=980,654'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Stonehenge Inglismaal, 3500 - 2000 eKr </figcaption>
          </figure>

        </div>
        
        </div>

      
      
      </div>
    </div>
      
    

    
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul >
              <li>Homo Erectus - õpib tuld kasutama, umbes 1 500 000 aastat tagasi</li>
              <li>300 000 eKr - areneb välja Homo Sapiens</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul >
              <li>Innovatsioon - uued leiutised</li>
              <li>Inimajaloo algus</li>
              
            </ul>
          </div>
        </div>


      </div>
  </div>
  );
};

const Mesopotaamia = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath2 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []); // Run the animation only once when the component mounts

  return (
    <div className= "proov" id='section-one'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
    <svg position="sticky" top="8px" viewBox="0 0 210 20" >
          <text id="textPath2" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="9">
            <tspan x="50" dy="0">M</tspan>
            <tspan x="60" dy="0">E</tspan>
            <tspan x="70" dy="0">S</tspan>
            <tspan x="80" dy="0">O</tspan>
            <tspan x="90" dy="0">P</tspan>
            <tspan x="100" dy="0">O</tspan>
            <tspan x="110" dy="0">T</tspan>
            <tspan x="120" dy="0">A</tspan>
            <tspan x="130" dy="0">A</tspan>
            <tspan x="140" dy="0">M</tspan>
            <tspan x="150" dy="0">I</tspan>
            <tspan x="160" dy="0">A</tspan>
            

          </text>
        </svg>
        </div>
      <div className='container1'>
        <div className="kast" >
        <h3 className='pealkirjad'>Sumerid</h3>
          <h5 className='alapealkiri'>3000 eKr - 2340 eKr</h5>
          
          

        <div className='tekstiKast'>
          <ul>
            <li>riik ja kiri - tsivilisatsioon</li>
            <li>vanimad monumentaalehitised - tsikuraadid</li>
            <li>reljeefid - kivisteelid</li>
            <li>silinderpitsatid</li>
          </ul>
          <figure>
            <img className="pildikast" src='https://kunstiabi.weebly.com/uploads/1/0/1/6/10161718/3045406_orig.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Preester-kuningas Gudea 21. saj eKr</figcaption>
          </figure>
          <figure>
            <img className="pildikast" src='https://upload.wikimedia.org/wikipedia/commons/9/94/Warka_mask_%28cropped%29.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Warka mask 3100 eKr</figcaption>
          </figure>
          <figure>
            <img className="pildikast" src='https://time.graphics/uploadedFiles/500/0a/1a/0a1a12450857cbc8206c516fb34d6238.png'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Uri standard 2600 eKr</figcaption>
          </figure>
        
        </div>
        
      </div>
        <div className="kast" >
      <h3 className='pealkirjad'>Akadi riik</h3>
        <h5 className='alapealkiri'>2065 eKr - 1970 eKr</h5>
        
        

      <div className='tekstiKast'>
        <ul>
          <li>Sargoni pea</li>
          <li>Akadi riik oli esimene semiidikeelne Mesopotaamia impeerium, asus Akadi linnas ja seda ümbritsevatel aladel aastatel 2334-2154 eKr. </li>
        </ul>
        <figure>
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sargon_of_Akkad.jpg/220px-Sargon_of_Akkad.jpg'></img>
          <figcaption style={{textAlign: "start", fontSize: "14px"}}>Sargoni pea 2250 - 2200 eKr</figcaption>
        </figure>
      </div>
    </div>
    <div className="kast">
      <h3 className='pealkirjad'>Vana-Babüloonia</h3>
        <h5 className='alapealkiri'>1792 eKr - 1595 eKr</h5>
        
      <div className='tekstiKast'>
        <ul>
          <li>Hammurapi koodeks</li>
        </ul>
        <figure>
        <img className='pildikast' src='https://www.worldhistory.org/image/11755/recreation-of-the-etemenanki-in-babylon/download/'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Etemenaki tsikuraat 14. - 9. saj eKr</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://historyancient.ru/public/40826971.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Hammurapi koodeks 1750 eKr</figcaption>
          </figure>
        
        
      </div>
      
    </div>

    <div className="kast" >
        <h3 className='pealkirjad'>Assüüria</h3>
          <h5 className='alapealkiri'>934 eKr - 609 eKr</h5>
          
          

        <div className='tekstiKast'>
          <ul>
            <li>skulptuur Lamassu</li>
            <li>Assurbanipal - viimane suur valitseja</li>
          </ul>
          <figure>
          <img className='pildikast' src='https://thumbs.dreamstime.com/b/roi-assyrien-tuant-un-lion-47340069.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Assurbanipal 640 eKr</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://www.livius.org/site/assets/files/5334/khorsabad_lamasu.570x0-is-pid8994.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Lamassu 3000 eKr</figcaption>
          </figure>
          

        </div>
      </div>

      <div className="kast" >
        <h3 className='pealkirjad'>Uus-Babüloonia</h3>
          <h5 className='alapealkiri'>626 eKr - 539 eKr</h5>
          
          

        <div className='tekstiKast'>
          <ul>
            <li>rippaiad</li>
            <li>Ištari väravad</li>
          </ul>
          <figure>
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/640px-Hanging_Gardens_of_Babylon.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Babüloni rippaiad 600 eKr</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pergamon_Museum_Berlin_2007yy.jpg/1200px-Pergamon_Museum_Berlin_2007yy.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Ištari värav 575 eKr</figcaption>
          </figure>
          
          
        </div>
      </div>

    </div>
    
    
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul >
              <li>Tsivilisatsiooni häll</li>
              <li>Kiri ja riik</li>
              <li>Savikultuur</li>
              <li>2150 eKr - 2065 eKr, Iraani aladelt Z̄āgrose mägedest pärinevate nomaadidest gutilaste ülemvõim</li>
              <li>Umbes 2500 eKr Sumeri linnriigid hääbusid ja tekkisid suurriigid</li> 
             
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Kutsutakse Ubayid ajajärguks</li>
              
            </ul>
          </div>
        </div>
      </div>
      
   </div>
  );}
const VanaEgiptus = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath7 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className= "proov" id='section-two'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 200 20">
            <text id="textPath7" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">V</tspan>
              <tspan x="60" dy="0">A</tspan>
              <tspan x="70" dy="0">N</tspan>
              <tspan x="80" dy="0">A</tspan>
              <tspan x="90" dy="0">-</tspan>
              <tspan x="100" dy="0">E</tspan>
              <tspan x="110" dy="0">G</tspan>
              <tspan x="120" dy="0">I</tspan>
              <tspan x="130" dy="0">P</tspan>
              <tspan x="140" dy="0">T</tspan>
              <tspan x="150" dy="0">U</tspan>
              <tspan x="160" dy="0">S</tspan>
            </text>
          </svg>
        </div>

        <div className='container'>
        <div className="kast" >
          <h3 className='pealkirjad'>Vana riik</h3>
            <h5 className='alapealkiri'>2700 eKr - 2200 eKr</h5>
            
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>pealinn Memphis</li>
                <li>vaaraode võimu kõrgaega</li>
                <li>Kunsti ülesanne - hauataguse elukindlustamine, vaaraode austamine</li>
              </ul>
              <figure>
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/b/be/Narmer_Palette.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Narmeri palett 2650 eKr</figcaption>
              </figure>
              <figure>
            
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Saqqara_pyramid_ver_2.jpg/1200px-Saqqara_pyramid_ver_2.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Džoseri astmikpüramiid (ja kaamel) 2650 eKr arhitekt Imhotep</figcaption>
              </figure>
              

            </div>
            
          </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'>Keskmine riik</h3>
        <h5 className='alapealkiri'>2000 eKr - 1650 eKr</h5>
        
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>Karanaki tempel</li>
            <li>püramiidid</li>
            
            
          </ul>
          <figure>
            <img className='pildikast' src='https://reisiradar.ee/wp-content/uploads/2023/10/Giza-puramiidid-7.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Giza püramiidid 2500 eKr</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://reisiradar.ee/wp-content/uploads/2023/10/Chephren-ehk-suur-sfinks-3-1024x640.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Suur sfinks</figcaption>
          </figure>
          
          
        </div>

        
        </div>

      
      </div>
    <div className="kast">
      <h3 className='pealkirjad'>Uus riik</h3>
        <h5 className='alapealkiri'>1550 eKr - 1075 eKr</h5>
        
      
      <div style={{display:"flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>obelisk</li>
            <li>Abu Simbeli tempel</li>
            <li>väikselt ja loomutruult kujutatud</li>
            <li>Ehnaton, Tutanhamon</li>
          </ul>
          <figure>
          <img className='pildikast' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/327497644.jpg?k=a9508f136aaf9823c7794bf2806e748957e34f716225633bba912ff5061dbed6&o=&hp=1'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Karnaki tempel 1800 eKr</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/b/b5/Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Luxori tempel 1400 eKr</figcaption>
          </figure>
          

        </div>
        
        </div>

      
      
      </div>
    </div>

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul >
              <li>Religioosne maaühiskond</li>
              <li>Tugevalt hierarhiline - jumal on vaarao kehastus</li>
              <li>U 3000 aastal eKr ühendas Ülem-Egiptuse valitseja Menes Ülem-Egiptuse ja Alam-Egiptuse ühiseks riigiks</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul >
              <li>Teadsid meditsiinist väga palju</li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}

const Egeuse = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath6 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-three'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 150 20">
            <text id="textPath6" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="7">
              <tspan x="50" dy="0">E</tspan>
              <tspan x="60" dy="0">G</tspan>
              <tspan x="70" dy="0">E</tspan>
              <tspan x="80" dy="0">U</tspan>
              <tspan x="90" dy="0">S</tspan>
              <tspan x="100" dy="0">E</tspan>
              
            </text>
          </svg>
        </div>

        <div className='container'>
        <div className="kast" >
          <h3 className='pealkirjad'>Küklaadide kunst</h3>
            <h5 className='alapealkiri'>3200 eKr - 2300 eKr</h5>
            
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>naise pea</li>
                <li>naise figuur</li>
                
              </ul>
              <figure className='yooo'>
                <img className='pildikast' src='https://collectionapi.metmuseum.org/api/collection/v1/iiif/255176/543328/main-image'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Naise pea 2500 eKr</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://images.metmuseum.org/CRDImages/gr/original/DP256411.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Naise figuur 2500 eKr</figcaption>
              </figure>
              

            </div>
            
            
            
          </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'>Minoiline kunst Kreetal</h3>
        <h5 className='alapealkiri'>2000 eKr - 1400 eKr</h5>
        
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>Knossose palee</li>
            <li>freskod Knossose palees</li>
            <li>rituaalne anum</li>  
          </ul>
          <figure>
          <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0ZQa9_rpkh4Rmt1mrV8sAtIQB5N3SGENzLxfYAfymw&s'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Knossose palee 1900 eKr</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://kunstiajalugujne.weebly.com/uploads/2/3/8/3/23831424/934948436.jpg?303'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Madude jumalanna 1600 eKr</figcaption>
          </figure>

          

        </div>

        
          
          
        </div>

      
      </div>
    <div className="kast">
      <h3 className='pealkirjad'>Mükeene kunst</h3>
        <h5 className='alapealkiri'>1600 eKr - 1100 eKr</h5>
        
      
      <div style={{display:"flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>ammutasid inspiratsiooni minoilisest kunstist</li>
          </ul>
          <figure>
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lions-Gate-Mycenae.jpg/1200px-Lions-Gate-Mycenae.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Mükeene Lõvivärav 1250 eKr</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://images.delfi.ee/media-api-image-cropper/v1/f97a66f0-b8fc-11eb-922a-c7bedcd3f781.jpg?w=1200&h=800'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Agamemnoni mask 1500 eKr</figcaption>
          </figure>
          

        </div>
        
          
          
        </div>

      
      
      </div>
    </div>

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul >
              <li>ligikaudu 1450. aastast eKr levis Mükeene tsivilisatsioon Kreeka mandriosalt Kreetale</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul >
              <li>Valitses tsentraliseeritud lossimajandus</li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}

const VanaKreeka = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath5 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-four'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 200 20">
            <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">V</tspan>
              <tspan x="60" dy="0">A</tspan>
              <tspan x="70" dy="0">N</tspan>
              <tspan x="80" dy="0">A</tspan>
              <tspan x="90" dy="0">-</tspan>
              <tspan x="100" dy="0">K</tspan>
              <tspan x="110" dy="0">R</tspan>
              <tspan x="120" dy="0">E</tspan>
              <tspan x="130" dy="0">E</tspan>
              <tspan x="140" dy="0">K</tspan>
              <tspan x="150" dy="0">A</tspan>
              
            </text>
          </svg>
        </div>

        <div className='container'>
        <div className="kast" >
          <h3 className='pealkirjad'>Arhailine periood</h3>
            <h5 className='alapealkiri'>800 eKr - 500 eKr</h5>
            
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>kultuuritase hakkas tõusma</li>
                <li>kujunesid linnriiigid</li>
                <li>dooria - puudub baas, lihtne</li>
                <li>marmor, pronks</li>
                <li>hakati ehitama kiviehitisi</li>
                <li>tähtsaim hoone - tempel</li>
                <li>stoa, agoraa, palestra, gymnasium, kaitserajatised</li>
                
                
              </ul>
              <figure>
              <img className='pildikast' src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/4534/images/file-597aeb7384bbf.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Parthenon Ateena Akropolil 440 eKr</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/e/ea/Kouros_anavissos.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Kroisos Kouros 530 eKr</figcaption>
          </figure>
              

            </div>
            
            
            
          </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'>Klassikaline periood</h3>
        <h5 className='alapealkiri'>500 eKr - 338 eKr</h5>
        
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>joonia - baas, rulli keerduv voluut</li>
            <li>teater</li>
             
          </ul>
          <figure>
          <img className='pildikast' src='https://kunstiabi.weebly.com/uploads/1/0/1/6/10161718/4916198_orig.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Odakandja 445 eKr Polykleitos</figcaption>
          </figure>
          <figure>
            
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/0/05/Temple_of_Athena_Nik%C3%A8_from_Propylaea%2C_Acropolis%2C_Athens%2C_Greece.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Nike tempel Ateena Akropolil 420 eKr</figcaption>
          </figure>
        <figure>
          <img className='pildikast' src='https://www.worldhistory.org/img/r/p/1500x1500/907.jpg'></img>
          <figcaption style={{textAlign: "start", fontSize: "14px"}}>Athena Parthenos 5. saj eKr Pheidias</figcaption>
        </figure>
        </div>

        <div className='pildikast'>
            
          </div>
          
          
        </div>

      
      </div>
    <div className="kast">
      <h3 className='pealkirjad'>Hellenistlik periood</h3>
        <h5 className='alapealkiri'>338 eKr - 30eKr</h5>
        
      
      <div style={{display:"flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>korintose</li>
            <li>rüüvoldid</li>
          </ul>
          
          <figure>
            
          <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nike_of_Samothrake_Louvre_Ma2369_n4.jpg/1200px-Nike_of_Samothrake_Louvre_Ma2369_n4.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Samothrake Nike 200eKr</figcaption>
          </figure>
        <figure>
        <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Front_views_of_the_Venus_de_Milo.jpg/220px-Front_views_of_the_Venus_de_Milo.jpg'></img>
          <figcaption style={{textAlign: "start", fontSize: "14px"}}>Milose Veenus 120 eKr</figcaption>
        </figure>
          
          
          
        </div>
        
          
          
        </div>

      
      
      </div>
    </div>

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Arhailine ajajärk (8.- 6. sajand eKr) oli orjandusliku korra ja linnriikide (polis) tekkimise aeg.</li>
              <li> 8. sajandi keskel eKr algas teine ehk suur kreeka kolonisatsioon (kõrgperiood 7. sajandil ja 6. sajandi I poolel eKr), mida põhjustasid suhteline ülerahvastatus ning kaubanduslikud huvid</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Klassikalise ajajärgu (5. sajand - umbes 330 eKr) esimene pool, nn viiskümmendaastak (470-430 aastail eKr), oli Kreeka poliste õitsenguaeg</li>
              <li>Kreeka-Pärsia sõdade (500-449 eKr) tagajärjel vähenes Joonia linnade tähtsus.</li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}

const Rooma = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath4 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-five'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 200 20">
            <text id="textPath4" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">V</tspan>
              <tspan x="60" dy="0">A</tspan>
              <tspan x="70" dy="0">N</tspan>
              <tspan x="80" dy="0">A</tspan>
              <tspan x="90" dy="0">-</tspan>
              <tspan x="100" dy="0">R</tspan>
              <tspan x="110" dy="0">O</tspan>
              <tspan x="120" dy="0">O</tspan>
              <tspan x="130" dy="0">M</tspan>
              <tspan x="140" dy="0">A</tspan>
              
            </text>
          </svg>
        </div>
      
        <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 170 20">
            <text id="textPath4" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="6">
              <tspan x="50" dy="0">7</tspan>
              <tspan x="55" dy="0">5</tspan>
              <tspan x="60" dy="0">3</tspan>
              <tspan x="65" dy="0">e</tspan>
              <tspan x="70" dy="0">K</tspan>
              <tspan x="75" dy="0">r</tspan>
              <tspan x="80" dy="0">-</tspan>
              <tspan x="85" dy="0">4</tspan>
              <tspan x="90" dy="0">7</tspan>
              <tspan x="95" dy="0">6</tspan>
              <tspan x="100" dy="0">p</tspan>
              <tspan x="105" dy="0">K</tspan>
              <tspan x="110" dy="0">r</tspan>
              
            </text>
          </svg>
        </div>

        <div className='container2'>
        <div className="kast" >
          <h3 className='pealkirjad'>Arhitektuur</h3>
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>kaared, võlvid, kuplid</li>
                <li>põletatud tellis ja betoon</li>
                <li>lubimördi kasutuselevõtt, krohvimine</li>
              </ul>
              <figure>
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pont_du_Gard_BLS.jpg/1200px-Pont_du_Gard_BLS.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Altamira koobas, vanus: 15 000</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/20190406-DSC5193_Panteon.jpg/800px-20190406-DSC5193_Panteon.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Lascaux koobas, vanus: 18 000a</figcaption>
              </figure>
              <figure>
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/0/03/Tavares.Forum.Romanum.redux.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Forum Romanum - linnasüda</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://storage.conocien.do/imagenes/destinos/europa/italia/roma/museos-y-galerias/termas-de-diocleciano.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Diocletianuse termid 300 pKr</figcaption>
              </figure>
              <figure>
                <img className='pildikast' src='https://img1.advisor.travel/1200x630px-Arch_of_Constantine_26.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Constantinuse triumfikaar 315 pKr</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Colosseum 80 pKr</figcaption>
              </figure>
              
              
            </div>
            
            
            
          </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'>Skulptuur ja maal</h3>
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
            <li>portreede valmistamine ja ajalooline reljeef</li>
            <li>Monumendid - ratsamonument, triumfikaar</li>
            <li>kujutati pigem iseennast, mitte jumalaid</li>
            <li>individualiseerimine</li>  
          </ul>
          <figure>
            <img className='pildikast' src='https://time.graphics/uploadedFiles/500/7e/2c/7e2cbf04cf2cb1f5f7e462ecd63dc102.png'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Altamira koobas, vanus: 15 000</figcaption>
          </figure>
          <figure>
            
            <img className='pildikast' src='https://kunstiabi.weebly.com/uploads/1/0/1/6/10161718/3312327_orig.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Keiser Augustus 1.saj</figcaption>
          </figure>
          <figure>
            
            <img className='pildikast' src='https://kunstiabi.weebly.com/uploads/1/0/1/6/10161718/3687263_orig.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Keiser Augustus 1.saj</figcaption>
          </figure>
          
          
        </div>

        
          
          
        </div>

      
      </div>
    
    </div>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Pärimuse järgi valitsesid üksteise järel 7 kuningat: Romulus, Numa Pompilius, Tullus Hostilius, Ancus Mardus, Tarquinius Priscus, Servius Tuilius ja Tarquinius Superbus</li>
              <li>Latiini sõjas (340-338 eKr) allutas Rooma kogu Latiumi. </li>
              <li>Pärast Pyrrhose üle saavutatud võitu alistati aastaks 270 eKr Lõuna-Itaalia.</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Keskmine eluiga oli Vanas-Roomas 25 eluaastat.</li>
              <li>Alates esimese sajandi (eKr) lõpust, oli valitsejatel kombeks iga päev immuunsüsteemi tugevdamiseks võtta väike annus mürki. Mürk kandis nime mithridatium ja see pandi valitseja Mithridates VI  (120-63 eKr) järgi, kes võttis selle kasutusele.</li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}

function Viimane() {
  return (
    <div></div>
  );
}

function Esimene() {
  
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#path-to-animate',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 5000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    });
  }, []);

 


  const bodyBackgroundColor = getComputedStyle(document.body).getPropertyValue('background-color');

  return (
    <div>

      <div style={{display: "flex", justifyContent: "center" }}>
        <svg style={{ position: "sticky", top: "8px" }} width="675" height="163" viewBox="0 0 675 163" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="637" height="112" fill={bodyBackgroundColor}/>
          <path id="path-to-animate2" d="M1 162L21 82M76 162L58.5 82M58.5 82L41 2L21 82M58.5 82H21M158 2L159.656 55L162.219 137L162.812 156M163 162L162.812 156M162.812 156L138 162L114 156L104 143M201 162L230.5 82M290 162L275 82M275 82L260 2L230.5 82M275 82H230.5M484 2L479 3.42857M479 3.42857L428 18L395 55V103L422 143L484 156L553 143L577 103V55L553 18L479 3.42857ZM612 156V3.42857L674 156V3.42857M364 3.42857V122L357 156L337 162H320L310 137" stroke="#1f0640" stroke-width="7"/>
        </svg>
      </div>


      <div style={{display: "flex", justifyContent: "center" }}>
          <svg style={{ position: "sticky", top: "8px", marginTop: "20px" }} width="500" height="60" viewBox="0 0 637 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="637" height="112" fill={bodyBackgroundColor}/>
            <path id= "path-to-animate" d="M9.00001 8C12.9438 12.8202 11.2997 23.7033 10.7778 29.4444C9.95152 38.5334 9.3091 46.6838 7.00001 55.5556C4.35019 65.7365 -0.219 96.8302 3.22223 86.8889C5.74079 79.6131 6.07901 71.8979 8.55556 64.7778C10.0072 60.6044 11.2535 55.137 12.2222 50.7778C13.8643 43.3883 19.0124 29.2772 26.2222 26C31.8508 23.4415 36.9625 19.7166 42.5556 17C49.7603 13.5006 38.3285 25.6723 37 27.2222C30.8738 34.3695 23.298 38.5689 17.7778 46C15.7816 48.6872 11.9385 49.3591 12 53.1111C12.1775 63.9389 23.4965 73.9335 31.2222 80.5556C34.8085 83.6295 44.1253 86.893 45.7778 91.6667C46.4531 93.6176 46.9198 99.4009 48 94" stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path id="path-to-animate" d="M71 94V93" stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path id="path-to-animate" d="M431 97C438.51 97 447.601 87.4894 453.444 83.7778C459.612 79.8606 464.825 75.2087 470.444 70.6111C473.253 68.3133 469.921 79.8916 469.556 80.7778C466.615 87.9058 465.221 95.4515 462.556 102.722C460.451 108.462 462.879 96.4297 463.444 95C466.147 88.1674 473.639 67.5043 477.444 85.4445C477.984 87.9897 478.335 94.8906 480.222 96.7778C481.552 98.1078 485.034 88.0913 485.5 87.0556C486.771 84.2319 490.717 79.5245 494 79.0556C507.022 77.1953 505 89.6156 505 99C505 102.245 505.686 103.169 509.278 102.944C518.543 102.365 528.935 100.131 537.667 97.1111C550.732 92.5916 563.115 85.465 576.389 81.6111C578.946 80.8688 582.43 80.375 584.778 82C587.125 83.6251 587 86.4682 587 89C587 93.7636 579.182 86.6784 577.778 85.7778C570.171 80.8993 558.412 77.0542 552.111 86.0556C550.703 88.0677 549.962 94.5537 551.444 96.7778C553.836 100.366 562.029 99.1138 565.5 98.9445C575.802 98.4419 583.437 91.2502 587.944 82.6111C591.06 76.6405 587.338 78.8026 584.333 82.8889C578.8 90.4144 578 96.9433 578 105.889C578 114.866 593.81 105.044 597.333 103.444C609.758 97.8032 622.753 94.1233 635 88" stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path id="path-to-animate" d="M144 15C131.128 15 112.827 13.9496 110.222 30.5556C108.81 39.5559 118.367 41.7445 125.778 42C127.766 42.0685 130.315 42.3908 132.222 41.7778C138.15 39.8724 130.955 42.5966 128.889 44C122.176 48.5594 117.491 57.082 115 64.5556C111.943 73.7269 110.218 90.5253 117.667 98.2222C128.234 109.141 135.291 103.355 146 98" stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path id="path-to-animate" d="M161 107H160" stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path id="path-to-animate" d="M220 33C221.925 32.3583 223.675 34.7144 225 35.7778C228.072 38.244 231.404 39.6857 235 41.2222C245.484 45.7017 254.981 49.1837 266.556 49C277.119 48.8323 286.344 41.5328 293.778 34.5556C301.133 27.6518 303 20.6618 303 10.8889C303 8.68271 303.647 1.8862 299.778 2.00001C288.437 2.33358 279.076 11.1671 271.778 18.8889C258.351 33.0939 259 48.887 259 67.1111C259 76.229 257.838 87.0715 254.444 95.5556C252.765 99.754 254.99 105.851 248.333 100.556C243.754 96.9125 239.234 94.5446 239 88.2222C238.845 84.0397 241.134 79.722 245.667 78.7778C252.981 77.254 264.568 78.0993 271.444 81.4445C278.527 84.8902 278.94 93.6909 282.778 99.7778C287.335 107.007 299.093 109.927 307 106.333C314.437 102.953 317 92.6342 317 85.2222C317 69.8655 293.812 96.9376 307.444 101.222C313.571 103.148 317.749 102 323.778 102C328.149 102 331.699 100 336 100" stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path id="path-to-animate" d="M332 101C333.109 97.674 338.252 96.7403 341 95C346.565 91.4757 352.771 88.0065 357.444 83.3333C368.027 72.7507 373 55.2209 373 40.6111C373 35.421 373.348 20.9237 368 17.7778C360.66 13.4598 355.089 37.3907 354.222 41.4444C350.199 60.2662 353 81.5991 353 100.889C353 104.252 353.841 97.66 354.111 96.8889C355.626 92.5607 356.635 87.1645 359 83.2222C361.271 79.4364 362.464 77 367 77C381.92 77 370.328 105.786 376.722 106.278C379.946 106.526 383.901 100.458 386 98.5555C391.37 93.6887 395.162 88.3737 399 82.2222C407.519 68.5677 416.502 55.8462 421 40.2222C422.58 34.7342 424.23 27.3971 422.944 21.6111C422.523 19.7166 418.51 32.165 418.444 32.5555C416.275 45.506 417 58.9208 417 72C417 76.035 414.514 96.8305 420.444 97C424.836 97.1255 428.793 97.0516 433 96" stroke="black" stroke-width="3" stroke-linecap="round"/>
            <path id="path-to-animate" d="M405 51C409.697 50.7391 413.783 48.8661 418.667 49.2222C420.934 49.3876 427.922 48.8448 429 51" stroke="black" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
      
        




    </div>
    
  );
}

const Varakristlik = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath5 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-six'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 200 20">
            <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">V</tspan>
              <tspan x="60" dy="0">A</tspan>
              <tspan x="70" dy="0">R</tspan>
              <tspan x="80" dy="0">A</tspan>
              <tspan x="90" dy="0">K</tspan>
              <tspan x="100" dy="0">R</tspan>
              <tspan x="110" dy="0">I</tspan>
              <tspan x="120" dy="0">S</tspan>
              <tspan x="130" dy="0">T</tspan>
              <tspan x="140" dy="0">L</tspan>
              <tspan x="150" dy="0">I</tspan>
              <tspan x="160" dy="0">K</tspan>
              
            </text>
          </svg>
        </div>
      
        

        <div className='container2'>
        <div className="kast" >
          <h3 className='pealkirjad'>Varakristlik kunst</h3>
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>sümbolid</li>
                <li>ikonograafia</li>
                <li>teemad: ristiusu tõed, Piibli sündmused, pühakute lood</li>
                <li>kirikute seintel mosaiik</li>
                <li>arhitektuuris basiilika</li>
                <li>Katakombid - koopad, mille seintesse maeti surnuid</li>
              </ul>
              <figure>
                <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCXFuDA1YRIrNj5uw_S7gSeE26CpTeZ6wJw&s'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Chi-Ro monogramm</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/f/f9/Tesoro_di_san_pietro%2C_sarcofago_di_giunio_basso.JPG'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Junius Bassuse sarkofaag</figcaption>
              </figure>
              
              
              
              
            </div>
            
            
            
          </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'></h3>
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          
        <figure>
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rom%2C_Domitilla-Katakomben%2C_Der_gute_Hirte.jpg/800px-Rom%2C_Domitilla-Katakomben%2C_Der_gute_Hirte.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Hea karjane</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://1.bp.blogspot.com/_WjKvdc4OQyg/TUunXTDu8UI/AAAAAAAAAOk/xNwkUNbLo5A/s1600/4.%2BInterior-776956.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Santa Sabina kirik</figcaption>
              </figure>
              <figure>
                <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVVdTeLLSjZXb-FVP4Ve216WAkmwK8BTj8Q&s'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Santa Maria Maggiore kirik</figcaption>
              </figure>
          
          
        </div>

        
          
          
        </div>

      
      </div>
    
    </div>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>313. a Milano edikt - kristluse legaliseerimine</li>
              <li>380. a kuulutas Theodosius I ristiusu Rooma riigi ametlikuks religiooniks</li>
              <li>Varakristluses kaks perioodi: Constantinuse-eelne ja -järgne</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>kõrgel tasemel on sarkofaage kaunistavad reljeefid, tarbekunstiharudest elevandiluunikerdus, raamatumaal ja mosaiik</li>
              
            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}


const Bytsants = () => {
useEffect(() => {
  // Animation effect using Anime.js
  anime({
    targets: '#textPath5 tspan',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: [0.3, 5],
    translateX: [-10, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}, []);
return (
  <div className='proov' id='section-seven'>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 170 20">
          <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
            <tspan x="50" dy="0">B</tspan>
            <tspan x="60" dy="0">Ü</tspan>
            <tspan x="70" dy="0">T</tspan>
            <tspan x="80" dy="0">S</tspan>
            <tspan x="90" dy="0">A</tspan>
            <tspan x="100" dy="0">N</tspan>
            <tspan x="110" dy="0">T</tspan>
            <tspan x="120" dy="0">S</tspan>
            
            
          </text>
        </svg>
      </div>
    
      

      <div className='container2'>
      <div className="kast" >
        <h3 className='pealkirjad'>Bütsantsi kunst liigid</h3>
        <div style={{display: "flex"}}>
        
          <div className='tekstiKast'>

            <ul>
              <li>arhitektuur</li>
              <li>mosaiigi õitseng</li>
              <li>ikoon</li>
              <li>seinamaal, fresko</li>
              <li>arhitektuuris basiilika</li>
              <li>illumineeritud manuskriptid</li>
            </ul>
            <figure>
              <img className='pildikast' src='https://api.europeana.eu/thumbnail/v3/400/486a1381213fc64b9a0ceb1599c60dbf'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>San Vitale kirik</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mosaic_of_Theodora_-_Basilica_San_Vitale_%28Ravenna%2C_Italy%29.jpg/220px-Mosaic_of_Theodora_-_Basilica_San_Vitale_%28Ravenna%2C_Italy%29.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>San Vitale kiriku mosaiik</figcaption>
            </figure>
            <figure>
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/800px-Hagia_Sophia_Mars_2013.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Hagia Sophia</figcaption>
            </figure>
            
            
            
            
            
          </div>
          
          
          
        </div>


    </div>
      <div className="kast" >
    <h3 className='pealkirjad'>Arhitektuur</h3>
      
    <div style={{display: "flex"}}>
      <div className='tekstiKast'>
        <ul>
            <li>tsentraalehitis</li>
            <li>kreeka ristikujuline põhiplaan</li>
            <li>kuppel</li>
            <li>kirikuhoonetes mosaiigid</li>
            
          </ul>
        
          <figure>
              <img className='pildikast' src='https://i0.wp.com/rayhaber.com/wp-content/uploads/2020/06/ayasofyanin-mozayikleri.jpg?resize=678%2C334&ssl=1'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Hagia Sophia mosaiik</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiGcrRj2UJE8W5I1HmxYY6Lp3qnqgGOAuZw&s'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Anastasis - Kristuse ülestõusmine</figcaption>
            </figure>
      </div>
      </div>
    </div>
  </div>
  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
      <div className='kast'>
        <h3 className='pealkirjad'>Üldajalugu</h3>
        <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
          <ul>
            <li>330. a rajab Constantinus I oma pealinna Konstantinoopoli</li>
            <li>395. a peale keiser Theodosuse surma lõheneb Ida-Rooma ja Lääne-Rooma</li>
            <li>476. a germaani väepealik Odoaker võtab võimu viimaselt Lääne-Euroopa keisrilt</li>
          </ul>
        </div>

      </div>
      <div className='kast'>
        <h3 className='pealkirjad'>Minule oluline</h3>
        <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
          <ul>
            <li>Tänapäeval kasutatava nime "Bütsants" võttis kasutusele 1557. aastal saksa ajaloolane Hieronymus Wolf, et eristada antiikaja Rooma riigi ajalugu Ida-Rooma riigi ajaloost, mida ta vaatles Kreeka keskaegse ajaloona</li>
            
          </ul>
        </div>
      </div>
    </div>

    </div>
  
);}


const Keskaeg = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath5 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-eight'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 170 20">
            <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">K</tspan>
              <tspan x="60" dy="0">E</tspan>
              <tspan x="70" dy="0">S</tspan>
              <tspan x="80" dy="0">K</tspan>
              <tspan x="90" dy="0">A</tspan>
              <tspan x="100" dy="0">E</tspan>
              <tspan x="110" dy="0">G</tspan>
              
              
              
            </text>
          </svg>
        </div>
      
        
  
        <div className='container2'>
        <div className="kast" >
          <h3 className='pealkirjad'>Kunst varakeskajal</h3>
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>
  
              <ul>
                <li>Religioosne sisu</li>
                <li>illumineeritud manuskriptid</li>
                <li>barbarid võtsid omaks ristiusu</li>
                
              </ul>
              <figure>
                <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMXFLHdnoHBRwLrCjJmEIkfZKBQxjc7Qt_w&s'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Theoderichi mausoleum</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://cdn.britannica.com/75/136775-050-5286A3E7/depiction-letters-chi-name-rho-Greek-Christ-c-800-AD.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Book of Kells</figcaption>
              </figure>
              
              
              
              
              
              
            </div>
            
            
            
          </div>
  
  
      </div>
        <div className="kast" >
      <h3 className='pealkirjad'></h3>
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
             
              
            </ul>
          
            <figure>
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Aachen_Germany_Imperial-Cathedral-01.jpg/220px-Aachen_Germany_Imperial-Cathedral-01.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Aacheni lossikabel</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Utrecht124_%28cropped%29.jpg/220px-Utrecht124_%28cropped%29.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Utrechti psalter</figcaption>
              </figure>
        </div>
        </div>
      </div>
    </div>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>naturaalmajandus</li>
              <li>feodaalkord, ühiskonna kolm seisust: vaimulikud, sõjamehed, töötegijad</li>
              <li>1054. a toimus kirikulõhe</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Mõiste keskaeg (lad medium aevum, otsetõlkes "vaheaeg") võtsid kasutusele renessansiaegsed autorid, kes nägid oma ajas antiikkultuuri taassündi ning hakkasid vahepealset aega halvustama</li>
              
            </ul>
          </div>
        </div>
      </div>
  
      </div>
    
  );}

const Romaani = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath5 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-nine'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 170 20">
            <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">R</tspan>
              <tspan x="60" dy="0">O</tspan>
              <tspan x="70" dy="0">M</tspan>
              <tspan x="80" dy="0">A</tspan>
              <tspan x="90" dy="0">A</tspan>
              <tspan x="100" dy="0">N</tspan>
              <tspan x="110" dy="0">I</tspan>
              
              
              
            </text>
          </svg>
        </div>
      
        

        <div className='container2'>
        <div className="kast" >
          <h3 className='pealkirjad'>Romaani stiil 10-12 saj</h3>
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>kasvav jõukus</li>
                <li>esimene kunstistiil Lääne-Euroopas pärast antiikaega</li>
                
                
              </ul>
              <figure>
                <img className='pildikast' src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/5538/images/file-597b7e48dc241.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Speyeri toomkirik</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/7/76/Bayeux_Tapestry_scene44_William_Odo_Robert.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Bayeux vaip</figcaption>
              </figure>
              
              
              
              
              
              
            </div>
            
            
            
          </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'></h3>
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
              
              
            </ul>
          
            <figure>
                <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0zSo-KUVJzLEKRABZrHFTOc-lR57z_y18A&s'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Pisa toomkirik ja baptisteerium</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://reisiradar.ee/wp-content/uploads/2023/10/Basilica-di-San-Marco-5-1024x640.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Püha Markuse kirik Veneetsias</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Vezelay-7776-Bearbeitet.jpg/1200px-Vezelay-7776-Bearbeitet.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>St Madelaine´i katedraal</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/e/e8/Notre-Dame_la_Grande_%28large_short%29.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Notre-Dame la Grande</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/7/7b/Valjala_kirik_2005.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Valjala kirik</figcaption>
              </figure>
        </div>
        </div>
      </div>
    </div>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>arenesid majandussidemed ja taastus linnaelu</li>
              <li>kasvav jõukus, kiriku-ja kloostrihooned</li>
              <li>feodaalühiskond on küps oma kunstistiili loomiseks</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              
              <li>mõnedes romaani kirikutes leiti akustikakeraamikat. Need olid keraamilised potid või anumad, mis olid ehitiste seintesse või lae konstruktsioonidesse sisse müüritud. Nende eesmärk oli parandada hoonete akustikat, muutes heli leviku siseruumides ühtlasemaks ja resonantsi paremini kontrollitavaks. Seda tehnikat kasutasid eelkõige kirikutes, kus koorilaul ja jutluste selge kuulmine olid olulised</li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}


const Gooti = () => {
useEffect(() => {
  // Animation effect using Anime.js
  anime({
    targets: '#textPath5 tspan',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: [0.3, 5],
    translateX: [-10, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}, []);
return (
  <div className='proov' id='section-ten'>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 140 20">
          <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
            <tspan x="50" dy="0">G</tspan>
            <tspan x="60" dy="0">O</tspan>
            <tspan x="70" dy="0">O</tspan>
            <tspan x="80" dy="0">T</tspan>
            <tspan x="90" dy="0">I</tspan>
          </text>
        </svg>
      </div>
  
      <div className='container2'>
      <div className="kast" >
        <h3 className='pealkirjad'>Gooti stiil</h3>
        <div style={{display: "flex"}}>
        
          <div className='tekstiKast'>

            <ul>
              <li>Varagootika - 12. saj teine pool</li>
              <li>Kõrggootika - 13.-16. saj</li>
              <li>Hilisgootika - 15.-16. saj algus</li>
              
              
            </ul>
            <figure>
              <img className='pildikast' src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/5538/images/file-597b7e48dc241.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Speyeri toomkirik</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/7/76/Bayeux_Tapestry_scene44_William_Odo_Robert.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Bayeux vaip</figcaption>
            </figure>
            <figure>
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Saint-Denis_-_Fa%C3%A7ade.jpg/220px-Saint-Denis_-_Fa%C3%A7ade.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Saint-Denis katedraal</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://reisiradar.ee/wp-content/uploads/2023/10/Notre-Dame-ehk-Jumalaema-kirik-Pariisis-1024x640.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Notre-Dame de Paris</figcaption>
            </figure>
          </div>
        </div>
    </div>
      <div className="kast" >
    <h3 className='pealkirjad'>Gooti kunsti tunnusjooned</h3>
      
    <div style={{display: "flex"}}>
      <div className='tekstiKast'>
        <ul>
            
            <li>krislus on mõttemaailma kese</li>
            <li>vitraaži hiilgeaeg</li>
            <li>gooti kunsti tippsaavutus - katedraal</li>
            <li>tervakaar, roidvõlvid, tugipiilarid, tugikaarte süsteem, roosaken</li>
            <li>kolmiksiir, neliksiir, ristlillik, krabi, fiaal, ehisviil</li>
          </ul>
        
          
            <figure>
          
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Notre_Dame_de_Chartres.jpg/200px-Notre_Dame_de_Chartres.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Notre-Dame de Chartres</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Vitrail_Chartres_Notre-Dame_210209_1.jpg/1200px-Vitrail_Chartres_Notre-Dame_210209_1.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Notre-Dame de la Belle Verriere</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://cdn.britannica.com/20/178020-050-A76F28D5/Reims-Cathedral-France.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Notre-Dame de Reims</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sainte_Chapelle_-_Upper_level_1.jpg/220px-Sainte_Chapelle_-_Upper_level_1.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Saint-Chapelle</figcaption>
            </figure>
      </div>
      
      </div>
    </div>
  </div>
  <h3 className='pealkirjad'>Gooti kunst, arhitektuur ja skulptuur Inglismaal, Saksamaal, Itaalias</h3>
  <div className='container'>
      <div className="kast" >
        <h3 className='pealkirjad'>Inglismaal</h3>
        <div style={{display: "flex"}}>
        
          <div className='tekstiKast'>

            <ul>
              <li>Roosakna asemel teravkaarne aken</li>
              
              
              
            </ul>
            <figure>
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Westminster_Abbey_St_Peter.jpg/1200px-Westminster_Abbey_St_Peter.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Westminster Abbey</figcaption>
            </figure>
            
          </div>
        </div>
    </div>
      <div className="kast" >
    <h3 className='pealkirjad'>Saksamaal</h3>
      
    <div style={{display: "flex"}}>
      <div className='tekstiKast'>
        <ul>
            
            <li>ehitusmaterjaliks tellis</li>
          </ul>
        
          
            <figure>
          
              <img className='pildikast' src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/7697/images/file-599a8294417a9.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Kölni katedraal</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://cdn.ipernity.com/137/15/49/26241549.e8ef9c0e.640.jpg?r2'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Markkrahv Ekkehard II ja Uta</figcaption>
            </figure>
            
      </div>
      
      </div>
    </div>
    <div className="kast" >
        <h3 className='pealkirjad'>Itaalias</h3>
        <div style={{display: "flex"}}>
        
          <div className='tekstiKast'>
            <ul>
              <li>Giotto di Bondone</li>
            </ul>
            
            <figure>
              <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Milan_Cathedral_from_Piazza_del_Duomo.jpg/800px-Milan_Cathedral_from_Piazza_del_Duomo.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Milano toomkirik</figcaption>
            </figure>
            <figure>
          
              <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGry_dp9nkELfTWpJKHak-0A71ODJq2fqHA&s'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Doodžide palee</figcaption>
            </figure>
           
          </div>
        </div>
    </div>
  </div>
  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
      <div className='kast'>
        <h3 className='pealkirjad'>Üldajalugu</h3>
        <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
          <ul>
            <li>Prantsusmaa, Inglismaa - juhtivad riigid tänu tsentraliseeritud ja tugevale kuningavõimule</li>
            <li>Saksamaa - territooriumilt suur, aga killustunud</li>
            <li>Uued seisused: käsitöölised ja kaupmehed</li>
          </ul>
        </div>
      </div>
      <div className='kast'>
        <h3 className='pealkirjad'>Minule oluline</h3>
        <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
          <ul>
            <li>gooti arhitektuuris kasutatud teravkaared ja muud insenertehnilised uuendused olid tõenäoliselt mõjutatud islami arhitektuurist, mille näiteks on Hispaania Córdoba Suur Mošee</li>

          </ul>
        </div>
      </div>
    </div>

    </div>
  
);}

const GootikaEestis = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath5 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-eleven'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 200 20">
            <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">E</tspan>
              <tspan x="60" dy="0">E</tspan>
              <tspan x="70" dy="0">S</tspan>
              <tspan x="80" dy="0">T</tspan>
              <tspan x="90" dy="0">I</tspan>
              <tspan x="100" dy="0"> </tspan>
              <tspan x="110" dy="0">G</tspan>
              <tspan x="120" dy="0">O</tspan>
              <tspan x="130" dy="0">O</tspan>
              <tspan x="140" dy="0">T</tspan>
              <tspan x="150" dy="0">I</tspan>
              <tspan x="160" dy="0">K</tspan>
              <tspan x="170" dy="0">A</tspan>
            </text>
          </svg>
        </div>
      
        

        <div className='container2'>
        <div className="kast" >
          <h3 className='pealkirjad'>Gooti kunst Eestis 13-16 saj</h3>
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>kivikirikud</li>
                <li>Hansa linnad</li>
                
                
              </ul>
              <figure>
                <img className='pildikast' src='https://navicup.com//upload/map-files/images/1047/dsc-3870-kaarma-kirik.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Kaarma Peeter-Pauli kirik</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUYNDtG71P67vezvk6lURx-paA3j1LYF8ng&s'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Karja püha Katariina kirik</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://tartu.ee/sites/default/files/styles/news_header_image/public/field/image/toomkirik-TUfoto.jpg?itok=bjPewP4f'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Tartu toomkirik</figcaption>
              </figure>
              <figure>
                <img className='pildikast' src='https://visitestonia.com/images/3228891/Tartu+St.+John%E2%80%99s+Church-visit+estonia3.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Tartu Jaani kirik</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/b/bc/St._Mary%27s_cathedral.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Tallinna püha Maarja Toomkirik</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/f/f7/Tallinna_Niguliste_kirik_22-03-2013.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Tallinna Niguliste kirik</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://nigulistemuuseum.ekm.ee/wp-content/uploads/sites/5/2020/04/ESC_8804_p%C3%A4is-scaled.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Hermen Rode altar Niguliste kirikus</figcaption>
              </figure>
  
            </div>
            
            
            
          </div>


      </div>
        <div className="kast" >
      <h3 className='pealkirjad'></h3>
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
              
              
            </ul>
          
            
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bernt_Notke_Danse_Macabre.jpg/820px-Bernt_Notke_Danse_Macabre.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Bernt Notke Surmatants</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Tallinn_asv2022-04_img74_Holy_Spirit_Church.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Tallinna Pühavaimu kirik</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/a/ae/St_Olaf%27s_church%2C_Tallinn%2C_July_2008.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Oleviste kirik</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsD6hiLS2UByRKcENiwofikq_KRQcO6uaapg&s'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Pirita klooster</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtDjTxdNKsrKeS4otxlP9EJzUxsQ3SMjZnw&s'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Tallinna Raekoda</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://register.muinas.ee/content/monument/regular/376931.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Linnateatri hoone, Kolm Õde</figcaption>
              </figure>
              <figure>
            
            <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Toompea_castle%2C_June_2010.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Toompea linnus</figcaption>
          </figure>
          <figure>
            
            <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/3/39/Suurgildi_hoone.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Suurgildi hoone</figcaption>
          </figure>
          <ul>
            <li>1417 valmis Suurgildi hoone</li>
            <li>Tallinna kõrgkihi pidutsemise koht</li>
            <li>Rongkäikude algus-ja lõpppunkt, pulmad, jumalateenistused</li>
            <li>Uste pronkskoputid üks parimaid keskaegseid pronksivalu näiteid
            <li>16. saj latern ukse kohal</li>
            <li>Praegu asub seal Eesti Ajaloomuuseum</li>
            </li>
          </ul>

              
        </div>
        </div>
      </div>
    </div>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>1208-1227 - muistne vabadusvõitlus</li>
              <li>1520 - luterlus jõudis Eestisse, pildirüüste</li>
              <li>1558-1583 - Liivi sõda</li>

            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Niguliste kirik oli pühendatud Püha Nikolausele, meremeeste ja kaupmeeste kaitsepühakule, mis peegeldab Tallinna olulist rolli Hansaliidu kaubanduses keskajal</li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}

const VaraRenessanss = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath5 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-twelve'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 220 20">
            <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">V</tspan>
              <tspan x="60" dy="0">A</tspan>
              <tspan x="70" dy="0">R</tspan>
              <tspan x="80" dy="0">A</tspan>
              <tspan x="90" dy="0">R</tspan>
              <tspan x="100" dy="0">E</tspan>
              <tspan x="110" dy="0">N</tspan>
              <tspan x="120" dy="0">E</tspan>
              <tspan x="130" dy="0">S</tspan>
              <tspan x="140" dy="0">S</tspan>
              <tspan x="150" dy="0">A</tspan>
              <tspan x="160" dy="0">N</tspan>
              <tspan x="170" dy="0">S</tspan>
              <tspan x="180" dy="0">S</tspan>
              
            </text>
          </svg>
        </div>
      
        

        <div className='container2'>
        <div className="kast" >
          <h3 className='pealkirjad'>Vararenessanss</h3>
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>15 saj - vararenessanss, keskus Firenze</li>
                <li>humanism - inimese ja inimlikkuse väärtustamine</li>
                <li>isiksuse vaba areng</li>
                
                
              </ul>
              <figure>
                <img className='pildikast' src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/8572/images/file-59fad82c368af.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Leidlaste Kodu Firenzes - Filippo Brunelleschi</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://annaabi.ee/mpic/159690/Backup-6_19544.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Firenze toomkiriku nelitise kuppel - Filippo Brunelleschi</figcaption>
              </figure>
              <figure>
            
            <img className='pildikast' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvh8cCvdpG7alFsZrgZa7fH40dSmreetejg&s'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Palazzo Pitti</figcaption>
          </figure>
          <figure>
            
            <img className='pildikast' src='https://kjt.ee/wp-content/uploads/2018/05/722px-Masaccio_003.jpg'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Püha kolmainsus - Masaccio</figcaption>
          </figure>
            </div>
          </div>

      </div>
        <div className="kast" >
      <h3 className='pealkirjad'></h3>
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
              <li>Fra Angelico - Maarja kuulutus</li>
              
            </ul>
          
            <figure>
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Kevad - Sandro Botticelli</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1200px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Venuse sünd - Sandro Botticelli</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://www.historyofcreativity.com/content/6/s_creator.001_1597779715.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Lorenzo Ghiberti skulptuur</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://f9.pmo.ee/otx-4XC1IgtzdYkHFAraoscT2uU=/685x0/filters:format(webp)/nginx/o/2008/03/17/26977t1h1519.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Donatello - Taavet</figcaption>
              </figure>
              
        </div>
        </div>
      </div>
    </div>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>1453 - Konstantinoopoli piiramine - Rooma riigi lõpp</li>
              <li>1337-1453 - Saja-aastane sõda Prantsusmaa vs Inglismaa</li>
              <li>1494-1559 - Itaalia sõjad</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Vararenessanss oli periood, mil kunstnikud hakkasid taasavastama ja täiustama lineaarset perspektiivi, tehnika, mida polnud Lääne kunstis laialdaselt kasutatud pärast antiikaja lõppu.</li>

            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}

const KõrgRenessanss = () => {
  useEffect(() => {
    // Animation effect using Anime.js
    anime({
      targets: '#textPath5 tspan',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0.3, 5],
      translateX: [-10, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);
  return (
    <div className='proov' id='section-thirteen'>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 220 20">
            <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
              <tspan x="50" dy="0">K</tspan>
              <tspan x="60" dy="0">Õ</tspan>
              <tspan x="70" dy="0">R</tspan>
              <tspan x="80" dy="0">G</tspan>
              <tspan x="90" dy="0">R</tspan>
              <tspan x="100" dy="0">E</tspan>
              <tspan x="110" dy="0">N</tspan>
              <tspan x="120" dy="0">E</tspan>
              <tspan x="130" dy="0">S</tspan>
              <tspan x="140" dy="0">S</tspan>
              <tspan x="150" dy="0">A</tspan>
              <tspan x="160" dy="0">N</tspan>
              <tspan x="170" dy="0">S</tspan>
              <tspan x="180" dy="0">S</tspan>
              
            </text>
          </svg>
        </div>
      
        

        <div className='container2'>
        <div className="kast" >
          <h3 className='pealkirjad'>Kõrgrenessanss</h3>
          <div style={{display: "flex"}}>
          
            <div className='tekstiKast'>

              <ul>
                <li>16 saj - Kõrgrenessanss, keskus Rooma</li>
                <li>idealiseeritud tõde</li>
                <li>Andrea Palladio</li>
                <li>Michelangelo - Taavet, Kapitooliumi väljak, Sixtuse kabeli laemaal</li>
                <li>Leonardo da Vinci - Püha õhtusöömaaeg, Mona Lisa, Vitruviuse mees</li>
                <li>Tizian - Urbino Venus</li>
              </ul>
              <figure>
                <img className='pildikast' src='https://upload.wikimedia.org/wikipedia/commons/1/15/Petersdom_von_Engelsburg_gesehen.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Rooma Peetri kirik - Donato Bramante</figcaption>
              </figure>
              <figure>
            
                <img className='pildikast' src='https://f9.pmo.ee/JaeiQEQvaMFdpIX8jeDfUf6afpA=/685x0/filters:format(webp)/nginx/o/2008/01/17/14409t1h6153.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Michelangelo - Taavet</figcaption>
              </figure>
              <figure>
            
            <img className='pildikast' src='https://images.delfi.ee/media-api-image-cropper/v1/e17b74e0-b8e8-11eb-98b6-49bcde121acf.jpg?noup&w=1200&h=711'></img>
            <figcaption style={{textAlign: "start", fontSize: "14px"}}>Sixtuse kabeli laemaal - Michelangelo</figcaption>
          </figure>
          
            </div>
          </div>

      </div>
        <div className="kast" >
      <h3 className='pealkirjad'></h3>
        
      <div style={{display: "flex"}}>
        <div className='tekstiKast'>
          <ul>
              <li>Fra Angelico - Maarja kuulutus</li>
              
            </ul>
          
            <figure>
                <img className='pildikast' src='https://vara.e-koolikott.ee/sites/default/files/h5p/content/8560/images/file-59e590f17070f.jpg'></img>
                <figcaption style={{textAlign: "start", fontSize: "14px"}}>Ateena kool - Raffael</figcaption>
              </figure>
              
              
        </div>
        </div>
      </div>
    </div>
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
        <div className='kast'>
          <h3 className='pealkirjad'>Üldajalugu</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Trükipressi leiutamine 15. saj</li>
              <li>Martin Luther avaldas 95 teesi</li>
              <li>1523 - Gustav I Vasa valiti Rootsi kuningaks</li>
            </ul>
          </div>
        </div>
        <div className='kast'>
          <h3 className='pealkirjad'>Minule oluline</h3>
          <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
            <ul>
              <li>Üks kõrg- ja hilisrenessanssile omaseid tehnilisi uuendusi oli sfumato, mille kõige kuulsam meister oli Leonardo da Vinci. Sfumato tähendab itaalia keeles "suitsune" ja see tehnika hõlmab pehmeid, järk-järgult hägustuvaid kontuure, et luua realistlikum ja kolmemõõtmelisem kujutis.</li>

            </ul>
          </div>
        </div>
      </div>

      </div>
    
  );}


  const RenessanssMSE = () => {
    useEffect(() => {
      // Animation effect using Anime.js
      anime({
        targets: '#textPath5 tspan',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0.3, 5],
        translateX: [-10, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });
    }, []);
    return (
      <div className='proov' id='section-fourteen'>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
            <svg style={{ position: "sticky", top: "8px" }} viewBox="0 0 190 20">
              <text id="textPath5" x="10%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8">
                <tspan x="50" dy="0">R</tspan>
                <tspan x="60" dy="0">E</tspan>
                <tspan x="70" dy="0">N</tspan>
                <tspan x="80" dy="0">E</tspan>
                <tspan x="90" dy="0">S</tspan>
                <tspan x="100" dy="0">S</tspan>
                <tspan x="110" dy="0">A</tspan>
                <tspan x="120" dy="0">N</tspan>
                <tspan x="130" dy="0">S</tspan>
                <tspan x="140" dy="0">S</tspan>
                
                
              </text>
            </svg>
          </div>
        
          
  
          <div className='container2'>
          <div className="kast" >
            <h3 className='pealkirjad'>Renessansskunst Madalmaades, Saksamaal ja Eestis</h3>
            <div style={{display: "flex"}}>
            
              <div className='tekstiKast'>
  
                <ul>
                  <li>esikohal maalikunst</li>
                  <li>linnalikud teemad</li>
                  <li>inimeste hingeelu avamine</li>
                  <li>õlivärvide kasutamine</li>
                  <li>Vennad Eyck´ ́id - Genti altar</li>
                  <li>Pieter Brueghel vanem - Pime juhib pimedat, Paabeli torn</li>
                  <li>Albrecht Dürer</li>
                  <li>Michel Sittow</li>
                  <li>Arent Passer</li>
                </ul>
                <figure>
                  <img className='pildikast' src='https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F4vaa5-YF_wOFml_uB_kX9g%252FHieronymus_Bosch_-_The_Garden_of_Earthly_Delights_-_Garden_of_Earthly_Delights_%2528Ecclesia%2527s_Paradise%2529.jpg&width=910'></img>
                  <figcaption style={{textAlign: "start", fontSize: "14px"}}>Hieronymus Bosch</figcaption>
                </figure>
                
                
            
              </div>
            </div>
  
        </div>
          <div className="kast" >
        <h3 className='pealkirjad'></h3>
          
        <div style={{display: "flex"}}>
          <div className='tekstiKast'>
          <figure>
              
              <img className='pildikast' src='https://objektiiv.ee/app/uploads/2016/07/Pimedad.jpg'></img>
              <figcaption style={{textAlign: "start", fontSize: "14px"}}>Pime juhib pimedat</figcaption>
            </figure>
                
                
          </div>
          </div>
        </div>
      </div>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", position: "sticky", justifyContent: "space-evenly"}}>
          <div className='kast'>
            <h3 className='pealkirjad'>Üldajalugu</h3>
            <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
              <ul>
                <li>1547-1549 - Lääne-Euroopas katkuepideemia</li>
                <li>Põhja-Ameerikas algasid laiaulatuslikud koloniaalvallutused</li>
                <li>1568 algas Hollandi iseseisvussõda</li>
              </ul>
            </div>
          </div>
          <div className='kast'>
            <h3 className='pealkirjad'>Minule oluline</h3>
            <div style={{justifyContent: "center", display: "flex", whiteSpace: "pre-wrap"}}>
              <ul>
                <li>Albrecht Dürer oli mitte ainult meisterlik kunstnik, vaid ka kirglik teadlane ja leiutaja. Ta uuris perspektiivi, geomeetriat ja inimese proportsioone ning kirjutas mitmeid teaduslikke traktaate.</li>

              </ul>
            </div>
          </div>
        </div>
  
        </div>
      
    );}
  







