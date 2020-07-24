enum datasetType {
    //% block="historical"
    historical,
    //% block="current"
    current
}

enum ML {
    //% block="supervised"
    supervised,
    //% block="unsupervised"
    unsupervised,
    //% block="semi-supervised"
    semiSupervised,
    //% block="reinforcment"
    reinforcment
}

enum actionML {
    //% block="classify"
    classify,
    //% block="get prediction"
    getPrediction
}

//% color="#4C97FF"
namespace datasets {


    //% block="%type| dataset"
    export function onEvent(type: datasetType, handler: () => void) {
    /*Random Code*/
    }

    //% block="gather data"
    export function data1() {
    /*Random Code*/
    }

    //% block="upload data"
    export function data2() {
    /*Random Code*/
    }

    //% block="label data"
    export function data3() {
    /*Random Code*/
    }
}

//% color="#8332A8"
namespace AI {

    //% block="%type| machine learning"
    export function onEvent(type: ML, handler: () => void) {
    /*Random Code*/
    }

    //% block="%type| machine learning algorithm with %datatype| dataset"
    export function onEvent2(type: ML, datatype: datasetType, handler: () => void) {
    /*Random Code*/
    }

    //% block="compare %dataset| against %dataset|"
    export function compare(dataset: datasetType, datasetType1: datasetType) {

    }

    //% block="find pattern and %MLaction|"
    export function action(MLaction: actionML) {
    /*Random Code*/
    }

    //% block="set goal %value|"
    export function goal(value: number) {
    /*Random Code*/
    }

}