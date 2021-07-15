import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

let mainWindow: BrowserWindow | null;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow() {
	mainWindow = new BrowserWindow({
		icon: path.join(process.resourcesPath, 'assets/favicon.png'),
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	});

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	// Remove the menu bar
	// mainWindow.removeMenu();

	// Maximize the window after opened
	// mainWindow.maximize();

	// Open developer tools
	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

async function registerListeners() {
	/**
	 * This comes from bridge integration, check bridge.ts
	 */
	ipcMain.on('message', (_, message) => {
		console.log(message);
	});
}

// Actions when the app is opened
app
	.on('ready', createWindow)
	.whenReady()
	.then(registerListeners)
	.catch(e => console.error(e));

// Apps in MacOS generally stay open even if all windows are closed
// If the OS is not MacOS, quit app
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// If there are no windows opened, create a new one
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
