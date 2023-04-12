import { configureChains, WagmiConfig, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { goerli } from '@wagmi/chains'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import SwapCard from './components/SwapCard/SwapCard';
import Pools from './components/Pools/Pools';
import './App.css';

const { provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()]
);

const client = createClient({ autoConnect: true, provider, webSocketProvider });

function App() {
  return <WagmiConfig client={client}>
      <Header/>
        <Routes>
          <Route path='/' element={<SwapCard/>} />
          <Route path='/pools' element={<Pools/>} />
        </Routes>
  </WagmiConfig>;
}

export default App;













// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
