import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useRef } from "react";
import AddForm from "./AddForm";

const steps = ["add user", "add adress", "add company"];

const user = {
    name: "",
    username: "",
    email: ",",
    address: null,
    phone: "",
    website: "",
    company: null
};

const AddUser = props => {

    const [activeStep, setActiveStep] = React.useState(0);

    const name = useRef();
    const username = useRef();
    const email = useRef();
    const phone = useRef();
    const website = useRef();

    const refs1 = [name, username, email, phone, website];
    const text1 = [
        "enter name",
        "enter username",
        "enter email",
        "phone number",
        "website"
    ];

    const street = useRef();
    const suite = useRef();
    const zipcode = useRef();
    const city = useRef();

    const refs2 = [street, suite, zipcode, city];
    const text2 = ["street", "suite", "zipcode", "city"];

    const CompanyName = useRef();
    const catchPhase = useRef();
    const bs = useRef();

    const refs3 = [CompanyName, catchPhase, bs];
    const text3 = ["enter company name", "enter catch phase", "enter bs"];

    const refs = [refs1, refs2, refs3];
    const text = [text1, text2, text3];

    const handleNext = index => {
        if (index == 0) {
            user.name = name.current.value;
            user.username = username.current.value;
            user.email = email.current.value;
            user.phone = phone.current.value;
            user.website = website.current.value;

            if (
                user.name.length > 2 &&
                user.username.length > 2 &&
                user.email.length > 2 &&
                user.phone.length > 2 &&
                user.website.length > 2
            ) {
                setActiveStep(prevActiveStep => prevActiveStep + 1);
            }
        } else if (index == 1) {
            const address = {
                street: street.current.value,
                suite: suite.current.value,
                city: city.current.value,
                zipcode: zipcode.current.value
            };
            user.address = address;
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        } else if (index == 2) {
            const company = {
                name: CompanyName.current.value,
                catchPhrase: catchPhase.current.value,
                bs: bs.current.value
            };
            user.company = company;
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        //console.log(user);
        props.onClose(user);
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 400 , padding: '4%'}}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">
                                        Last step
                                    </Typography>
                                ) : null
                            }
                        >
                            {step}
                        </StepLabel>
                        <StepContent>

                            <AddForm refs={refs[index]} text={text[index]} />

                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleNext(index)}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1
                                            ? "Finish"
                                            : "Continue"}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Done
                    </Button>
                </Paper>
            )}
        </Box>
    );
};
export default AddUser;
