import Spinner from '../../ui/Spinner'
import CabinRow from './CabinRow'
import { useCabins } from './useCabins'
import Table from '../../ui/Table'
import Menus from '../../ui/Menus'
import { useSearchParams } from 'react-router-dom'
import Empty from '../../ui/Empty'

export default function CabinTable() {
  const { isLoading, cabins } = useCabins()
  const [searchparams] = useSearchParams()

  if (isLoading) return <Spinner />

  if (!cabins.length) return <Empty resource='cabins' />
  // filter
  let filterValue = searchparams.get('discount') || 'all'
  let filterCabins
  if (filterValue === 'all') filterCabins = cabins

  if (filterValue === 'no-discount')
    filterCabins = cabins.filter((cabin) => cabin.discount === 0)
  if (filterValue === 'with-discount')
    filterCabins = cabins.filter((cabin) => cabin.discount > 0)

  //sort
  const sortBy = searchparams.get('sortBy') || 'startDate-asc'
  const [filed, direction] = sortBy.split('-')
  const modifier = direction === 'asc' ? 1 : -1
  const sortedCabins = filterCabins.sort(
    (a, b) => (a[filed] - b[filed]) * modifier
  )
  return (
    <>
      <Menus>
        <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
          <Table.Header>
            <div></div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
            <div></div>
          </Table.Header>
          <Table.Body
            data={sortedCabins}
            render={(cabin) => (
              <CabinRow cabin={cabin} key={cabin.id} />
            )}></Table.Body>
        </Table>
      </Menus>
    </>
  )
}
