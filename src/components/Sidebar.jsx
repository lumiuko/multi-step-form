import forms from '../forms'

function Button(props) {
  const additionalClasses = props.selected ? 'bg-sky-blue border-sky-blue text-denim' : ''
  return (
    <div className="flex items-center">
      <button
        className={`border-2 w-[33px] h-[33px] rounded-full ${additionalClasses} transition-all`}
        onClick={props.onClick}
      >
        {props.value}
      </button>
      <div className="hidden uppercase desktop:block desktop:ml-4">
        <div className="text-body-s text-light-blue font-normal">Step {props.value}</div>
        <div>{props.text}</div>
      </div>
    </div>
  )
}

function Sidebar(props) {
  const buttons = []

  for (let i = 1; i <= props.totalSteps; i++) {
    buttons.push(
      <Button
        key={i}
        value={i}
        selected={props.step === i}
        text={forms[i - 1].text}
        onClick={() => props.goToStep(i)}
      />
    )
  }

  return (
    <aside className="bg-purple flex justify-center pt-8 pb-[6.75rem] text-white text-[0.875rem] gap-4 font-bold bg-mobile-sidebar bg-bottom bg-no-repeat bg-cover desktop:w-[274px] desktop:flex-col desktop:justify-start desktop:pt-10 px-6 desktop:rounded-sidebar desktop:bg-desktop-sidebar desktop:gap-8">
      {buttons}
    </aside>
  )
}

export default Sidebar
