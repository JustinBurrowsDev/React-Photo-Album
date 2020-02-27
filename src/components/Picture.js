import React, { useEffect, useState } from "react"
import { getPicture, getLinks } from "../actions/data"
import { Link } from "react-router-dom"

export default props => {
  const [photo, setPhoto] = useState({})
  const [leftLink, setLeft] = useState("")
  const [rightLink, setRight] = useState("")

  useEffect(() => {
    getPicture(props.match.params.id).then(data => {
      setPhoto(data)
    })

    getLinks(props.match.params.id).then(links => {
      setLeft(links.left)
      setRight(links.right)
    })

    // setLeft(props.match.params.id)
    // setRight(props.match.params.id)
  }, [props.match.params.id])

  return (
    <div className="photo">
      <h1>{photo.name}</h1>
      <div className="photoAndLinks">
        <Link to={`/picture/${leftLink}`}>&laquo;</Link>
        <img src={photo.url} />
        <Link to={`/picture/${rightLink}`}>&raquo;</Link>
      </div>
    </div>
  )
}
