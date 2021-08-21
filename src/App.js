import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VegCard from "./components/VegCard";
import Apple from "./img/apple.jpg";
import Pear from "./img/Pear.jpg";
import Tomato from "./img/tomato.jpg";
import Potato from "./img/potao.jpg";
import Onion from "./img/onion.jpg";
import Kiwi from "./img/kiwi.jpg";
import Annar from "./img/annar.jpg";
import papya from "./img/row2/papaya.jpg";
import paneer from "./img/row2/paneer.jpg";
import broccli from "./img/row2/brokoli.jpg";
import bhindi from "./img/row2/bhindi.jpg";
import mausami from "./img/row2/mosambi.jpg";
import atta from "./img/row2/ashirvadatta.jpg";
import milkfoodghee from "./img/row2/milkfoodghee.jpg";
import oats from "./img/row2/oats.jpg";
import poha from "./img/row3/rajdhanipoha.jpg";
import besan from "./img/row3/rajdhanibesan.jpg";
import redbull from "./img/row3/redbull.jpg";
import amulghee from "./img/row3/amulcowghee.jpg";
import makhana from "./img/row3/makhana.jpg";
import fortuneoil from "./img/row3/fortunesoyaoil.jpg";
import sugar from "./img/row3/madhursugar.jpg";
import tropicana from "./img/row3/Real-Juice-456x252-1.jpg";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const App = () => {
  function downloadHandler(event) {
    event.preventDefault();
    domtoimage.toBlob(document.getElementById("my-node")).then(function (blob) {
      saveAs(blob, "myImage.png");
    });
  }
  return (
    <div className="App white">
      <div id="my-node">
        <Header />
        <div className="border border-5 border-success ">
          <div className="myflex">
            <VegCard title="Banana" unit="12 pcs" />
            <VegCard title="Apple" img={Apple} />
            <VegCard title="Pear" img={Pear} />
            <VegCard title="Tomato" img={Tomato} />
            <VegCard title="Potato" img={Potato} />
            <VegCard title="Onion" img={Onion} />
            <VegCard title="Kiwi" img={Kiwi} />
            <VegCard title="Anaar" img={Annar} />
          </div>
          <div className="myflex">
            <VegCard title="Papya" img={papya} />
            <VegCard title="Paneer" img={paneer} />
            <VegCard title="Broccoli" img={broccli} />
            <VegCard title="Bhindi" img={bhindi} />
            <VegCard title="Mausami" img={mausami} />
            <VegCard title="Ashirvaad Atta" img={atta} unit="10 kg" />
            <VegCard title="Milkfood Ghee" img={milkfoodghee} />
            <VegCard title="Oats" img={oats} unit="per pkt" />
          </div>
          <div className="myflex">
            <VegCard title="Rajdhani Poha" img={poha} />
            <VegCard title="Rajdhani Besan" img={besan} unit="500g" />
            <VegCard title="Red Bull" img={redbull} unit="per pkg" />
            <VegCard title="Amul Cow Ghee" img={amulghee} />
            <VegCard title="Makhana" img={makhana} unit="250g pkt" />
            <VegCard title="Fortune Soya Oil" img={fortuneoil} />
            <VegCard title="Madhur Sugar" img={sugar} unit="5kg" />
            <VegCard title="Tropicana " img={tropicana} unit="off on MRP" />
          </div>
        </div>

        <Footer />
      </div>
      <button className="btn btn-primary m-2" onClick={downloadHandler.bind()}>
        Download Image
      </button>
    </div>
  );
};

export default App;
