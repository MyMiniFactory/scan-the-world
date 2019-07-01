import React from 'react'
import "./team.css"

function Member(props) {
  return (
    <div className="member">
      <img src={props.profilePicture} alt="profile"/>
      <p>{props.name}</p>
      <p>{props.role}</p>
      <blockquote>{props.quote}</blockquote>
    </div>
  )
}

export default ({ members }) => (
  <div className="members">
    {members.map((member, key) => (
      <Member key={key}
        profilePicture={member.src}
        name={member.title}
        role={member.position}
        quote={member.quote}
      />)
    )}
  </div>
)
