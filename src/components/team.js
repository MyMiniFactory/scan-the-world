import React from 'react'
import "./team.scss"

function Member(props) {
  return (
    <div className="member">
      <img src={props.profilePicture} alt="profile"/>
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
        profilePicture={member.memberImage.childImageSharp.original.src}
        name={member.title}
        role={member.position}
        mail={member.mail}
      />
    ))}
  </div>
)
