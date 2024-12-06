import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function ListBersama2() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Bayar tagihan listrik sebelum 30 November.", type: "Pengingat" },
    { id: 2, message: "Gaji sebesar Rp 20.000.000 telah diterima.", type: "Pemasukan" },
    { id: 3, message: "Dividen saham sebesar Rp 2.000.000 telah diterima.", type: "Investasi" },
  ]);
  
  const [isNotificationPanelVisible, setIsNotificationPanelVisible] = useState(false);

  const toggleNotificationPanel = () => {
    setIsNotificationPanelVisible(!isNotificationPanelVisible);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setIsNotificationPanelVisible(false);
  };

  const navigate = useNavigate();
  
  // State untuk data tabungan
  const [totalAmount] = useState(30000000); // Target tabungan
  const [collectedAmount, setCollectedAmount] = useState(100000); // Jumlah terkumpul
  const [progressPercent, setProgressPercent] = useState(0); // Persentase progress
  const [transactions, setTransactions] = useState([
    {
      date: "30 Oktober 2024 - 12:00",
      day: "Rabu, 30 Oktober 2024",
      amount: "+ Rp 100.000",
    },
  ]); // Riwayat transaksi

  // Hitung progress saat komponen dimuat
  useEffect(() => {
    const progress = ((collectedAmount / totalAmount) * 100).toFixed(2);
    setProgressPercent(progress);
  }, [collectedAmount, totalAmount]);

  // Fungsi untuk menambahkan transaksi baru
  const addTransaction = () => {
    const newTransaction = {
      date: "17 November 2024 - 09:30",
      day: "Senin, 17 November 2024",
      amount: "+ Rp 150.000",
    };

    setTransactions((prev) => [...prev, newTransaction]);
    setCollectedAmount((prev) => prev + 150000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Detail Tabungan</title>
      <link rel="stylesheet" href="assets/css/listBersama2.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/home"><a href="home.html" >Home</a></Link>
          <a href="#" className="navigation-link dropdown-toggle text-green-500 active" data-bs-toggle="dropdown">Tabungan</a>
          <div className="dropdown-menu fade-up m-0">
            <Link to="/formbersama">
              <a href="formbersama.html" className="dropdown-item">Tabungan Bersama</a>
            </Link>
            <Link to="/formpribadi">
              <a href="formpribadi.html" className="dropdown-item">Tabungan Mandiri</a>
            </Link>
          </div>
          <Link to="/keuangan"><a href="keuangan.html">Keuangan</a></Link>
          <Link to="/artikel"><a href="Artikel.html">Artikel</a></Link>
          <div className="profile-section">
            <button className="notification-bell" onClick={toggleNotificationPanel}>
              <FontAwesomeIcon icon={faBell} />
              {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}
            </button>
            <Link to="/profil">
              <a href="profil.html">
                <button className="profile">Profile</button>
              </a>
            </Link>
          </div>
        </nav>
      </header>
      {isNotificationPanelVisible && (
        <div className="notification-panel">
          <h3>Notifications</h3>
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <li key={notification.id} className="border-notif">
                  <strong>{notification.type}:</strong> {notification.message}
                </li>
              ))
            ) : (
              <li>No new notifications</li>
            )}
          </ul>
          <button onClick={clearNotifications}>Clear All</button>
        </div>
      )}
      <main>
      <div className="container">
        <div className="header">
          <     button className="back-button" onClick={handleBack}>⬅️</button>
          <h1>Holiday</h1>
        </div>
        <div className="content">
          <div className="image-section">
            <img
              src="assets/img/holiday.jpg"
              alt="Holiday"
              className="image-preview"
            />
            <div className="details">
              <label>Judul</label>
              <input type="text" defaultValue="Holiday" disabled="" />
              <label>Target</label>
              <input type="text" defaultValue="Rp 30.000.000" disabled="" />
            </div>
          </div>
          <div className="progress-section">
            <div className="target">
              <h2>Rp 30.000.000</h2>
              <p>Rp 1.000.000 Perbulan</p>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "10%" }} />
            </div>
            <p className="progress-text">8%</p>
            <div className="progress-date">
             <p>
                <strong>Tanggal Dibuat:</strong> 30/10/2024
              </p>
              <p>
                <strong>Estimasi Tanggal Ketercapaian:</strong> 30/05/2030
              </p>
            </div>
          </div>
          <div className="history">
            <div className="summary-section">
              <div className="col">
                <h3>Terkumpul</h3>
                <p>Rp 1.000.000</p>
              </div>
              <div className="col">
                <h3>Kekurangan</h3>
                <p>Rp 29.000.000</p>
              </div>
            </div>
            <h4>30 Oktober 2024 - 12:00</h4>
            <p>Rabu, 30 Oktober 2024</p>
            <p className="amount">+ Rp 100.000</p>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}

export default ListBersama2;
