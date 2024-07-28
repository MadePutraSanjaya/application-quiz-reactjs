const EXPIRATION_TIME = 2 * 60 * 1000;

export function setItem<T>(key: string, value: T): void {
  try {
    const item = {
      value,
      timestamp: Date.now() 
    };
    const serializedValue = JSON.stringify(item);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error setting item in localStorage", error);
  }
}

export function getItem<T>(key: string): T | null {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    const item = JSON.parse(serializedValue) as { value: T, timestamp: number };
    
    if (Date.now() - item.timestamp > EXPIRATION_TIME) {
      localStorage.removeItem(key); 
      return null;
    }
    
    return item.value;
  } catch (error) {
    console.error("Error getting item from localStorage", error);
    return null;
  }
}

export function removeItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing item from localStorage", error);
  }
}

export function clear(): void {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage", error);
  }
}