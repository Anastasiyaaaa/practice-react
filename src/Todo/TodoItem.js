import React, {useContext} from 'react'; //TODO useContext
import PropTypes from 'prop-types';
import Context from '../Context.js'


const styles ={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input:{
        marginRight: '1rem'
    }
};

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context); //TODO
    const {toggleTodoByContext} = useContext(Context);
    const classes = [];
    if( todo.completed){
        classes.push('done')
    }
    return(
            <li style={styles.li}>
                <span className={classes.join(' ')}>
                    <input style={styles.input} type="checkbox" checked={todo.completed} onChange={ () => toggleTodoByContext(todo.id)}/>
                    <strong>{++index}</strong> &nbsp; {todo.title}
                </span>
                <button className='rm' onClick={() => {removeTodo(todo.id)}}> &times; </button>
            </li>
    )
}
TodoItem.propTypes = {
    todo: PropTypes.object,// строка
    index: PropTypes.number,//index - число
    onChange: PropTypes.func.isRequired
};
export default TodoItem