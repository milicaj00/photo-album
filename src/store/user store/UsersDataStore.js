import { inject } from "react-ioc";
import { makeAutoObservable, runInAction } from "mobx";
import { UsersHttpService } from "./UsersHttpService";

export class UsersDataStore {
    usersHttpService = inject(this, UsersHttpService);

    state = {
        data: [],
        loading: false
    };

    constructor() {
        makeAutoObservable(this, undefined, { autoBind: true });
        this.read(); // fetch data once the UsersDataStore has been created
    }

    get users() {
        return this.state.data;
    }

    get loading() {
        return this.state.loading;
    }

    get error() {
        return this.state.error;
    }

    refresh() {
        this.read();
    }

    findUserById(userId) {
        return this.users?.find(user => user.id === userId) || null;
    }

    async read() {
        this.state.loading = true;
        try {
            const response = await this.usersHttpService.getUsers();
            runInAction(() => {
                //console.log(response);
                this.state.data = response;
                this.state.error = undefined;
                this.state.loading = false;
                //  console.log(this.state)
            });
        } catch (e) {
            runInAction(() => {
                this.state.error = "Connection error";
                this.state.loading = false;
            });
        }
    }

    editUser(user){

    }
    deleteUser(id){
        this.state.data = this.users.filter(user => user.id != id)
    }
    addUser(user){
        user.id = Math.random() * 100 + 20;
        this.state.data.push(user)
    }
}
