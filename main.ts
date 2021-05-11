while (true) {
    music.setVolume(255)
    light.setBrightness(255)
    if (3 < input.acceleration(Dimension.Z) && input.acceleration(Dimension.Z) < -3) {
        light.setAll(light.rgb(0, 255, 0))
        music.wawawawaa.playUntilDone()
        pause(3000)
    } else if (3 >= input.acceleration(Dimension.Z) && input.acceleration(Dimension.Z) >= -3) {
        music.stopAllSounds()
        light.setAll(light.rgb(255, 0, 0))
    }
    
}
