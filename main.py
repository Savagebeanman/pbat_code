while True:
    music.set_volume(255)
    light.set_brightness(255)
    
    if 3 < input.acceleration(Dimension.Z) < -3:
        light.set_all(light.rgb(0,255,0))
        music.wawawawaa.play_until_done()
        pause(3000)
        
        
    elif 3 >= input.acceleration(Dimension.Z) >= -3:
        music.stop_all_sounds()
        light.set_all(light.rgb(255,0,0))

        
