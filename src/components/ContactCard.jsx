import React from 'react';
import '../rotating-card.css';

const ContactCard = ({contact}) => {
	var url = contact.url;
	var urlTmp = url.replace("swapi.co/api/people/","starwars-visualguide.com/assets/img/characters/");
	let size = urlTmp.length
	urlTmp = urlTmp.substring(0,size-1);
	urlTmp = urlTmp + ".jpg";

	var urlStarShips  = contact.starships;	
	let starShips = [];
	
    for(let i=0; i<urlStarShips.length; i++){
		starShips.push("https://starwars-visualguide.com/assets/img/starships/"+urlStarShips[i].replace("https://swapi.co/api/starships/","").replace("/","")+".jpg");
	  }
	

	return( 
		<div className="card-container">
			<div className="card">
             <div className="front">
                 <div className="cover">
                     <img className="" alt="background" src="../bg-space.jpg"/>
                 </div>
                 <div className="user">
                     <img className="img-responsive" alt="profile" src={urlTmp}/>
                 </div>
                 <div className="content">
                     <div className="main">
                         <h3 className="name">{contact.name}</h3>
						 <p className="profession">{contact.birth_year}</p>
                     </div>
                     <div className="footer">
                         <i className="fa fa-mail-forward"></i> More Details
                     </div>
                 </div>
             </div>
             <div className="back">
                 <div className="header">
                     <h5 className="motto">Starships:</h5>
					 <div >
						 	<img className="starshipsIMG" alt={starShips[0]} src={starShips[0]} />
                 	 </div>
					 
                 </div>
                 <div className="content">
                     <div className="main">
                         <div className="stats-container">
							 <br/>
						 <h5 className="motto">More Details:</h5>
                             <div className="stats">
                                 <h4>{contact.height}</h4>
                                 <p>
								 	Height
                                 </p>
                             </div>
                             <div className="stats">
                                 <h4>{contact.mass}</h4>
                                 <p>
								 	Mass
                                 </p>
                             </div>
                             <div className="stats">
                                 <h4>{contact.hair_color}</h4>
                                 <p>
								 	Hair Color
                                 </p>
                             </div>
                             <div className="stats">
                                 <h4>{contact.skin_color}</h4>
                                 <p>
								 	Skin Color
                                 </p>
                             </div>	
                             <div className="stats">
                                 <h4>{contact.eye_color}</h4>
                                 <p>
								 	Eye Color
                                 </p>
                             </div>		
                             <div className="stats">
                                 <h4>{contact.gender}</h4>
                                 <p>
								 	Gender
                                 </p>
                             </div>								 						 							 						 
                        </div>
                    </div>
                </div>
            </div>
        	</div>  
		</div>
    )
}

export default ContactCard;