import { useState } from 'react';
import './deposit.css';

const Deposit = () => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement deposit logic here
        console.log(`Depositing: $${amount}`);
        alert(`Deposit of $${amount} initiated!`);
        // Reset the amount after submission
        setAmount('');
    };

    return (
        <div className="deposit-container">
            <h2>Deposit Funds</h2>
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
                <button type="submit" className="deposit-button">Deposit</button>
            </form>
        </div>
    );
};

export default Deposit; 