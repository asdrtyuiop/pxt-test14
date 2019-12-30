/**
 * Types of DC motor control
 */
enum DCmotion {
	//% block="Forward"
	Forward,
	//% block="Backward"
	Backward
}

enum connectorDCMotor {
	//% block="P0"
	P0,
	//% block="P1"
	P1,
	//% block="P2"
	P2
}

/**
 * ArtecRobo control package
 */
//% color=#5b99a5 weight=100 icon="\uf009" block="ArtecRobo"
namespace artecrobo {

	/* spped initial value */

	// Move DC motor
	//% blockId=artec_move_dc_motor
	//% block="DC motor %_connector| motion: %_motion"
	export function moveDCMotor(_connector: connectorDCMotor, _motion: DCmotion): void {
		switch(_motion) {
			case DCmotion.Forward:
				if (_connector == connectorDCMotor.P0) {
					pins.digitalWritePin(DigitalPin.P0, 1);
				} else if (_connector == connectorDCMotor.P1) {
					pins.digitalWritePin(DigitalPin.P1, 1);
				} else {
					pins.digitalWritePin(DigitalPin.P2, 1);
				}
				break;
			case DCmotion.Backward:
				if (_connector == connectorDCMotor.P0) {
					pins.digitalWritePin(DigitalPin.P0, 0);
				} else if (_connector == connectorDCMotor.P1) {
					pins.digitalWritePin(DigitalPin.P1, 0);
				} else {
					pins.digitalWritePin(DigitalPin.P2, 0);
				}
				break;
		}
	}
}
