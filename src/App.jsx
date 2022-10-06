import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import header from "./components/header"
import logo from "./img/logo.png"
import header1 from "./img/header-1.png"
import header2 from "./img/header-2.png"
import header3 from "./img/header-3.png"
import header4 from "./img/header-4.png"
import header5 from "./img/header-5.png"
import header6 from "./img/header-6.png"
import header7 from "./img/header-7.png"
import sircle from "./img/sircle.png"
import main1 from "./img/main-1.png"
import main2 from "./img/main-2.png"
import main3 from "./img/main-3.png"
import main4 from "./img/main-4.png"
import card1 from "./img/card-1.png"
import card2 from "./img/card-2.png"
import card3 from "./img/card-3.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <header class="header">
        <div class="color">
            <nav class="nav">
                <div class="nav__logo"><img src={logo} alt="logo" /></div>

                <ul class="nav__ul">
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a">Beranda</a></li>
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a">Koleksi</a></li>
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a">Syarat dan Ketentuan</a></li>
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a">Kontak</a></li>
                    <li class="nav__ul__li"><a href="#" class="nav__ul__li__a  btn">Masuk</a></li>
                </ul>
            </nav>
        </div>

        <div class="header__title">
            <h3><span>Pojok Baca</span> Probolinggo</h3>

            <h2>Pinjam Buku Secara <span>Gratis</span> untuk Masyarakat</h2>

            <div class="buttons">
                <button class="btn1">Cari Judul Buku <i class="fas fa-search"></i></button>
                <button class="btn2">Donasi dengan Kami</button>
            </div>
        </div>



        <div class="header__cards">
            <div class="header__cards__box1">
                <h3>Sedang Tuhan pun Cemburu</h3>
                <p><span>Emha Ainun Nadjib</span></p>
                <img src={header1} alt="header-1" />
            </div>

            <div class="header__cards__box2">
                <h3>Hati-Hati dengan Sampah</h3>
                <p><span>Ukjae Lee</span></p>
                <img src={header2} alt="header-2" />
            </div>

            <div class="header__cards__box3">
                <h3>Laut Bercerita</h3>
                <p><span>Leila S. Chudori</span></p>
                <img src={header3} alt="header-3" />
            </div>
            <div class="header__cards__box4">
                <h3>Toto-chan : The Little Girl At The Window</h3>
                <p><span>Testuko Kuroyanagi</span></p>
                <img src={header4} alt="header-4" />
            </div>

            <div class="header__cards__box5">
                <h3>Anatomi Rasa</h3>
                <p><span>Anatomi Rasa</span></p>
                <img src={header5} alt="header-5" />
            </div>

            <div class="header__cards__box6">
                <h3>Perempuan di Titik Nol</h3>
                <p><span>Nawal eEl Saadawi</span></p>
                <img src={header6} alt="header-6" />
            </div>

            <div class="header__cards__box7">
                <h3>Berjalan di Atas Cahaya</h3>
                <p><span>Hanum Salsabiela Rais</span></p>
                <img src={header7} alt="header-7" />
            </div>
        </div>

    </header>


    <main class="main">
        <div class="position">
            <div class="main__title">
                <h1>Kenapa Kita <span>Harus</span> Membaca Buku?</h1>
            </div>

            <div class="main__flex">

                <div class="main__flex__box1">

                    <p>“Aku rela dipenjara asalkan <b>bersama buku</b>, karena dengan buku <b>aku bebas</b>”</p>

                    <div class="main__flex__box1__avatar">
                        <img src={main1} alt="main1" />

                        <div class="main__flex__box1__avatar__words">
                            <h1>Mohammad Hatta</h1>
                            <h3>Wakil Presiden Indonesia Pertama</h3>
                        </div>
                    </div>
                </div>

                <div class="main__flex__box1">

                    <p>“Cuma perlu <b>satu buku</b> untuk jatuh cinta pada membaca, Cari Buku itu! <b>Mari jatuh
                            cinta</b>!</p>

                    <div class="main__flex__box1__avatar">
                        <img src={main2} alt="main1" />

                        <div class="main__flex__box1__avatar__words">
                            <h1>Najwa Shihab</h1>
                            <h3>Duta Membaca</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </main>


    <div class="col">
        <div class="col__box">
            <img src={sircle} alt="sircle" />
            <div class="col__box__words">
                <h1>500+</h1>
                <p>Judul Buku</p>
            </div>
        </div>

        <div class="col__box">
            <img src={sircle} alt="sircle" />
            <div class="col__box__words">
                <h1>$0</h1>
                <p>Gratis Peminjaman</p>
            </div>
        </div>

        <div class="col__box">
            <img src={sircle} alt="sircle" />
            <div class="col__box__words">
                <h1>5</h1>
                <p>Kegiatan Rutin</p>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="section__title">
            <ul class="section__title__ul">
                <li>Apa Kata Mereka?</li>
                <li>Mereka yang telah menjadi pengunjung tetap kami</li>
            </ul>
            <ul class="section__title__ul2">
                <li>Selengkapnya</li>
            </ul>
        </div>

        <div class="section__cards">

            <div class="section__cards__box">
            
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <div class="section__cards__box__flex">
                    <ul class="section__cards__box__flex__ul">
                        <li><img src={main3} alt="main-3" /></li>
                    </ul>

                    <ul class="section__cards__box__flex__ul2">
                        <li>Guy Hawkins</li>
                        <li>32 Tahun, Karyawan</li>
                    </ul>

                </div>

            </div>


            <div class="section__cards__box2">
            
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            <div class="section__cards__box2__flex">
                <ul class="section__cards__box2__flex__ul">
                    <li><img src={main4} alt="main-4" /></li>
                </ul>

                <ul class="section__cards__box2__flex__ul2">
                    <li>Brooklyn Simmons</li>
                    <li>20 Tahun, Mahasiswa</li>
                </ul>

            </div>

        </div>

        </div>

    </section>


    <div class="row">
        <div class="row__title">
            <ul class="row__title__ul">
                <li>Apa Kata Mereka?</li>
                <li>Mereka yang telah menjadi pengunjung tetap kami</li>
            </ul>
            <ul class="row__title__ul2">
                <li>Selengkapnya</li>
            </ul>
        </div>

        <div class="row__cards">
            <img src={card1} alt="card1" />
            <img src={card2} alt="card2" />
            <img src={card3} alt="card3" />
        </div>
    </div>

  

    <div class="information">
        <h2>Ingin <span>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h2>
        <p>Percayakan melalui kegiatan kita</p>
        <button>Donasi dengan Kami</button>
        <h4>Atau</h4>
        <h3>Hubungi Kami <i class="fas fa-phone"></i></h3>
    </div>

   

    <footer class="footer">
        <div class="footer__flex">
            <ul class="footer__flex__ul">
                <li><img src={logo} alt="logo" /> Pojok Baca Probolinggo</li>
                <li><i class="fab fa-instagram"></i><i class="fab fa-facebook"></i><i class="fab fa-youtube"></i></li>
            </ul>

            <ul class="footer__flex__ul2">
                <p>Kontak</p>
                <li>Email</li>
                <li>Alamat</li>
                <li>No. Rekening</li>
            </ul>

            <ul class="footer__flex__ul3">
                <p>Tentang Kami</p>
                <li>Umum</li>
            </ul>

            <ul class="footer__flex__ul4">
                <p>Galery</p>
                <li>Kegiatan 2018</li>
                <li>Kegiatan 2019</li>
                <li>Kegiatan 2020</li>
                <li>Kegiatan 2021</li>
            </ul>
        </div>
    </footer>

<div class="footer-bottom">
    <div class="footer-bottom__position">
        <p>copy Pojok Baca Probolinggo 2022</p>
    </div>
</div>
    </div>
  )
}

export default App
