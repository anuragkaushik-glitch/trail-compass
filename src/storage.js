// storage.js
import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "TRAIL_COMPASS_PINS_V1";

// TODO: Load the saved pins

export async function loadPins() {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      
      return [];
    }
    return parsed;
  } catch (err) {
    console.error("Error loading pins:", err);
    return [];
  }
}

// TODO: Save the pins locally
export async function savePins(pins) {
  try {
    if (!Array.isArray(pins)) {
      return;
    }
    const cleanPins = pins.filter(Boolean);
    const jsonValue = JSON.stringify(cleanPins);
    await AsyncStorage.setItem(KEY, jsonValue);

  } catch (err) {
    console.error("Error saving pins:", err);
  }
}
