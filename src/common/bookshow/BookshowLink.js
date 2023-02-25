import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';


const BookshowLink = (props) => {
   
    return (
        <Fragment>
            <Link to={"/bookshow/" + props.id}>
                <Button variant="contained" color="primary" className="bookshow-button">
                    BOOK SHOW
                </Button>
            </Link>
        </Fragment>
        
    )
}

export default BookshowLink;