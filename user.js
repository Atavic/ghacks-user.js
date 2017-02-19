/*
 * ==========================
 * 12BYTES.ORG CUSTOM USER.JS
 * ==========================
 * 
 * name    : 12bytes.org atomGit/ghacks-user.js
 * credit  : forked from ghacksuserjs/ghacks-user.js (https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js)
 * web     : Firefox/Gecko Configuration Guide for Privacy Freaks and Performance Buffs (http://12bytes.org/articles/tech/firefox-gecko-config-for-privacy-freaks-and-and-performance-buffs)
 * code    : https://github.com/atomGit/ghacks-user.js
 * version : 51r1 (based on Firefox v51 and ghacks user.js v51)
 * author  : 12bytes.org
*/

/*
 * =================
 * BEGIN GHACKS CODE
 * =================
*/

/******
* name: ghacks user.js
* date: 18 Feb 2017
* version 51: The [White?] House of the Rising Pants
*   "My mother was a tailor, she sewed my new blue pants"
* FF version: 51 (DESKTOP)
* note: date, version, and code names only change for a gthub release, which will be shortly after
        every Firefox stable release: https://github.com/ghacksuserjs/ghacks-user.js/releases
* authers (v52+): github
* authors (v51-): FLOTUS: Pants
          VICE PRESIDENT: earthling (birth certificate on request)
               SECRETARY: Martin Brinkmann
                 SPEAKER: Tom Hawack
                 CABINET: Just me, Conker, Rockin' Jerry, Ainatar, Parker Lewis
* url: https://github.com/ghacksuserjs/ghacks-user.js
       http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/
* required reading: http://kb.mozillazine.org/User.js_file
* README/IMPORTANT:
  <font color=#ff3333>End users of this list/file are expected to know what they are doing. These are the author's
  settings. The author does NOT expect (or indeed want) end users to just run with it as is.
  Use it as a comprehensive list, or as a template for your own.</font> Extensive links and comments
  have been added to help. Before using this user.js, if necessary, you should change, remove or
  comment out with two forward slashes any preferences you're not happy with or not sure about.
  The settings in this file (user.js) OVERWRITE the ones in your prefs (prefs.js - these are
  accessed via about:config) when FF is started. See the required reading above.
* BACKUP FIRST:
  Backup your profile first, or even just the PREFS.JS. Go to your profile directory and copy
  prefs.js, rename it (eg to prefs.js.backup). That way, if you have problems, to restore FF
  to the state it was in beforehand, close FF, delete the prefs.js, rename your backup copy of
  prefs back to prefs.js, RENAME the user.js so it doesn't overwrite everything again, then
  start FF. IF you have any problems, you can also ask in the comments at ghacks.
* PURPOSE:
  This is not a "comprehensive" list of ALL things privacy/security (otherwise it would be huge)
  It is more like a list of settings that generally differ from their defaults, and is aimed at
  improving security and privacy, at making a "quieter" FF, and at reducing fingerprinting and
  tracking, while allowing functionality. There will be trade-offs and conflicts between these.
* COMMON ISSUES:
  Some prefs will break some sites (it's inevitable). If you are having issues search for
  "WARNING:" in this document, especially the ones listed just below.
  <font color=#ff3333>This user.js uses the author's settings, so you need to check these EACH release because
  the author prefers anonymity, security, and privacy over functionality [eg being able to
  paste in Facebook, downloadable fonts, and other minor inconveniences]. You have been warned.</font>
   0202 & 0204 & 0207 & 0208: search, language and locale settings
   0903 & 0904: master password (author set his up to last 5 minutes, default is once per session)
   1007 & 1008: disabling/reducing session store saves affects recently closed tabs history
   1204: security.ssl.require_safe_negotiation
   1206: security.OCSP.require
   1208: security.cert_pinning.enforcement_level
   1209: TLS min and max
   1210: disable 1024-DH Encryption
   1211: disable SHA-1
   1212: disable SSL session tracking
   1401 & 1406: browser.display.use_document_fonts <font color=#ff3333>[author blocked fonts]</font>
   1404: default fonts <font color=#ff3333>[author changed default fonts]</font>
   1805: plugin.scan.plid.all <font color=#ff3333>[author blocked all plugins]</font>
   1807: disable auto-play of HTML5 media (may break some sites' playback)
   2025: enable/disable media types <font color=#ff3333>[author's settings, choose your own]</font>
   2201: dom.event.contextmenu.enabled
   2300's: workers/service.workers/push notifications etc may affect twitter, street view and other sites
   2402: dom.event.clipboardevents.enabled
   2404: dom.indexedDB.enabled <font color=#ff3333>[author killed indexedDB]</font>
   2415b: limit popup events
   2421: two JS preferences that cause the odd issue (commented out, not worth the performance loss)
   2507: keyboard fingerprinting (android + physical keyboard)
   2508: hardware acceleration (performance vs lots of video, also fonts render differently)
         <font color=#ff3333>[author killed hardware acceleration]</font>
   2509: dom.w3c_touch_events.enabled (you will want to change this if you use touch)
   2619: network.http.redirection-limit
   2627: various User Agent and navigator objects
   2662: browser.download.forbid_open_with
   2668: lock down allowed extension directories - breaks add-ons that do not use the default XPI dir
   2671: disable SVG
   2698: privacy.firstparty.isolate
   2705: dom.storage.enabled
* THANKS:
  Special thanks to Martin Brinkmann and the ghacks community
  Lots of websites, lots of people, too many to list but here are some excellent resources
  - https://github.com/pyllyukko/user.js
  - https://www.wilderssecurity.com/threads/firefox-lockdown.368003/
  - http://12bytes.org/articles/tech/firefoxgecko-configuration-guide-for-privacy-and-performance-buffs
  - https://www.privacy-handbuch.de/handbuch_21.htm (German)
 ******/

// START: internal custom pref to test for syntax errors (thanks earthling)
   // Yes, this next pref setting is redundant, but I like it!
   // https://en.wikipedia.org/wiki/Dead_parrot
   // https://en.wikipedia.org/wiki/Warrant_canary
user_pref("ghacks_user.js.parrot", "Oh yes, the Norwegian Blue... what's wrong with it?");

// O001: Start Firefox in private browsing (PB) mode
   // https://wiki.mozilla.org/Private_Browsing
   // user_pref("browser.privatebrowsing.autostart", true);

/*** 0100: STARTUP ***/
user_pref("ghacks_user.js.parrot", "0100 syntax error: the parrot's dead!");
// 0101: disable "slow startup" options
   // warnings, disk history, welcomes, intros, EULA, default browser check
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.laterrun.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.usedOnWindows10.introURL", "");
// 0102: set start page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
   // home = browser.startup.homepage preference
   // You can set all of this from Options>General>Startup
   // user_pref("browser.startup.page", 0);

/*** 0200: GEOLOCATION ***/
user_pref("ghacks_user.js.parrot", "0200 syntax error: the parrot's definitely deceased!");
// 0201: disable location-aware browsing
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "https://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false); // (hidden pref)
user_pref("browser.search.geoip.url", "");
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.timeout", 1);
// 0202: disable GeoIP-based search results
   // NOTE: may not be hidden if Mozilla have changed your settings due to your locale
   // https://trac.torproject.org/projects/tor/ticket/16254
user_pref("browser.search.countryCode", "US"); // (hidden pref)
user_pref("browser.search.region", "US"); // (hidden pref)
// 0203: disable using OS locale, force APP locale
user_pref("intl.locale.matchOS", false);
// 0204: set APP local
user_pref("general.useragent.locale", "en-US");
// 0206: disable geographically specific results/search engines eg: "browser.search.*.US"
   // i.e ignore all of Mozilla's multiple deals with multiple engines in multiple locales
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
// 0207: set language to match
   // WARNING: reset this to your default if you don't want English
user_pref("intl.accept_languages", "en-US, en");
// 0208: enforce US English locale regardless of the system locale
   // https://bugzilla.mozilla.org/show_bug.cgi?id=867501
user_pref("javascript.use_us_english_locale", true); // (hidden pref)

/*** 0300: QUIET FOX [PART 1]
     No auto-phoning home for anything. You can still do manual updates. It is still important
     to do updates for security reasons. If you don't auto update, make sure you do manually.
     There are many legitimate reasons to turn off AUTO updates, including hijacked monetized
     extensions, time constraints, legacy issues, and fear of breakage/bugs  ***/
user_pref("ghacks_user.js.parrot", "0300 syntax error: the parrot's not pinin' for the fjords!");
// 0301: disable browser auto update
   // Options>Advanced>Update>Never check for updates
user_pref("app.update.enabled", false);
   // Options>Advanced>Update>Use a background service to install updates
user_pref("app.update.service.enabled", false);
   // ensure update information is not suppressed
user_pref("app.update.silent", false);
   // disable background update staging
user_pref("app.update.staging.enabled", false);
// 0302: disable browser auto installing update when you do a manual check
user_pref("app.update.auto", false);
// 0303: disable search update (Options>Advanced>Update>Automatically update: search engines)
user_pref("browser.search.update", false);
// 0304: disable add-ons auto checking for new versions
user_pref("extensions.update.enabled", false);
// 0305: disable add-ons auto update
user_pref("extensions.update.autoUpdateDefault", false);
// 0306: disable add-on metadata updating
   // sends daily pings to Mozilla about extensions and recent startups
user_pref("extensions.getAddons.cache.enabled", false);
// 0307: disable auto updating of personas (themes)
user_pref("lightweightThemes.update.enabled", false);
// 0309: disable sending Flash crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// 0310: disable sending the URL of the website where a plugin crashed
user_pref("dom.ipc.plugins.reportCrashURL", false);
// 0320: disable extension discovery
   // featured extensions for displaying in Get Add-ons panel
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");
// 0330a: disable telemetry
   // https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
   // the pref (.unified) affects the behaviour of the pref (.enabled)
   // IF unified=false then .enabled controls the telemetry module
   // IF unified=true then .enabled ONLY controls whether to record extended data
   // so make sure to have both set as false
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
// 0330b: set unifiedIsOptIn to make sure telemetry respects OptIn choice and that telemetry
   // is enabled ONLY for people that opted into it, even if unified Telemetry is enabled
user_pref("toolkit.telemetry.unifiedIsOptIn", true); // (hidden pref)
// 0331: remove url of server telemetry pings are sent to
user_pref("toolkit.telemetry.server", "");
// 0332: disable archiving pings locally - irrelevant if toolkit.telemetry.unified is false
user_pref("toolkit.telemetry.archive.enabled", false);
// 0333a: disable health report
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", ""); // (hidden pref)
user_pref("datareporting.healthreport.service.enabled", false); // (hidden pref)
// 0333b: disable about:healthreport page (which connects to Mozilla for locale/css+js+json)
   // If you have disabled health reports, then this about page is useless - disable it
   // If you want to see what health data is present, then these must be set at default
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
// 0334a: disable new data submission, master kill switch (FF41+)
   // If disabled, no policy is shown or upload takes place, ever
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1195552
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// 0335: remove a telemetry clientID
  // if you haven't got one, be proactive and set it now for future proofing
user_pref("toolkit.telemetry.cachedClientID", "");
// 0336: disable "Heartbeat" (Mozilla user rating telemetry)
   // https://trac.torproject.org/projects/tor/ticket/18738
