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

You can write little messages inside of the modal.You can change the background color, change the icon (success or error) and the color of the text message.

For this example, I have used **content="Employee created!"**.

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
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        //your custom parameters
        backgroundColor="rgba(196, 196, 196, .6)"
        colorModal="#fff"
        iconModal="success"
        borderModal="15px"
        content="Employee created!"
        contentcolor="#000"
        shadowModal="0 5px 16px rgba(148, 148, 148, 0.6)"
        //your custom parameters
      />
    </div>
  );
}
export default App;
```

| Parameter         | Type     | Description                     |
| :---------------- | :------- | :------------------------------ |
| `backgroundColor` | `string` | Change the background of modal  |
| `colorModal`      | `string` | Change the color of modal       |
| `iconModal`       | `string` | Change icon (success or eror)   |
| `content`         | `string` | Change the message of modal     |
| `contentcolor`    | `string` | Change the color of the message |
| `shadowModal`     | `string` | Change the shadow of modal      |
| `borderModal`     | `string` | Change the border of modal      |

**Here an example**

  <img src='./src/assets/images/modal_example.png' width="100%" />
