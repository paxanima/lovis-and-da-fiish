scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(assets.image`Lovis`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundCenter)
scene.cameraFollowSprite(mySprite)
