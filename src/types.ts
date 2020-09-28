
export interface ExtensionConfig {}

export interface IFindInFilesArgs {
	query?: string;
	replace?: string;
	triggerSearch?: boolean;
	filesToInclude?: string;
	filesToExclude?: string;
	isRegex?: boolean;
	isCaseSensitive?: boolean;
	matchWholeWord?: boolean;
}
