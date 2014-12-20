Flinching-Robot
===============

Tessel-powered robot car that flinches away from loud noises.

See it on [Vine](https://vine.co/v/OXzPOvt6xL5)

I wanted to see if I could make a robot that reacts to its environment in an emotionally compelling way. This one is based on how animals react to loud noises– they flinch away.

In a practical sense, this also makes a decent toy– you make a noise, and it moves. Very easy to demonstrate and interact with.

## Materials

* [Tessel](//tessel.io)
* [Servo Module](//tessel.io/modules#module-servo)
* Two continuous rotation servos
* Two [Ambient Modules](//tessel.io/modules#module-ambient)
* Robot car chassis (I use [this one](http://sumobotkit.com/) with a Project Box from Radioshack on top)
* A way to power the Tessel
* Two male to female wires (and an additional 10 to use as module extension cables if you want)

## Setup

1. Follow all of the steps for mechanical and physical assembly shown on the [Tesselbot](https://projects.tessel.io/projects/tesselbot-rc-sumobot) page, but plug in your servo module to Port B instead of Port A.
1. Plug in the two Ambient Modules to Port A and Port C, respectively.
1. Position the Tessel on top of the robot chassis, with the USB plug facing forward and the two ambient modules sticking out to the right and left. Affix it somehow (I used electrical tape).
1. Clone the code repo, `npm install` to install dependencies, and `tessel push index.js` to load the code onto your Tessel.
1. Disconnect the Tessel from your computer and connect it to your USB battery instead. It should run automatically after a few seconds.
1. Snap or clap or otherwise make noises near the robot.
