import { makeAutoObservable, runInAction } from "mobx";
import { HttpClientService } from "../HttpClientService";

export class PostDataStore {
    httpClient = new HttpClientService();

    state = {
        data: [],
        error: null,
        loading: false,
        singlePost : null
    };


    constructor() {
        makeAutoObservable(this);
        this.readAll();
    }

    get posts() {
        return this.state.data;
    }

    get loading() {
        return this.state.loading;
    }

    get post() {
        return this.state.singlePost;
    }

    async findById(id) {
        this.state.loading = true;

        try {
            const data = await this.httpClient.get("/posts/" + id);
            runInAction(() => {
                console.log(data);
                this.state.singlePost = data;
                this.state.error = null;
                this.state.loading = false;
            });
        } catch (ex) {
            runInAction(() => {
                this.state.error = null;
                this.state.loading = false;
            });
        }
    }

    async readAll() {
        this.state.loading = true;

        try {
            const data = await this.httpClient.get("/posts");
            runInAction(() => {
                this.state.data = data;
                this.state.error = null;
                this.state.loading = false;
            });
        } catch (ex) {
            runInAction(() => {
                this.state.error = null;
                this.state.loading = false;
            });
        }
    }
}
