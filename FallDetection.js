// Simulated Wearable Device
class WearableDevice {
  constructor() {
    this.accelerometerData = { x: 0, y: 0, z: 0 };
    this.heartRate = 70;
    this.temperature = 98.6;
    this.fallDetected = false;
  }

  generateRandomData() {
    // Simulate accelerometer data
    this.accelerometerData = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
      z: Math.random() * 10 - 5
    };

    // Simulate heart rate and temperature changes
    this.heartRate += Math.random() * 5 - 2.5;
    this.temperature += Math.random() * 0.5 - 0.25;

    // Simulate fall detection
    if (this.accelerometerData.y < -8) {
      this.fallDetected = true;
    } else {
      this.fallDetected = false;
    }
  }
}

// Simulated Mobile App
class MobileApp {
  constructor(device) {
    this.device = device;
  }

  displayData() {
    console.log("Accelerometer Data:", this.device.accelerometerData);
    console.log("Heart Rate:", this.device.heartRate);
    console.log("Temperature:", this.device.temperature);
    if (this.device.fallDetected) {
      console.log("Fall Detected! Notifying caregivers...");
    }
  }
}

// Simulated workflow
const wearable = new WearableDevice();
const mobileApp = new MobileApp(wearable);

// Simulate data transmission and app interaction
setInterval(() => {
  wearable.generateRandomData();
  mobileApp.displayData();
}, 3000); // Simulate every 3 seconds
