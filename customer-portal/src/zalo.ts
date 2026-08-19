// Declare Zalo global types
declare global {
  interface Window {
    ZaloSDK?: any;
  }
}

export const ZaloSDK = {
  // Check if running in Zalo MiniApp
  isZaloApp: (): boolean => {
    if (typeof window === 'undefined') return false;
    return !!window.ZaloSDK || /zalo|zalopay/i.test(navigator.userAgent);
  },

  // Initialize Zalo SDK
  init: async (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve(false);
        return;
      }

      // Check if already initialized
      if (window.ZaloSDK) {
        resolve(true);
        return;
      }

      // Wait for SDK to load (it's loaded via script tag)
      const checkSDK = setInterval(() => {
        if (window.ZaloSDK) {
          clearInterval(checkSDK);

          // Initialize Zalo MiniApp
          if (window.ZaloSDK.init) {
            window.ZaloSDK.init({
              appId: 'YOUR_APP_ID', // Will be replaced in production
              mode: 'production'
            }, (err: any) => {
              if (err) {
                console.warn('Zalo SDK init error:', err);
              }
              resolve(true);
            });
          } else {
            resolve(true);
          }
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkSDK);
        resolve(false);
      }, 5000);
    });
  },

  // Get user info from Zalo
  getMe: async (): Promise<any> => {
    if (!window.ZaloSDK?.getMe) {
      console.warn('ZaloSDK.getMe not available');
      return null;
    }

    return new Promise((resolve, reject) => {
      window.ZaloSDK.getMe((err: any, data: any) => {
        if (err) {
          console.error('Error getting user info:', err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  // Get device info
  getDeviceInfo: (): any => {
    if (!window.ZaloSDK?.getDeviceInfo) {
      return null;
    }
    return window.ZaloSDK.getDeviceInfo();
  },

  // Get app config
  getAppConfig: (): any => {
    if (!window.ZaloSDK?.getAppConfig) {
      return null;
    }
    return window.ZaloSDK.getAppConfig();
  },

  // Post to user's friend or group
  sendMessage: async (data: any): Promise<any> => {
    if (!window.ZaloSDK?.send) {
      return Promise.reject('ZaloSDK.send not available');
    }

    return new Promise((resolve, reject) => {
      window.ZaloSDK.send(data, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  // Share to feed
  shareToFeed: async (data: any): Promise<any> => {
    if (!window.ZaloSDK?.feed?.share) {
      return Promise.reject('ZaloSDK feed.share not available');
    }

    return new Promise((resolve, reject) => {
      window.ZaloSDK.feed.share(data, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  // Navigate back
  navigateBack: (): void => {
    if (window.ZaloSDK?.navigation?.navigateBack) {
      window.ZaloSDK.navigation.navigateBack();
    } else {
      window.history.back();
    }
  },

  // Log event for analytics
  logEvent: (eventName: string, data?: any): void => {
    if (window.ZaloSDK?.log?.logEvent) {
      window.ZaloSDK.log.logEvent(eventName, data || {});
    }
  },

  // Request location
  getLocation: async (): Promise<any> => {
    if (!window.ZaloSDK?.requestLocation) {
      return Promise.reject('Location not available');
    }

    return new Promise((resolve, reject) => {
      window.ZaloSDK.requestLocation((err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  // Request QR code scanner
  scanQRCode: async (): Promise<string> => {
    if (!window.ZaloSDK?.scanQR) {
      return Promise.reject('QR scanner not available');
    }

    return new Promise((resolve, reject) => {
      window.ZaloSDK.scanQR((err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result?.data || result);
        }
      });
    });
  },

  // Check if has permission
  hasPermission: async (permission: string): Promise<boolean> => {
    if (!window.ZaloSDK?.permission?.hasPermission) {
      return false;
    }

    return new Promise((resolve) => {
      window.ZaloSDK.permission.hasPermission(permission, (result: any) => {
        resolve(!!result);
      });
    });
  },

  // Request permission
  requestPermission: async (permission: string): Promise<boolean> => {
    if (!window.ZaloSDK?.permission?.requestPermission) {
      return false;
    }

    return new Promise((resolve) => {
      window.ZaloSDK.permission.requestPermission(permission, (result: any) => {
        resolve(!!result);
      });
    });
  }
};
