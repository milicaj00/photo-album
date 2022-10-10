import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Typography , ListItemText, ListItemButton} from "@mui/material";
import { useNavigate } from "react-router";
import '../style/Album.css'
const BASE_URL = "https://jsonplaceholder.typicode.com";

const Albums = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASE_URL + "/albums").then(res => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);

    return (
        <div className="Albums">
            {data.map(al => (
                <div key={al.id}>
                    <ListItemButton
                        component="a"
                        onClick={() =>
                            navigate(`/photos/${al.id}`, { state: al.id })
                        }
                    >
                        <ListItemText primary={al.title} />
                        
                    </ListItemButton>
                </div>
            ))}
        </div>
    );
};

export default Albums;
