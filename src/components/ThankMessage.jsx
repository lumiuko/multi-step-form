import thankIcon from '../assets/images/icon-thank-you.svg'

export default function ThankMessage() {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={thankIcon} alt="Icon 'thank you'" />
      <h2 className="text-[1.5rem] desktop:text-heading font-bold mt-6 desktop:mt-8 mb-2 desktop:mb-[0.875rem]">
        Thank you!
      </h2>
      <p className="text-gray">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}
