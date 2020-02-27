import axios from "axios"

export function getAlbums() {
  return new Promise((resolve, reject) => {
    axios
      .get("/albums")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}
export function getAlbum(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/albums/${id}?_embed=pictures`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export function getPicture(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/pictures/${id}?_expand=album`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export function getLinks(id) {
  return new Promise((resolve, reject) => {
    axios.get(`/pictures/${id}?_expand=album`).then(resp1 => {
      const albumId = resp1.data.album.id

      axios.get(`/pictures?albumId=${albumId}`).then(resp2 => {
        const pictures = resp2.data

        let left = 0
        let right = 0
        let length = pictures.length

        pictures.forEach((pic, i) => {
          if (pic.id == id) {
            if (i === pictures.length - 1) {
              right = pictures[i].id
              left = pictures[i - 1].id
            } else if (i === 0) {
              left = pictures[length - 1].id
              right = pictures[i + 1].id
            } else {
              left = pictures[i - 1].id
              right = pictures[i + 1].id
            }
          }
        })

        resolve({
          left: left,
          right: right
        })
      })
    })
  })
}

export function getLeft(id) {}
