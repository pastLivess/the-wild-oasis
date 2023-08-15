import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Spinner from '../../ui/Spinner'
import useSettings from './useSettings'
import { useUpdateSetting } from './useUpdateSetting'

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings()
  const { isUpdating, updateSetting } = useUpdateSetting()
  if (isLoading) return <Spinner />
  function handlerUpdate(e, filed) {
    const { value } = e.target
    if (!value) return
    updateSetting({ [filed]: value })
    console.log(value, filed, isUpdating)
  }
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min-nights'
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handlerUpdate(e, 'minBookingLength')}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max-nights'
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handlerUpdate(e, 'maxBookingLength')}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max-guests'
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handlerUpdate(e, 'maxGuestsPerBooking')}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast-price'
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onBlur={(e) => handlerUpdate(e, 'breakfastPrice')}
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
