class Circle {
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
class Polygon {
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
class Line {
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

exports.Circle = Circle;
exports.Polygon = Polygon;
exports.Vector = Vector;
exports.Line = Line;
