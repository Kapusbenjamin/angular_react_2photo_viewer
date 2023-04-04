import ThreeSixty from "react-360-view";

const basePath ="http://localhost:3000/react_photo_viewer/src/360.jpeg";
export default function App() {
  return (
    <div className="App">
      <ThreeSixty
        amount={1}
        imagePath={basePath}
        spinReverse
      />
    </div>
  );
}