user_pref("browser.selfsupport.enabled", false); // (hidden pref)
user_pref("browser.selfsupport.url", "");
// 0340: disable experiments
   // https://wiki.mozilla.org/Telemetry/Experiments
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
// 0341: disable Mozilla permission to silently opt you into tests
user_pref("network.allow-experiments", false);
// 0350: disable crash reports
user_pref("breakpad.reportURL", "");
// 0351: disable sending of crash reports (FF44+)
user_pref("browser.tabs.crashReporting.sendReport", false);
// 0360: disable new tab tile ads & preload & marketing junk
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
// 0370: disable "Snippets" (Mozilla content shown on about:home screen)
   // https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
   // MUST use HTTPS - arbitrary content injected into this page via http opens up MiTM attacks
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
// 0373: disable "Pocket" (third party "save for later" service) & remove urls for good measure
   // NOTE: Important: Remove the pocket icon from your toolbar first
   // https://www.gnu.gl/blog/Posts/multiple-vulnerabilities-in-pocket/
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
// 0374: disable "social" integration
   // https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Social_API
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.enabled", false); // (hidden pref)
// 0375: disable "Reader View"
user_pref("reader.parse-on-load.enabled", false);
// 0376: disable FlyWeb, a set of APIs for advertising and discovering local-area web servers
   // https://wiki.mozilla.org/FlyWeb
   // http://www.ghacks.net/2016/07/26/firefox-flyweb/
user_pref("dom.flyweb.enabled", false);
// 0380: disable sync
user_pref("services.sync.enabled", false); // (hidden pref)

/*** 0400: QUIET FOX [PART 2]
     This section has security & tracking protection implications vs privacy concerns.
     These settings are geared up to make FF "quiet" & private. I am NOT advocating no protection.
     If you turn these off, then by all means please use something superior, such as uBlock Origin.
     <font color=#ff3333>IMPORTANT: This entire section is rather contentious. Safebrowsing is designed to protect
     users from malicious sites. Tracking protection is designed to lessen the impact of third
     parties on websites to reduce tracking and to speed up your browsing experience. These are
     both very good features provided by Mozilla. They do rely on third parties: Google for
     safebrowsing and Disconnect for tracking protection (someone has to provide the information).
     Additionally, SSL Error Reporting helps makes the internet more secure for everyone.
     If you do not understand the ramifications of disabling all of these, then it is advised that
     you enable them by commenting out the preferences and saving the changes, and then in
     about:config find each entry and right-click and reset the preference's value.</font> ***/
user_pref("ghacks_user.js.parrot", "0400 syntax error: the parrot's passed on!");
// 0401: DON'T disable extension blocklist, but sanitize blocklist url - SECURITY
   // It now includes updates for "revoked certificates" - security trumps privacy here
   // https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl
   // https://trac.torproject.org/projects/tor/ticket/16931
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");
// 0402: disable/enable various Kinto blocklist updates (FF50+)
   // What is Kinto?: https://wiki.mozilla.org/Firefox/Kinto#Specifications
   // As FF transitions to Kinto, the blocklists have been broken down (more could be added). These contain
   // block entries for certs to be revoked, add-ons and plugins to be disabled, and gfx environments that
   // cause problems or crashes. Here you can remove the collection name to prevent each specific list updating
user_pref("services.blocklist.update_enabled", true);
user_pref("services.blocklist.signing.enforced", true);
user_pref("services.blocklist.onecrl.collection", "certificates"); // Revoked certificates
user_pref("services.blocklist.addons.collection", "addons");
user_pref("services.blocklist.plugins.collection", ""); // I have no plugins
user_pref("services.blocklist.gfx.collection", ""); // I have gfx hw acceleration disabled
// 0410: disable safe browsing
   // I have redesigned this sub-section to differentiate between "real-time"/"user initiated"
   // data being sent to Google from all other settings such as using local blocklists/whitelists
   // and updating those lists. There SHOULD be NO privacy issues here. Even *IF* an URL was sent
   // to Google, they swear it is anonymized and only used to flag malicious sites/activity. Firefox
   // also takes measures such as striping out identifying parameters and storing safe browsing
   // cookies in a separate jar. (#Turn on browser.safebrowsing.debug to monitor this activity)
   // To use safebrowsing but not "leak" binary download info to Google, only use 0410e and 0410f
   // #Required reading: https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
   // https://wiki.mozilla.org/Security/Safe_Browsing
// 0410a: disable "Block dangerous and deceptive content" This setting is under Options>Security
   // in FF47 and under this is was titled "Block reported web forgeries"
   // this covers deceptive sites such as phishing and social engineering
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false); // (FF50+)
// 0410b: disable "Block dangerous downloads" This setting is under Options>Security
   // in FF47 and under this was titled "Block reported attack sites"
   // this covers malware and PUPs (potentially unwanted programs)
user_pref("browser.safebrowsing.downloads.enabled", false);
   // disable "Warn me about unwanted and uncommon software" Also under Options>Security (FF48+)
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
   // yet more prefs added (FF49+)
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
// 0410c: disable Google safebrowsing downloads, updates
user_pref("browser.safebrowsing.provider.google.updateURL", ""); // update google lists
user_pref("browser.safebrowsing.provider.google.gethashURL", ""); // list hash check
user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // (FF50+)
user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // (FF50+)
// 0410d: disable mozilla safebrowsing downloads, updates
   // NOTE: These two prefs are also used for Tracking Protection (see 0420)
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", ""); // resolves hash conflicts
user_pref("browser.safebrowsing.provider.mozilla.updateURL", ""); // update FF lists
// 0410e: disable binaries NOT in local lists being checked by Google (real-time checking)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
// 0410f: disable reporting URLs
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", ""); // (FF50+)
// 0410g: show=true or hide=false the 'ignore this warning' on Safe Browsing warnings which
   // when clicked bypasses the block for that session. This is a means for admins to enforce SB
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1226490
   // tests: see APPENDIX C: TEST SITES - Section 5
   // user_pref("browser.safebrowsing.allowOverride", true);
// 0420: disable tracking protection
   // There SHOULD be NO privacy concerns here, but you are better off using an extension such as
   // uBlock Origin which is not decided by a third party (disconnect) and is far more effective
   // (when used correctly). NOTE: There are two prefs (see 0410d) shared with Safe Browsing
   // https://wiki.mozilla.org/Security/Tracking_protection
   // https://support.mozilla.org/en-US/kb/tracking-protection-firefox
user_pref("privacy.trackingprotection.enabled", false); // all windows pref (not just private)
user_pref("privacy.trackingprotection.pbmode.enabled", false); // private browsing pref
// 0421: enable more Tracking Protection choices under Options>Privacy>Use Tracking Protection
user_pref("privacy.trackingprotection.ui.enabled", true);
// 0430: disable SSL Error Reporting - PRIVACY
   // https://gecko.readthedocs.org/en/latest/browser/base/sslerrorreport/preferences.html
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
// 0440: disable Mozilla's blocklist for known Flash tracking/fingerprinting (48+)
   // If you don't have Flash, then you don't need this enabled
   // NOTE: if enabled, you will need to check what prefs (safebrowsing URLs etc) this uses to update
   // http://www.ghacks.net/2016/07/18/firefox-48-blocklist-against-plugin-fingerprinting/
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1237198
user_pref("browser.safebrowsing.blockedURIs.enabled", false);

/*** 0600: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - eg clicked on] ***/
user_pref("ghacks_user.js.parrot", "0600 syntax error: the parrot's no more!");
// 0601: disable link prefetching
   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
user_pref("network.prefetch-next", false);
// 0602: disable dns prefetching
   // http://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // (hidden pref)
// 0603: disable Seer/Necko
   // https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Necko
user_pref("network.predictor.enabled", false);
// 0603a: disable more Necko/Captive Portal
   // https://en.wikipedia.org/wiki/Captive_portal
   // https://wiki.mozilla.org/Necko/CaptivePortal
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // (FF52+?)
// 0604: disable search suggestions
user_pref("browser.search.suggest.enabled", false);
// 0605: disable link-mouseover opening connection to linked server
   // http://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
   // http://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links
user_pref("network.http.speculative-parallel-limit", 0);
// 0606: disable pings (but enforce same host in case)
   // http://kb.mozillazine.org/Browser.send_pings
   // http://kb.mozillazine.org/Browser.send_pings.require_same_host
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
// 0607: stop links launching Windows Store on Windows 8/8.1/10
   // http://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/
user_pref("network.protocol-handler.external.ms-windows-store", false);
// 0608: disable predictor / prefetching (FF48+)
user_pref("network.predictor.enable-prefetch", false);

/*** 0800: LOCATION BAR / SEARCH / AUTO SUGGESTIONS / HISTORY / FORMS etc
     Not ALL of these are strictly needed, some are for the truly paranoid, but
     included for a more comprehensive list (see comments on each one) ***/
user_pref("ghacks_user.js.parrot", "0800 syntax error: the parrot's ceased to be!");
// 0801: disable location bar using search - PRIVACY
   // don't leak typos to a search engine, give an error message instead
user_pref("keyword.enabled", false);
// 0802: disable location bar domain guessing - PRIVACY/SECURITY
   // domain guessing intercepts DNS "hostname not found errors" and resends a
   // request (eg by adding www or .com). This is inconsistent use (eg FQDNs), does not work
   // via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
   // as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
   // intend to), can leak sensitive data (eg query strings: eg Princeton attack),
   // and is a security risk (eg common typos & malicious sites set up to exploit this)
user_pref("browser.fixup.alternate.enabled", false);
// 0803: disable locationbar dropdown - PRIVACY (shoulder surfers,forensics/unattended browser)
user_pref("browser.urlbar.maxRichResults", 0);
// 0804: display all parts of the url
   // why rely on just a visual clue - helps SECURITY
user_pref("browser.urlbar.trimURLs", false);
// 0805: disable URLbar autofill -  PRIVACY (shoulder surfers, forensics/unattended browser)
   // http://kb.mozillazine.org/Inline_autocomplete
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);
// 0806: disable autocomplete - PRIVACY (shoulder surfers, forensics/unattended browser)
user_pref("browser.urlbar.autocomplete.enabled", false);
// 0808: disable history suggestions - PRIVACY (shoulder surfers, forensics/unattended browser)
user_pref("browser.urlbar.suggest.history", false);
// 0809: limit history leaks via enumeration (PER TAB: back/forward) - PRIVACY
   // This is a PER TAB session history. You still have a full history stored under all history
   // default=50, minimum=1=currentpage, 2 is the recommended minimum as some pages
   // use it as a means of referral (eg hotlinking), 4 or 6 may be more practical
user_pref("browser.sessionhistory.max_entries", 4);
// 0810: disable css querying page history - css history leak - PRIVACY
   // NOTE: this has NEVER been fully "resolved": in Mozilla/docs it is stated it's only in
   // 'certain circumstances', also see latest comments in the bug link
   // https://dbaron.org/mozilla/visited-privacy
   // https://bugzilla.mozilla.org/show_bug.cgi?id=147777
   // https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector
user_pref("layout.css.visited_links_enabled", false);
// 0811: disable displaying javascript in history URLs - SECURITY
user_pref("browser.urlbar.filter.javascript", true);
// 0812: disable search and form history
   // Under Options>Privacy> if you set Firefox to "use custom settings" there will be a
   // setting called "remember search and form history".
   // You can clear formdata on exiting Firefox (see 2803)
   // user_pref("browser.formfill.enable", false);
// 0813: disable saving form data on secure websites - PRIVACY (shoulder surfers etc)
   // For convenience & functionality, this is best left at default true.
   // You can clear formdata on exiting Firefox (see 2803)
   // user_pref("browser.formfill.saveHttpsForms", false);
// 0815: disable live search suggestions in the urlbar and toggle off the Opt-In prompt (FF41+)
   // Setting: Options>Privacy>Location Bar>Related searches from the default search engine
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
// 0816: disable browsing and download history
   // Under Options>Privacy> if you set Firefox to "use custom settings" there will be a
   // setting called "remember my browsing and download history"
   // You can clear history and downloads on exiting Firefox (see 2803)
   // user_pref("places.history.enabled", false);
// 0817: disable Jumplist (Windows7+)
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
// 0818: disable taskbar preview
user_pref("browser.taskbar.previews.enable", false);
// 0819: disable one-off searches from the addressbar (FF51+)
   // http://www.ghacks.net/2016/08/09/firefox-one-off-searches-address-bar/
