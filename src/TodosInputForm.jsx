import { useState } from "react";
import { createUseStyles } from "react-jss";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = createUseStyles({
todosInputForm: {
    display: 'flex',
    flexDirection: 'column',
},    
form: {
    display: 'flex',
    flexDirection: 'column',
},
buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
},
todoUrgency: {
    marginTop: '10px',
},
});

const TodosInputForm = ({ onSubmit }) => {
const classes = useStyles();
const [showForm, setShowForm] = useState(false);
const [value, setValue] = useState('');
const [urgency, setUrgency] = useState('low');

const toggleForm = () => setShowForm(prevValue => !prevValue);
const handleSubmit = (e) => {
e.preventDefault();

if (!value) {return alert('enter the text ');};

const newTodo = {
id: Date.now(),
value,
urgency,
date: Date.now(),
isDone: false,
};

onSubmit(newTodo);
setValue('');
setUrgency('low');
setShowForm(false);
};
const handleUrgencyChange = (e) => setUrgency(e.target.value);
const handleInputChange = (e) => setValue(e.target.value);

    return (
        <div className={classes.todosInputForm}>
{showForm ? (
<form className={classes.form} onSubmit={handleSubmit}>
    <TextField className={classes.todoName} label="Enter todo" value={value} onChange={handleInputChange}/>
        <div className={classes.todoUrgency}>
            <span>urgency:</span>
                <label>
                    <input type="radio" value='low' checked={urgency === 'low'} onChange={handleUrgencyChange}/>
                    <span>low</span>
                </label>
                <label>
                    <input type="radio" value='medium' checked={urgency === 'medium'} onChange={handleUrgencyChange}/>
                    <span>medium</span>
                </label>
                <label>
                    <input type="radio" value='high' checked={urgency === 'high'} onChange={handleUrgencyChange}/>
                    <span>high</span>
                </label>
        </div>
            <div className={classes.buttons}>
                <Button variant="outlined" color="primary" onClick={toggleForm}>
                   Cancel
                </Button>
                <Button type='submit' variant="outlined" color="primary" >
                   Add todo
                </Button>
            </div>
            </form>) : (<Button variant="outlined" color="primary" onClick={toggleForm}>
+ Add todo</Button>)}
        </div>
    )
};

export default TodosInputForm;

