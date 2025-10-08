declare module '@canvasjs/react-charts' {
    interface CanvasJSChartOptions {
        // Add properties as needed
    }

    interface CanvasJSChart {
        render(): void;
    }

    interface CanvasJSReact {
        CanvasJSChart: React.ComponentType<{ options: CanvasJSChartOptions }>;
    }

    const CanvasJSReact: CanvasJSReact;
    export default CanvasJSReact;
}