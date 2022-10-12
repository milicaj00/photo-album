import { inject } from "react-ioc";
import { makeAutoObservable, runInAction } from "mobx";
import { HttpClientService } from "../HttpClientService";

export class PhotoDataStore {
    httpClient = new HttpClientService();

    state = {
        data: [],
        error: undefined,
        loading: false
    };

    constructor() {
        makeAutoObservable(this);
        //this.readAll()
    }

    get photos() {
        return this.state.data;
    }

    get loading(){
        return this.state.loading
    }

    async readPhotos(albumId) {
        this.state.loading = true;
        try {
            const data = await this.httpClient.get("/photos");
          
            runInAction(() => {
                this.state.data = data.filter(el => el.albumId == albumId);
                this.state.error = undefined;
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
