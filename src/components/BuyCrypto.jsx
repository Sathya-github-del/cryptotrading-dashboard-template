import { useState } from 'react';
import './buycrypto.css'; // Optional: Add your styles here

const BuyCrypto = () => {
    const [amount, setAmount] = useState('');
    const [cryptoType, setCryptoType] = useState('Bitcoin');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleCryptoChange = (e) => {
        setCryptoType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Buying ${amount} of ${cryptoType}`);
        alert(`Purchase of ${amount} ${cryptoType} initiated!`);
        setAmount('');
        setCryptoType('Bitcoin');
    };

    return (
        <div className="buycrypto-container">
            <h2>Buy Cryptocurrency</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="Enter amount"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Select Cryptocurrency</label>
                    <select value={cryptoType} onChange={handleCryptoChange}>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Ethereum">Ethereum</option>
                        <option value="Litecoin">Litecoin</option>
                        {/* Add more cryptocurrencies as needed */}
                    </select>
                </div>
                <button type="submit" className="buy-button">Buy</button>
            </form>
        </div>
    );
};

export default BuyCrypto; 