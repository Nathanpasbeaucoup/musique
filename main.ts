input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        music.setTempo(120)
        music.playTone(294, music.beat(BeatFraction.Half))
        basic.pause(52)
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.pause(52)
        music.playTone(392, music.beat(BeatFraction.Half))
        basic.pause(52)
        for (let index = 0; index < 5; index++) {
            music.playTone(392, music.beat(BeatFraction.Half))
            basic.pause(30)
        }
    }
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(52)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(52)
    music.playTone(370, music.beat(BeatFraction.Half))
    basic.pause(52)
    music.rest(music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
})
