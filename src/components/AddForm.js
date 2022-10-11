import { Button, TextField, Box } from "@mui/material";
import { useRef } from "react";
import '../style/Home.css'

const AddForm = props => {
    const { refs, text } = props;

    return (
        <div className="AddForm">
            <Box type="form">
                {refs.map ((ref, i) => (
                    <TextField
                    sx={{margin:'1%'}}
                    // className="formInput"
                        key = {i}
                        inputRef={ref}
                        label={text[i]}
                        type="text"
                        color="primary"
                        size="small"
                        placeholder={text[i]}
                    />
                ))}
            </Box>
        </div>
    );
};

export default AddForm;
