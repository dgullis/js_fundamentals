
document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.querySelector("h1");
  headerElement.textContent = "Dan's cooking blog";

  const toastRecipeSteps = ["put bread in toaster", "put butter on toast"];

  addRecipe("How to make Toast", toastRecipeSteps);

  addJoke();

  todoButton();

  attachListener();

  // const buttonEl = document.querySelector("#TODO-button")

  // buttonEl.addEventListener('click', () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // })
});

const attachListener = () => {
  document.querySelector("#TODO-button").addEventListener('click', addTODO);
};

const addRecipe = (title, steps) => {
  const recipeTitle = document.createElement("p")
  recipeTitle.textContent = title

  const newRecipeListEl = document.createElement("ol")

  steps.map((element) => {
    const stepEl = document.createElement("li");
    stepEl.textContent = element;
    newRecipeListEl.appendChild(stepEl)
  })

  document.body.appendChild(recipeTitle)
  document.body.appendChild(newRecipeListEl);

};

const addJoke = async () => {
  const jokeSetupParagraph = document.createElement("p")
  const jokePunchlineParagraph = document.createElement("p")
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokeSetupParagraph.textContent = `${data.setup}  `

    document.body.appendChild(jokeSetupParagraph)

    punchlineButton(jokeSetupParagraph);
    
    const punchlineButtonElement = document.querySelector("#punchline-button")

    punchlineButtonElement.addEventListener('click', () => {
        jokePunchlineParagraph.textContent = `${data.punchline}`
        document.body.appendChild(jokePunchlineParagraph)
      })

  } catch (error) {
    console.error("error fethching joke", error);
    jokeSetupParagraph.textContent = "failed to fetch joke, try again"
  }

  
};

const todoButton = () => {
  const todoButton = document.createElement("button");
  todoButton.type = "button";
  todoButton.id = "TODO-button";
  todoButton.textContent = "click for TODO";
  document.body.appendChild(todoButton);
}

const punchlineButton = (element) => {
  const punchlineButton = document.createElement("button");
  punchlineButton.type = "button";
  punchlineButton.id = "punchline-button";
  punchlineButton.textContent = "click for punchline"
  element.appendChild(punchlineButton)

}

let counter = 1;

const addTODO = async () => {
  const todoParagraph = document.createElement("p");
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`);
    const data = await response.json();
    todoParagraph.textContent = `#${counter} TODO: ${data.title}`
  } catch (error) {
    console.error("error fetching TODO from URL, error");
    todoParagraph.textContent = "failed to load TODO, try again";
  }

  document.body.appendChild(todoParagraph);
  counter += 1;
}
