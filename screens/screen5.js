import React, { Component } from 'react';
import { Button, Text, View, Vibration } from 'react-native';
import { RNCamera } from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';

class Screen5 extends Component {

  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      camera: {
          type: RNCamera.Constants.Type.back,
	        flashMode: RNCamera.Constants.FlashMode.auto,
	        barcodeFinderVisible: true
      },
      scannedBarcode: undefined,
    };
  }

  onBarCodeRead = (scanResult)=> {
    Vibration.vibrate(800);
    console.warn("sacnResult.type", scanResult.type);
    console.warn("scanresult",scanResult.data);
    if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        this.setState({
          scannedBarcode: scanResult.data,
        })
        this.barcodeCodes.push(scanResult.data);        
      }
      Vibration.cancel();
    }
    return;
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Waiting</Text>
      </View>
    );
  }

  render() {

    const {scannedBarcode} = this.state;

    return (
      <View style={styles.container}>
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                barcodeFinderVisible={this.state.camera.barcodeFinderVisible}
                barcodeFinderWidth={280}
                barcodeFinderHeight={220}
                barcodeFinderBorderColor="white"
                barcodeFinderBorderWidth={2}
                defaultTouchToFocus
                flashMode={this.state.camera.flashMode}
                mirrorImage={false}
                onBarCodeRead={this.onBarCodeRead.bind(this)}
                onFocusChanged={() => {}}
                onZoomChanged={() => {}}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
                style={styles.preview}
                type={this.state.camera.type}
            />
            <View style={[styles.overlay, styles.topOverlay]}>
              <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
            </View>
        {
          scannedBarcode && 

          <View style={styles.resultContainer}>          
              <View style={{width: 300, height: 300, borderColor: "black", borderWidth: 2, backgroundColor: "#fff",
              alignContent: 'center', justifyContent: 'center', textAlign: 'center', marginLeft: 5, padding: 10
                }}>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>*Humira (Adalimumab)*</Text>
              <View style={{justifyContent: 'center'}}>
                <Text>Inject the contents of one syringe subcutaneously as directed every two weeks.</Text>
                <Text>Refills: 3</Text>
              </View>
                  <Text style={{fontWeight: 'bold', marginTop: 20, }}>BARCODE-  {scannedBarcode}</Text>
              </View>
          
          </View>
        }
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "transparent",
    justifyContent: 'center',
    borderRadius: 20,
  }
};
export default Screen5;