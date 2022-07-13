import Hero from './Hero';
import Cardjurusan from './Cardjurusan';
import course1 from './../asset/course-1-1.png'
import course2 from './../asset/course-1-2.png'
import course3 from './../asset/course-1-3.png'
import course4 from './../asset/course-1-4.png'
import image1 from './../asset/image1.jpg'
import image2 from './../asset/image2.jpg'
import image3 from './../asset/image3.jpg'
import Cardkegiatan from './Cardkegiatan';

const Maintcontent = () => {
    return (
        <div>
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <Cardjurusan id="tkj" image={course1} jurusan="TKJ" subjek="di jurusan TKJ mempelajari tentang Subneting, routing, ip address dan berbagai macam Jaringan" />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Cardjurusan image={course2} jurusan="AP" subjek="di jurusan AP mempelajari rumus rumus untuk menghitung pinjaman, setor dan macam macam" />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Cardjurusan image={course3} jurusan="OTKP" subjek="kalo jurusan ini saya kurang tau browww " />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-lg-4 col-12">
                            <Cardjurusan image={course3} jurusan="Mesin" subjek="di jurusan Teknik mesin anda akan mempelajari part demi part pada sebuah motor dan mobil" />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Cardjurusan image={course2} jurusan="RPL" subjek="di jurusan RPL anada akan mempelajri berbagai bahasa pemrograman seperti (Python, golang, php) " />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Cardjurusan image={course1} jurusan="Designer" subjek="di jurusan Designer anda akan memperlajari bagai mana membuat karya yang menarik :v " />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Jadwal kegiatan</h1>
                        </div>
                        <div className="col-12 my-3">
                            <Cardkegiatan image={image1} judul="Pertanian" />
                        </div>
                        <div className="col-12 my-3">
                            <Cardkegiatan image={image2} judul="Percangkulan" />
                        </div>
                        <div className="col-12 my-3">
                            <Cardkegiatan image={image3} judul="Prgunungan" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maintcontent;