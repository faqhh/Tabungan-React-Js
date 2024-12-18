import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Footer from "../component/Footer";

function Artikel() {
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

  const [searchTerm, setSearchTerm] = useState(""); 

  const articles = [
    {
      id: 1,
      image: "assets/img/artikel1.jpeg",
      title: "Tips Menabung Cepat",
      description: "Menabung adalah langkah penting dalam perencanaan finansial...",
      link: "/isiartikel",
    },
    {
      id: 2,
      image: "assets/img/artikel2.jpg",
      title: "Menabung dengan Bijak",
      description: "Menabung dengan bijak adalah keterampilan penting...",
      link: "/isiartikel",
    },
    {
      id: 3,
      image: "assets/img/artikel3.jpg",
      title: "Strategi Menabung Cerdas",
      description: "Pelajari strategi menabung yang paling efektif...",
      link: "/isiartikel",
    },
    {
      id: 4,
      image: "assets/img/artikel4.png",
      title: "Nabung Dana Darurat",
      description: "Menyisihkan dana untuk keperluan mendesak adalah langkah cerdas yang bisa menyelamatkan keuangan Anda...",
      link: "/isiartikel",
    },
    {
      id: 5,
      image: "assets/img/artikel5.jpeg",
      title: "Keuntungan Menabung",
      description: "Menabung adalah langkah sederhana yang bisa memberikan manfaat besar bagi masa depan keuangan Anda...",
      link: "/isiartikel",
    },
    {
      id: 6,
      image: "assets/img/artikel6.jpg",
      title: "Raih Tujuan Menabung",
      description: "Meraih tujuan menabung adalah langkah penting untuk mencapai impian finansial Anda. ...",
      link: "/isiartikel",
    },
  ];
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tabungan</title>
        <link rel="stylesheet" href="/assets/css/Artikel.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
         <script src="https://cdn.tailwindcss.com"></script>
         <header>
        <img src="assets/img/logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <Link to="/home"><a href="home.html">Home</a></Link>
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
          <Link to="/artikel"><a href="Artikel.html" className="active">Artikel</a></Link>
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
      <section className="banner">
        <div className="overlay" />
        <div className="banner-content">
          <h2>Mengatasi Tantangan Menabung</h2>
          <Link to="/isiartikel" className="btn-primary">
            Baca Selengkapnya
          </Link>
        </div>
      </section>

      <section className="trending">
        <h3>Trending:</h3>
        <Link to="/isiartikel">Tips Menabung</Link>
        <Link to="/isiartikel">Investasi</Link>
        <Link to="/isiartikel">Menabung Efektif</Link>
        <Link to="/isiartikel">Strategi Investasi</Link>
        <Link to="/isiartikel">Cara Hemat</Link>
        <Link to="/isiartikel">Bagaimana Cara</Link>
      </section>
      <div className="container">
        <aside className="sidebar">
          <input
            type="text"
            placeholder="Cari Artikel"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <h3>Artikel Populer</h3>
          <ul>
            <li><Link to="#">Rahasia Menabung di Tengah...</Link></li>
            <li><Link to="#">Cara Menabung Tanpa Meng...</Link></li>
            <li><Link to="#">5 Strategi Menabung Cerdas</Link></li>
            <li><Link to="#">Menabung di Era Digital</Link></li>
            <li><Link to="#">Menabung untuk Liburan</Link></li>
          </ul>
        </aside>

        <div className="articles">
          {filteredArticles.map((article) => (
            <div key={article.id} className="card">
              <img src={article.image} alt={`Gambar ${article.title}`} />
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <Link to={article.link} className="btn-secondary">
                Baca Selengkapnya
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Artikel;
