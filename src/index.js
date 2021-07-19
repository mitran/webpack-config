import "./styles/index.scss";

const elvenShieldRecipe = {
  letherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 2,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
