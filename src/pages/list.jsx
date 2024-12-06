import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabunganbersama from "./tabunganbersama";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const TabunganItem = ({ tabungan, onEdit, onFavorite }) => {

  const Tabunganbersama = () => {
    navigate("/tabunganbersama"); 
  };


  return (
    <div className="tabungan-item">
      <div className="card">
        <div className="card-header">
          <i
            className={`star-icon ${tabungan.isFavorited ? "favorited" : ""}`}
            onClick={() => onFavorite(tabungan.id)}
          >
            ★
          </i>
          <span>{tabungan.name}</span>

          <i
            className="edit-icon"
            onClick={() =>{ onEdit(tabungan.id, tabungan.name);Tabunganbersama()}}
          >
            ✏️
          </i>
        </div>
        <img src={tabungan.image} alt={tabungan.name} className="card-image" />
      </div>
      <div className="tabungan-info">
        <div>
          Target <span>{tabungan.target}</span>
        </div>
        <div>
          Nominal Setor <span>{tabungan.nominalSetor}</span>
        </div>
        <div>
          Tanggal Awal Setor <span>{tabungan.startDate}</span>
        </div>
        <div>
          Tanggal Akhir Setor <span>{tabungan.endDate}</span>
        </div>
        <div>
          Nominal Saat Ini <span>{tabungan.currentAmount}</span>
        </div>
      </div>
    </div>
  );
};

const ListBersama = () => {
  const [jenisTabungan, setJenisTabungan] = useState("Bersama");
  const [tabunganList, setTabunganList] = useState([
    {
      id: 1,
      name: "Macbook",
      target: "Rp 30.000.000",
      nominalSetor: "Rp 200.000",
      startDate: "24/10/2024",
      endDate: "24/12/2024",
      currentAmount: "Rp 15.000.000",
      image: "assets/img/macbook.jpg",
      isFavorited: false,
    },
    {
      id: 2,
      name: "Skincare",
      target: "Rp 1.000.000",
      nominalSetor: "Rp 50.000",
      startDate: "25/12/2024",
      endDate: "25/01/2024",
      currentAmount: "Rp 300.000",
      image: "assets/img/skincare.jpeg",
      isFavorited: false,
    },
  ]);

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

  const handleSelectJenisTabungan = () => {
    const types = ["Pribadi", "Holiday", "Birthday Party"];
    const currentIndex = types.indexOf(jenisTabungan);
    const nextIndex = (currentIndex + 1) % types.length;
    setJenisTabungan(types[nextIndex]);
  };

  const handleFavorite = (id) => {
    setTabunganList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isFavorited: !item.isFavorited } : item
      )
    );
  };

  const handleEdit = (id, name) => {
    const action = "Editing Tabungan";
    alert(`${action}: ${name} (ID: ${id})`);
  };
  return (
      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tabungan Bersama</title>
  <link rel="stylesheet" href="assets/css/list.css" />
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
        <section className="tabungan-container">
          <h1>Tabungan Bersama</h1>
          <div className="tabungan-select">
            <button onClick={handleSelectJenisTabungan}>
              <span>🗂️ Pilih Jenis Tabungan</span>
              <span className="tabungan-jenis">{jenisTabungan}</span>
            </button>
          </div>
          <div className="tabungan-card">
            {tabunganList.map((tabungan) => (
              <TabunganItem
                key={tabungan.id}
                tabungan={tabungan}
                onEdit={handleEdit}
                onFavorite={handleFavorite}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ListBersama;