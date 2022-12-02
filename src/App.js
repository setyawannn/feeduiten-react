import './App.css';
import React from 'react';

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
              <span className='title-md'>Sisa uang kamu tersisa 75% lagi</span>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col-6'>
              <div className='card-wrapper p-4'>
                <div className='icon-wrapper mb-1'>
                  <i class="bi bi-wallet2"></i>
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
                  <i class="bi bi-cash-stack"></i>
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
                <button className='button btn-ungu px-3 py-2 me-2'>Pemasukan <i class="bi bi-plus-circle-fill"></i></button>
                <button className='button btn-pink px-3 py-2'>Pengeluaran <i class="bi bi-dash-circle-fill"></i></button>
              </div>
            </div>
          </div>

          <div className='row mt-4'>
            {this.state.summary.map((sum) => {
              return (
                <div className='col-12 mb-3 d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className={sum.kategori === 'IN' ? 'icon-wrapper-in' : 'icon-wrapper-out'}>
                      <i class={sum.kategori === 'IN' ? 'bi bi-wallet2' : 'bi bi-bag-dash'}></i>
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

export default App;
