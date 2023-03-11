const Calculator = () => {
  const [result, setResult] = React.useState('');
  const [theme, setTheme] = React.useState('one');

  const Theme = () => {
    const Ref1 = React.useRef(null);
    const Ref2 = React.useRef(null);
    const Ref3 = React.useRef(null);

    return (
      <form id='theme' className='theme-container'>
        <span className='legend row-2 col-1 uppercase center'>theme</span>
        <div className='labels row-1 col-2 flex-row center'>
          <label htmlFor={Ref1} key='label-1' className='label' form='theme'>1</label>
          <label htmlFor={Ref2} key='label-2' className='label' form='theme'>2</label>
          <label htmlFor={Ref3} key='label-3' className='label' form='theme'>3</label>
        </div>
        <div className='toggle row-2 col-2 flex-row center'>
          <input ref={Ref1} key='radio-1' type='radio' className='radio selectable' name='theme' form='theme' checked={theme === 'one'} onChange={() => setTheme('one')} />
          <input ref={Ref2} key='radio-2' type='radio' className='radio selectable' name='theme' form='theme' checked={theme === 'two'} onChange={() => setTheme('two')} />
          <input ref={Ref3} key='radio-3' type='radio' className='radio selectable' name='theme' form='theme' checked={theme === 'three'} onChange={() => setTheme('three')} />
        </div>
      </form>
    )
  };

  const handleClick = (event) => {
    setResult(result.concat(event.target.id))
  };

  const clear = () => {
    setResult('')
  };

  const del = () => {
    setResult(result.slice(0, -1))
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('E');
    }
  };
  
  return (
    <div id={theme} className='calculator flex-col'>
      <div className='header flex-row'>
        <p className='title'>calc</p>
        <Theme />
      </div>

      <input className='display' type='text' value={result} disabled />

      <div className='calc-container'>
        <button className='row-1 col-1 operator button selectable' onClick={clear}>AC</button>
        <button className='row-1 col-2 operator button selectable' onClick={del}>DE</button>
        <button id='/100' className='row-1 col-3 operator button selectable' onClick={handleClick}>%</button>
        <button id='/' className='row-1 col-4 operator button selectable' onClick={handleClick}>÷</button>
      
        <button id='7' className='row-2 col-1 number button selectable' onClick={handleClick}>7</button>
        <button id='8' className='row-2 col-2 number button selectable' onClick={handleClick}>8</button>
        <button id='9' className='row-2 col-3 number button selectable' onClick={handleClick}>9</button>
        <button id='*' className='row-2 col-4 operator button selectable' onClick={handleClick}>x</button>
      
        <button id='4' className='row-3 col-1 number button selectable' onClick={handleClick}>4</button>
        <button id='5' className='row-3 col-2 number button selectable' onClick={handleClick}>5</button>
        <button id='6' className='row-3 col-3 number button selectable' onClick={handleClick}>6</button>
        <button id='-' className='row-3 col-4 operator button selectable' onClick={handleClick}>-</button>
        
        <button id='1' className='row-4 col-1 number button selectable' onClick={handleClick}>1</button>
        <button id='2' className='row-4 col-2 number button selectable' onClick={handleClick}>2</button>
        <button id='3' className='row-4 col-3 number button selectable' onClick={handleClick}>3</button>
        <button id='+' className='row-4 col-4 operator button selectable' onClick={handleClick}>+</button>

        <button id='.' className='row-5 col-1 number button selectable' onClick={handleClick}>.</button>
        <button id='0' className='row-5 col-2 number button selectable' onClick={handleClick}>0</button>
        <button id='=' className='row-5 equal button selectable' onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default Calculator;