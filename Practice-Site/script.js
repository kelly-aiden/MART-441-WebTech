// Variables to track story state
let storyStage = 0;

function makeChoice(choice) {
  const storyText = document.getElementById('story-text');
  const sceneImage = document.getElementById('scene-image');
  const choicesDiv = document.getElementById('choices');

  if (storyStage === 0) {
    if (choice === 'path') {
      storyText.textContent = "You follow the winding path deeper into the forest. Suddenly, you hear a rustling in the bushes.";
      sceneImage.src = "path.jpg";
      sceneImage.alt = "Forest path with bushes";
      choicesDiv.innerHTML = `
        <button onclick="makeChoice('investigate')">Investigate the noise</button>
        <button onclick="makeChoice('run')">Run back</button>
        <button onclick="makeChoice('ignore')">Ignore and keep walking</button>
      `;
      storyStage = 1;
    } else if (choice === 'cabin') {
      storyText.textContent = "You approach the cabin. The door creaks open slightly. Inside, it looks cozy but abandoned.";
      sceneImage.src = "cabin.jpg";
      sceneImage.alt = "Old cabin in the forest";
      choicesDiv.innerHTML = `
        <button onclick="makeChoice('enter')">Enter the cabin</button>
        <button onclick="makeChoice('knock')">Knock on the door</button>
        <button onclick="makeChoice('leave')">Leave and go back</button>
      `;
      storyStage = 2;
    } else if (choice === 'stay') {
      storyText.textContent = "You decide to stay and explore the nearby area. You find a sparkling stream and a strange glowing flower.";
      sceneImage.src = "stream.jpg";
      sceneImage.alt = "Stream with glowing flower";
      choicesDiv.innerHTML = `
        <button onclick="makeChoice('flower')">Pick the glowing flower</button>
        <button onclick="makeChoice('drink')">Drink from the stream</button>
        <button onclick="makeChoice('rest')">Rest by the stream</button>
      `;
      storyStage = 3;
    }
  } else if (storyStage === 1) {
    // Path branch
    if (choice === 'investigate') {
      storyText.textContent = "A friendly deer jumps out! You smile and continue your walk, feeling more connected to nature.";
      sceneImage.src = "deer.jpg";
      sceneImage.alt = "Friendly deer in forest";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    } else if (choice === 'run') {
      storyText.textContent = "You run back to where you started, heart pounding. Maybe the forest isn't so friendly after all.";
      sceneImage.src = "forest.jpg";
      sceneImage.alt = "Forest entrance";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    } else if (choice === 'ignore') {
      storyText.textContent = "You ignore the noise and keep walking. Suddenly, you find a hidden treasure chest under the leaves!";
      sceneImage.src = "treasure.jpg";
      sceneImage.alt = "Treasure chest in forest";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    }
  } else if (storyStage === 2) {
    // Cabin branch
    if (choice === 'enter') {
      storyText.textContent = "Inside the cabin, you find old maps and a journal detailing magical creatures in the forest.";
      sceneImage.src = "journal.jpg";
      sceneImage.alt = "Old journal and maps";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    } else if (choice === 'knock') {
      storyText.textContent = "You knock loudly. Suddenly, a mysterious figure appears and invites you in for tea.";
      sceneImage.src = "figure.jpg";
      sceneImage.alt = "Mysterious figure at cabin door";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    } else if (choice === 'leave') {
      storyText.textContent = "You decide not to disturb the cabin and walk back to where you started.";
      sceneImage.src = "forest.jpg";
      sceneImage.alt = "Forest entrance";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    }
  } else if (storyStage === 3) {
    // Stay/explore branch
    if (choice === 'flower') {
      storyText.textContent = "You pick the glowing flower. It fills you with a warm light and a sense of calm.";
      sceneImage.src = "flower.jpg";
      sceneImage.alt = "Glowing flower";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    } else if (choice === 'drink') {
      storyText.textContent = "You drink from the stream. The water is refreshing and you feel energized.";
      sceneImage.src = "stream.jpg";
      sceneImage.alt = "Sparkling stream";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    } else if (choice === 'rest') {
      storyText.textContent = "You rest by the stream, listening to the peaceful sounds of the forest.";
      sceneImage.src = "rest.jpg";
      sceneImage.alt = "Person resting by stream";
      choicesDiv.innerHTML = `<button onclick="restart()">Start Over</button>`;
    }
  }
}

function restart() {
  // Reset story to beginning
  storyStage = 0;
  document.getElementById('title').textContent = "🌲 Forest Adventure 🌲";
  const storyText = document.getElementById('story-text');
  const sceneImage = document.getElementById('scene-image');
  const choicesDiv = document.getElementById('choices');

  storyText.textContent = "You wake up in a mysterious forest. The sun filters through the tall trees. You see a path leading deeper into the woods and a small cabin nearby.";
  sceneImage.src = "forest.jpg";
  sceneImage.alt = "Forest scene";
  choicesDiv.innerHTML = `
    <button onclick="makeChoice('path')">Take the path</button>
    <button onclick="makeChoice('cabin')">Go to the cabin</button>
    <button onclick="makeChoice('stay')">Stay and explore nearby</button>
  `;
}
