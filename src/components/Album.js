import React, { useEffect, useState } from "react"
import { getAlbum, getAlbums } from "../actions/data"
import { Link } from "react-router-dom"

export default props => {
  const [album, setAlbum] = useState({})
  const [pictures, setPictures] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbum(props.match.params.id).then(data => {
      setAlbum(data)
      setPictures(data.pictures)
    })

    function goBack(e) {
      e.preventDefault()
      props.history.push("/")
    }

    getAlbums().then(data => setAlbums(data))
  }, [props.match.params])

  return (
    <div class="container">
      <div>
        <h1>{album.name}</h1>
        <div className="main">
          <div className="albums">
            {albums.map(album => (
              <p key={"picture-link-" + album.id}>
                <Link to={`/album/${album.id}`}>{album.name}</Link>
              </p>
            ))}
          </div>
          <div className="grid">
            {pictures.map(picture => (
              <Link
                key={"picture-link-" + picture.id}
                to={`/picture/${picture.id}`}
              >
                <img src={picture.url} alt="pics" />
                <p className="title">{picture.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
