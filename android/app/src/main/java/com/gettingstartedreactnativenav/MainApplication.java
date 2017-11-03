package com.gettingstartedreactnativenav;

import android.app.Application;
import android.support.annotation.Nullable;

//import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.BV.LinearGradient.LinearGradientPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.airbnb.android.react.lottie.LottiePackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

//  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
//    @Override
//    public boolean getUseDeveloperSupport() {
//      return BuildConfig.DEBUG;
//    }

//    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new LinearGradientPackage(),
          new RCTCameraPackage(),
          new LottiePackage()
      );
    }

//    @Override
//    protected String getJSMainModuleName() {
//      return "index";
//    }
//  };
//
//  @Override
//  public ReactNativeHost getReactNativeHost() {
//    return mReactNativeHost;
//  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  @Override
  public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      return getPackages();
    }

  @Override
  public String getJSMainModuleName() {
    return "index";
  }
}
