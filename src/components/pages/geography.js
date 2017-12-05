import React, { Component } from 'react';
import poland from './img/poland.jpg';
//bootstrap css container = container fluid
class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid"> 
      	<h1>
      	Poland and facts about Poland
      	</h1>
      	<p>
      	Poland officially the Republic of Poland (Polish: Rzeczpospolita Polska, is a country in Central Europe, bordered by Germany to the west; the Czech Republic and Slovakia to the south; Ukraine and Belarus to the east; and the Baltic Sea, Kaliningrad Oblast (a Russian exclave) and Lithuania to the north. The total area of Poland is 312,679 square kilometres, making it the 71st largest country in the world and the 9th largest in Europe. With a population of over 38.5 million people, Poland is the 34th most populous country in the world, the sixth most populous member of the European Union, and the most populous post-communist member of the European Union. Poland is a unitary state divided into 16 administrative subdivisions.
      	</p>
      	<p>
		    Poland is an eastern European country on the Baltic Sea known for its medieval architecture, Jewish heritage and hearty cuisine. In the city of Krakow, 14th-century Wawel Castle rises above the medieval Old Town, home to Cloth Hall, a Renaissance trading post in Rynek Glówny (market square). Nearby is the Auschwitz-Birkenau concentration camp memorial, and Wieliczka Salt Mine, with tunnels to explore.
		    </p>
		    <p>
		    Despite the vast casualties and destruction the country experienced during World War II, Poland managed to preserve much of its cultural wealth. There are 14 heritage sites inscribed on the UNESCO World Heritage and 54 Historical Monuments and many objects of cultural heritage in Poland. Since the end of the communist period, Poland has achieved a "very high" ranking in terms of human development, as well as gradually improving economic freedom. Poland is the sixth largest economy in the European Union and among the fastest rising economic states in the world. The country is the sole member nation of the European Union to have escaped a decline in GDP and in recent years was able to create probably the most varied GDP growth in its history. Furthermore, according to the Global Peace Index for 2014, Poland is one of the safest countries in the world to live in.
		    </p>

    <div className= "image">
    
    <img src={poland} alt="Poland Map"/>  </div>
    </div>
  

    );
  }
}

export default Homepage;
