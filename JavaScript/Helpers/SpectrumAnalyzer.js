var SpectrumMaxExponent = 5
var SpectrumMinExponent = 3

var SpectrumStart = 0
var SpectrumEnd = 1024
var SpectrumLogScale = 2.5 //2.78

var SmoothingConstant = 0 //0.75
var FFTSize = 16384 //16384/2

function SpectrumEase(Value) {
  return Math.pow(Value, SpectrumLogScale)
}

function GetVisualBins(Array) {
  var SamplePoints = []
  var NewArray = []
  var LastSpot = 0
  for (var i = 0; i < SpectrumBarCount; i++) {
    var Bin = Math.round(SpectrumEase(i / SpectrumBarCount) * (SpectrumEnd - SpectrumStart) + SpectrumStart)
    if (Bin <= LastSpot) {
      Bin = LastSpot + 1
    }
    LastSpot = Bin
    SamplePoints[i] = Bin
  }

  var MaxSamplePoints = []
  for (var i = 0; i < SpectrumBarCount; i++) {
    var LastRawSpot = SamplePoints[i - 1]
    var CurRawSpot = SamplePoints[i]
    var NextRawSpot = SamplePoints[i + 1]
    if (LastRawSpot == null) {
      LastRawSpot = SpectrumStart
    }
    if (NextRawSpot == null) {
      NextRawSpot = SpectrumEnd
    }
    var CurSpot = CurRawSpot//Math.round(LastRawSpot + (CurRawSpot - LastRawSpot) * 0.5)
    var NextSpot = NextRawSpot//Math.round(CurRawSpot + (NextRawSpot - CurRawSpot) * 0.5)

    var CurMax = Array[CurSpot]
    var Dif = NextSpot - CurSpot
    for (var j = 1; j < Dif; j++) {
      var NewSpot = CurSpot + j
      if (Array[NewSpot] > CurMax) {
        CurMax = Array[NewSpot]
      }
      //CurMax = (CurMax + Array[NewSpot])/2
    }
    NewArray[i] = CurMax
  }

  return NewArray 
}

var SpectrumHeight = 255
function ExponentialTransform(Array) {
    var NewArray = []
    for (var i = 0; i < Array.length; i++) {
        var Exp = SpectrumMaxExponent + (SpectrumMinExponent - SpectrumMaxExponent) * (i/Array.length)
        NewArray[i] = Math.max(Math.pow(Array[i] / SpectrumHeight, Exp) * SpectrumHeight, 1)
    }
    return NewArray
}

function MainTransform(Array) {
  for (var i = 0; i < Array.length; i++) {
    var ArrayValue = Array[i]
    for (var j = 0; j < Array.length; j++) {
      Dif = Math.abs(i - j)
      ValueToCompare = (ArrayValue/Math.pow(1.5,Dif))
      Array[j] = Math.max(Array[j],ValueToCompare)
    }
  }
  
  return Array
}

function GetBarData(Array) {
  Array = GetVisualBins(Array)
  var NewArray = ExponentialTransform(Array)
  NewArray = MainTransform(NewArray)

  return [Array,NewArray]
}