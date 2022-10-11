import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { TextField } from "@mui/material";


const EditUser = (props) => {

    const { user , onClose } = props

    const [street, setStreet] = useState(user.address.street)
    const [suite, setSuite] = useState(user.address.suite)
    const [zipcode, setZipcode] = useState(user.address.zipcode)
    const [city, setCity] = useState(user.address.city)

    const [cName, setCName] = useState(user.company.name)
    const [catchPhase, setCP] = useState(user.company.catchPhrase)
    const [bs, setBS] = useState(user.company.bs)

    const edit = ['street', 'suite', 'zipcode', 'city']
    const editValue = [street, suite, zipcode, city]
    const setEdit = [setStreet, setSuite, setZipcode, setCity]

    const editCompany = ['name', 'catch phrase', 'bs']
    const editCValue = [cName, catchPhase, bs]
    const setEditCompany = [setCName, setCP, setBS]

    const editUser = () => {
        user.address.street = street
        user.address.suite = suite
        user.address.zipcode = zipcode
        user.address.city = city

        user.company.name = cName
        user.company.catchPhrase = catchPhase
        user.company.bs = bs

        onClose()
    }

    return (<div className="EditUser">
        <Box sx = {{padding:'3%', display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h6">Address</Typography>
            {edit.map((el, i) => (
                <TextField
                sx={{margin:'1%'}}
                    key = {el}
                    label={el}
                    type="text"
                    color="primary"
                    size="small"
                    placeholder={el}
                    value = {editValue[i]}
                    onChange = { (ev) => setEdit[i](ev.target.value)}
                />
            ))}
        </Box>

        <Box sx = {{padding:'3%', margin: '3%'}}>
            <Typography variant="h6">Company</Typography>
            {editCompany.map((el, i) => (
                <TextField
                sx={{margin:'1%'}}
                    key = {el}
                    label={el}
                    multiline = {true}
                    type="text"
                    color="primary"
                    size="small"
                    placeholder={el}
                    value = {editCValue[i]}
                    onChange = { (ev) =>{ setEditCompany[i](ev.target.value)}}
                />
            ))}
        </Box>

        <Button sx = {{width:'90%', margin: '1%'}} onClick = {editUser}>OK</Button>

    </div>)
}

export default EditUser