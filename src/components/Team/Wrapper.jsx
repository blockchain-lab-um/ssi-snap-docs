import React from "react";
import TeamCard from "./TeamCard";
import Members from "./Members";

export default function Wrapper() {
  return (
    <div className="wrapper">
      {Members.members.map((member, i) => (
        <TeamCard
          name={member.name}
          title={member.title}
          description={member.description}
          linkedin={member.linkedin}
          image={member.image}
          twitter={member.twitter}
        />
      ))}
    </div>
  );
}
