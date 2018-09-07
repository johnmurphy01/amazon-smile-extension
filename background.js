// check the url of a tab
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log(tab.url)
    if (tab.url) {
        const amazonUrlRegex = 'amazon\\.'
        const smileUrlRegex = 'smile\\.amazon.'

        const urlIgnore = '(r.html)'
        + '|(f.html)'
        + '|(redirect.html)'
        + '|(redirect=true)'
        + '|(sa-no-redirect=)'
        + '|(/ap/)'
        + '|(/gp/dmusic/cloudplayer)'
        + '|(/gp/photos)'
        + '|(/gp/wishlist)'
        + '|(amazon.co.jp)'
        + '|(amazon.com.au)'
        + '|(amazon.com.br)'
        + '|(amazon.ca)'
        + '|(amazon.cn)'
        + '|(amazon.fr)'
        + '|(amazon.in)'
        + '|(amazon.it)'
        + '|(amazon.com.mx)'
        + '|(amazon.es)'
        + '|(aws.amazon.com)'
        + '|(aws.amazon.de)'
        + '|(aws.amazon.co.uk)'
        + '|(aws.amazon.com.au)'
        + '|(aws.amazon.com.br)'
        + '|(aws.amazon.ca)'
        + '|(aws.amazon.cn)'
        + '|(aws.amazon.fr)'
        + '|(aws.amazon.in)'
        + '|(aws.amazon.it)'
        + '|(aws.amazon.co.jp)'
        + '|(aws.amazon.com.mx)'
        + '|(aws.amazon.es)'
        + '|(read.amazon.com)'
        + '|(read.amazon.de)'
        + '|(read.amazon.co.uk)'
        + '|(read.amazon.com.au)'
        + '|(read.amazon.com.br)'
        + '|(read.amazon.ca)'
        + '|(read.amazon.cn)'
        + '|(read.amazon.fr)'
        + '|(read.amazon.in)'
        + '|(read.amazon.it)'
        + '|(read.amazon.co.jp)'
        + '|(read.amazon.com.mx)'
        + '|(read.amazon.es)'
        + '|(login.amazon.com)'
        + '|(login.amazon.de)'
        + '|(login.amazon.co.uk)'
        + '|(login.amazon.com.au)'
        + '|(login.amazon.com.br)'
        + '|(login.amazon.ca)'
        + '|(login.amazon.cn)'
        + '|(login.amazon.fr)'
        + '|(login.amazon.in)'
        + '|(login.amazon.it)'
        + '|(login.amazon.co.jp)'
        + '|(login.amazon.com.mx)'
        + '|(login.amazon.com.es)'
        + '|(payments.amazon.com)'
        + '|(payments.amazon.de)'
        + '|(payments.amazon.co.uk)'
        + '|(payments.amazon.com.au)'
        + '|(payments.amazon.com.br)'
        + '|(payments.amazon.ca)'
        + '|(payments.amazon.cn)'
        + '|(payments.amazon.fr)'
        + '|(payments.amazon.in)'
        + '|(payments.amazon.it)'
        + '|(payments.amazon.co.jp)'
        + '|(payments.amazon.com.mx)'
        + '|(payments.amazon.es)'
        + '|(amazon.com/clouddrive)'
        + '|(amazon.de/clouddrive)'
        + '|(amazon.co.uk/clouddrive)'
        + '|(amazon.com.au/clouddrive)'
        + '|(amazon.com.br/clouddrive)'
        + '|(amazon.ca/clouddrive)'
        + '|(amazon.cn/clouddrive)'
        + '|(amazon.fr/clouddrive)'
        + '|(amazon.in/clouddrive)'
        + '|(amazon.it/clouddrive)'
        + '|(amazon.co.jp/clouddrive)'
        + '|(amazon.com.mx/clouddrive)'
        + '|(amazon.es/clouddrive)'
        + '(http://)'

        try {
            const amazonPattern = new RegExp(amazonUrlRegex, 'i')
            const smilePattern = new RegExp(smileUrlRegex, 'i')

            const didMatchAmazon = tab.url.match(amazonPattern)
            const didNotMatchSmile = !tab.url.match(smilePattern)
            const didNotMatchIgnore = !tab.url.match(urlIgnore)

            // if matched amazon, did not match smile and did not match ignore list
            if (didMatchAmazon && didNotMatchSmile && didNotMatchIgnore) {
                chrome.tabs.update(tabId, {url: tab.url.replace('www.amazon.', 'smile.amazon.')})
            }
        } catch (err) {
            console.error(err)
        }
    }
})