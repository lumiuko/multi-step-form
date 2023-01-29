import Addon from '../ui/Addon'
import addOns from '../../data/add-ons'
import FormHeader from '../ui/FormHeader'

export default function FormAddons() {
  const addonSelects = addOns.map((addon, index) => <Addon key={index} item={addon} />)

  return (
    <div className="flex flex-col">
      <FormHeader title="Pick add-ons" text="Add-ons help enhance your gaming experience." />
      {addonSelects}
    </div>
  )
}
