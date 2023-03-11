import DisplayOnResize from "./components/Display.js";
import Attribution from "./components/Attribution.js";
import Calculator from "./components/Calculator.js";

(function () {

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  const App = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);

    return (
      <>
        <Calculator />
        <Attribution />
      </>
    )
  }

  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root' />`);
  ReactDOM.createRoot(document.getElementById('root')).render(<App tab='home' />);
})();