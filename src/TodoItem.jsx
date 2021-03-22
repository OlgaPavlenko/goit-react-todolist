import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Card, CardActions, CardContent, IconButton, Checkbox, CardActionArea, Divider} from '@material-ui/core';

const useStyle = makeStyles({
todoItem: {
marginTop: 10,
backgroundColor: '#eeeeff',
    }
});
const TodoItem = ( {todo: { value, urgency, date, isDone, id }, onToggle, onDelete } ) => {
    const classes = useStyle();
const formattedDate = moment(date).format('YYYY/MM/DD hh:mm:ss');

    const handleDelete = () => onDelete(id);
    const handleToggle = () => onToggle(id);

    return (
    <Card className={classes.todoItem}>
        <CardActionArea>
            <CardContent>
                <p>{value}</p>
                <p>{urgency}</p>
                <p>{formattedDate}</p>
            </CardContent>
            <Divider />
            <CardActions>
                <Checkbox
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    checked={isDone} onChange={handleToggle}
                />
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleDelete}>
          <DeleteOutlineIcon />
        </IconButton>
            </CardActions>
        </CardActionArea>
    </Card>
    )
};

export default TodoItem;