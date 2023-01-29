import { useContext } from 'react'
import { FormContext } from '../context/FormContext'

function Input(props) {
  return (
    <label className="flex flex-col">
      <div className="mt-4 mb-[3px] desktop:mt-6 desktop:mb-2">{props.label}</div>
      <input
        type="text"
        className="py-3 px-4 font-medium rounded-small desktop:rounded-large border-border border-[1px] focus:outline-purple"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  )
}

function FormPersonal() {
  const { state, dispatch } = useContext(FormContext)

  function handleChange(event) {
    const { name, value } = event.target

    dispatch({
      type: 'HANDLE_CHANGE',
      name,
      value
    })
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-heading-mobile desktop:text-heading font-bold">Personal info</h1>
      <p className="text-gray mt-2">Please provide your name, email address, and phone number.</p>
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
  )
}

export default FormPersonal
