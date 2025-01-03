import './features.css'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { useNavigate } from 'react-router-dom';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Features = () => {
    const navigate = useNavigate();

    const cryptoData = [
        { name: 'Bitcoin', symbol: 'BTC', price: '$45,232.50', change: '+2.5%', volume: '$24.1B' },
        { name: 'Ethereum', symbol: 'ETH', price: '$2,321.75', change: '+1.8%', volume: '$12.3B' },
        { name: 'Solana', symbol: 'SOL', price: '$98.45', change: '-0.5%', volume: '$5.2B' },
        { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '+3.2%', volume: '$2.1B' },
        { name: 'Dogecoin', symbol: 'DOGE', price: '$0.07', change: '+1.5%', volume: '$1.8B' },
        { name: 'Polkadot', symbol: 'DOT', price: '$14.25', change: '-1.2%', volume: '$1.6B' },
        { name: 'Litecoin', symbol: 'LTC', price: '$105.30', change: '+0.8%', volume: '$1.4B' }
    ];

    // Chart data
    const chartData = {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: 'BTC Price',
                data: [42000, 43400, 43800, 43200, 44500, 45200, 44800, 45500, 45200, 45800, 45600, 45200, 45800, 46200, 45232],
                fill: true,
                borderColor: '#0052FF',
                backgroundColor: 'rgba(0, 82, 255, 0.1)',
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#0052FF',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2,
            }
        ]
    };

    // Chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#333',
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return `$${context.parsed.y.toLocaleString()}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                    drawBorder: false,
                },
                ticks: {
                    color: '#666',
                    font: {
                        family: 'Sintony',
                        size: 12
                    },
                    callback: function (value) {
                        return `$${value.toLocaleString()}`;
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        elements: {
            line: {
                borderWidth: 2
            }
        }
    };

    const handleDeposit = () => {
        navigate('/deposit');
    };

    return (
        <section className="features">
            <div className="features-container">
                <div className="dashboard">
                    <div className="left-panel">
                        <div className="portfolio-overview">
                            <div className="portfolio-header">
                                <h2>Portfolio Balance</h2>
                                <span className="balance-amount">$12,345.67</span>
                                <span className="balance-change positive">+$567.45 (24h)</span>
                            </div>
                            <div className="quick-actions">
                                <button className="action-btn deposit" onClick={handleDeposit}>
                                    <span className="icon">↓</span>
                                    Deposit
                                </button>
                                <button className="action-btn withdraw">
                                    <span className="icon">↑</span>
                                    Withdraw
                                </button>
                                <button className="action-btn trade">
                                    <span className="icon">⇄</span>
                                    Trade
                                </button>
                            </div>
                        </div>

                        <div className="chart-container">
                            <div className="chart-header">
                                <div className="chart-title">
                                    <h3>BTC/USD</h3>
                                    <span className="price">$45,232.50</span>
                                    <span className="change positive">+2.5%</span>
                                </div>
                                <div className="chart-controls">
                                    <button className="active">1H</button>
                                    <button>24H</button>
                                    <button>1W</button>
                                    <button>1M</button>
                                    <button>1Y</button>
                                </div>
                            </div>
                            <div className="chart-area">
                                <Line data={chartData} options={chartOptions} />
                            </div>
                        </div>
                    </div>

                    <div className="right-panel">
                        <div className="market-overview">
                            <div className="panel-header">
                                <h3>Market Overview</h3>
                                <button className="refresh-btn">⟳</button>
                            </div>
                            <div className="market-list">
                                {cryptoData.map((crypto, index) => (
                                    <div key={index} className="market-item">
                                        <div className="market-item-left">
                                            <div className="crypto-icon">
                                                {crypto.symbol.charAt(0)}
                                            </div>
                                            <div className="crypto-info">
                                                <span className="crypto-name">{crypto.name}</span>
                                                <span className="crypto-symbol">{crypto.symbol}</span>
                                            </div>
                                        </div>
                                        <div className="market-item-right">
                                            <div className="price-info">
                                                <span className="price">{crypto.price}</span>
                                                <span className={`change ${crypto.change.startsWith('+') ? 'positive' : 'negative'}`}>
                                                    {crypto.change}
                                                </span>
                                            </div>
                                            <span className="volume">Vol: {crypto.volume}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="trade-panel">
                            <div className="panel-header">
                                <h3>Quick Trade</h3>
                            </div>
                            <div className="trade-form">
                                <div className="input-group">
                                    <label>You Pay</label>
                                    <div className="input-with-select">
                                        <input type="number" placeholder="0.00" />
                                        <select>
                                            <option>USD</option>
                                            <option>BTC</option>
                                            <option>ETH</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="swap-icon">⇅</div>
                                <div className="input-group">
                                    <label>You Receive</label>
                                    <div className="input-with-select">
                                        <input type="number" placeholder="0.00" />
                                        <select>
                                            <option>BTC</option>
                                            <option>ETH</option>
                                            <option>USD</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="trade-button">Review Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features; 