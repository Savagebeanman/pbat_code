music.set_volume(255)
light.set_brightness(255)
#Presets the volume and brightness to max
while True:
#The loop that will continue to run as long as at least one of the targets below are met    
    if 10 < input.acceleration(Dimension.X) < -10 or 10 < input.acceleration(Dimension.Y) < -10:
        light.set_all(light.rgb(255,255,255))
        #turn Camera on and (take picture) or (start recording):
        music.siren.play_until_done()
        pause(3000)
        
    elif 10 >= input.acceleration(Dimension.X) >= -10 or 10 >= input.acceleration(Dimension.Y) >= -10:
        music.stop_all_sounds()
        light.set_all(light.rgb(0,0,0))
        #turn Camera off and save the data collected

        
