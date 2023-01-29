import { useContext } from 'react'
import { FormContext } from '../context/FormContext'

function Footer({ step, totalSteps, goToStep, isCompleted, complete }) {
  // const { state, dispatch } = useContext(FormContext)
  const isLastStep = step === totalSteps

  function handleNextClick() {
    if (isLastStep) {
      complete()
      return
    }
    goToStep(step + 1)
  }

  function goBack() {
    goToStep(step - 1)
  }

  if (isCompleted) return

  return (
    <div className="px-4 flex bg-white p-4 font-medium text-body-m w-full fixed bottom-0 left-0 desktop:static">
      {step > 1 && (
        <button className="text-gray hover:text-denim transition-colors" onClick={goBack} type="button">
          Go Back
        </button>
      )}
      <button
        className={`${
          isLastStep ? 'bg-purple hover:bg-purple-hover' : 'bg-denim hover:bg-denim-hover'
        } text-white px-4 py-3 ml-auto transition-colors rounded-small desktop:rounded-large desktop:px-6 desktop:py-[0.875rem]`}
        onClick={handleNextClick}
        type="button"
      >
        {isLastStep ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  )
}

export default Footer
