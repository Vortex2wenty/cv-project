function Name(props) {
  return (
    <label>{props.label}
      <input onChange={props.onChange} value={props.value} type='text' id={props.id + 'Name'} placeholder={props.placeholder} required />
    </label>
  );
}

export default Name;