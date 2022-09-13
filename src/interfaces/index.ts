const playlists = {
  "id": "cl80i3rbo00075z2mtm34102x",
  "title": "test",
  "thumbnail": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  "description": "test",
  "duration": 1000,
  "level": "MEDIUM",
  "createdAt": "2022-09-13T18:01:53.172Z",
  "updatedAt": "2022-09-13T18:01:53.172Z",
  "contents": [
    {
      "id": "cl80i3psz00005z2m5hrtktkz",
      "title": "Conteudo legal",
      "thumbnail": "https://st.depositphotos.com/1146092/4811/i/950/depositphotos_48115181-stock-photo-sleepyhead-selfie-dog.jpg",
      "linkVideo": "https://www.youtube.com/watch?v=Rria3r9nZsA",
      "createdAt": "2022-09-13T18:01:51.203Z",
      "updatedAt": "2022-09-13T18:01:51.203Z",
      "studentHistory": []
    }
  ],
  "studentHistory": [
    {
      "id": "cl80j8mb30125092mn3ag0n2c",
      "contentId": "cl80i3psz00005z2m5hrtktkz",
      "studentId": "cl80j7h910035092m4y1upc6s",
      "isVideoFinished": false,
      "createdAt": "2022-09-13T18:33:39.567Z",
      "updatedAt": "2022-09-13T18:33:39.567Z"
    }
  ]
}

const content =
  {
    "id": "cl80i3psz00005z2m5hrtktkz",
    "title": "Conteudo legal",
    "thumbnail": "https://st.depositphotos.com/1146092/4811/i/950/depositphotos_48115181-stock-photo-sleepyhead-selfie-dog.jpg",
    "linkVideo": "https://www.youtube.com/watch?v=Rria3r9nZsA",
    "createdAt": "2022-09-13T18:01:51.203Z",
    "updatedAt": "2022-09-13T18:01:51.203Z",
    "studentHistory": [
      {
        "id": "cl80j8mb30125092mn3ag0n2c",
        "contentId": "cl80i3psz00005z2m5hrtktkz",
        "studentId": "cl80j7h910035092m4y1upc6s",
        "isVideoFinished": false,
        "createdAt": "2022-09-13T18:33:39.567Z",
        "updatedAt": "2022-09-13T18:33:39.567Z"
      }
    ]
  }


export type PlaylistType = typeof playlists

export type ContentType = typeof content

