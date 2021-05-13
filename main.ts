music.setVolume(255)
light.setBrightness(255)
// Presets the volume and brightness to max
while (true) {
    // The loop that will continue to run as long as at least one of the targets below are met    
    if (10 < input.acceleration(Dimension.X) && input.acceleration(Dimension.X) < -10 || 10 < input.acceleration(Dimension.Y) && input.acceleration(Dimension.Y) < -10) {
        light.setAll(light.rgb(255, 255, 255))
        // turn Camera on and (take picture) or (start recording):
        music.siren.playUntilDone()
        pause(3000)
    } else if (10 >= input.acceleration(Dimension.X) && input.acceleration(Dimension.X) >= -10 || 10 >= input.acceleration(Dimension.Y) && input.acceleration(Dimension.Y) >= -10) {
        music.stopAllSounds()
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
