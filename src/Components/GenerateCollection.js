

export function generateCollection (numberOfPalettes)  {
    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return [r, g, b];
    };
  
    const fetchColorPalette = () => {
      const url = "http://colormind.io/api/";
      const data = {
        model: "default",
        input: [getRandomColor(), getRandomColor(), getRandomColor(), "N", "N", "N"]
      };
  
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(result => result.result)
        .catch(error => {
          console.error("Error fetching color palette:", error);
          return [];
        });
    };
  
    const generatePaletteFromColors = (colors) => {
      const container = document.querySelector('.container');
      if (container) {
        colors.forEach(color => {
          const hexValue = rgbToHex(color[0], color[1], color[2]);
          const li = document.createElement("li");
          li.classList.add("color");
          li.innerHTML = `
            <div class="rec-box" style="background: ${hexValue}"></div>
            <span class="hex-value">${hexValue}</span>
          `;
          container.appendChild(li);
          li.addEventListener("click", () => copyColor(li, hexValue));
        });
      }
    };
  
    const rgbToHex = (r, g, b) => {
      const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };
  
    const generateMultiplePalettes = () => {
      for (let i = 0; i < numberOfPalettes; i++) {
        fetchColorPalette()
          .then(colors => generatePaletteFromColors(colors.slice(0, 4)));
      }
    };
  
    generateMultiplePalettes();
  };
  
  
  
  
  // Définition de la fonction copyColor
  export const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(() => {
      colorElement.innerText = "Copied";
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    }).catch(() => alert("Fail to copy code"));
  };