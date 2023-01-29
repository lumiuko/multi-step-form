import { useContext } from 'react'
import { FormContext } from '../../context/FormContext'
import Input from '../ui/Input'
import FormHeader from '../ui/FormHeader'

export default function FormPersonal() {
  const { state, dispatch } = useContext(FormContext)

  function handleChange(event) {
    const { name, value } = event.target

    dispatch({ type: 'HANDLE_CHANGE', name, value })
  }

  return (
    <div className="flex flex-col">
      <FormHeader title="Select your plan" text="You have the option of monthly or yearly billing." />
      <div className="flex flex-col gap-4 desktop:gap-6">
        <Input value={state.name} onChange={handleChange} label="Name" name="name" placeholder="e.g. Stephen King" />
        <Input
          value={state.email}
          onChange={handleChange}
          label="Email Address"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Input
          value={state.phone}
          onChange={handleChange}
          label="Phone Number"
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </div>
  )
}
