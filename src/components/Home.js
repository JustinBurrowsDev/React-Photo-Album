import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/app.css"
import { getAlbums } from "../actions/data"

export default props => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums().then(data => setAlbums(data))
  }, [])

  return (
    <div>
      <h1>MY ALBUMS</h1>

      <div className="grid">
        {albums.map(album => (
          <Link key={"album-link-" + album.id} to={`/album/${album.id}`}>
            <img src={album.coverPhoto} alt="photoalbum" />
            <p className="title">{album.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
