import { useState } from 'react';
import { 
  MapPin, 
  Package, 
  CheckCircle, 
  Clock, 
  IndianRupee, 
  Navigation,
  LogOut,
  Bell,
  Menu as MenuIcon
} from 'lucide-react';
import './DriverDashboard.css';

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [activeTab, setActiveTab] = useState('available'); // 'available', 'active', 'history'

  // Mock Data
  const availableOrders = [
    {
      id: '#ORD-1029',
      restaurant: 'Spicy Symphony',
      pickup: '12 Main St, City Center',
      dropoff: '45 Park Avenue, Westside',
      distance: '2.5 km',
      earnings: '₹45',
      time: '15 mins',
    },
    {
      id: '#ORD-1030',
      restaurant: 'The Burger Joint',
      pickup: '88 Oak Road',
      dropoff: '12 Elm Street, Northside',
      distance: '4.1 km',
      earnings: '₹60',
      time: '25 mins',
    }
  ];

  const activeOrders = [
    {
      id: '#ORD-1028',
      restaurant: 'Pizza Paradise',
      status: 'Picking up', // 'Picking up', 'On the way', 'Delivered'
      pickup: '99 Slice Blvd',
      dropoff: '33 College Road',
      customerName: 'Alex Johnson',
      customerPhone: '+91 9876543210',
      earnings: '₹55',
    }
  ];

  const handleToggleStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className={`driver-dashboard ${isOnline ? 'online-mode' : 'offline-mode'}`}>
      {/* Sidebar Navigation */}
      <aside className="driver-sidebar">
        <div className="driver-profile-section">
          <div className="driver-avatar">
            <img src="https://ui-avatars.com/api/?name=Delivery+Partner&background=0D8ABC&color=fff" alt="Profile" />
          </div>
          <div className="driver-info">
            <h3>Ravi Kumar</h3>
            <p>Delivery Partner</p>
          </div>
        </div>
        
        <nav className="driver-nav">
          <button 
            className={`nav-item ${activeTab === 'available' ? 'active' : ''}`}
            onClick={() => setActiveTab('available')}
          >
            <Package size={20} />
            <span>Available Orders</span>
            {availableOrders.length > 0 && <span className="badge">{availableOrders.length}</span>}
          </button>
          <button 
            className={`nav-item ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            <Navigation size={20} />
            <span>Active Orders</span>
            {activeOrders.length > 0 && <span className="badge active-badge">{activeOrders.length}</span>}
          </button>
          <button 
            className={`nav-item ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <CheckCircle size={20} />
            <span>Delivery History</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item logout-btn">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="driver-main">
        {/* Top Header */}
        <header className="driver-header">
          <div className="header-left">
            <button className="mobile-menu-btn">
              <MenuIcon size={24} />
            </button>
            <h1 className="page-title">
              {activeTab === 'available' ? 'Available Deliveries' : 
               activeTab === 'active' ? 'Current Delivery' : 'Delivery History'}
            </h1>
          </div>
          <div className="header-right">
            <div className="status-toggle-wrapper">
              <span className="status-text">{isOnline ? 'Online' : 'Offline'}</span>
              <label className="toggle-switch">
                <input type="checkbox" checked={isOnline} onChange={handleToggleStatus} />
                <span className="slider round"></span>
              </label>
            </div>
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
          </div>
        </header>

        {/* Dashboard Metrics (Only show in history/available) */}
        {activeTab !== 'active' && (
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon earnings-icon">
                <IndianRupee size={24} />
              </div>
              <div className="metric-data">
                <p>Today's Earnings</p>
                <h3>₹845</h3>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon deliveries-icon">
                <Package size={24} />
              </div>
              <div className="metric-data">
                <p>Deliveries Done</p>
                <h3>12</h3>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon time-icon">
                <Clock size={24} />
              </div>
              <div className="metric-data">
                <p>Online Time</p>
                <h3>4h 30m</h3>
              </div>
            </div>
          </div>
        )}

        {/* Content Area based on Tab */}
        <div className="content-area">
          {!isOnline && activeTab === 'available' ? (
            <div className="offline-state-card">
              <div className="offline-icon-wrapper">
                <MapPin size={48} />
              </div>
              <h2>You are currently offline</h2>
              <p>Go online to start receiving delivery requests in your area.</p>
              <button className="go-online-btn" onClick={handleToggleStatus}>Go Online Now</button>
            </div>
          ) : (
            <>
              {/* Available Orders Tab */}
              {activeTab === 'available' && (
                <div className="orders-list">
                  {availableOrders.length === 0 ? (
                    <div className="empty-state">
                      <p>Searching for nearby orders...</p>
                      <div className="radar-spinner"></div>
                    </div>
                  ) : (
                    availableOrders.map((order, idx) => (
                      <div className="order-card new-order" key={idx}>
                        <div className="order-card-header">
                          <span className="order-id">{order.id}</span>
                          <span className="order-earnings">{order.earnings}</span>
                        </div>
                        <div className="order-restaurant">
                          <h4>{order.restaurant}</h4>
                        </div>
                        <div className="order-route">
                          <div className="route-point pickup">
                            <div className="point-icon"><MapPin size={16}/></div>
                            <div className="point-text">
                              <p className="point-label">Pickup</p>
                              <p className="point-address">{order.pickup}</p>
                            </div>
                          </div>
                          <div className="route-line"></div>
                          <div className="route-point dropoff">
                            <div className="point-icon drop"><Navigation size={16}/></div>
                            <div className="point-text">
                              <p className="point-label">Drop-off</p>
                              <p className="point-address">{order.dropoff}</p>
                            </div>
                          </div>
                        </div>
                        <div className="order-footer">
                          <div className="order-meta">
                            <span><MapPin size={14}/> {order.distance}</span>
                            <span><Clock size={14}/> {order.time} est.</span>
                          </div>
                          <div className="order-actions">
                            <button className="reject-btn">Decline</button>
                            <button className="accept-btn">Accept Order</button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Active Orders Tab */}
              {activeTab === 'active' && (
                <div className="active-order-view">
                  {activeOrders.length === 0 ? (
                    <div className="empty-state">
                      <p>You have no active deliveries right now.</p>
                      <button className="secondary-btn" onClick={() => setActiveTab('available')}>
                        Find Orders
                      </button>
                    </div>
                  ) : (
                    activeOrders.map((order, idx) => (
                      <div className="active-delivery-card" key={idx}>
                        <div className="map-placeholder">
                          {/* A placeholder for the map view */}
                          <div className="pulse-marker"></div>
                          <div className="map-overlay">Live Tracking Active</div>
                        </div>
                        <div className="active-delivery-details">
                          <div className="delivery-status-header">
                            <div className="status-badge pulsing">
                              {order.status}
                            </div>
                            <h3>{order.id}</h3>
                          </div>
                          
                          <div className="active-route">
                            <div className="active-point pickup">
                              <h4>Pickup</h4>
                              <p>{order.restaurant}</p>
                              <span className="address-sub">{order.pickup}</span>
                              <button className="action-btn outline">Directions</button>
                            </div>
                            <div className="active-point dropoff">
                              <h4>Drop-off</h4>
                              <p>{order.customerName}</p>
                              <span className="address-sub">{order.dropoff}</span>
                              <button className="action-btn outline">Directions</button>
                            </div>
                          </div>

                          <div className="customer-contact">
                            <div className="contact-info">
                              <div className="avatar">{order.customerName.charAt(0)}</div>
                              <div>
                                <h4>{order.customerName}</h4>
                                <p>Customer</p>
                              </div>
                            </div>
                            <div className="contact-actions">
                              <a href={`tel:${order.customerPhone}`} className="call-btn">Call</a>
                              <button className="chat-btn">Chat</button>
                            </div>
                          </div>

                          <div className="swipe-action-container">
                            <button className="primary-action-btn complete-btn">
                              {order.status === 'Picking up' ? 'Confirm Pickup' : 'Mark as Delivered'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* History Tab */}
              {activeTab === 'history' && (
                <div className="history-list">
                  <div className="history-header">
                    <h3>Recent Deliveries</h3>
                    <select className="filter-select">
                      <option>Today</option>
                      <option>This Week</option>
                      <option>This Month</option>
                    </select>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div className="history-card" key={i}>
                      <div className="history-icon">
                        <CheckCircle size={24} color="#10B981" />
                      </div>
                      <div className="history-details">
                        <h4>#ORD-102{7-i}</h4>
                        <p>Delivered on time</p>
                      </div>
                      <div className="history-earnings">
                        <span>+₹50</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default DriverDashboard;
