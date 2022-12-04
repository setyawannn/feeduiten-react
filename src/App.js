import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sisaUang: 0,
      persentasiUang: 0,
      pemasukanUang: 0,
      pengeluaranUang: 0,
      transaksiIN: 0,
      transaksiOUT: 0,
      summary: [
        {
          deskripsi: "Menerima gaji",
          tanggal: '1 July 2022',
          nominal: 1000000,
          kategori: 'IN',
        },
        {
          deskripsi: "Makan nasi padadng",
          tanggal: '2 July 2022',
          nominal: 20000,
          kategori: 'OUT',
        },
      ],
    }

  }

  render() {
    return (
      <>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className='fw-bold'>FEEDUITEN APPS</h1>
              <hr className='w-75 mx-auto' />
              <h2 className='fw-bold'>Rp {this.state.sisaUang},-</h2>
              <span className='title-md'>Sisa uang kamu tersisa {this.state.persentasiUang}% lagi</span>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col-6'>
              <div className='card-wrapper p-4'>
                <div className='icon-wrapper mb-1'>
                  <i className="bi bi-wallet2"></i>
                </div>
                <span className='title-sm'>Pemasukan</span>
                <h3 className='fw-bold'>Rp {this.state.pemasukanUang},-</h3>
                <div>
                  <span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> Transaksi</span>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='card-wrapper p-4'>
                <div className='icon-wrapper mb-1'>
                  <i className="bi bi-cash-stack"></i>
                </div>
                <span className='title-sm'>Pengeluaran</span>
                <h3 className='fw-bold'>Rp {this.state.pengeluaranUang},-</h3>
                <div>
                  <span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> Transaksi</span>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <h4>Ringkasan Transaksi</h4>
              <div className='button-wrapper d-flex'>
                <ModalCreate variant="button btn-ungu px-3 py-2 me-2" text="Pemasukan" icon="bi bi-plus-circle-fill" modalHeading="Tambahkan Pemasukan" />
                <ModalCreate variant="button btn-pink px-3 py-2" text="Pengeluaran" icon="bi bi-dash-circle-fill" modalHeading="Tambahkan Pengeluaran" />
              </div>
            </div>
          </div>

          <div className='row mt-4'>
            {this.state.summary.map((sum, index) => {
              return (
                <div key={index} className='col-12 mb-3 d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className={sum.kategori === 'IN' ? 'icon-wrapper-in' : 'icon-wrapper-out'}>
                      <i className={sum.kategori === 'IN' ? 'bi bi-wallet2' : 'bi bi-bag-dash'}></i>
                    </div>
                    <div className='transaction ms-3 d-flex flex-column'>
                      <h6>{sum.deskripsi}</h6>
                      <span className='title-sm'>{sum.tanggal}</span>
                    </div>
                  </div>

                  <h5 className={sum.kategori === 'IN' ? 'text-money-in' : 'text-money-out'} >Rp {sum.nominal}</h5>
                </div>
              )
            })}

          </div>
        </div>
      </>
    )
  }
}

class ModalCreate extends React.Component {

  constructor() {
    super();
    this.state = {
      show: false,
      deskripsi: '',
      nominal: 0,
      tanggal: '',
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleClose() {
    this.setState({
      show: false,
    })
  }

  handleShow() {
    this.setState({
      show: true,
    })
  }

  handleChange(evt) {
    const inputan = evt.target.name
    const value = evt.target.value
    this.setState({
      [inputan]: value
    })
  }

  render() {
    return (
      <>
        <button
          onClick={this.handleShow}
          className={this.props.variant}>{this.props.text}<i className={this.props.icon}></i>
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Deskripsi</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukan deskripsi"
                name='deskripsi'
                value={this.state.deskripsi}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nominal</label>
              <input
                type="number"
                className="form-control"
                placeholder="Masukan nominal"
                name='nominal'
                value={this.state.nominal}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tanggal</label>
              <input
                type="date"
                className="form-control"
                placeholder="Masukan deskripsi"
                name='tanggal'
                value={this.state.tanggal}
                onChange={this.handleChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default App;
