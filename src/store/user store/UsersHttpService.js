import { HttpClientService } from "../HttpClientService";

export class UsersHttpService {
    httpClient = new HttpClientService();

    async getUsers() {
        return this.httpClient.get("/users");
    }
}
