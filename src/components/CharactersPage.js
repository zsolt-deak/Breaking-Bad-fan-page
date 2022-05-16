import CharacterCard from "./CharacterCard";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;

function CharactersPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((apiResponse) => {
        setData(apiResponse);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const lowerCaseSearchedText = searchedText.toLowerCase();
    setFilteredData(data.filter((x) =>x.name.toLowerCase().includes(lowerCaseSearchedText) || x.nickname.toLowerCase().includes(lowerCaseSearchedText)));
  }, [data, searchedText]);

  const onSearch = (value) => {
    setSearchedText(value);
  };

  return (
    <div className="Home">
      <h1 id="title" style={{ textAlign: "center" }}>
        Breaking Bad characters
      </h1>

      {isLoading ? (
        <div id="spinnerContainer">
          <Spin tip="Loading characters..." size="large" />
        </div>
      ) : (
        <div>
          <div id="searchContainer">
            <Search
              autoFocus
              placeholder="Input character anme or nackname"
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </div>

          <section>
            {filteredData.map((character) => {
              return (
                <CharacterCard
                  characterData={character}
                  key={character.char_id}
                />
              );
            })}
          </section>
        </div>
      )}
    </div>
  );
}

export default CharactersPage;
