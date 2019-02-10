package com.xdhacks;

import com.fetchsky.RNTextDetector.RNTextDetectorPackage;
import android.app.Application;

import com.facebook.react.ReactApplication;
import com.BV.LinearGradient.LinearGradientPackage;
import com.vinzscam.reactnativefileviewer.RNFileViewerPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.fetchsky.RNTextDetector.RNTextDetectorPackage;
import org.reactnative.camera.RNCameraPackage;
import com.terrylinla.rnsketchcanvas.SketchCanvasPackage;
import fr.snapp.imagebase64.RNImgToBase64Package;
import com.christopherdro.htmltopdf.RNHTMLtoPDFPackage;
import com.hopding.pdflib.PDFLibPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new LinearGradientPackage(),
            new RNFileViewerPackage(),
            new LottiePackage(),
            new RNTextDetectorPackage(),
            new RNCameraPackage(),
            new SketchCanvasPackage(),
            new RNImgToBase64Package(),
            new RNHTMLtoPDFPackage(),
            new PDFLibPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
