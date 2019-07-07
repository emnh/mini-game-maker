
const $ = require('jquery');
const buildings = require('./buildings.js');
import * as PIXI from 'pixi.js';

function main() {

const width = 1024;
const height = 1024;

const app = new PIXI.Application({
    width: width, height: height, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});

const tileWidth = 32;
const tileHeight = 32;

document.body.appendChild(app.view);

const container = new PIXI.Container();

container.width = width;
container.height = height;

app.stage.addChild(container);

function randInt(a, b) {
    return a + Math.floor(Math.random() * (b - a));
}

// Create a new texture
const grassPNGs = [
    'atlas/tiles/terrain_atlas_0181.png',
    'atlas/tiles/terrain_atlas_0182.png',
    'atlas/tiles/terrain_atlas_0183.png'
];

const tilesX = 32;
const tilesY = 32;
for (let i = 0; i < tilesX * tilesY; i++) {
    const rt = randInt(0, 2 + 1); 
    const texture = PIXI.Texture.from(grassPNGs[rt]);
    const grass = new PIXI.Sprite(texture);
    container.addChild(grass);
    grass.x = (i % tilesX) * 32;
    grass.y = Math.floor(i / tilesY) * 32;
}

// Minerals
const mineralsPNG = 'atlas/tiles/terrain_atlas_0256.png';
const mineralsList = [];
for (let i = 0; i < 100; i++) {
    const mineralsTexture = PIXI.Texture.from(mineralsPNG);
    const minerals = new PIXI.Sprite(mineralsTexture);
    const maxX = 25;
    const maxY = 25;
    const rtX = randInt(0, maxX);
    const rtY = randInt(0, maxY);
    minerals.x = app.screen.width / 2 + (rtX - maxX / 2 ) * tileWidth;
    minerals.y = app.screen.height / 2 + (rtY  - maxY / 2) * tileHeight;
    container.addChild(minerals);
    mineralsList.push(minerals);
    //minerals.visible = i < 16;
}

// Character
const characterPNG = 'atlas/tiles/terrain_atlas_1018.png';
const characterTexture = PIXI.Texture.from(characterPNG);
const character = new PIXI.Sprite(characterTexture);
container.addChild(character)

function loadSprite(fname) {
    const png = fname;
    const texture = PIXI.Texture.from(png);
    const sprite = new PIXI.Sprite(texture);
    return sprite;
}

// Test
container.addChild(loadSprite('atlas/rpg_map/circus.svg'));
for (let i = 0; i < buildings.length; i++) {
    const sprite = loadSprite(buildings[i]);
    container.addChild(sprite);
    sprite.x = Math.random() * (container.width - sprite.width);
    sprite.y = Math.random() * (container.height - sprite.height);
}

// Listen for animate update
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    //container.rotation -= 0.01 * delta;
});

const keysDown = {};

// Handle keydown
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'Control') {
        // do not alert when only Control key is pressed.
        return;
    }

    // if (event.ctrlKey) {
    //     // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    //     // event.ctrlKey may be true if Ctrl key is pressed at the same time.
    //     alert(`Combination of ctrlKey + ${keyName}`);
    // } else {
    //     alert(`Key pressed ${keyName}`);
    // }

    keysDown[keyName] = true;
}, false);

// Handle keyup
document.addEventListener('keyup', (event) => {
    const keyName = event.key;
  
    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    // if (keyName === 'Control') {
    //   alert('Control key was released');
    // }

    delete keysDown[keyName];
  }, false);

const initContainerWidth = container.width;
const initContainerHeight = container.height;

let characterX = character.x;
let characterY = character.y;

const handleDownKeys = function() {
    const delta = 5;

    if ('a' in keysDown) {
        characterX -= delta;
    }

    if ('d' in keysDown) {
        characterX += delta;
    }

    if ('w' in keysDown) {
        characterY -= delta;
    }

    if ('s' in keysDown) {
        characterY += delta;    
    }

    //console.log(container.width);
    characterX = (characterX + initContainerWidth) % initContainerWidth;
    characterY = (characterY + initContainerHeight) % initContainerHeight;
};

const updateCharacter = function() {
    character.x = characterX;
    character.y = characterY;
    requestAnimationFrame(updateCharacter);
}

setInterval(handleDownKeys, 10);
updateCharacter();

const euclid = function(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

const pickupMinerals = function() {
    for (let i = 0; i < mineralsList.length; i++) {
        const minerals = mineralsList[i];

        const d = euclid(mineralsList[i].x, mineralsList[i].y, character.x, character.y);

        if (d <= 50) {
            mineralsList[i].visible = false;
        }
    }
}
setInterval(pickupMinerals, 10);

}

$(main);