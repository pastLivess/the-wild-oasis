import styled from 'styled-components'
import { HiSquare2Stack, HiPencil, HiTrash } from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers'
import CreateCabinForm from './CreateCabinForm'
import { useDeleteCabin } from './useDeleteCabin'
import { useCreateCabin } from './useCreateCabin'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import Table from '../../ui/Table'
import Menus from '../../ui/Menus'

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`

export default function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin()
  const { isCreating, createCabin } = useCreateCabin()
  const { id, name, image, maxCapacity, regularPrice, description, discount } =
    cabin
  function handlerDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      image,
      regularPrice,
      discount,
      description,
    })
  }
  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up tp {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&dash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={handlerDuplicate}>
                Duplicate
              </Menus.Button>
              <Modal.Open opens='edit'>
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens='delete'>
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name='edit'>
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name='delete'>
              <ConfirmDelete
                resourceName='cabins'
                disabled={isDeleting}
                onConfirm={() => deleteCabin(id)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  )
}
