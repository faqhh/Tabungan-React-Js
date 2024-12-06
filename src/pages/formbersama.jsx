import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Formbersama() {
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

  const [formData, setFormData] = useState({
    title: "",
    target: "",
    startDate: "2024-10-24",
    endDate: "2024-10-24",
    amount: "",
    invite: "",
    uploadFileName: "Pilih File",
    frequency: "Mingguan", 
  });

  const navigate = useNavigate(); 
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFrequencyChange = (freq) => {
    setFormData((prevData) => ({ ...prevData, frequency: freq }));
  };

  const handleUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = () => {
      if (fileInput.files.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          uploadFileName: fileInput.files[0].name,
        }));
      }
    };

    fileInput.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "uploadFileName") {
        newErrors[key] = "Harap isi field ini!";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Harap isi semua data pada formulir!");
    } else {
      setErrors({});
      alert("Formulir berhasil dikirim!");
      navigate("/listBersama"); 
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tabungan Form</title>
      <link rel="stylesheet" href="assets/css/formpribadi.css" />
      <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
        <Link to="/home">Home</Link>
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
      <section>
        <div className="main-container">
          <div className="form-container">
            <h2>Ayoo buat tabungan dengan teman atau keluargamu!</h2>
            <form className="savings-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Judul</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Ketik judul di sini yaa"
                    onChange={handleInputChange}
                    style={{
                      border: errors.title ? "2px solid red" : "",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Target</label>
                  <input
                    type="text"
                    name="target"
                    value={formData.target}
                    placeholder="Rp"
                    onChange={handleInputChange}
                    style={{
                      border: errors.target ? "2px solid red" : "",
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Jenis Tabungan</label>
                <div className="select-box">Bersama</div>
              </div>
              <div className="form-group">
                <label>Tanggal Awal Setor</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group frequency">
                <label>Frekuensi Setor</label>
                <div className="frequency-options">
                  {["Harian", "Mingguan", "Bulanan"].map((freq) => (
                    <button
                      type="button"
                      key={freq}
                      className={formData.frequency === freq ? "active" : ""}
                      onClick={() => handleFrequencyChange(freq)}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Tanggal Akhir Setor</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Nominal Setor</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  placeholder="Rp."
                  onChange={handleInputChange}
                  style={{
                    border: errors.amount ? "2px solid red" : "",
                  }}
                />
              </div>
              <div className="form-group">
                <label>Unggah Gambar</label>
                <button type="button" className="upload-btn" onClick={handleUpload}>
                  {formData.uploadFileName}
                </button>
              </div>
              <div className="form-group">
                <label>Undang Teman</label>
                <input
                  type="text"
                  name="invite"
                  value={formData.invite}
                  placeholder="Ketik username di sini yaa"
                  onChange={handleInputChange}
                  style={{
                    border: errors.invite ? "2px solid red" : "",
                  }}
                />
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel"
                  onClick={() => navigate("/home")}
                >
                  Batal
                </button>
                <button type="submit" className="save">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Formbersama;
