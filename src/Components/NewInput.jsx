
function NewInput({
    name,
    grade,
    value,
    onChange,
    placeholder
}) {

    return(

       <input 
       type="text" 
       className="input" 
       name = {name}
       grade = {grade}
       value= {value}
       onChange={onChange}
       placeholder={placeholder}
       />
    )
}

export default NewInput;