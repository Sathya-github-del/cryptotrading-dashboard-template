import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="container">
            <div className="logo">
                <FontAwesomeIcon icon={faCoins} className="logo-icon" />
                <span className="logo-text">CryptoEx</span>
            </div>
            <div className="side-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/buycrypto">Buy Crypto</a></li>
                    <li><a href="/markets">Markets</a></li>
                    <li><a href="/sellcrypto">Sell Crypto</a></li>
                    <li><a href="/deposit">Deposit</a></li>
                    <li><a href="/converter">Convert</a></li>
                </ul>
            </div>
            <div className="wallet">
                <ul>
                    <li><a href="/wallet">Wallet</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;