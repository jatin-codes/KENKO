package com.xdhacks;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.vinzscam.reactnativefileviewer.RNFileViewerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.keyee.pdfview.PDFView;
import com.hopding.pdflib.PDFLibPackage;
import org.wonday.pdf.RCTPdfView;
import fr.snapp.imagebase64.RNImgToBase64Package;
import com.christopherdro.htmltopdf.RNHTMLtoPDFPackage;
import com.terrylinla.rnsketchcanvas.SketchCanvasPackage;
import org.wonday.pdf.RCTPdfView;
import com.keyee.pdfview.PDFView;
import com.RNFetchBlob.RNFetchBlobPackage;
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
            new RNFileViewerPackage(),
            new RCTPdfView(),
            new PDFView(),
            new RNFetchBlobPackage(),
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
