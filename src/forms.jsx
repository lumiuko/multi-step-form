import FormPersonal from './components/FormPersonal'
import FormPlan from './components/FormPlan'
import FormAddons from './components/FormAddons'
import FormFinish from './components/FormFinish'

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
    component: <FormFinish />,
    text: 'Summary'
  }
]

export default forms
