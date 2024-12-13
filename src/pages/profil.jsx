import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Profil() {
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

  const changeProfilePhoto = () => {
    alert("Fitur ubah foto profil belum tersedia.");
  };

  const saveChanges = (event) => {
    event.preventDefault();
    alert("Perubahan berhasil disimpan.");
  };

  const resetForm = () => {
    document.getElementById("name").value = "muhamad Nur Faqih";
    document.getElementById("email").value = "mnurfaqih7@gmail.com";
    document.getElementById("password").value = "*********";
    document.getElementById("language").value = "Bahasa Indonesia";
  };

  const logOut = () => {
    navigate("/"); 
  };

  const deleteAccount = () => {
    alert("Fitur hapus akun belum tersedia.");
  };

  return (
    <Fragment>
      <>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Tabungan</title>
          <link rel="stylesheet" href="/assets/css/profil.css" />
          <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
         <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
        <Link to="/home">Home</Link>
          <a href="#" className="navigation-link dropdown-toggle" data-bs-toggle="dropdown">Tabungan</a>
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
        <div className="wrapper">
          <div className="profile-container">
            <div className="profile-card">
              <h2>Profile & Pengaturan</h2>
              <div className="profile-content">
                <div className="profile-header">
                  <img
                    src="assets/img/123.png"
                    alt="Foto Profil"
                    className="profile-photo"
                    id="profilePhoto"
                  />
                  <button className="change-button" onClick={changeProfilePhoto}>
                    Ubah
                  </button>
                </div>
                <form className="profile-form" onSubmit={saveChanges}>
                  <div className="form-group">
                    <label htmlFor="name">Nama</label>
                    <input type="text" id="name" defaultValue="muhamad nur faqih" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" defaultValue="mnrfaqih7@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Kata Sandi</label>
                    <input type="password" id="password" defaultValue="*********" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="language">Bahasa</label>
                    <input type="text" id="language" defaultValue="Bahasa Indonesia" />
                  </div>
                  <div className="form-buttons">
                    <button type="button" className="cancel-button" onClick={resetForm}>
                      Batal
                    </button>
                    <button type="submit" className="save-button">
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-footer">
              <p>
                <a href="#">Privacy Policy</a> | <a href="#">FAQ & Bantuan</a> |{" "}
                <a href="#">Help Center</a>
              </p>
              <div className="footer-buttons">
                <button className="logout-button" onClick={logOut}>
                  Log Out
                </button>
                <button className="delete-account-button" onClick={deleteAccount}>
                  Delete Account
                </button>
              </div>
            </div>
        <footer className="footer">
          <div className="footer-left">
            <p>© 2024 Tabungin Inc.</p>
            <a href="#">Terms & conditions</a>
            <a href="#">Privacy policy</a>
            <a href="#">Contact us</a>
          </div>
          <div className="footer-right">
            <a href="#">
              <img src="assets/img/f1.jpg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="assets/img/f2.jpg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="assets/img/f3.jpg" alt="YouTube" />
            </a>
            <a href="#">
              <img src="assets/img/f4.jpg" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="assets/img/f5.jfif" alt="Twitter" />
            </a>
          </div>
        </footer>
      </>
    </Fragment>
  );
}

export default Profil;
