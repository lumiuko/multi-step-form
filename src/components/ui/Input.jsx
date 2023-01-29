export default function Input(props) {
  return (
    <label className="flex flex-col">
      <div className="mb-[3px] desktop:mb-2">{props.label}</div>
      <input
        type="text"
        className="py-3 px-4 font-medium rounded-small desktop:rounded-large border-border border-[1px] focus:outline-purple"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  )
}
