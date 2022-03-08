import "./App.css";
import Card from "./components/Card";
import Data from "./components/data";
import Traveldata from "./components/Traveldata";
import TravelNav from "./components/TravelNav";
import TravelCard from "./components/TravelCard";
import TravelFooter from "./components/TravelFooter";
function App() {
  const arrayData = Data.map((arr) => {
    return <Card key={arr.id} {...arr} />;
  });
  const travelData = Traveldata.map((item) => {
    return <TravelCard key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <TravelNav />
      <section className="cards-list2">{travelData}</section>
      <TravelFooter />
    </div>
  );
}

export default App;
{
  // different ways to get or call data from array/objects
  /* 
  <Card key={arr.id} item={arr} />;
  pag etong method yung ginawa mo, dapat sa card component ganto ang pag call sa kanya:
  // props.item.coverImage may .item at kung ano yung specific name ng object sa data yun ilalagay
  
  
  <Card
key={arr.id}
img={arr.coverImg}
rating={arr.stats.rating}
reviewCount={arr.stats.reviewCount}
location={arr.location}
title={arr.title}
price={arr.price}
openSpots={arr.openSpots}
/> */
}
//   <Card
//   img="katie-zaferes.png"
//   rating={5.0}
//   reviewCount={6}
//   country="Wakanda"
//   title="Life Lessons with Katie Zaferes"
//   price={136}
// />
{
  /* <Hero /> 
    <section className="cards-list">{arrayData}</section>
  */
}
