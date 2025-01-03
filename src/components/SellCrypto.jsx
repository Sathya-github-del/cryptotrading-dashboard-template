import { useState } from 'react';
import './sellcrypto.css';

const SellCrypto = () => {
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
        console.log(`Selling ${amount} of ${cryptoType}`);
        alert(`Sale of ${amount} ${cryptoType} initiated!`);
        setAmount('');
        setCryptoType('Bitcoin');
    };

    return (
        <div className="sellcrypto-container">
            <h2>Sell Cryptocurrency</h2>
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
                    </select>
                </div>
                <button type="submit" className="sell-button">Sell</button>
            </form>
        </div>
    );
};

export default SellCrypto; 