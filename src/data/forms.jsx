import FormPersonal from '../components/forms/FormPersonal'
import FormPlan from '../components/forms/FormPlan'
import FormAddons from '../components/forms/FormAddons'
import FormSummary from '../components/forms/FormSummary'

const forms = [
  {
    component: <FormPersonal />,
    text: 'Your info'
  },
  {
    component: <FormPlan />,
    text: 'Select plan'
  },
  {
    component: <FormAddons />,
    text: 'Add-ons'
  },
  {
    component: <FormSummary />,
    text: 'Summary'
  }
]

export default forms
