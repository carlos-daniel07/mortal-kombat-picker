import { charactersData } from "../const/charactersData";
import { $ } from "./domUtils";
import selectCharacter from "./selectCharacter";

interface PropsAnimation {
  img:Element;
  text:Element;
  title:Element;
  action: 'add' | 'remove'
}


const updateAnimation = ({img, text, title, action}:PropsAnimation) => {
  img.classList[action]("animated-character-img");
  text.classList[action]("animated-character-text");
  title.classList[action]("animated-character-title");

}

export default function handleCharacterChange (el:Element) {
  const selectCharacterId = el.getAttribute("data-character");
        if (!selectCharacterId) {
          throw new Error("El pernaje no ah sido seleccionado");
        }
        const img = $("#mainCharacter")?.querySelector("img");
        const title = $("#mainCharacterInfo")?.querySelector("h3");
        const text =
          $("#mainCharacterInfo")?.querySelector("p");

        if (
          !img ||
          !title ||
          !text
        )
          return;

        updateAnimation({img, text, title,action: 'remove'})
        
        const findCharacter = charactersData.find(
          (character) => character.id === Number(selectCharacterId)
        );
        if (!findCharacter) return;
        
        setTimeout(() => {
          img.src = selectCharacter(
            findCharacter.name.toLowerCase()
          );
          title.textContent = findCharacter.name;
          text.textContent = findCharacter.description;
          updateAnimation({img, text, title,action: 'add'})
        }, 100);
}
