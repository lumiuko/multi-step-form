import { useContext } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { StepContext } from '../context/StepContext'
import Footer from './Footer'
import ThankMessage from './ThankMessage'

function MainForm(props) {
  const { step } = useContext(StepContext)

  return (
    <main className="px-4 desktop:w-[450px] desktop:mx-[6.25rem] desktop:p-0 desktop:mt-6">
      <form
        className={`bg-white px-6 py-8 rounded-[10px] shadow-form -my-[4.625rem] text-denim mb-24 desktop:m-0 desktop:shadow-none desktop:p-0 desktop:flex desktop:flex-col desktop:min-h-[512px] desktop:mb-4 ${
          step.isCompleted ? 'justify-center' : 'desktop:justify-between'
        }`}
        autoComplete="off"
      >
        {!step.isCompleted ? (
          <SwitchTransition>
            <CSSTransition key={step.current} classNames="fade" timeout={400}>
              {props.children}
            </CSSTransition>
          </SwitchTransition>
        ) : (
          <ThankMessage />
        )}

        <Footer />
      </form>
    </main>
  )
}

export default MainForm
