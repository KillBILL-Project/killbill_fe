declare module 'react-native-config' {
  export interface NativeConfig {
    GOOGLE_WEB_CLIENT_ID?: string;
    GOOGLE_IOS_CLIENT_ID?: string;
    API_URL: string;
    IOS_AD_REPORT_DETAIL: string;
    ANDROID_AD_REPORT_DETAIL: string;
    IOS_AD_EMPTY_TRASH: string;
    ANDROID_AD_EMPTY_TRASH: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
