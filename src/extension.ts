import { IFindInFilesArgs } from 'src/types';
import vscode, { commands, ExtensionContext, window } from 'vscode';

// export const EXTENSION_NAME = 'search';
// export let extensionConfig: ExtensionConfig;

// export class Global {
// 	static extensionContext: ExtensionContext;
// }

export function activate(extensionContext: ExtensionContext): void {
	// Global.extensionContext = extensionContext;

	commands.registerCommand('search.fileHasAllWords', async () => {
		const input = await window.showInputBox();
		if (!input) {
			return;
		}
		const words = input.split(' ');
		let regexStr = '^';
		for (const word of words) {
			regexStr += `(?=[\\s\\S\\n]*(${word}))`;
		}
		regexStr += '[\\s\\S\\n]*$';

		vscode.commands.executeCommand('workbench.action.findInFiles', {
			query: regexStr,
			isRegex: true,
			triggerSearch: true,
		} as IFindInFilesArgs);
	});
	commands.registerCommand('search.lineHasAllWords', async () => {
		const input = await window.showInputBox();
		if (!input) {
			return;
		}
		const words = input.split(' ');
		let regexStr = '^';
		for (const word of words) {
			regexStr += `(?=[\\s\\S]*(${word}))`;
		}
		regexStr += '[\\s\\S]*$';

		vscode.commands.executeCommand('workbench.action.findInFiles', {
			query: regexStr,
			isRegex: true,
			triggerSearch: true,
		} as IFindInFilesArgs);
	});

	// function onConfigChange(e: vscode.ConfigurationChangeEvent): void {
	// 	if (!e.affectsConfiguration(EXTENSION_NAME)) {
	// 		return;
	// 	}
	// 	updateConfig();
	// }

	// function updateConfig(): void {
	// 	extensionConfig = workspace.getConfiguration(EXTENSION_NAME) as any as ExtensionConfig;
	// }

	// extensionContext.subscriptions.push(workspace.onDidChangeConfiguration(onConfigChange));
}



// export function disposeEverything(): void { }
export function deactivate(): void { }
