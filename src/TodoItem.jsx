import moment from "moment";

const TodoItem = ( {todo: { value, urgency, date, isDone, id }, onToggle, onDelete } ) => {
const formattedDate = moment(date).format('YYYY/MM/DD hh:mm:ss');

    const handleDelete = () => onDelete(id);
    const handleToggle = () => onToggle(id);

    return (
        <div className='todo-item'>
<p>{value}</p>
<p>{urgency}</p>
<p>{formattedDate}</p>
<input type="checkbox" checked={isDone} onChange={handleToggle}/>
<button onClick={handleDelete}>x</button>
        </div>
    )
};

export default TodoItem;