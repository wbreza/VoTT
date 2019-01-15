import os from "os";

/**
 * @name - Host OS
 * @description - Describes the host OS
 * @member type - The type of the host OS (Windows, Linux, Mac)
 * @member release - The release string of the host os
 */
export interface IHostOs {
    type: HostOsType;
    release: string;
}

/**
 * @enum WINDOWS - Electron Host Process Type
 * @enum LINUX - Browser Host Process Type
 * @enum MAC - Browser Host Process Type
 */
export enum HostOsType {
    Windows = 1, // bits: 01
    Linux = 2,  // bits: 10
    Mac = 3,      // bits: 11
    All = 4,    // bits: 100
}

function getHostOs(): IHostOs {
    const osRelease = os.release().toLowerCase();
    let hostOsType: HostOsType;
    if (osRelease.indexOf("windows") > -1) {
        hostOsType = HostOsType.Windows;
    } else if (osRelease.indexOf("linux") > -1) {
        hostOsType = HostOsType.Linux;
    } else if (osRelease.indexOf("mac") > -1) {
        hostOsType = HostOsType.Mac;
    }

    return {
        release: osRelease,
        type: hostOsType,
    };
}

export default getHostOs;
