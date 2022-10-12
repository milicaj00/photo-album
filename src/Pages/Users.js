import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import UserTable from "../components/Table";
import Button from "@mui/material/Button";
import AddUser from "../components/AddUser";
import { Dialog } from "@mui/material";
import EditUser from "../components/EditUser";
import { provider, useInstance } from "react-ioc";
import { observer } from "mobx-react-lite";
import { UsersDataStore } from "../store/user store/UsersDataStore";
import { UsersHttpService } from "../store/user store/UsersHttpService";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Users = provider(
    UsersDataStore,
    UsersHttpService
)(
    observer(() => {
        
        const [add, setAdd] = useState(false);
        const [edit, setEdit] = useState(false);
        const [userForEdit, setUserForEdit] = useState(null);

        const store = useInstance(UsersDataStore);

        const onEdit = user => {
            setUserForEdit(user);
            setEdit(true);
        };
        const onDelete = id => {
            store.deleteUser(id);
        };
        const onAdd = () => {
            setAdd(true);
        };

        const addUser = user => {
            store.addUser(user);
            setAdd(false);
        };

        const head = ["Name", "Username", "Email", "Phone", "Website"];
        const rowData = ["name", "username", "email", "phone", "website"];
        const hiddenRowData = ["name", "catchPhrase", "bs"];
        const hiddenRowHead = ["Comapany name", "Catch phrase", "bs"];
        const hiddenRowData2 = ["street", "suite", "zipcode", "city"];

        if (store.loading) {
            return <div>loading...</div>;
        }

        return (
            <div className="Users">
                <Button onClick={onAdd}>Add new user</Button>

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
                    rows={store.users}
                    head={head}
                    rowData={rowData}
                    hiddenRowData={hiddenRowData}
                    hiddenRowHead={hiddenRowHead}
                    hiddenRowHead2={hiddenRowData2}
                    hiddenRowData2={hiddenRowData2}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </div>
        );
    })
);
export default Users;
