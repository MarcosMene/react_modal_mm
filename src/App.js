import Modal from "./lib/components/Modal";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Click Me</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