user_pref("browser.urlbar.oneOffSearches", false);
// 0820: disable search reset (about:searchreset) (FF51+)
   // http://www.ghacks.net/2016/08/19/firefox-51-search-restore-feature/
user_pref("browser.search.reset.enabled", false);
user_pref("browser.search.reset.whitelist", "");

/*** 0900: PASSWORDS ***/
user_pref("ghacks_user.js.parrot", "0900 syntax error: the parrot's expired!");
// 0901: disable saving passwords
   // Options>Security>Logins>Remember logins for sites
   // NOTE: this does not clear any passwords already saved
   // user_pref("signon.rememberSignons", false);
// 0902: use a master password (recommended if you save passwords)
   // There are no preferences for this. It is all handled internally.
   // https://support.mozilla.org/en-US/kb/use-master-password-protect-stored-logins
// 0903: set how often Mozilla should ask for the master password
   // 0=the first time, 1=every time it's needed, 2=every n minutes (as per the next pref)
   // WARNING: the default is 0, author changed his settings
user_pref("security.ask_for_password", 2);
// 0904: how often in minutes Mozilla should ask for the master password (see pref above)
   // in minutes, default is 30
user_pref("security.password_lifetime", 5);
// 0905: disable auto-filling username & password form fields - SECURITY
   // can leak in cross-site forms AND be spoofed
   // http://kb.mozillazine.org/Signon.autofillForms
   // password will still be auto-filled after a user name is manually entered
user_pref("signon.autofillForms", false);
// 0906: ignore websites' autocomplete="off" (FF30+)
user_pref("signon.storeWhenAutocompleteOff", true);
// 0907: force warnings for logins on non-secure (non HTTPS) pages
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1217156
user_pref("security.insecure_password.ui.enabled", true);
// 0908: When attempting to fix an entered URL, do not fix an entered password along with it
   // i.e do not turn ~http://user:password@foo into ~http://user:password@(prefix)foo(suffix)
   // but instead ~http://user@(prefix)foo(suffix))
user_pref("browser.fixup.hide_user_pass", true);
// 0909: disabling for now (FF51+)
user_pref("signon.formlessCapture.enabled", false);

/*** 1000: CACHE ***/
user_pref("ghacks_user.js.parrot", "1000 syntax error: the parrot's gone to meet 'is maker!");
// 1001: disable disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
// 1002: disable disk caching of SSL pages
   // http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.cache.disk_cache_ssl", false);
// 1003: disable memory cache as well IF you're REALLY paranoid
   // I haven't tried it, but I'm sure you'll take a performance/traffic hit
   // user_pref("browser.cache.memory.enable", false);
// 1004: disable offline cache
user_pref("browser.cache.offline.enable", false);
// 1005: disable storing extra session data 0=all 1=http-only 2=none
   // extra session data contains contents of forms, scrollbar positions, cookies and POST data
user_pref("browser.sessionstore.privacy_level", 2);
// 1006: disable pages being stored in memory. This is not the same as memory cache.
   // Visited pages are stored in memory in such a way that they don't have to be
   // re-parsed. This improves performance when pressing back/forward.
   // For the sake of completeness, this option is listed for the truly paranoid.
   // 0=none, -1=auto (that's minus 1), or any other positive integer
   // http://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers
   // user_pref("browser.sessionhistory.max_total_viewers", 0);
// 1007: disable the Session Restore service completely
   // WARNING: This also disables the "Recently Closed Tabs" feature
   // It does not affect "Recently Closed Windows" or any history.
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.max_windows_undo", 0);
// 1008: IF you use session restore (see 1007 above), increasing the minimal interval between
   // two session save operations can help on older machines and some websites.
   // Default is 15000 (15 secs). Try 30000 (30sec), 60000 (1min) etc - your choice.
   // WARNING: This can also affect entries in the "Recently Closed Tabs" feature:
   // i.e the longer the interval the more chance a quick tab open/close won't be captured
   // this longer interval *MAY* affect history but I cannot replicate any history not recorded
   // user_pref("browser.sessionstore.interval", 30000);
// 1009: DNS cache and expiration time (default 400 and 60 - same as TBB)
   // user_pref("network.dnsCacheEntries", 400);
   // user_pref("network.dnsCacheExpiration", 60);
// 1010: disable randomized FF HTTP cache decay experiments
   // https://trac.torproject.org/projects/tor/ticket/13575
user_pref("browser.cache.frecency_experiment", -1);
// 1011: disable permissions manager from writing to disk (requires restart)
  // https://bugzilla.mozilla.org/show_bug.cgi?id=967812
  // user_pref("permissions.memory_only", true); // (hidden pref)
// 1012: disable resuming session from crash
user_pref("browser.sessionstore.resume_from_crash", false);

/*** 1200: SSL / OCSP / CERTS / ENCRYPTION / HSTS/HPKP/HTTPS
     Note that your cipher and other settings can be used server side as a fingerprint attack vector:
     see https://www.securityartwork.es/2017/02/02/tls-client-fingerprinting-with-bro/ . You can either
     strengthen your encryption/cipher suite and protocols (security) or keep them at default and let
     Mozilla handle them (dragging their feet for fear of breaking legacy sites) ***/
user_pref("ghacks_user.js.parrot", "1200 syntax error: the parrot's a stiff!");
// 1201: block rc4 fallback (default is now false as of at least FF45)
user_pref("security.tls.unrestricted_rc4_fallback", false);
// 1203: enable OCSP stapling
   // https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
user_pref("security.ssl.enable_ocsp_stapling", true);
// 1204: reject communication with servers using old SSL/TLS - vulnerable to a MiTM attack
   // https://wiki.mozilla.org/Security:Renegotiation
   // WARNING: tested Jan 2017 - still breaks too many sites
   // user_pref("security.ssl.require_safe_negotiation", true);
// 1205: display warning (red padlock) for "broken security"
   // https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// 1206: require certificate revocation check through OCSP protocol
   // This leaks information about the sites you visit to the CA (cert authority)
   // It's a trade-off between security (checking) and privacy (leaking info to the CA)
   // WARNING: Since FF44 the default is false. If set to true, this may/will cause some
   // site breakage. Some users have previously mentioned issues with youtube, microsoft etc
   // user_pref("security.OCSP.require", true);
// 1207: query OCSP responder servers to confirm current validity of certificates (default=1)
   // 0=disable, 1=validate only certificates that specify an OCSP service URL
   // 2=enable and use values in security.OCSP.URL and security.OCSP.signing
user_pref("security.OCSP.enabled", 1);
// 1208: enforce strict pinning
   // https://trac.torproject.org/projects/tor/ticket/16206
   // PKP (public key pinning) 0-disabled 1=allow user MiTM (such as your antivirus), 2=strict
   // WARNING: If you rely on an AV (antivirus) to protect your web browsing
   // by inspecting ALL your web traffic, then leave at current default =1
user_pref("security.cert_pinning.enforcement_level", 2);
// 1209: control TLS versions with min and max
   // 1=min version of TLS 1.0, 2-min version of TLS 1.1, 3=min version of TLS 1.2 etc
   // WARNING: FF/chrome currently allow TLS 1.0 by default, so this is your call.
   // http://kb.mozillazine.org/Security.tls.version.*
   // https://www.ssl.com/how-to/turn-off-ssl-3-0-and-tls-1-0-in-your-browser/
   // user_pref("security.tls.version.min", 2);
   // user_pref("security.tls.version.fallback-limit", 3);
   // user_pref("security.tls.version.max", 4); // allow up to and including TLS 1.3
// 1210: disable 1024-DH Encryption
   // https://www.eff.org/deeplinks/2015/10/how-to-protect-yourself-from-nsa-attacks-1024-bit-DH
   // WARNING: may break obscure sites, but not major sites, which should support ECDH over DHE
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
// 1211: disable or limit SHA-1
   // 0 = all SHA1 certs are allowed
   // 1 = all SHA1 certs are blocked (including perfectly valid ones from 2015 and earlier)
   // 2 = deprecated option that now maps to 1
   // 3 = only allowed for locally-added roots (e.g. anti-virus)
   // 4 = only allowed for locally-added roots or for certs in 2015 and earlier
   // WARNING: when disabled, some man-in-the-middle devices (eg security scanners and antivirus
   // products, are failing to connect to HTTPS sites. SHA-1 will eventually become obsolete.
   // https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/
   // https://github.com/pyllyukko/user.js/issues/194#issuecomment-256509998
user_pref("security.pki.sha1_enforcement_level", 1);
// 1212: disable SSL session tracking (36+)
   // SSL session IDs speed up HTTPS connections (no need to renegotiate) and last for 48hrs.
   // Since the ID is unique, web servers can (and do) use it for tracking. If set to true,
   // this disables sending SSL3 Session IDs and TLS Session Tickets to prevent session tracking
   // WARNING: This will slow down TLS connections (personally I don't notice it at all)
   // https://tools.ietf.org/html/rfc5077
   // https://bugzilla.mozilla.org/show_bug.cgi?id=967977
user_pref("security.ssl.disable_session_identifiers", true); // (hidden pref)
// 1213: disable 3DES (effective key size < 128)
   // https://en.wikipedia.org/wiki/3des#Security
   // http://en.citizendium.org/wiki/Meet-in-the-middle_attack
   // http://www-archive.mozilla.org/projects/security/pki/nss/ssl/fips-ssl-ciphersuites.html
user_pref("security.ssl3.rsa_des_ede3_sha", false);
// 1214: disable 128 bits
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// 1215: disable Microsoft Family Safety cert (Windows 8.1)
   // 0: disable detecting Family Safety mode and importing the root
   // 1: only attempt to detect Family Safety mode (don't import the root)
   // 2: detect Family Safety mode and import the root
user_pref("security.family_safety.mode", 0);
// 1216: disable insecure active content on https pages - mixed content
user_pref("security.mixed_content.block_active_content", true);
// 1217: disable insecure passive content (such as images) on https pages - mixed context
   // current default=false, leave it this way as too many sites break visually
   // user_pref("security.mixed_content.block_display_content", true);
// 1218: disable HSTS Priming (FF51+)
   // RISKS: formerly blocked mixed-content may load, may cause noticeable delays eg requests
   //        time out, requests may not be handled well by servers, possible fingerprinting
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1246540#c145
user_pref("security.mixed_content.send_hsts_priming", false);
user_pref("security.mixed_content.use_hsts", false);
// 1219: disable HSTS preload list
   // recommended enabled, unless you fully understand the risks and trade-offs
   // user_pref("network.stricttransportsecurity.preloadlist", false);
// 1220: disable intermediate certificate caching (fingerprinting attack vector)
   // NOTE: This affects login/cert/key dbs. AFAIK the only effect is all active logins start anew
   // per session. This may be better handled under FPI (ticket 1323644, part of Tor Uplift)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1334485 // related bug
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1216882 // related bug (see comment 9)
   // user_pref("security.nocertdb", true); // (hidden pref)

/*** 1400: FONTS ***/
user_pref("ghacks_user.js.parrot", "1400 syntax error: the parrot's bereft of life!");
// 1401: disable websites downloading their own fonts (0=block, 1=allow)
   // This setting is under Options>Content>Font & Colors>Advanced>Allow pages to choose...
   // If you disallow fonts, this drastically limits/reduces font enumeration (by JS) which
   // is a high entropy fingerprinting vector.
   // WARNING: Disabling fonts can uglify the web a fair bit.
user_pref("browser.display.use_document_fonts", 0);
// 1402: allow icon fonts (glyphs) (FF41+)
user_pref("gfx.downloadable_fonts.enabled", true);
// 1403: disable rendering of SVG OpenType fonts
   // https://wiki.mozilla.org/SVGOpenTypeFonts - iSECPartnersReport recommends to disable this
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// 1404: use more legible default fonts
   // WARNING: These are the author's settings, comment out if you do not require them
   // Been using this for over a year, it really grows on you
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia"); // default Times New Roman
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial");  // default Arial
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console"); // default Courier New
// 1405: disable woff2
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
// 1406: disable CSS Font Loading API
   // WARNING: Disabling fonts can uglify the web a fair bit.
