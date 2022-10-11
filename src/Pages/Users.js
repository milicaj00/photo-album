import axios from "axios";
import { useEffect, useState } from "react";
import UserTable from "../components/Table";
import Button from "@mui/material/Button";
import AddUser from "../components/AddUser";
import { Dialog } from "@mui/material";
import EditUser from "../components/EditUser";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Users = () => {
    const [allUsers, setUsers] = useState([]);
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [userForEdit, setUserForEdit] = useState(null);

    useEffect(() => {
        const get = async () => {
            await axios.get(BASE_URL + "/users").then(res => {
                setUsers(res.data);
            });
        };
        get();
    }, []);

    const onEdit = user => {
        setUserForEdit(user);
        setEdit(true);
    };
    const onDelete = id => {
        setUsers(allUsers.filter(user => user.id != id));
    };
    const onAdd = () => {
        setAdd(true);
    };

    const addUser = user => {
        user.id = allUsers.length;
        setUsers(allUsers => [...allUsers, user]);
        setAdd(false);
    };

    const head = ["Name", "Username", "Email", "Phone", "Website"];
    const rowData = ["name", "username", "email", "phone", "website"];
    const hiddenRowData = ["name", "catchPhrase", "bs"];
    const hiddenRowHead = ["Comapany name", "Catch phrase", "bs"];
    const hiddenRowData2 = ["street", "suite", "zipcode", "city"];

    return (
        <div className="Users">
            <Button onClick={onAdd}>Add new user</Button>
            {/* {add && <AddUser onClose={addUser} />} */}

            <Dialog
                open={add}
                onClose={() => {
                    setAdd(false);
                }}
            >
                <AddUser onClose={addUser} />
            </Dialog>

            <Dialog
                open={edit}
                onClose={() => {
                    setEdit(false);
                }}
            >
                <EditUser
                    user={userForEdit}
                    onClose={() => {
                        setEdit(false);
                    }}
                />
            </Dialog>

            <UserTable
                rows={allUsers}
                head={head}
                rowData={rowData}
                hiddenRowData={hiddenRowData}
                hiddenRowHead={hiddenRowHead}
                hiddenRowHead2={hiddenRowData2}
                hiddenRowData2={hiddenRowData2}
                onEdit = {onEdit}
                onDelete={onDelete}
            />
        </div>
    );
};
export default Users;
