import Header from "./components/Header";
import CarouselTest from "./components/CarouselTest";
import Content22 from "./components/Content22";
import Content23 from "./components/Content23";
import Content24 from "./components/Content24";

function App() {
  return (
    <div className="h-[2532px] flex flex-col justify-center">
      <Header />
      <div className="m-10">
        <Content22 />
      </div>
      <div className="m-10">
        <Content23 />
      </div>
      <div className="m-10">
        <Content24 />
      </div>
    </div>
  );
}

export default App;
