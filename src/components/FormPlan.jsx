import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import Switch from './Switch'
import plans from '../data/plans'
import PlanSelect from './Plan'

function FormPlan() {
  const { state, dispatch } = useContext(FormContext)

  const planSelects = plans.map((item, index) => <PlanSelect key={index} item={item} />)

  function handleChange(event) {
    const { name, checked } = event.target

    dispatch({
      type: 'HANDLE_CHANGE',
      name,
      value: checked
    })
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-heading-mobile desktop:text-heading font-bold">Select your plan</h1>
      <p className="text-gray mt-2 mb-[0.875rem]">You have the option of monthly or yearly billing.</p>
      <div className="flex flex-col desktop:flex-row desktop:gap-[1.125rem]">{planSelects}</div>
      <div className="flex justify-center items-center bg-very-light-gray rounded-large py-[0.875rem] font-medium">
        <span>Monthly</span>
        <Switch name="isYearly" checked={state.isYearly} toggle={handleChange} />
        <span>Yealy</span>
      </div>
    </div>
  )
}

export default FormPlan
