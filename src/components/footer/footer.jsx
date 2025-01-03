import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Learn</h3>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Crypto basics</a></li>
                        <li><a href="#">Tips & tutorials</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Create account</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Social</h3>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Discord</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Crypto Exchange. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
