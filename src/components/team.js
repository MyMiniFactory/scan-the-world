import React from "react"
import Img from "gatsby-image"
import "./scss/team.scss"

function Member(props) {
  return (
    <div className="member">
      <Img className="member-image" fixed={props.childImageSharp.fixed} alt="profile"/>
      <p>{props.name}</p>
      <p>{props.role}</p>
      <a href={`mailto:${props.mail}`} className="stw-mail">{props.mail}</a>
    </div>
  )
}

export default ({ members }) => (
  <div className="members">
    {members.map((member, key) => (
      <Member key={key}
        childImageSharp={member.memberImage.childImageSharp}
        name={member.title}
        role={member.position}
        mail={member.mail}
      />
    ))}
  </div>
)
