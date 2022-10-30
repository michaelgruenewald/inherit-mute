browser.tabs.onCreated.addListener(async (tab) => {
    if (tab.openerTabId) {
        const { muted } = (await browser.tabs.get(tab.openerTabId)).mutedInfo;
        browser.tabs.update(tab.id, { muted });
    }
});
