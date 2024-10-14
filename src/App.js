import logo from './logo.svg';
import './App.css';
import WormholeConnect from '@wormhole-foundation/wormhole-connect';

const config = {
	env: 'testnet',
	// networks: ['sepolia', 'arbitrum_sepolia', 'base_sepolia', 'fuji', 'solana', 'basegoerli', 'moonbasealpha'],
};

function App() {
	return <WormholeConnect config={config} />;
}

export default App;
