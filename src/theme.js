const base = {
  colors: {
    brightYellow: '#fffac2',
    brightMint: '#5DE4c7',
    lowerMint: '#5fb3a1',
    blueishGreen: '#42675A',

    lowerBlue: '#89ddff',
    lightBlue: '#ADD7FF',
    desaturatedBlue: '#91B4D5',
    bluishGrayBrighter: '#7390AA',

    hotRed: '#d0679d',
    pink: '#f087bd',
    gray: '#a6accd',

    darkerGray: '#767c9d',
    bluishGray: '#506477',
    focus: '#303340',
    bg: '#1b1e28',

    offWhite: '#e4f0fb',
    selection: '#717cb425',

    white: '#ffffff',
    black: '#000000',
    transparent: '#00000000',
  },
  styles: {
    fontStyle: 'italic',
  },
}

const noitalics = { ...base, styles: { ...base.styles, fontStyle: '' } }

const storm = {
  ...base,
  colors: {
    ...base.colors,
    darkerGray: '#868cad',
    bluishGray: '#607487',
    focus: '#404350',
    bg: '#252b37',
    selection: '#818cc425',
    black: '#101010',
  },
}

const stormNoitalics = {
  ...base,
  colors: { ...storm.colors },
  styles: { ...base.styles, fontStyle: '' },
}

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
      "editor.findMatchBackground": "${colors.lightBlue}40",
      "editor.findMatchBorder": "${colors.lightBlue}",
      "editor.findMatchHighlightBackground": "${colors.lightBlue}40",
      "editor.foreground": "${colors.gray}",
      "editor.lineHighlightBackground": "${colors.selection}",
      "editor.lineHighlightBorder": "${colors.transparent}",
      "editor.selectionBackground": "${colors.selection}",
      "editor.selectionHighlightBackground": "${colors.transparent}",
      "editor.selectionHighlightBorder": "${colors.lightBlue}80",
      "editor.wordHighlightBackground": "${colors.lightBlue}20",
      "editor.wordHighlightStrongBackground": "${colors.lightBlue}40",
      "editorBracketMatch.border": "${colors.offWhite}40",
      "editorCursor.foreground": "${colors.gray}",
      "editorGroup.border": "${colors.black}30",
      "editorGroupHeader.tabsBackground": "${colors.bg}",
      "editorHoverWidget.background": "${colors.bg}",
      "editorHoverWidget.border": "${colors.white}10",
      "editorIndentGuide.background": "${colors.focus}",
      "editorLineNumber.foreground": "${colors.darkerGray}50",
      "editorLink.activeForeground": "${colors.lightBlue}",
      "editorSuggestWidget.background": "${colors.bg}",
      "editorSuggestWidget.border": "${colors.white}10",
      "editorSuggestWidget.foreground": "${colors.gray}",
      "editorSuggestWidget.highlightForeground": "${colors.brightMint}",
      "editorSuggestWidget.selectedBackground": "${colors.black}50",
      "editorWidget.background": "${colors.bg}",
      "editor.findRangeHighlightBackground": "${colors.lightBlue}40",
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
      "editorBracketMatch.background": "${colors.transparent}",
      "editorCodeLens.foreground": "${colors.gray}",
      "editorError.foreground": "${colors.hotRed}",
      "editorGroup.dropBackground": "${colors.bluishGrayBrighter}80",
      "editorGroupHeader.noTabsBackground": "${colors.bg}",
      "editorGutter.background": "${colors.bg}",
      "editorGutter.commentRangeForeground": "${colors.gray}",
      "editorGutter.foldingControlForeground": "${colors.gray}",
      "editorGutter.addedBackground": "${colors.lowerMint}40",
      "editorGutter.deletedBackground": "${colors.hotRed}40",
      "editorGutter.modifiedBackground": "${colors.lightBlue}20",
      "editorHint.foreground": "${colors.bluishGrayBrighter}b3",
      "editorHoverWidget.foreground": "${colors.gray}",
      "editorHoverWidget.statusBarBackground": "#202430",
      "editorIndentGuide.activeBackground": "#e3e4e229",
      "editorInfo.foreground": "${colors.lightBlue}",
      "editorInlineHint.background": "${colors.gray}",
      "editorInlineHint.foreground": "${colors.bg}",
      "editorLightBulb.foreground": "${colors.brightYellow}",
      "editorLightBulbAutoFix.foreground": "${colors.lightBlue}",
      "editorLineNumber.activeForeground": "${colors.gray}",
      "editorMarkerNavigation.background": "#2d2d30",
      "editorMarkerNavigationError.background": "${colors.hotRed}",
      "editorMarkerNavigationInfo.background": "${colors.lightBlue}",
      "editorMarkerNavigationWarning.background": "${colors.brightYellow}",
      "editorOverviewRuler.addedForeground": "${colors.lowerMint}99",
      "editorOverviewRuler.border": "${colors.transparent}",
      "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
      "editorOverviewRuler.commonContentForeground": "${colors.gray}66",
      "editorOverviewRuler.currentContentForeground": "${colors.lowerMint}80",
      "editorOverviewRuler.deletedForeground": "${colors.hotRed}99",
      "editorOverviewRuler.errorForeground": "${colors.hotRed}b3",
      "editorOverviewRuler.findMatchForeground": "${colors.offWhite}20",
      "editorOverviewRuler.incomingContentForeground": "${colors.lowerBlue}80",
      "editorOverviewRuler.infoForeground": "${colors.lightBlue}",
      "editorOverviewRuler.modifiedForeground": "${colors.lowerBlue}99",
      "editorOverviewRuler.rangeHighlightForeground": "${colors.lowerBlue}99",
      "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.warningForeground": "${colors.brightYellow}",
      "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.wordHighlightStrongForeground": "${colors.lowerBlue}cc",
      "editorPane.background": "${colors.bg}",
      "editorRuler.foreground": "${colors.offWhite}10",
      "editorUnnecessaryCode.opacity": "${colors.black}aa",
      "editorWarning.foreground": "${colors.brightYellow}",
      "editorWhitespace.foreground": "${colors.focus}",
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
      "notifications.background": "${colors.bg}",
      "notifications.foreground": "${colors.offWhite}",
      "panel.border": "${colors.black}30",
      "panelTitle.activeForeground": "${colors.gray}",
      "peekView.border": "${colors.black}30",
      "peekViewEditor.background": "${colors.gray}05",
      "peekViewEditorGutter.background": "${colors.gray}05",
      "peekViewResult.background": "${colors.gray}05",
      "peekViewTitle.background": "${colors.gray}05",
      "peekViewTitleDescription.foreground": "${colors.gray}60",
      "scrollbar.shadow": "${colors.transparent}",
      "scrollbarSlider.activeBackground": "${colors.gray}25",
      "scrollbarSlider.background": "${colors.black}80",
      "scrollbarSlider.hoverBackground": "${colors.gray}25",
      "selection.background": "${colors.gray}",
      "sideBar.background": "${colors.bg}",
      "sideBar.foreground": "${colors.darkerGray}",
      "sideBarSectionHeader.background": "${colors.bg}",
      "sideBarTitle.foreground": "${colors.gray}",
      "statusBar.background": "${colors.bg}",
      "statusBar.foreground": "${colors.gray}",
      "statusBar.noFolderBackground": "${colors.bg}",
      "tab.activeBackground": "${colors.focus}80",
      "tab.activeForeground": "${colors.offWhite}",
      "tab.border": "${colors.transparent}",
      "tab.inactiveBackground": "${colors.bg}",
      "tab.inactiveForeground": "${colors.darkerGray}",
      "tab.unfocusedActiveForeground": "${colors.gray}",
      "tab.activeModifiedBorder": "${colors.lightBlue}",
      "tab.inactiveModifiedBorder": "${colors.lightBlue}80",
      "tab.lastPinnedBorder": "${colors.transparent}",
      "tab.unfocusedActiveBackground": "${colors.bg}",
      "tab.unfocusedActiveModifiedBorder": "${colors.lightBlue}40",
      "tab.unfocusedInactiveBackground": "${colors.bg}",
      "tab.unfocusedInactiveForeground": "${colors.gray}80",
      "tab.unfocusedInactiveModifiedBorder": "${colors.lightBlue}40",      
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
      "titleBar.inactiveForeground": "${colors.darkerGray}",
      "tree.indentGuidesStroke": "${colors.focus}",
      "widget.shadow": "${colors.black}30",
      "activityBar.activeBorder": "${colors.gray}",
      "activityBar.dropBorder": "${colors.gray}",
      "activityBar.inactiveForeground": "${colors.gray}66",
      "breadcrumb.activeSelectionForeground": "${colors.offWhite}",
      "breadcrumb.background": "${colors.transparent}",
      "breadcrumb.focusForeground": "${colors.offWhite}",
      "breadcrumb.foreground": "${colors.darkerGray}cc",
      "breadcrumbPicker.background": "${colors.bg}",
      "button.foreground": "${colors.white}",
      "button.hoverBackground": "${colors.bluishGray}50",
      "button.secondaryBackground": "${colors.gray}",
      "button.secondaryForeground": "${colors.white}",
      "button.secondaryHoverBackground": "${colors.gray}",
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
      "checkbox.foreground": "${colors.offWhite}",
      "debugConsole.errorForeground": "${colors.hotRed}",
      "debugConsole.infoForeground": "${colors.lightBlue}",
      "debugConsole.sourceForeground": "${colors.gray}",
      "debugConsole.warningForeground": "${colors.brightYellow}",
      "debugConsoleInputIcon.foreground": "${colors.gray}",
      "debugExceptionWidget.background": "${colors.hotRed}",
      "debugExceptionWidget.border": "${colors.hotRed}",
      "debugIcon.breakpointCurrentStackframeForeground": "${colors.brightYellow}",
      "debugIcon.breakpointDisabledForeground": "${colors.bluishGrayBrighter}",
      "debugIcon.breakpointForeground": "${colors.hotRed}",
      "debugIcon.breakpointStackframeForeground": "${colors.lowerMint}",
      "debugIcon.breakpointUnverifiedForeground": "${colors.bluishGrayBrighter}",
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
      "debugTokenExpression.name": "${colors.offWhite}",
      "debugTokenExpression.number": "${colors.lowerMint}",
      "debugTokenExpression.string": "${colors.lowerBlue}",
      "debugTokenExpression.value": "${colors.gray}99",
      "debugToolBar.background": "${colors.focus}",
      "debugView.exceptionLabelBackground": "${colors.hotRed}",
      "debugView.exceptionLabelForeground": "${colors.offWhite}",
      "debugView.stateLabelBackground": "${colors.focus}",
      "debugView.stateLabelForeground": "${colors.gray}",
      "debugView.valueChangedHighlight": "${colors.lowerBlue}",
      "descriptionForeground": "${colors.gray}b3",
      "diffEditor.diagonalFill": "${colors.gray}33",
      "dropdown.foreground": "${colors.offWhite}",    
      "errorForeground": "${colors.hotRed}",
      "extensionBadge.remoteBackground": "${colors.focus}",
      "extensionBadge.remoteForeground": "${colors.offWhite}",
      "extensionButton.prominentForeground": "${colors.white}",
      "extensionIcon.starForeground": "${colors.brightYellow}",
      "foreground": "${colors.gray}",
      "gitDecoration.addedResourceForeground": "${colors.lowerMint}",
      "gitDecoration.conflictingResourceForeground": "${colors.hotRed}",
      "gitDecoration.deletedResourceForeground": "${colors.hotRed}",
      "gitDecoration.ignoredResourceForeground": "${colors.darkerGray}70",
      "gitDecoration.modifiedResourceForeground": "${colors.lightBlue}",
      "gitDecoration.renamedResourceForeground": "${colors.brightMint}",
      "gitDecoration.stageDeletedResourceForeground": "${colors.hotRed}",
      "gitDecoration.stageModifiedResourceForeground": "${colors.lightBlue}",
      "gitDecoration.submoduleResourceForeground": "${colors.lowerBlue}",
      "gitDecoration.untrackedResourceForeground": "${colors.brightMint}",
      "icon.foreground": "${colors.gray}",
      "imagePreview.border": "${colors.focus}",
      "inputOption.activeBackground": "${colors.transparent}",
      "inputOption.activeBorder": "${colors.transparent}",
      "inputOption.activeForeground": "${colors.white}",
      "inputValidation.errorBackground": "${colors.bg}",
      "inputValidation.infoBackground": "${colors.bluishGray}",
      "inputValidation.warningBackground": "${colors.bluishGray}",
      "list.deemphasizedForeground": "${colors.darkerGray}",
      "list.dropBackground": "${colors.bluishGray}",
      "list.filterMatchBackground": "${colors.lowerBlue}60",
      "list.focusOutline": "${colors.transparent}",
      "list.invalidItemForeground": "${colors.brightYellow}",
      "list.warningForeground": "${colors.brightYellow}",
      "listFilterWidget.background": "${colors.focus}",
      "listFilterWidget.noMatchesOutline": "${colors.hotRed}",
      "listFilterWidget.outline": "${colors.transparent}",
      "list.activeSelectionBackground": "${colors.focus}80",
      "list.activeSelectionForeground": "${colors.offWhite}",
      "list.errorForeground": "${colors.hotRed}",
      "list.focusBackground": "${colors.focus}80",
      "list.focusForeground": "${colors.gray}",
      "list.highlightForeground": "${colors.lowerMint}",
      "list.hoverBackground": "${colors.focus}80",
      "list.hoverForeground": "${colors.offWhite}",
      "list.inactiveSelectionBackground": "${colors.focus}80",
      "list.inactiveSelectionForeground": "${colors.offWhite}",
      "menu.background": "${colors.bg}",
      "menu.foreground": "${colors.offWhite}",
      "menu.selectionBackground": "${colors.focus}",
      "menu.selectionForeground": "${colors.bluishGrayBrighter}",
      "menu.separatorBackground": "${colors.darkerGray}",
      "menubar.selectionBackground": "${colors.selection}",
      "menubar.selectionForeground": "${colors.gray}",
      "merge.commonContentBackground": "${colors.gray}29",
      "merge.commonHeaderBackground": "${colors.gray}66",
      "merge.currentContentBackground": "${colors.lowerMint}33",
      "merge.currentHeaderBackground": "${colors.lowerMint}80",
      "merge.incomingContentBackground": "${colors.lowerBlue}33",
      "merge.incomingHeaderBackground": "${colors.lowerBlue}80",
      "minimap.errorHighlight": "${colors.hotRed}",
      "minimap.findMatchHighlight": "${colors.lightBlue}",
      "minimap.selectionHighlight": "${colors.offWhite}40",
      "minimap.warningHighlight": "${colors.brightYellow}",
      "minimapGutter.addedBackground": "${colors.lowerMint}80",
      "minimapGutter.deletedBackground": "${colors.hotRed}80",
      "minimapGutter.modifiedBackground": "${colors.lightBlue}80",
      "minimapSlider.activeBackground": "${colors.gray}30",
      "minimapSlider.background": "${colors.gray}20",
      "minimapSlider.hoverBackground": "${colors.gray}30",
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
      "notebook.selectedCellBackground": "${colors.focus}",
      "notebook.selectedCellBorder": "${colors.bg}",
      "notebook.symbolHighlightBackground": "${colors.white}0b",
      "notebookScrollbarSlider.activeBackground": "${colors.gray}25",
      "notebookScrollbarSlider.background": "${colors.black}50",
      "notebookScrollbarSlider.hoverBackground": "${colors.gray}25",
      "notebookStatusErrorIcon.foreground": "${colors.hotRed}",
      "notebookStatusRunningIcon.foreground": "${colors.gray}",
      "notebookStatusSuccessIcon.foreground": "${colors.lowerMint}",
      "notificationCenterHeader.background": "${colors.focus}",
      "notificationLink.foreground": "${colors.lightBlue}",
      "notifications.border": "${colors.focus}",
      "notificationsErrorIcon.foreground": "${colors.hotRed}",
      "notificationsInfoIcon.foreground": "${colors.lightBlue}",
      "notificationsWarningIcon.foreground": "${colors.brightYellow}",
      "panel.background": "${colors.bg}",
      "panel.dropBorder": "${colors.gray}",
      "panelSection.border": "${colors.bg}",
      "panelSection.dropBackground": "${colors.bluishGrayBrighter}80",
      "panelSectionHeader.background": "${colors.focus}",
      "panelTitle.activeBorder": "${colors.gray}",
      "panelTitle.inactiveForeground": "${colors.gray}99",
      "peekViewEditor.matchHighlightBackground": "${colors.focus}",
      "peekViewResult.fileForeground": "${colors.white}",
      "peekViewResult.lineForeground": "${colors.gray}",
      "peekViewResult.matchHighlightBackground": "${colors.focus}",
      "peekViewResult.selectionBackground": "${colors.selection}",
      "peekViewResult.selectionForeground": "${colors.white}",
      "peekViewTitleLabel.foreground": "${colors.white}",
      "pickerGroup.border": "${colors.gray}",
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
      "scm.providerBorder": "${colors.offWhite}10",
      "searchEditor.findMatchBackground": "${colors.lightBlue}50",
      "searchEditor.textInputBorder": "${colors.white}10",
      "settings.checkboxBackground": "${colors.bg}",
      "settings.checkboxBorder": "${colors.white}10",
      "settings.checkboxForeground": "${colors.offWhite}",
      "settings.dropdownBackground": "${colors.bg}",
      "settings.dropdownBorder": "${colors.white}10",
      "settings.dropdownForeground": "${colors.offWhite}",
      "settings.dropdownListBorder": "${colors.offWhite}10",
      "settings.focusedRowBackground": "${colors.transparent}",
      "settings.headerForeground": "${colors.offWhite}",
      "settings.modifiedItemIndicator": "${colors.lightBlue}",
      "settings.numberInputBackground": "${colors.white}05",
      "settings.numberInputBorder": "${colors.white}10",
      "settings.numberInputForeground": "${colors.offWhite}",
      "settings.textInputBackground": "${colors.white}05",
      "settings.textInputBorder": "${colors.white}10",
      "settings.textInputForeground": "${colors.offWhite}",
      "sideBar.dropBackground": "${colors.bluishGrayBrighter}80",
      "sideBarSectionHeader.foreground": "${colors.gray}",
      "statusBar.debuggingBackground": "${colors.focus}",
      "statusBar.debuggingForeground": "${colors.white}",
      "statusBar.noFolderForeground": "${colors.gray}",
      "statusBarItem.activeBackground": "${colors.white}2e",
      "statusBarItem.errorBackground": "${colors.hotRed}",
      "statusBarItem.errorForeground": "${colors.white}",
      "statusBarItem.hoverBackground": "${colors.white}1f",
      "statusBarItem.prominentBackground": "${colors.black}80",
      "statusBarItem.prominentForeground": "${colors.gray}",
      "statusBarItem.prominentHoverBackground": "${colors.black}4d",
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
      "terminal.border": "${colors.transparent}",
      "terminal.foreground": "${colors.gray}",
      "terminal.selectionBackground": "${colors.selection}",
      "terminalCommandDecoration.errorBackground": "${colors.hotRed}",
      "terminalCommandDecoration.successBackground": "${colors.brightMint}",
      "terminalCommandDecoration.defaultBackground": "${colors.darkerGray}",
      "testing.iconErrored": "${colors.hotRed}",
      "testing.iconFailed": "${colors.hotRed}",
      "testing.iconPassed": "${colors.brightMint}",
      "testing.iconQueued": "${colors.brightYellow}",
      "testing.iconSkipped": "${colors.bluishGrayBrighter}",
      "testing.iconUnset": "${colors.bluishGrayBrighter}",
      "testing.message.error.decorationForeground": "${colors.hotRed}",
      "testing.message.error.lineBackground": "${colors.hotRed}33",
      "testing.message.hint.decorationForeground": "${colors.bluishGrayBrighter}b3",
      "testing.message.info.decorationForeground": "${colors.lightBlue}",
      "testing.message.info.lineBackground": "${colors.lowerBlue}33",
      "testing.message.warning.decorationForeground": "${colors.brightYellow}",
      "testing.message.warning.lineBackground": "${colors.brightYellow}33",
      "testing.peekBorder": "${colors.hotRed}",
      "testing.runAction": "${colors.brightMint}",
      "textBlockQuote.background": "${colors.bluishGrayBrighter}1a",
      "textBlockQuote.border": "${colors.lowerBlue}80",
      "textCodeBlock.background": "${colors.black}50",
      "textPreformat.foreground": "${colors.offWhite}",
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
          "foreground": "${colors.darkerGray}B0",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": "meta.parameters comment.block",
        "settings": {
          "foreground": "${colors.gray}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["variable.other.constant.object", "variable.other.readwrite.alias", "meta.import variable.other.readwrite"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["variable.other", "support.type.object"],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["variable.other.object.property", "variable.other.property", "support.variable.property"],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["entity.name.function.method", "string.unquoted", "meta.object.member"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["variable - meta.import", "constant.other.placeholder", "meta.object-literal.key-meta.object.member"],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["keyword.control.flow"],
        "settings": {
          "foreground": "${colors.brightMint}c0"
        }
      },
      {
        "scope": ["keyword.operator.new", "keyword.control.new"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": [
          "variable.language.this", "storage.modifier.async", "storage.modifier", "variable.language.super"
        ],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": [         
          "support.class.error", 
          "keyword.control.trycatch", 
          "keyword.operator.expression.delete", 
          "keyword.operator.expression.void", 
          "keyword.operator.void", 
          "keyword.operator.delete",
          "constant.language.null",
          "constant.language.boolean.false",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": ["variable.parameter", "variable.other.readwrite.js", "meta.definition.variable variable.other.constant", "meta.definition.variable variable.other.readwrite"],
        "settings": {
          "foreground": "${colors.offWhite}"
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
        "scope": ["keyword.control", "keyword"],
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "scope": ["keyword.operator", "storage.type"],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["keyword.control.module", "keyword.control.import", "keyword.control.export", "keyword.control.default", "meta.import", "meta.export"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["Keyword", "Storage"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["keyword-meta.export"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["meta.brace", "punctuation", "keyword.operator.existential"],
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "scope": [
          "constant.other.color",          
          "meta.tag",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution",
          "meta.objectliteral"
        ],
        "settings": {
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["support.class.component"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["entity.name.tag", "entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "name": "Function Call",
        "scope": "variable.function, source meta.function-call entity.name.function, source meta.function-call entity.name.function, source meta.method-call entity.name.function, meta.class meta.group.braces.curly meta.function-call variable.function, meta.class meta.field.declaration meta.function-call entity.name.function, variable.function.constructor, meta.block meta.var.expr meta.function-call entity.name.function, support.function.console, meta.function-call support.function, meta.property.class variable.other.class, punctuation.definition.entity.css",
        "settings": {
          "foreground": "${colors.offWhite}d0"
        }
      },
      {
        "name": "Function/Class Name",
        "scope": "entity.name.function, meta.class entity.name.class, meta.class entity.name.type.class, meta.class meta.function-call variable.function, keyword.other.important",
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["source.cpp meta.block variable.other"],
        "settings": {
          "foreground": "${colors.lightBlue}"
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
          "support.constant",
          "constant.character",
          "constant.escape",          
          "keyword.other.unit",
          "keyword.other",
          "string",
          "constant.language",
          "constant.other.symbol",
          "constant.other.key",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
          "text.html.derivative"
        ],
        "settings": {
          "foreground": "${colors.brightMint}"
        }
      },
      {
        "scope": ["entity.other.inherited-class"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["meta.type.declaration"],
        "settings": {
          "foreground": "${colors.lightBlue}"
        }
      },
      {
        "scope": ["entity.name.type.alias"],
        "settings": {
          "foreground": "${colors.gray}"
        }
      },
      {
        "scope": ["keyword.control.as", "entity.name.type", "support.type"],
        "settings": {
          "foreground": "${colors.gray}C0"
        }
      },
      {
        "scope": [
          "entity.name",          
          "support.orther.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types"
        ],
        "settings": {
          "foreground": "${colors.desaturatedBlue}"
        }
      },
      {
        "scope": ["support.class", "support.constant", "variable.other.constant.object"],
        "settings": {
          "foreground": "${colors.lightBlue}"
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
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["variable.language"],
        "settings": {
          "foreground": "${colors.lightBlue}",
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
          "foreground": "${colors.offWhite}"
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
          "foreground": "${colors.offWhite}"
        }
      },
      {
        "scope": ["entity.name.section.markdown", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
        "settings": {
          "foreground": "${colors.offWhite}",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "meta.paragraph.markdown",
        "settings": {
          "foreground": "${colors.offWhite}d0"
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
          "foreground": "${colors.darkerGray}"
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
      },
      {
        "scope": ["source.ignore", "log.error", "log.exception"],
        "settings": {
          "foreground": "${colors.hotRed}"
        }
      },
      {
        "scope": ["log.verbose"],
        "settings": {
          "foreground": "${colors.gray}"
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
    Math.ceil(Object.keys(colors).length / 4) * 12
  }" xmlns="http://www.w3.org/2000/svg">
    ${Object.values(colors).map(circle).join('')}
  </svg>
  `
}

module.exports.schema = schema
module.exports.base = base
module.exports.noitalics = noitalics
module.exports.storm = storm
module.exports.stormNoitalics = stormNoitalics
module.exports.svg = svg
