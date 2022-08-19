#### Simple-component-library of React components created using

`create-react-app`

<hr>

#### To install the library:

`npm install modal_mm`

<hr>

#### How import the library

`Import {Modal} from 'modal-mm'`

<hr>

#### Usage/Example

```javascript
import { Modal } from "modal_mm";
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
```
