import Button from "./components/Button";
function App() {
  return (
    <div className="flex space-y-2 flex-col justify-center">
      <div>
        <Button className="bg-red-300">Standard</Button>
      </div>
      <div>
        <Button>X</Button>
      </div>
      <div>
        <Button>HODENHY</Button>
      </div>
    </div>
  );
}

export default App;
