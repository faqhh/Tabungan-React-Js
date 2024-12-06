import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Tabunganbersama() {
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

  const [frequency, setFrequency] = useState("Mingguan");
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  const handleFrequencyChange = (newFrequency) => {
    setFrequency(newFrequency);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]?.name || "Tidak ada file dipilih";
    setFileName(file);
    alert(`File dipilih: ${file}`);
  };

  const handleViewSaving = () => {
    alert("Detail tabungan akan segera tersedia!");
  };

  const handleSave = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menyimpan perubahan?");
    if (isConfirmed) {
      alert("Data berhasil disimpan!");
    }
  };

  const handleCancel = () => {
    const isCancelled = window.confirm("Apakah Anda yakin ingin membatalkan perubahan?");
    if (isCancelled) {
      window.location.reload();
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Edit Tabungan</title>
      <link rel="stylesheet" href="assets/css/tabunganbersama.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/home"><a href="home.html">Home</a></Link>
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
        <section className="edit-tabungan-container">
          <div className="header">
            < button className="back-button" onClick={handleBack}>⬅️</button>
            <h1>Holiday</h1>
        </div>
          <div className="form-container">
            <div className="image-section">
              <img
                src="assets/img/holiday.jpg"
                alt="Holiday"
                className="tabungan-image"
              />
              <Link to="/listBersama2">
                <button className="lihat-tabungan" onClick={handleViewSaving}>
                  Lihat Tabungan
                </button>
              </Link>
            </div>
            <div className="form-section">
              <div className="form-group">
                <label>Judul</label>
                <input type="text" defaultValue="Holiday" />
              </div>
              <div className="form-group">
                <label>Target</label>
                <input type="text" defaultValue="Rp 30.000.000" />
              </div>
              <div className="form-group">
                <label>Nominal Setor</label>
                <input type="text" defaultValue="Rp 1.000.000" />
              </div>
              <div className="form-group">
                <label>Tanggal Awal Setor</label>
                <input type="date" defaultValue="2024-10-30" />
              </div>
              <div className="form-group frekuensi">
                {["Harian", "Mingguan", "Bulanan"].map((freq) => (
                  <button
                    key={freq}
                    className={`frekuensi-btn ${freq === frequency ? "active" : ""}`}
                    onClick={() => handleFrequencyChange(freq)}
                  >
                    {freq}
                  </button>
                ))}
              </div>
              <div className="form-group">
                <label>Tanggal Akhir Setor</label>
                <input type="date" defaultValue="2030-05-30" />
              </div>
              <div className="form-group">
                <label>Unggah Gambar</label>
                <input type="file" onChange={handleFileChange} />
              </div>
              <div className="form-actions">
                <button className="btn batal" onClick={handleCancel}>
                  Batal
                </button>
                <button className="btn simpan" onClick={handleSave}>
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Tabunganbersama;
