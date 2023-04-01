
// Mock AsyncStorage module
jest.mock('@react-native-async-storage/async-storage', () => ({
	getItem: jest.fn(),
	setItem: jest.fn(),
	removeItem: jest.fn(),
}));

// Mock react-native-screens/native-stack.js
jest.mock('react-native-screens', () => ({
    enableScreens : jest.fn().mockImplementation((props) => null)
}));
