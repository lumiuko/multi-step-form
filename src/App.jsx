import { useState } from 'react'

import Sidebar from './components/Sidebar'
import MainForm from './components/MainForm'
import forms from './forms'

import { FormProvider } from './context/FormContext'

function App() {
  const [step, setStep] = useState(1)
  const [isCompleted, setIsCompleted] = useState(false)

  function goToStep(index) {
    setStep(index)
  }

  function complete() {
    setIsCompleted(true)
  }

  const totalSteps = forms.length

  return (
    <div className="flex flex-col desktop:flex-row desktop:bg-white desktop:mx-auto desktop:py-4 desktop:pl-4 desktop:rounded-main">
      <FormProvider>
        <Sidebar step={step} totalSteps={totalSteps} goToStep={goToStep} />
        <MainForm step={step} totalSteps={totalSteps} goToStep={goToStep} isCompleted={isCompleted} complete={complete}>
          {forms[step - 1].component}
        </MainForm>
      </FormProvider>
    </div>
  )
}

export default App
