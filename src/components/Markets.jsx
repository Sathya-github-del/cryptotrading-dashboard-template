import './markets.css'; // Optional: Add your styles here

const Markets = () => {
    // Sample market data (you can replace this with real data)
    const marketData = [
        { name: 'Bitcoin', price: '$40,000', change: '+2.5%' },
        { name: 'Ethereum', price: '$2,500', change: '-1.2%' },
        { name: 'Litecoin', price: '$150', change: '+0.5%' },
        { name: 'Tether', price: '$1.00', change: '+0.2%' },
        { name: 'Dogecoin', price: '$0.05', change: '-0.1%' },
        { name: 'Ripple', price: '$0.10', change: '+0.3%' },
        { name: 'Cardano', price: '$0.50', change: '-0.4%' },
        { name: 'Polkadot', price: '$10.00', change: '+0.6%' },
        { name: 'Chainlink', price: '$20.00', change: '-0.3%' },
        { name: 'Uniswap', price: '$15.00', change: '+0.7%' },
        { name: 'Bitcoin Cash', price: '$300', change: '-0.2%' },
    ];

    return (
        <div className="markets-container">
            <h2>Cryptocurrency Markets</h2>
            <table className="markets-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {marketData.map((market, index) => (
                        <tr key={index}>
                            <td>{market.name}</td>
                            <td>{market.price}</td>
                            <td className={market.change.startsWith('+') ? 'positive' : 'negative'}>
                                {market.change}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Markets; 