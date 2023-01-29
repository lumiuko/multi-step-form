import Addon from './Addon'
import addOns from '../data/add-ons'

function FormAddons() {
  const addonSelects = addOns.map((addon, index) => <Addon key={index} item={addon} />)

  return (
    <div className="flex flex-col">
      <h1 className="text-heading-mobile desktop:text-heading font-bold">Pick add-ons</h1>
      <p className="text-gray mt-2 mb-[0.875rem]">Add-ons help enhance your gaming experience.</p>
      {addonSelects}
    </div>
  )
}

export default FormAddons
