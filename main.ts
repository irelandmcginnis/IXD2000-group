let Count = 0
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showString("GO")
basic.pause(1000)
let SensorVal = 0
let inPosition = 0
basic.forever(function () {
    SensorVal = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Inches
    )
    basic.showNumber(Count)
    if (SensorVal < 24 && SensorVal != 0) {
        inPosition = 1
    }
    if ((SensorVal > 24 || SensorVal == 0) && inPosition == 1) {
        inPosition = 0
        Count += 1
    }
})