user_pref("layout.css.font-loading-api.enabled", false);
// 1407: remove special underline handling for a few fonts which you will probably never use.
   // Any of these fonts on your system can be enumerated for fingerprinting. Requires restart.
   // http://kb.mozillazine.org/Font.blacklist.underline_offset
user_pref("font.blacklist.underline_offset", "");
// 1408: disable graphite which FF49 turned back on by default
   // In the past it had security issues - need citation
user_pref("gfx.font_rendering.graphite.enabled", false);

/*** 1600: HEADERS / REFERERS
     Except for 1601 and 1602, these can all be best handled by an extension to block/spoof
     all and then whitelist if needed, otherwise too much of the internet breaks.
     http://www.ghacks.net/2015/01/22/improve-online-privacy-by-controlling-referrer-information/
     #Required reading: https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/ ***/
user_pref("ghacks_user.js.parrot", "1600 syntax error: the parrot rests in peace!");
// 1601: disable referer from an SSL Website
   // to be deprecated in FF52+? - https://bugzilla.mozilla.org/show_bug.cgi?id=1308725
user_pref("network.http.sendSecureXSiteReferrer", false);
// 1602: DNT HTTP header - essentially USELESS - default is off. I recommend off.
   // NOTE: "Options>Privacy>Tracking>Request that sites not track you"
   // if you use NoScript MAKE SURE to set your noscript.doNotTrack.enabled to match
   // http://kb.mozillazine.org/Privacy.donottrackheader.value (pref required since FF21+)
   // user_pref("privacy.donottrackheader.enabled", true);
   // user_pref("privacy.donottrackheader.value", 1); // (hidden pref)
// 1603: referer, WHEN to send
   // 0=never, 1=send only when links are clicked, 2=for links and images (default)
   // user_pref("network.http.sendRefererHeader", 2);
// 1604: referer, SPOOF or NOT (default=false)
   // user_pref("network.http.referer.spoofSource", false);
// 1605: referer, HOW to handle cross origins
   // 0=always (default), 1=only if base domains match, 2=only if hosts match
   // user_pref("network.http.referer.XOriginPolicy", 0);
// 1606: referer, WHAT to send (limit the information)
   // 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
   // user_pref("network.http.referer.trimmingPolicy", 0);

/*** 1800: PLUGINS ***/
user_pref("ghacks_user.js.parrot", "1800 syntax error: the parrot's pushing up daisies!");
// 1801: set default plugin state (i.e new plugins on discovery) to never activate
   // 0=disabled, 1=ask to activate, 2=active - you can override individual plugins
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);
// 1802: enable click to play and set to 0 minutes
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
// 1802a: make sure a plugin is in a certain state: 0=deactivated 1=ask 2=enabled (Flash example)
   // you can set all these plugin.state's via Add-ons>Plugins or search for plugin.state in about:config
   // NOTE: you can still over-ride individual sites eg youtube via site permissions
   // http://www.ghacks.net/2013/07/09/how-to-make-sure-that-a-firefox-plugin-never-activates-again/
   // user_pref("plugin.state.flash", 0);
// 1804: disable plugins using external/untrusted scripts with XPCOM or XPConnect
user_pref("security.xpconnect.plugin.unrestricted", false);
// 1805: disable scanning for plugins
   // http://kb.mozillazine.org/Plugin_scanning
   // plid.all = whether to scan the directories specified in the Windows registry for PLIDs
   // includes: RealPlayer, Next-Generation Java Plug-In, Adobe Flash, Antivirus etc
   // WARNING: The author turned off plugins, try it one day. You are not missing much.
user_pref("plugin.scan.plid.all", false);
// 1806: Acrobat, Quicktime, WMP are handled separately from 1805 above.
   // The string refers to min version number allowed
user_pref("plugin.scan.Acrobat", "99999");
user_pref("plugin.scan.Quicktime", "99999");
user_pref("plugin.scan.WindowsMediaPlayer", "99999");
// 1807: disable auto-play of HTML5 media
   // WARNING: This may break youtube video playback (and probably other sites). If you block
   // autoplay but occasionally would like a toggle button, try the following add-on
   // https://addons.mozilla.org/en-US/firefox/addon/autoplay-toggle
user_pref("media.autoplay.enabled", false);
// 1808: disable audio auto-play in non-active tabs (FF51+)
   // http://www.ghacks.net/2016/11/14/firefox-51-blocks-automatic-audio-playback-in-non-active-tabs/
user_pref("media.block-autoplay-until-in-foreground", true);
// 1820: disable all GMP (Gecko Media Plugins)
   // https://wiki.mozilla.org/GeckoMediaPlugins
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
// 1825: disable widevine CDM
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);
// 1830: disable all DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", false); // Options>Content>Play DRM Content
user_pref("browser.eme.ui.enabled", false); // hides "Play DRM Content" checkbox, restart required
user_pref("media.eme.apiVisible", false); // block websites detecting DRM is disabled
// 1840: disable the OpenH264 Video Codec by Cisco to "Never Activate"
   // This is the bundled codec used for video chat in WebRTC
   // Disable pings to the external update/download server
user_pref("media.gmp-gmpopenh264.enabled", false); // (hidden pref)
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
// 1850: disable the Adobe EME "Primetime CDM" (Content Decryption Module)
   // https://trac.torproject.org/projects/tor/ticket/16285
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.gmp-eme-adobe.visible", false);
user_pref("media.gmp-eme-adobe.autoupdate", false);

/*** 2000: MEDIA / CAMERA / MIKE ***/
user_pref("ghacks_user.js.parrot", "2000 syntax error: the parrot's snuffed it!");
// 2001: disable WebRTC
   // https://www.privacytools.io/#webrtc
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
   // disable video capability for WebRTC
user_pref("media.navigator.video.enabled", false);
// 2001a: pref which improves the WebRTC IP Leak issue, as opposed to completely
   // disabling WebRTC. You still need to enable WebRTC for this to be applicable (FF42+)
   // https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media.peerconnection.ice.default_address_only", true); // (FF41-FF50)
user_pref("media.peerconnection.ice.no_host", true); // (FF51+)
// 2010: disable WebGL, force bare minimum feature set if used & disable WebGL extensions
   // http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
   // https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// 2011: don't make WebGL debug info available to websites
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1171228
   // https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_renderer_info
user_pref("webgl.enable-debug-renderer-info", false);
// 2012: two more webgl preferences (FF51+)
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.enable-webgl2", false);
// 2021: disable speech recognition
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
// 2022: disable screensharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
// 2023: disable camera stuff
user_pref("camera.control.face_detection.enabled", false);
// 2024: enable/disable MSE (Media Source Extensions)
   // http://www.ghacks.net/2014/05/10/enable-media-source-extensions-firefox/
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.mp4.enabled", true);
user_pref("media.mediasource.webm.audio.enabled", true);
user_pref("media.mediasource.webm.enabled", true);
// 2025: enable/disable various media types - end user personal choice
   // WARNING: this is the author's settings, choose your own
user_pref("media.mp4.enabled", true);
user_pref("media.flac.enabled", true); // (FF51+)
user_pref("media.ogg.enabled", false);
user_pref("media.ogg.flac.enabled", false); // (FF51+)
user_pref("media.opus.enabled", false);
user_pref("media.raw.enabled", false);
user_pref("media.wave.enabled", false);
user_pref("media.webm.enabled", true);
user_pref("media.wmf.enabled", true); // https://www.youtube.com/html5 - for the two H.264 entries
// 2026: disable canvas capture stream
   // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream
user_pref("canvas.capturestream.enabled", false);
// 2027: disable camera image capture
   // https://trac.torproject.org/projects/tor/ticket/16339
user_pref("dom.imagecapture.enabled", false);
// 2028: disable offscreen canvas
   // https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas
user_pref("gfx.offscreencanvas.enabled", false);

/*** 2200: UI MEDDLING
   see http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features ***/
user_pref("ghacks_user.js.parrot", "2200 syntax error: the parrot's 'istory!");
// 2201: disable website control over right click context menu
   // WARNING: This will break some sites eg Dropbox, Google Docs? gmail?
user_pref("dom.event.contextmenu.enabled", false);
// 2202: UI SPOOFING: disable scripts hiding or disabling the following on new windows
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
// 2203: POPUP windows - prevent or allow javascript UI meddling
user_pref("dom.disable_window_flip", true); // window z-order
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true); //bookmarks toolbar
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.allow_scripts_to_close_windows", false);
// 2204: disable links opening in a new window
   // https://trac.torproject.org/projects/tor/ticket/9881
   // test url: https://people.torproject.org/~gk/misc/entire_desktop.html
   // You can still right click a link and select open in a new window
   // This is to stop malicious window sizes and screen res leaks etc in conjunction
   // with 2203 dom.disable_window_move_resize=true | 2418 full-screen-api.enabled=false
   // user_pref("browser.link.open_newwindow.restriction", 0);

/*** 2300: SERVICE WORKERS ***/
user_pref("ghacks_user.js.parrot", "2300 syntax error: the parrot's off the twig!");
// 2301: disable workers API and service workers API
   // https://developer.mozilla.org/en-US/docs/Web/API/Worker
   // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
   // http://www.ghacks.net/2016/03/02/manage-service-workers-in-firefox-and-chrome/
   // WARNING: WILL break sites as this gains traction: eg mega.nz requires workers
