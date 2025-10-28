import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "TRAIL_COMPASS_PINS_V1";

// TODO: Load the saved pins
export async function loadPins() {
  try {
    const json = await AsyncStorage.getItem(KEY);
    if (json) {
      return JSON.parse(json);
    } else {
      return [];
    }
  } catch {
    return [];
  }
}

// TODO: Save the pins locally
export async function savePins(pins) {
  try {
    const json = JSON.stringify(pins);
    await AsyncStorage.setItem(KEY, json);
  } catch (err) {
    console.error("Error saving pins:", err);
  }
}