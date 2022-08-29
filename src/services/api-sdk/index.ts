import axios, { AxiosInstance } from "axios";

class APISdk {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.API_BASE_URL || "http://localhost:3333/",
    });
  }

  async getPlaylist(title: string) {
    const { data } = await this.client.get('/playlists/' + title)

    return data;
  }
}

const apiSDK = new APISdk();

export { apiSDK };
