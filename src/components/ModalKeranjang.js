import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { addCommas } from '../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'

const ModalKeranjang = ({
    showModal, 
    handleClose, 
    keranjangDetail, 
    jumlah, 
    keterangan, 
    tambah, 
    kurang, 
    changeHandle, 
    handleSubmit, 
    totalHarga,
    hapusPesanan
}) => {
    if (keranjangDetail) {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {keranjangDetail.product.nama}
                        <strong> Rp. {addCommas(keranjangDetail.product.harga)}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Total Harga : </Form.Label>
                            <p><strong>Rp. {addCommas(totalHarga)}</strong></p>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Jumlah : </Form.Label> <br />
                            <Button variant="primary" size="sm" onClick={()=> kurang()}>
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                            
                            <strong className="mx-2">{jumlah}</strong>
                            
                            <Button variant="primary" size="sm">
                                <FontAwesomeIcon icon={faPlus} onClick={()=> tambah()}/>
                            </Button>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Keterangan : </Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="keterangan" 
                            placeholder="Contoh : Pedas, Nasi Setengah" 
                            value={keterangan} 
                            onChange={(event) => changeHandle(event)}/>
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Simpan
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={() => {hapusPesanan(keranjangDetail.id)}}>
                        <FontAwesomeIcon icon={faTrash}/> {' '}
                        Hapus Pesanan
                    </Button>
                </Modal.Footer>
            </Modal>
        ) 
    } else {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Kosong</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kosong</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalKeranjang