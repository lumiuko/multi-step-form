import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import plans from '../data/plans'

function FormFinish(props) {
  const { state } = useContext(FormContext)

  const termSlug = state.isYearly ? 'yr' : 'mo'
  const currentPlan = plans.find(plan => plan.name === state.plan)
  const planPrice = state.isYearly ? currentPlan.price.yearly : currentPlan.price.monthly

  const addons = state.addons.map((addon, index) => (
    <li key={index} className="flex justify-between mt-3">
      <span>{addon.name}</span>
      <span className="text-denim">
        +{state.isYearly ? addon.price.yearly : addon.price.monthly}/{termSlug}
      </span>
    </li>
  ))

  const addonsPrice = state.addons.reduce((result, currentAddon) => {
    return result + (state.isYearly ? currentAddon.price.yearly : currentAddon.price.monthly)
  }, 0)
  const totalPrice = planPrice + addonsPrice
  const hasAddons = state.addons.length > 0

  return (
    <div className="flex flex-col">
      <h1 className="text-heading-mobile desktop:text-heading font-bold">Finishing up</h1>
      <p className="text-gray mt-2 mb-[0.875rem]">Double-check everything looks OK before confirming.</p>
      <div className="p-4 bg-very-light-gray text-body-m rounded-large">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium">Arcade ({state.isYearly ? 'Yearly' : 'Montly'})</div>
            <button
              type="button"
              className="underline text-gray hover:text-purple transition-colors"
              onClick={() => props.goToStep(2)}
            >
              Change
            </button>
          </div>
          <span className="font-bold">
            ${planPrice}/{termSlug}
          </span>
        </div>
        {hasAddons && <ul className="mt-3 border-t-gray border-t-[1px] text-gray">{addons}</ul>}
      </div>
      <div className="flex justify-between mt-6 mx-4">
        <span className="text-gray text-body-m">Total (per {state.isYearly ? 'year' : 'month'})</span>
        <span className="text-purple font-bold">
          ${totalPrice}/{termSlug}
        </span>
      </div>
    </div>
  )
}

export default FormFinish
