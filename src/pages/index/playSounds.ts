import { Howl } from 'howler'

import arcade from '/static/sounds/arcade.mp3'
import bloop from '/static/sounds/bloop.mp3'
import click from '/static/sounds/click.mp3'
import ding from '/static/sounds/ding.mp3'
import cooking from '/static/sounds/cooking.mp3'
import whoosh from '/static/sounds/whoosh.mp3'
import hologram from '/static/sounds/hologram.mp3'

export function playSound(sound: string, volume: number = 0.5, loop: boolean = false) {
  const soundMap: Record<string, any> = {
    arcade,
    bloop,
    click,
    ding,
    cooking,
    whoosh,
    hologram,
  }

  const soundFile = soundMap[sound]

  const soundEffect = new Howl({
    src: [soundFile],
    volume,
    loop,
  })

  soundEffect.play()
}
