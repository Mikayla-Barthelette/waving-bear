// Created by: Mikayla Barthelette
// Created on: Nov 2020
// 
// This program allows you to turn a servo when you press a button
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        robotbit.Servo(robotbit.Servos.S1, 0)
        basic.pause(1000)
        robotbit.Servo(robotbit.Servos.S1, 90)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(robotbit.Servos.S1, 90)
})
