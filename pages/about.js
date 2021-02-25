import Meta from '../components/Meta';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const about = () => {
    return (
        <div>
            <Meta title='about' />
            <h1>About page</h1>
            <Button variant="contained" color="primary" >
                Material UI button
            </Button>
            <Typography variant="h6" component="h1" gutterBottom>
                Material UI typography
            </Typography>
        </div>
    )
}

export default about
