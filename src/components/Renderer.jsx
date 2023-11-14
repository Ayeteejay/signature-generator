export default function SignatureRenderer({ data }) {
  const createIndex = (character, counter) => {
    return `${character}${counter}`;
  };
  const upperCaseText = (text) => {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  };
  let textArray = data.text !== undefined ? data.text.split("") : "";
  const fontSize = data.font_size === "regular" ? 17 : 13;
  const letterCharacterRegex = /[a-zA-Z]/;
  const numberCharacterRegex = /[0-9]/;
  const specialCharacterRegex = /[!@#$%^&[\]{}|/:;=+-.]/;
  const unsupportedCharacterRegex = /[*()`,"\\]/;
  return (
    <div style={{ display: `${data.text.length > 0 ? "flex" : "none"}` }}>
      <img
        src={`/images/${data.color}/91.png`}
        alt="Opening bracket"
        style={{
          height: `${data.size}`,
          display: data.brackets ? "block" : "none",
        }}
        height={17}
      />
      {textArray.map((character, index) => {
        if (character === " " || unsupportedCharacterRegex.test(character)) {
          return (
            <span
              style={{
                width: `${character === " " ? "3px" : "0px"}`,
                height: `${data.size}`,
              }}
              key={createIndex("whitespace", index)}
            >
              &nbsp;
            </span>
          );
        } else {
          let formattedCharacter;
          if (letterCharacterRegex.test(character)) {
            formattedCharacter = character.toLowerCase();
          } else if (numberCharacterRegex.test(character)) {
            formattedCharacter = `/numbers/${character}`;
          } else if (specialCharacterRegex.test(character)) {
            formattedCharacter = character.charCodeAt(0);
          }
          return (
            <img
              key={createIndex(character, index)}
              alt={`${upperCaseText(
                data.color
              )} colored character ${character.toUpperCase()}`}
              style={{ height: `${data.size}` }}
              src={`/images/${data.color}/${formattedCharacter}.png`}
              height={fontSize}
            />
          );
        }
      })}
      <img
        src={`/images/${data.color}/93.png`}
        alt="Closing bracket"
        style={{
          height: `${data.size}`,
          display: data.brackets ? "block" : "none",
        }}
        height={17}
      />
    </div>
  );
}
