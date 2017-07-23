/// <reference types="node" />
declare class Chromy {
    constructor(options?: {
        [key: string]: string;
    });
    static addCustomDevice(cusDevices?: any[]): void;
    start(startingUrl?: any): Promise<void>;
    close(): Promise<boolean>;
    static cleanup(): Promise<void>;
    getPageTargets(): Promise<any>;
    userAgent(ua: any): Promise<any>;
    headers(headers: any): Promise<any>;
    console(callback: any): Promise<void>;
    receiveMessage(callback: any): Promise<void>;
    goto(url: any, options?: any): Promise<void>;
    waitLoadEvent(): Promise<void>;
    forward(): Promise<void>;
    back(): Promise<void>;
    reload(ignoreCache: any, scriptToEvaluateOnLoad: any): Promise<void>;
    defineFunction(def: any): Promise<void>;
    /**
     * 入力する。
     * @param expr 
     * @param value 
     */
    type(expr: any, value: any): Promise<void>;
    mouseMoved(x: any, y: any, options?: {}): Promise<void>;
    mousePressed(x: any, y: any, options?: {}): Promise<void>;
    mouseReleased(x: any, y: any, options?: {}): Promise<void>;
    tap(x: any, y: any, options?: {}): Promise<void>;
    doubleTap(x: any, y: any, options?: {}): Promise<void>;
    setFile(selector: any, files: any): Promise<void>;
    screenshot(format?: string, quality?: any, fromSurface?: boolean): Promise<Buffer>;
    screenshotDocument(model?: string, format?: string, quality?: any, fromSurface?: boolean): Promise<any>;
    screenshotSelector(selector: any, format?: string, quality?: any, fromSurface?: boolean): Promise<any>;
    screenshotMultipleSelectors(selectors: any, callback: any, options?: {}): Promise<void>;
    pdf(options?: {}): Promise<Buffer>;
    startScreencast(callback: any, options?: {}): Promise<void>;
    stopScreencast(): Promise<void>;
    requestWillBeSent(callback: any): Promise<void>;
    on(event: any, callback: any): Promise<void>;
    once(event: any, callback: any): Promise<void>;
    removeListener(event: any, callback: any): Promise<void>;
    removeAllListeners(event: any): Promise<void>;
    inject(type: any, file: any): Promise<any>;
    emulate(deviceName: any): Promise<void>;
    clearEmulate(): Promise<void>;
    blockUrls(urls: any): Promise<void>;
    clearBrowserCache(): Promise<void>;
    setCookie(params: any): Promise<void>;
    deleteCookie(name: any, url?: any): Promise<void>;
    clearAllCookies(): Promise<void>;
    getDOMCounters(): Promise<any>;
    clearDataForOrigin(origin?: any, type?: string): Promise<any>;
    evaluate<T>(fnc: () => T): Promise<T>;
    iframe(selector: string, callback: Function): Promise<any>;
    click(expr: string, inputOptions?: {
        [key: string]: any;
    }): Promise<void>;
    insert(expr: string, value: any): Promise<void>;
    check(selector: string): Promise<void>;
    uncheck(selector: string): Promise<void>;
    select(selector: string, value: any): Promise<void>;
    scroll(x: number, y: number): Promise<any>;
    scrollTo(x: number, y: number): Promise<any>;
    getPageOffset(): Promise<{
        x: number;
        y: number;
    }>;
    exists(selector: string): Promise<any>;
    visible(selector: string): Promise<any>;
    wait(cond: number | string | Function): Promise<void>;
    sleep(msec: number): Promise<void>;
    getBoundingClientRect(selector: string): Promise<{
        top: number;
        left: number;
        width: number;
        height: number;
    }>;
    getBoundingClientRectAll(selector: string): Promise<{
        top: number;
        left: number;
        width: number;
        height: number;
    }>;
}

declare namespace Chromy {

}

declare module 'chromy' {
    export = Chromy;
}    
