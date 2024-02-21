import Card from "./components/CardComponent"
import Data from "./components/Data"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"

export default function App(){

  const cards = Data.map((item) =>{
    return(
      <Card 
         key = {item.key}
         title = {item.title}
         location={item.location}
         googleMapsUrl={item.googleMapsUrl}
         startDate={item.startDate}
         endDate={item.endDate}
         description={item.description}
         imageUrl={item.imageUrl}/>
    );
  })


  return(
    <div>
    <Navbar/>
    <div className="places" >{cards}</div>
    <Footer/>
    </div>
  );
}




