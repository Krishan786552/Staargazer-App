import React, { useCallback, useRef, useState } from "react";
import { useTopics } from "../hooks/useTopics.js";
import { Item } from "./ListTopics";
import { ButtonContainer, InputContainer, TextBoxContainer } from "../styles/commonComponents.js";

export const SearchTopic = () => {
  const [search, setSearch] = useState("");
  const { topic } = useTopics(search);
  const searchInputRef = useRef(null);

  const handleClickSearch = useCallback(() => {
    setSearch(searchInputRef.current.value);
  }, []);

  return (
    <>
      <InputContainer>
        <TextBoxContainer
          type="text"
          defaultValue=""
          ref={searchInputRef}
          placeholder={"Enter a topic"}
        />
        <ButtonContainer onClick={handleClickSearch}>
          Search
        </ButtonContainer>
      </InputContainer>
      <InputContainer>
        <div>
          {search && topic.length > 0 ? (
            <p>
              {`Topics related to `}
              <b>{search}</b>
            </p>
          ) : (
            <p>
              <b>{`No results`}</b>
            </p>
          )}
          {topic &&
            topic?.map((item) => (
              <Item key={item.id} item={item} setSearch={setSearch} />
            ))}
        </div>
      </InputContainer>
    </>
  );
};
