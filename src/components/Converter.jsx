import { useState } from 'react';
import './converter.css'; // Optional: Add your styles here

const Converter = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('Bitcoin');
    const [toCurrency, setToCurrency] = useState('Ethereum');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    const handleConvert = (e) => {
        e.preventDefault();
        const conversionRate = 0.5;
        const result = amount * conversionRate;
        setConvertedAmount(result);
    };

    return (
        <div className="converter-container">
            <h2>Currency Converter</h2>
            <form onSubmit={handleConvert}>
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
                    <label>From Currency</label>
                    <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Ethereum">Ethereum</option>
                        <option value="Litecoin">Litecoin</option>
                        <option value="Tether">Tether</option>
                        <option value="Dogecoin">Dogecoin</option>
                        <option value="Ripple">Ripple</option>
                        <option value="Cardano">Cardano</option>
                        <option value="Polkadot">Polkadot</option>
                        <option value="Chainlink">Chainlink</option>
                        <option value="Uniswap">Uniswap</option>
                        <option value="Bitcoin Cash">Bitcoin Cash</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>To Currency</label>
                    <select value={toCurrency} onChange={handleToCurrencyChange}>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Ethereum">Ethereum</option>
                        <option value="Litecoin">Litecoin</option>
                    </select>
                </div>
                <button type="submit" className="convert-button">Convert</button>
            </form>
            {convertedAmount !== null && (
                <div className="result">
                    <h3>Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}</h3>
                </div>
            )}
        </div>
    );
};

export default Converter; 