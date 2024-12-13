import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const TabunganItem = ({ tabungan, onEdit, onFavorite }) => {
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
          <i className="edit-icon" onClick={() => onEdit(tabungan.id)}>
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
  const navigate = useNavigate();
  const [jenisTabungan, setJenisTabungan] = useState("Bersama");
  const [tabunganList, setTabunganList] = useState([
    {
      id: 1,
      name: "Holiday",
      target: "Rp 30.000.000",
      nominalSetor: "Rp 200.000",
      startDate: "24/10/2024",
      endDate: "24/12/2024",
      currentAmount: "Rp 15.000.000",
      image: "assets/img/holiday.jpg",
      isFavorited: false,
    },
    {
      id: 2,
      name: "Birthday Party",
      target: "Rp 1.000.000",
      nominalSetor: "Rp 50.000",
      startDate: "25/12/2024",
      endDate: "25/01/2024",
      currentAmount: "Rp 300.000",
      image: "assets/img/b'day.jpg",
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

  const handleEdit = (id) => {
    navigate("/tabunganbersama");
  };

  return (
    <div>
      <header>
      <link rel="stylesheet" href="/assets/css/listBersama.css" />
        <img src="/assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/home">Home</Link>
          <a href="#" className="navigation-link dropdown-toggle text-green-500 active" data-bs-toggle="dropdown">
            Tabungan
          </a>
          <div className="dropdown-menu fade-up m-0">
            <Link to="/formbersama" className="dropdown-item">
              Tabungan Bersama
            </Link>
            <Link to="/formpribadi" className="dropdown-item">
              Tabungan Mandiri
            </Link>
          </div>
          <Link to="/keuangan">Keuangan</Link>
          <Link to="/artikel">Artikel</Link>
          <div className="profile-section">
            <button className="notification-bell" onClick={toggleNotificationPanel}>
              <FontAwesomeIcon icon={faBell} />
              {notifications.length > 0 && <span className="notification-count">{notifications.length}</span>}
            </button>
            <Link to="/profil">
              <button className="profile">Profile</button>
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
                <li key={notification.id}>
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
              🗂️ Pilih Jenis Tabungan: <span className="tabungan-jenis">{jenisTabungan}</span>
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
