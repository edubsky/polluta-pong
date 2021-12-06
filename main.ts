/**
 * ABOUT THIS MINI GAME
 * 
 * This is about dirty lobbying by corporations more concerned about short-term profits than, well, anything really.
 * 
 * You can read more about it here: https://pollutamotor.com
 * 
 * And sign a petition here: https://bit.ly/polluta-petition
 * 
 * Game by https://twitter.com/eoin
 */
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    players = 2
    controller.player2.moveSprite(Player_2, 0, 100)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    players = 2
    controller.player2.moveSprite(Player_2, 0, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.vx = 1.1 * otherSprite.vx
    otherSprite.vy = -1.1 * otherSprite.vy
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash("Nice lobbying Polutta!", "You delayed or destroyed " + laws + " climate action laws.")
    game.over(false)
})
let laws = 0
let Player_2: Sprite = null
let players = 0
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 1 2 2 2 2 2 . . 
    . . . 2 2 2 2 1 2 1 2 2 2 2 . . 
    . . . 2 2 2 1 2 2 2 1 2 2 2 . . 
    . . . 2 2 2 1 1 1 1 1 2 2 2 . . 
    . . . 2 2 2 1 2 2 2 1 2 2 2 . . 
    . . . 2 2 2 1 2 2 2 1 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    `)
game.splash("POLLUTA PONG", "Counter Climate Action")
players = 1
let seaLevel = sprites.create(img`
    . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 8 8 . . 8 8 . 
    `, SpriteKind.Enemy)
seaLevel.y = 100
seaLevel.vy = -1
let Player_1 = sprites.create(assets.image`Player 1`, SpriteKind.Player)
Player_1.setPosition(80, 5)
controller.moveSprite(Player_1, 100, 0)
Player_1.setStayInScreen(true)
Player_2 = sprites.create(assets.image`Player 2`, SpriteKind.Player)
Player_2.setPosition(80, 115)
Player_2.setStayInScreen(true)
let projectile = sprites.createProjectileFromSprite(assets.image`Ball`, seaLevel, randint(25, 50), randint(-50, -75))
projectile.x += 3
projectile.setBounceOnWall(true)
laws = 0
game.onUpdate(function () {
    if (projectile.y > scene.screenHeight() / 2 && players == 1) {
        if (projectile.x > Player_2.x) {
            Player_2.x += 2
        } else {
            Player_2.x += -2
        }
    }
})
game.onUpdate(function () {
    if (projectile.bottom > Player_2.bottom) {
        projectile.setPosition(Player_2.x, Player_2.y - 5)
        projectile.setVelocity(randint(25, 50), randint(-75, -50))
        laws += 1
    } else if (projectile.top < Player_1.top) {
        projectile.setPosition(Player_2.x, Player_2.y - 5)
        projectile.setVelocity(randint(25, 50), randint(-75, -50))
    }
})
