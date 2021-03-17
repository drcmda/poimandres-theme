const italics = {
  colors: {
    brightYellow: '#fffac2',
    brightMint: '#5DE4B7',
    lowerMint: '#4fb391',
    blueishGreen: '#42675A',

    lowerBlue: '#89ddff',
    lightBlue: '#ADD7FF',
    desaturatedBlue: '#91B4D5',
    bluishGrayBrighter: '#7390AA',

    hotRed: '#e0678d',
    pink: '#FCC5E9',
    brighterPink: '#FAE4FC',
    gray: '#a6accd',

    white: '#ffffff',
    offWhite: '#e4f0fb',
    bluishGray: '#506477',
    focus: '#303340',
    
    bg: '#1b1e28',
    selection: '#717cb418',
    transparent: '#00000000',
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
      "activityBarBadge.background": "${colors.focus}",
      "activityBarBadge.foreground": "${colors.offWhite}",
      "badge.background": "${colors.focus}",
      "badge.foreground": "${colors.offWhite}",
      "button.background": "${colors.focus}",
      "diffEditor.insertedTextBackground": "${colors.bluishGray}15",
      "diffEditor.removedTextBackground": "${colors.hotRed}20",
      "dropdown.background": "${colors.bg}",
      "dropdown.border": "${colors.white}10",
      "editor.background": "${colors.bg}",
      "editor.findMatchBackground": "${colors.lowerBlue}60",
      "editor.findMatchHighlightBackground": "${colors.lowerBlue}00",
      "editor.foreground": "${colors.gray}",
      "editor.lineHighlightBackground": "${colors.selection}",
      "editor.lineHighlightBorder": "${colors.transparent}",
      "editor.selectionBackground": "${colors.selection}",
      "editor.selectionHighlightBackground": "#53a69750",
      "editorBracketMatch.border": "${colors.offWhite}40",
      "editorCursor.foreground": "${colors.white}",
      "editorGroup.border": "#00000030",
      "editorGroupHeader.tabsBackground": "${colors.bg}",
      "editorHoverWidget.background": "${colors.bg}",
      "editorHoverWidget.border": "${colors.white}10",
      "editorIndentGuide.background": "#4e557980",
      "editorLineNumber.foreground": "#3a3f58",
      "editorLink.activeForeground": "${colors.lightBlue}",
      "editorSuggestWidget.background": "${colors.bg}",
      "editorSuggestWidget.border": "${colors.white}10",
      "editorSuggestWidget.foreground": "${colors.gray}",
      "editorSuggestWidget.highlightForeground": "${colors.brightMint}",
      "editorSuggestWidget.selectedBackground": "#00000050",
      "editorWidget.background": "${colors.bg}",
      "editor.findRangeHighlightBackground": "#3a3d4166",
      "editor.focusedStackFrameHighlightBackground": "#7abd7a4d",
      "editor.foldBackground": "#717cb40b",
      "editor.hoverHighlightBackground": "#264f7840",
      "editor.inactiveSelectionBackground": "${colors.selection}",
      "editor.linkedEditingBackground": "${colors.hotRed}4d",
      "editor.rangeHighlightBackground": "${colors.white}0b",
      "editor.snippetFinalTabstopHighlightBorder": "#525252",
      "editor.snippetTabstopHighlightBackground": "#7c7c7c4d",
      "editor.stackFrameHighlightBackground": "#ffff0033",
      "editor.symbolHighlightBackground": "${colors.lowerBlue}60",
      "editor.wordHighlightBackground": "#575757b8",
      "editor.wordHighlightStrongBackground": "#004972b8",
      "editorBracketMatch.background": "${colors.transparent}",
      "editorCodeLens.foreground": "#999999",
      "editorError.foreground": "${colors.hotRed}",
      "editorGroup.dropBackground": "#53595d80",
      "editorGroupHeader.noTabsBackground": "${colors.bg}",
      "editorGutter.addedBackground": "${colors.lowerMint}",
      "editorGutter.background": "${colors.bg}",
      "editorGutter.commentRangeForeground": "${colors.gray}",
      "editorGutter.deletedBackground": "${colors.hotRed}",
      "editorGutter.foldingControlForeground": "${colors.gray}",
      "editorGutter.modifiedBackground": "${colors.lowerBlue}",
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
      "editorOverviewRuler.addedForeground": "${colors.lowerMint}99",
      "editorOverviewRuler.border": "${colors.transparent}",
      "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
      "editorOverviewRuler.commonContentForeground": "#60606066",
      "editorOverviewRuler.currentContentForeground": "#40c8ae80",
      "editorOverviewRuler.deletedForeground": "${colors.hotRed}99",
      "editorOverviewRuler.errorForeground": "${colors.hotRed}b3",
      "editorOverviewRuler.findMatchForeground": "#d186167e",
      "editorOverviewRuler.incomingContentForeground": "#40a6ff80",
      "editorOverviewRuler.infoForeground": "${colors.lightBlue}",
      "editorOverviewRuler.modifiedForeground": "${colors.lowerBlue}99",
      "editorOverviewRuler.rangeHighlightForeground": "#007acc99",
      "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.warningForeground": "${colors.brightYellow}",
      "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
      "editorPane.background": "${colors.bg}",
      "editorRuler.foreground": "${colors.offWhite}10",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.foreground": "${colors.brightYellow}",
      "editorWhitespace.foreground": "#e3e4e229",
      "editorWidget.border": "${colors.gray}",
      "editorWidget.foreground": "${colors.gray}",
      "extensionButton.prominentBackground": "${colors.focus}90",
      "extensionButton.prominentHoverBackground": "${colors.focus}",
      "focusBorder": "${colors.transparent}",
      "input.background": "${colors.white}05",
      "input.border": "${colors.white}10",
      "input.foreground": "${colors.offWhite}",
      "input.placeholderForeground": "${colors.gray}60",
      "inputValidation.errorBorder": "${colors.hotRed}",
      "inputValidation.errorForeground": "${colors.hotRed}",
      "inputValidation.infoBorder": "${colors.lowerBlue}",
      "inputValidation.warningBorder": "${colors.brightYellow}",
      "list.activeSelectionBackground": "${colors.transparent}",
      "list.activeSelectionForeground": "${colors.lightBlue}",
      "list.errorForeground": "${colors.hotRed}",
      "list.focusBackground": "${colors.gray}10",
      "list.focusForeground": "${colors.gray}",
      "list.highlightForeground": "${colors.lowerMint}",
      "list.hoverBackground": "${colors.transparent}",
      "list.hoverForeground": "${colors.offWhite}",
      "list.inactiveSelectionBackground": "${colors.transparent}",
      "list.inactiveSelectionForeground": "${colors.lightBlue}",
      "notifications.background": "${colors.bg}",
      "notifications.foreground": "${colors.offWhite}",
      "panel.border": "#00000030",
      "panelTitle.activeForeground": "${colors.gray}",
      "peekView.border": "#00000030",
      "peekViewEditor.background": "${colors.gray}05",
      "peekViewEditorGutter.background": "${colors.gray}05",
      "peekViewResult.background": "${colors.gray}05",
      "peekViewTitle.background": "${colors.gray}05",
      "peekViewTitleDescription.foreground": "${colors.gray}60",
      "scrollbar.shadow": "${colors.transparent}",
      "scrollbarSlider.activeBackground": "${colors.gray}25",
      "scrollbarSlider.background": "#00000050",
      "scrollbarSlider.hoverBackground": "${colors.gray}25",
      "selection.background": "${colors.gray}",
      "sideBar.background": "${colors.bg}",
      "sideBar.foreground": "${colors.gray}",
      "sideBarSectionHeader.background": "${colors.bg}",
      "sideBarTitle.foreground": "${colors.gray}",
      "statusBar.background": "${colors.bg}",
      "statusBar.foreground": "${colors.gray}",
      "statusBar.noFolderBackground": "${colors.bg}",
      "tab.activeBackground": "${colors.bg}",
      "tab.activeForeground": "${colors.lightBlue}",
      "tab.border": "${colors.transparent}",
      "tab.inactiveBackground": "${colors.bg}",
      "tab.inactiveForeground": "${colors.gray}",
      "tab.unfocusedActiveForeground": "${colors.gray}",
      "terminal.ansiBlack": "${colors.bg}",
      "terminal.ansiBlue": "${colors.lowerBlue}",
      "terminal.ansiBrightBlack": "${colors.gray}",
      "terminal.ansiBrightBlue": "${colors.lightBlue}",
      "terminal.ansiBrightCyan": "${colors.lightBlue}",
      "terminal.ansiBrightGreen": "${colors.brightMint}",
      "terminal.ansiBrightMagenta": "${colors.pink}",
      "terminal.ansiBrightRed": "${colors.hotRed}",
      "terminal.ansiBrightWhite": "${colors.white}",
      "terminal.ansiBrightYellow": "${colors.brightYellow}",
      "terminal.ansiCyan": "${colors.lowerBlue}",
      "terminal.ansiGreen": "${colors.brightMint}",
      "terminal.ansiMagenta": "${colors.pink}",
      "terminal.ansiRed": "${colors.hotRed}",
      "terminal.ansiWhite": "${colors.white}",
      "terminal.ansiYellow": "${colors.brightYellow}",
      "textLink.activeForeground": "${colors.lightBlue}",
      "textLink.foreground": "${colors.lightBlue}",
      "titleBar.activeBackground": "${colors.bg}",
      "titleBar.activeForeground": "${colors.gray}",
      "titleBar.inactiveBackground": "${colors.bg}",
      "titleBar.inactiveForeground": "${colors.gray}",
      "tree.indentGuidesStroke": "${colors.transparent}",
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
      "debugExceptionWidget.background": "${colors.hotRed}",
      "debugExceptionWidget.border": "${colors.hotRed}",
      "debugIcon.breakpointCurrentStackframeForeground": "${colors.brightYellow}",
      "debugIcon.breakpointDisabledForeground": "#848484",
      "debugIcon.breakpointForeground": "${colors.hotRed}",
      "debugIcon.breakpointStackframeForeground": "${colors.lowerMint}",
      "debugIcon.breakpointUnverifiedForeground": "#848484",
      "debugIcon.continueForeground": "${colors.lightBlue}",
      "debugIcon.disconnectForeground": "${colors.hotRed}",
      "debugIcon.pauseForeground": "${colors.lightBlue}",
      "debugIcon.restartForeground": "${colors.lowerMint}",
      "debugIcon.startForeground": "${colors.lowerMint}",
      "debugIcon.stepBackForeground": "${colors.lightBlue}",
      "debugIcon.stepIntoForeground": "${colors.lightBlue}",
      "debugIcon.stepOutForeground": "${colors.lightBlue}",
      "debugIcon.stepOverForeground": "${colors.lightBlue}",
      "debugIcon.stopForeground": "${colors.hotRed}",
      "debugTokenExpression.boolean": "${colors.lowerBlue}",
      "debugTokenExpression.error": "${colors.hotRed}",
      "debugTokenExpression.name": "${colors.pink}",
      "debugTokenExpression.number": "${colors.lowerMint}",
      "debugTokenExpression.string": "${colors.lowerBlue}",
      "debugTokenExpression.value": "${colors.gray}99",
      "debugToolBar.background": "#333333",
      "debugView.exceptionLabelBackground": "${colors.hotRed}",
      "debugView.exceptionLabelForeground": "${colors.offWhite}",
      "debugView.stateLabelBackground": "#88888844",
      "debugView.stateLabelForeground": "${colors.gray}",
      "debugView.valueChangedHighlight": "${colors.lowerBlue}",
      "descriptionForeground": "${colors.gray}b3",
      "diffEditor.diagonalFill": "${colors.gray}33",
      "dropdown.foreground": "#f0f0f0",    
      "errorForeground": "${colors.hotRed}",
      "extensionBadge.remoteBackground": "${colors.focus}",
      "extensionBadge.remoteForeground": "${colors.offWhite}",
      "extensionButton.prominentForeground": "${colors.white}",
      "extensionIcon.starForeground": "${colors.brightYellow}",
      "foreground": "${colors.gray}",
      "gitDecoration.addedResourceForeground": "${colors.lowerMint}",
      "gitDecoration.conflictingResourceForeground": "${colors.hotRed}",
      "gitDecoration.deletedResourceForeground": "${colors.hotRed}",
      "gitDecoration.ignoredResourceForeground": "${colors.gray}",
      "gitDecoration.modifiedResourceForeground": "${colors.bluishGrayBrighter}",
      "gitDecoration.renamedResourceForeground": "${colors.brightMint}",
      "gitDecoration.stageDeletedResourceForeground": "${colors.hotRed}",
      "gitDecoration.stageModifiedResourceForeground": "${colors.bluishGrayBrighter}",
      "gitDecoration.submoduleResourceForeground": "${colors.lowerBlue}",
      "gitDecoration.untrackedResourceForeground": "${colors.brightMint}",
      "icon.foreground": "${colors.gray}",
      "imagePreview.border": "${colors.focus}",
      "inputOption.activeBackground": "${colors.transparent}",
      "inputOption.activeBorder": "#007acc00",
      "inputOption.activeForeground": "${colors.white}",
      "inputValidation.errorBackground": "${colors.bg}",
      "inputValidation.infoBackground": "#063b49",
      "inputValidation.warningBackground": "#352a05",
      "list.deemphasizedForeground": "#40404a",
      "list.dropBackground": "#062f4a",
      "list.filterMatchBackground": "${colors.lowerBlue}60",
      "list.focusOutline": "${colors.transparent}",
      "list.invalidItemForeground": "${colors.brightYellow}",
      "list.warningForeground": "${colors.brightYellow}",
      "listFilterWidget.background": "${colors.focus}",
      "listFilterWidget.noMatchesOutline": "${colors.hotRed}",
      "listFilterWidget.outline": "${colors.transparent}",
      "menu.background": "${colors.bg}",
      "menu.foreground": "#f0f0f0",
      "menu.selectionBackground": "${colors.transparent}",
      "menu.selectionForeground": "${colors.bluishGrayBrighter}",
      "menu.separatorBackground": "#bbbbbb",
      "menubar.selectionBackground": "${colors.selection}",
      "menubar.selectionForeground": "${colors.gray}",
      "merge.commonContentBackground": "#60606029",
      "merge.commonHeaderBackground": "#60606066",
      "merge.currentContentBackground": "#40c8ae33",
      "merge.currentHeaderBackground": "#40c8ae80",
      "merge.incomingContentBackground": "#40a6ff33",
      "merge.incomingHeaderBackground": "#40a6ff80",
      "minimap.errorHighlight": "${colors.hotRed}",
      "minimap.findMatchHighlight": "${colors.lowerBlue}",
      "minimap.selectionHighlight": "${colors.offWhite}30",
      "minimap.warningHighlight": "${colors.brightYellow}",
      "minimapGutter.addedBackground": "${colors.lowerMint}",
      "minimapGutter.deletedBackground": "${colors.hotRed}",
      "minimapGutter.modifiedBackground": "${colors.lowerBlue}",
      "minimapSlider.activeBackground": "${colors.gray}25",
      "minimapSlider.background": "${colors.gray}10",
      "minimapSlider.hoverBackground": "${colors.gray}25",
      "notebook.cellBorderColor": "${colors.bg}",
      "notebook.cellInsertionIndicator": "${colors.transparent}",
      "notebook.cellStatusBarItemHoverBackground": "${colors.white}26",
      "notebook.cellToolbarSeparator": "${colors.focus}",
      "notebook.focusedCellBorder": "${colors.transparent}",
      "notebook.focusedEditorBorder": "${colors.transparent}",
      "notebook.focusedRowBorder": "${colors.transparent}",
      "notebook.inactiveFocusedCellBorder": "${colors.transparent}",
      "notebook.outputContainerBackgroundColor": "${colors.bg}",
      "notebook.rowHoverBackground": "${colors.focus}00",
      "notebook.selectedCellBackground": "#383b3d80",
      "notebook.selectedCellBorder": "${colors.bg}",
      "notebook.symbolHighlightBackground": "${colors.white}0b",
      "notebookScrollbarSlider.activeBackground": "${colors.gray}25",
      "notebookScrollbarSlider.background": "#00000050",
      "notebookScrollbarSlider.hoverBackground": "${colors.gray}25",
      "notebookStatusErrorIcon.foreground": "${colors.hotRed}",
      "notebookStatusRunningIcon.foreground": "${colors.gray}",
      "notebookStatusSuccessIcon.foreground": "${colors.lowerMint}",
      "notificationCenterHeader.background": "#232734",
      "notificationLink.foreground": "${colors.lightBlue}",
      "notifications.border": "#232734",
      "notificationsErrorIcon.foreground": "${colors.hotRed}",
      "notificationsInfoIcon.foreground": "${colors.lightBlue}",
      "notificationsWarningIcon.foreground": "${colors.brightYellow}",
      "panel.background": "${colors.bg}",
      "panel.dropBorder": "${colors.gray}",
      "panelSection.border": "${colors.bg}",
      "panelSection.dropBackground": "#53595d80",
      "panelSectionHeader.background": "${colors.focus}",
      "panelTitle.activeBorder": "${colors.gray}",
      "panelTitle.inactiveForeground": "${colors.gray}99",
      "peekViewEditor.matchHighlightBackground": "${colors.focus}",
      "peekViewResult.fileForeground": "${colors.white}",
      "peekViewResult.lineForeground": "#bbbbbb",
      "peekViewResult.matchHighlightBackground": "${colors.focus}",
      "peekViewResult.selectionBackground": "${colors.selection}",
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
      "sash.hoverBorder": "${colors.transparent}",
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
      "settings.focusedRowBackground": "${colors.transparent}",
      "settings.headerForeground": "#e7e7e7",
      "settings.modifiedItemIndicator": "${colors.lowerBlue}",
      "settings.numberInputBackground": "${colors.white}05",
      "settings.numberInputBorder": "${colors.white}10",
      "settings.numberInputForeground": "${colors.offWhite}",
      "settings.textInputBackground": "${colors.white}05",
      "settings.textInputBorder": "${colors.white}10",
      "settings.textInputForeground": "${colors.offWhite}",
      "sideBar.dropBackground": "#53595d80",
      "sideBarSectionHeader.foreground": "${colors.gray}",
      "statusBar.debuggingBackground": "${colors.lowerMint}",
      "statusBar.debuggingForeground": "${colors.white}",
      "statusBar.noFolderForeground": "${colors.gray}",
      "statusBarItem.activeBackground": "${colors.white}2e",
      "statusBarItem.errorBackground": "${colors.hotRed}",
      "statusBarItem.errorForeground": "${colors.white}",
      "statusBarItem.hoverBackground": "${colors.white}1f",
      "statusBarItem.prominentBackground": "#00000080",
      "statusBarItem.prominentForeground": "${colors.gray}",
      "statusBarItem.prominentHoverBackground": "#0000004d",
      "statusBarItem.remoteBackground": "${colors.focus}",
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
      "tab.unfocusedInactiveForeground": "${colors.gray}80",
      "tab.unfocusedInactiveModifiedBorder": "${colors.lowerBlue}40",
      "terminal.border": "${colors.transparent}",
      "terminal.foreground": "${colors.gray}",
      "terminal.selectionBackground": "${colors.selection}",
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
      "welcomePage.tileHoverBackground": "${colors.focus}"
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
          "foreground": "${colors.lightBlue}",
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
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["string.other.link.description.title.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["constant.other.reference.link.markdown"],
        "settings": {
          "foreground": "${colors.lightBlue}"
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
          "foreground": "${colors.pink}"
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
          "foreground": "${colors.lightBlue}",
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
          "foreground": "${colors.lightBlue}",
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

function svg({ colors }) {
  const circle = (color, i) => `
    <circle
      r="4"
      cy="${Math.ceil((i + 1) / 4) * 10}"
      cx="${((i % 4) + 1) * 10}"
      fill="${color}"
    />`
  return `
  <svg width="200" height="250" viewBox="0 0 50 ${
    Math.ceil((Object.keys(colors).length + 1) / 4) * 12
  }" xmlns="http://www.w3.org/2000/svg">
    ${Object.values(colors).map(circle).join('')}
  </svg>
  `
}

module.exports.schema = schema
module.exports.italics = italics
module.exports.noitalics = noitalics
module.exports.svg = svg
