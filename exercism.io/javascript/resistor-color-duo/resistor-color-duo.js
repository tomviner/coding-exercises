export const value = (colours) =>
  Number(colours.map(
    (el) => (
        COLORS.indexOf(el)
    )).join('')
  )


const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
