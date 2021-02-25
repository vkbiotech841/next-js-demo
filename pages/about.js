import Meta from '../components/Meta';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const about = () => {
    return (
        <div>
            <Meta title='about' />
            <h1 className="myInlineCss">About page</h1>
            <Button variant="contained" color="primary" >
                Material UI button
            </Button>
            <Typography variant="h6" component="h1" gutterBottom>
                Material UI typography
            </Typography>

            <style jsx>
                {`
                    .myInlineCss{
                        color:blue;
                        background:lightgrey;
                        border-radius:5px;
                        padding:10px;
                    }
                `}
            </style>
        </div>
    )
}

export default about