user_pref("dom.workers.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
// 2302: disable service workers cache and cache storage
user_pref("dom.caches.enabled", false);
// 2303: disable push notifications (FF44+) [requires serviceWorkers to be enabled]
   // web apps can receive messages pushed to them from a server, whether or
   // not the web app is in the foreground, or even currently loaded
   // https://developer.mozilla.org/en/docs/Web/API/Push_API
   // WARNING: may affect social media sites like Twitter
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
// 2304: disable web/push notifications
   // https://developer.mozilla.org/en-US/docs/Web/API/notification
   // NOTE: you can still override individual domains under site permissions (FF44+)
   // WARNING: may affect social media sites like Twitter
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

/*** 2400: DOM & JAVASCRIPT ***/
user_pref("ghacks_user.js.parrot", "2400 syntax error: the parrot's kicked the bucket!");
// 2402: disable website access to clipboard events/content
   // http://www.ghacks.net/2014/01/08/block-websites-reading-modifying-clipboard-contents-firefox/
   // WARNING: This will break some sites functionality such as pasting into Facebook
   // this applies to onCut, onCopy, onPaste events - i.e is you have to interact with
   // the website for it to look at the clipboard
user_pref("dom.event.clipboardevents.enabled", false);
// 2403: disable clipboard commands (cut/copy) from "non-priviledged" content
   // this disables document.execCommand("cut"/"copy") to protect your clipboard
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1170911
user_pref("dom.allow_cut_copy", false); // (hidden pref)
// 2404: disable JS storing data permanently
   // If you block indexedDB but would like a toggle button, try the following add-on
   // https://addons.mozilla.org/en-US/firefox/addon/disable-indexeddb/
   // This setting WAS under about:permissions>All Sites>Maintain Offline Storage
   // NOTE: about:permissions is no longer available since FF46 but you can still override
   // individual domains: use info icon in urlbar etc or right click on a web page>view page info
   // WARNING: If set as false (disabled), this WILL break some [old] add-ons and DOES break
   // a lot of sites' functionality. Applies to websites, add-ons and session data.
user_pref("dom.indexedDB.enabled", false);
// 2405: https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled", false);
// 2410: disable User Timing API
   // https://trac.torproject.org/projects/tor/ticket/16336
user_pref("dom.enable_user_timing", false);
// 2411: disable resource/navigation timing
user_pref("dom.enable_resource_timing", false);
// 2412: disable timing attacks - javascript performance fingerprinting
   // https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.enable_performance", false);
// 2414: disable shaking the screen
user_pref("dom.vibrator.enabled", false);
// 2415: max popups from a single non-click event - default is 20!
user_pref("dom.popup_maximum", 3);
// 2415b: limit events that can cause a popup
   // default is "change click dblclick mouseup notificationclick reset submit touchend"
   // WARNING: Author killed all methods but does this with Popup Blocker Ultimate
   // in Strict mode with whitelist. Or you can allow all but blacklist. Either way,
   // Popup Blocker Ultimate overwrites this pref with a blank (or allows everything!).
   // http://kb.mozillazine.org/Dom.popup_allowed_events
user_pref("dom.popup_allowed_events", "click dblclick");
// 2416: disable idle observation
user_pref("dom.idle-observers-api.enabled", false);
// 2418: disable full-screen API
   // This setting WAS under about:permissions>All Sites>Fullscreen
   // NOTE: about:permissions is no longer available since FF46 but you can still override
   // individual domains: use info icon in urlbar etc or right click on a web page>view page info
   // set to false=block, set to true=ask
user_pref("full-screen-api.enabled", false);
// 2420: disable support for asm.js ( http://asmjs.org/ )
   // https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
   // https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
   // https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref("javascript.options.asmjs", false);
// 2421: in addition to 2420, these settings will help harden JS against exploits such as CVE-2015-0817
   // https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-0817
   // WARNING: causes the odd site issue and there is also a performance loss
   // Update: Jan-2017: commented out for now, as performance gains outweigh extra security
   // user_pref("javascript.options.ion", false);
   // user_pref("javascript.options.baselinejit", false);
// 2425: disable ArchiveAPI i.e reading content of archives, such as zip files, directly
   // in the browser, through DOM file objects. Default is false.
user_pref("dom.archivereader.enabled", false);
// 2450: force FF to tell you if a website asks to store data for offline use
   // https://support.mozilla.org/en-US/questions/1098540
   // https://bugzilla.mozilla.org/show_bug.cgi?id=959985
user_pref("offline-apps.allow_by_default", false);
   // Options>Advanced>Network>Tell me when a website asks to store data for offline use
user_pref("browser.offline-apps.notify", true);
   // change size of warning quota for offline cache (default 51200)
   // Offline cache is only used in rare cases to store data locally. FF will store small amounts
   // (default <50MB) of data in the offline (application) cache without asking for permission.
   // user_pref("offline-apps.quota.warn", 51200);

/*** 2500: HARDWARE FINGERPRINTING ***/
user_pref("ghacks_user.js.parrot", "2500 syntax error: the parrot's shuffled off 'is mortal coil!");
// 2501: disable gamepad API - USB device ID enumeration
   // https://trac.torproject.org/projects/tor/ticket/13023
user_pref("dom.gamepad.enabled", false);
// 2502: disable Battery Status API. Initially a Linux issue (high precision readout) that is now fixed.
   // However, it is still another metric for fingerprinting, used to raise entropy.
   // eg: do you have a battery or not, current charging status, charge level, times remaining etc
   // http://techcrunch.com/2015/08/04/battery-attributes-can-be-used-to-track-web-users/
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1124127
   // https://www.w3.org/TR/battery-status/
   // https://www.theguardian.com/technology/2016/aug/02/battery-status-indicators-tracking-online
   // NOTE: From FF52+ Battery Status API is only available in chrome/privileged code.
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1313580
user_pref("dom.battery.enabled", false);
// 2503: disable giving away network info
   // eg bluetooth, cellular, ethernet, wifi, wimax, other, mixed, unknown, none
   // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
   // https://wicg.github.io/netinfo/
   // https://bugzilla.mozilla.org/show_bug.cgi?id=960426
user_pref("dom.netinfo.enabled", false);
// 2504: disable virtual reality devices
   // https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.osvr.enabled", false); // (FF49+)
user_pref("dom.vr.openvr.enabled", false); // (FF51+)
// 2505: disable media device enumeration (FF29+)
   // NOTE: media.peerconnection.enabled should also be set to false (see 2001)
   // https://wiki.mozilla.org/Media/getUserMedia
   // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
user_pref("media.navigator.enabled", false);
// 2506: disable video statistics - JS performance fingerprinting
  // https://trac.torproject.org/projects/tor/ticket/15757
user_pref("media.video_stats.enabled", false);
// 2507: disable keyboard fingerprinting (FF38+) (physical keyboards)
   // The Keyboard API allows tracking the "read parameter" of pressed keys in forms on
   // web pages. These parameters vary between types of keyboard layouts such as QWERTY,
   // AZERTY, Dvorak, and between various languages, eg German vs English.
   // WARNING: Don't use if Android + physical keyboard
   // UPDATE: This MAY be incorporated better into the Tor Uplift project (see 2699)
   // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
   // https://www.privacy-handbuch.de/handbuch_21v.htm
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
// 2508: disable graphics fingerprinting (the loss of hardware acceleration is negligible)
   // These prefs are under Options>Advanced>General>Use hardware acceleration when available
   // NOTE: changing this option changes BOTH these preferences
   // https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration
   // WARNING: This changes text rendering (fonts will look different)
   //          If you watch a lot of video, this will impact performance
user_pref("gfx.direct2d.disabled", true);
user_pref("layers.acceleration.disabled", true);
// 2509: disable touch events
   // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
   // https://trac.torproject.org/projects/tor/ticket/10286
   // fingerprinting attack vector - leaks screen res & actual screen coordinates
   // WARNING: If you use touch eg Win8/10 Metro/Smartphone reset this to default
user_pref("dom.w3c_touch_events.enabled", 0);
// 2510: disable Web Audio API (FF51+)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1288359
user_pref("dom.webaudio.enabled", false);
// 2511: disable MediaDevices change detection (FF51+) (enabled by default starting FF52+)
   // https://developer.mozilla.org/en-US/docs/Web/Events/devicechange
   // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/ondevicechange
user_pref("media.ondevicechange.enabled", false);

/*** 2600: MISC - LEAKS / FINGERPRINTING / PRIVACY / SECURITY ***/
user_pref("ghacks_user.js.parrot", "2600 syntax error: the parrot's run down the curtain!");
// 2601: disable sending additional analytics to web servers
   // https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled", false);
// 2602: CIS 2.3.2 disable downloading on desktop
user_pref("browser.download.folderList", 2);
// 2603: always ask the user where to download - enforce user interaction for security
user_pref("browser.download.useDownloadDir", false);
// 2604: https://bugzil.la/238789#c19
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// 2605: don't integrate activity into windows recent documents
user_pref("browser.download.manager.addToRecentDocs", false);
// 2606: disable hiding mime types (Options>Applications) not associated with a plugin
user_pref("browser.download.hide_plugins_without_extensions", false);
// 2607: disable page thumbnail collection
   // look in profile/thumbnails directory - you may want to clean that out
user_pref("browser.pagethumbnails.capturing_disabled", true); // (hidden pref)
// 2608: disable JAR from opening Unsafe File Types
user_pref("network.jar.open-unsafe-types", false);
// 2611: disable WebIDE to prevent remote debugging and add-on downloads
   // https://trac.torproject.org/projects/tor/ticket/16222
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
// 2612: disable SimpleServiceDiscovery - which can bypass proxy settings - eg Roku
   // https://trac.torproject.org/projects/tor/ticket/16222
user_pref("browser.casting.enabled", false);
user_pref("gfx.layerscope.enabled", false);
// 2613: disable device sensor API - fingerprinting vector
   // https://trac.torproject.org/projects/tor/ticket/15758
user_pref("device.sensors.enabled", false);
// 2614: disable SPDY as it can contain identifiers
   // https://www.torproject.org/projects/torbrowser/design/#identifier-linkability (no. 10)
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
// 2615: disable http2 for now as well
user_pref("network.http.spdy.enabled.http2", false);
// 2617: disable pdf.js as an option to preview PDFs within Firefox
   // see mime-types under Options>Applications) - EXPLOIT risk
   // Enabling this (set to true) will change your option most likely to "Ask" or "Open with
   // some external pdf reader". This does NOT necessarily prevent pdf.js being used via
   // other means, it only removes the option. I think this should be left at default (false).
   // 1. It won't stop JS bypassing it. 2. Depending on external pdf viewers there is just as
   // much risk or more (acrobat). 3. Mozilla are very quick to patch these sorts of exploits,
   // they treat them as severe/critical and 4. for convenience
user_pref("pdfjs.disabled", false);
// 2618: when using SOCKS have the proxy server do the DNS lookup - dns leak issue
   // http://kb.mozillazine.org/Network.proxy.socks_remote_dns
   // https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers
   // eg in TOR, this stops your local DNS server from knowing your Tor destination
   // as a remote Tor node will handle the DNS request
user_pref("network.proxy.socks_remote_dns", true);
// 2619: limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
   // WARNING: a low setting of 5 or under will probably break some sites (eg gmail logins)
   // To control HTML Meta tag and JS redirects, use an add-on (eg NoRedirect). Default is 20
user_pref("network.http.redirection-limit", 10);
// 2620: disable middle mouse click opening links from clipboard
   // https://trac.torproject.org/projects/tor/ticket/10089
   // http://kb.mozillazine.org/Middlemouse.contentLoadURL
user_pref("middlemouse.contentLoadURL", false);
// 2621: disable IPv6 (included for knowledge ONLY - not recommended)
   // This is all about covert channels such as MAC addresses being included/abused in the
   // IPv6 protocol for tracking. If you want to mask your IP address, this is not the way
   // to do it. It's 2016, IPv6 is here. Here are some old links
   // 2010: https://www.christopher-parsons.com/ipv6-and-the-future-of-privacy/
   // 2011: https://iapp.org/news/a/2011-09-09-facing-the-privacy-implications-of-ipv6
   // 2012: http://www.zdnet.com/article/security-versus-privacy-with-ipv6-deployment/
   // NOTE: It is a myth that disabling IPv6 will speed up your internet connection
   // http://www.howtogeek.com/195062/no-disabling-ipv6-probably-wont-speed-up-your-internet-connection
   // user_pref("network.dns.disableIPv6", true);
   // user_pref("network.http.fast-fallback-to-IPv4", true);
// 2622: ensure you have a security delay when installing add-ons (milliseconds)
   // default=1000, This also covers the delay in "Save" on downloading files.
   // http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
   // http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
user_pref("security.dialog_enable_delay", 1000);
// 2623: ensure Strict File Origin Policy on local files
   // The default is true. Included for completeness
   // http://kb.mozillazine.org/Security.fileuri.strict_origin_policy
user_pref("security.fileuri.strict_origin_policy", true);
// 2624: enforce Subresource Integrity (SRI) (FF43+)
   // The default is true. Included for completeness
   // https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
   // https://wiki.mozilla.org/Security/Subresource_Integrity
user_pref("security.sri.enable", true);
// 2625: Applications [non Tor protocol] SHOULD generate an error
   // upon the use of .onion and SHOULD NOT perform a DNS lookup.
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1228457
user_pref("network.dns.blockDotOnion", true);
// 2626: strip optional user agent token, default is false, included for completeness
   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Gecko_user_agent_string_reference
user_pref("general.useragent.compatMode.firefox", false);
// 2627: Spoof default UA & relevant (navigator) parts (also see 0204 for UA language)
   // NOTE: may be better handled by an extension (eg whitelisitng), try not to clash with it
   // NOTE: this is NOT a complete solution (feature detection, some navigator objects leak, resource URI etc)
   // AIM: match latest TBB settings: Windows, ESR, OS etc
   // WARNING: If you do not understand fingerprinting then don't use this section
   // test: http://browserspy.dk/browser.php
   //       http://browserspy.dk/showprop.php (for buildID)
   //       http://browserspy.dk/useragent.php
   // ==start==
   // A: navigator.userAgent leaks in JS, setting this also seems to break UA extension whitelisting
   // user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:45.0) Gecko/20100101 Firefox/45.0"); // (hidden pref)
   // B: navigator.buildID (see gecko.buildID in about:config) reveals build time
   // down to the second which defeats user agent spoofing and can compromise OS etc
   // https://bugzilla.mozilla.org/show_bug.cgi?id=583181
//user_pref("general.buildID.override", "20100101"); // (hidden pref)
   // C: navigator.appName
//user_pref("general.appname.override", "Netscape"); // (hidden pref)
   // D: navigator.appVersion
//user_pref("general.appversion.override", "5.0 (Windows)"); // (hidden pref)
   // E: navigator.platform leaks in JS
//user_pref("general.platform.override", "Win32"); // (hidden pref)
   // F: navigator.oscpu
//user_pref("general.oscpu.override", "Windows NT 6.1"); // (hidden pref)
// 2628: disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
// 2629: disable remote JAR files being opened, regardless of content type
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1215235
user_pref("network.jar.block-remote-files", true);
// 2650: start the browser in e10s mode (48+)
   // After restarting the browser, you can check whether it's enabled by visiting
   // about:support and checking that "Multiprocess Windows" = 1
   // use force-enable and extensions.e10sblocksenabling if you have add-ons
   // user_pref("browser.tabs.remote.autostart", true);
   // user_pref("browser.tabs.remote.autostart.2", true); // (FF49+)
   // user_pref("browser.tabs.remote.force-enable", true); // (hidden pref)
   // user_pref("extensions.e10sBlocksEnabling", false);
// 2651: control e10s number of container processes
   // http://www.ghacks.net/2016/02/15/change-how-many-processes-multi-process-firefox-uses/
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1207306
   // user_pref("dom.ipc.processCount", 4);
// 2652: enable console shim warnings for extensions that don't have the flag
   // 'multiprocessCompatible' set to true
user_pref("dom.ipc.shims.enabledWarnings", true);
// 2660: enforce separate content process for file://URLs (FF53+?)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1147911
   // http://www.ghacks.net/2016/11/27/firefox-53-exclusive-content-process-for-local-files/
user_pref("browser.tabs.remote.separateFileUriProcess", true);
// 2662: disable "open with" in download dialog (FF50+)
   // This is very useful to enable when the browser is sandboxed (e.g. via AppArmor)
   // in such a way that it is forbidden to run external applications.
   // WARNING: This may interfere with some users' workflow or methods
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1281959
user_pref("browser.download.forbid_open_with", true);
// 2663: disable MathML (FF51+)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1173199
   // test: http://browserspy.dk/mathml.php
user_pref("mathml.disabled", true);
// 2664: disable DeviceStorage API
   // https://wiki.mozilla.org/WebAPI/DeviceStorageAPI
user_pref("device.storage.enabled", false);
// 2665: sanitize webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");
// 2666: disable HTTP Alternative Services
   // http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/#comment-3970881
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
// 2667: disable various developer tools in browser context
   // Devtools>Advanced Settings>Enable browser chrome and add-on debugging toolboxes
   // http://github.com/pyllyukko/user.js/issues/179#issuecomment-246468676
user_pref("devtools.chrome.enabled", false);
// 2668: lock down allowed extension directories
   // WARNING: this will break add-ons (Roboform, Internet Download Manager and others) that
   // do not use the default XPI directories
   // https://mike.kaply.com/2012/02/21/understanding-add-on-scopes/
   // archived: http://archive.is/DYjAM
user_pref("extensions.enabledScopes", 1); // (hidden pref)
user_pref("extensions.autoDisableScopes", 15);
// 2669: strip paths when sending URLs to PAC scripts (FF51+)
   // CVE-2017-5384: Information disclosure via Proxy Auto-Config (PAC)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1255474
user_pref("network.proxy.autoconfig_url.include_path", false);
// 2670: close bypassing of CSP via image mime types (FF51+)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1288361
user_pref("security.block_script_with_wrong_mime", true);
// 2671: disable SVG (FF53+)
   // WARNING: SVG is fairly common (~15% of the top 10K sites), so will cause some breakage
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1216893
user_pref("svg.disabled", true);

/*** 2698: FIRST PARTY ISOLATION (PFI) ***/
// 2698a: enable first party isolation pref and OriginAttribute (FF51+)
   // WARNING: breaks lots of cross-domain logins and site funtionality until perfected
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1260931
// 2698b: this also isolates OCSP requests by first party domain
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1264562
   // user_pref("privacy.firstparty.isolate", true);

/*** 2699: TOR UPLIFT: privacy.resistFingerprinting
     This preference will be used as a generic switch for a wide range of items.
     This section will attempt to list all the ramifications and Mozilla tickets ***/
// 2699a: limit window.screen & CSS media queries providing large amounts of identifiable info.
   // POC: http://ip-check.info/?lang=en (screen, usable screen, and browser window will match)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=418986
   // NOTE: does not cover everything yet - https://bugzilla.mozilla.org/show_bug.cgi?id=1216800
   // NOTE: this will probably make your values pretty unique until you resize or snap the
   // inner window width + height into standard/common resolutions (mine is at 1366x768)
   // To set a size, open a XUL (chrome) page (such as about:config) which is at 100% zoom, hit
   // Shift+F4 to open the scratchpad, type window.resizeTo(1366,768), hit Ctrl+R to run. Test
   // your window size, do some math, resize to allow for all the non inner window elements
   // test: http://browserspy.dk/screen.php
   // Common resolutions: http://www.rapidtables.com/web/dev/screen-resolution-statistics.htm
// 2699b: spoof screen orientation
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1281949
// 2699c: hide the contents of navigator.plugins and navigator.mimeTypes (FF50+)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1281963
user_pref("privacy.resistFingerprinting", true); // (hidden pref)

/*** 2700: COOKIES & DOM STORAGE ***/
user_pref("ghacks_user.js.parrot", "2700 syntax error: the parrot's joined the bleedin' choir invisible!");
// 2701: disable cookies on all sites
   // you can set exceptions under site permissions or use an extension (eg Cookie Controller)
   // 0=allow all 1=allow same host 2=disallow all 3=allow 3rd party if it already set a cookie
user_pref("network.cookie.cookieBehavior", 2);
// 2702: ensure that third-party cookies (if enabled, see above pref) are session-only
   // https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
   // http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly
user_pref("network.cookie.thirdparty.sessionOnly", true);
// 2703: set cookie lifetime policy
   // 0=until they expire (default), 2=until you close Firefox, 3=for n days (see next pref)
   // If you use custom settings for History in Options, this is the setting under
   // Privacy>Accept cookies from sites>Keep until <they expire/I close Firefox>
   // user_pref("network.cookie.lifetimePolicy", 0);
// 2704: set cookie lifetime in days (see above pref) - default is 90 days
   // user_pref("network.cookie.lifetime.days", 90);
// 2705: disable dom storage
   // WARNING: this will break a LOT of sites' functionality.
   // You are better off using an extension for more granular control
   // user_pref("dom.storage.enabled", false);
// 2706: disable Storage API (FF51+) which gives sites' code the ability to find out how much space
   // they can use, how much they are already using, and even control whether or not they need to
   // be alerted before the user agent disposes of site data in order to make room for other things.
   // https://developer.mozilla.org/en-US/docs/Web/API/StorageManager
   // https://developer.mozilla.org/en-US/docs/Web/API/Storage_API
user_pref("dom.storageManager.enabled", false);
// 2707: clear localStorage and UUID when a WebExtension is uninstalled
   // NOTE: both preferences must be the same
   // https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage/local
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1213990
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);

