//shape tools
import {fabric} from "fabric";

export const DEFAULT_FILL_COLOR = '#171719'
export const DEFAULT_STROKE_COLOR = '#ffffff'
export const DEFAULT_STROKE_WIDTH = 2

export const addRectAngle = (editor) => {
    let rect = new fabric.Rect({
        width: 70,
        height: 80,
        stroke: DEFAULT_STROKE_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH,
        fill: DEFAULT_FILL_COLOR
    });
    editor.canvas.add(rect)
    editor.canvas.centerObject(rect);
    editor.canvas.bringToFront(rect);
}

export const addCircle = (editor) => {
    let circle = new fabric.Circle({
        radius: 40,
        fill: DEFAULT_FILL_COLOR,
        stroke: DEFAULT_STROKE_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH,
    });

    editor.canvas.add(circle)
    editor.canvas.centerObject(circle);
    editor.canvas.bringToFront(circle)
}
export const addTriangle = (editor) => {
    let triangle = new fabric.Triangle({
        width: 200,
        height: 100,
        fill: DEFAULT_FILL_COLOR,
        stroke: DEFAULT_STROKE_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH
    });
    editor.canvas.add(triangle)
    editor.canvas.centerObject(triangle);
    editor.canvas.bringToFront(triangle)

}
export const addEllipse = (editor) => {
    let ellipse = new fabric.Ellipse({
        rx: 80,
        ry: 40,
        fill: DEFAULT_FILL_COLOR,
        stroke: DEFAULT_STROKE_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH
    });
    editor.canvas.add(ellipse)
    editor.canvas.centerObject(ellipse);
    editor.canvas.bringToFront(ellipse)
}
export const addPolygon = (editor) => {
    let trapezoid = [{x: -100, y: -50}, {x: 100, y: -50}, {x: 150, y: 50}, {x: -150, y: 50}];
    let emerald = [{x: 850, y: 75},
        {x: 958, y: 137.5},
        {x: 958, y: 262.5},
        {x: 850, y: 325},
        {x: 742, y: 262.5},
        {x: 742, y: 137.5},
    ];
    let star4 = [
        {x: 0, y: 0},
        {x: 100, y: 50},
        {x: 200, y: 0},
        {x: 150, y: 100},
        {x: 200, y: 200},
        {x: 100, y: 150},
        {x: 0, y: 200},
        {x: 50, y: 100},
        {x: 0, y: 0}
    ];
    let star5 = [{x: 350, y: 75},
        {x: 380, y: 160},
        {x: 470, y: 160},
        {x: 400, y: 215},
        {x: 423, y: 301},
        {x: 350, y: 250},
        {x: 277, y: 301},
        {x: 303, y: 215},
        {x: 231, y: 161},
        {x: 321, y: 161},];
    let size = 150;
    let side = Math.round((size * Math.sqrt(2)) / (2 + Math.sqrt(2)));
    let star6=[
        {x:-side / 2, y:size / 2},
        {x:side / 2, y:size / 2},
        {x:size / 2, y:side / 2},
        {x:size / 2, y:-side / 2},
        {x:side / 2, y:-size / 2},
        {x:-side / 2, y:-size / 2},
        {x:-size / 2, y:-side / 2},
        {x:-size / 2, y:side / 2}];

    let shape = new Array(trapezoid, emerald, star4, star5);

    let polyg = new fabric.Polygon(star6, {
        fill: DEFAULT_FILL_COLOR,
        stroke: DEFAULT_STROKE_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH
    });

    editor.canvas.add(polyg);
    editor.canvas.centerObject(polyg);
    editor.canvas.bringToFront(polyg)
}
const starPolygonPoints = (spikeCount, outerRadius, innerRadius) => {
    let rot = Math.PI / 2 * 3;
    let cx = outerRadius;
    let cy = outerRadius;
    let sweep = Math.PI / spikeCount;
    let points = [];
    let angle = 0;

    for (let i = 0; i < spikeCount; i++) {
        let x = cx + Math.cos(angle) * outerRadius;
        let y = cy + Math.sin(angle) * outerRadius;
        points.push({x: x, y: y});
        angle += sweep;

        x = cx + Math.cos(angle) * innerRadius;
        y = cy + Math.sin(angle) * innerRadius;
        points.push({x: x, y: y});
        angle += sweep
    }
    return (points);
}
export const addStar = (editor) => {
    let points = starPolygonPoints(5, 50, 25);
    let star = new fabric.Polygon(points, {
        fill: DEFAULT_FILL_COLOR,
        stroke: DEFAULT_STROKE_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH
    }, false);
    editor.canvas.add(star)
    editor.canvas.centerObject(star);
    editor.canvas.bringToFront(star)
}