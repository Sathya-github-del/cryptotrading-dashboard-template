import './wallet.css'; // Optional: Add your styles here

const Wallet = () => {
    // Sample wallet data with a balance of 20 for each cryptocurrency
    const walletData = [
        { name: 'Bitcoin', balance: 20 },
        { name: 'Ethereum', balance: 20 },
        { name: 'Litecoin', balance: 20 },
        { name: 'Ripple', balance: 20 },
        { name: 'Cardano', balance: 20 },
        { name: 'Polkadot', balance: 20 },
        { name: 'Chainlink', balance: 20 },
        { name: 'Bitcoin Cash', balance: 20 },
        { name: 'Stellar', balance: 20 },
        { name: 'Dogecoin', balance: 20 },
        { name: 'Uniswap', balance: 20 },
        { name: 'Litecoin', balance: 20 },
        { name: 'VeChain', balance: 20 },
        { name: 'TRON', balance: 20 },
        { name: 'EOS', balance: 20 },
        { name: 'Tezos', balance: 20 },
        { name: 'Monero', balance: 20 },
        { name: 'IOTA', balance: 20 },
        { name: 'Dash', balance: 20 },
        { name: 'Zcash', balance: 20 },
    ];

    return (
        <div className="wallet-container">
            <h2>Your Wallet</h2>
            <table className="wallet-table">
                <thead>
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {walletData.map((crypto, index) => (
                        <tr key={index}>
                            <td>{crypto.name}</td>
                            <td>{crypto.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wallet; 