/*** 2800: SHUTDOWN ***/
user_pref("ghacks_user.js.parrot", "2800 syntax error: the parrot's bleedin' demised!");
// 2802: enable FF to clear stuff on close
   // This setting is under Options>Privacy>Clear history when Firefox closes
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// 2803: what to clear on shutdown
   // These settings are under Options>Privacy>Clear history when Firefox closes>Settings
   // These are the settings of the author of this user.js, chose your own
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", false); // active logins
user_pref("privacy.clearOnShutdown.siteSettings", false);
// 2803a: include all open windows/tabs when you shutdown
   // user_pref("privacy.clearOnShutdown.openWindows", true);
// 2804: (to match above) - auto selection of items to delete with Ctrl-Shift-Del
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", false);
user_pref("privacy.cpd.siteSettings", false);
// 2804a: include all open windows/tabs when you run clear recent history
   // user_pref("privacy.cpd.openWindows", true);
// 2805: reset default 'Time range to clear' for 'clear recent history' (see 2804 above)
   // Firefox remembers your last choice. This will reset the value when you start FF.
   // 0=everything 1=last hour, 2=last 2 hours, 3=last 4 hours, 4=today
user_pref("privacy.sanitize.timeSpan", 0);

/*** 3000: PERSONAL SETTINGS
     Settings that are handy to migrate and/or are not in the Options interface. Users
     can put their own non-security/privacy/fingerprinting/tracking stuff here ***/
user_pref("ghacks_user.js.parrot", "3000 syntax error: this is an ex-parrot!");
// 3001: disable annoying warnings
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
// 3001a: disable warning when a domain requests full screen
   // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
   // user_pref("full-screen-api.warning.delay", 0);
   // user_pref("full-screen-api.warning.timeout", 0);
// 3002: disable closing browser with last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
// 3004: disable backspace (0 = previous page, 1 = scroll up, 2 = do nothing)
user_pref("browser.backspace_action", 2);
// 3005: disable autocopy default (use extensions autocopy 2 & copy plain text 2)
user_pref("clipboard.autocopy", false);
// 3007: open new windows in a new tab instead
   // This setting is under Options>General>Tabs
   // 1=current window, 2=new window, 3=most recent window
user_pref("browser.link.open_newwindow", 3);
// 3008: disable "Do you really want to leave this site?" popups
   // https://support.mozilla.org/en-US/questions/1043508
user_pref("dom.disable_beforeunload", true);
// 3009: turn on APZ (Async Pan/Zoom) - requires e10s
   // http://www.ghacks.net/2015/07/28/scrolling-in-firefox-to-get-a-lot-better-thanks-to-apz/
   // user_pref("layers.async-pan-zoom.enabled", true);
// 3010: enable ctrl-tab previews
user_pref("browser.ctrlTab.previews", true);
// 3011: don't open "page/selection source" in a tab. The window used instead is cleaner
   // and easier to use and move around (eg developers/multi-screen).
user_pref("view_source.tab", false);
// 3012: spellchecking: 0=none, 1-multi-line controls, 2=multi-line & single-line controls
user_pref("layout.spellcheckDefault", 1);
// 3013: disable automatic "Work Offline" status
   // https://bugzilla.mozilla.org/show_bug.cgi?id=620472
   // https://developer.mozilla.org/en-US/docs/Online_and_offline_events
user_pref("network.manage-offline-status", false);
// 3015: disable tab animation, speed things up a little
user_pref("browser.tabs.animate", false);
// 3016: disable fullscreeen animation. Test using F11.
   // Animation is smother but is annoyingly slow, while no animation can be startling
user_pref("browser.fullscreen.animate", false);
// 3017: submenu in milliseconds. 0=instant while a small number allows
   // a mouse pass over menu items without any submenus alarmingly shooting out
user_pref("ui.submenuDelay", 75); // (hidden pref)
// 3018: maximum number of daily bookmark backups to keep (default is 15)
user_pref("browser.bookmarks.max_backups", 2);
// 3020: FYI: urlbar click behaviour (with defaults)
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
// 3021: FYI: tab behaviours (with defaults)
   // open links in a new tab immediately to the right of parent tab, not far right
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
   // switch to the parent tab (if it has one) on close, rather than to the adjacent right tab if
   // it exists or to the adjacent left tab if it doesn't. NOTE: requires browser.link.open_newwindow
   // set to 3 (see pref 3007). NOTE: does not apply to middle-click or Ctrl-clicking links.
