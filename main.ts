controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    players = 2
    controller.player2.moveSprite(Player_2, 0, 100)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    players = 2
    controller.player2.moveSprite(Player_2, 0, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.vx = -1.1 * otherSprite.vx
    otherSprite.vy = 1.1 * otherSprite.vy
    music.playTone(494, music.beat(BeatFraction.Half))
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
    story.spriteSayText(other_car, "WE NEED YOU TO STOP PESKY GREEN LAWS INTERFERING WITH OUR POLLUTING PLANS.", 15, 1, story.TextSpeed.Normal)
    story.spriteSayText(other_car, "CAN YOU BAT THEM AWAY FOR US?", 15, 1, story.TextSpeed.Normal)
    story.showPlayerChoices("NO PROBLEM!", "NO WAY!")
    if (story.checkLastAnswer("NO WAY!")) {
        game.over(true, effects.hearts)
    }
    pause(500)
    story.spriteSayText(player_car, "JUST ONE THING... WHAT ABOUT THE CLIMATE?", 15, 1, story.TextSpeed.Normal)
    story.spriteSayText(other_car, "UH... JUST BAT AWAY THOSE GREEN LAWS!", 15, 1, story.TextSpeed.Normal)
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        value2.destroy()
    }
    effects.blizzard.endScreenEffect()
}
let other_car: Sprite = null
let foreground: Sprite = null
let player_car: Sprite = null
let background: Sprite = null
let Player_2: Sprite = null
let players = 0
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . . 
    . . . c c c c c c c . . . . . . . 
    . . c 1 1 1 c 1 1 1 c . . . . . . 
    . c 1 1 1 c 1 c 1 1 1 c . . . . . 
    c 1 c 1 1 c 1 b 1 1 c 1 c . . . . 
    c 1 1 c c c c c c c 1 1 c . . . . 
    c 1 1 1 1 c 1 b 1 1 1 1 c . . . . 
    c 1 1 1 1 c 1 c 1 1 1 1 c . . . . 
    . c 1 1 1 c 1 c 1 1 1 b . . . . . 
    . . c 1 1 1 c 1 1 1 b . . . . . . 
    . . . c c c c c c c . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    `)
game.splash("POLLUTA PONG", "The only way to win is not to play")
intro_scene()
let laws = 0
players = 1
let Picture = image.create(scene.screenWidth(), scene.screenHeight())
for (let index = 0; index <= scene.screenHeight(); index++) {
    if (index % 6 < 4) {
        Picture.setPixel(scene.screenWidth() / 2, index, 1)
    }
}
scene.setBackgroundImage(Picture)
let Player_1 = sprites.create(assets.image`Player 1`, SpriteKind.Player)
Player_1.setPosition(8, 60)
controller.moveSprite(Player_1, 0, 100)
Player_1.setStayInScreen(true)
Player_2 = sprites.create(assets.image`Player 2`, SpriteKind.Player)
Player_2.setPosition(152, 60)
Player_2.setStayInScreen(true)
let projectile = sprites.createProjectileFromSprite(assets.image`Ball`, Player_1, randint(50, 75), randint(25, 50))
projectile.x += 3
projectile.setBounceOnWall(true)
projectile.setFlag(SpriteFlag.ShowPhysics, false)
let thermo = sprites.create(img`
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    222
    `, SpriteKind.Enemy)
thermo.top = 130
thermo.vy = -2
game.onUpdate(function () {
    if (projectile.x > scene.screenWidth() / 2 && players == 1) {
        if (projectile.y > Player_2.y) {
            Player_2.y += 2
        } else {
            Player_2.y += -2
        }
    }
    if (thermo.top <= 0) {
        game.splash("YOU MADE IT!", "You delayed " + laws + " climate action laws!")
        for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
            value2.destroy()
        }
        game.over(false)
    }
})
game.onUpdate(function () {
    if (projectile.x > Player_2.x) {
        laws += 1
        music.jumpUp.play()
        projectile.setPosition(Player_2.x - 5, Player_2.y)
        projectile.setVelocity(randint(-75, -50), randint(25, 50))
    } else if (projectile.x < Player_1.x) {
        laws += 1
        music.jumpUp.play()
        projectile.setPosition(Player_2.x - 5, Player_2.y)
        projectile.setVelocity(randint(-75, -50), randint(25, 50))
    }
})
