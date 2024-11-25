import { DOMWindow, JSDOM } from 'jsdom';

interface UnknownObject {
    [key: string]: any;
}
type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded";
type CornerDotType = "dot" | "square";
type CornerSquareType = "dot" | "square" | "extra-rounded";
type FileExtension = "svg" | "png" | "jpeg" | "webp";
type GradientType = "radial" | "linear";
type DrawType = "canvas" | "svg";
type ShapeType = "square" | "circle";
type Window = DOMWindow;
type Gradient = {
    type: GradientType;
    rotation?: number;
    colorStops: {
        offset: number;
        color: string;
    }[];
};
interface DotTypes {
    [key: string]: DotType;
}
interface GradientTypes {
    [key: string]: GradientType;
}
interface CornerDotTypes {
    [key: string]: CornerDotType;
}
interface CornerSquareTypes {
    [key: string]: CornerSquareType;
}
interface DrawTypes {
    [key: string]: DrawType;
}
interface ShapeTypes {
    [key: string]: ShapeType;
}
type TypeNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
type Mode = "Numeric" | "Alphanumeric" | "Byte" | "Kanji";
interface QRCode {
    addData(data: string, mode?: Mode): void;
    make(): void;
    getModuleCount(): number;
    isDark(row: number, col: number): boolean;
    createImgTag(cellSize?: number, margin?: number): string;
    createSvgTag(cellSize?: number, margin?: number): string;
    createSvgTag(opts?: {
        cellSize?: number;
        margin?: number;
        scalable?: boolean;
    }): string;
    createDataURL(cellSize?: number, margin?: number): string;
    createTableTag(cellSize?: number, margin?: number): string;
    createASCII(cellSize?: number, margin?: number): string;
    renderTo2dContext(context: CanvasRenderingContext2D, cellSize?: number): void;
}
type Options = {
    type?: DrawType;
    shape?: ShapeType;
    width?: number;
    height?: number;
    margin?: number;
    data?: string;
    image?: string;
    nodeCanvas?: any;
    jsdom?: typeof JSDOM;
    qrOptions?: {
        typeNumber?: TypeNumber;
        mode?: Mode;
        errorCorrectionLevel?: ErrorCorrectionLevel;
    };
    imageOptions?: {
        saveAsBlob?: boolean;
        hideBackgroundDots?: boolean;
        imageSize?: number;
        crossOrigin?: string;
        margin?: number;
    };
    dotsOptions?: {
        type?: DotType;
        color?: string;
        gradient?: Gradient;
        roundSize?: boolean;
    };
    cornersSquareOptions?: {
        type?: CornerSquareType;
        color?: string;
        gradient?: Gradient;
    };
    cornersDotOptions?: {
        type?: CornerDotType;
        color?: string;
        gradient?: Gradient;
    };
    backgroundOptions?: {
        round?: number;
        color?: string;
        gradient?: Gradient;
    };
};
type FilterFunction = (row: number, col: number) => boolean;
type DownloadOptions = {
    name?: string;
    extension?: FileExtension;
};
type DrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
    getNeighbor?: GetNeighbor;
};
type BasicFigureDrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
};
type RotateFigureArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
    draw: () => void;
};
type GetNeighbor = (x: number, y: number) => boolean;
type ExtensionFunction = (svg: SVGElement, options: Options) => void;

export type { BasicFigureDrawArgs, CornerDotType, CornerDotTypes, CornerSquareType, CornerSquareTypes, DotType, DotTypes, DownloadOptions, DrawArgs, DrawType, DrawTypes, ErrorCorrectionLevel, ExtensionFunction, FileExtension, FilterFunction, GetNeighbor, Gradient, GradientType, GradientTypes, Mode, Options, QRCode, RotateFigureArgs, ShapeType, ShapeTypes, TypeNumber, UnknownObject, Window };
