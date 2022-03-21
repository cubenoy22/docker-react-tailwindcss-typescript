import logo from './logo.svg';
import React from 'react';

const App: React.VFC = () => {
  return (
    <div className='text-center'>
      <header className='bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-white'>
        <img
          src={logo}
          className='h-[40vmin] pointer-events-none motion-safe:animate-spin-logo'
          alt='logo'
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='text-[#61dafb]'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
