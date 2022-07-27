import React from "react";
import TeamCard from "./TeamCard";
import members from "../../constants/Members";

export default function Wrapper() {
  return (
    <div>
      <div className="wrapper">
        {members.map((member, i) => (
          <TeamCard
            name={member.name}
            title={member.title}
            description={member.description}
            linkedin={member.linkedin}
            image={member.image}
            twitter={member.twitter}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
