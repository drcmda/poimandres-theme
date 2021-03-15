fs = require('fs')

const italics = {
  colors: {
    bg: '#1b1e28',
    white: '#ffffff',
    offWhite: '#e4f0fb',
    gray: '#a6accd',
    lightBlue: '#ADD7FF',
    lowerBlue: '#89ddff',
    desaturatedBlue: '#91B4D5',
    brightMint: '#5DE4B7',
    lowerMint: '#4fb391',
    blueishGreen: '#42675A',
    bluishGray: '#506477',
    bluishGrayBrighter: '#7390AA',
    hotRed: '#e0678d',
    pink: '#FCC5E9',
    brighterPink: '#FAE4FC',
    brightYellow: '#fff8a1',
  },
  styles: {
    fontStyle: 'italic',
  },
}

const noitalics = { ...italics, styles: { ...italics.styles, fontStyle: '' } }

function schema({ colors, styles }) {
  return `{
    "name": "poimandres dark theme",
    "type": "dark",
    "colors": {
      "activityBar.background": "${colors.bg}",
      "activityBar.foreground": "${colors.gray}",
      "activityBarBadge.background": "${colors.bluishGray}",
      "activityBarBadge.foreground": "${colors.offWhite}",
      "badge.background": "${colors.hotRed}",
      "badge.foreground": "${colors.offWhite}",
      "button.background": "#717cb450",
      "diffEditor.insertedTextBackground": "${colors.bluishGray}15",
      "diffEditor.removedTextBackground": "${colors.hotRed}20",
      "dropdown.background": "${colors.bg}",
      "dropdown.border": "${colors.white}10",
      "editor.background": "${colors.bg}",
      "editor.findMatchBackground": "${colors.lowerBlue}60",
      "editor.findMatchHighlightBackground": "${colors.lowerBlue}60",
      "editor.foreground": "${colors.gray}",
      "editor.lineHighlightBackground": "#717cb425",
      "editor.lineHighlightBorder": "${colors.white}00",
      "editor.selectionBackground": "#717cb425",
      "editor.selectionHighlightBackground": "#53a69750",
      "editorBracketMatch.border": "${colors.blueishGreen}",
      "editorCursor.foreground": "${colors.white}",
      "editorGroup.border": "#00000030",
      "editorGroupHeader.tabsBackground": "${colors.bg}",
      "editorHoverWidget.background": "${colors.bg}",
      "editorHoverWidget.border": "${colors.white}10",
      "editorIndentGuide.background": "#4e557980",
      "editorLineNumber.foreground": "#3a3f58",
      "editorLink.activeForeground": "${colors.gray}",
      "editorSuggestWidget.background": "${colors.bg}",
      "editorSuggestWidget.border": "${colors.white}10",
      "editorSuggestWidget.foreground": "${colors.gray}",
      "editorSuggestWidget.highlightForeground": "${colors.brightMint}",
      "editorSuggestWidget.selectedBackground": "#00000050",
      "editorWidget.background": "${colors.bg}",
      "extensionButton.prominentBackground": "${colors.bluishGray}90",
      "extensionButton.prominentHoverBackground": "${colors.bluishGray}",
      "focusBorder": "${colors.white}00",
      "input.background": "${colors.white}05",
      "input.border": "${colors.white}10",
      "input.foreground": "${colors.offWhite}",
      "input.placeholderForeground": "${colors.gray}60",
      "inputValidation.errorBorder": "${colors.hotRed}",
      "inputValidation.errorForeground": "${colors.hotRed}",
      "inputValidation.infoBorder": "${colors.lowerBlue}",
      "inputValidation.warningBorder": "${colors.brightYellow}",
      "list.activeSelectionBackground": "${colors.bg}",
      "list.activeSelectionForeground": "${colors.lightBlue}",
      "list.errorForeground": "${colors.hotRed}",
      "list.focusBackground": "${colors.gray}10",
      "list.focusForeground": "${colors.gray}",
      "list.highlightForeground": "${colors.lowerMint}",
      "list.hoverBackground": "${colors.bg}",
      "list.hoverForeground": "${colors.offWhite}",
      "list.inactiveSelectionBackground": "${colors.bg}",
      "list.inactiveSelectionForeground": "${colors.lightBlue}",
      "minimap.errorHighlight": "${colors.hotRed}",
      "minimap.findMatchHighlight": "${colors.lowerBlue}",
      "notifications.background": "${colors.bg}",
      "notifications.foreground": "${colors.offWhite}",
      "panel.border": "${colors.bg}",
      "panelTitle.activeForeground": "${colors.gray}",
      "peekView.border": "#00000030",
      "peekViewEditor.background": "${colors.gray}05",
      "peekViewEditorGutter.background": "${colors.gray}05",
      "peekViewResult.background": "${colors.gray}05",
      "peekViewTitle.background": "${colors.gray}05",
      "peekViewTitleDescription.foreground": "${colors.gray}60",
      "scrollbar.shadow": "${colors.bg}00",
      "scrollbarSlider.activeBackground": "${colors.brightMint}50",
      "scrollbarSlider.background": "#00000040",
      "scrollbarSlider.hoverBackground": "#00000050",
      "selection.background": "${colors.gray}",
      "sideBar.background": "${colors.bg}",
      "sideBar.foreground": "#797d96",
      "sideBarSectionHeader.background": "${colors.bg}",
      "sideBarTitle.foreground": "${colors.gray}",
      "statusBar.background": "${colors.bg}",
      "statusBar.foreground": "#797d96",
      "statusBar.noFolderBackground": "${colors.bg}",
      "tab.activeBackground": "${colors.bg}",
      "tab.activeForeground": "${colors.lightBlue}",
      "tab.border": "#191d2880",
      "tab.inactiveBackground": "${colors.bg}",
      "tab.inactiveForeground": "#797d96",
      "tab.unfocusedActiveForeground": "${colors.gray}",
      "terminal.ansiBlack": "#797d96",
      "terminal.ansiBlue": "${colors.lowerBlue}",
      "terminal.ansiBrightBlack": "#797d96",
      "terminal.ansiBrightBlue": "${colors.lowerBlue}",
      "terminal.ansiBrightCyan": "${colors.lowerBlue}",
      "terminal.ansiBrightGreen": "${colors.bluishGray}",
      "terminal.ansiBrightMagenta": "${colors.pink}",
      "terminal.ansiBrightRed": "${colors.hotRed}",
      "terminal.ansiBrightWhite": "${colors.white}",
      "terminal.ansiBrightYellow": "${colors.brightYellow}",
      "terminal.ansiCyan": "${colors.lowerBlue}",
      "terminal.ansiGreen": "${colors.bluishGray}",
      "terminal.ansiMagenta": "${colors.pink}",
      "terminal.ansiRed": "${colors.hotRed}",
      "terminal.ansiWhite": "${colors.white}",
      "terminal.ansiYellow": "${colors.brightYellow}",
      "textLink.activeForeground": "${colors.gray}",
      "textLink.foreground": "${colors.lowerMint}",
      "titleBar.activeBackground": "#191d28",
      "titleBar.activeForeground": "#797d96",
      "titleBar.inactiveBackground": "${colors.bg}",
      "titleBar.inactiveForeground": "#797d96",
      "tree.indentGuidesStroke": "#00000000",
      "widget.shadow": "#00000030",
      "activityBar.activeBorder": "${colors.gray}",
      "activityBar.dropBorder": "${colors.gray}",
      "activityBar.inactiveForeground": "${colors.gray}66",
      "breadcrumb.activeSelectionForeground": "#e0e0e0",
      "breadcrumb.background": "${colors.bg}",
      "breadcrumb.focusForeground": "#e0e0e0",
      "breadcrumb.foreground": "${colors.gray}cc",
      "breadcrumbPicker.background": "${colors.bg}",
      "button.foreground": "${colors.white}",
      "button.hoverBackground": "#98a0c850",
      "button.secondaryBackground": "#3a3d41",
      "button.secondaryForeground": "${colors.white}",
      "button.secondaryHoverBackground": "#45494e",
      "charts.blue": "${colors.lightBlue}",
      "charts.foreground": "${colors.gray}",
      "charts.green": "${colors.brightMint}",
      "charts.lines": "${colors.gray}80",
      "charts.orange": "${colors.lowerBlue}",
      "charts.purple": "${colors.pink}",
      "charts.red": "${colors.hotRed}",
      "charts.yellow": "${colors.brightYellow}",
      "checkbox.background": "${colors.bg}",
      "checkbox.border": "${colors.white}10",
      "checkbox.foreground": "#f0f0f0",
      "debugConsole.errorForeground": "${colors.hotRed}",
      "debugConsole.infoForeground": "${colors.lightBlue}",
      "debugConsole.sourceForeground": "${colors.gray}",
      "debugConsole.warningForeground": "${colors.brightYellow}",
      "debugConsoleInputIcon.foreground": "${colors.gray}",
      "debugExceptionWidget.background": "#420b0d",
      "debugExceptionWidget.border": "${colors.hotRed}",
      "debugIcon.breakpointCurrentStackframeForeground": "${colors.brightYellow}",
      "debugIcon.breakpointDisabledForeground": "#848484",
      "debugIcon.breakpointForeground": "${colors.hotRed}",
      "debugIcon.breakpointStackframeForeground": "#89d185",
      "debugIcon.breakpointUnverifiedForeground": "#848484",
      "debugIcon.continueForeground": "${colors.lightBlue}",
      "debugIcon.disconnectForeground": "${colors.hotRed}",
      "debugIcon.pauseForeground": "${colors.lightBlue}",
      "debugIcon.restartForeground": "#89d185",
      "debugIcon.startForeground": "#89d185",
      "debugIcon.stepBackForeground": "${colors.lightBlue}",
      "debugIcon.stepIntoForeground": "${colors.lightBlue}",
      "debugIcon.stepOutForeground": "${colors.lightBlue}",
      "debugIcon.stepOverForeground": "${colors.lightBlue}",
      "debugIcon.stopForeground": "${colors.hotRed}",
      "debugTokenExpression.boolean": "${colors.lowerBlue}",
      "debugTokenExpression.error": "${colors.hotRed}",
      "debugTokenExpression.name": "${colors.pink}",
      "debugTokenExpression.number": "#b5cea8",
      "debugTokenExpression.string": "#ce9178",
      "debugTokenExpression.value": "${colors.gray}99",
      "debugToolBar.background": "#333333",
      "debugView.exceptionLabelBackground": "#6c2022",
      "debugView.exceptionLabelForeground": "${colors.gray}",
      "debugView.stateLabelBackground": "#88888844",
      "debugView.stateLabelForeground": "${colors.gray}",
      "debugView.valueChangedHighlight": "${colors.lowerBlue}",
      "descriptionForeground": "${colors.gray}b3",
      "diffEditor.diagonalFill": "${colors.gray}33",
      "dropdown.foreground": "#f0f0f0",
      "editor.findRangeHighlightBackground": "#3a3d4166",
      "editor.focusedStackFrameHighlightBackground": "#7abd7a4d",
      "editor.foldBackground": "#717cb40b",
      "editor.hoverHighlightBackground": "#264f7840",
      "editor.inactiveSelectionBackground": "#717cb413",
      "editor.linkedEditingBackground": "${colors.hotRed}4d",
      "editor.rangeHighlightBackground": "${colors.white}0b",
      "editor.snippetFinalTabstopHighlightBorder": "#525252",
      "editor.snippetTabstopHighlightBackground": "#7c7c7c4d",
      "editor.stackFrameHighlightBackground": "#ffff0033",
      "editor.symbolHighlightBackground": "${colors.lowerBlue}60",
      "editor.wordHighlightBackground": "#575757b8",
      "editor.wordHighlightStrongBackground": "#004972b8",
      "editorBracketMatch.background": "#0064001a",
      "editorCodeLens.foreground": "#999999",
      "editorError.foreground": "${colors.hotRed}",
      "editorGroup.dropBackground": "#53595d80",
      "editorGroupHeader.noTabsBackground": "${colors.bg}",
      "editorGutter.addedBackground": "#587c0c",
      "editorGutter.background": "${colors.bg}",
      "editorGutter.commentRangeForeground": "#c5c5c5",
      "editorGutter.deletedBackground": "${colors.hotRed}",
      "editorGutter.foldingControlForeground": "#c5c5c5",
      "editorGutter.modifiedBackground": "#0c7d9d",
      "editorHint.foreground": "#eeeeeeb3",
      "editorHoverWidget.foreground": "${colors.gray}",
      "editorHoverWidget.statusBarBackground": "#202430",
      "editorIndentGuide.activeBackground": "#e3e4e229",
      "editorInfo.foreground": "${colors.lightBlue}",
      "editorInlineHint.background": "${colors.gray}",
      "editorInlineHint.foreground": "${colors.bg}",
      "editorLightBulb.foreground": "${colors.brightYellow}",
      "editorLightBulbAutoFix.foreground": "${colors.lightBlue}",
      "editorLineNumber.activeForeground": "#c6c6c6",
      "editorMarkerNavigation.background": "#2d2d30",
      "editorMarkerNavigationError.background": "${colors.hotRed}",
      "editorMarkerNavigationInfo.background": "${colors.lightBlue}",
      "editorMarkerNavigationWarning.background": "${colors.brightYellow}",
      "editorOverviewRuler.addedForeground": "#587c0c99",
      "editorOverviewRuler.border": "#7f7f7f4d",
      "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
      "editorOverviewRuler.commonContentForeground": "#60606066",
      "editorOverviewRuler.currentContentForeground": "#40c8ae80",
      "editorOverviewRuler.deletedForeground": "${colors.hotRed}99",
      "editorOverviewRuler.errorForeground": "${colors.hotRed}b3",
      "editorOverviewRuler.findMatchForeground": "#d186167e",
      "editorOverviewRuler.incomingContentForeground": "#40a6ff80",
      "editorOverviewRuler.infoForeground": "${colors.lightBlue}",
      "editorOverviewRuler.modifiedForeground": "#0c7d9d99",
      "editorOverviewRuler.rangeHighlightForeground": "#007acc99",
      "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.warningForeground": "${colors.brightYellow}",
      "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
      "editorPane.background": "${colors.bg}",
      "editorRuler.foreground": "#5a5a5a",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.foreground": "${colors.brightYellow}",
      "editorWhitespace.foreground": "#e3e4e229",
      "editorWidget.border": "#454545",
      "editorWidget.foreground": "${colors.gray}",
      "errorForeground": "${colors.hotRed}",
      "extensionBadge.remoteBackground": "${colors.bluishGray}",
      "extensionBadge.remoteForeground": "${colors.offWhite}",
      "extensionButton.prominentForeground": "${colors.white}",
      "extensionIcon.starForeground": "${colors.brightYellow}",
      "foreground": "${colors.gray}",
      "gitDecoration.addedResourceForeground": "#81b88b",
      "gitDecoration.conflictingResourceForeground": "${colors.hotRed}",
      "gitDecoration.deletedResourceForeground": "${colors.hotRed}",
      "gitDecoration.ignoredResourceForeground": "#40404a",
      "gitDecoration.modifiedResourceForeground": "${colors.bluishGrayBrighter}",
      "gitDecoration.renamedResourceForeground": "${colors.brightMint}",
      "gitDecoration.stageDeletedResourceForeground": "${colors.hotRed}",
      "gitDecoration.stageModifiedResourceForeground": "${colors.bluishGrayBrighter}",
      "gitDecoration.submoduleResourceForeground": "${colors.lowerBlue}",
      "gitDecoration.untrackedResourceForeground": "${colors.brightMint}",
      "icon.foreground": "#c5c5c5",
      "imagePreview.border": "#80808059",
      "inputOption.activeBackground": "${colors.white}00",
      "inputOption.activeBorder": "#007acc00",
      "inputOption.activeForeground": "${colors.white}",
      "inputValidation.errorBackground": "#5a1d1d",
      "inputValidation.infoBackground": "#063b49",
      "inputValidation.warningBackground": "#352a05",
      "list.deemphasizedForeground": "#40404a",
      "list.dropBackground": "#062f4a",
      "list.filterMatchBackground": "${colors.lowerBlue}60",
      "list.focusOutline": "${colors.white}00",
      "list.invalidItemForeground": "#b89500",
      "list.warningForeground": "${colors.brightYellow}",
      "listFilterWidget.background": "${colors.bluishGray}",
      "listFilterWidget.noMatchesOutline": "${colors.hotRed}",
      "listFilterWidget.outline": "#00000000",
      "menu.background": "${colors.bg}",
      "menu.foreground": "#f0f0f0",
      "menu.selectionBackground": "${colors.bg}",
      "menu.selectionForeground": "${colors.bluishGrayBrighter}",
      "menu.separatorBackground": "#bbbbbb",
      "menubar.selectionBackground": "${colors.white}1a",
      "menubar.selectionForeground": "#797d96",
      "merge.commonContentBackground": "#60606029",
      "merge.commonHeaderBackground": "#60606066",
      "merge.currentContentBackground": "#40c8ae33",
      "merge.currentHeaderBackground": "#40c8ae80",
      "merge.incomingContentBackground": "#40a6ff33",
      "merge.incomingHeaderBackground": "#40a6ff80",
      "minimap.selectionHighlight": "#717cb450",
      "minimap.warningHighlight": "${colors.brightYellow}",
      "minimapGutter.addedBackground": "#587c0c",
      "minimapGutter.deletedBackground": "${colors.hotRed}",
      "minimapGutter.modifiedBackground": "#0c7d9d",
      "minimapSlider.activeBackground": "${colors.brightMint}28",
      "minimapSlider.background": "#00000020",
      "minimapSlider.hoverBackground": "#00000028",
      "notebook.cellBorderColor": "${colors.bg}",
      "notebook.cellInsertionIndicator": "${colors.white}00",
      "notebook.cellStatusBarItemHoverBackground": "${colors.white}26",
      "notebook.cellToolbarSeparator": "#80808059",
      "notebook.focusedCellBorder": "${colors.white}00",
      "notebook.focusedEditorBorder": "${colors.white}00",
      "notebook.focusedRowBorder": "${colors.white}1f",
      "notebook.inactiveFocusedCellBorder": "${colors.bg}",
      "notebook.outputContainerBackgroundColor": "${colors.bg}",
      "notebook.rowHoverBackground": "#80808012",
      "notebook.selectedCellBackground": "#383b3d80",
      "notebook.selectedCellBorder": "${colors.bg}",
      "notebook.symbolHighlightBackground": "${colors.white}0b",
      "notebookScrollbarSlider.activeBackground": "${colors.brightMint}50",
      "notebookScrollbarSlider.background": "#00000040",
      "notebookScrollbarSlider.hoverBackground": "#00000050",
      "notebookStatusErrorIcon.foreground": "${colors.hotRed}",
      "notebookStatusRunningIcon.foreground": "${colors.gray}",
      "notebookStatusSuccessIcon.foreground": "#89d185",
      "notificationCenterHeader.background": "#232734",
      "notificationLink.foreground": "${colors.lowerMint}",
      "notifications.border": "#232734",
      "notificationsErrorIcon.foreground": "${colors.hotRed}",
      "notificationsInfoIcon.foreground": "${colors.lightBlue}",
      "notificationsWarningIcon.foreground": "${colors.brightYellow}",
      "panel.background": "${colors.bg}",
      "panel.dropBorder": "${colors.gray}",
      "panelSection.border": "${colors.bg}",
      "panelSection.dropBackground": "#53595d80",
      "panelSectionHeader.background": "#80808033",
      "panelTitle.activeBorder": "${colors.gray}",
      "panelTitle.inactiveForeground": "${colors.gray}99",
      "peekViewEditor.matchHighlightBackground": "${colors.bluishGray}",
      "peekViewResult.fileForeground": "${colors.white}",
      "peekViewResult.lineForeground": "#bbbbbb",
      "peekViewResult.matchHighlightBackground": "${colors.bluishGray}",
      "peekViewResult.selectionBackground": "#3399ff33",
      "peekViewResult.selectionForeground": "${colors.white}",
      "peekViewTitleLabel.foreground": "${colors.white}",
      "pickerGroup.border": "#3f3f46",
      "pickerGroup.foreground": "${colors.lowerBlue}",
      "problemsErrorIcon.foreground": "${colors.hotRed}",
      "problemsInfoIcon.foreground": "${colors.lightBlue}",
      "problemsWarningIcon.foreground": "${colors.brightYellow}",
      "progressBar.background": "${colors.lowerBlue}",
      "quickInput.background": "${colors.bg}",
      "quickInput.foreground": "${colors.gray}",
      "quickInputList.focusBackground": "${colors.gray}10",
      "quickInputTitle.background": "${colors.white}1b",
      "sash.hoverBorder": "${colors.white}00",
      "scm.providerBorder": "#454545",
      "searchEditor.findMatchBackground": "${colors.lowerBlue}3f",
      "searchEditor.textInputBorder": "${colors.white}10",
      "settings.checkboxBackground": "${colors.bg}",
      "settings.checkboxBorder": "${colors.white}10",
      "settings.checkboxForeground": "#f0f0f0",
      "settings.dropdownBackground": "${colors.bg}",
      "settings.dropdownBorder": "${colors.white}10",
      "settings.dropdownForeground": "#f0f0f0",
      "settings.dropdownListBorder": "#454545",
      "settings.focusedRowBackground": "#80808024",
      "settings.headerForeground": "#e7e7e7",
      "settings.modifiedItemIndicator": "#0c7d9d",
      "settings.numberInputBackground": "${colors.white}05",
      "settings.numberInputBorder": "${colors.white}10",
      "settings.numberInputForeground": "${colors.offWhite}",
      "settings.textInputBackground": "${colors.white}05",
      "settings.textInputBorder": "${colors.white}10",
      "settings.textInputForeground": "${colors.offWhite}",
      "sideBar.dropBackground": "#53595d80",
      "sideBarSectionHeader.foreground": "#797d96",
      "statusBar.debuggingBackground": "${colors.lowerMint}",
      "statusBar.debuggingForeground": "${colors.white}",
      "statusBar.noFolderForeground": "#797d96",
      "statusBarItem.activeBackground": "${colors.white}2e",
      "statusBarItem.errorBackground": "${colors.hotRed}",
      "statusBarItem.errorForeground": "${colors.white}",
      "statusBarItem.hoverBackground": "${colors.white}1f",
      "statusBarItem.prominentBackground": "#00000080",
      "statusBarItem.prominentForeground": "#797d96",
      "statusBarItem.prominentHoverBackground": "#0000004d",
      "statusBarItem.remoteBackground": "${colors.bluishGray}",
      "statusBarItem.remoteForeground": "${colors.offWhite}",
      "symbolIcon.arrayForeground": "${colors.gray}",
      "symbolIcon.booleanForeground": "${colors.gray}",
      "symbolIcon.classForeground": "${colors.brightYellow}",
      "symbolIcon.colorForeground": "${colors.gray}",
      "symbolIcon.constantForeground": "${colors.gray}",
      "symbolIcon.constructorForeground": "${colors.pink}",
      "symbolIcon.enumeratorForeground": "${colors.brightYellow}",
      "symbolIcon.enumeratorMemberForeground": "${colors.lightBlue}",
      "symbolIcon.eventForeground": "${colors.brightYellow}",
      "symbolIcon.fieldForeground": "${colors.lightBlue}",
      "symbolIcon.fileForeground": "${colors.gray}",
      "symbolIcon.folderForeground": "${colors.gray}",
      "symbolIcon.functionForeground": "${colors.pink}",
      "symbolIcon.interfaceForeground": "${colors.lightBlue}",
      "symbolIcon.keyForeground": "${colors.gray}",
      "symbolIcon.keywordForeground": "${colors.gray}",
      "symbolIcon.methodForeground": "${colors.pink}",
      "symbolIcon.moduleForeground": "${colors.gray}",
      "symbolIcon.namespaceForeground": "${colors.gray}",
      "symbolIcon.nullForeground": "${colors.gray}",
      "symbolIcon.numberForeground": "${colors.gray}",
      "symbolIcon.objectForeground": "${colors.gray}",
      "symbolIcon.operatorForeground": "${colors.gray}",
      "symbolIcon.packageForeground": "${colors.gray}",
      "symbolIcon.propertyForeground": "${colors.gray}",
      "symbolIcon.referenceForeground": "${colors.gray}",
      "symbolIcon.snippetForeground": "${colors.gray}",
      "symbolIcon.stringForeground": "${colors.gray}",
      "symbolIcon.structForeground": "${colors.gray}",
      "symbolIcon.textForeground": "${colors.gray}",
      "symbolIcon.typeParameterForeground": "${colors.gray}",
      "symbolIcon.unitForeground": "${colors.gray}",
      "symbolIcon.variableForeground": "${colors.lightBlue}",
      "tab.activeModifiedBorder": "${colors.lowerBlue}",
      "tab.inactiveModifiedBorder": "${colors.lowerBlue}80",
      "tab.lastPinnedBorder": "#00000000",
      "tab.unfocusedActiveBackground": "${colors.bg}",
      "tab.unfocusedActiveModifiedBorder": "${colors.lowerBlue}80",
      "tab.unfocusedInactiveBackground": "${colors.bg}",
      "tab.unfocusedInactiveForeground": "#797d9680",
      "tab.unfocusedInactiveModifiedBorder": "${colors.lowerBlue}40",
      "terminal.border": "${colors.bg}",
      "terminal.foreground": "${colors.gray}",
      "terminal.selectionBackground": "${colors.white}40",
      "testing.iconErrored": "${colors.hotRed}",
      "testing.iconFailed": "${colors.hotRed}",
      "testing.iconPassed": "${colors.brightMint}",
      "testing.iconQueued": "${colors.brightYellow}",
      "testing.iconSkipped": "#848484",
      "testing.iconUnset": "#848484",
      "testing.message.error.decorationForeground": "${colors.hotRed}",
      "testing.message.error.lineBackground": "${colors.hotRed}33",
      "testing.message.hint.decorationForeground": "#eeeeeeb3",
      "testing.message.info.decorationForeground": "${colors.lightBlue}",
      "testing.message.info.lineBackground": "#007fff33",
      "testing.message.warning.decorationForeground": "${colors.brightYellow}",
      "testing.message.warning.lineBackground": "#ffd00033",
      "testing.peekBorder": "${colors.hotRed}",
      "testing.runAction": "${colors.brightMint}",
      "textBlockQuote.background": "#7f7f7f1a",
      "textBlockQuote.border": "#007acc80",
      "textCodeBlock.background": "#0a0a0a66",
      "textPreformat.foreground": "${colors.brightYellow}",
      "textSeparator.foreground": "${colors.white}2e",
      "tree.tableColumnsBorder": "${colors.gray}20",
      "welcomePage.progress.background": "${colors.white}05",
      "welcomePage.progress.foreground": "${colors.lowerMint}",
      "welcomePage.tileBackground": "${colors.bg}",
      "welcomePage.tileHoverBackground": "#202430"
    },
    "tokenColors": [
      {
        "scope": ["comment", "punctuation.definition.comment"],
        "settings": {
          "foreground": "${colors.bluishGray}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": "meta.parameters comment.block",
        "settings": {
          "foreground": "${colors.blueishGreen}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["variable", "string constant.other.placeholder"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["constant.other.color"],
        "settings": {
          "foreground": "${colors.white}"
        }
      },
      {
        "scope": ["invalid", "invalid.illegal"],
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": ["invalid.deprecated"],
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": ["keyword", "storage.type", "storage.modifier"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["Keyword", "Storage"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": [
          "keyword.control",
          "constant.other.color",
          "punctuation",
          "meta.tag",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution"
        ],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component",
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter"
        ],
        "settings": {
          "foreground": "${colors.pink}"
        }
      },
      {
        "scope": ["entity.name.tag", "entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
        "settings": {
          "foreground": "${colors.brighterPink}"
        }
      },
      {
        "scope": [
          "entity.name.function",
          "meta.function-call",
          "variable.function",
          "support.function",
          "keyword.other.special-method"
        ],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["source.cpp meta.block variable.other"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["variable.other.constant"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["support.other.variable", "string.other.link"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": [
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
          "variable.parameter",
          "keyword.other.unit",
          "keyword.other"
        ],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "entity.other.inherited-class",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
        ],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": [
          "entity.name",
          "support.type",
          "support.class",
          "support.orther.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types"
        ],
        "settings": {
          "foreground": "${colors.brighterPink}"
        }
      },
      {
        "scope": ["support.type"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["entity.name.module.js", "variable.import.parameter.js", "variable.other.class.js"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["variable.language"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["entity.name.method.js"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["meta.class-method.js entity.name.function.js", "variable.function.constructor"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["entity.other.attribute-name"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["text.html.basic entity.other.attribute-name.html", "text.html.basic entity.other.attribute-name"],
        "settings": {
          "foreground": "${colors.lowerMint}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["entity.other.attribute-name.class"],
        "settings": {
          "foreground": "${colors.lowerMint}"
        }
      },
      {
        "scope": ["source.sass keyword.control"],
        "settings": {
          "foreground": "${colors.blueishGreen}"
        }
      },
      {
        "scope": ["markup.inserted"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["markup.deleted"],
        "settings": {
          "foreground": "${colors.bluishGray}"
        }
      },
      {
        "scope": ["markup.changed"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["string.regexp"],
        "settings": {
          "foreground": "${colors.lowerMint}"
        }
      },
      {
        "scope": ["constant.character.escape"],
        "settings": {
          "foreground": "${colors.lowerMint}"
        }
      },
      {
        "scope": ["*url*", "*link*", "*uri*"],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": ["tag.decorator.js entity.name.tag.js", "tag.decorator.js punctuation.definition.tag.js"],
        "settings": {
          "foreground": "${colors.blueishGreen}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["source.js constant.other.object.key.js string.unquoted.label.js"],
        "settings": {
          "foreground": "${colors.lowerMint}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["source.json meta.structure.dictionary.json support.type.property-name.json"],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.bluishGrayBrighter}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.bluishGrayBrighter}"
        }
      },
      {
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["text.html.markdown", "punctuation.definition.list_item.markdown"],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["text.html.markdown markup.inline.raw.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": [
          "markdown.heading",
          "markup.heading | markup.heading entity.name",
          "markup.heading.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
          "foreground": "${colors.lowerMint}"
        }
      },
      {
        "scope": ["markup.italic"],
        "settings": {
          "foreground": "${colors.bluishGrayBrighter}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["markup.bold", "markup.bold string"],
        "settings": {
          "foreground": "${colors.bluishGrayBrighter}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "markup.bold markup.italic",
          "markup.italic markup.bold",
          "markup.quote markup.bold",
          "markup.bold markup.italic string",
          "markup.italic markup.bold string",
          "markup.quote markup.bold string"
        ],
        "settings": {
          "foreground": "${colors.bluishGrayBrighter}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": ["markup.underline"],
        "settings": {
          "foreground": "${colors.bluishGrayBrighter}",
          "fontStyle": "underline"
        }
      },
      {
        "scope": ["markup.strike"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["markup.quote punctuation.definition.blockquote.markdown"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["markup.quote"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["string.other.link.title.markdown"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["string.other.link.description.title.markdown"],
        "settings": {
          "foreground": "${colors.blueishGreen}"
        }
      },
      {
        "scope": ["constant.other.reference.link.markdown"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["markup.raw.block"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["markup.raw.block.fenced.markdown"],
        "settings": {
          "foreground": "${colors.bluishGray}50"
        }
      },
      {
        "scope": ["punctuation.definition.fenced.markdown"],
        "settings": {
          "foreground": "${colors.bluishGray}50"
        }
      },
      {
        "scope": [
          "markup.raw.block.fenced.markdown",
          "variable.language.fenced.markdown",
          "punctuation.section.class.end"
        ],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["variable.language.fenced.markdown"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["meta.separator"],
        "settings": {
          "foreground": "${colors.bluishGrayBrighter}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": ["markup.table"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": "${colors.lowerBlue}"
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": "${colors.brightYellow}"
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": "#B267E6"
        }
      },
      {
        "scope": ["entity.name.section.markdown", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
        "settings": {
          "foreground": "${colors.blueishGreen}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "meta.paragraph.markdown",
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["punctuation.definition.from-file.diff", "meta.diff.header.from-file"],
        "settings": {
          "foreground": "${colors.bluishGray}"
        }
      },
      {
        "scope": "markup.inline.raw.string.markdown",
        "settings": {
          "foreground": "${colors.bluishGrayBrighter}"
        }
      },
      {
        "scope": "meta.separator.markdown",
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": "markup.bold.markdown",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": "markup.italic.markdown",
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": [
          "beginning.punctuation.definition.list.markdown",
          "punctuation.definition.list.begin.markdown",
          "markup.list.unnumbered.markdown"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "string.other.link.description.title.markdown punctuation.definition.string.markdown",
          "meta.link.inline.markdown string.other.link.description.title.markdown",
          "string.other.link.description.title.markdown punctuation.definition.string.begin.markdown",
          "string.other.link.description.title.markdown punctuation.definition.string.end.markdown",
          "meta.image.inline.markdown string.other.link.description.title.markdown"
        ],
        "settings": {
          "foreground": "${colors.hotRed}",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "meta.link.inline.markdown string.other.link.title.markdown",
          "meta.link.reference.markdown string.other.link.title.markdown",
          "meta.link.reference.def.markdown markup.underline.link.markdown"
        ],
        "settings": {
          "foreground": "${colors.brightMint}",
          "fontStyle": "underline"
        }
      },
      {
        "scope": ["markup.underline.link.markdown", "string.other.link.description.title.markdown"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": [
          "punctuation.definition.markdown",
          "punctuation.definition.raw.markdown",
          "punctuation.definition.heading.markdown",
          "punctuation.definition.bold.markdown",
          "punctuation.definition.italic.markdown"
        ],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      }
    ]
  }
  `
}

fs.writeFile('./themes/poimandres-color-theme.json', schema(italics), (err) => err && console.log(err))
fs.writeFile('./themes/poimandres-noitalics-color-theme.json', schema(noitalics), (err) => err && console.log(err))
