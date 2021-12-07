// ABOUT THIS MINI GAME
// 
// This is about dirty lobbying by corporations more concerned about short-term profits than, well, anything really.
// 
// You can read more about it here: https://pollutamotor.com
// 
// Game by https://twitter.com/eoin
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
function intro_scene () {
    effects.blizzard.startScreenEffect()
    scene.setBackgroundColor(15)
    background = sprites.create(img`
        ..................................................................................................................................................................................bcccc..bcccc..........
        ..................................................................................................................................................................................bfffc..bfffc..........
        ..................................................................................................................................................................................bfffc..cfffc..........
        ..................................................................................................................................................................................bfffc..bfffc..........
        ..................................................................................................................................................................................bfffc..bfffc..........
        ..................................................................................................................................................................................bfffc..bfffc..........
        ................................................................................b.................................................................................................bfffc..bfffc..........
        ................................................................................c.................................................................................................cfffc..cfffc..........
        ................................................................................c................................................................................................cfffff..cfffc..........
        ..............................................................................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffccfffffccccccc...
        ..............................................................................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ..............................................................................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ..............c............c............c.....................................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ............ccf..........ccf..........ccf............c........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ...........cfff.........cfff.........cfff..........ccf........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        .........ccffff.......ccffff.......ccffff........ccfff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ........cffffff......cffffff......cffffff......ccfffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ......ccfffffff....ccfffffff....ccfffffff....ccfffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ....ccfffffffff...cfffffffff...cfffffffff..ccfffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ...cfffffffffff.ccffffffffff.ccffffffffffccfffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        .ccffffffffffffcffffffffffffcfffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        cfffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff........................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff.....b..................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff.....f..................cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff.....c......cf..cf......cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff.....c......cf.cff..f...cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff.cccfc.ff.f.cf.cff.ff.f.cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc...
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.ff.f.cf.fff.ff.f.cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccf
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffccfccccffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffccfffcccccfffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffccccfffffffffccfffffcccccfffffffffffffffffff
        ffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffccccccccfcccccccccccccccccccccccfffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccffffffffffffffff
        ffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcccccccccccccccccccccccccccccccccccccffffffffffffffff
        fffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffcbbcccccccccccccccccccccccccccccccccccccffffffffffffffff
        ffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccfcffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccffffffffffffffff
        ffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffcffffcccccccccccccccccccccccccccccccfffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffffccccccccccfffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffccccccfffffffffffcfffffffff
        `, SpriteKind.Player)
    background.left = 0
    background.bottom = 118
    player_car = sprites.create(img`
        .............cccccccc....................
        ...........cccccccccccc..................
        .........cccc.cc......ccc................
        ......ccccc...cc........cc...............
        ....ccccc.....cc.........cccc............
        ..ccccccccccccccccccccccc.cccccccc.......
        .cccccccccccccccccccccccccccccccccccc....
        .cccccccccccccccccccccccccccccccccccccc..
        .ccccccccccccccccccccccccccccccccccccccc.
        .ccccccccccccccccccccccccccccccccccccccb.
        .ccccccccccccccccccccccccccccccccccccccbc
        .cccccccccccccccccccccccccccccccccccccccc
        .cccccccccccccccccccccccccccccccccccccccc
        .cccccccccccccccccccccccccccccccccccccccc
        .ccccccccccccccccccccccccccccccccccccccc.
        ccc.ccccccccccccccccccccccccccccccc......
        ....cccccccccc............cccccccc.......
        ......cccccc...............ccccc.........
        .........................................
        .........................................
        .........................................
        .........................................
        .........................................
        .........................................
        .........................................
        .........................................
        `, SpriteKind.Player)
    player_car.setPosition(-36, 111)
    foreground = sprites.create(img`
        ................................................................................................................................................................................................................................................
        ..........c...........................c.........................................................................................................................................................................................................
        ......cccccccccccccccccccccccccccccccccccccc....................................................................................................................................................................................................
        .....cccccccccccccccccccccccccccccccccccccccc...................................................................................................................................................................................................
        .....cccccbbbbbbcccccbbcccbccbccbccbcbbbbcbcc...................................................................................................................................................................................................
        .....ccccbccbcccbccccbcbcbcbcbccbccbcbcbcbcbc...................................................................................................................................................................................................
        .....cccbccbcbcccbcccbcbcbcbcbccbccbcbcbcbcbc...................................................................................................................................................................................................
        .....ccbcbcbccccbcbccbbccbcbcbccbccbcbcbcbbbc...................................................................................................................................................................................................
        .....ccbccbbbbbbccbccbccccbccbbcbbccbccbcbcbc...................................................................................................................................................................................................
        .....ccbcccbccccccbcccccccccccccccccccccccccc...................................................................................................................................................................................................
        .....ccbcccbcbccccbcccccccccccccccccccccccccc...................................................................................................................................................................................................
        .....cccbccbcbcccbccccccccccccccccccccccccccc.........................................................................................................ccccccccc.................................................................................
        .....ccccbccbcccbcccccccccccccccccccccccccccc........................................................................................................c.........c................................................................................
        .cc..cccccbbbbbbccccccccccccccccccccccccccccc...............c.....................ccc............................................c.cc..........c.....ccccccccccc..cc..............cc.......................................c........c.....c.....
        ccc...cccccccccccccccccccccccccccccccccccccc....ccc...c.c..cccc...c...............cc.............c.c.c...........................cccccc.......c......c.........c..cc....c.........ccccc..c.............c.................c.ccc.....cccc....ccccc
        cccc......c...........................c.........ccccccccccc.c..ccccccc....cc.ccc...ccc.c.........ccccccccccc...c................ccccccccccc...ccccccccccccccccccccccc..cccc....ccccccccccccccc..ccccccccccc.........cc.ccccccccc....ccc....ccccc
        cccccccc.ccc.ccccccc........cc.....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..ccccccccccccccccccccccccccccccccc
        cccccccccccccccccccc.ccccccccccc..ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.cccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `, SpriteKind.Player)
    foreground.left = 0
    foreground.bottom = 120
    story.spriteMoveToLocation(player_car, 35, 111, 30)
    timer.background(function () {
        story.spriteMoveToLocation(foreground, 60, foreground.y, 35)
    })
    timer.background(function () {
        story.spriteMoveToLocation(background, 60, background.y, 25)
    })
    pause(3000)
    other_car = sprites.create(img`
        . f 
        . . 
        . . 
        . . 
        . . 
        . . 
        . . 
        . . 
        d d 
        d . 
        `, SpriteKind.Player)
    other_car.setPosition(106, 105)
    story.setPagePauseLength(1000, 2000)
    story.spriteSayText(other_car, "WE NEED YOU TO STOP PESKY GREEN LAWS INTERFERING WITH OUR POLLUTING PLANS.", 15, 1, story.TextSpeed.Slow)
    story.spriteSayText(other_car, "CAN YOU BAT THEM AWAY FOR US?", 15, 1, story.TextSpeed.Slow)
    story.showPlayerChoices("NO PROBLEM!", "NO WAY!")
    if (story.checkLastAnswer("NO WAY!")) {
        game.over(true, effects.hearts)
    }
    pause(500)
    story.spriteSayText(player_car, "JUST ONE THING... WHAT'S THE PLAN WHEN THE CLIMATE BREAKS DOWN?", 15, 1, story.TextSpeed.Slow)
    story.spriteSayText(other_car, "DON'T WORRY ABOUT IT. JUST BAT AWAY THOSE GREEN LAWS!", 15, 1, story.TextSpeed.Slow)
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        value2.destroy()
    }
    effects.blizzard.endScreenEffect()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash("Nice lobbying!", "You delayed or destroyed " + laws + " climate action laws.")
    game.over(false)
})
let other_car: Sprite = null
let foreground: Sprite = null
let player_car: Sprite = null
let background: Sprite = null
let laws = 0
let Player_2: Sprite = null
let players = 0
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 1 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 1 2 1 2 2 2 2 2 . 
    2 2 2 2 2 2 2 1 2 2 2 1 2 2 2 2 2 
    2 2 2 2 2 2 2 1 1 1 1 1 2 2 2 2 2 
    2 2 2 2 2 2 2 1 2 2 2 1 2 2 2 2 2 
    2 2 2 2 2 2 2 1 2 2 2 1 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . 2 2 2 2 . . . . 2 2 2 2 . . 
    `)
game.splash("POLLUTA PONG")
intro_scene()
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
    if (projectile.bottom > Player_2.bottom) {
        projectile.setPosition(Player_2.x, Player_2.y - 5)
        projectile.setVelocity(randint(25, 50), randint(-75, -50))
        laws += 1
    } else if (projectile.top < Player_1.top) {
        projectile.setPosition(Player_2.x, Player_2.y - 5)
        projectile.setVelocity(randint(25, 50), randint(-75, -50))
    }
})
game.onUpdate(function () {
    if (projectile.y > scene.screenHeight() / 2 && players == 1) {
        if (projectile.x > Player_2.x) {
            Player_2.x += 2
        } else {
            Player_2.x += -2
        }
    }
})
