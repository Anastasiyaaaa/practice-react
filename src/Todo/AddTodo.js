import React, {useState} from 'react';
import PropTypes from 'prop-types'


//создаём хукб который возвращает ключи, которые нужеы для инпут валюе
function useInputVaue( defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return{
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}) {
    // const [value, setValue] = useState('');
    const input = useInputVaue('');

    
    function submitHandler(e) {
        e.preventDefault();
        if (input.value().trim()){
            onCreate(input.value());
            input.clear();
            // setValue('')
        }
    }
    return(
        <form onSubmit={submitHandler}>
            {/*<input value={value} onChange={event => setValue(event.target.value)}/>*/}
            <input {...input.bind}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddTodo