const API = "https://api.themoviedb.org/3";

export function get (path) {
  return  fetch(API + path, {
      headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRmNTNlZmNiODQ4N2ZmZjM3ZjBmODU5Yjc0OWMyOSIsInN1YiI6IjYxNzAzYTkxZGY4NmE4MDA5MzlkOTYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vbfY_bXaHXlkoL9UBIoLsfuCA1Rxs675x6M-LkKdtDk",
      "Content-Type": "application/json;charset=utf-8"
      },
    }).then(result => result.json())
}
