import Modal from "./lib/components/Modal";
import { useState } from "react";

/**
 *Here is un exemple how to use the library modal. You can change many parameters of the modal (background color of modal; the color of modal; the icon if is a success message or error message; the border of the modal; the text inside of modal; the color of the text inside modal; the shadow of the modal and you can also change the font size of the message). If you don't want to use a specific value, just comment it or don't write.
 * @returns {JSX.Element}
 */

function App() {
  //use state true/false show modal
  const [showModal, setShowModal] = useState(false);

  //open modal
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Click Me</button>
      <Modal
        //show modal
        showModal={showModal}
        //close modal
        setShowModal={setShowModal}
        //YOUR CUSTOM PARAMETERS OF MODAL IS BELOW

        backgroundColor="#16a92069" //you can change background color
        colorModal="rgba(215, 246, 207, 1)" //you can change the color of the modal
        iconModal="success" //you can change the icon success or error
        borderModal="40px" //you can change border of the modal
        content="Hello world!" //you can write any message for the modal
        contentcolor="green" //you can change de color of the text
        shadowModal="0 5px 16px rgba(18, 39, 3, 1)" //you can change the shadow of the modal
        fontSizeModal="2rem" //you can change the size of the text inside the modal

        //YOUR CUSTOM PARAMETERS OF MODAL IS ABOVE
      />
    </div>
  );
}

export default App;
