import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
import { useState, useEffect } from 'react';
import styles from "./scanner.module.css";

const Scanner = (props) => {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
            rememberLastUsedCamera: true,
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result);
            props.onScanSuccess();
        }

        function error(error) {
            console.warn(error);
        }
    }, []);

    return (
        <>
            <div id="reader" className={styles.scanner}>

            </div>
            {scanResult && (
                <div>Wait. Vending...</div>
            )
            }
        </>
    )
}

export default Scanner