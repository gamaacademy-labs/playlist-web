import axios, { AxiosInstance } from "axios";

class APISdk {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333",
    });
  }

  async getOnePlaylist(title: string) {
    const { data } = await this.client.get('/playlists/' + title)

    return data;
  }

  async getAllPlaylists() {
    const { data } = await this.client.get('/playlists')

    return data;
  }

  /// Isso precisa de validação no backend => o que acontece se meu user ja tiver history
  async createStudentHistory(contentId: string, studentId: string) {
    const { data } = await this.client.post('/student-histories', {
      contentId,
      studentId
    })

    return data;
  }

  async createStudentPlaylistFavorite(playlistId: string, studentId: string) {
    console.log(playlistId, studentId)
    const { data } = await this.client.post('/student-playlist-favorite', {
      playlistId,
      studentId
    })

    return data;
  }
}

const apiSDK = new APISdk();
const gambiarra = {
  studentId: "cl80j7h910035092m4y1upc6s",
}

export { apiSDK, gambiarra };
