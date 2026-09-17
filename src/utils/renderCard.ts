export default function renderCard  (id: number, image: string, name: string)  {
    const componentCharacter = `
      <div
        data-character=${id}
        style="background-image: url(images/background.jpg);"
        class="hover:scale-[1.05] transition-transform relative w-[80px] sm:w-[110px] md:w-[150px] rounded bg-cover bg-center bg-no-repeat flex justify-center items-center"
      >
        <div id=${id} class="h-24 sm:h-36 md:h-50">
          <img class="w-full h-full object-contain" src="${image}" alt="${name}" />
        </div>

        <p class="absolute bottom-0 left-1 font-medium text-white text-[10px] sm:text-xs md:text-sm">${name}</p>
      </div>
      `;
    return componentCharacter;
  };