user_pref("browser.tabs.selectOwnerOnClose", true);
   // Options>General>When I open a link in a new tab, switch to it immediately
   // default is unchecked = DON'T switch to it = true
user_pref("browser.tabs.loadInBackground", true);
   // set behavior of pages normally meant to open in a new window (such as target="_blank"
   // or from an external program), but that have instead been loaded in a new tab.
   // true: load the new tab in the background, leaving focus on the current tab
   // false: load the new tab in the foreground, taking the focus from the current tab.
user_pref("browser.tabs.loadDivertedInBackground", false);
// 3022: hide recently bookmarked items (you still have the original bookmarks) (FF49+)
user_pref("browser.bookmarks.showRecentlyBookmarked", false);
// 3023: disable automigrate, current default is false but may change (FF49+)
   // need more info, but lock down for now
user_pref("browser.migrate.automigrate.enabled", false);

// END: internal custom pref to test for syntax errors
user_pref("ghacks_user.js.parrot", "No no he's not dead, he's, he's restin'! Remarkable bird, the Norwegian Blue");

/*** 9997: DEPRECATED
     Personally confirmed by resetting as well as via documentation and DXR searches.
     NOTE: numbers may get re-used ***/
// 2607: (23+) disable page thumbnails, it was around v23, not 100% sure when
   // this pref was replaced with browser.pagethumbnails.capturing_disabled
   // user_pref("pageThumbs.enabled", false);
// 2408: (31+) disable network API - fingerprinting vector
   // user_pref("dom.network.enabled", false);
// 2620: (35+) disable WebSockets
   // https://developer.mozilla.org/en-US/Firefox/Releases/35
   // user_pref("network.websocket.enabled", false);
// 2023: (37+) disable camera autofocus callback (was in 36, not in 37)
   // Not part of any specification, the API will be superceded by the WebRTC Capture
   // and Stream API ( http://w3c.github.io/mediacapture-main/getusermedia.html )
   // https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS/API/CameraControl/
   // user_pref("camera.control.autofocus_moving_callback.enabled", false);
// 1804: (41+) disable plugin enumeration
   // user_pref("plugins.enumerable_names", "");
// 0420: (42+) disable tracking protection
   // this particular pref was never in stable
   // labelled v42+ because that's when tracking protection landed
   // user_pref("browser.polaris.enabled", false);
// 2803: (42+) what to clear on shutdown
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1102184#c23
   // user_pref("privacy.clearOnShutdown.passwords", false);
// 0411: (43+) disable safebrowsing urls & download
   // user_pref("browser.safebrowsing.gethashURL", "");
   // user_pref("browser.safebrowsing.malware.reportURL", "");
   // user_pref("browser.safebrowsing.provider.google.appRepURL", "");
   // user_pref("browser.safebrowsing.reportErrorURL", "");
   // user_pref("browser.safebrowsing.reportGenericURL", "");
   // user_pref("browser.safebrowsing.reportMalwareErrorURL", "");
   // user_pref("browser.safebrowsing.reportMalwareURL", "");
   // user_pref("browser.safebrowsing.reportURL", "");
   // user_pref("browser.safebrowsing.updateURL", "");
// 0420: (43+) disable tracking protection. FF43+ URLs are now part of safebrowsing
   // https://wiki.mozilla.org/Security/Tracking_protection (look under Prefs)
   // NOTE: getupdateURL = WRONG / never existed. updateURL = CORRECT and has been added FYI
   // user_pref("browser.trackingprotection.gethashURL", "");
   // user_pref("browser.trackingprotection.getupdateURL", "");
   // user_pref("browser.trackingprotection.updateURL", "");
// 1803: (43+) remove plugin finder service
   // http://kb.mozillazine.org/Pfs.datasource.url
   // user_pref("pfs.datasource.url", "");
// 2403: (43+) disable scripts changing images - test link below
   // http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_src2
   // WARNING: will break some sites such as Google Maps and a lot of web apps
   // user_pref("dom.disable_image_src_set", true);
// 2615: (43+) disable http2 for now as well
   // user_pref("network.http.spdy.enabled.http2draft", false);
// 3001a: (43+) disable warning when a domain requests full screen
   // replaced by setting full-screen-api.warning.timeout to zero
   // user_pref("full-screen-api.approval-required", false);
// 3003: (43+) disable new search panel UI [Classic Theme Restorer can restore the old search]
   // user_pref("browser.search.showOneOffButtons", false);
// 1201: (44+) block rc4 whitelist
   // https://developer.mozilla.org/en-US/Firefox/Releases/44#Security
   // user_pref("security.tls.insecure_fallback_hosts.use_static_list", false);
// 2417: (44+) disable SharedWorkers, which allow the exchange of data between iFrames that
   // are open in different tabs, even if the sites do not belong to the same domain.
   // https://www.torproject.org/projects/torbrowser/design/#identifier-linkability (no. 8)
   // https://bugs.torproject.org/15562
   // is used in FF 45and 46 code once, to set it for a test
   // user_pref("dom.workers.sharedWorkers.enabled", false);
// 1005: (45+) disable deferred level of storing extra session data 0=all 1=http-only 2=none
   // user_pref("browser.sessionstore.privacy_level_deferred", 2);
// 0334b: (46+) disable FHR (Firefox Health Report) v2 data being sent to Mozilla servers
   // user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
// 0373: (46+) disable "Pocket". FF46 replaced these with extensions.pocket.*
   // user_pref("browser.pocket.enabled", false);
   // user_pref("browser.pocket.api", "");
   // user_pref("browser.pocket.site", "");
   // user_pref("browser.pocket.oAuthConsumerKey", "");
// 0410e: (46+) safebrowsing
   // user_pref("browser.safebrowsing.appRepURL", ""); // Google application reputation check
// 0333b: (47+) disable about:healthreport page UNIFIED
   // user_pref("datareporting.healthreport.about.reportUrlUnified", "data:text/plain,");
// 0807: (47+) disable history manipulation
   // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history
   // WARNING: if set to false it breaks some sites (youtube) ability to correctly show the
   // url in location bar and for the forward/back tab history to work
   // user_pref("browser.history.allowPopState", false);
   // user_pref("browser.history.allowPushState", false);
   // user_pref("browser.history.allowReplaceState", false);
// 0806: (48+) disable 'unified complete': 'Search with [default search engine]'
   // this feature has been added back in Classic Theme Restorer
   // http://techdows.com/2016/05/firefox-unified-complete-aboutconfig-preference-removed.html
   // user_pref("browser.urlbar.unifiedcomplete", false);
// 3006: (48+) disable enforced add-on signing
   // NOTE: the preference is still in FF48+, but it's legacy code and does not work in stable
   // user_pref("xpinstall.signatures.required", false);
// 0372: (49+) disable "Hello" (TokBox/Telefonica WebRTC voice & video call PUP) WebRTC (IP leak)
   // https://www.mozilla.org/en-US/privacy/firefox-hello/
   // https://security.stackexchange.com/questions/94284/how-secure-is-firefox-hello
   // https://support.mozilla.org/en-US/kb/hello-status
   // user_pref("loop.enabled", false);
   // user_pref("loop.server", "");
   // user_pref("loop.feedback.formURL", "");
   // user_pref("loop.feedback.manualFormURL", "");
   // additional facebook loop settings
   // user_pref("loop.facebook.appId", "");
   // user_pref("loop.facebook.enabled", false);
   // user_pref("loop.facebook.fallbackUrl", "");
   // user_pref("loop.facebook.shareUrl", "");
   // https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
   // user_pref("loop.logDomains", false);
// 2202: (49+) ONE of the new window UI prefs
   // user_pref("dom.disable_window_open_feature.scrollbars", true);
// 2431: (49+) disable ONE of the push notification prefs
   // user_pref("dom.push.udp.wakeupEnabled", false);
// 0308: (50+) disable update plugin notifications
   // if using Flash/Java/Silverlight, it is best to turn on their own auto-update mechanisms.
   // See 1804 below: Mozilla only checks a few plugins and will soon do away with NPAPI
   // user_pref("plugins.update.notifyUser", false);
// 0410a: (50+) "Block dangerous and deceptive content" pref name change
   // user_pref("browser.safebrowsing.enabled", false); // FF49 and earlier
// 1202: (50+) disable rc4 ciphers
   // https://www.fxsitecompat.com/en-CA/docs/2016/rc4-support-has-been-completely-removed/
   // https://trac.torproject.org/projects/tor/ticket/17369
   // user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
   // user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
   // user_pref("security.ssl3.rsa_rc4_128_md5", false);
   // user_pref("security.ssl3.rsa_rc4_128_sha", false);
// 1809: (50+) remove Mozilla's plugin update URL
   // user_pref("plugins.update.url", "");
// 1851: (51+) delay play of videos until they're visible
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1180563
   // user_pref("media.block-play-until-visible", true);
// 2504: (51+) disable virtual reality devices
   // user_pref("dom.vr.oculus050.enabled", false);
// 2614: (51+) disable SPDY
   // user_pref("network.http.spdy.enabled.v3-1", false);

/**- 9999: TO INVESTIGATE - OTHER
// 1600's: restrict the contents of referrers attached to cross-origin requests (FF52+)
   // 0- 1- 2-scheme+hostname+port
   // user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// 1600's: default referrer fallback override? (FF52+?)
   // 0-no-referer 1-same-origin 2-strict-origin-when-cross-origin
   // 3-no-referrer-when-downgrade (default)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1304623
   // user_pref("network.http.referer.userControlPolicy", 3);
// 3000's: show system add-ons in about:addons (so you can enable/disable them) - NOT landed yet
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1231202
   // user_pref("extensions.hideSystemAddons", false); // (hidden pref)
// ^^ keep an eye on extensions.systemAddon* prefs
// dom.presentation.*
// privacy.userContext.* (Containers)
   // use a private container for thumbnail loads (FF51+)
   // user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
// browser.newtabpage.remote*
// user_pref("browser.formfill.expire_days", 1);
// user_pref("javascript.options.shared_memory", false);
// user_pref("plugin.disable_full_page_plugin_for_types", "application/pdf");
// network.http.enablePerElementReferrer
// history.length XSHM fix
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1315203
// sandbox levels (recommended to leave at what Firefox sets it to)
   // http://www.ghacks.net/2017/01/23/how-to-change-firefoxs-sandbox-security-level/
   // security.sandbox.content.level
***/

/**- APPENDIX
   A: GLOSSARY: 
   B: FIREFOX ADD-ONS: 
   C: TEST SITES: https://github.com/ghacksuserjs/ghacks-user.js/wiki/Appendix-C:-Test-Sites
***/

