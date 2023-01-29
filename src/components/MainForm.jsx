import Footer from './Footer'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import thankIcon from '../assets/images/icon-thank-you.svg'

function MainForm(props) {
  return (
    <main className="px-4 desktop:w-[450px] desktop:mx-[6.25rem] desktop:p-0 desktop:mt-6">
      <form
        className={`bg-white px-6 py-8 rounded-[10px] shadow-form -my-[4.625rem] text-denim mb-24 desktop:m-0 desktop:shadow-none desktop:p-0 desktop:flex desktop:flex-col desktop:min-h-[512px] desktop:mb-4 ${
          props.isCompleted ? 'justify-center' : 'desktop:justify-between'
        }`}
        autoComplete="off"
      >
        {!props.isCompleted ? (
          <SwitchTransition>
            <CSSTransition key={props.step} classNames="fade" timeout={400}>
              {props.children}
            </CSSTransition>
          </SwitchTransition>
        ) : (
          <div className="flex flex-col items-center text-center">
            <img src={thankIcon} alt="Icon 'thank you'" />
            <h2 className="text-[1.5rem] desktop:text-heading font-bold mt-6 desktop:mt-8 mb-2 desktop:mb-[0.875rem]">
              Thank you!
            </h2>
            <p className="text-gray">
              Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
              support, please feel free to email us at support@loremgaming.com.
            </p>
          </div>
        )}

        <Footer
          step={props.step}
          totalSteps={props.totalSteps}
          goToStep={props.goToStep}
          isCompleted={props.isCompleted}
          complete={props.complete}
        />
      </form>
    </main>
  )
}

export default MainForm
