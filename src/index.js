
const $ = require('jquery');
const buildings = require('./buildings.js').buildings;
import * as PIXI from 'pixi.js';

function credits(container) {
    const creds = [];     
    
    creds.push({
        title: 'Liberated Pixel Cup Tileset',
        href: 'https://opengameart.org/content/lpc-tile-atlas',
        license: 'CC-BY-SA 3.0 and GNU GPL 3.0',
        folders: ['tiles', 'tilesSrc']
    });

    creds.push({
        title: "Nicu's Clipart Collection",
        href: 'http://clipart.nicubunu.ro/?gallery=rpg_map',
        license: 'Public Domain',
        folders: 'rpg_map'
    });

    creds.push({
        title: '64x128 Isometric Tiles: Grassland Seasons',
        href: 'https://opengameart.org/content/64x128-isometric-tiles-grassland-seasons',
        license: 'CC-BY-SA 4.0',
        folders: ['64x128-isometric-tiles-grassland-seasons']
    });

    creds.push({
        title: 'Match 3 Tiles',
        href: 'https://opengameart.org/content/match-3-tiles',
        license: 'Public Domain',
        folders: ['match-3-tiles']
    });

    creds.push({
        title: 'Isometric Dungeon Tiles (60+)',
        href: 'https://opengameart.org/content/isometric-dungeon-tiles-60',
        license: 'Public Domain',
        folders: ['isometric-dungeon-tiles-60']
    });

    creds.push({
        title: 'Painted Iso Roguelike Tiles',
        href: 'https://opengameart.org/content/painted-iso-roguelike-tiles',
        license: 'CC-BY 3.0 and GPL 3.0 and GPL 2.0',
        folders: ['']
    });

    creds.push({
        title: 'Crystals',
        href: 'https://opengameart.org/content/crystals-0',
        license: 'Public Domain',
        folders: ['crystals-0']
    });

    creds.push({
        title: 'Wyrmsun CC0 - over 900 items',
        href: 'https://opengameart.org/content/wyrmsun-cc0-over-900-items',
        license: 'Public Domain',
        folders: ['wyrmsun-cc0-over-900-items']
    });

    creds.push({
        title: 'Dungeon Stairs',
        href: 'https://opengameart.org/content/dungeon-stairs',
        license: 'CC-BY 3.0',
        folders: ['dungeon-stairs']
    });

    creds.push({
        title: 'Plums',
        href: 'https://opengameart.org/content/plums',
        license: 'Public Domain',
        folders: ['plums']
    });

    creds.push({
        title: "Chestnut Trees (Yar's Tree Rework)",
        href: 'https://opengameart.org/content/chestnut-trees-yars-tree-rework',
        license: 'CC-BY 3.0',
        folders: ['chestnut-trees-yars-tree-rework']
    });

    creds.push({
        title: 'Free tilling textures pack 38',
        href: 'https://opengameart.org/content/free-tilling-textures-pack-38',
        license: 'Public Domain',
        folders: ['free-tilling-textures-pack-38']
    });

    creds.push({
        title: 'Crates',
        href: 'https://opengameart.org/content/crates',
        license: 'Public Domain',
        folders: ['crates']
    });

    creds.push({
        title: 'Stendhal Trees',
        href: 'https://opengameart.org/content/stendhal-trees',
        license: 'CC-BY-SA 3.0',
        folders: ['stendhal-trees']
    });

    creds.push({
        title: 'Large Rocks',
        href: 'https://opengameart.org/content/large-rocks',
        license: 'CC-BY 3.0',
        folders: ['large-rocks']
    });

    creds.push({
        title: 'Shining Gemstones Set #1',
        href: 'https://opengameart.org/content/shining-gemstones-set-1',
        license: 'Public Domain',
        folders: ['shining-gemstones-set-1']
    });

    creds.push({
        title: 'Whispers of Avalon: Grassland Tileset',
        href: 'https://opengameart.org/content/whispers-of-avalon-grassland-tileset',
        license: 'CC-BY 3.0 and GPL 3.0 and GPL 2.0',
        folders: ['whispers-of-avalon-grassland-tileset']
    });

    creds.push({
        title: 'Dungeon Crawl Selected Upscale',
        href: 'https://opengameart.org/content/dungeon-crawl-selected-upscale',
        license: 'Public Domain',
        folders: ['dungeon-crawl-selected-upscale']
    });

    creds.push({
        title: 'denzis-96x96-and-64x64-isometric-tilesets',
        href: 'https://opengameart.org/content/denzis-96x96-and-64x64-isometric-tilesets',
        license: 'CC-BY-SA 3.0',
        folders: ['denzis-96x96-and-64x64-isometric-tilesets']
    });

    creds.push({
        title: 'Isometric Groundtile "Library"',
        href: 'https://opengameart.org/content/isometric-groundtile-library',
        license: 'CC-BY 3.0',
        folders: ['isometric-groundtile-library']
    });

    creds.push({
        title: 'Isometric Wood Fences',
        href: 'https://opengameart.org/content/isometric-wood-fences',
        license: 'CC-BY 4.0',
        folders: ['isometric-wood-fences']
    });

    creds.push({
        title: 'Breakout (Brick Breaker) Tile Set - Free',
        href: 'https://opengameart.org/content/breakout-brick-breaker-tile-set-free',
        license: 'Public Domain',
        folders: ['breakout-brick-breaker-tile-set-free']
    });

    creds.push({
        title: 'more isometric parts',
        href: 'https://opengameart.org/content/more-isometric-parts',
        license: 'Public Domain',
        folders: ['more-isometric-parts']
    });

    creds.push({
        title: 'Free isometric plants-pack',
        href: 'https://opengameart.org/content/free-isometric-plants-pack',
        license: 'Public Domain',
        folders: ['free-isometric-plants-pack']
    });

    creds.push({
        title: 'Fantasy characters',
        href: 'https://opengameart.org/content/fantasy-characters',
        license: 'GPL 3.0',
        folders: ['fantasy-characters']
    });

    creds.push({
        title: 'Melee weapons',
        href: 'https://opengameart.org/content/melee-weapons',
        license: 'GPL 3.0 and GPL 2.0 and Public Domain',
        folders: ['melee-weapons']
    });

    creds.push({
        title: 'Pixel Weapons',
        href: 'https://opengameart.org/content/pixel-weapons-1',
        license: 'CC-BY 4.0 and CC-BY 3.0 and GPL 3.0',
        folders: ['pixel-weapons-1']
    });

    creds.push({
        title: 'Elemental Weapons - Effect',
        href: 'https://opengameart.org/content/elemental-weapons-effect',
        license: 'Public Domain',
        folders: ['elemental-weapons-effect']
    });

    creds.push({
        title: '',
        href: '',
        license: '',
        folders: ['']
    });

    creds.push({
        title: '',
        href: '',
        license: '',
        folders: ['']
    });

    // TODO: https://opengameart.org/users/kjellgranlund

    container.append("<h1>Art Credits</h1>");
    for (let i = 0; i < creds.length; i++) {
        const cred = creds[i];
        container.append("<p><a href=" + cred.href + ">" + cred.title + "</a>" + ": " + cred.license + "</p>");
    }
}

function main() {

$("body").css("margin", "0px");
$("body").css("padding", "0px");

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
    //console.log("building", buildings[i]);
    if (buildings[i].search('outline') >= 0) {
        continue;
    }
    const sprite = loadSprite("atlas/rpg_map/" + buildings[i]);
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

credits($("body"));

}

$(main);