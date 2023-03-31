import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'

import { InjectedConnector } from 'wagmi/connectors/injected'

import { Profile } from './wagmi/chains'
import { polygon } from '@wagmi/chains';


const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon],
  [publicProvider()]
);
 
// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [

    new InjectedConnector({
      chains,
      options: {
        name: 'Ripio Portal',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
 
// Pass client to React Context Provider
function App() {
  return (
    <WagmiConfig client={client}>
      <Profile />
    </WagmiConfig>
  )
}

export default App;
