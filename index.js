class Circle {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
	}
	intersects(other) {
		if (other instanceof Circle) {
			let x = this.x - other.x;
			let y = this.y - other.y;
			return x * x + y * y < this.radius + other.radius;
		} else if (other instanceof Polygon) {

		} else if (other instanceof Vector) {
			let x = this.x - other.x;
			let y = this.y - other.y;
			return x * x + y * y < this.radius;
		} else if (other instanceof Line) {

		} else {
			throw new TypeError("Cannot find intersection with an external (and thus unsupported) object.")
		}
	}
};
class Polygon {
	constructor() {
	}
	
	intersects(other) {
		if (other instanceof Circle) {

		} else if (other instanceof Polygon) {

		} else if (other instanceof Vector) {

		} else if (other instanceof Line) {

		} else {
			throw new TypeError("Cannot find intersection with an external (and thus unsupported) object.")
		}
	}
};
class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	intersects(other) {
		if (other instanceof Circle) {
			let x = this.x - other.x;
			let y = this.y - other.y;
			return x * x + y * y < other.radius;
		} else if (other instanceof Polygon) {

		} else if (other instanceof Vector) {
      return this.x === other.x && this.y === other.y;
		} else if (other instanceof Line) {

		} else {
			throw new TypeError("Cannot find intersection with an external (and thus unsupported) object.")
		}
	}
};
class Line {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
	
	intersects(other) {
		if (other instanceof Circle) {

		} else if (other instanceof Polygon) {

		} else if (other instanceof Vector) {

		} else if (other instanceof Line) {
			let a = this.start.x;
			let b = this.start.y;
			let c = this.end.x;
			let d = this.end.y;
			let p = other.start.x;
			let q = other.start.y;
			let r = other.end.x;
			let s = other.end.y;
			let det = (c - a) * (s - q) - (r - p) * (d - b);
			if (det === 0)
				return false;
			let lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
			let gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
			return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
		} else {
			throw new TypeError("Cannot find intersection with an external (and thus unsupported) object.")
		}
	}
};

exports.Circle = Circle;
exports.Polygon = Polygon;
exports.Vector = Vector;
exports.Line = Line;