/**- APPENDIX B: FIREFOX ADD-ONS
   A massive thank you to all the developers and online communities who provide and maintain these.
   Sometimes preferences alone are not enough. Here is a list of some essential addons for security,
   privacy, and fingerprinting protection. This is not a debate, it's just a list covering JS, XSS,
   AdBlocking, cookies, DOM Storage, UTM, redirects, and other items. Some are global, others allow
   granular control. While I believe most of these are the very best of the best, this can be subjective
   depending on your needs. Some of these may become obsolete with upcoming FF changes (canvas,
   resource://URI), some of these are debatable (should we UA spoof?), some I'm still looking for
   a better solution, and some I do not use but they will suit a lot of users.
   NoScript                  https://addons.mozilla.org/en-US/firefox/addon/noscript/
   uBlock Origin             https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
   uMatrix                   https://addons.mozilla.org/en-US/firefox/addon/umatrix/
   *Cookie Controller        https://addons.mozilla.org/en-US/firefox/addon/cookie-controller/
   *Self-Destructing Cookies https://addons.mozilla.org/en-US/firefox/addon/self-destructing-cookies/
   HTTPS Everywhere          https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/
   CanvasBlocker             https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/
   No Resource URI Leak      https://addons.mozilla.org/en-US/firefox/addon/no-resource-uri-leak/
   Decentraleyes             https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/
   NoRedirect                https://addons.mozilla.org/en-US/firefox/addon/noredirect/
   UAControl                 https://addons.mozilla.org/en-US/firefox/addon/uacontrol/
   User-Agent JS Fixer       https://addons.mozilla.org/en-US/firefox/addon/user-agent-js-fixer/
   Popup Blocker Ultimate    https://addons.mozilla.org/en-US/firefox/addon/popup-blocker-ultimate/
   Pure URL                  https://addons.mozilla.org/en-US/firefox/addon/pure-url/
   **Google Privacy          https://addons.mozilla.org/en-US/firefox/addon/google-privacy/
   ***Quick Java             https://addons.mozilla.org/en-US/firefox/addon/quickjava/
   * Don't use both cookie add-ons
   ** Yes, I use google search sometimes (my choice). I have some global add-ons that address
       tracking in URLS, but am still looking for a working, comprehensible solution.
   *** It's not just Java! Covers JS, Cookies, Java, Flash... and more. Customisable controls and defaults
   NOTE: At the time of publication the following are not e10s compatible:
   Google Privacy, NoRedirect, UAControl, User-Agent JS Fixer, Popup Blocker Ultimate
***/

/*
 * ===============
 * END GHACKS CODE
 * ===============
*/

/*
 * ================================
 * BEGIN 12BYTES.ORG CUSTOMIZATIONS
 * ================================
*/

/*
 * === 12BYTES.ORG GHACKS DIFFS ===
 *    
 * these prefs are duplicates of the ghacks settings above, but ones which i set differently*
*/

user_pref("ghacks_user.js.parrot", "syntax error @ 12BYTES.ORG GHACKS DIFFS");

/*
 * i comment out the following preferences in the ghacks config because i prefer to use the default values - if you want to use the ghacks values, find (Ctrl+F) these preferences above and remove the leading double slashes ( // ):
 *
 * user_pref("general.buildID.override", "20100101");
 * user_pref("general.appname.override", "Netscape");
 * user_pref("general.appversion.override", "5.0 (Windows)");
 * user_pref("general.platform.override", "Win32");
 * user_pref("general.oscpu.override", "Windows NT 6.1");
 *
*/

user_pref("browser.bookmarks.max_backups", 5);                  // i don't mind keeping a few extra backups of my bookmarks
user_pref("browser.download.forbid_open_with", false);          // allow the 'open with' option when downloading a file
user_pref("browser.sessionstore.max_tabs_undo", 10);            // allow to restore some closed tabs
user_pref("browser.tabs.animate", true);                        // allow tab animation
user_pref("browser.urlbar.autoFill", true);                     // allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.autoFill.typed", true);               // ^
user_pref("browser.urlbar.autocomplete.enabled", true);         // ^
user_pref("browser.urlbar.suggest.history", true);              // ^
user_pref("dom.event.clipboardevents.enabled", true);           // 'false' breaks TinyMCE editor paste (Ctrl+V) such as is used by WordPress, possibly others
user_pref("dom.indexedDB.enabled", true);                       // as ghacks said, disabling this will break some sites
user_pref("dom.popup_allowed_events", "change click dblclick mouseup notificationclick reset submit touchend"); // allow all default JS pop-up events
user_pref("dom.popup_maximum", 5);                              // allow a couple extra JS pop-ups just in case a site, such as a store/shopping cart, needs them
user_pref("full-screen-api.enabled", true);                     // enable full-screen video capability
user_pref("layout.css.visited_links_enabled", true);            // though it is a privacy trade-off, differentiating between visited and not visited links is important to me  
user_pref("layout.spellcheckDefault", 2);                       // enable spell-check for single line inputs
user_pref("media.autoplay.enabled", true);                      // 'false' causes some videos to not play at all even after clicking the 'start' button, including 1st and 3rd party Vimeo videos, and may also necessitate having to click the play button twice in other instances
user_pref("media.ogg.enabled", true);                           // enable all media types
user_pref("media.ogg.flac.enabled", true);                      // ^
user_pref("media.opus.enabled", true);                          // ^
user_pref("media.raw.enabled", true);                           // ^
user_pref("media.wave.enabled", true);                          // ^
user_pref("network.cookie.cookieBehavior", 1);                  // allow all 1st party cookies by default and control them with uMatrix
user_pref("network.dnsCacheExpiration", 0);                     // i use other methods to cache DNS look-ups - you probably should comment this out if you don't
user_pref("privacy.clearOnShutdown.history", false);            // keep history on shutdown
user_pref("privacy.cpd.history", false);                        // don't select history item when clearing manually
user_pref("security.dialog_enable_delay", 700);                 // shorten the delay to enable buttons when prompted (like the 'ok' button when downloading a file)
user_pref("ui.submenuDelay", 150);                              // set the delay time in which a sub-menu appears when hovering over a main menu item that has a sub-menu

/*
 * === 12BYTES.ORG LINUX SPECIFIC ===
 * 
 * these settings are specific to Linux Mint, but should work with any Debian based distro which uses the APT (Advanced Package Tool) package manager
*/

user_pref("ghacks_user.js.parrot", "syntax error @ 12BYTES.ORG LINUX SPECIFIC");

user_pref("network.protocol-handler.app.apt", "/usr/bin/apturl");       // path to APT URL handler
user_pref("network.protocol-handler.app.apt+http", "/usr/bin/apturl");  // path to APT URL handler
user_pref("network.protocol-handler.warn-external.apt", true);
user_pref("network.protocol-handler.warn-external.apt+http", true);

/*
 * === 12BYTES.ORG TABS ===
 * 
 * my personal settings for tabs - some are different from ghacks settings and some are duplicates just because i like having them all in one section
*/

user_pref("ghacks_user.js.parrot", "syntax error @ 12BYTES.ORG TABS");

user_pref("accessibility.tabfocus", 3);                         // 3: Tab key focuses text fields and all other form elements
user_pref("browser.newtab.url", "");                            // "about:blank"=show a completely blank tab when opening new tabs
user_pref("browser.link.open_newwindow", 1);                    // controls when a new window/tab should be opened - 1=open links that open in a new window in the current tab, 2=open links that open in a new window in a new window, 3=open links that open in a new window in a new tab in the current window
user_pref("browser.link.open_newwindow.restriction", 0);        // controls when a new window/tab should be opened - 0=divert all links according to browser.link.open_newwindow, 1=do not divert any links, 2=divert all links according to browser.link.open_newwindow, unless the new window specifies how it should be displayed
user_pref("browser.link.open_newwindow.override.external", 3);  // open links from external programs in: -1=default, 1=the current tab, 2=a new window, 3=a new tab
user_pref("browser.newtab.preload", false);                     // whether to preload new tab content - dependent upon browser.newtab.url
//user_pref("browser.newtabpage.directory.ping", "");
//user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.enabled", false);                 // don't use the default Firefox new tab page
user_pref("browser.newtabpage.enhanced", false);                // whether to display marketing junk on new tabs - dependent upon browser.newtab.url
user_pref("browser.newtabpage.introShown", true);               // remove this annoyance
user_pref("browser.sessionhistory.max_entries", 5);             // tab specific max number of pages that can be traversed when moving forward/backward in history - affects total memory consumption
user_pref("browser.tabs.closeWindowWithLastTab", false);        // whether to exit FF when closing last tab
user_pref("browser.tabs.loadDivertedInBackground", true);       // cause links opened from external programs to open in a new background tab
user_pref("browser.tabs.loadInBackground", false);              // focus new tabs instead of loading them in the background
user_pref("browser.tabs.selectOwnerOnClose", true);             // focus the parent tab when a child tab is closed
user_pref("browser.tabs.warnOnClose", false);                   // disable warning when closing multiple tabs
user_pref("browser.tabs.warnOnCloseOtherTabs", false);          // disable warning when closing other tabs
user_pref("browser.tabs.warnOnOpen", false);                    // disable warning when opening too many tabs

/*
 * === 12BYTES.ORG SMOOTH SCROLLING ===
 * 
 * these settings provide silky-smooth scrolling that adjusts dynamically according to mouse wheel speed
*/

user_pref("ghacks_user.js.parrot", "syntax error @ 12BYTES.ORG SMOOTH SCROLLING");

user_pref("general.smoothScroll", true);                            // enable/disable smooth scrolling
user_pref("general.smoothScroll.lines", true);                      // enable/disable smooth line scrolling (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMaxMS", 400);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMinMS", 200);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.mouseWheel", true);                 // enable/disable smooth scrolling with mouse wheel
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 400);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.other", true);                      // enable/disable other smooth scrolling (Home/End keys)
user_pref("general.smoothScroll.other.durationMaxMS", 400);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.other.durationMinMS", 200);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.pages", true);                      // enable/disable page smooth scrolling (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMaxMS", 400);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMinMS", 200);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("mousewheel.acceleration.factor", 10);                    // sets acceleration factor if mouse wheel.acceleration.start > -1
user_pref("mousewheel.acceleration.start", 0);                      // when to apply mouse wheel.acceleration.factor (after how many scroll clicks of mouse wheel) - value must be greater than -1
user_pref("mousewheel.default.delta_multiplier_y", 85);             // sets the vertical step size
//user_pref("mousewheel.min_line_scroll_amount", 1);                // how many lines to scroll with mouse wheel (approx.) - doesn't seem to have any affect

/*
 * === 12BYTES.ORG MISC ===
*/

user_pref("ghacks_user.js.parrot", "syntax error @ 12BYTES.ORG MISC");

user_pref("accessibility.typeaheadfind", false);                    // whether to open the find bar to search for text as soon as you start typing
user_pref("browser.feeds.showFirstRunUI", false);                   // don't show feed intro when first subscribing to a news feed
user_pref("browser.fullscreen.animateUp", 0);                       // whether to animate window when entering full-screen view - 0=no toolbar/tab strip animation, 1=animates only first collapse, 2=qnimates each collapse
user_pref("browser.startup.homepage", "http://12bytes.org/");       // page to display when clicking the Home button
user_pref("browser.startup.page", 3);                               // page to display on startup - 1=home, 2=blank, 3=restore last session
user_pref("browser.triple_click_selects_paragraph", false);         // whether to select paragraphs when triple clicked
user_pref("full-screen-api.warning.delay", 0);                      // how long to display a warning ("YouTube is now Fullscreen") when a site enters full-screen mode - '0' disables the warning
user_pref("general.autoScroll", false);                             // Whether to enable auto-scrolling (middle-click on a page to display scroll map)
user_pref("layout.word_select.eat_space_to_next_word", false);      // whether to include spaces after a word when double clicking to select the word
user_pref("layout.word_select.stop_at_punctuation", true);          // whether to stop selection at a punctuation when double clicking to select a word
user_pref("mousewheel.with_shift.action", 0);                       // controls what happens when the Shift key is pressed and the mouse wheel is scrolled
user_pref("nglayout.enable_drag_images", false);                    // whether images can be dragged - also seems to have an effect on highlighting and dragging text - this feature can be very annoying, especially for website editors/admins
user_pref("devtools.toolbox.zoomValue", "1.3");                     // font size for the Developers Toolbox

/*
 * following is the preference you want to check in 'about:config' (ghacks_user.js.parrot) - the value will be '12bytes.org settings loaded' if everything loaded correctly
*/

user_pref("ghacks_user.js.parrot", "12bytes.org settings loaded");

/*
 * ==============================
 * END 12BYTES.ORG CUSTOMIZATIONS
 * ==============================
*/
