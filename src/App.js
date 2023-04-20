import "./App.css";
import Backdrop from "./conponents/Backdrop";
import FlowerLists from "./conponents/FlowerLists";
import Modal from "./conponents/Modal";
function App() {
  return (
    <>
      <FlowerLists text='Daisy' />
      <FlowerLists text='Love' />
      <FlowerLists text='Roses' />
      <Modal />
      <Backdrop />
    </>
  );
}

export default App;
