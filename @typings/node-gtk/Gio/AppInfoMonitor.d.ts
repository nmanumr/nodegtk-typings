/**
  * Gio.AppInfoMonitor is a very simple object used for monitoring the app
info database for changes (ie: newly installed or removed
applications). 
  */
export declare class AppInfoMonitor extends import('../GObject').Object{
/**
  * Gets the Gio.AppInfoMonitor for the current thread-default main context.
  * @returns a reference to a Gio.AppInfoMonitor 
  */
static get(): import('../Gio').AppInfoMonitor;
;
}

