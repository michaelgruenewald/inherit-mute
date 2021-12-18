browser.tabs.onCreated.addListener(async (tab) => {
    if (tab.openerTabId) {
        let opener = await browser.tabs.get(tab.openerTabId);
        if (opener.mutedInfo.muted) {
            browser.tabs.update(tab.id, { muted: true });
        }
    }
});
