import { makeAutoObservable, runInAction } from "mobx";
import { HttpClientService } from "../HttpClientService";

export class AlbumDataStore {
    httpClient = new HttpClientService();

    state = {
        data: [],
        error: undefined,
        loading: false
    };

    constructor() {
        makeAutoObservable(this);
        this.readAll();
    }

    get albums() {
        return this.state.data;
    }
    get loading() {
        return this.state.loading;
    }

    async readAll() {
        this.state.loading = true;

        try {
            const data = await this.httpClient.get("/albums");
            runInAction(() => {
                this.state.data = data;
                this.state.error = null;
                this.state.loading = false;
            });
        } catch (ex) {
            runInAction(() => {
                this.state.error = "Connection error";
                this.state.loading = false;
            });
        }
    }
}
