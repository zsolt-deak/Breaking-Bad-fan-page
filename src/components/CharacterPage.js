import React, { useEffect, useState } from "react";
import { PageHeader } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Spin } from "antd";

// appearance: [1, 2, 3, 4, 5]
// better_call_saul_appearance: []
// birthday: "09-07-1958"
// category: "Breaking Bad"
// char_id: 1
// img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
// name: "Walter White"
// nickname: "Heisenberg"
// occupation: ["High School Chemistry Teacher", "Meth King Pin"]
// portrayed: "Bryan Cranston"
// status: "Presumed dead"

export default function Character(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((response) => response.json())
      .then((apiResponse) => {
        setIsLoading(false);
        setCharacterData(apiResponse[0]);
      });
  }, [id]);

  return (
    <div id="characterDetailMain">
      <PageHeader
        className="site-page-header"
        onBack={() => navigate(-1)}
        title={characterData.name}
      />
      {isLoading ? (
        <div id="spinnerContainer">
          <Spin tip="Loading character data..." size="large" />
        </div>
      ) : (
        <div id="charaterDetailContainer">
          <img alt="" src={characterData.img}></img>
          <div>
            <label>Name</label>
            <p>{characterData.name}</p>
          </div>
          <div>
            <label>Birthday</label>
            <p>{characterData.birthday}</p>
          </div>
          <div>
            <label>Nickname</label>
            <p>{characterData.nickname}</p>
          </div>
          <div>
            <label>Occupation</label>
            <p>{String(characterData.occupation).replaceAll(",", ", ")}</p>
          </div>
          <div>
            <label>Actor</label>
            <p>{characterData.portrayed}</p>
          </div>
          <div>
            <label>Status</label>
            <p>{characterData.status}</p>
          </div>
        </div>
      )}
    </div>
  );
}
